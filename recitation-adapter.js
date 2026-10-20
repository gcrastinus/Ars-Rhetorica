'use strict';
/* Recitation Tablet: the link between Ars Rhetorica and recitation.js (the Tablet code of Ars Grammatica).
   recitation.js expects a course structure, deck records, a store, and a deck loader; this file supplies them
   from ACTS and DECKS (data.js) and from the course progress (index.html), and it holds the homepage callout
   that names a deck just finished. Load it after the page script and before recitation.js.

   The record is kept in the course progress (localStorage key ars-rhetorica-progress), under store.recite:
   {
     decks: { orient: { done:true, doneAt } },   // a deck is done once its last card is finished
     recitations: { ... },                        // the Tablet's own record (see recitation.js)
     reciteNudges: { shown:{}, pending:[] }       // the "You have finished" callout on the homepage
   }
*/
window.ARS = window.ARS || {};

/* One section for each Division (and the Preliminaries); one study item for each deck, in course order. */
ARS.structure = ACTS.map(a => ({
  id: a.roman ? a.roman.toLowerCase() : 'prelim',
  roman: a.roman,
  name: a.name,
  items: a.items.filter(it => it.kind === 'deck' && DECKS[it.deck]).map(it => ({
    id: it.deck, kind: 'study', built: true, title: DECKS[it.deck].title
  }))
}));
ARS.decks = {};
Object.keys(DECKS).forEach(k => { DECKS[k].id = k; ARS.decks[k] = DECKS[k]; });
ARS.reciteWords = { section: 'Division', prelim: 'Preliminaries' };

function courseStore(){
  if (!store.recite || typeof store.recite !== 'object') store.recite = {};
  if (!store.recite.decks || typeof store.recite.decks !== 'object') store.recite.decks = {};
  return store.recite;
}
function loadDeck(id){
  return ARS.decks[id] ? Promise.resolve(ARS.decks[id]) : Promise.reject(new Error('No deck ' + id));
}

/* Called when the last card of a deck is finished. */
function reciteDeckFinished(key){
  const d = DECKS[key];
  if (!d) return;
  const decks = courseStore().decks;
  const st = decks[key] || (decks[key] = { done:false });
  const first = !st.done;
  st.done = true;
  if (first){ st.doneAt = Date.now(); noteReciteNudge(key, d.title); }
  save();
}

/* A finished study deck is named once, on the main page.
   Shown is recorded when the callout is displayed, so a later return home does not show it again.
   Closing it, or opening the tablet while it is up, also clears anything still waiting. */
function nudgeBag(){
  const r = courseStore();
  if (!r.reciteNudges || typeof r.reciteNudges !== 'object') r.reciteNudges = { shown: {}, pending: [] };
  if (!r.reciteNudges.shown || typeof r.reciteNudges.shown !== 'object') r.reciteNudges.shown = {};
  if (!Array.isArray(r.reciteNudges.pending)) r.reciteNudges.pending = [];
  return r.reciteNudges;
}
function noteReciteNudge(id, name){
  if (!id || !name) return;
  const bag = nudgeBag();
  if (bag.shown[id] || bag.pending.some(p => p && p.id === id)) return;
  bag.pending.push({ id: id, name: name, at: Date.now() });
  save();
}
function concealReciteNudge(){
  const el = $('recite-callout'), icon = $('recite-open');
  if (el) el.hidden = true;
  if (icon) icon.classList.remove('is-glow');
  document.body.classList.remove('recite-nudge');
}
function dismissReciteNudge(){
  const el = $('recite-callout');
  if (!el || el.hidden) return;
  const bag = nudgeBag();
  bag.pending.forEach(p => { if (p && p.id) bag.shown[p.id] = true; });
  bag.pending = [];
  save();
  concealReciteNudge();
}
function refreshReciteNudge(){
  const home = $('scr-home');
  if (!home || !home.classList.contains('active')) { concealReciteNudge(); return; }
  const bag = nudgeBag();
  const pending = bag.pending.filter(p => p && p.id && !bag.shown[p.id]);
  if (!pending.length) { concealReciteNudge(); return; }
  const item = pending.slice().sort((a, b) => (b.at || 0) - (a.at || 0))[0];
  const el = $('recite-callout'), name = $('recite-callout-name'), icon = $('recite-open');
  if (!el || !name) return;
  name.innerHTML = item.name;
  el.hidden = false;
  if (icon) icon.classList.add('is-glow');
  document.body.classList.add('recite-nudge');
  bag.shown[item.id] = true;
  bag.pending = bag.pending.filter(p => !p || p.id !== item.id);
  save();
}
$('recite-callout').onclick = dismissReciteNudge;

/* The Tablet button shows only on the homepage. */
function reciteScreenChanged(id){
  const open = $('recite-open');
  if (open) open.style.display = (id === 'scr-home') ? '' : 'none';
  document.body.classList.toggle('off-home', id !== 'scr-home');
  if (id === 'scr-home'){
    refreshReciteNudge();
    if (typeof renderReciteReminder === 'function') renderReciteReminder();
  } else concealReciteNudge();
}
