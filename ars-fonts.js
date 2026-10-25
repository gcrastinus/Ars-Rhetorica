/* Ars font and display settings: the + menu (dark mode, then font), the footer font note.
   Shared by the trivium sites. The font is applied before first paint by the small loader in <head>. */
(function(){
  const $ = id => document.getElementById(id);
  const FONTS = [['standard','Classic Modern'],['plain','Plain Modern'],['garamond','Renaissance Printed'],['italic','Renaissance Italic'],['fraktur','Medieval Gothic'],['copperplate','Cursive']];
  const NOTES = {"plain": "<b>Font: Plain Modern</b>, set in Atkinson Hyperlegible Next. The Braille Institute of America, named for its founder J. Robert Atkinson, released the first Atkinson Hyperlegible in 2019 to make reading easier for people with low vision. It is a grotesque sans serif with distinct, unambiguous letterforms, and this refined edition, Next, came to Google Fonts in 2025 with new weights, better kerning and wider language support. Designed by the Braille Institute, Applied Design Works, Elliott Scott, Megan Eiswerth and Letters From Sweden; SIL Open Font License 1.1.", "standard": "<b>Font: Classic Modern</b>, set in Libre Caslon Text and Libre Caslon Display. These are revivals of the Caslon types that William Caslon first cut in London in the 18th century, drawn here after the hand-lettered Caslons of 1950s advertising. Designed by Pablo Impallari (Impallari Type); SIL Open Font License 1.1.", "fraktur": "<b>Font: Medieval Gothic</b>, set in UnifrakturMaguntia. It is a German blackletter (Fraktur) in the tradition that began with Gutenberg's types at Mainz, and it is based on Peter Wiegel's Berthold Mainzer Fraktur, which follows a 1901 typeface by Carl Albert Fahrenwaldt. Designed by j. 'mach' wust after Peter Wiegel; SIL Open Font License 1.1.", "garamond": "<b>Font: Renaissance Printed</b>, set in EB Garamond. It revives the roman types that Claude Garamont cut in Paris in the mid-16th century, as they appear in the Berner specimen printed at Frankfurt in 1592. Designed by Georg Duffner and Octavio Pardo; SIL Open Font License 1.1.", "italic": "<b>Font: Renaissance Italic</b>, set in Felipa. It follows the Italian chancery cursive, the hand that Ludovico degli Arrighi taught in his writing books of the 1520s and that Aldus Manutius first brought into print as italic type at Venice in 1501, here redrawn with a contemporary feeling. Designed by Fontstage; SIL Open Font License 1.1.", "copperplate": "<b>Font: Cursive</b>, set in Pinyon Script. It is a round hand script in the manner of 18th-century English copperplate, the writing that masters of penmanship engraved on copper plates for their copybooks. Designed by Nicole Fally; SIL Open Font License 1.1."};
  const host = $('top-right-controls'), dark = $('dark-toggle');
  if(!host || !dark) return;
  /* the + button goes last, at the far top right; the old dark-mode button stays in the page, hidden, for its logic */
  const wrap = document.createElement('div');
  wrap.className = 'set-wrap'; wrap.id = 'set-wrap';
  wrap.innerHTML = '<button type="button" id="set-btn" title="Dark mode and font" aria-label="Dark mode and font" aria-haspopup="true" aria-expanded="false" aria-controls="set-menu"><span aria-hidden="true">+</span></button>'
    + '<div class="set-menu" id="set-menu" role="menu" aria-label="Display settings" hidden>'
    + '<button type="button" role="menuitemcheckbox" id="set-dark" aria-checked="false"><span class="set-check" aria-hidden="true"></span><span>Dark mode</span></button>'
    + '<div class="set-sep" role="separator"></div><div class="set-head" id="set-font-head">Font</div>'
    + '<div class="set-fonts" role="group" aria-labelledby="set-font-head"></div></div>';
  host.appendChild(wrap);
  dark.hidden = true;
  const credit = document.querySelector('.designer-credit');
  if(credit && !$('font-note')){ const p = document.createElement('p'); p.className = 'font-note'; p.id = 'font-note'; p.setAttribute('aria-live','polite'); credit.parentNode.appendChild(p); }
  const btn = $('set-btn'), menu = $('set-menu');
  const cur = () => document.documentElement.getAttribute('data-font') || 'standard';
  function apply(k){
    if(!NOTES[k] || k==='standard') document.documentElement.removeAttribute('data-font');
    else { window.arsLoadFont && arsLoadFont(k); document.documentElement.setAttribute('data-font', k); }
  }
  function setFont(k){ apply(k); try{ localStorage.setItem('arsFont', k); }catch(e){} sync(); }
  const box = menu.querySelector('.set-fonts');
  FONTS.forEach(([k,label])=>{
    const b = document.createElement('button');
    b.type = 'button'; b.setAttribute('role','menuitemradio'); b.dataset.font = k;
    b.innerHTML = '<span class="set-check" aria-hidden="true"></span><span>'+label+'</span>';
    b.onclick = e=>{ e.stopPropagation(); setFont(k); };
    box.appendChild(b);
  });
  function sync(){
    const k = cur(), n = $('font-note');
    if(n) n.innerHTML = NOTES[k] || NOTES.standard;
    box.querySelectorAll('[data-font]').forEach(b=>b.setAttribute('aria-checked', String(b.dataset.font===k)));
    $('set-dark').setAttribute('aria-checked', String(document.body.classList.contains('dark')));
  }
  const items = () => [...menu.querySelectorAll('button')];
  function close(focusBtn){ menu.hidden = true; btn.setAttribute('aria-expanded','false'); if(focusBtn) btn.focus(); }
  function open(){ sync(); menu.hidden = false; btn.setAttribute('aria-expanded','true'); (menu.querySelector('[aria-checked="true"][data-font]')||items()[0]).focus(); }
  btn.onclick = e=>{ e.stopPropagation(); if(menu.hidden) open(); else close(); };
  $('set-dark').onclick = e=>{ e.stopPropagation(); dark.click(); sync(); };
  new MutationObserver(sync).observe(document.body, {attributes:true, attributeFilter:['class']});
  menu.addEventListener('keydown', e=>{
    const it = items(), i = it.indexOf(document.activeElement);
    if(e.key==='ArrowDown'){ e.preventDefault(); it[(i+1)%it.length].focus(); }
    else if(e.key==='ArrowUp'){ e.preventDefault(); it[(i-1+it.length)%it.length].focus(); }
    else if(e.key==='Home'){ e.preventDefault(); it[0].focus(); }
    else if(e.key==='End'){ e.preventDefault(); it[it.length-1].focus(); }
    else if(e.key==='Tab'){ close(); }
  });
  document.addEventListener('keydown', e=>{ if(e.key==='Escape' && !menu.hidden){ e.stopPropagation(); close(true); } }, true);
  document.addEventListener('click', e=>{ if(!menu.hidden && !wrap.contains(e.target)) close(); });
  window.addEventListener('storage', e=>{ if(e.key==='arsFont' && e.newValue){ apply(e.newValue); sync(); } });
  sync();
})();
