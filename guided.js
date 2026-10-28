'use strict';
/* ================================================================
   GUIDED PATH: progress tracking, mastery, spaced review, and the delayed content reviews.
   Ported from the Guided Path of Ars Logica (index.html, the GP block), with the same standards:
     pass     = 9 of the last 10 answers correct at Level III or above, across 2 different days;
                Levels IV and V of an exercise open only after its pass;
     mastered = 8 of the last 10 answers correct at Level V, across 2 different days (★);
     review   = a mastered set returns after 1, 3, 7, 16, then 35 days (five boxes), 3 questions each;
                all right moves it up a box, any miss sends it back to box 1, and the level rises with the box.
   Exercises open in order through PREREQS (built from TIERS below). Reviews never gate: a miss in review
   lapses the set to box 1 but never relocks anything, since gating uses "ever passed."
   Free Practice neither reads nor writes any of this. The course's own record (ars-rhetorica-progress)
   is left exactly as it was; the Guided Path keeps its record under a separate, versioned key.
   Load after the page script (it uses state, store, EX, DECKS, DECK_EX, RECALL, startEx, askQ, show, buildHome).
   ================================================================ */
(function(){

/* ---------------- CONFIG: every tunable lives here ---------------- */
const GPC = {
  STORAGE_KEY : 'ars-rhetorica-guided',   /* versioned progress object (schemaVersion) */
  PATH_KEY    : 'ars-rhetorica-path',     /* 'practice' | 'guided' */
  SCHEMA      : 1,
  INTERVALS   : {1:1, 2:3, 3:7, 4:16, 5:35},
  REVIEW_LEVEL: {1:3, 2:3, 3:4, 4:5, 5:5},
  MASTERY_WINDOW  : 10,
  MASTERY_CORRECT : 8,
  MASTERY_DAYS    : 2,
  MIN_DIFF        : 5,
  UNLOCK_DIFF     : 3,
  UNLOCK_CORRECT  : 9,
  REVIEW_ITEMS    : 3,
  HISTORY_CAP     : 300,
  /* a deck's content review is ready this many days after the deck is finished and (where the deck
     has exercises) one of its exercises is passed */
  RECALL_DELAY    : 1,
  /* The order of the path. Each tier opens when every required set of the tier before it is passed.
     gate is the phrase for that set of exercises in a lock note ("… is passed" or "… are passed"). */
  TIERS : [
    {key:'t1', label:'The three species', ids:['species'], gate:'The three species', plural:false},
    {key:'t2', label:'The three pisteis', ids:['pisteis'], gate:'The three pisteis', plural:false},
    {key:'t3', label:'Invention by argument', ids:['enthymeme','stasis','topics'], gate:'the exercises of Division II', plural:true},
    {key:'t4', label:'Character and the passions', ids:['ethos','pathos','greg'], gate:'Character in the speech and Name the passion', plural:true},
    {key:'t5', label:'Arrangement', ids:['taxis','taxisorder'], gate:'the exercises of Division IV', plural:true},
    {key:'t6', label:'Style and the figures', ids:['lexis','aristlexis','effects','figclick','figwhich','figcicero','figgorgias','figaugustine','figfurther'],
      gate:'Style and the argument, Aristotle on Style, Click the figure, and Which excerpt?', plural:true},
    {key:'t7', label:'The whole case', ids:['antiphon','debates','whole'], gate:'the Antiphon set, the paired debates, and the whole case', plural:true},
    {key:'t8', label:'Augustine', ids:['augoffice'], gate:'', plural:false}
  ],
  /* optional sets open with their tier but are never required to open the next one */
  OPTIONAL : ['greg','effects','figcicero','figgorgias','figaugustine','figfurther']
};
const isOptional = id => GPC.OPTIONAL.indexOf(id) >= 0;
const PREREQS = {}, TIER_OF = {};
GPC.TIERS.forEach((t, i) => {
  const prev = i ? GPC.TIERS[i-1] : null;
  t.ids.forEach(id => {
    TIER_OF[id] = t;
    PREREQS[id] = prev ? prev.ids.filter(x => !isOptional(x)) : [];
  });
});
function exTitle(id){ const it = actExById(id); return it ? it.title : (EX[id] ? EX[id].title : id); }
const SETS = [];
GPC.TIERS.forEach(t => t.ids.forEach(id => { if(EX[id]) SETS.push({id, title:exTitle(id)}); }));
const REQUIRED = SETS.filter(s => !isOptional(s.id));

/* ---------------- storage, with in-memory fallback ---------------- */
let storageOK = true;
const mem = {};
function gpGet(k){
  try{ return window.localStorage.getItem(k); }
  catch(e){ storageOK = false; return Object.prototype.hasOwnProperty.call(mem, k) ? mem[k] : null; }
}
function gpSet(k, v){
  try{ window.localStorage.setItem(k, v); }
  catch(e){ storageOK = false; mem[k] = v; notice(); }
}
function gpRemove(k){ try{ window.localStorage.removeItem(k); }catch(e){} delete mem[k]; }
function notice(){
  const n = $('gp-storage');
  if(!n) return;
  n.hidden = !(!storageOK && path === 'guided');
}

/* dates as local calendar strings, YYYY-MM-DD (lexicographic order is chronological order) */
function dateStr(d){ return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); }
function today(){ return dateStr(new Date()); }
function addDays(n, from){
  const d = from ? parseDate(from) : new Date();
  d.setDate(d.getDate()+n); return dateStr(d);
}
function parseDate(s){ const p = s.split('-').map(Number); return new Date(p[0], p[1]-1, p[2]); }
function niceDate(s){ return parseDate(s).toLocaleDateString('en-US', {weekday:'short', month:'short', day:'numeric'}); }

/* ---------------- the progress object (schema 1) ---------------- */
let prog = null;
(function(){
  const raw = gpGet(GPC.STORAGE_KEY);
  if(!raw) return;
  try{
    const o = JSON.parse(raw);
    if(o && o.schemaVersion === GPC.SCHEMA && o.sets && typeof o.sets === 'object'){
      o.recall = (o.recall && typeof o.recall === 'object') ? o.recall : {};
      o.settings = o.settings || {trackingEnabled:false};
      prog = o;
    }
  }catch(e){ /* unreadable: leave it in place and start fresh in memory only */ }
})();
function tracking(){ return !!(prog && prog.settings && prog.settings.trackingEnabled); }
function rec(id){
  prog.sets[id] = prog.sets[id] ||
    {state:'learning', seen:0, correct:0, history:[], box:null, nextDue:null, passedOn:null, masteredOn:null};
  return prog.sets[id];
}
function saveProg(){ if(prog) gpSet(GPC.STORAGE_KEY, JSON.stringify(prog)); }
function freshProg(){ return {schemaVersion:GPC.SCHEMA, app:'ars-rhetorica', settings:{trackingEnabled:true}, sets:{}, recall:{}}; }

/* ---------------- path (separate key; nothing is written until a path is chosen) ---------------- */
let path = (gpGet(GPC.PATH_KEY) === 'guided') ? 'guided' : 'practice';
/* The difficulty chosen for Free Practice is kept apart from the level chosen for a Guided exercise. */
let practiceDiff = state.diff;
function guided(){ return path === 'guided'; }
function setPath(p, persist){
  path = p;
  if(persist !== false) gpSet(GPC.PATH_KEY, p);
  if(p === 'practice'){ state.diff = practiceDiff; save(); buildDiffRow(); }
  reflectPath();
  buildHome();
}
function reflectPath(){
  const g = guided();
  const f = $('path-free'), gb = $('path-guided');
  if(f){ f.classList.toggle('sel', !g); f.setAttribute('aria-pressed', String(!g)); }
  if(gb){ gb.classList.toggle('sel', g); gb.setAttribute('aria-pressed', String(g)); }
  const help = $('guided-help'); if(help) help.hidden = !g;
  const diff = $('diff-section'); if(diff) diff.hidden = g;
  if(window.renderStartChoices) window.renderStartChoices();
  notice();
}
function savedDiff(){ return guided() ? practiceDiff : state.diff; }

/* ---------------- set states and gating ---------------- */
function everMastered(id){ const r = prog && prog.sets && prog.sets[id]; return !!(r && r.masteredOn); }
function everPassed(id){ const r = prog && prog.sets && prog.sets[id]; return !!(r && (r.passedOn || r.masteredOn)); }
function unlocked(id){ return (PREREQS[id] || []).every(everPassed); }
function stateOf(id){
  const r = prog && prog.sets && prog.sets[id];
  if(r && r.masteredOn) return r.state === 'lapsed' ? 'lapsed' : 'mastered';
  if(r && r.passedOn) return 'passed';
  return unlocked(id) ? 'learning' : 'locked';
}
function isDue(id){
  const r = prog && prog.sets && prog.sets[id];
  return !!(r && r.masteredOn && r.nextDue && r.nextDue <= today());
}
function locked(id){ return guided() && !!TIER_OF[id] && stateOf(id) === 'locked'; }
/* the phrase for what opens a locked set: "Opens when … is passed at Level III" */
function gateText(id){
  const t = TIER_OF[id];
  const i = GPC.TIERS.indexOf(t);
  if(i <= 0) return '';
  const prev = GPC.TIERS[i-1];
  return prev.gate + (prev.plural ? ' are' : ' is') + ' passed at Level III';
}
function recent(id, minDiff){
  const r = prog && prog.sets && prog.sets[id];
  if(!r) return [];
  return r.history.filter(h => h.diff >= minDiff).slice(-GPC.MASTERY_WINDOW);
}

/* ---------------- pass and mastery ---------------- */
function meets(id, minDiff, need){
  const r = rec(id);
  const q = r.history.filter(h => h.diff >= minDiff);
  if(q.length < GPC.MASTERY_WINDOW) return false;
  const last = q.slice(-GPC.MASTERY_WINDOW);
  const ok = last.filter(h => h.correct).length;
  const days = new Set(last.map(h => h.date)).size;
  return ok >= need && days >= GPC.MASTERY_DAYS;
}
function checkPass(id){
  const r = rec(id);
  if(r.passedOn) return;
  if(meets(id, GPC.UNLOCK_DIFF, GPC.UNLOCK_CORRECT)) r.passedOn = today();
}
function checkMastery(id){
  const r = rec(id);
  if(r.masteredOn) return;                    /* thereafter the reviews govern */
  if(meets(id, GPC.MIN_DIFF, GPC.MASTERY_CORRECT)){
    r.state = 'mastered'; r.masteredOn = today();
    r.passedOn = r.passedOn || today();       /* mastery implies the pass */
    r.box = 1; r.nextDue = addDays(GPC.INTERVALS[1]);
  }
}

/* ---------------- per-answer hook (called from submit) ---------------- */
function onAnswer(correct){
  if(!guided() || !tracking()) return;
  if(!state.ex || state.ex.recall || !TIER_OF[state.ex.id]) return;
  const id = state.ex.id, r = rec(id);
  r.seen++; if(correct) r.correct++;
  r.history.push({date:today(), correct:!!correct, diff:state.diff});
  if(r.history.length > GPC.HISTORY_CAP) r.history.splice(0, r.history.length - GPC.HISTORY_CAP);
  if(review.active) reviewRecord(id, correct);
  else { checkPass(id); checkMastery(id); }
  r.state = stateOf(id);
  saveProg();
}

/* ---------------- the level picker ---------------- */
function plainDesc(d){
  return DIFF[d].desc.split(/(?<=\.)\s+/).filter(s => !/point|questions|100|set|\bsix\b|\beight\b/i.test(s)).join(' ');
}
let levelFor = null;
function pickLevel(e){
  if(locked(e.id)) return;
  levelFor = e;
  if(!guided() || !TIER_OF[e.id]){ startEx(e); return; }
  const passed = everPassed(e.id), st = stateOf(e.id);
  const maxLvl = passed ? 5 : 3;
  $('lv-title').textContent = exTitle(e.id);
  $('lv-instr').textContent = st === 'mastered' || st === 'lapsed'
    ? 'This exercise is mastered, and it returns in Today’s Review on its own schedule. Any level may be practiced here.'
    : passed
      ? 'This exercise is passed, so all five levels are open. It is mastered (★) once eight of the last ten answers at Level V are correct, on at least two different days.'
      : 'Levels IV and V open once this exercise is passed at Level III, that is, once nine of the last ten answers at Level III or above are correct, on at least two different days.';
  const box = $('lv-levels'); box.innerHTML = '';
  for(let d = 1; d <= 5; d++){
    const shut = d > maxLvl;
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'btn lp-lvl' + (shut ? ' locked' : '');
    b.disabled = shut;
    b.innerHTML = '<span class="lp-num">Level '+DIFF[d].name+'</span><span class="lp-name"></span>'
      + (shut ? '<span class="lp-lock">Opens after a pass at Level III</span>' : '');
    b.querySelector('.lp-name').textContent = plainDesc(d);
    if(!shut) b.onclick = () => {
      if(practiceDiff == null) practiceDiff = state.diff;
      state.diff = d; startEx(e);
    };
    box.appendChild(b);
  }
  const rr = prog && prog.sets && prog.sets[e.id];
  const q3 = recent(e.id, GPC.UNLOCK_DIFF), q5 = recent(e.id, GPC.MIN_DIFF);
  let line = '';
  if(st === 'learning' && q3.length) line = q3.filter(h => h.correct).length+' of the last '+q3.length+' answers at Level III or above are correct.';
  else if(st === 'passed' && q5.length) line = q5.filter(h => h.correct).length+' of the last '+q5.length+' answers at Level V are correct.';
  else if(rr && rr.masteredOn) line = 'Mastered ★ · box '+rr.box+' · next review '+niceDate(rr.nextDue)+'.';
  $('lv-record').textContent = tracking() ? line : 'Tracking is off, so these answers will not be recorded. Tracking is turned on under Progress & Review.';
  show('scr-level');
}

/* ---------------- Today's Review (Leitner) ---------------- */
const review = {active:false, queue:[], idx:0, per:{}, total:0, results:[], learnAfter:null, asked:0};
function dueSets(){ return SETS.filter(s => isDue(s.id)); }
/* The recommended next exercise, in the course's order: the first open exercise not yet passed;
   then the first open exercise not yet mastered. Optional sets are never recommended. */
function nextLearning(){
  return REQUIRED.find(s => unlocked(s.id) && !everPassed(s.id))
      || REQUIRED.find(s => unlocked(s.id) && !everMastered(s.id))
      || null;
}
function startToday(){
  const due = dueSets(), learn = nextLearning();
  if(!due.length){ if(learn) pickLevel(EX[learn.id]); return; }
  review.active = true; review.idx = 0; review.queue = []; review.per = {}; review.results = []; review.asked = 0;
  review.learnAfter = learn ? learn.id : null;
  due.forEach(s => { review.per[s.id] = {need:GPC.REVIEW_ITEMS, correct:0, done:false}; });
  for(let i = 0; i < GPC.REVIEW_ITEMS; i++) due.forEach(s => review.queue.push(s.id));   /* interleaved */
  review.total = review.queue.length;
  if(practiceDiff == null) practiceDiff = state.diff;
  state.score = 0; state.answered = 0; state.correct = 0; state.streak = 0;
  state.sessionSeen = []; state.setI = 0; state.setDone = false; state.setLen = review.total;
  show('scr-ex');
  reviewNext();
}
function reviewNext(){
  while(review.idx < review.queue.length && review.per[review.queue[review.idx]].done) review.idx++;
  if(review.idx >= review.queue.length){ finishReview(); return; }
  const id = review.queue[review.idx++];
  const e = EX[id];
  state.ex = e;
  const r = prog.sets[id];
  state.diff = GPC.REVIEW_LEVEL[Math.min(5, (r && r.box) || 1)] || 5;
  $('ex-title').textContent = 'Today’s Review · ' + exTitle(id);
  $('ex-instr').textContent = e.instr;
  review.asked++;
  askQ();
}
function reviewRecord(id, correct){
  const p = review.per[id];
  if(!p || p.done) return;
  const r = rec(id), title = exTitle(id);
  if(!correct){
    p.done = true;
    review.total -= review.queue.slice(review.idx).filter(x => x === id).length;
    state.setLen = review.total;
    r.state = 'lapsed'; r.box = 1; r.nextDue = addDays(GPC.INTERVALS[1]);
    review.results.push(title+' returned to box 1 and is due again on '+niceDate(r.nextDue)+'.');
  }else{
    p.correct++;
    if(p.correct >= p.need){
      p.done = true;
      r.box = Math.min(5, (r.box || 1) + 1);
      r.state = 'mastered';
      r.nextDue = addDays(GPC.INTERVALS[r.box]);
      review.results.push(title+' moved up to box '+r.box+', and its next review is on '+niceDate(r.nextDue)+'.');
    }
  }
}
function finishReview(){
  review.active = false;
  state.setDone = true;
  saveProg();
  let html = '<p><strong>Today’s Review is complete.</strong></p>';
  if(review.results.length) html += '<p>'+review.results.join('<br>')+'</p>';
  const learn = review.learnAfter ? REQUIRED.find(s => s.id === review.learnAfter) : nextLearning();
  if(learn) html += '<p>The next exercise to learn is '+esc(learn.title)+'.</p>';
  openProgress(html);
}
function cancelReview(){ if(review.active){ review.active = false; saveProg(); } }
function reviewActive(){ return review.active; }

/* ---------------- the delayed content reviews (RECALL, data.js) ---------------- */
function deckDone(k){
  const d = store.recite && store.recite.decks && store.recite.decks[k];
  return d && d.done ? d : null;
}
function deckSets(k){ return (DECK_EX[k] || []).filter(id => EX[id] && !isOptional(id)); }
function recallState(k){
  if(!RECALL[k]) return null;
  const last = prog && prog.recall && prog.recall[k];
  if(!guided()) return {key:'open', text:''};
  const dd = deckDone(k);
  if(!dd) return {key:'wait', text:'After the deck is finished'};
  let from = dd.doneAt ? dateStr(new Date(dd.doneAt)) : today();
  const sets = deckSets(k);
  if(sets.length){
    const passed = sets.filter(everPassed);
    if(!passed.length) return {key:'wait', text: sets.length > 1 ? 'After an exercise of the deck is passed' : 'After the exercise of the deck is passed'};
    const firstPass = passed.map(id => prog.sets[id].passedOn || prog.sets[id].masteredOn).sort()[0];
    if(firstPass > from) from = firstPass;
  }
  const ready = addDays(GPC.RECALL_DELAY, from);
  if(ready > today() && !last) return {key:'wait', text:'Ready on '+niceDate(ready)};
  if(last) return {key:'done', text:'Reviewed '+niceDate(last.date)+' · '+last.right+' of '+last.n};
  return {key:'ready', text:'Ready'};
}
function readyRecalls(){
  return Object.keys(RECALL).filter(k => DECKS[k] && (recallState(k) || {}).key === 'ready');
}
function openRecall(k){
  const items = shuffle(RECALL[k]);
  const deck = DECKS[k];
  const missed = [];
  const e = {
    id:'recall:'+k, recall:k, title:'Review · '+deck.title, setLen:items.length, missed,
    instr:'These questions ask for the doctrine of the deck itself, its definitions and distinctions, from memory.',
    gen(){
      const it = items[Math.min(state.answered, items.length - 1)];
      const order = shuffle([0,1,2,3]);
      const options = order.map(i => esc(it.a[i]));
      const correct = order.indexOf(0);
      return {kind:'mc', prompt:esc(it.q), options, correct,
        check(ans){
          const right = ans === correct;
          if(!right) missed.push(it);
          return {right, note:esc(it.why)};
        }};
    }
  };
  cancelReview();
  startEx(e);
}
function recallDone(){
  const e = state.ex, k = e.recall, n = state.setLen, right = state.correct;
  if(guided() && tracking()){
    const was = prog.recall[k];
    prog.recall[k] = {date:today(), right, n, count:(was && was.count || 0) + 1};
    saveProg();
  }
  let html = '<div class="panel complete-card"><svg class="orn complete-orn" viewBox="0 0 16 16" aria-hidden="true"><use href="#star"/></svg>'+
    '<p class="complete-h">Review complete</p>'+
    '<p class="directions" style="font-size:28px;margin:12px 0">'+right+' of '+n+' recalled</p>';
  if(e.missed.length){
    html += '<div class="recall-missed"><p class="recall-missed-h">Questions missed</p>' +
      e.missed.map(it => '<p><strong>'+esc(it.q)+'</strong><br>'+esc(it.a[0])+'. '+esc(it.why)+'</p>').join('') + '</div>';
  }
  html += '</div>';
  $('ex-box').innerHTML = html;
}

/* ---------------- the score line for a review or a content review ---------------- */
function scoreText(){
  if(review.active){
    return 'Today’s Review · Level '+DIFF[state.diff].name+' · question '+Math.min(state.answered + 1, review.total)+' of '+review.total;
  }
  if(state.ex && state.ex.recall){
    return 'Question '+Math.min(state.answered + 1, state.setLen)+' of '+state.setLen+' · '+state.correct+' recalled';
  }
  return null;
}

/* ---------------- home decoration ---------------- */
function chipText(id){
  const st = stateOf(id);
  if(st === 'locked') return 'Locked';
  if(st === 'lapsed') return 'Review due';
  if(st === 'mastered') return isDue(id) ? '★ Review due' : '★ Mastered';
  if(st === 'passed') return 'Passed';
  const q = recent(id, GPC.UNLOCK_DIFF);
  return q.length ? 'Learning · '+q.filter(h => h.correct).length+'/'+q.length : 'Learning';
}
/* an exercise strip button, or an item of the Exercises pane */
function decorateLink(b, id){
  if(!guided() || !TIER_OF[id]) return;
  const flag = document.createElement('span');
  flag.className = 'ex-state st-' + stateOf(id);
  flag.textContent = chipText(id);
  b.insertBefore(flag, b.firstChild);
  if(locked(id)){
    b.classList.add('locked');
    b.setAttribute('aria-disabled', 'true');
    b.title = 'Opens when ' + gateText(id) + '.';
    const go = b.onclick;
    b.onclick = ev => { ev.stopPropagation(); ev.preventDefault(); };
    b._unlockedClick = go;
  }
}
function lockNote(act){
  if(!guided()) return null;
  const ids = [];
  act.items.forEach(it => { if(it.kind === 'deck') (DECK_EX[it.deck] || []).forEach(id => { if(locked(id) && !isOptional(id)) ids.push(id); }); });
  if(!ids.length) return null;
  const groups = [];
  ids.forEach(id => {
    const g = gateText(id);
    let grp = groups.find(x => x.g === g);
    if(!grp) groups.push(grp = {g, ids:[]});
    grp.ids.push(id);
  });
  const list = a => a.length === 1 ? a[0] : a.length === 2 ? a[0]+' and '+a[1] : a.slice(0,-1).join(', ')+', and '+a[a.length-1];
  const note = document.createElement('div');
  note.className = 'lock-note';
  note.textContent = 'On the Guided Path, ' + groups.map(grp =>
    list(grp.ids.map(exTitle)) + (grp.ids.length > 1 ? ' open' : ' opens') + ' when ' + grp.g
  ).join('; ') + '.';
  return note;
}
function reviewBar(k){
  const deck = DECKS[k], st = recallState(k);
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'set-card review-bar' + (st.key === 'wait' ? ' locked' : '');
  b.dataset.recall = k;
  b.insertAdjacentHTML('beforeend', STAR);
  const main = document.createElement('div');
  main.className = 'tile-main';
  const h = document.createElement('h3');
  h.textContent = 'Review · ' + deck.title;
  main.appendChild(h);
  const p = document.createElement('p');
  p.textContent = st.text || (RECALL[k].length + ' questions on the doctrine of the deck, from memory');
  main.appendChild(p);
  b.appendChild(main);
  if(st.key === 'wait'){ b.setAttribute('aria-disabled', 'true'); b.onclick = null; }
  else b.onclick = () => openRecall(k);
  return b;
}
/* after each Division's decks and exercises: the lock note above, and that Division's content reviews below */
function decorateAct(wrap, grid, act){
  const note = lockNote(act);
  if(note) wrap.insertBefore(note, grid);
  /* a deck whose exercises open in a pane has one button; it is marked Locked while every exercise in it is */
  if(guided()) grid.querySelectorAll('.ex-link[data-ex-pane]').forEach(b => {
    const ids = (DECK_EX[b.dataset.exPane] || []).filter(id => TIER_OF[id]);
    if(!ids.length || !ids.every(locked)) return;
    const flag = document.createElement('span');
    flag.className = 'ex-state st-locked';
    flag.textContent = 'Locked';
    b.insertBefore(flag, b.firstChild);
  });
  const decks = act.items.filter(it => it.kind === 'deck' && RECALL[it.deck]).map(it => it.deck);
  if(!decks.length) return;
  const rule = document.createElement('div');
  rule.className = 'sec-rule sec-rule-main';
  rule.setAttribute('aria-hidden', 'true');
  grid.appendChild(rule);
  decks.forEach(k => grid.appendChild(reviewBar(k)));
}
function homeNote(){
  const host = $('guided-note');
  if(!host) return;
  host.innerHTML = '';
  const p = document.createElement('p');
  p.className = 'gp-line';
  if(!guided()){
    p.textContent = 'Every exercise is open at every level. The Guided Path opens the exercises in order and brings mastered exercises back for review.';
    host.appendChild(p);
    return;
  }
  const row = document.createElement('div');
  row.className = 'btn-row';
  if(!tracking()){
    p.textContent = 'The Guided Path opens the exercises in order, judges when each is passed and mastered, and brings mastered sets back for review. It keeps its record only once tracking is turned on under Progress & Review.';
  }else{
    const due = dueSets(), learn = nextLearning(), rr = readyRecalls();
    const bits = [];
    if(due.length) bits.push(setsDue(due.length)+' due for review today.');
    if(learn) bits.push((everPassed(learn.id) ? 'Next to master at Level V: ' : 'Next to learn: ') + learn.title + '.');
    if(rr.length) bits.push((rr.length === 1 ? 'A content review is ready: ' : 'Content reviews are ready: ') + rr.map(k => DECKS[k].title).join('; ') + '.');
    if(!bits.length) bits.push('Nothing is due today, and every exercise on the path is mastered.');
    p.textContent = bits.join(' ');
    if(due.length){
      const s = document.createElement('button');
      s.type = 'button'; s.className = 'btn primary'; s.textContent = 'Start Today’s Review';
      s.onclick = startToday; row.appendChild(s);
    }else if(learn){
      const s = document.createElement('button');
      s.type = 'button'; s.className = 'btn primary'; s.textContent = 'Continue: ' + learn.title;
      s.onclick = () => pickLevel(EX[learn.id]); row.appendChild(s);
    }
  }
  const pr = document.createElement('button');
  pr.type = 'button'; pr.className = 'btn'; pr.textContent = 'Progress & Review';
  pr.onclick = () => openProgress();
  row.appendChild(pr);
  host.appendChild(p);
  host.appendChild(row);
}

/* ---------------- the Progress & Review panel ---------------- */
const NUM = ['no','one','two','three','four','five','six','seven','eight','nine','ten'];
function setsDue(n){ const w = n < NUM.length ? NUM[n] : String(n); return w.charAt(0).toUpperCase() + w.slice(1) + (n === 1 ? ' exercise is' : ' exercises are'); }
function esc(s){ return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function openProgress(noteHtml){
  renderProgress();
  const note = $('gp-note');
  if(note){ note.innerHTML = noteHtml || ''; note.hidden = !noteHtml; }
  show('scr-prog');
}
function renderPanel(){
  const host = $('prog-guided');
  if(!host) return;
  notice();
  let h = '';
  if(!guided()){
    h += '<div class="gp-box"><p>This browser is on <strong>Free Practice</strong>: every exercise is open, and nothing is recorded for the Guided Path. The counts below cover all practice.</p>'
      + '<div class="btn-row"><button class="btn" type="button" id="gp-use">Use the Guided Path</button></div></div>';
  }
  if(!tracking()){
    const had = !!prog;
    h += '<div class="gp-box"><p><strong>Track progress on the Guided Path.</strong> The Guided Path keeps a private record of answers, stored only in this browser and never sent anywhere, so that it can open the exercises in order, judge when each is passed and mastered, and schedule reviews. '
      + (had ? 'Tracking is paused; the earlier record is kept and will resume.' : 'No record is kept until tracking is turned on.')+'</p>'
      + '<div class="btn-row"><button class="btn primary" type="button" id="gp-track">'+(had ? 'Resume tracking' : 'Turn on tracking')+'</button></div></div>';
  }else{
    h += '<div class="gp-box"><p><strong>Tracking is on.</strong> Answers given on the Guided Path are recorded in this browser only.</p>'
      + '<div class="btn-row"><button class="btn" type="button" id="gp-pause">Pause tracking</button>'
      + '<button class="btn" type="button" id="gp-erase">Erase the Guided Path record</button></div></div>';
  }

  if(tracking()){
    const due = dueSets(), learn = nextLearning();
    h += '<div class="section-label">Today</div><div class="gp-today">';
    if(due.length){
      h += '<p>'+setsDue(due.length)+' due for review: '
        + due.map(s => esc(s.title)).join('; ')+'. Each asks '+NUM[GPC.REVIEW_ITEMS]+' questions, and the exercises are interleaved.</p>';
    }
    if(learn){
      const lr = prog.sets[learn.id], started = !!(lr && lr.history.length);
      h += '<p>'+(everPassed(learn.id) ? 'Next to master at Level V' : 'Next to learn')+': '+esc(learn.title)+'.</p>';
      h += '<div class="btn-row">'+(due.length ? '<button class="btn primary" type="button" id="gp-start">Start Today’s Review</button>' : '')
        + '<button class="btn'+(due.length ? '' : ' primary')+'" type="button" id="gp-learn">'+(started ? 'Continue' : 'Begin')+': '+esc(learn.title)+'</button></div>';
    }else if(due.length){
      h += '<div class="btn-row"><button class="btn primary" type="button" id="gp-start">Start Today’s Review</button></div>';
    }else{
      h += '<p>Nothing is due today, and every exercise on the path is mastered.</p>';
    }
    h += '</div>';

    const rr = readyRecalls();
    if(rr.length){
      h += '<div class="section-label">Content Reviews</div><div class="section-gloss">Each asks for the doctrine of one deck from memory. They are taken after the deck and its exercises, and they open nothing and close nothing.</div><div class="set-grid" id="gp-recalls"></div>';
    }

    const upcoming = SETS.map(s => ({s, r:prog.sets[s.id]}))
      .filter(o => o.r && o.r.masteredOn && o.r.nextDue && o.r.nextDue > today())
      .sort((a,b) => a.r.nextDue < b.r.nextDue ? -1 : 1);
    if(upcoming.length){
      h += '<div class="section-label">Coming Reviews</div><div class="gp-agenda">'
        + upcoming.map(o => '<div class="gp-agenda-row"><span>'+niceDate(o.r.nextDue)+'</span><span>'+esc(o.s.title)+' (box '+o.r.box+')</span></div>').join('')
        + '</div>';
    }
  }

  h += '<div class="section-label">The Path</div>';
  GPC.TIERS.forEach((t, i) => {
    h += '<div class="gp-tier">'+(i+1)+'. '+esc(t.label)+'</div><div class="gp-ladder">';
    t.ids.forEach(id => {
      if(!EX[id]) return;
      const st = stateOf(id);
      const chip = {locked:'Locked', learning:'Learning', passed:'Passed', mastered:'Mastered ★', lapsed:'Lapsed'}[st];
      let detail = '';
      if(st === 'locked') detail = 'Opens when ' + gateText(id) + '.';
      else if(st === 'mastered' || st === 'lapsed'){
        const r = prog.sets[id];
        detail = isDue(id) ? 'Review due today.' : 'Box '+r.box+'; next review '+niceDate(r.nextDue)+'.';
      }else if(st === 'passed'){
        const q = recent(id, GPC.MIN_DIFF);
        detail = 'Passed at Level III; mastery is earned at Level V' + (q.length ? ' ('+q.filter(x => x.correct).length+' of the last '+q.length+' there).' : '.');
      }else if(tracking()){
        const q = recent(id, GPC.UNLOCK_DIFF);
        if(q.length) detail = q.filter(x => x.correct).length+' of the last '+q.length+' at Level III or above.';
      }
      if(isOptional(id)) detail = (detail ? detail + ' ' : '') + 'Optional; it is not needed to open the next part of the path.';
      h += '<div class="gp-row st-'+st+'"><span class="gp-title">'+esc(exTitle(id))+'</span>'
        + '<span class="gp-chip">'+chip+'</span>'
        + (detail ? '<span class="gp-detail">'+detail+'</span>' : '')+'</div>';
    });
    h += '</div>';
  });

  host.innerHTML = h;
  const on = (id, fn) => { const el = $(id); if(el) el.onclick = fn; };
  on('gp-use', () => { setPath('guided'); openProgress(); });
  on('gp-track', () => {
    if(!prog) prog = freshProg(); else prog.settings.trackingEnabled = true;
    saveProg(); renderProgress(); buildHome();
  });
  on('gp-pause', () => { prog.settings.trackingEnabled = false; saveProg(); renderProgress(); buildHome(); });
  on('gp-erase', () => {
    if(confirm('Erase the Guided Path record? This cannot be undone. The counts of all practice below are kept.')){
      prog = null; gpRemove(GPC.STORAGE_KEY); renderProgress(); buildHome();
    }
  });
  on('gp-start', startToday);
  on('gp-learn', () => { const l = nextLearning(); if(l) pickLevel(EX[l.id]); });
  const rg = $('gp-recalls');
  if(rg) readyRecalls().forEach(k => rg.appendChild(reviewBar(k)));
}

/* ---------------- export and import ---------------- */
function exportProgress(){
  const obj = prog ? JSON.parse(JSON.stringify(prog)) : {schemaVersion:GPC.SCHEMA, app:'ars-rhetorica', settings:{trackingEnabled:false}, sets:{}, recall:{}};
  obj.exportedOn = today();
  /* the course's own record travels with it, so a second device has the same counts, decks, and recitations */
  try{ obj.course = JSON.parse(localStorage.getItem(KEY) || 'null'); }catch(e){ obj.course = null; }
  const blob = new Blob([JSON.stringify(obj, null, 2)], {type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'ars-rhetorica-progress-'+today()+'.json';
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
}
function importProgress(file){
  const rd = new FileReader();
  rd.onload = () => {
    try{
      const o = JSON.parse(rd.result);
      if(!o || o.schemaVersion !== GPC.SCHEMA || !o.sets || typeof o.sets !== 'object' || !o.settings) throw new Error('schema');
      const course = o.course; delete o.course; delete o.exportedOn;
      o.recall = (o.recall && typeof o.recall === 'object') ? o.recall : {};
      o.app = 'ars-rhetorica';
      prog = o; saveProg();
      if(course && typeof course === 'object'){
        try{ localStorage.setItem(KEY, JSON.stringify(course)); }catch(e){}
        load();
        if(guided()) practiceDiff = state.diff;
      }
      buildHome();
      openProgress('<p>The progress file was imported.</p>');
    }catch(err){
      openProgress('<p>That file could not be read as an Ars Rhetorica progress file.</p>');
    }
  };
  rd.readAsText(file);
}

/* ---------------- wiring and first paint ---------------- */
if($('path-free')) $('path-free').onclick = () => setPath('practice');
if($('path-guided')) $('path-guided').onclick = () => setPath('guided');
if($('lv-back')) $('lv-back').onclick = () => { show('scr-home'); buildHome(); };
if($('prog-export')) $('prog-export').onclick = exportProgress;
if($('prog-import')) $('prog-import').onclick = () => $('prog-import-file').click();
if($('prog-import-file')) $('prog-import-file').onchange = ev => {
  const f = ev.target.files && ev.target.files[0];
  if(f) importProgress(f);
  ev.target.value = '';
};

window.GP = {
  isGuided: guided, isLocked: locked, pickLevel, onAnswer, reviewActive, reviewNext, cancelReview,
  scoreText, recallDone, decorateLink, decorateAct, homeNote, renderPanel, openProgress, savedDiff,
  eraseAll(){ prog = null; gpRemove(GPC.STORAGE_KEY); },
  /* for the instructor's report and for checks */
  config: GPC, prereqs: PREREQS, sets: SETS, stateOf, recallState
};
reflectPath();
buildHome();

  /* ---------------- Level and Path menus (Oct 28), as in Ars Logica and Ars Grammatica ---------------- */
  (function startChoices(){
    const roman = d => DIFF[d].name;
    const LEVEL_WORDS = {
      1:'the names are given and a hint is shown.',
      2:'the wrong answers sit closer to the right one.',
      3:'less help: you name the thing from the speech.',
      4:'shorter passages, and wrong answers that sit closer to the right one.',
      5:'no hint: you judge the speech as it stands.'
    };
    function levelExpl(d){
      return 'Level ' + roman(d) + ': ' + LEVEL_WORDS[d] + ' A right answer earns ' + DIFF[d].gain + ' points and a wrong answer takes away ' + DIFF[d].loss + '.';
    }
    const PATH_EXPL = {
      practice: 'Free Practice opens every exercise at once, at the level chosen above, and keeps no record of your progress.',
      guided: 'The Guided Path opens the exercises in order, judges when each is passed and when it is mastered, and brings mastered exercises back for spaced review.'
    };
    const GUIDED_LEVEL = 'On the Guided Path you choose the level when you open each exercise, and reviews set their own, so this menu applies to Free Practice only.';
    const menus = {};
    let open = null;
    function close(focusBtn){
      const m = open; if(!m) return;
      open = null; m.list.hidden = true; m.btn.setAttribute('aria-expanded','false'); m.list.removeAttribute('aria-activedescendant');
      if(focusBtn) m.btn.focus();
    }
    function active(m, i){
      const o = [...m.list.children]; if(!o.length) return;
      m.active = Math.max(0, Math.min(o.length-1, i));
      o.forEach((x,k)=>x.classList.toggle('is-active', k===m.active));
      m.list.setAttribute('aria-activedescendant', o[m.active].id);
      o[m.active].scrollIntoView({block:'nearest'});
    }
    function show(m, at){
      if(m.btn.disabled) return;
      if(open && open!==m) close(false);
      open = m; m.list.hidden = false; m.btn.setAttribute('aria-expanded','true');
      const sel = m.cfg.options().findIndex(o=>m.cfg.isOn(o.value));
      active(m, at==='last' ? m.cfg.options().length-1 : at==='first' ? 0 : Math.max(0, sel));
      m.list.focus();
    }
    function pick(m, i){ const o = m.cfg.options()[i]; if(!o) return; close(true); m.cfg.pick(o.value); }
    function jump(m, ch){
      const opts = m.cfg.options(), now = Date.now();
      m.typed = (now-(m.typedAt||0) < 700 ? (m.typed||'') : '') + ch.toLowerCase(); m.typedAt = now;
      const from = m.typed.length>1 ? m.active : m.active+1;
      for(let k=0;k<opts.length;k++){ const i=(from+k)%opts.length; if(opts[i].label.toLowerCase().indexOf(m.typed)===0 || String(opts[i].value).toLowerCase()===m.typed) return i; }
      return -1;
    }
    function make(key, cfg){
      const host = $(key+'-menu'); if(!host) return;
      const btn = document.createElement('button');
      btn.type='button'; btn.id=key+'-btn'; btn.className='choice-btn';
      btn.setAttribute('aria-haspopup','listbox'); btn.setAttribute('aria-expanded','false');
      btn.setAttribute('aria-labelledby', key+'-label '+key+'-btn'); btn.setAttribute('aria-describedby', key+'-expl');
      btn.innerHTML = '<span class="choice-btn-text"></span><span class="choice-caret" aria-hidden="true">▾</span>';
      const list = document.createElement('ul');
      list.id=key+'-list'; list.className='choice-list'; list.setAttribute('role','listbox'); list.setAttribute('aria-labelledby', key+'-label');
      list.tabIndex=-1; list.hidden=true;
      host.replaceChildren(btn, list);
      const m = menus[key] = {key, cfg, btn, list, active:0};
      btn.addEventListener('click', ()=>{ if(open===m) close(true); else show(m); });
      btn.addEventListener('keydown', e=>{
        if(['ArrowDown','ArrowUp','Enter',' '].includes(e.key)){ e.preventDefault(); show(m); }
        else if(e.key==='Home'){ e.preventDefault(); show(m,'first'); }
        else if(e.key==='End'){ e.preventDefault(); show(m,'last'); }
      });
      list.addEventListener('keydown', e=>{
        const n = cfg.options().length;
        if(e.key==='ArrowDown'){ e.preventDefault(); active(m, m.active+1); }
        else if(e.key==='ArrowUp'){ e.preventDefault(); active(m, m.active-1); }
        else if(e.key==='Home'){ e.preventDefault(); active(m, 0); }
        else if(e.key==='End'){ e.preventDefault(); active(m, n-1); }
        else if(e.key==='Enter' || e.key===' '){ e.preventDefault(); pick(m, m.active); }
        else if(e.key==='Escape'){ e.preventDefault(); e.stopPropagation(); close(true); }
        else if(e.key==='Tab'){ close(false); }
        else if(e.key.length===1 && /\S/.test(e.key) && !e.ctrlKey && !e.metaKey && !e.altKey){ e.preventDefault(); const i = jump(m, e.key); if(i>=0) active(m, i); }
      });
      list.addEventListener('click', e=>{ const li = e.target.closest('[role="option"]'); if(li) pick(m, [...list.children].indexOf(li)); });
      list.addEventListener('mousemove', e=>{ const li = e.target.closest('[role="option"]'); if(li){ const i=[...list.children].indexOf(li); if(i!==m.active) active(m,i); } });
    }
    document.addEventListener('pointerdown', e=>{ if(open && !open.btn.parentNode.contains(e.target)) close(false); });
    function draw(m){
      const opts = m.cfg.options();
      m.btn.querySelector('.choice-btn-text').textContent = m.cfg.text();
      m.btn.disabled = !!(m.cfg.disabled && m.cfg.disabled());
      if(m.btn.disabled && open===m) close(false);
      if(!m.list.children.length){
        m.list.replaceChildren(...opts.map(o=>{
          const li = document.createElement('li');
          li.id = m.key+'-opt-'+o.value; li.setAttribute('role','option'); li.dataset.value = o.value;
          li.innerHTML = '<span class="choice-mark" aria-hidden="true"></span><span class="choice-name"></span>';
          li.querySelector('.choice-name').textContent = o.label;
          return li;
        }));
      }
      [...m.list.children].forEach((li,i)=>{
        const on = m.cfg.isOn(opts[i].value);
        li.setAttribute('aria-selected', on?'true':'false'); li.classList.toggle('is-on', on);
        li.querySelector('.choice-mark').textContent = on ? '✓' : '';
      });
    }
    make('level', {
      options: ()=>[1,2,3,4,5].map(d=>({value:d, label:'Level '+roman(d)})),
      isOn: v=>v===state.diff,
      text: ()=> guided() ? 'By exercise' : 'Level '+roman(state.diff),
      disabled: ()=> guided(),
      pick: v=>{ state.diff = v; practiceDiff = v; save(); buildDiffRow(); }
    });
    make('path', {
      options: ()=>[{value:'practice', label:'Free Practice'},{value:'guided', label:'Guided Path'}],
      isOn: v=>v===path,
      text: ()=> guided() ? 'Guided Path' : 'Free Practice',
      pick: v=>{ if(v!==path) setPath(v); }
    });
    function renderStartChoices(){
      Object.values(menus).forEach(draw);
      const set = (id,t)=>{ const e=$(id); if(e && e.textContent!==t) e.textContent=t; };
      set('level-expl', guided() ? GUIDED_LEVEL : levelExpl(state.diff));
      set('path-expl', PATH_EXPL[guided() ? 'guided' : 'practice']);
    }
    window.renderStartChoices = renderStartChoices;
    renderStartChoices();
  })();
})();
