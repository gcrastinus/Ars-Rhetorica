/* Ars Rhetorica data */
"use strict";

const SRC = {
  arist_rhet:{kind:'primary', short:'Aristotle, <i>Rhetoric</i>',
    full:'Aristotle, <i>Rhetoric</i> (<i>Technē rhētorikē</i>), trans. W. Rhys Roberts (Oxford, 1924). Public domain. Cited by book and chapter. The spine of this course: definition, three pisteis, three species, enthymeme and example, the passions, lexis.',
    note:'Roberts is the working English. Greek terms are given beside it.'},
  arist_poet:{kind:'primary', short:'Aristotle, <i>Poetics</i>',
    full:'Aristotle, <i>Poetics</i>, trans. S. H. Butcher. Public domain.', note:''},
  cic_inv:{kind:'primary', short:'Cicero, <i>De inventione</i>',
    full:'Cicero, <i>De inventione</i>, trans. C. D. Yonge (Bohn). Public domain. The three genera; the six parts of the oration.', note:''},
  cic_orat:{kind:'primary', short:'Cicero, <i>Orator</i> and <i>De oratore</i>',
    full:'Cicero, <i>Orator</i> and <i>De oratore</i>, trans. C. D. Yonge. Public domain. Docere, delectare, movere; the three styles.', note:''},
  cic_cat:{kind:'primary', short:'Cicero, Catilinarians',
    full:'Cicero, <i>In Catilinam</i> I–IV: the bank’s English is H. E. D. Blakiston (1894), public domain. Other speeches in this key (<i>Pro Milone</i>, <i>Pro Marcello</i>, <i>Philippics</i>, <i>In Verrem</i>) remain the public-domain English already in the bank.', note:'Catilinarian excerpts match Blakiston (attalus.org), not Yonge’s “When, O Catiline…”.'},
  cic_yonge:{kind:'primary', short:'Cicero, orations, trans. Yonge',
    full:'Cicero, <i>Pro Archia</i> and <i>Pro Lege Manilia</i>, trans. C. D. Yonge, <i>The Orations of Marcus Tullius Cicero</i> (Bohn, 1856). Public domain in the United States and abroad. The Catilinarian English in the bank is Blakiston. These two speeches are Yonge.',
    note:'Yonge died in 1891. Quoted from the Perseus text, with spacing collapsed to single spaces.'},
  lysias_lamb:{kind:'primary', short:'Lysias, trans. Lamb',
    full:'Lysias, selected speeches, trans. W. R. M. Lamb, Loeb Classical Library (1930). Public domain in the United States. Lamb died in 1961, so a life-plus-seventy term may still bind abroad until the end of 2031.',
    note:'Quoted from the Perseus text of the Loeb. Footnotes are omitted and spacing is collapsed to single spaces.'},
  quint:{kind:'primary', short:'Quintilian, <i>Institutio oratoria</i>',
    full:'Quintilian, <i>Institutio oratoria</i>, trans. H. E. Butler, Loeb (1920–22). Public domain in the United States.', note:''},
  ddc:{kind:'primary', short:'Augustine, <i>De doctrina christiana</i> IV',
    full:'Augustine, <i>De doctrina christiana</i> Book IV, trans. J. F. Shaw, NPNF I.2. Public domain. Latin from the Maurist text. Docere, delectare, flectere; three styles; tears, not applause.',
    note:'The Aquinas Institute English on augustinus.cc is not used.'},
  aug_pusey:{kind:'primary', short:'Augustine, <i>Confessions</i>, trans. Pusey',
    full:'Augustine, <i>Confessions</i>, trans. E. B. Pusey. Public domain. Latin from augustinus.cc (Maurist).', note:''},
  aug_npnf:{kind:'primary', short:'Augustine, NPNF letters and sermons',
    full:'Augustine, selected Letters and Sermons, NPNF I.1 and I.6. Public domain.', note:''},
  aquinas_st:{kind:'primary', short:'Thomas Aquinas, <i>Summa theologiae</i> I–II',
    full:'Thomas Aquinas, <i>Summa theologiae</i> I–II qq. 22–48. English Dominican translation, public domain.', note:'Beside Aristotle, Rhetoric II.'},
  greg:{kind:'primary', short:'Gregory the Great, <i>Pastoral Care</i>',
    full:'Gregory the Great, <i>Liber regulae pastoralis</i>, trans. James Barmby, NPNF II.12. Public domain.', note:''},
  gorgias_vh:{kind:'primary', short:'Gorgias, <i>Encomium of Helen</i>, trans. Van Hook',
    full:'Gorgias of Leontini, <i>Encomium of Helen</i>, trans. Larue Van Hook, The Classical Weekly 6 (1913). Public domain.', note:'Logos as potentate; persuasion as a drug; four aitiai.'},
  antiphon:{kind:'primary', short:'Antiphon, Second Tetralogy',
    full:'Antiphon, Second Tetralogy (3.1–3.4). English from the classroom translation of the javelin case. Cited by tetralogy and speech number.',
    note:'A sophistic school-piece in forensic form: four speeches, two a side.'},
  thuc_crawley:{kind:'primary', short:'Thucydides, trans. Crawley',
    full:'Thucydides, History of the Peloponnesian War, trans. Richard Crawley. Public domain.', note:''},
  herodotus:{kind:'primary', short:'Herodotus, trans. Macaulay',
    full:'Herodotus, Histories, trans. G. C. Macaulay. Public domain. The bank’s English is Macaulay (Dareios, Artoxerxes, Hellas, Thermopylai, Tellos), not Rawlinson.', note:''},
  sallust_w:{kind:'primary', short:'Sallust, trans. Watson',
    full:'Sallust, Bellum Catilinae, trans. J. S. Watson. Public domain.', note:''},
  livy_r:{kind:'primary', short:'Livy',
    full:'Livy, Ab urbe condita. Public-domain English (Spillan; Canon Roberts).', note:''},
  tacitus_cb:{kind:'primary', short:'Tacitus, trans. Church &amp; Brodribb',
    full:'Tacitus, Annals and Agricola, trans. Church and Brodribb. Public domain. Not the English of the bank’s Annals (Gordon) or Agricola/Calgacus (Murphy).', note:'C&amp;B Agricola has “solitude,” not “desert.”'},
  tacitus_gordon:{kind:'primary', short:'Tacitus, <i>Annals</i>, trans. Gordon',
    full:'Tacitus, <i>Annals</i>, trans. Thomas Gordon. Public domain.', note:'The opening of the Annals in the bank is Gordon (“Kings were the original Magistrates…”).'},
  tacitus_murphy:{kind:'primary', short:'Tacitus, <i>Agricola</i>, trans. Murphy',
    full:'Tacitus, <i>Agricola</i>, trans. Arthur Murphy. Public domain. Calgacus: “where they make a desert, they call it peace.”', note:'Church and Brodribb have “solitude,” not “desert.”'},
  plato_jowett:{kind:'primary', short:'Plato, trans. Jowett',
    full:'Plato, Apology, Crito, Phaedrus, Symposium, Menexenus, Protagoras, Gorgias, trans. Benjamin Jowett. Public domain.', note:''},
  demosth:{kind:'primary', short:'Demosthenes, trans. Pickard',
    full:'Demosthenes, public orations, trans. A. W. Pickard-Cambridge, <i>The Public Orations of Demosthenes</i>. Public domain. The bank’s English is Pickard (not Vince).', note:''},
  soph_storr:{kind:'primary', short:'Sophocles, trans. Storr',
    full:'Sophocles, Oedipus Tyrannus and Antigone, trans. F. Storr, Loeb 1912–13. Public domain.', note:''},
  homer:{kind:'primary', short:'Homer, trans. Pope',
    full:'Homer, Iliad, trans. Alexander Pope. Public domain.', note:''},
  virgil:{kind:'primary', short:'Virgil, trans. Dryden',
    full:'Virgil, Aeneid, trans. John Dryden. Public domain.', note:''},
  boeth:{kind:'primary', short:'Boethius, Consolation',
    full:'Boethius, De consolatione philosophiae, public-domain English.', note:''},
  douay:{kind:'primary', short:'Douay-Rheims Bible',
    full:'The Holy Bible, Douay-Rheims translation. Public domain.', note:''},
  plutarch_d:{kind:'primary', short:'Plutarch, trans. Dryden/Clough',
    full:'Plutarch, Lives, trans. Dryden, rev. Clough. Public domain.', note:''},
  appown:{kind:'study', short:'This course’s own arrangement',
    full:'The wording, the ordering of the acts, and the pedagogical scaffolding are this course’s own.', note:''},
  copeland:{kind:'study', short:'Copeland &amp; Sluiter',
    full:'Rita Copeland and Ineke Sluiter, eds., Medieval Grammar and Rhetoric, Oxford, 2012.', note:''},
  // English tradition: public-domain quotations as printed in Farnsworth’s Classical English Rhetoric and Classical English Metaphor (his commentary is not used).
  eng_cer:{kind:'primary', short:'English authors, from Farnsworth’s <i>Classical English Rhetoric</i>', full:'Passages by English and American writers and speakers, quoted as printed in Ward Farnsworth, <i>Farnsworth’s Classical English Rhetoric</i> (David R. Godine, 2011). The passages themselves are public domain; Farnsworth’s commentary is not reproduced.', note:''},
  eng_cem:{kind:'primary', short:'English authors, from Farnsworth’s <i>Classical English Metaphor</i>', full:'Passages by English and American writers and speakers, quoted as printed in Ward Farnsworth, <i>Farnsworth’s Classical English Metaphor</i> (David R. Godine, 2016). The passages themselves are public domain; Farnsworth’s commentary is not reproduced.', note:''},
  kjv:{kind:'primary', short:'King James Bible', full:'The Holy Bible, Authorized (King James) Version, 1611. Public domain in the United States.', note:''},
  lincoln_ev:{kind:'primary', short:'Abraham Lincoln, <i>Speeches and Letters</i>', full:'Abraham Lincoln, <i>Speeches &amp; Letters of Abraham Lincoln, 1832–1865</i>, ed. Merwin Roe (Everyman’s Library, 1907). Public domain.', note:''},
  burke_n:{kind:'primary', short:'Edmund Burke, <i>Speech on Conciliation with America</i>', full:'Edmund Burke, <i>Speech on Conciliation with America</i>, ed. Sidney Carleton Newsom (Project Gutenberg no. 5655). Burke’s text of 1775 is public domain.', note:''},
  webster_w:{kind:'primary', short:'Daniel Webster, <i>Great Speeches and Orations</i>', full:'Daniel Webster, <i>The Great Speeches and Orations of Daniel Webster</i>, ed. Edwin P. Whipple (the Project Gutenberg text, no. 12606, is from a printing of 1923). Public domain in the United States.', note:''}
};
function srcLine(keys){
  if(!keys) return '';
  const list = Array.isArray(keys) ? keys : [keys];
  const bits = list.map(k => SRC[k]
    ? '<a href="#" class="src-link" data-src="'+k+'">'+SRC[k].short+'</a>'
    : '<span class="src-missing">unsourced — '+k+'</span>');
  return '<div class="src">'+bits.join(' &nbsp;·&nbsp; ')+'</div>';
}
const KIND_NAME = {primary:'A source text', study:'A scholarly study', modern:'A modern account'};


const DECKS = {};
DECKS.orient = {
  title:'What Rhetoric Is', sub:'An orientation — not scored',
  panels:[
{ src:['appown','copeland'], h:'<p><strong>THE THIRD ART.</strong> The old course of study put three arts together and called them the <span class="lat">trivium</span>: <strong>grammar</strong>, which asks whether the utterance is well formed (<span class="lat">congruitas</span>); <strong>logic</strong>, which asks whether what is said is true, and what follows; and <strong>rhetoric</strong>, which asks whether the hearer is moved to see it.</p><p>These three questions are distinct. <em>The moon is made of green cheese</em> is congruous and false, while <em>Him go store yesterday</em> is incongruous and may well be true. A speech may be both well formed and true and still fail, if it does not find the available means of persuasion in this case, for these hearers.</p><p>This course is Aristotelian in its spine and Ciceronian in its arrangement, and it takes Augustine at his word that the Christian orator still has three offices: to teach, to delight, to move. It does not grade compositions; rather, it trains the eye on real speeches.</p>' },
{ src:['arist_rhet'], h:'<p><strong>The definition.</strong> Aristotle opens the <em>Rhetoric</em> by pairing the art with dialectic: “Rhetoric is the counterpart of Dialectic” (I.1, 1354a1). Both deal with matters that can go either way, and neither is a science of a special subject. Then, in I.2, he gives the working definition:</p><p style="font-style:italic">Rhetoric may be defined as the faculty of observing in any given case the available means of persuasion.</p><p>Notice that the definition does not say “the art of winning.” The orator’s first work is to <em>see</em> what can be said. Quintilian will later call rhetoric <span class="lat">bene dicendi scientia</span>, that is, the science of speaking well (<em>Institutio</em> 2.15.34, Butler).</p>',
  q:{ prompt:'On Aristotle’s definition, what is rhetoric first of all?',
      options:['The art of winning any case you are paid to win','The faculty of seeing, in this case, the available means of persuasion','A science of a special subject, like geometry','The study of tropes and figures only'],
      correct:1,
      explain:'In I.2 rhetoric is “the faculty of observing in any given case the available means of persuasion.” Winning is an effect of the art, not the art itself, and the figures belong to lexis (style, the choice and arrangement of words).' } },
{ src:['arist_rhet'], h:'<p><strong>Three pisteis.</strong> The <em>pisteis</em> are the means of persuasion, or proofs. Some are <span class="lat">atechnoi</span>, that is, inartistic, because the speaker finds them ready to hand (laws, witnesses, contracts); others are <span class="lat">entechnoi</span>, that is, artistic, because the art itself furnishes them. Of the artistic proofs there are three (I.2, 1356a):</p><ul style="margin:8px 0 8px 22px"><li><strong>Ethos</strong> (character): the proof lies in the character of the speaker, as the speech itself shows him trustworthy.</li><li><strong>Pathos</strong> (feeling): the proof lies in putting the hearer into a certain frame of mind.</li><li><strong>Logos</strong> (speech, argument): the proof lies in the speech itself, when we have proved a truth or an apparent truth by suitable arguments.</li></ul><p>Aristotle says that the character of the speaker is nearly the most effective means of persuasion.</p>',
  q:{ prompt:'Which pistis lies in the hearer’s frame of mind?',
      options:['Ethos','Pathos','Logos','The inartistic proofs (laws, witnesses)'],
      correct:1,
      explain:'Pathos works by putting the hearer into a certain frame of mind. Ethos, by contrast, lies in the speaker as the speech shows him, and logos lies in the argument itself.' } },
{ src:['arist_rhet','cic_inv'], h:'<p><strong>Three species, three ends.</strong> Aristotle (I.3) divides speeches into three species, or kinds, according to the hearer’s office, that is, according to what the hearer is asked to judge:</p><ul style="margin:8px 0 8px 22px"><li><strong>Deliberative</strong> (<span class="lat">symbouleutikon</span>): the assembly judges the future, that is, the expedient and the harmful. Its end is to exhort or dissuade.</li><li><strong>Forensic</strong> (<span class="lat">dikanikon</span>): the jury judges the past, that is, the just and the unjust. Its end is to accuse or defend.</li><li><strong>Epideictic</strong> (<span class="lat">epideiktikon</span>): the spectator judges the present, that is, the noble and the shameful. Its end is to praise or blame.</li></ul><p>Pericles’ funeral oration is the showpiece of the third species, and Antiphon’s tetralogy is a school-piece of the second. Cleon and Diodotus on Mytilene are deliberative, because although they argue about a past act, what they ask the assembly to decide is a future policy.</p>',
  q:{ prompt:'A jury is asked whether a thrower of a javelin is guilty of unintentional homicide. The species is',
      options:['Deliberative: the expedient','Forensic: the just and the unjust','Epideictic: the noble','A fourth species that Aristotle omitted'],
      correct:1,
      explain:'The hearer judges a past act by the standard of the just and the unjust, and that makes the speech forensic. Antiphon’s Second Tetralogy is built on exactly this situation.' } },
{ src:['arist_rhet'], h:'<p><strong>Two bodies of proof in logos.</strong> The orator’s own arguments take two forms: the <strong>enthymeme</strong> (a rhetorical syllogism, that is, a deduction suited to a public hearing) and the <strong>example</strong> (<span class="lat">paradeigma</span>, a rhetorical induction). In the enthymeme one premise is often left unsaid, because the hearers supply it. This is not a defect; it is simply how speech works among people who already share a world.</p><p>The topics (<span class="lat">topoi</span>, literally <em>places</em>) are the seats of arguments: more and less, from contraries, from consequences, from definition. So we invent an argument by going to a place and looking for what can be found there.</p>' }
]};

DECKS.logos = {
  title:'Invention · Logos', sub:'Enthymeme, example, topics — not scored',
  panels:[
{ src:['arist_rhet'], h:'<p><strong>The enthymeme.</strong> The enthymeme is a syllogism concerned with things that can be otherwise. It draws on likely premises or on signs, and it is addressed to hearers who cannot be led through a long chain of reasoning, so one premise is commonly omitted.</p><p>Take Cicero in the First Catilinarian: Catiline still lives, and he even sits in the senate. What goes unspoken is that a man who plots the massacre of the senate ought not to sit in it, and the hearers complete the argument themselves. That is why the question “Lives?” works.</p>',
  q:{ prompt:'What makes an enthymeme rhetorical rather than a full syllogism of the <em>Analytics</em>?',
      options:['It is always invalid in its syllogistic form','Its premises are probable, and hearers often supply one','It never argues from signs of any kind','It belongs only to forensic oratory in court'],
      correct:1,
      explain:'Rhetoric deals with what can be otherwise. So the form of the enthymeme is still syllogistic, but its matter is only likely, and its audience is not a class in logic.' } },
{ src:['arist_rhet'], h:'<p><strong>Example.</strong> The other body of proof is the <span class="lat">paradeigma</span>, or example. The historical example argues from what has happened before: this is what the Persians did, and this is what our fathers did. Pericles’ funeral oration works by holding up Athens herself as the example, so that the city stands as the paradeigma of the men being buried.</p><p>Two topics show how the places work. By the topic of <em>more and less</em>, if even the lesser thing holds, the greater holds. By the topic of <em>contraries</em>, if war is the cause of our evils, peace is the cause of their opposites.</p>' },
{ src:['arist_rhet'], h:'<p><strong>Signs and likelihoods.</strong> A necessary sign (<span class="lat">tekmerion</span>, a sure proof) works like a syllogism from a necessary premise: if he has a fever, he is ill. A fallible sign, on the other hand, is only likely. So the orator who treats a fallible sign as necessary is cheating the hearer, and Aristotle names the cheat.</p><p>Consider Antiphon’s javelin case. The facts are agreed, and the fight is over <em>cause</em> and <em>hamartia</em> (error, literally a missing of the mark). A sign (the boy is dead; a javelin was thrown) does not by itself settle which description is the just one.</p>',
  q:{ prompt:'The boy is dead, and a javelin was thrown. Taken as a proof that the thrower is guilty of homicide, that pair of facts is',
      options:['A necessary sign (tekmerion): from these facts the guilt cannot fail','A fallible sign: agreed facts that do not settle whose error it was','A complete syllogism, as in Aristotle’s Analytics','An inartistic proof, like a written law brought in from outside'],
      correct:1,
      explain:'The death and the throw are signs, but they do not name the cause. To treat them as a tekmerion, a necessary sign, is the cheat Aristotle warns against.' } },
{ src:['arist_rhet','cic_cat'], h:'<p><strong>How to hear an enthymeme.</strong> The exercise that follows gives a sentence from a speech and asks what premise the hearers are meant to supply, so let us work one example here, in the open.</p><p>Cicero says: <em>Lives? Yes, lives; and even comes down to the senate.</em> What he says is a fact the senate can see. What makes it an argument is something the senators already hold, namely that a man who plots the massacre of the senate ought not to sit in it. When we name that unspoken premise, we have named the enthymeme.</p>',
  q:{ prompt:'Cicero says that Catiline still lives, and even sits in the senate. What premise are the hearers meant to supply?',
      options:['All senators live in Rome','A man who plots the massacre of the senate ought not to sit in it','Javelins always fly true','The parts of an oration are six'],
      correct:1,
      explain:'The fact is visible to everyone, but the premise that turns it into a charge is the one the senate already grants. Finding such premises is the work of the next exercise.' } }
]};

DECKS.ethos = {
  title:'Invention · Ethos and Pathos', sub:'Character, passions, the hearers — not scored',
  panels:[
{ src:['arist_rhet'], h:'<p><strong>Ethos in the speech.</strong> We trust a speaker for three reasons, all shown <em>in the speech</em>: practical wisdom (<span class="lat">phronesis</span>), virtue (<span class="lat">arete</span>), and goodwill (<span class="lat">eunoia</span>). A reputation brought in from outside the speech, by contrast, is an inartistic proof.</p><p>Socrates in the <em>Apology</em> refuses the usual captatio (the bid for the hearers’ goodwill) and says he will speak as he speaks in the marketplace. That refusal is itself ethos, since it shows virtue rather than borrowing a name. Antiphon’s defendant claims he is <span class="lat">apragmon</span>, a man who minds his own business, and says he has been forced into court. Archidamus opens on his years and his wars, and so shows practical wisdom. The exercise that follows asks which of the three is doing the work.</p>',
  q:{ prompt:'Socrates will not speak in the language of the law-court, but as he speaks in the marketplace. What is shown in the speech?',
      options:['An inartistic proof: his reputation, brought in from outside','Virtue (arete): his manner shows the man','A necessary sign that he is innocent','The office of narration, stating the facts'],
      correct:1,
      explain:'Aristotle says in I.2 that ethos lies in the speech. So the refusal of a borrowed eloquence is itself a showing of character, whereas a reputation named from outside would be atechnos, an inartistic proof.' } },
{ src:['arist_rhet','aquinas_st'], h:'<p><strong>Pathos.</strong> Rhetoric II is a treatise on the passions: anger and mildness, love and hate, fear and confidence, shame, kindness, pity, indignation, envy, emulation. For each passion Aristotle gives a definition, the state of mind, the objects, and the grounds.</p><p>St Thomas maps the same motions in I–II and divides them by their object into the <strong>concupiscible</strong> (love, hate, desire, aversion, pleasure, pain) and the <strong>irascible</strong> (hope, despair, fear, daring, anger); the irascible passions are those in which the good or evil is arduous, that is, hard to attain or to avoid. Aristotle’s list is written for the orator and Thomas’s for the theologian, and this course uses both.</p>',
  q:{ prompt:'On Aquinas’s division, anger belongs to',
      options:['The concupiscible appetite, because it is a simple love of revenge','The irascible appetite, because its object is an arduous evil','The intellect, because it is a judgment','Pathos only, never a passion of the soul'],
      correct:1,
      explain:'Anger is irascible, because its object is an evil that must be overcome. Rhetoric names anger because the orator must know what state of mind anger is, toward whom it is felt, and on what grounds (Aristotle II.2).' } },
{ src:['greg'], h:'<p><strong>Gregory’s pairs.</strong> The <em>Pastoral Care</em> is a book about hearers, and its premise is that the same word does not cure the same vice in every hearer. Rhetoric without a doctrine of the hearer is only a box of figures; what Gregory writes is a box of hearers.</p><p>He proceeds by pairs, because a word that heals one hearer wounds another:</p><ul style="margin:8px 0 8px 22px"><li><strong>The joyful and the sad.</strong> Before the joyful, the punishments that follow excess; before the sad, the promised goods of the kingdom.</li><li><strong>The poor and the rich.</strong> Comfort against tribulation for the one; fear of elation for the other.</li><li><strong>Subjects and prelates.</strong> Subjection must not crush; place must not swell, nor command more than is just.</li><li><strong>The humble and the proud.</strong> Praise the humble carefully, lest praise become a snare; rebuke the proud, lest silence confirm them.</li></ul><p>The exercise that follows gives a pair and asks <em>why</em> the two are paired, that is, what the two hearers need differently. The reason is always of the same kind: the same medicine is not for every constitution.</p>' }
]};

DECKS.taxis = {
  title:'Arrangement', sub:'Taxis — the parts of the oration — not scored',
  panels:[
{ src:['cic_inv','arist_rhet'], h:'<p><strong>Cicero’s six; Aristotle’s four.</strong> Aristotle’s division of the speech is spare: the opening (<span class="lat">prooimion</span>), the statement of the case with narration as needed, the proof (<span class="lat">pistis</span>), and the close (<span class="lat">epilogos</span>). The Latin school named six <em>offices</em>, that is, duties that a part of the speech may perform:</p><ol style="margin:8px 0 8px 22px"><li><strong>Exordium</strong> (opening): to make the hearers attentive, teachable, and well-disposed.</li><li><strong>Narration</strong> (the facts): brief, clear, and plausible.</li><li><strong>Division</strong> (<span class="lat">partitio</span>, the partition): to set out the points in dispute and the order in which they will be taken.</li><li><strong>Proof</strong> (<span class="lat">confirmatio</span>): to set out one’s own arguments.</li><li><strong>Refutation</strong> (<span class="lat">reprehensio</span>): to answer the other side.</li><li><strong>Peroration</strong> (the close): to recapitulate, and to move.</li></ol><p>The six are offices, not a template to force on every speech; a funeral oration, for example, is not a proof of a crime. A tetralogy may open on the law because the facts are agreed, and then the narration shrinks to a sentence.</p>',
  q:{ prompt:'When the facts are agreed and only the cause is in dispute, which office shrinks?',
      options:['The peroration, because there is nothing to feel','The narration, because the story is not the fight','The proof, because there are no arguments left','The exordium, because the jury is already paying attention'],
      correct:1,
      explain:'Antiphon’s prosecutor says as much at once: when the facts are agreed, the verdict turns on the laws, and yet he still has to argue cause. So the narration can be a single sentence, while proof and refutation swell.' } },
{ src:['cic_cat'], h:'<p><strong>One speech, the six offices.</strong> The First Catilinarian is forensic in its charge and deliberative in its demand that the senate act. Here we should watch its parts as offices, not as chapter headings:</p><ul style="margin:8px 0 8px 22px"><li><strong>Opening.</strong> “How much further, Catilina…” Cicero makes the senators attentive by naming the man in the room.</li><li><strong>Facts.</strong> He tells what was planned last night at Laeca’s house: Italy divided, the city to be fired, the consul to be killed.</li><li><strong>Points in dispute.</strong> The question is not whether there is a conspiracy (he will not grant that as open), but whether the man may still sit here.</li><li><strong>Proof.</strong> “You were then, Catilina, at Laeca’s house that night”; the night is named in the senate’s hearing.</li><li><strong>The other side.</strong> He answers the plea that Catiline still lives among them as if that were a defence, when in fact it is the charge.</li><li><strong>Close.</strong> He tells Catiline to leave the city, so the peroration is a command, and a moving of fear and shame.</li></ul><p>The next exercises ask which office a part of a passage is performing, and they ask us to keep the six in school order. But the order is only a school memory; the offices are what we should see in the speech.</p>' }
]};

DECKS.lexis = {
  title:'Style', sub:'Lexis — clarity, propriety, metaphor — not scored',
  panels:[
{ src:['arist_rhet'], h:'<p><strong>Virtue of style.</strong> Aristotle (III.2) asks that style be clear, and neither mean nor above the dignity of the subject. In the <em>Poetics</em> (1459a) he writes: “The greatest thing by far is to be a master of metaphor.” So clarity comes first and ornament second, and the vice of the sophist is to make the style do the work of the argument.</p><p>Gorgias is the exhibit here. Van Hook’s Helen is almost all figure: antithesis, isocolon, homoeoteleuton. This is not a mistake but a demonstration of what logos can do when it is treated as a drug, and Aristotle admires the power while he distrusts the use.</p>' },
{ src:['gorgias_vh','arist_rhet'], h:'<p><strong>Figures the ear can name.</strong> Here is a short working list of figures of speech, which are neither the means of persuasion nor the offices of the oration:</p><ul style="margin:8px 0 8px 22px"><li><strong>Anaphora</strong>: the same word at the head of successive members.</li><li><strong>Antithesis</strong>: opposed thoughts in parallel frames.</li><li><strong>Tricolon</strong>: three members, often rising.</li><li><strong>Isocolon</strong>: members of equal length.</li><li><strong>Homoeoteleuton</strong>: like endings (Gorgias’s signature).</li><li><strong>Apostrophe</strong>: a turn away from the hearers to address someone absent or dead, a god, or a thing treated as a person; a plain address to the hearers themselves, such as “men of Athens” or “conscript fathers,” is not apostrophe.</li><li><strong>Rhetorical question</strong>: a question that is really a charge.</li><li><strong>Metaphor</strong>: naming one thing with another’s name.</li><li><strong>Irony</strong>: saying the less, or the opposite, to mean the more.</li><li><strong>Chiasmus</strong>: a crossing of terms in the order ABBA.</li></ul><p>The figures exercises that follow ask us to find these in a real passage. They do not ask us to name ethos, or pathos, or an exordium, because those belong to invention and arrangement.</p><p>These are among the commonly taught figures, and the main figures exercises ask only about them. Less common figures (correctio, epizeuxis, polysyndeton, aposiopesis, and others) are still marked in the passages, but they are optional; Division VI ends with an optional set, Further figures, that drills them.</p>' },
{ src:['gorgias_vh','thuc_crawley'], h:'<p><strong>When style does the work of argument.</strong> Aristotle’s warning is practical, as two sentences will show.</p><p>Gorgias says of logos that it is “a powerful potentate, who with frailest, feeblest frame works wonders.” Here the figure is the claim: speech is small and does what a ruler does. If we strip away the antithesis and the personification, little argument remains.</p><p>Diodotus says of counsel: “I think the two things most opposed to good counsel are haste and passion.” We may keep or drop the balance of the members, and the claim still stands. That is style serving an argument, not replacing one.</p><p>The exercise in this division asks which is which. The Gorgias figures set in Division VI drills the ear, and this exercise trains the judgment that should follow the ear.</p>' }
]};


DECKS.gorgias = {
  title:'Gorgias · Encomium of Helen', sub:'Persuasion as a drug — not scored',
  panels:[
{ src:['gorgias_vh'], h:'<p><strong>A showpiece, not a law-court speech.</strong> The <em>Encomium of Helen</em> is epideictic: it praises a woman the tradition blames, and it displays what logos can do. In Van Hook’s translation (1913): “Logos is a powerful potentate, who with frailest, feeblest frame works wonders. For it can put an end to fear and make vexation vanish; it can inspire exultation and increase compassion.”</p><p>Speech is small, but its work is not small. Aristotle will classify this as pathos produced by lexis, whereas Gorgias offers it as a physics of the soul.</p>' },
{ src:['gorgias_vh'], h:'<p><strong>Four aitiai.</strong> Helen went, and the question is why. Gorgias gives four causes (aitiai), and if any one of them holds, she is to be acquitted:</p><ol style="margin:8px 0 8px 22px"><li>The disposition of <strong>fortune</strong>, the gods, necessity.</li><li><strong>Violence</strong>: she was taken.</li><li><strong>Persuasion</strong>: logos deceived her.</li><li><strong>Love</strong>.</li></ol><p>“For either by the disposition of fortune and the ratification of the gods and the determination of necessity she did what she did, or by violence confounded, or by persuasion dumbfounded or to Love surrendered.” If logos is a drug, then being persuaded is being acted on, and the accuser has charged the patient.</p>',
  q:{ prompt:'On Gorgias’s four aitiai, being persuaded by speech is most like',
      options:['Choosing freely, and therefore being guilty','Acted on, as by a drug or violence, and so not culpable','A logical demonstration from necessary premises','A forensic narration of agreed facts'],
      correct:1,
      explain:'Helen 8–14 treats logos as a potentate and song as witchery. If persuasion captures the soul, then the one persuaded is not the cause of what he does. Aristotle will not grant that account of agency, and the course asks us to recognize the account rather than to adopt it.' } },
{ src:['gorgias_vh','arist_rhet'], h:'<p><strong>Witchery.</strong> “Inspired incantations are provocative of charm and revocative of harm. For the power of song in association with the belief of the soul captures and enraptures and translates the soul with witchery.”</p><p>We should hold this beside Aristotle’s cooler sentence, that the hearer is put into a certain frame of mind. The observation is the same, but the metaphysics is different. A figures set in this course can be almost all Gorgias, because Van Hook’s English is built to be heard as figure. Once we have heard the figures, we should ask whether the argument would survive in plain clauses, and that question is the beginning of judgment.</p>' },
{ src:['gorgias_vh'], h:'<p><strong>Helen is not his only case.</strong> Gorgias also wrote a <em>Defence of Palamedes</em>: Odysseus accuses Palamedes of treason; Palamedes argues that he could not have done the deed and would not have wished to. That is a forensic school-piece, a case rather than a display: Helen praises, while Palamedes defends. The four aitiai of Helen (fortune, violence, persuasion, love) are causes of an act already done, whereas Palamedes has to show that the act was not done at all.</p><p>The figures set that follows this tutorial still uses Helen, because Van Hook’s English of that speech is in the public domain and is written to be heard as figure. Palamedes belongs beside it as the forensic counterpart. So we should hear Helen as epideictic display, and keep Palamedes in mind as what a Gorgian <em>case</em> looks like when there is a charge to answer.</p>' }
]};

DECKS.antiphon = {
  title:'Antiphon · Second Tetralogy', sub:'A forensic school-piece — not scored',
  panels:[
{ src:['antiphon'], h:'<p><strong>The case.</strong> During javelin practice a boy runs out, is struck in the side, and dies on the spot. The facts are agreed. The prosecutor (the dead boy’s father) charges not intentional but <em>unintentional</em> homicide. There are four speeches: the prosecution, the defence, the prosecution’s second speech, and the defence’s second. That is what a tetralogy is, a sophistic school-piece in the shape of a trial.</p><p>What is on trial is <strong>cause</strong> and <strong>hamartia</strong>. So the question is who missed: the thrower, whose javelin flew true at the target, or the boy who ran into the line? Pollution (<span class="lat">miasma</span>) hangs over the city until a verdict names the cause. <span class="lat">Erga</span> stand against <span class="lat">logoi</span> (deeds against words). <span class="lat">Doxa</span> stands against <span class="lat">aletheia</span> (opinion against truth). The defendant calls himself <span class="lat">apragmon</span>, no busybody, forced into court by misfortune.</p>' },
{ src:['antiphon'], h:'<p><strong>How to read it.</strong> These are not Ciceronian orations but a sophistic school-piece in forensic form: four speeches, two on each side, and one set of facts. They are a drill in invention for a case whose narrative is finished on the first page, so every later claim is a redescription of the same throw.</p><p>Of each excerpt we should ask three questions. Which <em>side</em> is speaking? Which means of persuasion (<em>pistis</em>) is doing the work? And which seat of argument (<em>topos</em>: from consequences, from the laws, from more and less, or from the name of the act) does it draw on?</p>',
  q:{ prompt:'In this tetralogy the facts of the throw are agreed. The dispute is therefore',
      options:['Whether a javelin was thrown at all','How to name the act and its cause: whose error (hamartia)','Whether Helen is to be praised or blamed','Whether Athens should sail to Sicily'],
      correct:1,
      explain:'This is forensic oratory at its limit: the narration collapses, and invention has to work on description and cause. That is why the piece is a school exercise.' } }
]};

DECKS.augustine = {
  title:'Augustine · The Christian Orator', sub:'Docere, delectare, flectere — not scored',
  panels:[
{ src:['ddc','cic_orat'], h:'<p><strong>Three offices, kept.</strong> Augustine in <em>De doctrina christiana</em> IV does not throw Cicero away. The orator’s work is still to <strong>teach</strong>, to <strong>delight</strong>, and to <strong>move</strong> (<span class="lat">docere, delectare, flectere</span>). What changes is the end: the Christian orator serves the truth already found in Scripture, and he does not invent a case for pay. So eloquence is not refused but subordinated.</p><p>Three styles go with the three offices: the subdued (<span class="lat">summissum</span>) for teaching, the temperate (<span class="lat">temperatum</span>) for praise and blame, and the grand (<span class="lat">grande</span>) for moving to action. The orator should mix them and should not use the grand style everywhere.</p>' },
{ src:['ddc'], h:'<p><strong>Tears, not applause.</strong> Augustine tells of preaching at Caesarea in Mauretania against the civil brawl called the Caterva. He did not want their shouts but their tears, and when they wept, he knew the speech had done its office. So the test of Christian rhetoric is not the noise in the room but whether the hearer is changed.</p><p>The <em>Confessions</em> are not orations, but they are rhetorically alive: the stolen pears, <em>da mihi castitatem et continentiam, sed noli modo</em>, the child’s voice, “too late loved I Thee,” and “what is time?”</p>',
  q:{ prompt:'For Augustine, the sign that a grand-style sermon has succeeded is',
      options:['Applause and the reputation of the preacher','Tears, and a change of life in the hearer','A perfect isocolon in every member','The suppression of all figures as worldly'],
      correct:1,
      explain:'In DDC IV he asked for groans, not cheers, and the Caterva story is the emblem of this. Figures are permitted, but they are not the end.' } }
]};


const SPECIES_MAP = {
  'cic-cat1-1':'deliberative','cic-cat1-2':'deliberative','cic-cat1-4':'deliberative','cic-cat1-5':'deliberative',
  'cic-cat1-6':'deliberative','cic-cat1-7':'deliberative','cic-cat1-8':'deliberative','cic-cat1-9':'deliberative',
  'cic-cat1-13':'deliberative','cic-cat2-1':'epideictic','cic-cat2-3':'deliberative',
  'cic-cat2-11':'deliberative','cic-cat2-12':'deliberative',
  'cic-cat3-1':'epideictic','cic-cat3-10':'epideictic','cic-cat3-11':'epideictic',
  'cic-cat4-1':'deliberative','cic-cat4-2':'deliberative','cic-cat4-4':'deliberative','cic-cat4-5':'deliberative','cic-cat4-9':'deliberative',
  'cic-milo-1':'forensic','cic-milo-2':'forensic','cic-ver-1':'forensic','cic-ver-2':'forensic',
  'cic-marc-1':'epideictic','cic-marc-2':'epideictic','cic-phil-1':'deliberative',
  'plato-ap-1':'forensic','plato-ap-2':'forensic','plato-ap-3':'forensic','plato-ap-4':'forensic','plato-ap-5':'forensic',
  'plato-sym-1':'epideictic','plato-sym-2':'epideictic',
  'thuc-per-1':'epideictic','thuc-per-2':'epideictic','thuc-per-3':'epideictic','thuc-per-4':'epideictic','thuc-per-5':'epideictic',
  'thuc-fun-1':'epideictic','thuc-fun-2':'epideictic',
  'thuc-mel-1':'deliberative','thuc-corc':'deliberative',
  'thuc-arch-1':'deliberative','thuc-sthen-1':'deliberative','thuc-cleon-1':'deliberative','thuc-diod-1':'deliberative','thuc-alc-1':'deliberative',
  'dem-1':'deliberative','dem-2':'deliberative','dem-3':'deliberative',
  'sal-cat-2':'deliberative',
  'sal-cat-consp':'deliberative','sal-caes-1':'deliberative',
  'aug-1':'epideictic','aug-2':'epideictic','aug-3':'epideictic',
  'aug-chast':'epideictic','aug-love':'epideictic','aug-time':'epideictic','aug-pear':'epideictic',
  'tac-cal-1':'deliberative','tac-cal-2':'deliberative','tac-cal-3':'deliberative',
  'hom-il-1':'epideictic','hom-il-2':'deliberative','hom-il-3':'epideictic',
  'verg-1':'epideictic','verg-2':'epideictic','verg-3':'deliberative',
  'boe-1':'deliberative','boe-2':'epideictic',
  'douay-beat':'epideictic','douay-cor':'epideictic','douay-cor2':'epideictic','douay-john':'epideictic','douay-pater':'epideictic',
  'greg-1':'deliberative','greg-2':'deliberative','greg-3':'deliberative','greg-4':'deliberative',
  'greg-5':'deliberative','greg-6':'deliberative','greg-7':'deliberative','greg-8':'deliberative'
};
function speciesOf(p){ return p.species || SPECIES_MAP[p.id] || ''; }
function srcOf(p){
  if(p.src) return p.src;
  if(p.track==='antiphon') return 'antiphon';
  if(p.track==='gorgias') return 'gorgias_vh';
  if(p.author==='Augustine' && /Confessions/.test(p.work)) return 'aug_pusey';
  if(p.author==='Augustine' && /doctrina|Christian Doctrine/i.test(p.work)) return 'ddc';
  if(p.author==='Augustine') return 'aug_npnf';
  if(p.author==='Cicero') return 'cic_cat';
  if(p.author==='Plato') return 'plato_jowett';
  if(p.author==='Thucydides' || /Thucydides/.test(p.author)) return 'thuc_crawley';
  if(/Archidamus|Sthenelaidas|Pericles|Cleon|Diodotus|Alcibiades/.test(p.author)) return 'thuc_crawley';
  if(p.author==='Herodotus') return 'herodotus';
  if(p.author==='Sophocles') return 'soph_storr';
  if(p.author==='Gregory the Great') return 'greg';
  if(p.author==='Sallust' || /Sallust|Catiline|Caesar/.test(p.author)) return 'sallust_w';
  if(p.author==='Tacitus') return 'tacitus_cb';
  if(p.author==='Livy') return 'livy_r';
  if(p.author==='Demosthenes') return 'demosth';
  if(p.author==='Homer') return 'homer';
  if(p.author==='Virgil') return 'virgil';
  if(p.author==='Boethius') return 'boeth';
  if(/Douay/.test(p.author)) return 'douay';
  if(p.author==='Plutarch') return 'plutarch_d';
  if(p.author==='Gorgias') return 'gorgias_vh';
  if(p.author==='Antiphon') return 'antiphon';
  return 'appown';
}
const ANT_SIDE = {
  'ant-3.1.1':'prosecution','ant-3.3.1':'prosecution','ant-3.3.4':'prosecution','ant-3.3.5':'prosecution',
  'ant-3.2.1':'defence','ant-3.2.4':'defence','ant-3.2.6':'defence','ant-3.2.10':'defence',
  'ant-3.4.1':'defence','ant-3.4.8':'defence'
};
const TAXIS_PARTS = [
  {key:'exordium', name:'Exordium', duty:'to make the hearers attentive, teachable, and well-disposed.'},
  {key:'narration', name:'Narration', duty:'to state the facts briefly, clearly, and plausibly.'},
  {key:'division', name:'Division', duty:'to set out the points in dispute and the order of taking them.'},
  {key:'proof', name:'Proof', duty:'to give one’s own arguments (confirmatio).'},
  {key:'refutation', name:'Refutation', duty:'to answer the other side (reprehensio).'},
  {key:'peroration', name:'Peroration', duty:'to recapitulate, and to move.'}
];
const TAXIS_ITEMS = [
  {id:'t1', part:'exordium', text:'How much further, Catilina, will you carry your abuse of our forbearance?', src:'cic_cat', cite:'Cicero, First Catilinarian 1.1'},
  {id:'t2', part:'narration', text:'My boy, struck in the side on the training field by a javelin thrown by this young man, died on the spot.', src:'antiphon', cite:'Antiphon, Second Tetralogy 3.1.1'},
  {id:'t3', part:'division', text:'For either by the disposition of fortune and the ratification of the gods and the determination of necessity she did what she did, or by violence confounded, or by persuasion dumbfounded or to Love surrendered.', src:'gorgias_vh', cite:'Gorgias, Helen 6'},
  {id:'t4', part:'proof', text:'I consider that we are deliberating for the future more than for the present.', src:'thuc_crawley', cite:'Thucydides 3.44, Diodotus'},
  {id:'t6', part:'peroration', text:'How, then, is it fair to blame Helen who, whether by love captivated, or by word persuaded, or by violence dominated, or by divine necessity subjugated, did what she did, and is completely absolved from blame?', src:'gorgias_vh', cite:'Gorgias, Helen 20'},
  {id:'t7', part:'exordium', text:'I am more than seventy years of age, and appearing now for the first time in a court of law, I am quite a stranger to the language of the place.', src:'plato_jowett', cite:'Plato, Apology 17c–d (Jowett) — the refusal of a captatio'},
  {id:'t8', part:'narration', text:'But when a deep consideration had from the secret bottom of my soul drawn together and heaped up all my misery in the sight of my heart; there arose a mighty storm, bringing a mighty shower of tears.', src:'aug_pusey', cite:'Augustine, Confessions VIII.12 (Pusey)'},
  {id:'t9', part:'proof', text:'Logos is a powerful potentate, who with frailest, feeblest frame works wonders.', src:'gorgias_vh', cite:'Gorgias, Helen 8'},
  {id:'t10', part:'peroration', text:'For heroes have the whole earth for their tomb; and in lands far from their own, where the column with its epitaph declares it, there is enshrined in every breast a record unwritten with no tablet to preserve it, except that of the heart.', src:'thuc_crawley', cite:'Thucydides 2.43, Pericles'},
  {id:'t11', part:'exordium', text:'Although I am afraid, gentlemen of the jury, that fear is an unseemly condition in which to begin a speech in defence of the bravest of men.', src:'cic_cat', cite:'Cicero, Pro Milone 1'},
  {id:'t12', part:'exordium', text:'Most of my predecessors in this place have commended him who made this speech part of the law, telling us that it is well that it should be delivered at the burial of those who fall in battle.', src:'thuc_crawley', cite:'Thucydides 2.35, Pericles'},
  {id:'t13', part:'narration', text:'You were then, Catilina, at Laeca’s house that night; you divided Italy into districts; you decided to what quarter you wished each of your friends to proceed.', src:'cic_cat', cite:'Cicero, First Catilinarian 1.4'},
  {id:'t14', part:'proof', text:'If, men of Athens, you first supply the sum I have mentioned, and then, after making ready the rest of the armament—soldiers, ships, cavalry—bind the whole force in its entirety, by law, to remain at the seat of war.', src:'demosth', cite:'Demosthenes, First Philippic'},
  {id:'t15', part:'proof', text:'Inflict only such penalties as the laws have provided.', src:'sallust_w', cite:'Sallust, Catiline 51, Caesar'},
  {id:'t16', part:'refutation', text:'The strong do what they can and the weak suffer what they must. Melians. As we think, at any rate, it is expedient—we speak as we are obliged, since you enjoin us to let right alone and talk only of interest.', src:'thuc_crawley', cite:'Thucydides 5.89–90, Melian dialogue'},
  {id:'t17', part:'exordium', text:'To-day, conscript fathers, has brought to a close the long silence, due not to a feeling of fear, but to mingled feelings of grief and of diffidence.', src:'cic_orat', cite:'Cicero, Pro Marcello 1'},
  {id:'t18', part:'division', text:'Differently to be admonished are these that follow:—Men and women. The poor and the rich. The joyful and the sad.', src:'greg', cite:'Gregory, Pastoral Care III (Barmby)'},
  {id:'t19', part:'narration', text:'Cocles, (that defence the fortune of Rome had on that day,) who, happening to be posted on guard at the bridge, when he saw the Janiculum taken by a sudden assault.', src:'livy_r', cite:'Livy 2.10, Horatius'},
  {id:'t20', part:'refutation', text:'How you, O Athenians, have been affected by my accusers, I cannot tell; but I know that they almost made me forget who I was—so persuasively did they speak; and yet they have hardly uttered a word of truth.', src:'plato_jowett', cite:'Plato, Apology (Jowett)'},
  // English tradition (public-domain quotations; sources eng_cer, eng_cem, kjv).
  {id:'eng-t1', part:'exordium', text:'Friends, Romans, countrymen, lend me your ears; I come to bury Caesar, not to praise him.', src:'eng_cer', cite:'Shakespeare, Julius Caesar 3.2'},
  {id:'eng-t2', part:'division', text:'[T]here are but three ways of proceeding relative to this stubborn spirit which prevails in your colonies and disturbs your government. These are, – to change that spirit, as inconvenient, by removing the causes, – to prosecute it, as criminal, – or to comply with it, as necessary.', src:'eng_cer', cite:'Edmund Burke, Speech on Conciliation with the Colonies (1775)'},
  {id:'eng-t3', part:'refutation', text:'The gentleman asks, When were the colonies emancipated? I desire to know, when were they made slaves?', src:'eng_cer', cite:'William Pitt (the Elder), Speech in the House of Commons (1766)'},
  {id:'eng-t4', part:'refutation', text:'You say they will be better men than the English commoners. I say they will be infinitely worse men, because they are to be chosen blindfolded: their election (the term, as applied to their appointment, is inaccurate) will be an involuntary nomination, and not a choice.', src:'eng_cer', cite:'Patrick Henry, Speech at the Virginia Ratifying Convention (1788)'},
  {id:"t-herm-open", part:"exordium", text:"Camarinaeans, we did not come on this embassy because we were afraid of your being frightened by the actual forces of the Athenians, but rather of your being gained by what they would say to you before you heard anything from us.", src:"thuc_crawley", cite:"Thucydides 6.76, Hermocrates", why:"He opens by telling them why they should listen now: the embassy came not because of “the actual forces of the Athenians”, but because they might be “gained by what they would say” “before you heard anything from us”. That is the work of an opening, to make the hearers attentive and to keep them from the other side’s account."},
  {id:"t-cato-open", part:"exordium", text:"My feelings, Conscript Fathers, are extremely different, when I contemplate our circumstances and dangers, and when I revolve in my mind the sentiments of some who have spoken before me.", src:"sallust_w", cite:"Sallust, Catiline 52, Cato", why:"He begins by setting himself apart from “some who have spoken before me”, so that the senate will hear his view as a different one. An opening makes the hearers teachable, and this one does it by marking the difference before the argument starts."},
  {id:"t-corc-naval", part:"narration", text:"It is true that in the late naval engagement we drove back the Corinthians from our shores single-handed.", src:"thuc_crawley", cite:"Thucydides 1.32, Corcyra", why:"The sentence states a past fact, the “late naval engagement” in which they “drove back the Corinthians from our shores”. Narration states what happened, briefly and so that it can be believed."},
  {id:"t-cori-twenty", part:"narration", text:"When you were in want of ships of war for the war against the Aeginetans, before the Persian invasion, Corinth supplied you with twenty vessels.", src:"thuc_crawley", cite:"Thucydides 1.41, Corinth", why:"Corinth states what she did in a former war: she “supplied you with twenty vessels” “before the Persian invasion”. That is narration, the office that puts the facts before the hearers."},
  {id:"t-nic-two", part:"division", text:"I will, therefore, content myself with showing that your ardour is out of season, and your ambition not easy of accomplishment.", src:"thuc_crawley", cite:"Thucydides 6.9, Nicias", why:"He names the two points he will show, that their “ardour is out of season” and that their “ambition” is “not easy of accomplishment”. Division sets out the points in dispute and the order of taking them."},
  {id:"t-cato-question", part:"division", text:"The question, however, at present under discussion, is not whether we live in a good or a bad state of morals; nor how great, or how splendid, the empire of the Roman people is; but whether these things around us, of whatever value they are, are to continue our own, or to fall, with ourselves, into the hands of the enemy.", src:"sallust_w", cite:"Sallust, Catiline 52, Cato", why:"He sets aside “whether we live in a good or a bad state of morals” and “how great, or how splendid, the empire of the Roman people is”, and he names the point that is “under discussion”: whether these things “are to continue our own”. That is the division of the question."},
  {id:"t-theb-two", part:"division", text:"However, since they have done so, we must answer their charges and refute their self-praise, in order that neither our bad name nor their good may help them, but that you may hear the real truth on both points, and so decide.", src:"thuc_crawley", cite:"Thucydides 3.61, Thebes", why:"He lays out two works, to “answer their charges and refute their self-praise”, so that the judges “hear the real truth on both points, and so decide”. Division names the points and the order in which they will be taken."},
  {id:"t-herm-arm", part:"proof", text:"but you should help us without fear of their armament, which has no terrors if we hold together, but only if we let them succeed in their endeavours to separate us; since even after attacking us by ourselves and being victorious in battle, they had to go off without effecting their purpose.", src:"thuc_crawley", cite:"Thucydides 6.79, Hermocrates", why:"He gives his own reason for joining: the armament “has no terrors if we hold together, but only if we let them succeed in their endeavours to separate us”. Proof is the office that gives one’s own arguments."},
  {id:"t-nic-folly-p", part:"proof", text:"Now it is folly to go against men who could not be kept under even if conquered, while failure would leave us in a very different position from that which we occupied before the enterprise.", src:"thuc_crawley", cite:"Thucydides 6.11, Nicias", why:"The argument of his own side is stated here: it is “folly to go against men who could not be kept under even if conquered”, because failure would leave Athens in “a very different position”. That is proof."},
  {id:"t-herm-alliance", part:"refutation", text:"But you made that alliance, not against your friends, but against the enemies that might attack you, and to help the Athenians when they were wronged by others, not when as now they are wronging their neighbours.", src:"thuc_crawley", cite:"Thucydides 6.79, Hermocrates", why:"He takes up their plea of “that alliance” and answers it: the alliance was “not against your friends”, and it was not made for the Athenians “when as now they are wronging their neighbours”. Refutation answers the other side."},
  {id:"t-herm-neut", part:"refutation", text:"And you need not think that your prudent policy of taking sides with neither, because allies of both, is either safe for you or fair to us.", src:"thuc_crawley", cite:"Thucydides 6.79, Hermocrates", why:"He answers the policy they would keep, “taking sides with neither, because allies of both”, and he denies that it is “safe for you or fair to us”. That is the answer to the other side."},
  {id:"t-corc-sum", part:"peroration", text:"To sum up as shortly as possible, embracing both general and particular considerations, let this show you the folly of sacrificing us. Remember that there are but three considerable naval powers in Hellas—Athens, Corcyra, and Corinth—and that if you allow two of these three to become one, and Corinth to secure us for herself, you will have to hold the sea against the united fleets of Corcyra and Peloponnese. But if you receive us, you will have our ships to reinforce you in the struggle.", src:"thuc_crawley", cite:"Thucydides 1.36, Corcyra", why:"He marks the close, “To sum up as shortly as possible”, calls the refusal “the folly of sacrificing us”, and ends on what the vote will bring: “you will have our ships to reinforce you in the struggle”. A peroration recapitulates and moves."},
  {id:"t-herm-close", part:"peroration", text:"In conclusion, we Syracusans say that it is useless for us to demonstrate either to you or to the rest what you know already as well as we do; but we entreat, and if our entreaty fail, we protest that we are menaced by our eternal enemies the Ionians, and are betrayed by you our fellow Dorians. If the Athenians reduce us, they will owe their victory to your decision, but in their own name will reap the honour, and will receive as the prize of their triumph the very men who enabled them to gain it. On the other hand, if we are the conquerors, you will have to pay for having been the cause of our danger. Consider, therefore; and now make your choice between the security which present servitude offers and the prospect of conquering with us and so escaping disgraceful submission to an Athenian master and avoiding the lasting enmity of Syracuse.", src:"thuc_crawley", cite:"Thucydides 6.80, Hermocrates", why:"He marks the close with “In conclusion”, says further demonstration is “useless” because they “know already”, and he ends by making them “make your choice” between “present servitude” and “conquering with us”. The close sums the case and moves them to the vote."},
  {id:"t-nic-pryt", part:"peroration", text:"And you, Prytanis, if you think it your duty to care for the commonwealth, and if you wish to show yourself a good citizen, put the question to the vote, and take a second time the opinions of the Athenians.", src:"thuc_crawley", cite:"Thucydides 6.14, Nicias", why:"The speech ends by asking the Prytanis, “if you wish to show yourself a good citizen”, to “put the question to the vote, and take a second time the opinions of the Athenians”. A peroration moves the hearer to the act."},
  // Added from Lysias, Cicero, and the Plataean and Theban speeches in Thucydides; the offices are those of De inventione I.14.19.
  {id:"t-lys12-open", part:"exordium", text:"The difficulty that faces me, gentlemen of the jury, is not in beginning my accusation, but in bringing my speech to an end: so enormous, so numerous are the acts they have committed, that neither could lying avail one to accuse them of things more monstrous than the actual facts, nor with every desire to speak mere truth could one tell the whole; of necessity either the accuser must be tired out or his time must run short.", src:"lysias_lamb", cite:"Lysias, Against Eratosthenes 12.1", why:"He opens by saying that his difficulty is not to begin but to end, because the crimes are so many. An opening makes the hearers attentive (De inventione I.15.20), and this one promises a case larger than the time allowed."},
  {id:"t-lys22-open", part:"exordium", text:"Many people have come to me, gentlemen of the jury, in surprise at my accusing the corn-dealers in the Council, and telling me that you, however sure you are of their guilt, none the less regard those who deliver speeches about them as slander-mongers. I therefore propose to speak first of the grounds on which I have found it necessary to accuse them.", src:"lysias_lamb", cite:"Lysias, Against the Corn-Dealers 22.1", why:"He answers the suspicion that accusers of the dealers are slanderers, and says he will first give his reasons for accusing them. An opening makes the hearers well-disposed (De inventione I.15.20), here by removing a prejudice against the speaker."},
  {id:"t-plat-open", part:"exordium", text:"Lacedaemonians, when we surrendered our city we trusted in you, and looked forward to a trial more agreeable to the forms of law than the present, to which we had no idea of being subjected; the judges also in whose hands we consented to place ourselves were you, and you only (from whom we thought we were most likely to obtain justice), and not other persons, as is now the case.", src:"thuc_crawley", cite:"Thucydides 3.53, Plataea", why:"The Plataeans begin by recalling the trust with which they surrendered and the trial they expected. An opening makes the judges attentive and well-disposed before the case is argued (De inventione I.15.20)."},
  {id:"t-theb-open", part:"exordium", text:"We should never have asked to make this speech if the Plataeans on their side had contented themselves with shortly answering the question, and had not turned round and made charges against us, coupled with a long defence of themselves upon matters outside the present inquiry and not even the subject of accusation, and with praise of what no one finds fault with.", src:"thuc_crawley", cite:"Thucydides 3.61, Thebes", why:"The Thebans explain why they speak at all: the Plataeans did not keep to the question. An opening of this kind prepares the judges to hear what follows (De inventione I.15.20)."},
  {id:"t-lys1-narr", part:"narration", text:"When I, Athenians, decided to marry, and brought a wife into my house, for some time I was disposed neither to vex her nor to leave her too free to do just as she pleased; I kept a watch on her as far as possible, with such observation of her as was reasonable. But when a child was born to me, thence-forward I began to trust her, and placed all my affairs in her hands, presuming that we were now in perfect intimacy.", src:"lysias_lamb", cite:"Lysias, On the Murder of Eratosthenes 1.6", why:"The speaker begins the story from his marriage. Narration sets out what happened, briefly, clearly, and plausibly (De inventione I.19.27)."},
  {id:"t-lys12-narr", part:"narration", text:"My father Cephalus was induced by Pericles to come to this country, and dwelt in it for thirty years: never did he, any more than we, appear as either prosecutor or defendant in any case whatever, but our life under the democracy was such as to avoid any offence against our fellows and any wrong at their hands.", src:"lysias_lamb", cite:"Lysias, Against Eratosthenes 12.4", why:"After the opening he begins the facts with his father’s coming to Athens. Narration states what happened (De inventione I.19.27), and this one also shows a quiet family that harmed no one."},
  {id:"t-lys22-narr", part:"narration", text:"When the Committee of the time brought up their case before the Council, the anger felt against them was such that some of the orators said that they ought to be handed over without trial to the Eleven, for the penalty of death. But I, thinking it monstrous that the Council should get into the way of such practice, rose and said that in my opinion we ought to try the corn-dealers in accordance with the law; for I thought that if they had committed acts deserving of death you would be no less able than we to come to a just decision, while, if they were not guilty, they ought not to perish without trial.", src:"lysias_lamb", cite:"Lysias, Against the Corn-Dealers 22.2", why:"He tells what happened when the case came before the Council and what he said there. Narration sets out the facts in order (De inventione I.19.27)."},
  {id:"t-lys1-div", part:"division", text:"But I take it, sirs, that what I have to show is that Eratosthenes had an intrigue with my wife, and not only corrupted her but inflicted disgrace upon my children and an outrage on myself by entering my house; that this was the one and only enmity between him and me; that I have not acted thus for the sake of money, so as to raise myself from poverty to wealth; and that all I seek to gain is the requital accorded by our laws.", src:"lysias_lamb", cite:"Lysias, On the Murder of Eratosthenes 1.4", why:"He lists what he has to show: the intrigue, that this was the only enmity, that he did not act for money, and that he seeks only what the laws allow. Division sets out the points to be proved (De inventione I.22.31)."},
  {id:"t-arch-div", part:"division", text:"And if I feel that that indulgence is given and allowed me by you, I will soon cause you to think that this Aulus Licinius is a man who not only, now that he is a citizen, does not deserve to be expunged from the list of citizens, but that he is worthy, even if he were not one, of being now made a citizen.", src:"cic_yonge", cite:"Cicero, For Archias 4 (Yonge)", why:"Cicero names the two things he will show: that Archias, being a citizen, should not be struck from the list, and that he would deserve to be made one if he were not. Division sets out the points and their order (De inventione I.22.31)."},
  {id:"t-lys16-div", part:"division", text:"I will begin by showing that I did not serve in the cavalry or reside here under the Thirty, and that I had no hand in the government of that time.", src:"lysias_lamb", cite:"Lysias, In Defence of Mantitheus 16.3", why:"He announces the first points he will prove: that he did not serve in the cavalry, did not live in the city under the Thirty, and had no part in their government. Division names the points in dispute and the order of taking them (De inventione I.22.31)."},
  {id:"t-lys1-refut", part:"refutation", text:"Do but consider, sirs, what they say: they accuse me of ordering the maid-servant on that day to go and fetch the young man. Now I, sirs, could have held myself justified in using any possible means to catch the corrupter of my wife.", src:"lysias_lamb", cite:"Lysias, On the Murder of Eratosthenes 1.37", why:"He takes up the charge of the other side, that he sent the maid to fetch the young man, and begins to answer it. Refutation answers the arguments of the opponent (De inventione I.42.78)."},
  {id:"t-theb-refut", part:"refutation", text:"We say that if they did not Medize, it was because the Athenians did not do so either; just as afterwards when the Athenians attacked the Hellenes they, the Plataeans, were again the only Boeotians who Atticized.", src:"thuc_crawley", cite:"Thucydides 3.62, Thebes", why:"The Thebans answer the Plataeans’ boast that they alone refused to side with the Mede. Refutation answers what the other side has said (De inventione I.42.78)."},
  {id:"t-lys12-close", part:"peroration", text:"I will here conclude my accusation. You have heard, you have seen, you have suffered; you have them: give judgement.", src:"lysias_lamb", cite:"Lysias, Against Eratosthenes 12.100", why:"He marks the end and gathers the whole case into a few words: “You have heard, you have seen, you have suffered; you have them: give judgement.” The peroration sums up and moves the hearers to act (De inventione I.52.98)."},
  {id:"t-lys3-close", part:"peroration", text:"Justly, then, should I receive your pity, and that of all men else, not merely if I should meet with such a fate as Simon wishes, but even for having been compelled, as a result of such transactions, to stand my trial on such a charge.", src:"lysias_lamb", cite:"Lysias, Against Simon 3.48", why:"The last words of the speech ask for the jury’s pity. The peroration sums up and stirs the hearers, and Cicero names the appeal to pity as one of its parts (De inventione I.55.106)."},
  {id:"t-theb-close", part:"peroration", text:"Vindicate, therefore, Lacedaemonians, the Hellenic law which they have broken; and to us, the victims of its violation, grant the reward merited by our zeal.", src:"thuc_crawley", cite:"Thucydides 3.67, Thebes", why:"Near the end of their speech the Thebans tell the judges what to do: punish the breach of the law and reward Thebes. The peroration moves the hearers to the act (De inventione I.52.98)."},
];
const ENTHYMEMES = [
  {id:'e1', said:'Catiline still lives — and sits in the senate.', missing:'A man who plots the massacre of the senate ought not to sit in it.',
    distractors:['A senator keeps his seat until the senate itself has voted to remove him from it.','A plotter is safest where the consul can watch him.','A citizen not yet condemned by a court has every right to sit and speak in the senate.'], src:'cic_cat', cite:'Cicero, First Catilinarian 1.2'},
  {id:'e2', said:'My boy was struck by this young man’s javelin and died; I charge him with unintentional homicide.', missing:'Whoever caused a death, even without intent, is liable for the killing.',
    distractors:['No one is liable for a death that he did not intend, whatever his hand may have done.','A death on the training field is the trainer’s fault.','Only a killing done with malice can be brought before a court as a charge of homicide.'], src:'antiphon', cite:'Antiphon, Second Tetralogy 3.1'},
  {id:'e3', said:'If logos deceived her, Helen is not culpable.', missing:'One who is acted on by a cause as strong as a drug or a kidnapper’s hand is not the author of the act.',
    distractors:['One who is persuaded by speech has given her consent, and so she is the author of whatever she does after it.','Speech is too weak a power to move anyone to act against her own will and judgment.','A woman deceived by words is more to blame than one carried off by force of arms.'], src:'gorgias_vh', cite:'Gorgias, Helen 8–14'},
  {id:'e4', said:'A democracy is incapable of empire — so Cleon, urging that Mytilene be punished without reopening the case.', missing:'To hold empire one must be willing to punish without being talked out of it.',
    distractors:['An empire is best held by mercy to rebels, since kindness wins back the subject cities.','A sentence passed in anger ought to be reopened later.','A democracy holds its allies by persuasion, and so it should hear every case twice.'], src:'thuc_crawley', cite:'Thucydides 3.37, Cleon'},
  {id:'e5', said:'I have not lived so long, Lacedaemonians, without having had the experience of many wars.', missing:'Experience of war teaches that it is not to be longed for as a good.',
    distractors:['The old have seen many victories, and so they know that war brings glory and gain.','Old men are too cautious to judge a war rightly.','A city that has fought many wars has learned that each new war is easier than the last.'], src:'thuc_crawley', cite:'Thucydides 1.80, Archidamus'},
  {id:'e6', said:'Our constitution does not copy the laws of neighbouring states; we are rather a pattern to others than imitators ourselves.', missing:'What is original and successful is more to be praised than what is borrowed.',
    distractors:['A city deserves most praise when it takes the best laws of its neighbours for its own.','The oldest constitution is always the best.','No constitution is better than another, since every city simply follows its own custom.'], src:'thuc_crawley', cite:'Thucydides 2.37, Pericles'},
  {id:'e7', said:'The unwritten laws of Heaven were not born today nor yesterday; they die not, and none knows their birth.', missing:'A human decree cannot override a law that is not of human making.',
    distractors:['The decree of the ruler binds every subject, whatever the gods may be thought to command.','A law is valid only if it is written down.','The newest law must prevail over an older one, since it shows the latest will of the city.'], src:'soph_storr', cite:'Sophocles, Antigone 450–457 (Storr)'},
  {id:'e8', said:'Men are not born with the art of politics; Zeus sent Hermes with dike and aidos for all.', missing:'If justice and shame had been given only to a few, cities could not stand.',
    distractors:['Justice and shame, like the other arts, need be given only to a few experts in each city.','What the gods give to all men is of little worth.','Cities are held together by force alone, and need neither justice nor shame in their citizens.'], src:'plato_jowett', cite:'Plato, Protagoras 322c–d (Jowett)'},
  {id:'e9', said:'The unexamined life is not worth living.', missing:'A life that is not worth living ought not to be chosen even to escape death.',
    distractors:['Any life at all is better than death, and so a man should accept any terms to keep it.','The jury decides which life is worth living.','A man may give up philosophy for a time and take it up again when the danger has passed.'], src:'plato_jowett', cite:'Plato, Apology (Jowett)'},
  {id:'e10', said:'The strong do what they can and the weak suffer what they must.', missing:'Right has no standing where power is unequal; only interest remains.',
    distractors:['Right is the same between unequal powers as between equals, and it binds the strong alike.','The gods protect the weak against the strong.','A strong city gains most by sparing the weak, whose goodwill it may need later.'], src:'thuc_crawley', cite:'Thucydides 5.89, Melian dialogue'},
  {id:'e11', said:'Inflict only such penalties as the laws have provided.', missing:'A penalty not in the law is itself a new crime against the republic.',
    distractors:['In a time of danger the senate may set any penalty that the safety of the state requires.','The heavier the penalty, the surer the deterrent.','The laws were written for ordinary crimes, and a conspiracy against the state is not one.'], src:'sallust_w', cite:'Sallust, Catiline 51, Caesar'},
  {id:'e12', said:'Give me chastity and continency, only not yet.', missing:'A prayer that postpones the good it names is still a love of the old disease.',
    distractors:['A prayer for chastity is answered the moment it is spoken, whenever its fulfilment comes.','To ask for a good is already to will it wholly.','To ask for a virtue at a later time is already to possess that virtue in the present.'], src:'aug_pusey', cite:'Augustine, Confessions VIII (Pusey)'},
  {id:'e13', said:'I have a better right to command than others — I must begin with this as Nicias has attacked me.', missing:'The man whose private splendour brings the city profit is fit to command.',
    distractors:['A man who spends his wealth on display is unfit to be trusted with the city’s fleet.','A general’s private life has no bearing on command.','Command belongs to the oldest citizen, whatever his wealth or his reputation abroad.'], src:'thuc_crawley', cite:'Thucydides 6.16, Alcibiades'},
  {id:'e14', said:'An eloquent man must speak so as to teach, to delight, and to persuade.', missing:'These three offices belong to the same orator, not to three different arts.',
    distractors:['Teaching belongs to the philosopher and persuading to the orator, and no one man does both.','An orator need only persuade, and never teach.','Delight is a vice in speech about sacred things, and the Christian orator should avoid it.'], src:'ddc', cite:'Augustine, De doctrina christiana IV'},
  {id:'e15', said:'Remember that there are but three considerable naval powers in Hellas—Athens, Corcyra, and Corinth—and that if you allow two of these three to become one, and Corinth to secure us for herself, you will have to hold the sea against the united fleets of Corcyra and Peloponnese.', missing:'It is folly to let two naval powers combine against you when you might keep one as an ally.',
    distractors:['Athens can always defeat the fleets of Corinth and Corcyra together, whatever alliance they make.','A naval power far from Athens can never be a danger to her, whichever side it takes.','Athens should keep clear of every alliance at sea, so that no war can be laid to her charge.'], src:'thuc_crawley', cite:'Thucydides 1.36, Corcyra'},
  {id:'e16', said:'To-day has brought to a close the long silence which I had observed during the recent troubles.', missing:'When the republic can again hear a free voice, the orator ought to speak.',
    distractors:['An orator who has kept silent for years has lost the right to speak in the senate.','Silence is safer than speech under a single ruler.','A senator owes the victor his silence, and should break it only if he is asked to speak.'], src:'cic_orat', cite:'Cicero, Pro Marcello 1'},
  {id:'e17', said:'Fear not, for you shall not be confounded — so the poor are to be comforted, while the rich are to be made afraid of elation.', missing:'The same vice is not cured by the same word in every hearer.',
    distractors:['One admonition, rightly framed, suits every hearer, whether he is poor or rich.','Fear cures the poor, and comfort cures the rich.','The rich and the poor are to be comforted alike, since both alike are in tribulation.'], src:'greg', cite:'Gregory, Pastoral Care III'},
  {id:'e18', said:'Although I am afraid, gentlemen of the jury, that fear is unseemly in a speech for the bravest of men.', missing:'If even the advocate of the brave man is afraid, the danger to the republic is real.',
    distractors:['An advocate who confesses fear has already admitted that his client’s cause is weak.','A brave man needs no defence, so the words of his advocate add nothing to the case.','Fear in a speaker is a fault of character, and the jury should discount what he says.'], src:'cic_cat', cite:'Cicero, Pro Milone 1'},
  // English tradition (public-domain quotations; sources eng_cer, eng_cem, kjv).
  {id:'eng-e1', said:'Thus I consent, sir, to this Constitution, because I expect no better, and because I am not sure that it is not the best.', missing:'Where no better plan can be had, a plan that may be the best ought to be accepted.', distractors:['A plan should be rejected until every member is sure that it is the best that can be had.','A wise man consents only to what he has first proved to be without fault.','A delegate who doubts a plan ought to vote against it, so that a better plan may be framed.'], src:'eng_cer', cite:'Benjamin Franklin, Speech at the Federal Convention (1787)'},
  {id:'eng-e2', said:'“A house divided against itself cannot stand.” I believe this government cannot endure permanently half slave and half free.', missing:'A nation divided over slavery is a house divided against itself.', distractors:['A nation can remain half slave and half free for as long as its parts keep their bargain.','Division over slavery strengthens a union.','A saying from Scripture about houses has no bearing on the government of a nation.'], src:'eng_cem', cite:'Abraham Lincoln, Speech at Springfield (1858)'},
  {id:'eng-e3', said:'They tell us, sir, that we are weak – unable to cope with so formidable an adversary. But when shall we be stronger? Will it be the next week, or the next year?', missing:'Delay will only leave us weaker, so if we are ever to resist it must be now.', distractors:['Every year of peace adds to our strength, so the longer we wait the stronger we shall be.','Britain will grow weaker if the colonies wait.','A weak people should never resist, whether now or later, since resistance cannot succeed.'], src:'eng_cer', cite:'Patrick Henry, Speech to the Second Virginia Convention (1775)'},
  {id:'eng-e4', said:'The gentleman asks, When were the colonies emancipated? I desire to know, when were they made slaves?', missing:'Those who were never made slaves need no emancipation to be free.', distractors:['Colonies are born subject to their mother country and are free only once she releases them.','Freedom belongs only to those freed by law.','A people who have been taxed by Parliament have already been made subjects, not free men.'], src:'eng_cer', cite:'William Pitt (the Elder), Speech in the House of Commons (1766)'},
  {id:'eng-e5', said:'If you do not succeed, you are without resource: for, conciliation failing, force remains; but, force failing, no further hope of reconciliation is left.', missing:'A course that leaves a second resource if it fails is to be tried before one that leaves none.', distractors:['The surest course is to be tried first, whatever is left to us if it should fail.','Force should be tried first, because conciliation can still be offered to the colonies after a victory has been won.','Once conciliation has failed, no other course is open, so it should be kept for last.'], src:'eng_cer', cite:'Edmund Burke, Speech on Conciliation with the Colonies (1775)'},
  {id:'eng-e6', said:'Ambition must be made to counteract ambition.', missing:'Since men are not angels, power can be checked only by setting one interest against another.', distractors:['Men in power can be trusted to restrain themselves once they have sworn an oath to the constitution.','Ambition should be removed from government, since a free state needs only virtuous men.','The vote of the people alone is enough to keep every branch of the government within its bounds.'], src:'eng_cer', cite:'James Madison, The Federalist no. 51 (1788)'},
  {id:"e-nic-folly", said:"Now it is folly to go against men who could not be kept under even if conquered, while failure would leave us in a very different position from that which we occupied before the enterprise.", missing:"A city ought not to vote an expedition that cannot hold its conquest and that leaves it worse if it fails.",
    distractors:["Egesta has already paid the cost of the fleet, so the sailing adds no danger and no new enemy to Athens.", "A summer voyage returns before winter, and a city that sails in fair weather cannot come home any worse.", "The treaty sworn at Sparta forbids any Athenian ship to leave port while that peace still stands in force."], src:"thuc_crawley", cite:"Thucydides 6.11, Nicias", why:"Nicias calls the sailing “folly” because those men “could not be kept under even if conquered,” and because failure would leave Athens in “a very different position”. The hearers supply the premise that an expedition of that kind ought not to be voted."},
  {id:"e-nic-fear", said:"The Hellenes in Sicily would fear us most if we never went there at all, and next to this, if after displaying our power we went away again as soon as possible.", missing:"The safer course is the one that leaves a distant enemy most afraid of us.",
    distractors:["A people fears only the army that has already landed and begun to burn its towns.", "Sicily will send tribute of her own accord if Athens never shows a fleet at all.", "Fear of Athens ends as soon as a treaty is signed and the Spartans go home."], src:"thuc_crawley", cite:"Thucydides 6.11, Nicias", why:"He says the Hellenes in Sicily “would fear us most if we never went there at all,” and next if Athens displayed her power and left. The unstated premise is that Athens should choose the course that leaves those Hellenes most afraid."},
  {id:"e-nic-egest", said:"Our struggle, therefore, if we are wise, will not be for the barbarian Egestaeans in Sicily, but how to defend ourselves most effectually against the oligarchical machinations of Lacedaemon.", missing:"A wise city fights the enemy at her door before she fights for a distant ally.",
    distractors:["Egesta keeps a larger fleet than Sparta and Corinth can put to sea together.", "The oligarchs at Sparta have already voted to lay down their arms and abandon the war.", "A barbarian ally is always a safer cause for Athens than any Greek city close to home."], src:"thuc_crawley", cite:"Thucydides 6.11, Nicias", why:"The struggle of a wise city, he says, “will not be for the barbarian Egestaeans in Sicily, but how to defend ourselves” against Sparta. The hearers must supply that the nearer danger is the one a wise city meets first."},
  {id:"e-corc-navy", said:"For your first endeavour should be to prevent, if possible, the existence of any naval power except your own; failing this, to secure the friendship of the strongest that does exist.", missing:"A rival fleet that is not a friend will be turned against the city that let it grow.",
    distractors:["Corinth has no ships in the water and cannot join her fleet to any other city.", "Athens is safest when every neighbouring city is encouraged to build a navy of her own.", "A naval power grows more friendly to Athens in proportion as Athens leaves it alone."], src:"thuc_crawley", cite:"Thucydides 1.35, Corcyra", why:"The Corcyraeans tell Athens her “first endeavour should be to prevent” any naval power but her own, and failing that to secure “the friendship of the strongest that does exist.” The premise they leave to the assembly is that a rival fleet, if not a friend, will be used against her."},
  {id:"e-corc-colony", said:"let her know that every colony that is well treated honours its parent state, but becomes estranged from it by injustice.", missing:"Corinth has treated this colony unjustly, so Corcyra owes her no honour and may seek another ally.",
    distractors:["Every colony remains the subject of its founder, and a wrong done by the parent only increases the honour owed.", "Corcyra was planted by Athens, and the tribute she pays that city is the honour a colony always owes.", "A parent that has been unjust is owed a greater honour, and the colony may not seek any other ally."], src:"thuc_crawley", cite:"Thucydides 1.34, Corcyra", why:"They answer Corinth with the rule that “every colony that is well treated honours its parent state, but becomes estranged from it by injustice.” The hearers supply that Corcyra’s estrangement follows from Corinth’s injustice, and so the colony is free to seek another ally."},
  {id:"e-cori-aux", said:"For you cannot become their auxiliary and remain our friend; if you join in their attack, you must share the punishment which the defenders inflict on them.", missing:"The ally of an attacker shares the penalty that the defender inflicts.",
    distractors:["Athens can arm Corcyra against Corinth and still be counted Corinth’s friend.", "A defender never turns his punishment upon the ally of the city that attacked him.", "Friendship between two cities survives any fleet sent against one of their colonies."], src:"thuc_crawley", cite:"Thucydides 1.40, Corinth", why:"Corinth tells Athens “you cannot become their auxiliary and remain our friend”, and that if Athens joins the attack she must “share the punishment which the defenders inflict”. The premise is that the ally of an attacker is treated as a party to the attack."},
  {id:"e-cori-punish", said:"It is now our turn to benefit by the principle that we laid down at Lacedaemon, that every power has a right to punish her own allies.", missing:"A principle a city has already used for herself she must allow another city to use.",
    distractors:["Sparta has forbidden every city in the alliance to punish one of its own allies.", "Corinth has never claimed any right to punish a colony or an ally of her own.", "A principle once spoken at Lacedaemon binds only the ambassador who happened to speak it."], src:"thuc_crawley", cite:"Thucydides 1.43, Corinth", why:"Corinth asks to “benefit by the principle” she and others “laid down at Lacedaemon, that every power has a right to punish her own allies.” The unstated premise is that a rule Athens has been willing to use may be used in turn against a Corinthian colony."},
  {id:"e-herm-abstain", said:"If the vanquished be defeated, and the victor conquer, through your refusing to join, what is the effect of your abstention but to leave the former to perish unaided, and to allow the latter to offend unhindered?", missing:"A city that can stop a conquest and does not stop it shares in the result.",
    distractors:["Camarina lies too far from Syracuse for either army to count her in this war.", "A refusal to join the fight leaves both the victor and the vanquished as they stood.", "The honour of the victor is lost whenever a neutral city chooses to stay at home."], src:"thuc_crawley", cite:"Thucydides 6.80, Hermocrates", why:"Hermocrates asks what abstention does but “leave the former to perish unaided, and to allow the latter to offend unhindered”. The premise he counts on is that a city able to join, which refuses, bears the defeat of one side and the offence of the other."},
  {id:"e-herm-prize", said:"If the Athenians reduce us, they will owe their victory to your decision, but in their own name will reap the honour, and will receive as the prize of their triumph the very men who enabled them to gain it.", missing:"The city whose decision gives a conqueror his victory will itself be taken as the prize.",
    distractors:["Athens has already promised Camarina the tribute and the harbour of Syracuse.", "A vote to stay neutral cannot be the cause of any other city’s victory in the field.", "The prize of a victory is paid to the city that stayed away and refused to fight."], src:"thuc_crawley", cite:"Thucydides 6.80, Hermocrates", why:"If Athens wins, he says, she “will owe” the victory “to your decision” and “will receive as the prize of their triumph the very men who enabled them to gain it.” The hearers are to grant that the helper of a conqueror becomes the conqueror’s prize."},
  {id:"e-theb-medize", said:"We say that if they did not Medize, it was because the Athenians did not do so either; just as afterwards when the Athenians attacked the Hellenes they, the Plataeans, were again the only Boeotians who Atticized.", missing:"A city that followed a neighbour’s lead cannot claim the virtue of having chosen alone.",
    distractors:["Plataea was the only city in Boeotia that had a wall in the year of the Mede.", "The Athenians went over to the Mede, and Plataea refused to follow that lead.", "Atticizing is simply the name for a city that stood against the Mede in the war."], src:"thuc_crawley", cite:"Thucydides 3.62, Thebes", why:"The Thebans say that if the Plataeans “did not Medize, it was because the Athenians did not do so either” and that later the Plataeans “were again the only Boeotians who Atticized.” The premise is that following Athens is not a virtue the Plataeans can claim as their own."},
  {id:"e-theb-mistress", said:"The city as a whole was not its own mistress when it so acted, and ought not to be reproached for the errors that it committed while deprived of its constitution.", missing:"A city that has lost its constitution is not to be blamed for what it did under that loss.",
    distractors:["Every city is blamed for the acts it happened to do while it was without laws.", "Thebes remained her own mistress through the whole of the war against the Mede.", "A constitution is lost only after the other cities have already praised the loser."], src:"thuc_crawley", cite:"Thucydides 3.62, Thebes", why:"They say the city “was not its own mistress when it so acted,” and “ought not to be reproached for the errors that it committed while deprived of its constitution.” The hearers supply that blame attaches to a city only when it is free to choose."},
  {id:"e-cato-vain", said:"Other crimes you may punish after they have been committed; but as to this, unless you prevent its commission, you will, when it has once taken effect, in vain appeal to justice.", missing:"A crime that destroys the court itself must be stopped before it is committed.",
    distractors:["Every crime is punished more justly once the city has fallen and the courts are gone.", "The senate has no power to act on a plot until the same charge has been tried twice.", "An appeal to justice can be heard only after the laws of the city have been suspended."], src:"sallust_w", cite:"Sallust, Catiline 52, Cato", why:"Cato allows that “Other crimes you may punish after they have been committed” but says that for this one, unless they “prevent its commission,” they will “in vain appeal to justice.” The premise is that this crime removes the court in which a later appeal could be heard."},
  {id:"e-cato-taken", said:"When the city is taken, no power is left to the vanquished.", missing:"A sentence passed after the city has fallen cannot restore the power to pass it.",
    distractors:["The vanquished keep their courts, their laws, and their full power of punishment.", "A city that has already been taken is the safest place left in which to judge a man.", "The senate’s power to punish grows greater in proportion as the city itself is lost."], src:"sallust_w", cite:"Sallust, Catiline 52, Cato", why:"The sentence is “When the city is taken, no power is left to the vanquished.” It becomes a reason to act now only if the hearers supply that a judgment delivered after that loss cannot bring the power back."},
  {id:"e-nic-behind", said:"I affirm, then, that you leave many enemies behind you here to go yonder and bring more back with you.", missing:"A city ought not to leave the enemies already at her door in order to make new ones abroad.",
    distractors:["The enemies left at home have already asked for peace, and the voyage will bring none of them back.", "Egesta has undertaken to fight every enemy Athens leaves behind, so the sailing adds no danger.", "A city grows safer in proportion as she leaves a greater number of enemies unattended at home."], src:"thuc_crawley", cite:"Thucydides 6.10, Nicias", why:"Nicias affirms that Athens will “leave many enemies behind you here to go yonder and bring more back with you.” The assembly has to supply that this exchange, old enemies left and new ones gained, is a reason to refuse the sailing."},
  {id:"e-nic-admire", said:"We all know that that which is farthest off, and the reputation of which can least be tested, is the object of admiration; at the least reverse they would at once begin to look down upon us, and would join our enemies here against us.", missing:"A reputation admired only because it is untested will collapse at the first reverse, and is no ground for a voyage.",
    distractors:["What is farthest off is always the safest conquest, because distance itself keeps the enemy from striking back.", "A reputation that has never been tested grows stronger at the first reverse, and the allies at home take heart.", "Sicily will admire Athens more after a defeat than after a victory, and will then pay tribute of her own accord."], src:"thuc_crawley", cite:"Thucydides 6.11, Nicias", why:"“that which is farthest off, and the reputation of which can least be tested, is the object of admiration”, and “at the least reverse” those who admired it “would at once begin to look down upon us”. The voyage is to be refused only if the hearers grant that an untested reputation is no ground for sending the fleet."},
  {id:"e-corc-before", said:"Now it is our policy to be beforehand with her—that is, for Corcyra to make an offer of alliance and for you to accept it; in fact, we ought to form plans against her instead of waiting to defeat the plans she forms against us.", missing:"The city that waits to answer an enemy’s plan has already given that enemy the first move.",
    distractors:["Corinth has published her plan in full, so Athens can wait and still strike the first blow.", "A plan formed after the enemy has moved is always the stronger, because it answers a known design.", "Corcyra asks Athens to wait until Corinth has finished her armament and then to vote on the alliance."], src:"thuc_crawley", cite:"Thucydides 1.33, Corcyra", why:"Their policy is “to be beforehand with her”, and they say “we ought to form plans against her instead of waiting to defeat the plans she forms against us.” The premise which turns that policy into a reason to accept the alliance now is that waiting hands Corinth the first move."},
  {id:"e-corc-sea", said:"And there is a wide difference between declining the alliance of an inland and of a maritime power.", missing:"Athens may refuse an inland ally, but she cannot with safety refuse a power that brings a fleet.",
    distractors:["An inland city and a naval city are the same sort of ally, and Athens may refuse either without a loss.", "A maritime ally weakens the city that receives her, and an inland ally is the one Athens must not refuse.", "Corcyra has no ships to offer, and the difference she names is only a difference of dialect."], src:"thuc_crawley", cite:"Thucydides 1.36, Corcyra", why:"They tell Athens there is “a wide difference between declining the alliance of an inland and of a maritime power.” The sentence does not say what the difference comes to. The assembly must supply that a fleet touches Athens’ own safety in a way an inland city does not."},
  {id:"e-cori-crime", said:"And not satisfied with their own misconduct there, they appear here now requiring you to join with them not in alliance but in crime, and to receive them in spite of their being at enmity with us.", missing:"To take in a city already at war with one’s friend is to share that quarrel, and not merely to add an ally.",
    distractors:["Corcyra is at peace with Corinth, and her request is only for a place in the Athenian games.", "A city may arm the enemy of a friend and remain that friend’s ally in every particular.", "Enmity with Corinth makes the reception of Corcyra a favour Corinth has already asked Athens to grant."], src:"thuc_crawley", cite:"Thucydides 1.37, Corinth", why:"Corinth says the Corcyraeans ask Athens “to join with them not in alliance but in crime, and to receive them in spite of their being at enmity with us.” The premise is that reception of a city already at enmity with Corinth is a share in that enmity."},
  {id:"e-cori-shared", said:"No, they should have shared their power with you before they asked you to share your fortunes with them.", missing:"A city that never shared its strength has no claim on the help of the city it shut out.",
    distractors:["Corcyra shared her fleet with Athens for many years, and the debt of that sharing is now due.", "A city in peril is owed help in proportion as she has always refused to share her power.", "Athens asked Corcyra for a share of Corcyra’s power, and Corcyra granted it before this war."], src:"thuc_crawley", cite:"Thucydides 1.37, Corinth", why:"Corinth says they “should have shared their power with you before they asked you to share your fortunes with them.” The general rule the hearers must add is that help is owed to those who have already shared their strength, and not to those who ask only when they are in peril."},
  {id:"e-cori-offend", said:"Why, if you make it your policy to receive and assist all offenders, you will find that just as many of your dependencies will come over to us, and the principle that you establish will press less heavily on us than on yourselves.", missing:"A rule that lets every subject desert its master will be turned against the city that made the rule.",
    distractors:["Athens has no subjects who could leave her, so a rule about receiving offenders cannot touch her.", "Corinth will be bound by the rule more tightly than Athens, and Athens’ dependencies will stay where they are.", "A policy of receiving offenders keeps every subject loyal to the city that announced the policy."], src:"thuc_crawley", cite:"Thucydides 1.40, Corinth", why:"If Athens receives “all offenders”, then “just as many of your dependencies will come over to us”, and the principle “will press less heavily on us than on yourselves.” The practical premise is that a city should not establish a rule that her own subjects can use against her."},
  {id:"e-herm-distant", said:"And do we fancy when destruction first overtakes a distant fellow countryman that the danger will not come to each of us also, or that he who suffers before us will suffer in himself alone?", missing:"A danger that has reached one city of the island will reach the city that leaves her to face it alone.",
    distractors:["A distant city’s fall leaves every other city of Sicily safer than she was on the day before that fall.", "The first city to suffer is the last city to suffer, and the danger ends in the place where it began.", "Camarina lies too far from Syracuse for an Athenian victory there to change anything in her own safety."], src:"thuc_crawley", cite:"Thucydides 6.78, Hermocrates", why:"He asks whether they fancy that “destruction” overtaking “a distant fellow countryman” “will not come to each of us also”, or that the one who “suffers before us will suffer in himself alone”. The premise he counts on is that a danger which has reached one of them will reach the rest if they stand apart."},
  {id:"e-herm-neither", said:"And you need not think that your prudent policy of taking sides with neither, because allies of both, is either safe for you or fair to us.", missing:"To take sides with neither, when one side is under attack, is already to favour the attacker.",
    distractors:["A city allied to both sides may refuse both, and the refusal leaves each side exactly as it stood.", "Neutrality is safe for Camarina precisely because she is allied to the city that is being attacked.", "Syracuse has asked Camarina to take neither side, and she calls that course fair to herself."], src:"thuc_crawley", cite:"Thucydides 6.79, Hermocrates", why:"He tells them not to think that “taking sides with neither, because allies of both, is either safe for you or fair to us.” The sentence denies their description of the policy. The premise still to be granted is that standing aside while one ally is attacked favours the attacker."},
  {id:"e-plat-chiefs", said:"Besides, the faults that either of you may commit in your supremacy must be laid, not upon the followers, but on the chiefs that lead them astray.", missing:"Plataea followed Athens into the war, so the blame for that following lies on Athens and not on Plataea.",
    distractors:["The follower is blamed for every fault of the chief, and the chief is held clear of it.", "Plataea led Athens into the war, and Athens was the follower who was led astray.", "A city that follows an ally is praised for the faults of the ally, and the ally is blamed for the following."], src:"thuc_crawley", cite:"Thucydides 3.55, Plataea", why:"They lay it down that faults committed “in your supremacy must be laid, not upon the followers, but on the chiefs that lead them astray.” The rule is stated. The case the judges must supply is that Plataea was the follower and Athens the chief."},
  {id:"e-cato-stake", said:"We are not now debating on the revenues, or on injuries done to our allies, but our liberty and our life is at stake.", missing:"When liberty and life are the question, the senate must not handle it as a dispute about revenue or about allies.",
    distractors:["The debate is only about the revenues and about injuries done to the allies, and life is not in question.", "A question of liberty is decided by the same quiet vote as a question of harbour dues.", "The allies have already been restored, and the revenues are the only matter left on the paper."], src:"sallust_w", cite:"Sallust, Catiline 52, Cato", why:"Cato says “We are not now debating on the revenues, or on injuries done to our allies, but our liberty and our life is at stake.” The premise which makes that a reason to drop ordinary counsel is that a threat to liberty and life is not an ordinary public question."},
  {id:"e-cato-names", said:"For some time past, it is true, we have lost the real name of things; for to lavish the property of others is called generosity, and audacity in wickedness is called heroism; and hence the state is reduced to the brink of ruin.", missing:"A state that gives vice the name of a virtue will be ruined by the vice it will not call by its own name.",
    distractors:["False names for vice have always kept the republic safe, and the treasury is the fuller for them.", "Generosity and heroism are the real names of the acts he describes, and the state grows stronger by them.", "The loss of the real names of things has no bearing on whether the prisoners are punished."], src:"sallust_w", cite:"Sallust, Catiline 52, Cato", why:"“we have lost the real name of things”, so that “to lavish the property of others is called generosity, and audacity in wickedness is called heroism”, “and hence the state is reduced to the brink of ruin.” The senate must supply that it ought not to decide this case under those false names."},
  {id:"e-cic-quit", said:"Quit Rome at last and soon; the city gates are open; depart at once: your camp under Manlius's command has too long been awaiting with anxiety the arrival of its general.", missing:"The general of a camp raised against the city has no place left in the city, and should be sent to that camp.",
    distractors:["Manlius has raised no camp at all, and the consul’s order is only that Catiline take a house nearer the forum.", "A general whose camp is waiting for him is the man the senate most needs to keep sitting in his place.", "The city gates are shut against him, and the order is that Catiline remain until that camp has been dispersed."], src:"cic_cat", cite:"Cicero, First Catilinarian 1.5", why:"The order is “Quit Rome at last and soon; the city gates are open; depart at once”, because “your camp under Manlius's command has too long been awaiting” “the arrival of its general.” The premise is that the general of that camp does not belong in the senate."},
  {id:"e-cic-either", said:"Therefore let them either depart now or cease to trouble us; or else, if they choose to remain in Rome and to remain of the same mind, let them expect to receive the reward they deserve.", missing:"Men who will neither leave the city nor give up their purpose are to be treated as enemies still inside it.",
    distractors:["Those who remain in Rome of the same mind are to be thanked for staying, and departure is the only crime.", "The reward of remaining is a public pardon, and the reward of departing is a prosecution in the courts.", "Cicero asks them to stay in Rome and to keep, unchanged, the purpose with which they entered the city."], src:"cic_cat", cite:"Cicero, Second Catilinarian 2.6", why:"“let them either depart now or cease to trouble us”, and if they “remain in Rome and” “remain of the same mind, let them expect to receive the reward they deserve.” The premise is that to stay, and to stay of that mind, is to choose the punishment of an enemy."},
  {id:"e-burke-tyrants", said:"Kings will be tyrants from policy, when subjects are rebels from principle.", missing:"Subjects who rebel on a principle leave a king no policy but tyranny, and that kind of rebellion is the one to refuse.",
    distractors:["A king grows mild in proportion as his subjects rebel on a settled principle, and obedience is what makes him cruel.", "Rebellion undertaken from private interest makes kings into tyrants, and rebellion from principle is what keeps them just.", "Kings become tyrants only while their subjects remain obedient, and a subject who rebels on principle restores the old law."], src:"eng_cer", cite:"Edmund Burke, Reflections on the Revolution in France (1791)", why:"“Kings will be tyrants from policy, when subjects are rebels from principle.” The sentence predicts the pair. It becomes a warning against that rebellion only if the hearers supply that a rebellion undertaken on principle is the course to refuse."},
];
const PASSIONS = [
  {id:'p1', name:'anger', appetite:'irascible', text:'How much further, Catilina, will you carry your abuse of our forbearance?', cite:'Cicero, Catilinarian 1.1', src:'cic_cat', why:'Aristotle defines anger (II.2) as a desire, accompanied by pain, for conspicuous revenge, toward one who has slighted us.'},
  {id:'p2', name:'pity', appetite:'concupiscible', text:'My boy, struck in the side on the training field by a javelin thrown by this young man, died on the spot.', cite:'Antiphon 3.1.1', src:'antiphon', why:'Pity is pain at a destructive evil happening to one who does not deserve it (Aristotle II.8).'},
  {id:'p3', name:'fear', appetite:'irascible', text:'There are here, here among our fellow-senators… men who are meditating the destruction of us all, the total ruin of this city…', cite:'Cicero, Catilinarian 1.4', src:'cic_cat', why:'Fear is a pain due to imagining a future destructive evil (II.5).'},
  {id:'p4', name:'shame', appetite:'concupiscible', text:'Give me chastity and continency, only not yet.', cite:'Augustine, Confessions VIII (Pusey)', src:'aug_pusey', why:'Shame is pain about evils that seem to bring discredit (II.6), and here Augustine stages the divided will.'},
  {id:'p5', name:'indignation', appetite:'irascible', text:'Alas! what degenerate days are these! The senate is well aware of the facts… but the criminal still lives.', cite:'Cicero, Catilinarian 1.2', src:'cic_cat', why:'Indignation is pain at undeserved good fortune (II.9); here the good fortune is that of going unpunished.'},
  {id:'p6', name:'confidence', appetite:'irascible', text:'We throw open our city to the world, and never by alien acts exclude foreigners from any opportunity of learning or observing.', cite:'Thucydides 2.39, Pericles', src:'thuc_crawley', why:'Confidence is the opposite of fear: it is an imagination of safety (II.5).'},
  {id:'p7', name:'love', appetite:'concupiscible', text:'Too late loved I Thee, O Thou Beauty of ancient days, yet ever new!', cite:'Augustine, Confessions X (Pusey)', src:'aug_pusey', why:'Love is the motion toward a good taken as such, and the apostrophe here is pathos and prayer at once.'},
  {id:'p8', name:'kindness', appetite:'concupiscible', text:'My nature is for mutual love, not hate.', cite:'Sophocles, Antigone (Storr)', src:'soph_storr', why:'Kindness is here a settled wish for another’s good. Antigone names her ethos as a passion that has become character.'},
  {id:'p9', name:'hatred', appetite:'concupiscible', text:'To what destiny of mine, O conscript fathers, shall I say that it is owing, that none for the last twenty years has been an enemy to the republic without at the same time declaring war against me?', cite:'Cicero, Philippic 1', src:'cic_orat', why:'Hatred is a settled wish for another’s ill, without the pain of anger (II.4). Cicero makes the enemy of the republic his own.'},
  {id:'p10', name:'fear', appetite:'irascible', text:'Although I am afraid, gentlemen of the jury, that fear is an unseemly condition in which to begin a speech in defence of the bravest of men.', cite:'Cicero, Pro Milone 1', src:'cic_cat', why:'The advocate’s fear serves as the argument, since it shows that the danger is present and public (II.5).'},
  {id:'p11', name:'emulation', appetite:'irascible', text:'Athenian guest, much report of thee has come to us, both in regard to thy wisdom and thy wanderings… a desire has come upon me to ask thee whether thou hast seen any whom thou deemest to be the happiest.', cite:'Herodotus 1.30, Croesus to Solon', src:'herodotus', why:'Emulation is pain at seeing goods one might have (II.11); Croesus wants the name of happiest.'},
  {id:'p12', name:'pity', appetite:'concupiscible', text:'My children, latest born to Cadmus old, Why sit ye here as suppliants, in your hands Branches of olive filleted with wool?', cite:'Sophocles, Oedipus Tyrannus (Storr)', src:'soph_storr', why:'The city is shown as children and the plague as undeserved evil, so the king is moved to pity before he is moved to inquiry (II.8).'},
  {id:'p13', name:'anger', appetite:'irascible', text:'When I reflect on the causes of the war, and the circumstances of our situation, I feel a strong persuasion that our united efforts on the present day will prove the beginning of universal liberty to Britain.', cite:'Tacitus, Agricola, Calgacus (Murphy)', src:'tacitus_cb', why:'This is anger at a slight to a free people, joined with the hope of revenge (II.2).'},
  {id:'p14', name:'love', appetite:'concupiscible', text:'But what do I love, when I love Thee? not beauty of bodies, nor the fair harmony of time, nor the brightness of the light.', cite:'Augustine, Confessions X (Pusey)', src:'aug_pusey', why:'This is love seeking its object by denying lesser goods (II.4; Aquinas I–II on the concupiscible).'},
  {id:'p15', name:'confidence', appetite:'irascible', text:'If your courage and fidelity had not been sufficiently proved by me, this favorable opportunity would have occurred to no purpose; mighty hopes, absolute power, would in vain be within our grasp.', cite:'Sallust, Catiline 20', src:'sallust_w', why:'This is confidence as an imagination of safety and of goods within reach (II.5), and here it is a conspirator’s confidence.'},
  {id:'p16', name:'shame', appetite:'concupiscible', text:'How you, O Athenians, have been affected by my accusers, I cannot tell; but I know that they almost made me forget who I was—so persuasively did they speak; and yet they have hardly uttered a word of truth.', cite:'Plato, Apology (Jowett)', src:'plato_jowett', why:'Socrates would have the jury feel the shame of being moved by a lie (II.6).'},
  {id:'p17', name:'indignation', appetite:'irascible', text:'I think the two things most opposed to good counsel are haste and passion.', cite:'Thucydides 3.42, Diodotus', src:'thuc_crawley', why:'Diodotus would have the assembly feel indignation at being rushed, not only pity for Mytilene (II.9).'},
  {id:'p18', name:'kindness', appetite:'concupiscible', text:'The ruler should be a near neighbour to every one in sympathy, and exalted above all in contemplation, so that through the bowels of loving-kindness he may transfer the infirmities of others to himself.', cite:'Gregory, Pastoral Care II (Barmby)', src:'greg', why:'This is kindness as wishing another’s good and taking his ills as one’s own (II.7).'},
  // English tradition (public-domain quotations; sources eng_cer, eng_cem, kjv).
  {id:'eng-p1', name:'shame', appetite:'concupiscible', text:'I can not forgive you, my brethren, who till this late hour have been silent while successive murders were committed.', cite:'Eliphalet Nott, Sermon at Albany (1804)', src:'eng_cer', why:'Shame is pain about evils that seem to bring discredit (II.6), and the preacher charges his own hearers with silence while men were killed.'},
  {id:'eng-p2', name:'pity', appetite:'concupiscible', text:'Bear with me, My heart is in the coffin there with Caesar, And I must pause till it come back to me.', cite:'Shakespeare, Julius Caesar 3.2', src:'eng_cer', prompt:'Antony pauses over Caesar’s body and shows the crowd his own grief. Which passion is he moving in the crowd toward Caesar?', why:'Pity is pain at a destructive evil that has fallen on one who did not deserve it (II.8). The grief is Antony’s own, but Aristotle notes that those who heighten an evil by gesture, voice, and bearing make it more pitiable, because they set it before our eyes; so Antony’s pause is the means, and the passion moved in the crowd is pity for Caesar, whose death the speech goes on to show was undeserved.'},
  {id:'eng-p3', name:'fear', appetite:'irascible', text:'A democracy is a volcano, which conceals the fiery materials of its own destruction.', cite:'Fisher Ames, Speech at the Massachusetts Ratifying Convention (1788)', src:'eng_cem', why:'Fear is pain at the imagined approach of a destructive evil (II.5), and the volcano puts that evil beneath the hearers’ feet.'},
  {id:'eng-p4', name:'anger', appetite:'irascible', text:'Can there be a more mortifying insult? Can even our ministers sustain a more humiliating disgrace? Do they dare to resent it?', cite:'William Pitt (the Elder), Speech in the House of Lords (1777)', src:'eng_cer', prompt:'Chatham speaks of the welcome France has given the American commissioners, an insult to Britain that the ministers have let pass. Which passion is he moving in the Lords, toward France and toward the ministers?', why:'Aristotle defines anger (II.2) as a desire, accompanied by pain, for revenge for a conspicuous slight directed without justification toward what concerns oneself or one’s friends. Chatham extends the slight from the person to the State, whose honour the Lords count as their own; and the disgrace is not presented as their own fault, which would move shame (II.6), but as an insult from France that the ministers have not dared to resent.'},
  {id:'eng-p5', name:'confidence', appetite:'irascible', text:'In my Father’s house are many mansions: if it were not so, I would have told you. I go to prepare a place for you.', cite:'John 14:2 (King James Version)', src:'kjv', prompt:'Christ is speaking to disciples who are troubled at his going away (“Let not your heart be troubled,” 14:1). Which passion is he moving in them?', why:'Aristotle defines confidence (II.5) as the opposite of fear, that is, the expectation that what keeps us safe is near and what is terrible is far off. He has in view dangers such as war or a lawsuit, so this is an extension of his account; but the disciples’ trouble is a fear of loss at their master’s going, and the promise of a place prepared sets the good near and takes the fear away.'},
  {id:"p-cic-execute", name:"anger", appetite:"irascible", text:"No, Catilina, long ere now you should yourself have been led by the consul's orders to execution; and on your own head should have been brought down the destruction which you are now devising for us.", cite:"Cicero, First Catilinarian 1.2", src:"cic_cat", prompt:"Cicero is speaking to Catiline in the senate’s hearing. Which passion toward Catiline is he stirring in the senate?", why:"The wish is that he “should yourself have been led by the consul's orders to execution”, and that “the destruction which you are now devising for us” be brought down “on your own head”. Anger, in Aristotle II.2, is pain joined to a desire for a conspicuous revenge upon the man who has slighted us."},
  {id:"p-plat-quarter", name:"pity", appetite:"concupiscible", text:"To grant us our lives would be, therefore, a righteous judgment; if you consider also that we are prisoners who surrendered of their own accord, stretching out our hands for quarter, whose slaughter Hellenic law forbids, and who besides were always your benefactors.", cite:"Thucydides 3.58, Plataea", src:"thuc_crawley", prompt:"The Plataeans are speaking to the Spartan judges, who have their lives in hand. Which passion toward the prisoners is this picture meant to move?", why:"They are “prisoners who surrendered of their own accord, stretching out our hands for quarter, whose slaughter Hellenic law forbids”, and they were “always your benefactors”. Pity, in Aristotle II.8, is pain at a destructive evil that is about to fall on people who have not deserved it."},
  {id:"p-cic-mass", name:"fear", appetite:"irascible", text:"They contemplate nothing short of massacre and conflagration and pillage.", cite:"Cicero, Second Catilinarian 2.5", src:"cic_cat", prompt:"Cicero is describing the men Catiline has left in the city, and he is speaking to the people. Which passion is he moving in them?", why:"What he sets before the citizens is “massacre and conflagration and pillage”, a destructive evil still to come. Fear, in Aristotle II.5, is pain at the imagination of such an evil."},
  {id:"p-cato-life", name:"fear", appetite:"irascible", text:"We are not now debating on the revenues, or on injuries done to our allies, but our liberty and our life is at stake.", cite:"Sallust, Catiline 52, Cato", src:"sallust_w", prompt:"Cato is addressing the senate on the fate of the prisoners. Which passion is he moving in them about their own case?", why:"He puts before the senate an evil still ahead: “our liberty and our life is at stake.” Fear, in Aristotle II.5, is the pain of imagining a destructive evil of that kind."},
  {id:"p-cic-brave", name:"shame", appetite:"concupiscible", text:"And we, such is our bravery, think we are doing our duty to our country, if we merely keep ourselves out of the way of his reckless words and bloody deeds.", cite:"Cicero, First Catilinarian 1.2", src:"cic_cat", prompt:"Cicero turns from Catiline to the senate’s own conduct. Which passion is he moving in the senators about themselves?", why:"He calls it “our bravery” that “we merely keep ourselves out of the way of his reckless words and bloody deeds”, and he says they think this is “doing our duty”. The praise is not praise. Shame, in Aristotle II.6, is pain at conduct that brings discredit, and the conduct here is the senate’s shrinking."},
  {id:"p-cato-names-p", name:"indignation", appetite:"irascible", text:"For some time past, it is true, we have lost the real name of things; for to lavish the property of others is called generosity, and audacity in wickedness is called heroism; and hence the state is reduced to the brink of ruin.", cite:"Sallust, Catiline 52, Cato", src:"sallust_w", prompt:"Cato is telling the senate how the city now speaks of wickedness. Which passion is he moving in them toward that misuse of names?", why:"Vice is wearing the fortunate name of a virtue: “to lavish the property of others is called generosity, and audacity in wickedness is called heroism”. Indignation, in Aristotle II.9, is pain at good fortune that is not deserved, and a good name for a bad act is that fortune."},
  {id:"p-cic-popular", name:"indignation", appetite:"irascible", text:"Moreover he certainly does not think that this Lentulus, however extravagant in his bribes, having entertained so cruel and barbarous a design for the ruin of the Roman people and the destruction of this city, can possibly be called a popular leader.", cite:"Cicero, Fourth Catilinarian 4.5", src:"cic_cat", prompt:"Cicero is speaking of Lentulus in the senate. Which passion toward the idea of calling him a popular leader is the sentence moving?", why:"A man who has “entertained so cruel and barbarous a design for the ruin of the Roman people” cannot “be called a popular leader”. The good name would be good fortune he has not deserved. Indignation, in Aristotle II.9, is pain at that sort of fortune."},
  {id:"p-cic-gates", name:"confidence", appetite:"irascible", text:"There are no sentries at the gates, there are no men in ambush on the road; if any one wishes to depart, I need not see him go.", cite:"Cicero, Second Catilinarian 2.12", src:"cic_cat", prompt:"Cicero is telling the people how a conspirator may leave the city. Which passion about the city’s safety is he moving?", why:"“There are no sentries at the gates, there are no men in ambush on the road”, and if a man “wishes to depart”, the consul “need not see him go”. Confidence, in Aristotle II.5, is the imagination that what keeps us safe is at hand and that the terrible thing need not be guarded against at every door."},
  {id:"p-per-suffer", name:"love", appetite:"concupiscible", text:"Such is the Athens for which these men, in the assertion of their resolve not to lose her, nobly fought and died; and well may every one of their survivors be ready to suffer in her cause.", cite:"Thucydides 2.43, Pericles", src:"thuc_crawley", prompt:"Pericles has just described the city. Which passion toward that city is he moving in the survivors?", why:"The dead “nobly fought and died” for this Athens, “their resolve not to lose her”, and “every one of their survivors” is to “be ready to suffer in her cause”. Love, as Aristotle treats the concupiscible motion toward a good, is here the city’s good held so dear that one will suffer for it."},
  {id:"p-matt-give", name:"kindness", appetite:"concupiscible", text:"Heal the sick, cleanse the lepers, raise the dead, cast out devils: freely ye have received, freely give.", cite:"Matthew 10:8 (King James Version)", src:"kjv", prompt:"Christ is sending out the twelve. Which passion is he moving in them toward the people they will meet?", why:"The twelve are sent to “the sick”, “the lepers”, the dead, and those with “devils”, and they are to “freely give” what they have “freely” received. Kindness, in Aristotle II.7, is a service to someone in need, and the word “freely” marks it as not a return of a debt."},
  {id:"p-cori-ships", name:"kindness", appetite:"concupiscible", text:"When you were in want of ships of war for the war against the Aeginetans, before the Persian invasion, Corinth supplied you with twenty vessels.", cite:"Thucydides 1.41, Corinth", src:"thuc_crawley", prompt:"Corinth is reminding Athens of a past service. Which passion toward Corinth is that reminder meant to move?", why:"Athens was “in want of ships of war”, and “Corinth supplied you with twenty vessels”. Kindness, in Aristotle II.7, is a service done to someone in need, and the reminder is meant to wake the goodwill that such a service leaves behind."},
  {id:"p-cic-enemy", name:"hatred", appetite:"concupiscible", text:"Merely to depart from the city this is the sole order given by the consul to a public enemy.", cite:"Cicero, First Catilinarian 1.5", src:"cic_cat", prompt:"Cicero states the order he has given Catiline, and he wants the senate to stand in it with him. Which passion toward Catiline does the order ask them to share?", why:"The order to depart is given “to a public enemy”, and it is called “the sole order”. Hatred, in Aristotle II.4, is a settled wish for another’s ill, and it does not wait on a fresh slight. The name “public enemy” is that settled wish, and the ill is that he go."},
  {id:"p-per-sons", name:"emulation", appetite:"irascible", text:"Turning to the sons or brothers of the dead, I see an arduous struggle before you. When a man is gone, all are wont to praise him, and should your merit be ever so transcendent, you will still find it difficult not merely to overtake, but even to approach their renown.", cite:"Thucydides 2.45, Pericles", src:"thuc_crawley", prompt:"Pericles turns to the sons and brothers of the dead. Which passion is he moving in them?", why:"He sets “an arduous struggle” before “the sons or brothers of the dead”: “should your merit be ever so transcendent, you will still find it difficult not merely to overtake, but even to approach their renown.” Emulation, in Aristotle II.11, is pain at the absence of goods we might still gain, when we see those goods in people like ourselves."},
  // Added from Lysias, Thucydides, Plato, Demosthenes, Lincoln, and the Douay-Rheims Bible; the passions are those of Rhetoric II.2–11.
  {id:"p-lys-corn", name:"hatred", appetite:"concupiscible", text:"For their interests are the opposite of other men's: they make most profit when, on some bad news reaching the city, they sell their corn at a high price. And they are so delighted to see your disasters that they either get news of them in advance of anyone else, or fabricate the rumor themselves; now it is the loss of your ships in the Black Sea, now the capture of vessels on their outward voyage by the Lacedaemonians, now the blockade of your trading ports, or the impending rupture of the truce; and they have carried their enmity to such lengths that they choose the same critical moments as your foes to overreach you.", cite:"Lysias, Against the Corn-Dealers 22.14 (Lamb)", src:"lysias_lamb", prompt:"The speaker describes the corn-dealers, as a class, to the jury. Which passion toward them is he moving?", why:"He says that their interests “are the opposite of other men’s” and that they are “delighted to see your disasters.” Aristotle says that anger is felt toward individuals, while hatred is felt also toward a whole class, and that hatred wishes the other’s ruin and not merely his pain (II.4, 1382a). Here the jury is set against the dealers as a class."},
  {id:"p-per-model", name:"emulation", appetite:"irascible", text:"These take as your model and, judging happiness to be the fruit of freedom and freedom of valour, never decline the dangers of war.", cite:"Thucydides 2.43, Pericles", src:"thuc_crawley", prompt:"Pericles has praised the dead and turns to the citizens who survive them. Which passion is he moving in them toward the dead?", why:"He sets the dead before the living as their “model.” Emulation, in Aristotle II.11, is pain at the absence of goods that we see in others like ourselves, and it moves us to try to gain those goods for ourselves."},
  {id:"p-menex-exceed", name:"emulation", appetite:"irascible", text:"And all knowledge, when separated from justice and virtue, is seen to be cunning and not wisdom; wherefore make this your first and last and constant and all-absorbing aim, to exceed, if possible, not only us but all your ancestors in virtue; and know that to excel you in virtue only brings us shame, but that to be excelled by you is a source of happiness to us.", cite:"Plato, Menexenus 246e–247a (Jowett)", src:"plato_jowett", prompt:"In the funeral speech the dead are made to speak to their sons. Which passion are they moving in the sons?", why:"The fathers ask the sons “to exceed, if possible, not only us but all your ancestors in virtue.” Emulation, in Aristotle II.11, is the pain that moves us to gain goods we see in others like us, and Aristotle notes that those whose ancestors or kinsmen are honored are especially given to it (1388b)."},
  {id:"p-lincoln-friends", name:"love", appetite:"concupiscible", text:"I am loath to close. We are not enemies, but friends. We must not be enemies. Though passion may have strained, it must not break our bonds of affection.", cite:"Abraham Lincoln, First Inaugural Address (1861)", src:"lincoln_ev", prompt:"Lincoln closes his first inaugural address to a country in which several states have already seceded. Which passion is he moving in those states toward the Union?", why:"He tells them “We are not enemies, but friends,” and speaks of “our bonds of affection.” Love, in Aristotle II.4, is wishing for another what we think good, for his sake, and Lincoln names the friendship that he wants them to feel again."},
  {id:"p-john-love", name:"love", appetite:"concupiscible", text:"This is my commandment, that you love one another, as I have loved you. Greater love than this no man hath, that a man lay down his life for his friends.", cite:"John 15:12–13 (Douay-Rheims)", src:"douay", prompt:"Christ is speaking to his disciples on the night before his death. Which passion is he moving in them toward one another?", why:"He commands them to “love one another,” and gives the measure of it: “that a man lay down his life for his friends.” Love, in Aristotle II.4, is wishing another’s good for his sake, and doing it as far as we can."},
  {id:"p-cleon-payback", name:"anger", appetite:"irascible", text:"Do not, therefore, be traitors to yourselves, but recall as nearly as possible the moment of suffering and the supreme importance which you then attached to their reduction; and now pay them back in their turn, without yielding to present weakness or forgetting the peril that once hung over you.", cite:"Thucydides 3.40, Cleon", src:"thuc_crawley", prompt:"Cleon is speaking to the Athenian assembly about the Mytilenians, who revolted. Which passion toward them is he moving?", why:"He asks the assembly to recall “the moment of suffering” and to “pay them back in their turn.” Anger, in Aristotle II.2, is a desire, accompanied by pain, for revenge on those who have slighted us, so Cleon renews the slight in order that the desire for revenge may return."},
  {id:"p-dem-news", name:"shame", appetite:"concupiscible", text:"Surely the strongest necessity that a free people can experience is the shame which they must feel at their position! What? Do you want to go round asking one another, 'Is there any news?' Could there be any stranger news than that a man of Macedonia is defeating Athenians in war, and ordering the affairs of the Hellenes?", cite:"Demosthenes, First Philippic 10 (Pickard)", src:"demosth", prompt:"Demosthenes is rebuking the Athenian assembly for its delay against Philip. Which passion is he moving in them about their own conduct?", why:"He names it himself: “the shame which they must feel at their position.” Shame, in Aristotle II.6, is pain at evils that seem to bring discredit, and the discredit here is that Athenians are being defeated by “a man of Macedonia.”"},
  {id:"p-bras-numbers", name:"confidence", appetite:"irascible", text:"The bravery that you habitually display in war does not depend on your having allies at your side in this or that encounter, but on your native courage; nor have numbers any terrors for citizens of states like yours, in which the many do not rule the few, but rather the few the many, owing their position to nothing else than to superiority in the field.", cite:"Thucydides 4.126, Brasidas", src:"thuc_crawley", prompt:"Brasidas is speaking to his soldiers, whose allies have deserted them in the face of a large barbarian army. Which passion is he moving in them?", why:"He tells them that “numbers” have no “terrors” for men like them. Confidence, in Aristotle II.5, is the opposite of fear, that is, the expectation that what keeps us safe is near and that what is terrible is far off or weak."},
  {id:"p-plat-tombs", name:"pity", appetite:"concupiscible", text:"We, as we have a right to do and as our need impels us, entreat you, calling aloud upon the gods at whose common altar all the Hellenes worship, to hear our request, to be not unmindful of the oaths which your fathers swore, and which we now plead—we supplicate you by the tombs of your fathers, and appeal to those that are gone to save us from falling into the hands of the Thebans and their dearest friends from being given up to their most detested foes.", cite:"Thucydides 3.59, Plataea", src:"thuc_crawley", prompt:"The Plataeans are pleading with the Spartan judges for their lives. Which passion toward themselves are they moving?", why:"They supplicate “by the tombs of your fathers” and ask not to be given up “to their most detested foes.” Pity, in Aristotle II.8, is pain at a destructive evil about to fall on those who do not deserve it, and it is strongest when the sufferers are near to us, as the Plataeans were to the Spartans’ fathers."},
  {id:"p-dem-risen", name:"indignation", appetite:"irascible", text:"Look then at the men whose policy gives you these things. Some of them who were poor have become rich; others, who were unknown to fame, have risen to honour; some of them have provided themselves with private houses more imposing than our public buildings; and the lower the fortunes of the city have fallen, the higher theirs have risen.", cite:"Demosthenes, Third Olynthiac 29 (Pickard)", src:"demosth", prompt:"Demosthenes is speaking to the assembly about the politicians who have managed the city in recent years. Which passion toward them is he moving?", why:"Some “who were poor have become rich,” and “the lower the fortunes of the city have fallen, the higher theirs have risen.” Indignation, in Aristotle II.9, is pain at good fortune that is not deserved, and Demosthenes sets the politicians’ rise against the city’s fall."},
  {id:"p-dem-frontier", name:"fear", appetite:"irascible", text:"Only consider what would happen, if Philip got such an opportunity to strike at us, and there was war on our frontier. Can you not imagine how readily he would march against us?", cite:"Demosthenes, First Olynthiac 24 (Pickard)", src:"demosth", prompt:"Demosthenes is urging the assembly to act while Philip is in difficulty. Which passion is he moving in them with these two sentences?", why:"He asks them to picture “war on our frontier” and how readily Philip “would march against us.” Fear, in Aristotle II.5, is pain at the imagination of a destructive evil that is near."},
  {id:"p-dem-phocis", name:"pity", appetite:"concupiscible", text:"For when recently we were on our way to Delphi we could not help seeing it all—houses razed to the ground, cities stripped of their walls, the land destitute of men in their prime—only a few poor women and little children left, and some old men in misery. Indeed, no words can describe the distress now prevailing there.", cite:"Demosthenes, On the Embassy 65 (Pickard)", src:"demosth", prompt:"Demosthenes is describing to the jury what the Phocians suffered after the peace. Which passion toward the Phocians is he moving?", why:"He sets before the jury “houses razed to the ground” and “only a few poor women and little children left, and some old men in misery.” Pity, in Aristotle II.8, is pain at a destructive evil that has fallen on those who did not deserve it, and Aristotle says that evils set before the eyes are the most pitiable."},
  {id:"p-lys-thirty", name:"kindness", appetite:"concupiscible", text:"Now, when the townsmen had assembled together before their setting out, as I knew that some among them, though true and ardent patriots, lacked means for expenses of service, I said that the well-to-do ought to provide what was necessary for those in needy circumstances. Not only did I recommend this to the others, but I myself gave thirty drachmae each to two men; not as being a person of great possessions, but to set a good example to the others.", cite:"Lysias, In Defence of Mantitheus 16.14 (Lamb)", src:"lysias_lamb", prompt:"Mantitheus tells the Council what he did for the poorer men of his township when they were called up for service. Which passion toward him is the account meant to move?", why:"He gave “thirty drachmae each to two men” who “lacked means for expenses of service.” Kindness, in Aristotle II.7, is a service done to someone in need, not for any return, and the greater the need, the greater the kindness."},
  {id:"p-nic-hope", name:"confidence", appetite:"irascible", text:"Athenians and allies, even in our present position we must still hope on, since men have ere now been saved from worse straits than this; and you must not condemn yourselves too severely either because of your disasters or because of your present unmerited sufferings.", cite:"Thucydides 7.77, Nicias", src:"thuc_crawley", prompt:"Nicias is speaking to the defeated Athenian army as it begins its retreat from Syracuse. Which passion is he moving in them?", why:"He tells them that “we must still hope on, since men have ere now been saved from worse straits than this.” Confidence, in Aristotle II.5, is the expectation that what keeps us safe is near, and one of its sources is knowing that others have come through the same dangers."},
];
const DEBATES = [
  {id:'d-arch', title:'War with Athens', a:{who:'Archidamus', pid:'thuc-arch-1', claim:'Do not rush to war; experience teaches its cost.'}, b:{who:'Sthenelaidas', pid:'thuc-sthen-1', claim:'Vote the war; the Athenians are in the wrong.'}, species:'deliberative', src:'thuc_crawley', locus:'Thucydides 1.80 / 1.86'},
  {id:'d-myt', title:'Mytilene', a:{who:'Cleon', pid:'thuc-cleon-1', claim:'A democracy that talks cannot hold empire; do not reopen the sentence.'}, b:{who:'Diodotus', pid:'thuc-diod-1', claim:'Haste and passion are the two things most opposed to good counsel.'}, species:'deliberative', src:'thuc_crawley', locus:'Thucydides 3.37 / 3.42'},
  {id:'d-fun', title:'Pericles’ funeral oration', a:{who:'Pericles (the custom)', pid:'thuc-fun-1', claim:'I shall speak of the city, not only of the men.'}, b:{who:'Pericles (the city)', pid:'thuc-fun-2', claim:'Our constitution does not copy our neighbours; we are an example.'}, species:'epideictic', src:'thuc_crawley', locus:'Thucydides 2.35 / 2.37'},
  {id:'d-cat', title:'The Catilinarian conspirators', a:{who:'Catiline', pid:'sal-cat-consp', claim:'The conspirators are called to dare, as men dispossessed.'}, b:{who:'Caesar', pid:'sal-caes-1', claim:'Inflict only such penalties as the laws have provided.'}, species:'deliberative', src:'sallust_w', locus:'Sallust, Catiline 20 / 51'},
  {id:'d-ant', title:'The javelin', a:{who:'The father (prosecution)', pid:'ant-3.1.1', claim:'Unintentional homicide; the thrower caused the death.'}, b:{who:'The thrower (defence)', pid:'ant-3.2.1', claim:'Misfortune forces the quiet man into court; the running-out is the cause.'}, species:'forensic', src:'antiphon', locus:'Antiphon 3.1 / 3.2'},
  {id:'d-ap', title:'Socrates before the jury', a:{who:'The accusers (as Socrates reports them)', pid:'plato-ap-1', claim:'Beware his eloquence; he is a clever speaker.'}, b:{who:'Socrates', pid:'plato-ap-2', claim:'The unexamined life is not worth living; he will not beg.'}, species:'forensic', src:'plato_jowett', locus:'Plato, Apology (Jowett)'}
];
const GREG_PAIRS = [
  {id:'g1', pair:'the joyful and the sad', why:'The first are to be checked lest they run to excess; the second are to be comforted lest they break.', src:'greg'},
  {id:'g2', pair:'the humble and the proud', why:'The first are to be praised carefully, lest praise become a snare; the second are to be rebuked, lest silence confirm them.', src:'greg'},
  {id:'g3', pair:'the silent and the talkative', why:'The first must be drawn to a useful word; the second must be taught to spare the hearer.', src:'greg'},
  {id:'g4', pair:'the young and the old', why:'The first are to be admonished to keep order; the second are to be asked for the example that their years already claim.', src:'greg'},
  {id:'g5', pair:'men and women', why:'Heavier injunctions are laid on the one, lighter on the other, that those may be exercised by great things and these winningly converted by light ones.', src:'greg'},
  {id:'g6', pair:'the poor and the rich', why:'The first are to be offered the solace of comfort against tribulation; the second are to be made afraid of elation.', src:'greg'},
  {id:'g7', pair:'subjects and prelates', why:'The first must not be crushed by obedience; the second must not be elated by their place, nor command more than is just.', src:'greg'},
  {id:'g8', pair:'servants and masters', why:'The first are to be admonished not to despise those over them; the second, not to forget that they too have a Lord in heaven.', src:'greg'},
  {id:'g9', pair:'the wise of this world and the dull', why:'The first must not trust their own cleverness; the second must not despair of being taught.', src:'greg'},
  {id:'g10', pair:'the impudent and the bashful', why:'The first are to be checked by open rebuke; the second are to be drawn on by gentle encouragement.', src:'greg'},
  {id:'g11', pair:'the gluttonous and the abstinent', why:'The first are to be restrained from the belly; the second are to be kept from pride in their fasting.', src:'greg'},
  {id:'g12', pair:'the merciful and the envious', why:'The first are to be praised without being taught to spare justice; the second are to be shown that another’s good is no theft from themselves.', src:'greg'},
  {id:'g13', pair:'the peaceful and the brawlers', why:'The first are to be kept from a false quiet that hides the wound; the second are to be taught the cost of a quarrel.', src:'greg'},
  {id:'g14', pair:'those who preach and those who are silent in the office of preaching', why:'The first must not neglect their own life; the second must not hide the talent.', src:'greg'},
  {id:'g15', pair:'the forward and the faint-hearted', why:'The first are to be shown that deeds they prize may displease God; the second are to be lifted out of despondency.', src:'greg'},
  {id:'g16', pair:'the impatient and the patient', why:'Fury drives the first into evils they were not seeking; the second are to be kept from turning endurance into a wish for revenge.', src:'greg'},
  {id:'g17', pair:'the simple and the insincere', why:'The first are sometimes to be silent about a truth; the second are to learn how heavy a labor duplicity is.', src:'greg'},
  {id:'g18', pair:'those who fear scourges and those whom scourges do not correct', why:'The first are to grow out of dread into charity; the second grow worse by complaining under a stroke that does not heal them.', src:'greg'},
  {id:'g19', pair:'the slothful and the hasty', why:'The first lose a good by delay, until they can no longer do it; the second change the merit of a deed by doing it before its time.', src:'greg'},
  {id:'g20', pair:'the meek and the passionate', why:'The first soften strictness more than the case allows; the second take their anger for the zeal of righteousness.', src:'greg'},
  {id:'g21', pair:'the obstinate and the fickle', why:'The first will not take counsel, thinking too well of themselves; the second abandon their own judgment, thinking too little of themselves.', src:'greg'},
  {id:'g22', pair:'those who give of their own and those who seize what belongs to others', why:'The first are to be kept from swelling above those they support; the second are to be called off from the taking.', src:'greg'},
  {id:'g23', pair:'those who neither covet nor give, and those who give and still seize', why:'The first withhold a common gift from the poor; the second, for all their alms, remain in the taking.', src:'greg'},
  {id:'g25', pair:'sowers of strifes and peacemakers', why:'The first follow the enemy who scattered tares among the wheat; the second must learn between whom concord ought to be made.', src:'greg'},
  {id:'g26', pair:'those who misread the sacred law and those who understand it but speak it without humility', why:'In the first the medicine of Scripture is turned into poison; the second, proud of their learning, treat true words as if they were their own.', src:'greg'},
  {id:'g28', pair:'those who prosper in temporal wishes and those worn by adversity', why:'The first are to seek the giver along with the gift; the second are to see a physician’s care in what is withheld.', src:'greg'},
  {id:'g29', pair:'those who have known sins of the flesh and those who have not', why:'The first are to fear the sea after shipwreck; the second are to be warned lest innocence grow torpid.', src:'greg'},
  {id:'g30', pair:'those who weep for sins and still commit them, and those who leave their sins and do not weep', why:'In the first, tears that prepare a return to filth cleanse nothing; the second still owe the mourning for what they have left.', src:'greg'},
  {id:'g31', pair:'those who commend the wrong they do and those who blame a wrong and still commit it', why:'The first teach their fault to every hearer; the second pass sentence on themselves.', src:'greg'},
  {id:'g32', pair:'those overcome by a sudden passion and those who sin on purpose', why:'The first are struck while the heart is unguarded; the second, having chosen their guilt with deliberation, kindle a stricter judgment.', src:'greg'},
  {id:'g33', pair:'those who often commit small sins and those who seldom commit grievous ones', why:'The first are to count their faults, as drops that fill a river; the second are to see that pride in the faults they avoid prepares a heavier fall.', src:'greg'},
  {id:'g34', pair:'those who do not begin a good work and those who do not finish one', why:'The first are to be shown that what they love is vain; the second tear up what they had started.', src:'greg'},
  {id:'g35', pair:'those who do evil in private and good before men, and those who hide their good', why:'The first lie open to the divine sentence, whatever virtue they show in public; the second lay a stumbling-block before the weak by letting ill be thought of them.', src:'greg'}
];
const FIGURE_GLOSS = {
  anaphora:'the same word at the head of successive members',
  antithesis:'opposed thoughts set in parallel frames',
  apostrophe:'a turn away from the hearers to address someone absent or dead, a god, or a thing treated as a person',
  tricolon:'three coordinated members, often rising',
  isocolon:'members of roughly equal length and shape',
  homoeoteleuton:'like endings on successive clauses',
  metaphor:'naming one thing with another’s name, on a seen likeness',
  irony:'saying less, or the opposite, to mean more',
  'rhetorical question':'a question that is a charge, not a request for information',
  chiasmus:'crossed order (ABBA)',
  epizeuxis:'immediate repetition of the same word',
  sententia:'a general maxim, briefly stated',
  climax:'members rising in force',
  asyndeton:'coordination without conjunctions',
  personification:'treating an abstraction as an agent',
  simile:'a likeness stated openly, usually with like or as',
  hyperbole:'deliberate excess',
  occupatio:'anticipating an objection',
  praeteritio:'claiming to pass over what one thereby names',
  hypotyposis:'vivid description that sets a scene before the eyes',
  exclamatio:'an open cry of feeling',
  correctio:'taking back a word to put a sharper one',
  enumeratio:'a numbered or listed unfolding',
  dilemma:'a choice between two alternatives, both unfavourable',
  mythos:'a story offered as explanation',
  definition:'an argument from what the thing is called',
  ethos:'the speaker’s character serving as proof',
  pathos:'the hearer’s passion serving as proof',
  prooimion:'the Greek opening, which does the work of the Latin exordium',
  exordium:'the opening part (office) of the speech',
  exemplum:'an example used as proof',
  hendiadys:'one idea through two coordinated nouns',
  litotes:'understatement by denying the contrary',
  parenthesis:'a break that inserts a second voice',
  hypothesis:'a supposed case used as argument',
  prosopopoeia:'giving a voice to the absent or the dead',
  epithet:'a descriptive word or phrase attached to a name',
  // Further figures added with the English-tradition passages (all in the optional tier)
  epistrophe:'the same word at the end of successive members',
  symploce:'the same words at the head and at the end of successive members',
  anadiplosis:'the last word of one member taken up at the head of the next',
  epanalepsis:'a member that ends with the word it began with',
  epimone:'a phrase repeated as a refrain, to dwell on one point',
  conduplicatio:'a key word repeated in successive clauses',
  polyptoton:'the same root repeated in different grammatical forms',
  anastrophe:'a word or phrase moved out of its usual order for emphasis',
  polysyndeton:'a conjunction placed between every member of a series',
  ellipsis:'leaving out words that the hearer supplies from the context',
  aposiopesis:'breaking off in the middle of a sentence',
  hypophora:'asking a question and then answering it'
};
const SPEECH_FIGURES = {
  anaphora:1, antithesis:1, apostrophe:1, tricolon:1, isocolon:1, homoeoteleuton:1,
  metaphor:1, irony:1, 'rhetorical question':1, chiasmus:1, epizeuxis:1, sententia:1,
  climax:1, asyndeton:1, personification:1, simile:1, hyperbole:1, occupatio:1,
  praeteritio:1, hypotyposis:1, exclamatio:1, correctio:1, enumeratio:1, dilemma:1,
  hendiadys:1, litotes:1, parenthesis:1, prosopopoeia:1, epithet:1,
  epistrophe:1, symploce:1, anadiplosis:1, epanalepsis:1, epimone:1, conduplicatio:1, polyptoton:1, anastrophe:1, polysyndeton:1, ellipsis:1, aposiopesis:1, hypophora:1
};
function isSpeechFigure(name){ return !!SPEECH_FIGURES[name]; }
function speechSpans(p){ return (p.spans||[]).filter(s => isSpeechFigure(s.figure)); }
// Two tiers of figures. The main figures exercises ask only about the core figures, the ones most
// commonly taught; every other speech figure is in the optional tier, drilled in Further figures.
// To move a figure between tiers, add it to CORE_FIGURES or take it out.
const CORE_FIGURES = {
  anaphora:1, antithesis:1, apostrophe:1, tricolon:1, isocolon:1, homoeoteleuton:1, metaphor:1, simile:1, personification:1, irony:1, 'rhetorical question':1, chiasmus:1, climax:1, asyndeton:1, hyperbole:1, sententia:1, litotes:1, praeteritio:1
};
function isCoreFigure(name){ return isSpeechFigure(name) && !!CORE_FIGURES[name]; }
function isAdvancedFigure(name){ return isSpeechFigure(name) && !CORE_FIGURES[name]; }
function coreSpans(p){ return speechSpans(p).filter(s => isCoreFigure(s.figure)); }
function advancedSpans(p){ return speechSpans(p).filter(s => isAdvancedFigure(s.figure)); }
function figLabel(f){ return isAdvancedFigure(f) ? f+' (optional)' : f; }
function isOration(p){
  if(!p) return false;
  if(/Douay|Matthew|Paul|John/.test(p.author||'')) return false;
  if(/Homer|Virgil|Boethius/.test(p.author||'')) return false;
  if(/Pastoral Rule|Consolation|Confessions/.test(p.work||'')) return false;
  return !!speciesOf(p);
}
const PISTEIS_ITEMS = [
  {pid:'cic-cat1-1', pistis:'pathos', why:'The questions are not for information; they put the senate into alarm and shame.'},
  {pid:'ant-3.2.1', pistis:'ethos', why:'The quiet man is forced into court against his nature, and his character serves as proof.'},
  {pid:'gor-hel-8', pistis:'logos', why:'Gorgias makes a claim about what logos is and offers it as the ground of Helen’s acquittal.'},
  {pid:'thuc-diod-1', pistis:'logos', why:'Diodotus argues from the nature of counsel: haste and passion oppose good deliberation.'},
  {pid:'ant-3.1.1', pistis:'logos', why:'The facts are agreed, so the charge is a description of cause.'},
  {pid:'plato-ap-1', pistis:'ethos', why:'Socrates refuses the usual captatio (the bid for the jury’s goodwill), and his manner of speaking becomes the proof of his character.'},
  {pid:'aug-chast', pistis:'pathos', why:'The divided will is staged so that the hearer feel the shame of “not yet.”'},
  {pid:'thuc-fun-2', pistis:'ethos', why:'Athens is characterized, and the city’s ethos becomes the speaker’s.'},
  {pid:'sal-caes-1', pistis:'logos', why:'Caesar argues from the laws and from the consequences of a novel penalty.'},
  {pid:'cic-cat1-4', pistis:'pathos', why:'“Where are we?” The question raises fear and indignation before the proof is unfolded.'},
  {pid:'gor-hel-10', pistis:'pathos', why:'Song is treated as witchery, and the doctrine of pathos is offered as a physics of the soul.'},
  {pid:'soph-ant-2', pistis:'ethos', why:'“My nature is for mutual love, not hate”: character is named as the ground of the act.'},
  {pid:'cic-milo-1', pistis:'ethos', why:'The advocate’s confessed fear is made a proof of the man he defends, and of the danger.'},
  {pid:'thuc-arch-1', pistis:'ethos', why:'The speaker appeals to his age and his experience of many wars, so his character is the reason to wait.'},
  {pid:'thuc-cleon-1', pistis:'logos', why:'Cleon argues from what empire is: a democracy that talks cannot hold it.'},
  {pid:'aug-ddc-12', pistis:'logos', why:'The three offices are distinguished by what they do, not by a display of feeling.'},
  {pid:'sal-cat-consp', pistis:'pathos', why:'Catiline moves the conspirators by hope, grievance, and the dare.'},
  {pid:'plato-ap-2', pistis:'ethos', why:'He will not beg, and his bearing serves as the argument.'},
  {pid:'tac-cal-1', pistis:'pathos', why:'Calgacus puts the host into the mind of a last free people, with no land behind them.'},
  {pid:'dem-3', pistis:'logos', why:'Money, ships, and a law that the force remain make up a policy argued from its parts.'},
  {pid:'cic-marc-1', pistis:'ethos', why:'The long silence came from grief, not fear, and Cicero’s character is restored with Caesar’s clemency.'},
  {pid:'gor-hel-6', pistis:'logos', why:'Four causes are named, so the case is divided before it is proved.'},
  {pid:'ant-3.2.10', pistis:'pathos', why:'The speaker raises pollution and the city’s danger if the killer walks, and so the hearer is put in fear.'},
  {pid:'thuc-fun-1', pistis:'ethos', why:'He will not praise as others have praised; the city’s character is his.'},
  // English tradition (public-domain quotations; sources eng_cer, eng_cem, kjv).
  {pid:'eng-henry-liberty-death', pistis:'pathos', why:'The questions and the prayer are meant to make slavery hateful and liberty worth any risk, so the force lies in what the hearers feel.'},
  {pid:'eng-lincoln-proclamation', pistis:'logos', why:'Lincoln takes both possible cases of the law and shows that neither allows a retraction, so the proof lies in the argument.'},
  {pid:'eng-franklin-consent', pistis:'ethos', why:'The sentence has the form of an argument, but its two reasons (he expects no better, and he is not sure that it is not the best) prove little about the Constitution; they are confessions of doubt. What persuades is the man who makes them: the oldest delegate, and one of the most eminent, admits his doubts and still consents, and his candour is offered as a reason for others to do the same.'},
  {pid:'eng-ames-volcano', pistis:'pathos', why:'The image of a volcano does not prove that democracy destroys itself; it makes the hearers afraid that it will.'},
  {pid:'eng-nott-duel', pistis:'pathos', why:'The preacher moves his hearers to shame, since the charge ends with their own silence.'},
  {pid:'eng-burke-tyrants', pistis:'logos', why:'The sentence is a maxim, and Aristotle treats a maxim as the premise or the conclusion of an enthymeme (II.21). Burke states a general cause and effect, that rebellion on principle gives kings a reason to rule as tyrants, and the hearers are asked to judge whether it is true, not chiefly to feel fear or to trust the speaker.'},
  // Further labels. Each one is defensible from the excerpt of about 240 characters, which is what the hardest setting shows.
  {pid:'cic-cat3-11', pistis:'ethos', why:'He declines any reward of merit and any memorial of his renown, and he places the distinction in the eternal remembrance of this day.'},
  {pid:'cic-cat4-2', pistis:'pathos', why:'Cicero sets before the senators their own safety, their wives, their children, and their properties, so that fear for these, and not regard for the consul, governs their vote; the line about ceasing to consider him serves that end.'},
  {pid:'dem-1', pistis:'ethos', why:'Speakers who praise the forefathers, he judges, desire to gratify the hearers, and are not acting in the interests of those whom they praise.'},
  {pid:'dem-2', pistis:'ethos', why:'He lays it down as the duty of every speaker to declare the policy he considers best, and to keep malice and favour out of the speech.'},
  {pid:'plato-ap-3', pistis:'ethos', why:'He honours and loves the Athenians, he will obey God rather than them, and he will never cease from the practice of philosophy.'},
  {pid:'cic-cat2-12', pistis:'ethos', why:'The safe defence of the city is what he has taken thought for, and what he has made provision for.'},
  {pid:'sal-cat-2', pistis:'ethos', why:'He tells the soldiers he is well aware that words cannot inspire courage, and that a speech cannot make a timid army valiant.'},
  {pid:'eng-lincoln-events', pistis:'ethos', why:'He attempts no compliment to his own sagacity, and he says plainly that events have controlled him.'},
  {pid:'eng-johnson-macpherson', pistis:'ethos', why:'He repeats the judgment he has given the public, that the book is an imposture, and he defies the rage turned on him.'},
  {pid:'eng-jc-brutus-rome', pistis:'ethos', why:'He gives, as his answer for rising against Caesar, that he loved Rome more.'},
  {pid:'eng-lincoln-misquotes', pistis:'ethos', why:'He declines to say the misquotation was wilful, and he states that the quotation fails to be accurate.'},
  {pid:'cic-cat1-5', pistis:'pathos', why:'The repeated line “I will not bear, I will not endure, I will not allow it” sets the indignation of the consul in front of the senate.'},
  {pid:'cic-cat1-6', pistis:'pathos', why:'Outside the band of conspirators, there is not a man in Rome who does not fear him, and not a man who does not hate him.'},
  {pid:'cic-cat1-7', pistis:'pathos', why:'The country pleads with mute eloquence, and the plea opens on the years in which no crime has been committed without his help.'},
  {pid:'cic-cat1-9', pistis:'pathos', why:'“Yet why do I speak?” and the questions whether he will reform, or think of flight, or contemplate exile, are put to a man the speaker treats as beyond appeal.'},
  {pid:'cic-cat2-1', pistis:'pathos', why:'“At length and at last, citizens of Rome, we have prevailed” releases the citizens from the man of violent heart and furious lips.'},
  {pid:'tac-cal-3', pistis:'pathos', why:'“These plunderers of the world,” stimulated by avarice if the enemy is rich and by ambition if poor, is a charge spoken to raise hatred.'},
  {pid:'eng-henry-let-it-come', pistis:'pathos', why:'“Our chains are forged” and “let it come” put the hearers into a war he calls inevitable.'},
  {pid:'eng-grattan-corry', pistis:'pathos', why:'Refusing to call the man villain, and refusing to call him fool, is itself the insult.'},
  {pid:'eng-grattan-blood-felony', pistis:'pathos', why:'The cry of blood and felony, repeated through every period of the bill, is meant to make the hearers recoil.'},
  {pid:'eng-grattan-cradle-hearse', pistis:'pathos', why:'“I sat by her cradle, I followed her hearse” mourns the Irish Parliament with a parental recollection.'},
  {pid:'cic-cat1-8', pistis:'logos', why:'The silence of the house denotes consent, and a sanction in words is still awaited.'},
  {pid:'cic-cat3-7', pistis:'logos', why:'Since the leaders have been seized, he says the hearers are bound to believe that all the forces of Catilina were defeated.'},
  {pid:'cic-cat4-4', pistis:'logos', why:'He sets out the only two motions, the proposal of Silanus that the men be punished by death, and the proposal of Caesar, which omits that punishment.'},
  {pid:'cic-milo-2', pistis:'logos', why:'“When arms speak, the laws are silent” and the reason is given: one who waits for the word of the law pays an undeserved penalty before he can exact a deserved one.'},
  {pid:'thuc-mel-1', pistis:'logos', why:'The Athenians say that the strong do what they can and the weak suffer what they must, and the Melians answer on the ground of interest.'},
  {pid:'plato-ap-4', pistis:'logos', why:'There is great reason to hope that death is a good, because death is one of two things, either a state of nothingness or a change.'},
  {pid:'aug-ddc-2', pistis:'logos', why:'He asks who will dare to say that truth is to take its stand unarmed against falsehood, when the art of rhetoric is available to enforce either truth or falsehood.'},
  {pid:'eng-henry-better-men', pistis:'logos', why:'These men will be infinitely worse than the English commoners, because they are to be chosen blindfolded.'},
  {pid:'eng-webster-knapp-there', pistis:'logos', why:'He argues presence at the murder from the facts that the man was there before it, there after it, and there unwilling to be seen.'},
  {pid:'eng-lincoln-cooper-guilty', pistis:'logos', why:'If the hearer knows of the guilt, he is inexcusable unless he names the man and proves the fact; if he does not know of it, he is inexcusable for asserting it.'},
  {pid:'eng-paine-king-law', pistis:'logos', why:'As in absolute governments the king is law, so, he says, in free countries the law ought to be king.'},
  // Lysias (Lamb) and two Yonge speeches, plus labels on passages already in the bank. Each one holds for the excerpt of about 240 characters and for the longer excerpt.
  {pid:'lys-16-1', pistis:'ethos', why:'He would be most grateful for the accusation, because an examination of the record of a life is the greatest service that can be rendered to a victim of unjust slander.'},
  {pid:'lys-16-2', pistis:'ethos', why:'The confidence is in himself: once they have heard his conduct in the past, a man inclined to dislike him will, he hopes, think better of him.'},
  {pid:'lys-24-1', pistis:'ethos', why:'He can almost find it in him to be grateful to his accuser, for previously he had no excuse for rendering an account of his life, and now, owing to this man, he has got one.'},
  {pid:'lys-25-1', pistis:'ethos', why:'Full excuse is offered to the jury if, remembering past events, they are equally incensed against all those who remained in the city.'},
  {pid:'lys-19-apt', pistis:'ethos', why:'Even with no natural aptitude for the task, he takes it as necessary to defend his father and himself as best he can.'},
  {pid:'cic-man-1', pistis:'ethos', why:'On account of his youth he has not dared to intrude upon the authority of this place, and no arguments ought to be brought here except such as were the fruit of great ability.'},
  {pid:'lys-1-1', pistis:'pathos', why:'If the jury had the same feelings about others as about themselves, not one of them but would be indignant, and the appointed penalties would seem too mild.'},
  {pid:'lys-19-fear', pistis:'pathos', why:'He is greatly embarrassed: if he fails to speak with effect to-day, he and his father will be held to be guilty.'},
  {pid:'tac-cal-2', pistis:'pathos', why:'“To ravage, to slaughter, to usurp under false titles, they call empire” and “where they make a desert, they call it peace” are spoken to make that rule hateful.'},
  {pid:'eng-isaiah-evil-good', pistis:'pathos', why:'“Woe unto them that call evil good, and good evil” cries out against those who confound moral names.'},
  {pid:'eng-douglass-false', pistis:'pathos', why:'“America is false to the past, false to the present, and solemnly binds herself to be false to the future” charges the nation so that the hearers feel the shame of it.'},
  {pid:'cic-cat2-3', pistis:'pathos', why:'The comparison of forces is offered to make the citizens confident, not to prove a disputed point; Aristotle counts confidence among the passions, and says it arises when we judge that our resources are greater than the danger (II.5).'},
  {pid:'thuc-corc', pistis:'logos', why:'He calls it folly to sacrifice them, and he names the reason he wants remembered: there are but three considerable naval powers in Hellas, Athens, Corcyra, and Corinth.'},
  {pid:'eng-henry-stronger', pistis:'pathos', why:'The questions state no premise and prove nothing; they make the hearers picture themselves disarmed, with a British guard in every house, so that fear and shame at delay move them to act now.'},
  {pid:'eng-lincoln-house-divided', pistis:'logos', why:'This government cannot endure permanently half slave and half free.'},
  {pid:'eng-swift-cobwebs', pistis:'logos', why:'Laws, like cobwebs, may catch small flies, but let wasps and hornets break through.'},
  {pid:'eng-burke-bristol-conscience', pistis:'ethos', why:'Burke is telling his own electors what kind of representative he is: one who will not sacrifice his judgment and conscience even to them. The speech persuades by showing his virtue (arete), and the general form of the sentence does not make it chiefly an argument.'}
];
function pistisOf(p){
  const extra = (window.QUIZ_ITEMS && window.QUIZ_ITEMS.PISTEIS_ITEMS) || [];
  const it = PISTEIS_ITEMS.concat(extra).find(x => x.pid === p.id);
  return it ? it.pistis : '';
}
const ETHOS_ITEMS = [
  {id:'et1', pid:'plato-ap-1', which:'arete', label:'Virtue (arete)',
    why:'He will not borrow the law-court’s eloquence, and so the manner of the man is the proof of the man.'},
  {id:'et2', pid:'thuc-arch-1', which:'phronesis', label:'Practical wisdom (phronesis)',
    why:'He appeals to his years and his many wars, asking to be trusted because he has seen what war costs.'},
  {id:'et3', pid:'ant-3.2.1', which:'arete', label:'Virtue (arete)',
    why:'The quiet man (apragmon) is forced into court against his nature, and his character serves as argument.'},
  {id:'et4', pid:'cic-milo-1', which:'eunoia', label:'Goodwill (eunoia)',
    why:'The advocate fears for the bravest of men and for the republic, and that goodwill is his opening.'},
  {id:'et5', pid:'plato-ap-2', which:'arete', label:'Virtue (arete)',
    why:'He will not beg for his life, and the refusal shows the man.'},
  {id:'et6', pid:'thuc-fun-2', which:'phronesis', label:'Practical wisdom (phronesis)',
    why:'Athens is presented as an original, not a copy, and the city’s wisdom is offered as the speaker’s credit.'},
  {id:'et7', pid:'cic-marc-1', which:'eunoia', label:'Goodwill (eunoia)',
    why:'The silence was grief, not fear, and today he speaks again for the house, so that his goodwill is restored.'},
  {id:'et8', pid:'soph-ant-2', which:'arete', label:'Virtue (arete)',
    why:'“My nature is for mutual love, not hate”: she names the character from which the act follows.'},
  {id:'et9', pid:'thuc-diod-1', which:'phronesis', label:'Practical wisdom (phronesis)',
    why:'He argues from what counsel is, and asks to be trusted as a man who will not be rushed.'},
  {id:'et10', pid:'sal-caes-1', which:'phronesis', label:'Practical wisdom (phronesis)',
    why:'Caesar keeps the penalty within the law and asks to be heard as the man who sees what a novel punishment costs the republic.'},
  {id:'et11', pid:'cic-cat1-1', which:'eunoia', label:'Goodwill (eunoia)',
    why:'The questions shame the senate into the consul’s side, and his goodwill toward the republic appears as shared alarm.'},
  {id:'et12', pid:'aug-ddc-2', which:'eunoia', label:'Goodwill (eunoia)',
    why:'Truth must not stand unarmed, and the Christian orator’s goodwill is for the hearer’s good, not for a fee.'},
  // English tradition (public-domain quotations; sources eng_cer, eng_cem, kjv).
  {id:'eng-et1', pid:'eng-franklin-consent', which:'phronesis', label:'Practical wisdom (phronesis)', why:'He weighs the plan against the alternatives and accepts it for want of a better, which is the judgement of a prudent man.'},
  {id:'eng-et2', pid:'eng-hoar-humane', which:'eunoia', label:'Goodwill (eunoia)', why:'He first affirms that the soldiers are humane, so that his criticism comes from a friend of the army and not an enemy.'},
  {id:'eng-et3', pid:'eng-lincoln-misquotes', which:'arete', label:'Virtue (arete)', why:'He uses praeteritio: he says he will not charge Douglas with wilful misquotation, and in saying so he puts that charge before the hearers. But he asserts only what can be shown, that the quotation is inaccurate, so he gains credit as a fair man while the graver charge is still lodged; and fairness, that is, justice, is a virtue (arete).'},
  // Speeches added from Thucydides, Sallust, Plato, Demosthenes, and Lysias. Aristotle names the three in Rhetoric II.1, 1378a.
  {id:'et16', pid:'thuc-nic-convictions', which:'arete', label:'Virtue (arete)',
    why:'Nicias says that he has “never spoken against my convictions to gain honour,” although the expedition would bring him honour. The speech shows an honest man, and honesty belongs to virtue.'},
  {id:'et17', pid:'thuc-per-140', which:'phronesis', label:'Practical wisdom (phronesis)',
    why:'Pericles shows that he knows how men behave in war: “as circumstances change, resolutions change.” He asks to be trusted as a man who judges well, which is practical wisdom.'},
  {id:'et18', pid:'sal-caes-passion', which:'phronesis', label:'Practical wisdom (phronesis)',
    why:'Caesar shows that he judges without hatred, affection, anger, or pity, because “The mind, when such feelings obstruct its view, can not easily see what is right.” Right judgment about what should be done is practical wisdom.'},
  {id:'et19', pid:'sal-cato-often', which:'arete', label:'Virtue (arete)',
    why:'Cato reminds the senate that he has often complained of luxury and avarice and has made enemies by it, and that he never excused a fault in himself. He offers his own strictness as a proof of his virtue.'},
  {id:'et20', pid:'plato-ap-31b', which:'eunoia', label:'Goodwill (eunoia)',
    why:'Socrates has neglected his own concerns and has gone to each Athenian “like a father or elder brother.” The speech shows goodwill toward the hearers.'},
  {id:'et21', pid:'dem-crown-1', which:'eunoia', label:'Goodwill (eunoia)',
    why:'Demosthenes names “the goodwill, which I ever feel towards this city and towards all of you,” and prays for the same in return. Goodwill toward the hearers is the third of Aristotle’s grounds of trust.'},
  {id:'et22', pid:'dem-rhod-1', which:'phronesis', label:'Practical wisdom (phronesis)',
    why:'Demosthenes says that he has “never yet felt any difficulty in pointing out to you the best course.” He claims to know what should be done, which is practical wisdom.'},
  {id:'et23', pid:'lys-3-3', which:'arete', label:'Virtue (arete)',
    why:'The speaker says that shame at having these facts known made him put up with his wrongs. The reluctance shows a decent and modest man, so the speech persuades by his character.'},
  {id:'et24', pid:'lys-21-1', which:'arete', label:'Virtue (arete)',
    why:'He asks the jury to understand “what kind of person I am” and lists the public services he paid for. The account shows a generous and public-spirited citizen, and Aristotle counts liberality among the virtues (Rhetoric I.9).'},
  {id:'et25', pid:'thuc-per-60', which:'eunoia', label:'Goodwill (eunoia)',
    prompt:'Pericles answers the assembly’s anger by naming what he brings to its counsel. Which phrase shows goodwill (eunoia), as Aristotle uses the word?',
    options:['second to no man either in knowledge of the proper policy','or in the ability to expound it','not only a patriot','but an honest one'],
    correct:2,
    note:'Pericles glosses each phrase himself in the next sentence: a man with knowledge and the power to expound it, “but no love for his country, he would be but a cold advocate for her interests.” Love of the city is the goodwill toward the hearers that Aristotle names beside good sense and virtue (Rhetoric II.1, 1378a). Knowledge of policy is good sense (phronesis), and honesty that is “proof against bribery” is virtue (arete).'},
  {id:'et26', pid:'dem-rhod-15', which:'eunoia', label:'Goodwill (eunoia)',
    why:'Demosthenes says that he is no patron of the Rhodian democrats and has no friend among them, and that he would not have made the proposal “had I not believed it to be for your advantage.” He shows that he seeks the hearers’ good and not a private interest, which is goodwill.'},
  {id:'et27', pid:'dem-chers-68', which:'arete', label:'Virtue (arete)',
    why:'He denies that he is “Bold, offensive, shameless” and claims “more courage” than the bold speakers. Courage, and the refusal of shamelessness, belong to virtue.'},
  {id:'et28', pid:'dem-chers-24', which:'arete', label:'Virtue (arete)',
    why:'He promises to “speak without reserve,” and says that he “could not speak otherwise.” Frankness that does not spare the hearers shows an honest man, which is virtue.'},
  {id:'et29', pid:'eng-burke-tranquillity', which:'phronesis', label:'Practical wisdom (phronesis)',
    why:'Burke says that he is not settling “a point of law” but “restoring tranquillity,” and that the character of a people must decide what government fits them. He asks to be trusted as a man who judges what the situation requires, which is practical wisdom.'},
  {id:'et30', pid:'lys-32-1', which:'arete', label:'Virtue (arete)',
    why:'The speaker calls a dispute with relations “most disgraceful” and says that he would not have brought it if the matter were not important. His reluctance shows a decent man who respects the claims of kinship, which is virtue.'},
  {id:'et31', pid:'eng-webster-mariner', which:'phronesis', label:'Practical wisdom (phronesis)',
    why:'Webster proposes to “imitate this prudence” of the mariner and to return to the question before going further. He shows himself as a man who judges where the debate stands and what should be done next, which is practical wisdom.'}
];
const LEXIS_ITEMS = [
  {id:'lx1', pid:'gor-hel-8', kind:'style',
    prompt:'Does the argument here still stand once the figures are stripped away, or is the figure doing the work of the claim?',
    options:['The figure is the claim; calling speech a potentate personifies it but proves nothing','The claim would stand in plain clauses, since Gorgias proves at length that speech rules the soul','The figure is only ornament on an argument from cause that is fully stated in the passage','The personification is itself a proof, because a vivid image is a kind of evidence'],
    correct:0, note:'Helen 8 presents logos as a potentate. If we remove the personification and the antithesis of frail frame and wonders, the doctrine has little left but the image.'},
  {id:'lx2', pid:'thuc-diod-1', kind:'style',
    prompt:'Does the argument here still stand once the figures are stripped away, or is the figure doing the work of the claim?',
    options:['The figure is the claim; without the balance of members nothing is being argued','The claim would stand in plain clauses: haste and passion oppose good counsel','The claim depends on picturing counsel as a person','The sentence is only an opening meant to win goodwill, and it states no claim at all'],
    correct:1, note:'Diodotus’s sentence can be said without isocolon (members of equal length), because the argument concerns counsel and not the shape of the clause.'},
  {id:'lx3', pid:'ant-3.1.1', kind:'style',
    prompt:'Does the argument here still stand once the figures are stripped away, or is the figure doing the work of the claim?',
    options:['The figure is the whole case; without the ornament there is no argument from cause at all','Plain clauses would still state a death, a throw, and a name for the act','Plain clauses would leave only the father’s grief','The charge rests on a metaphor of the javelin as the killer, which plain words would remove'],
    correct:1, note:'The tetralogy’s first speech can be stripped of ornament and still be a charge, because the fight is over cause, not lexis.'},
  {id:'lx4', pid:'gor-hel-10', kind:'style',
    prompt:'Does the argument here still stand once the figures are stripped away, or is the figure doing the work of the claim?',
    options:['Sound and image carry the claim that song is witchery; the figure does the work','The claim would stand in plain clauses, since song is shown by argument to change belief','The rhyming members are only decoration on a claim that Gorgias proves from examples','The passage is a plain narration with no figure in it'],
    correct:0, note:'Gorgias offers a physics of the soul in the form of a figure (song as witchery); Aristotle names the same fact pathos and leaves out the drug.'},
  {id:'lx5', pid:'sal-caes-1', kind:'style',
    prompt:'Does the argument here still stand once the figures are stripped away, or is the figure doing the work of the claim?',
    options:['Without the studied language of pity and horror, Caesar would have no case left to make','In plain clauses: inflict only such penalties as the laws have provided','The list of horrors is itself the claim','The claim of Caesar depends on the balance of his clauses, and would fail if said plainly'],
    correct:1, note:'Caesar can be plain, because his argument is from the law and from consequence, not from the sound of balanced members.'},
  {id:'lx6', pid:'cic-cat1-1', kind:'style',
    prompt:'The opening questions of the First Catilinarian (how much further, how much longer) are',
    options:['Only decoration, since the questions neither move the senate nor carry the charge','Questions doing pathos; without them the charge remains, but weaker','The whole charge, since without the questions nothing at all is asserted against him','A complete proof from a necessary sign'],
    correct:1, note:'The questions amount to a charge. The fact they rest on (that the conspiracy is known) would remain as a plain assertion, and the questions are the means by which the hearer is moved to feel it.'},
  {id:'lx7', pid:'thuc-fun-2', kind:'style',
    prompt:'“Our constitution does not copy the laws of neighbouring states; we are rather a pattern to others than imitators ourselves.” If we drop the antithesis, what remains?',
    options:['Nothing remains, because the whole praise of Athens was in the turn of the antithesis','A claim about Athens that can still be judged true or false as praise','Only an image, which cannot be judged true or false','A proof that Athens is the best of cities, which the antithesis only decorates'],
    correct:1, note:'The antithesis serves the praise, and the claim (Athens is original) is still a claim when it is said without the turn.'},
  {id:'lx8', pid:'gor-hel-6', kind:'style',
    prompt:'The four aitiai are listed in parallel members. Is the list a figure doing the work of argument, or an argument that happens to be figured?',
    options:['Only sound, since there are four equal clauses but not four distinct causes','A real partitio (division) dressed in isocolon: any one cause would acquit','A figure doing the work of argument, since the equal members are what make the list persuasive','A narration of what happened to Helen, set out in the order of events'],
    correct:1, note:'The four causes are a division (partitio), and the equal members make them memorable; the argument would survive as a numbered list in plain prose.'},
  {id:'lx9', pid:'dem-3', kind:'style',
    prompt:'Demosthenes binds money, ships, cavalry, and a law that the force remain. If we strip away any figure we hear, what remains?',
    options:['Nothing but sound, since the list of soldiers, ships, and cavalry is the whole speech','A deliberative policy argued from its parts, which can be numbered','A threat that moves the assembly by fear, with no policy left once the figure is gone','An encomium of the forces Athens already has'],
    correct:1, note:'A policy can be numbered, and that is arrangement and logos, not Gorgian witchery.'},
  {id:'lx10', pid:'aug-ddc-24', kind:'style',
    prompt:'Augustine at Caesarea wanted tears, not applause. On his account, the grand style has succeeded when',
    options:['The members are equal in length and the endings match in every period','The hearer is changed in life, though the room is silent','The hearers applaud loudly at the end','All figures of speech have been suppressed, so that only the plain style remains'],
    correct:1, note:'In DDC IV the majestic style is known by the tears it draws, since style serves an office (flectere) and not display.'},
  // English tradition (public-domain quotations; sources eng_cer, eng_cem, kjv).
  {id:'eng-lx1', pid:'eng-ames-volcano', kind:'style', prompt:'Does the argument here still stand once the figures are stripped away, or is the figure doing the work of the claim?', options:['The figure carries the claim; the volcano makes the danger vivid but gives no reason for it','The claim would stand in plain clauses, as a cause shown from the effects that democracies have suffered','The volcano is a proof from a sign, since what conceals fire is sure to erupt','The metaphor adds nothing at all, neither fear nor force, to what is said plainly'], correct:0, note:'If we say plainly that democracy contains the causes of its own ruin, we see that a reason is still owed. The metaphor supplies the fear and not the proof.'},
  {id:'eng-lx2', pid:'eng-swift-cobwebs', kind:'style', prompt:'Does the argument here still stand once the figures are stripped away, or is the figure doing the work of the claim?', options:['The figure is the claim; without the cobweb, the flies, and the wasps there is nothing left to assert','The claim would stand in plain clauses: the law catches the weak and lets the powerful go','The simile proves its claim, since cobwebs and laws are alike in every respect','The claim is about insects, and says nothing plain about how laws are applied'], correct:1, note:'The simile can be put plainly, that the law punishes small offenders and not great ones, and the plain claim can be tested against cases. So the figure states a claim; it does not replace one.'},
  {id:'eng-lx3', pid:'eng-lincoln-house-divided', kind:'style', prompt:'Does the argument here still stand once the figures are stripped away, or is the figure doing the work of the claim?', options:['The figure is the claim; the house divided is all there is, and it proves nothing about the Union','The claim would stand in plain clauses: a nation cannot long remain half slave and half free','The saying from Scripture is the proof, and without it Lincoln asserts nothing','The plain claim would be that every house must one day fall, which says nothing of slavery'], correct:1, note:'Lincoln states the plain claim himself in the next sentence, that the government cannot endure half slave and half free. The saying from the Gospels gives it authority and force, but the claim is there without it.'},
  {id:'eng-lx4', pid:'eng-thoreau-railroad', kind:'style', prompt:'Does the argument here still stand once the figures are stripped away, or is the figure doing the work of the claim?', options:['The figure is the claim; the crossing of the words is all there is, and nothing is asserted','The claim would stand in plain clauses: we serve our machines more than they serve us','The chiasmus proves the claim, since a reversal of words shows a reversal of things','In plain clauses the sentence only says that Thoreau dislikes travelling by train'], correct:1, note:'Put plainly, Thoreau says that men have made themselves servants of the railroad. The chiasmus makes the reversal memorable, but the claim can be stated and judged without it.'}
];
const AUG_ITEMS = [
  {id:'au1', pid:'aug-ddc-12',
    prompt:'Augustine, following Cicero, names three aims: to teach, to delight, to persuade. Which of the three is a necessity?',
    options:['To delight, since without pleasure no hearer will listen at all','To teach, since it depends on what we say, not how','To persuade, since the applause of the hearers is the test','None, since a Christian must not use rhetoric at all'],
    correct:1, note:'In DDC IV, to teach is a necessity, to delight a beauty, to persuade a triumph. Teaching lies in the matter, the other two in the manner.'},
  {id:'au2', pid:'aug-ddc-17',
    prompt:'Which style does Augustine assign to teaching?',
    options:['The grand (grande), because teaching must move to tears','The subdued (summissum), because teaching must be understood','The temperate (temperatum), for praise and blame, which delight the hearer','No single style, since every style is fit for teaching alike'],
    correct:1, note:'The subdued style is for teaching, the temperate for delighting, and the grand for moving. The orator should mix them and should not use the grand style everywhere.'},
  {id:'au3', pid:'aug-ddc-24',
    prompt:'The sign that the grand style has done its office is',
    options:['Applause, and a name for the preacher','Tears, and a change: the Caterva ended','Matching endings (homoeoteleuton) in every member','The suppression of everything taken from Cicero'],
    correct:1, note:'He asked for groans, not cheers, and the Caterva story is the emblem of flectere.'},
  {id:'au4', pid:'aug-ddc-2',
    prompt:'Why may the Christian use rhetoric?',
    options:['Because winning a paid case is the end of the art','Because truth must not stand unarmed against falsehood','Because pagan eloquence is good in itself, whatever cause it serves','Because the Scriptures command the preacher to study the pagan orators'],
    correct:1, note:'In DDC IV the art is available for truth or for falsehood. Who will dare say that truth should take the field unarmed?'},
  {id:'au5', pid:'aug-ddc-17',
    prompt:'The temperate style, on Augustine’s map, is especially for',
    options:['Teaching a difficult doctrine so that it is understood','Praise and blame, which delight and make the good attractive','Moving the hearers to act at once, so that their whole life is changed','Teaching only, since delight has no place in Christian speech'],
    correct:1, note:'The temperate style serves delectare, showing the good as lovely; the grand serves flectere, pushing the will to act.'},
  {id:'au6', pid:'aug-serm-1',
    prompt:'A sermon that opens by asking to be heard as God’s word in an earthen vessel is chiefly',
    options:['A display of the preacher’s own ethos, as a sophist would make','Teaching (docere) in the subdued style, with some ethos of humility','Moving (flectere) in the grand style, since it calls the hearers to tears','Delighting (delectare) in the temperate style, with praise of the evangelists'],
    correct:1, note:'The treasure in earthen vessels makes the opening one of teaching; humility shows ethos, but the office is still docere.'},
  {id:'au7', pid:'aug-ddc-12',
    prompt:'“To teach is a necessity, to delight is a beauty, to persuade is a triumph.” The three offices are',
    options:['Three different arts, belonging to three different men','One orator’s three offices, kept from Cicero for Scripture’s end','Three ends of which the Christian orator should seek only the first','Three styles, each of which must be kept apart from the other two'],
    correct:1, note:'Augustine keeps Cicero’s offices and changes the end, since the Christian orator serves a truth already found.'},
  {id:'au8', pid:'aug-ddc-24',
    prompt:'If the room shouts and does not weep, Augustine’s judgment of a grand-style sermon is that',
    options:['It has succeeded, since the shouting is the test','It has not yet done the office of moving (flectere)','It has done the office of delighting, which is the end of the grand style','It has failed, since the grand style ought to be avoided in sermons'],
    correct:1, note:'Applause can be the delight of the temperate style, but the grand style is for a change of life.'}
];
function passages(){
  const app = window.PASSAGES || [];
  const hid = window.QUIZ_PASSAGES || [];
  if(!window.__ARS_QUIZ) return app;
  const prefer = window.__ARS_QUIZ_PREFER;
  if(prefer === 'hidden') return hid.length ? hid : app;
  if(prefer === 'app') return app;
  return hid.length ? app.concat(hid) : app;
}
function itemPool(name, arr){
  const extra = (window.QUIZ_ITEMS && window.QUIZ_ITEMS[name]) || [];
  if(!window.__ARS_QUIZ || !extra.length) return arr;
  const prefer = window.__ARS_QUIZ_PREFER;
  if(prefer === 'hidden') return extra;
  if(prefer === 'app') return arr;
  return arr.concat(extra);
}
function passageById(id){
  const all = (window.PASSAGES || []).concat(window.QUIZ_PASSAGES || []);
  return all.find(p => p.id === id);
}
// Ids of passages whose text repeats a later entry word for word (Thucydides 2.37 is filed twice,
// as thuc-per-2 and thuc-fun-2). The later entry is kept; the species pool drops the earlier one.
function dupTextIds(){
  const last = {}, dup = {};
  passages().forEach(p => { if(last[p.text]) dup[last[p.text]] = true; last[p.text] = p.id; });
  return dup;
}
function byTrack(tr){ return passages().filter(p => p.track === tr); }
function figNames(p){ return [...new Set((p.spans||[]).map(s => s.figure))]; }
function withFig(name){ return passages().filter(p => (p.spans||[]).some(s => s.figure === name)); }
function wrapFigs(text, spans, prefer){
  const all = (spans||[]).filter(s => s.start >= 0 && s.end <= text.length && s.start < s.end);
  const chosen = [];
  const preferOnes = prefer ? all.filter(s => s.figure === prefer) : [];
  if(preferOnes.length) chosen.push(preferOnes[0]);
  all.forEach(s => {
    if(chosen.indexOf(s) >= 0) return;
    if(chosen.some(u => !(s.end <= u.start || s.start >= u.end))) return;
    chosen.push(s);
  });
  chosen.sort((a,b) => b.start - a.start);
  let t = text;
  chosen.forEach(s => {
    const inner = t.slice(s.start, s.end);
    t = t.slice(0, s.start) + '<span class="figspan" data-fig="'+esc(s.figure)+'">'+inner+'</span>' + t.slice(s.end);
  });
  return t;
}
function esc(s){ return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function citeP(p){ return p.author+', <i>'+esc(p.work)+'</i> '+esc(p.locus); }
function excerpt(p, n){ n = n || 220; const t = p.text || ''; return t.length > n ? t.slice(0, n).replace(/\s+\S*$/, '') + '…' : t; }
function shownLen(p, n){ return excerpt(p, n).replace(/…$/, '').length; }
// The first span of the figure that falls wholly inside the excerpt of length n, if there is one.
function shownSpan(p, fig, n){
  const shown = excerpt(p, n).replace(/…$/, '').length;
  return (p.spans||[]).find(s => s.figure === fig && s.end <= shown);
}
// Passages that may serve as wrong answers for a figure: they neither mark the figure nor list it
// in unmarkedFigures (figures a reader could fairly find there, left unmarked), and their excerpt differs from the answer's.
function wrongPool(yes, fig, n){
  const shown = excerpt(yes, n);
  return passages().filter(p => p.id !== yes.id && figNames(p).indexOf(fig) < 0
    && (p.unmarkedFigures||[]).indexOf(fig) < 0 && excerpt(p, n) !== shown);
}
// k wrong answers whose excerpts all differ from one another (some passages share an opening).
function pickWrong(yes, fig, n, k){
  const out = [], seen = [];
  sample(wrongPool(yes, fig, n), Infinity).forEach(p => {
    const e = excerpt(p, n);
    if(out.length < k && seen.indexOf(e) < 0){ out.push(p); seen.push(e); }
  });
  return out;
}
// The length a student sees: the excerpt plus the citation, with tags removed.
function whichOptLen(p, n){
  const html = '<span style="font-size:16px">'+esc(excerpt(p, n))+'</span><br><span style="font-size:14px;color:var(--ink-soft);font-style:italic">'+citeP(p)+'</span>';
  return html.replace(/<[^>]+>/g,'').length;
}
// Wrong excerpts for a which-excerpt question. At least one option is as long as the right one, when the pool has one, so length does not name the answer.
function pickWrongLen(yes, fig, n, k){
  const yesLen = whichOptLen(yes, n);
  const pool = wrongPool(yes, fig, n);
  const longer = pool.filter(p => whichOptLen(p, n) >= yesLen);
  const out = [], seen = [excerpt(yes, n)];
  function take(arr){
    sample(arr, arr.length).forEach(p => {
      const e = excerpt(p, n);
      if(out.length < k && seen.indexOf(e) < 0){ out.push(p); seen.push(e); }
    });
  }
  if(longer.length) take(longer);
  if(out.length < k) take(pool);
  return out;
}
function pickPass(pred, prefix){
  let arr = pred ? passages().filter(pred) : passages();
  if(!arr.length && window.__ARS_QUIZ){
    const app = window.PASSAGES || [];
    arr = pred ? app.filter(pred) : app;
  }
  if(!arr.length) arr = window.PASSAGES || [];
  return pickSeen(arr, x => (prefix||'') + x.id);
}
function mcQ(opts){
  const order = opts.options.map((o,i) => i);
  for(let i = order.length - 1; i > 0; i--){ const j = Math.floor(Math.random()*(i+1)); [order[i],order[j]] = [order[j],order[i]]; }
  const options = order.map(i => opts.options[i]);
  const correct = order.indexOf(opts.correct);
  return {
    kind:'mc', prompt:opts.prompt, options, correct,
    passage:opts.passage, source:opts.source, orig:opts.orig, olang:opts.olang, src:opts.src,
    check(ans){
      const right = ans === correct;
      return {right, note: opts.note, also: opts.also || ''};
    }
  };
}


const EX = {};
EX.species = {
  id:'species', title:'The Three Species',
  instr:'Name the species, or kind of speech, by the office of the hearer: forensic (the past; the just and the unjust), deliberative (the future; the expedient and the harmful), or epideictic (the present; the noble and the shameful). Ten questions make a set; at difficulty 1 each is worth 10, and 100 completes the set.',
  src:['arist_rhet'],
  gen(diff){
    const dup = dupTextIds();
    const p = pickPass(x => isOration(x) && !dup[x.id], 'sp:');
    const sp = speciesOf(p);
    const labels = {
      forensic:'Forensic: the jury, the past, the just and the unjust',
      deliberative:'Deliberative: the assembly, the future, the expedient',
      epideictic:'Epideictic: the spectator, praise and blame, the noble'
    };
    const opts = ['forensic','deliberative','epideictic'];
    const cue = diff <= 2 ? '<div class="q-cue">'+esc(p.cue||'')+'</div>' : '';
    return mcQ({
      prompt:'What is the species of this speech?',
      options: opts.map(k => labels[k]),
      correct: opts.indexOf(sp),
      passage: cue + esc(excerpt(p, diff >= 4 ? 280 : 420)),
      source: citeP(p), orig: p.orig, olang: p.olang, src: srcOf(p),
      note: sp.charAt(0).toUpperCase()+sp.slice(1)+'. In I.3 Aristotle makes the species follow what the hearer is asked to judge.',
      also: labels[sp]
    });
  }
};
EX.pisteis = {
  id:'pisteis', title:'The Three Pisteis',
  instr:'Of the three pisteis, or means of persuasion, which is doing the work here: the speaker’s character (ethos), the hearer’s passions (pathos), or the argument (logos)? All the passages are real. Ten questions make a set; a passage is not repeated in the set.',
  src:['arist_rhet'],
  gen(diff){
    const item = pickSeen(itemPool('PISTEIS_ITEMS', PISTEIS_ITEMS), x => 'pi:'+x.pid);
    const p = passageById(item.pid) || pickPass(null, 'pi');
    const names = ['ethos','pathos','logos'];
    const cue = diff <= 2 ? '<div class="q-cue">'+esc(p.cue||item.why)+'</div>' : '';
    return mcQ({
      prompt:'Which pistis is doing the chief work in this passage?',
      options:['Ethos: the speaker as the speech shows him','Pathos: the hearer’s frame of mind','Logos: the argument of the speech itself'],
      correct: names.indexOf(item.pistis),
      passage: cue + esc(excerpt(p, diff >= 4 ? 240 : 400)),
      source: citeP(p), orig: p.orig, olang: p.olang, src: srcOf(p),
      note: item.pistis.charAt(0).toUpperCase()+item.pistis.slice(1)+'. '+item.why,
      also:'A passage may use more than one pistis (Aristotle I.2), so name the one that is carrying the moment.'
    });
  }
};
EX.enthymeme = {
  id:'enthymeme', title:'Supply the Missing Premise',
  instr:'The enthymeme, or rhetorical syllogism, leaves a premise for the hearers to supply, and the task is to name that premise. Ten questions make a set; an example is not repeated in the set.',
  src:['arist_rhet'],
  gen(diff){
    const e = pickSeen(itemPool('ENTHYMEMES', ENTHYMEMES), x => 'en:'+x.id);
    const extra = diff <= 2 ? e.distractors.slice(0,2) : e.distractors;
    const options = [e.missing].concat(extra);
    return mcQ({
      prompt:'The speech says: <em>'+esc(e.said)+'</em><br><br>What premise are the hearers meant to supply?',
      options, correct:0, source:e.cite, src:e.src,
      note: e.why || ('The missing premise is the one that turns what is said into an argument: <em>'+esc(e.missing)+'</em>'),
      also:'In Aristotle I.2 the enthymeme is a syllogism, and the audience completes it.'
    });
  }
};
EX.ethos = {
  id:'ethos', title:'Character in the speech',
  instr:'Aristotle says that we trust a speaker for practical wisdom (phronesis), virtue (arete), or goodwill (eunoia), as these are shown in the speech and not borrowed as a reputation from outside. Name which of the three is doing the work. Ten questions; a passage is not repeated in the set.',
  src:['arist_rhet'],
  gen(diff){
    const e = pickSeen(itemPool('ETHOS_ITEMS', ETHOS_ITEMS), x => 'et:'+x.id);
    const p = passageById(e.pid);
    // An item with its own options asks which words of the passage show one of the three.
    if(e.options){
      const cue = diff <= 2 ? '<div class="q-cue">'+(p ? esc(p.cue||'') : '')+'</div>' : '';
      return mcQ({
        prompt: e.prompt, options: e.options, correct: e.correct,
        passage: cue + (p ? esc(p.text) : ''),
        source: p ? citeP(p) : '', orig: p && p.orig, olang: p && p.olang, src: p ? srcOf(p) : 'arist_rhet',
        note: e.note,
        also:'A reputation named from outside the speech is an inartistic proof, whereas ethos here is what the speech itself shows.'
      });
    }
    const labels = [
      {v:'phronesis', lab:'Practical wisdom (phronesis): he seems to know what to do'},
      {v:'arete', lab:'Virtue (arete): he seems a good man'},
      {v:'eunoia', lab:'Goodwill (eunoia): he seems to wish the hearers well'}
    ];
    const cue = diff <= 2 ? '<div class="q-cue">'+esc(e.why)+'</div>' : '';
    return mcQ({
      prompt:'Which of the three artistic reasons for trust is this speech chiefly showing?',
      options: labels.map(x => x.lab),
      correct: labels.findIndex(x => x.v === e.which),
      passage: cue + (p ? esc(excerpt(p, diff>=4?240:400)) : ''),
      source: p ? citeP(p) : '', orig: p && p.orig, olang: p && p.olang, src: p ? srcOf(p) : 'arist_rhet',
      note: e.label+'. '+e.why,
      also:'A reputation named from outside the speech is an inartistic proof, whereas ethos here is what the speech itself shows.'
    });
  }
};
EX.pathos = {
  id:'pathos', title:'Name the Passion',
  instr:'This exercise joins Aristotle’s passions (Rhetoric II) with Aquinas’s passions concerning good or evil as such (concupiscible) and passions concerning the arduous good or evil (irascible). Ten questions make a set; a passage is not repeated in the set.',
  src:['arist_rhet','aquinas_st'],
  gen(diff){
    const e = pickSeen(itemPool('PASSIONS', PASSIONS), x => 'pa:'+x.id);
    const names = [...new Set(PASSIONS.map(p => p.name))];
    const rest = names.filter(n => n !== e.name);
    const options = [e.name].concat(sample(rest, diff <= 2 ? 2 : 3));
    return mcQ({
      prompt: e.prompt || 'Which passion is being moved?',
      options: options.map(n => n.charAt(0).toUpperCase()+n.slice(1)),
      correct:0, passage:esc(e.text), source:e.cite, src:e.src,
      note: e.name.charAt(0).toUpperCase()+e.name.slice(1)+' ('+e.appetite+'). '+e.why,
      also: diff >= 4 ? 'In Aquinas (I–II), the irascible passions take an arduous object, while the concupiscible take good or evil as such.' : ''
    });
  }
};
EX.taxis = {
  id:'taxis', title:'Name the Part',
  instr:'Cicero names six offices of the oration: the opening (exordium), the facts (narratio), the laying-out of the points in dispute (partitio), the proof (confirmatio), the answer to the other side (reprehensio), and the close (peroratio). Ten questions make a set; a passage is not repeated in the set.',
  src:['cic_inv'],
  gen(diff){
    const e = pickSeen(itemPool('TAXIS_ITEMS', TAXIS_ITEMS), x => 'tx:'+x.id);
    const names = TAXIS_PARTS.map(t => t.key);
    const options = [e.part].concat(sample(names.filter(n => n !== e.part), 3));
    const labels = {};
    TAXIS_PARTS.forEach(t => { labels[t.key] = t.name + ': ' + t.duty; });
    return mcQ({
      prompt:'Which office of the oration is this part of the passage performing?',
      options: options.map(k => labels[k]), correct:0,
      passage:esc(e.text), source:e.cite, src:e.src,
      note: e.why || (TAXIS_PARTS.find(t=>t.key===e.part).name+': '+TAXIS_PARTS.find(t=>t.key===e.part).duty),
      also: diff >= 3 ? 'Aristotle is content with four parts, but the Latin six name offices we can actually see.' : ''
    });
  }
};
EX.taxisorder = {
  id:'taxisorder', title:'The six offices',
  instr:'These questions cover the Latin school’s six offices: their duties, their order, and when one of them shrinks. A set is six questions, so you will not be asked to put the same list in order ten times.',
  src:['cic_inv'],
  setLen:6,
  gen(diff){
    const duties = TAXIS_PARTS.map(p => ({k:'duty', part:p.key}));
    const pairs = [];
    const afters = [];
    for(let i = 0; i < TAXIS_PARTS.length-1; i++){
      pairs.push({k:'first', a:TAXIS_PARTS[i].key, b:TAXIS_PARTS[i+1].key});
      afters.push({k:'after', a:TAXIS_PARTS[i].key, b:TAXIS_PARTS[i+1].key});
    }
    const arist = [
      {k:'arist', part:'exordium', prompt:'Aristotle’s opening (prooimion) does the work of which Latin office?',
        note:'The prooimion is the opening, and its work is the exordium’s: to make the hearers attentive, teachable, and well-disposed.'},
      {k:'arist', part:'narration', prompt:'Aristotle’s statement of the case does the work of which Latin office?',
        note:'The statement sets out the facts. That is the office of the narration, which should be brief, clear, and plausible.'},
      {k:'arist', part:'peroration', prompt:'Aristotle’s close (epilogos) does the work of which Latin office?',
        note:'The epilogos is the close. Cicero’s peroration recapitulates and moves the hearers.'}
    ];
    const kinds = [{k:'order'}, {k:'shrink'}].concat(duties).concat(pairs).concat(afters).concat(arist);
    const item = pickSeen(kinds, x => 'txo:'+x.k+':'+(x.part||'')+':'+(x.a||'')+':'+(x.b||''));
    const labels = {};
    TAXIS_PARTS.forEach(t => { labels[t.key] = t.name + ': ' + t.duty; });
    if(item.k === 'order'){
      const shuffled = shuffle(TAXIS_PARTS.map(p => p.key));
      return {
        kind:'order',
        prompt:'Click the six offices in school order, from opening to close.',
        keys: shuffled,
        labels: shuffled.map(k => labels[k]),
        target: TAXIS_PARTS.map(t => t.key),
        src:['cic_inv'],
        check(ans){
          const right = Array.isArray(ans) && ans.join() === TAXIS_PARTS.map(t=>t.key).join();
          return {right, note: right ? 'Exordium, narration, division, proof, refutation, peroration.'
                                    : 'The school order is opening, facts, points in dispute, proof, the other side, and close.',
            also:'See De inventione I. The six are offices, and a tetralogy may shrink the narration.'};
        }
      };
    }
    if(item.k === 'shrink'){
      return mcQ({
        prompt:'When the facts are agreed and only the cause is in dispute, which office shrinks?',
        options:['Peroration, because there is nothing to feel','Narration, because the story is not the fight','Proof, because there are no arguments left','Exordium, because the jury is already paying attention'],
        correct:1, src:'cic_inv',
        note:'The narration can be a single sentence, while proof and refutation swell. Antiphon’s tetralogy is built on that situation.',
        also:'The six are offices, not a template; a funeral oration, for example, is not a proof of a crime.'
      });
    }
    if(item.k === 'first'){
      const A = TAXIS_PARTS.find(t => t.key===item.a);
      const B = TAXIS_PARTS.find(t => t.key===item.b);
      return mcQ({
        prompt:'In the Latin school order, which office comes first?',
        options:[A.name, B.name, 'The same office', 'Not an office'],
        correct:0, src:'cic_inv',
        note: A.name+' precedes '+B.name+'. The school order is opening, facts, points in dispute, proof, the other side, and close.',
        also:'Proof and refutation are two offices, and we should not collapse them into one.'
      });
    }
    function nameOpts(correct, rest, k){
      const longer = rest.filter(t => t.name.length >= correct.name.length);
      const closer = rest.slice().sort((a,b) => Math.abs(a.name.length - correct.name.length) - Math.abs(b.name.length - correct.name.length) || a.name.localeCompare(b.name));
      let picked;
      if(longer.length){
        const one = sample(longer, 1);
        picked = one.concat(sample(closer.filter(t => t.key !== one[0].key), k - 1));
      } else picked = sample(closer, k);
      return [correct].concat(picked);
    }
    if(item.k === 'after'){
      const A = TAXIS_PARTS.find(t => t.key===item.a);
      const B = TAXIS_PARTS.find(t => t.key===item.b);
      const rest = TAXIS_PARTS.filter(t => t.key!==item.b);
      const opts = nameOpts(B, rest, diff<=2 ? 2 : 3);
      return mcQ({
        prompt:'In the Latin school order, which office comes immediately after the '+A.name+'?',
        options: opts.map(t => t.name),
        correct:0, src:'cic_inv',
        note: B.name+' follows '+A.name+'.',
        also:'The six are offices a speech may perform, and a given speech need not use every one.'
      });
    }
    if(item.k === 'arist'){
      const part = TAXIS_PARTS.find(t => t.key===item.part);
      const rest = TAXIS_PARTS.filter(t => t.key!==item.part);
      const opts = nameOpts(part, rest, diff<=2 ? 2 : 3);
      return mcQ({
        prompt:item.prompt,
        options: opts.map(t => t.name),
        correct:0, src:'cic_inv',
        note: part.name+'. '+item.note,
        also:'Aristotle names four parts. The Latin six name offices a part may perform.'
      });
    }
    const part = TAXIS_PARTS.find(t => t.key===item.part);
    const others = TAXIS_PARTS.filter(t => t.key!==item.part);
    const opts = nameOpts(part, others, diff<=2 ? 2 : 3);
    return mcQ({
      prompt:'Which office has this duty: <em>'+esc(part.duty)+'</em>',
      options: opts.map(t => t.name),
      correct:0, src:'cic_inv',
      note: part.name+': '+part.duty,
      also:'Once we can name the duty, we can find it in a speech even when the speech does not use all six offices.'
    });
  }
};
EX.lexis = {
  id:'lexis', title:'Style and the argument',
  instr:'Aristotle asks that style be clear, and that the figures not do the work of the argument. Read the passage and ask whether the claim still stands in plain clauses, or whether the figure is the claim. Ten questions; a passage is not repeated in the set.',
  src:['arist_rhet','gorgias_vh'],
  gen(diff){
    const e = pickSeen(itemPool('LEXIS_ITEMS', LEXIS_ITEMS), x => 'lx:'+x.id);
    const p = passageById(e.pid);
    const cue = diff <= 2 ? '<div class="q-cue">'+(p ? esc(p.cue||'') : '')+'</div>' : '';
    return mcQ({
      prompt: e.prompt,
      options: e.options, correct: e.correct,
      passage: cue + (p ? esc(excerpt(p, diff>=4?240:400)) : ''),
      source: p ? citeP(p) : '', orig: p && p.orig, olang: p && p.olang, src: p ? srcOf(p) : 'arist_rhet',
      note: e.note,
      also:'Clarity comes first and ornament second; the sophistic vice is to make the style do the work of the argument.'
    });
  }
};
EX.figclick = {
  id:'figclick', title:'Click the Figure',
  instr:'Each question gives a real excerpt. Click the part of the passage that is the named figure. Ten questions; a passage is not repeated in the set.',
  src:['cic_cat','gorgias_vh'],
  gen(diff){
    const p = pickPass(x => speechSpans(x).length >= (diff >= 4 ? 2 : 1) && coreSpans(x).length, 'fc:');
    const spans = speechSpans(p);
    const core = coreSpans(p);
    const target = (diff <= 2) ? core[0] : rand(core);
    const gloss = FIGURE_GLOSS[target.figure] || target.why;
    const cue = diff <= 2 ? '<div class="q-cue">'+esc(p.cue||'')+'</div>' : '';
    return {
      kind:'figclick',
      prompt:'Click the part of the passage that is <strong>'+esc(target.figure)+'</strong> <span style="color:var(--ink-soft);font-style:italic">('+esc(gloss)+')</span>.',
      passageHtml: cue + wrapFigs(p.text, spans, target.figure),
      source: citeP(p), orig: p.orig, olang: p.olang, target: target.figure, why: target.why, src: srcOf(p),
      check(ans){
        const right = String(ans) === String(target.figure);
        return {right, note: right ? target.why : 'The '+target.figure+' is this: “'+p.text.slice(target.start, target.end)+'”<br>'+target.why,
          also: figNames(p).filter(f=>f!==target.figure).map(figLabel).join(' · ')};
      }
    };
  }
};
EX.figwhich = {
  id:'figwhich', title:'Which Excerpt?',
  instr:'Each question gives four real passages; which one is using the named figure? Ten make a set; the passage that uses the figure is not asked again in the set.',
  src:['cic_cat'],
  gen(diff){
    const n = diff<=2?160:120;
    const figs = Object.keys(FIGURE_GLOSS).filter(f => isCoreFigure(f) && passages().some(x => shownSpan(x, f, n)));
    const fig = pickSeen(figs, f => 'fwfig:'+f);
    const eligible = passages().filter(x => shownSpan(x, fig, n));
    const balanced = eligible.filter(x => wrongPool(x, fig, n).some(p => whichOptLen(p, n) >= whichOptLen(x, n)));
    const yes = pickSeen(balanced.length ? balanced : eligible, x => 'fwy:'+x.id);
    // Wrong excerpts drawn at random from those closest in length to the right one,
    // so that length does not mark the answer either way.
    const yl = whichOptLen(yes, n);
    const near = wrongPool(yes, fig, n).sort((a,b) => Math.abs(whichOptLen(a, n) - yl) - Math.abs(whichOptLen(b, n) - yl));
    const nos = [], seen = [excerpt(yes, n)];
    function take(arr, k){
      sample(arr, arr.length).forEach(p => {
        const e = excerpt(p, n);
        if(k > 0 && nos.length < 3 && seen.indexOf(e) < 0){ nos.push(p); seen.push(e); k--; }
      });
    }
    take(near.slice(0, 10), 3);
    if(nos.length < 3) take(near, 3);
    const optsP = [yes].concat(nos);
    return mcQ({
      prompt:'Which excerpt is using <strong>'+esc(fig)+'</strong> <em>('+esc(FIGURE_GLOSS[fig]||'')+')</em>?',
      options: optsP.map(p => '<span style="font-size:16px">'+esc(excerpt(p, n))+'</span><br><span style="font-size:14px;color:var(--ink-soft);font-style:italic">'+citeP(p)+'</span>'),
      correct:0, src: srcOf(yes),
      note: citeP(yes)+'. '+((shownSpan(yes, fig, n)||{}).why || FIGURE_GLOSS[fig]),
      also:'Figures of speech appear in tragedy and in Gorgias alike, and the test is whether we can still hear them in Cicero’s English.'
    });
  }
};
function figSet(id, title, instr, pred, src){
  return {
    id, title, instr, src,
    gen(diff){
      const p = pickPass(x => pred(x) && coreSpans(x).length, id+':');
      const spans = speechSpans(p);
      const core = coreSpans(p);
      const target = (diff <= 2) ? core[0] : rand(core);
      const cue = diff <= 2 ? '<div class="q-cue">'+esc(p.cue||'')+'</div>' : '';
      const gloss = diff<=2 ? ' <em>('+esc(FIGURE_GLOSS[target.figure]||target.why||'')+')</em>' : '';
      return {
        kind:'figclick',
        prompt:'Click the part of the passage that is <strong>'+esc(target.figure)+'</strong>.'+gloss,
        passageHtml: cue + wrapFigs(p.text, spans, target.figure),
        source: citeP(p), orig:p.orig, olang:p.olang, target:target.figure, why:target.why, src: srcOf(p),
        check(ans){
          const right = String(ans) === String(target.figure);
          return {right, note: target.why || FIGURE_GLOSS[target.figure] || '', also: figNames(p).map(figLabel).join(' · ')};
        }
      };
    }
  };
}
EX.figgorgias = figSet('figgorgias', 'Figures · Gorgias’s Helen',
  'This set is almost all Gorgias. Van Hook’s English is built of opposed clauses (antithesis), equal members (isocolon), and like endings (homoeoteleuton). A set is six passages, and none repeats within it.',
  x => x.track==='gorgias', ['gorgias_vh']);
EX.figaugustine = figSet('figaugustine', 'Figures · Augustine',
  'The passages come from the Confessions, On Christian Teaching IV, a letter, and a sermon. Where we have the Latin, it is on the original-text button.',
  x => x.author==='Augustine', ['aug_pusey','ddc']);
EX.figcicero = figSet('figcicero', 'Figures · Cicero',
  'This set follows the great Roman orator’s use of figures throughout his work, but especially in the orations against Catiline. Ten questions; a passage is not repeated in the set.',
  x => x.author==='Cicero', ['cic_cat']);
EX.figgorgias.setLen = 6;


EX.antiphon = {
  id:'antiphon', title:'Antiphon · Side, Pistis, Topos',
  instr:'This set uses only the javelin tetralogy. For each excerpt, name the side, the means of persuasion (pistis), and the seat of argument (topos); all three must be right. Ten questions; a speech is not repeated in the set.',
  src:['antiphon'],
  gen(diff){
    const p = pickPass(x => x.track==='antiphon', 'an:');
    const side = ANT_SIDE[p.id] || 'prosecution';
    const pistisMap = {
      'ant-3.1.1':'logos','ant-3.2.1':'ethos','ant-3.2.4':'logos','ant-3.2.6':'logos','ant-3.2.10':'pathos',
      'ant-3.3.1':'logos','ant-3.3.4':'logos','ant-3.3.5':'pathos','ant-3.4.1':'ethos','ant-3.4.8':'logos'
    };
    const pistis = pistisMap[p.id] || 'logos';
    const toposMap = {
      'ant-3.1.1':'from the laws (facts agreed, verdict from law)',
      'ant-3.2.1':'from character (the apragmon forced into court)',
      'ant-3.2.4':'from cause (the running-out, not the throw)',
      'ant-3.2.6':'from the name of the act (whose hamartia?)',
      'ant-3.2.10':'from consequences (pollution, miasma)',
      'ant-3.3.1':'from refutation of the defence’s descriptions',
      'ant-3.3.4':'from more and less (who missed the target)',
      'ant-3.3.5':'from the city’s pollution if the killer walks',
      'ant-3.4.1':'from character again, and from misfortune',
      'ant-3.4.8':'from cause restated (the boy’s own error)'
    };
    const topos = toposMap[p.id] || 'from cause';
    const topoi = Object.keys(toposMap).map(k => toposMap[k]);
    const topOpts = [topos].concat(shuffle(topoi.filter(t => t !== topos)).slice(0,3));
    const cue = diff <= 2 ? '<div class="q-cue">'+esc(p.cue||'Second Tetralogy: the facts are agreed, and the fight is over cause.')+'</div>' : '';
    return {
      kind:'chips', prompt:'Read the excerpt. Mark the side, the chief pistis, and the topic.',
      passage: cue + esc(excerpt(p, 420)), source: citeP(p), src:'antiphon',
      rows:[
        {key:'side', label:'Side', opts:[{label:'Prosecution', v:'prosecution'},{label:'Defence', v:'defence'}]},
        {key:'pistis', label:'Pistis', opts:[{label:'Ethos', v:'ethos'},{label:'Pathos', v:'pathos'},{label:'Logos', v:'logos'}]},
        {key:'topos', label:'Topos', opts: shuffle(topOpts).map(t => ({label:t, v:t}))}
      ],
      mark:{side, pistis, topos},
      check(ans){
        const right = ans.side===side && ans.pistis===pistis && ans.topos===topos;
        return {right, mark:{side, pistis, topos},
          note: 'This passage is <strong>'+side+'</strong>, working chiefly by <strong>'+pistis+'</strong>, topic: '+esc(topos)+'.',
          also:'This is a school tetralogy: four speeches, two on each side, and one set of facts, kept in the form of speech to a jury (forensic).'};
      }
    };
  }
};
EX.debates = {
  id:'debates', title:'Paired Debates',
  instr:'The paired speeches include Archidamus and Sthenelaidas, Cleon and Diodotus, Pericles’ funeral oration, Catiline and Caesar, Antiphon’s two sides, and Socrates before the jury. Name the kind of speech, or the claim of a voice. A set is six questions, and a pair is not reused in the set.',
  src:['thuc_crawley','sallust_w','antiphon'],
  setLen:6,
  gen(diff){
    const kinds = [];
    itemPool('DEBATES', DEBATES).forEach(d => { kinds.push({d, kind:'species'}); kinds.push({d, kind:'claim'}); });
    // A pair already asked in this set is not offered again, whichever question it was asked under.
    const used = (state.sessionSeen || []).filter(k => /^db:/.test(k)).map(k => k.split(':')[1]);
    const unused = kinds.filter(x => used.indexOf(x.d.id) < 0);
    const item = pickSeen(unused.length ? unused : kinds, x => 'db:'+x.d.id+':'+x.kind);
    const d = item.d;
    const pa = passageById(d.a.pid);
    const pb = passageById(d.b.pid);
    if(item.kind === 'species'){
      const opts = ['forensic','deliberative','epideictic'];
      const labels = {
        forensic:'Forensic: a past act, the just and the unjust',
        deliberative:'Deliberative: a future policy, the expedient and the harmful',
        epideictic:'Epideictic: praise and blame, the noble'
      };
      return mcQ({
        prompt:'<strong>'+esc(d.title)+'</strong>, '+esc(d.locus)+'.<br>Two voices: <em>'+esc(d.a.who)+'</em> and <em>'+esc(d.b.who)+'</em>. What is the species of the debate?',
        options: opts.map(k => labels[k]),
        correct: opts.indexOf(d.species),
        passage: (pa ? '<p><strong>'+esc(d.a.who)+'.</strong> '+esc(excerpt(pa, 180))+'</p>' : '') +
                 (pb ? '<p><strong>'+esc(d.b.who)+'.</strong> '+esc(excerpt(pb, 180))+'</p>' : ''),
        src: d.src, source: d.locus,
        note: d.species.charAt(0).toUpperCase()+d.species.slice(1)+'. '+d.a.who+': '+d.a.claim+' '+d.b.who+': '+d.b.claim,
        also:'These are paired debates from Greek and Roman historians, and the kind of speech should be named before we take a side.'
      });
    }
    const who = rand([d.a, d.b]);
    const other = who === d.a ? d.b : d.a;
    const p = passageById(who.pid);
    return mcQ({
      prompt:'This voice is arguing which claim?',
      options:[who.claim, other.claim,
               'The speaker declines to take either side in the question.',
               'The speaker asks only to be admired.'],
      correct:0,
      passage: p ? esc(excerpt(p, 280)) : '',
      source: who.who+' — '+d.locus, src: d.src,
      note: who.who+': '+who.claim,
      also:'The other voice ('+other.who+'): '+other.claim
    });
  }
};
EX.whole = {
  id:'whole', title:'The Whole Case',
  instr:'From the situation, name the species, its end, the pistis, and a figure actually in the excerpt, choosing one chip in each row. Ten make a set; a passage is not reused.',
  src:['arist_rhet','cic_inv'],
  gen(diff){
    const p = pickPass(x => isOration(x) && pistisOf(x) && coreSpans(x).some(s => s.end <= shownLen(x, 380)), 'wh:');
    const sp = speciesOf(p);
    const end = {forensic:'accuse or defend', deliberative:'exhort or dissuade', epideictic:'praise or blame'}[sp];
    const present = coreSpans(p).filter(s => s.end <= shownLen(p, 380)).map(s => s.figure).filter((f,i,a) => a.indexOf(f)===i);
    const fig = present[0];
    const pistis = pistisOf(p);
    let figOpts = present.slice();
    ['anaphora','metaphor','tricolon','irony'].forEach(f => { if(figOpts.indexOf(f)<0) figOpts.push(f); });
    figOpts = shuffle(figOpts).slice(0,4);
    if(figOpts.indexOf(fig)<0){ figOpts[3] = fig; figOpts = shuffle(figOpts); }
    const cue = diff <= 2 ? '<div class="q-cue">'+esc(p.cue||'')+'</div>' : '';
    return {
      kind:'chips',
      prompt:'Take the case in order: species, the end of that species, the pistis doing the work, and a figure actually in the excerpt.',
      passage: cue + esc(excerpt(p, 380)),
      source: citeP(p), orig:p.orig, olang:p.olang, src: srcOf(p),
      rows:[
        {key:'sp', label:'Species', opts:[{label:'Forensic',v:'forensic'},{label:'Deliberative',v:'deliberative'},{label:'Epideictic',v:'epideictic'}]},
        {key:'end', label:'End', opts:[{label:'Accuse or defend',v:'accuse or defend'},{label:'Exhort or dissuade',v:'exhort or dissuade'},{label:'Praise or blame',v:'praise or blame'}]},
        {key:'pistis', label:'Pistis', opts:[{label:'Ethos',v:'ethos'},{label:'Pathos',v:'pathos'},{label:'Logos',v:'logos'}]},
        {key:'fig', label:'Figure', opts: figOpts.map(f => ({label:f, v:f})) }
      ],
      mark:{sp, end, pistis, fig},
      check(ans){
        const figOk = present.indexOf(ans.fig) >= 0;
        const right = ans.sp===sp && ans.end===end && ans.pistis===pistis && figOk;
        return {right, mark:{sp, end, pistis, fig},
          note: sp+'; end: '+end+'; pistis treated as '+pistis+'; figures present: '+present.join(', ')+'.',
          also:'The art aims at the whole case, not at a figure in isolation or a definition without a speech.'};
      }
    };
  }
};
EX.augoffice = {
  id:'augoffice', title:'The Christian orator',
  instr:'Augustine keeps Cicero’s three offices, to teach, to delight, and to move (docere, delectare, flectere), along with the three styles; but the end is now Scripture’s truth, not a fee. Eight questions make a set; a passage is not repeated in the set.',
  src:['ddc'],
  setLen:8,
  gen(diff){
    const e = pickSeen(itemPool('AUG_ITEMS', AUG_ITEMS), x => 'au:'+x.id);
    const p = passageById(e.pid);
    const cue = diff <= 2 ? '<div class="q-cue">'+(p ? esc(p.cue||'') : '')+'</div>' : '';
    return mcQ({
      prompt: e.prompt,
      options: e.options, correct: e.correct,
      passage: cue + (p ? esc(excerpt(p, diff>=4?260:420)) : ''),
      source: p ? citeP(p) : '', orig: p && p.orig, olang: p && p.olang, src: p ? srcOf(p) : 'ddc',
      note: e.note,
      also:'The test is whether the hearer is changed, which shows in tears, not applause.'
    });
  }
};
EX.greg = {
  id:'greg', title:'Gregory’s Hearers',
  instr:'The Pastoral Care is a book of pairs, since the same vice is not admonished in the same way in every hearer. Ten questions; a pair is not repeated in the set.',
  src:['greg'],
  gen(diff){
    const g = pickSeen(itemPool('GREG_PAIRS', GREG_PAIRS), x => 'gr:'+x.pair);
    if(g.quote){
      const names = [...new Set(GREG_PAIRS.concat(itemPool('GREG_PAIRS', GREG_PAIRS)).map(x => x.pair))].filter(p => p !== g.pair);
      const longer = names.filter(p => p.length >= g.pair.length);
      const closer = names.slice().sort((a,b) => Math.abs(a.length - g.pair.length) - Math.abs(b.length - g.pair.length) || a.localeCompare(b));
      let wrong;
      if(longer.length){
        const one = sample(longer, 1);
        wrong = one.concat(sample(closer.filter(p => p !== one[0]), 2));
      } else wrong = sample(closer, 3);
      return mcQ({
        prompt:'Gregory writes: <em>'+esc(g.quote)+'</em> Which pair of hearers is he dividing?',
        options:[g.pair].concat(wrong),
        correct:0, src:'greg', note:g.why,
        also:'Each pair of hearers needs its own admonition, and the pair has to be named before that admonition can be applied.'
      });
    }
    const pool = itemPool('GREG_PAIRS', GREG_PAIRS).filter(x => x.pair !== g.pair);
    const longerW = pool.filter(x => x.why.length >= g.why.length);
    const closerW = pool.slice().sort((a,b) => Math.abs(a.why.length - g.why.length) - Math.abs(b.why.length - g.why.length) || a.pair.localeCompare(b.pair));
    let pickedW;
    if(longerW.length){
      const one = sample(longerW, 1);
      pickedW = one.concat(sample(closerW.filter(x => x.pair !== one[0].pair), 2));
    } else pickedW = sample(closerW, 3);
    const others = pickedW.map(x => x.why);
    return mcQ({
      prompt:'Gregory pairs <strong>'+esc(g.pair)+'</strong>. Why are they paired, that is, what do the two hearers need differently?',
      options:[g.why].concat(others),
      correct:0, src:'greg', note:g.why,
      also:'The same vice is not cured by the same word in every hearer, so when we name the two constitutions, we have named the pair.'
    });
  }
};

EX.greg.setLen = 10;
// Optional set: the figures outside the core tier.
function furtherFigs(){
  const has = arr => Object.keys(FIGURE_GLOSS).filter(f => isAdvancedFigure(f) && arr.some(p => (p.spans||[]).some(s => s.figure === f)));
  const figs = has(passages());
  return figs.length ? figs : has(window.PASSAGES || []);
}
EX.figfurther = {
  id:'figfurther', title:'Further Figures (optional)',
  instr:'This set is optional. It drills the less common figures, which the main figures exercises do not ask about; some questions ask us to click the figure, and some ask which of four excerpts uses it.',
  src:['eng_cer','arist_rhet'],
  gen(diff){
    const figs = furtherFigs();
    if(!figs.length) return EX.figclick.gen(diff);
    const fig = pickSeen(figs, f => 'ffig:'+f);
    const yes = pickPass(x => speechSpans(x).some(s => s.figure === fig), 'ffy:');
    const mine = speechSpans(yes).filter(s => s.figure === fig);
    const target = (diff <= 2) ? mine[0] : rand(mine);
    const gloss = FIGURE_GLOSS[fig] || target.why;
    const n = diff <= 2 ? 160 : 120;
    const pool = pickWrongLen(yes, fig, n, 3);
    if(rand([0,1]) === 1 && target.end <= n - 10 && pool.length >= 3 && pool.some(p => whichOptLen(p, n) >= whichOptLen(yes, n))){
      const optsP = [yes].concat(pool);
      return mcQ({
        prompt:'Which excerpt is using <strong>'+esc(fig)+'</strong> <em>('+esc(gloss)+')</em>?',
        options: optsP.map(p => '<span style="font-size:16px">'+esc(excerpt(p, n))+'</span><br><span style="font-size:14px;color:var(--ink-soft);font-style:italic">'+citeP(p)+'</span>'),
        correct:0, src: srcOf(yes),
        note: citeP(yes)+'. '+target.why,
        also:'This figure is in the optional tier; the main figures exercises do not ask about it.'
      });
    }
    const cue = diff <= 2 ? '<div class="q-cue">'+esc(yes.cue||'')+'</div>' : '';
    return {
      kind:'figclick',
      prompt:'Click the part of the passage that is <strong>'+esc(fig)+'</strong> <span style="color:var(--ink-soft);font-style:italic">('+esc(gloss)+')</span>.',
      passageHtml: cue + wrapFigs(yes.text, speechSpans(yes), fig),
      source: citeP(yes), orig: yes.orig, olang: yes.olang, target: fig, why: target.why, src: srcOf(yes),
      check(ans){
        const right = String(ans) === String(fig);
        return {right, note: right ? target.why : 'The '+fig+' is this: “'+yes.text.slice(target.start, target.end)+'”<br>'+target.why,
          also: figNames(yes).filter(f => f !== fig).map(figLabel).join(' · ')};
      }
    };
  }
};
const ACTS = [
  {roman:'I', name:'What Rhetoric Is', latin:'quid sit rhetorica',
   gloss:'The third art of the trivium. This division gives the definition of rhetoric, the three means of persuasion (pisteis), and the three kinds of speech (species). Grammar considers the congruity of speech, logic considers its truth, and rhetoric considers whether and how the hearer is moved.',
   items:[
     {kind:'deck', deck:'orient', tag:'TUTORIAL', title:'The counterpart of dialectic', desc:'Aristotle’s definition; the three means of persuasion (pisteis); the three kinds of speech (species) and what each is for.'},
     {kind:'ex', ex:'species', tag:'EXERCISE', title:'The three species', desc:'Speech to a jury on a past act (forensic), speech to an assembly on what to do (deliberative), and speech of praise or blame (epideictic), each named from real speeches.'},
     {kind:'ex', ex:'pisteis', tag:'EXERCISE', title:'The three pisteis', desc:'The speaker’s character (ethos), the hearer’s passions (pathos), and the argument (logos), in Cicero, Antiphon, Gorgias, Thucydides, Plato, Augustine.'}
   ]},
  {roman:'II', name:'Invention · Logos', latin:'inventio · logos',
   gloss:'The rhetorical syllogism (enthymeme) and the example (paradeigma); the seats of arguments (topics); signs that are necessary and signs that are only likely.',
   items:[
     {kind:'deck', deck:'logos', tag:'TUTORIAL', title:'Enthymeme, example, topics', desc:'The rhetorical syllogism (enthymeme) and the example (paradeigma). A premise the hearers supply is not a defect.'},
     {kind:'ex', ex:'enthymeme', tag:'EXERCISE', title:'Supply the missing premise', desc:'Name the unspoken premise in Cicero, Antiphon, Gorgias, Thucydides, Sophocles, Plato.'}
   ]},
  {roman:'III', name:'Invention · Ethos and Pathos', latin:'ethos et pathos',
   gloss:'The speaker’s character shown in the speech; Aristotle’s account of the passions; Aquinas’s passions concerning good or evil as such (concupiscible) and passions concerning the arduous good or evil (irascible); Gregory the Great’s account of the kinds of men and his contrasts of pairs of listeners.',
   items:[
     {kind:'deck', deck:'ethos', tag:'TUTORIAL', title:'The speaker and the hearer', desc:'Practical wisdom (phronesis), virtue (arete), goodwill (eunoia). Aristotle’s Rhetoric II beside Aquinas’s Summa I–II. Gregory’s Pastoral Care.'},
     {kind:'ex', ex:'ethos', tag:'EXERCISE', title:'Character in the speech', desc:'Which of the three (practical wisdom, virtue, goodwill) is the speech itself showing?'},
     {kind:'ex', ex:'pathos', tag:'EXERCISE', title:'Name the passion', desc:'Anger, pity, fear, shame, indignation, confidence, love, kindness, hatred, and emulation, from real passages.'},
     {kind:'ex', ex:'greg', tag:'EXERCISE', title:'Gregory’s hearers', desc:'Why the same vice is not admonished in the same way.'}
   ]},
  {roman:'IV', name:'Arrangement', latin:'taxis',
   gloss:'Arrangement of the speech. Aristotle names four parts: the opening (prooimion), the statement of facts, the proof, and the close (epilogos). The Latin school names six offices of the oration: the opening (exordium), the facts (narratio), the laying-out of the points (partitio), the proof (confirmatio), the answer to the other side (reprehensio), and the close (peroratio). These are offices a part of the speech may perform, not a template to force on every speech.',
   items:[
     {kind:'deck', deck:'taxis', tag:'TUTORIAL', title:'The parts of the oration', desc:'Opening (exordium), statement of facts (narratio), laying out the points (partitio), proof (confirmatio), answering the other side (reprehensio), closing (peroratio).'},
     {kind:'ex', ex:'taxis', tag:'EXERCISE', title:'Name the part', desc:'Which office of the oration is this part of the passage performing?'},
     {kind:'ex', ex:'taxisorder', tag:'EXERCISE', title:'The six offices', desc:'Their duties, their order, and when narration shrinks.'}
   ]},
  {roman:'V', name:'Style', latin:'lexis',
   gloss:'Clear and fitting speech first; metaphor as seeing likeness; the sophistic vice of making style do the work of argument.',
   items:[
     {kind:'deck', deck:'lexis', tag:'TUTORIAL', title:'Virtue of style', desc:'Aristotle III; clarity first; when figures do the work of argument, and when they do not.'},
     {kind:'ex', ex:'lexis', tag:'EXERCISE', title:'Style and the argument', desc:'Does the claim still stand in plain clauses, or is the figure the claim?'}
   ]},
  {roman:'VI', name:'Figures', latin:'figurae',
   gloss:'Click the marked part of the passage, or say which of four excerpts uses the named figure. The filters are Cicero, Gorgias’s Helen, and Augustine; tragedy and early prose are in the mixed sets. These sets ask only about the commonly taught figures, and an optional set at the end drills the rest.',
   items:[
     {kind:'ex', ex:'figclick', tag:'EXERCISE', title:'Click the figure', desc:'Mixed selections, from Cicero to Sophocles and from Gorgias to the Confessions.'},
     {kind:'ex', ex:'figwhich', tag:'EXERCISE', title:'Which excerpt?', desc:'Four real passages; one of them is using the named figure.'},
     {kind:'ex', ex:'figcicero', tag:'EXERCISE', title:'Cicero’s figures', desc:'The great Roman orator’s use of figures throughout his work, but especially in the orations against Catiline.'},
     {kind:'ex', ex:'figgorgias', tag:'EXERCISE', title:'Gorgias’s Helen', desc:'Almost all Gorgias: opposed clauses (antithesis), equal members (isocolon), like endings (homoeoteleuton); the potentate and the drug.'},
     {kind:'ex', ex:'figaugustine', tag:'EXERCISE', title:'Augustine’s figures', desc:'Confessions and On Christian Teaching IV (De doctrina christiana), with the Latin on the original-text button where we have it.'},
     {kind:'ex', ex:'figfurther', tag:'OPTIONAL', title:'Further figures (optional)', desc:'This set is optional. It drills the less common figures, such as correctio, epizeuxis, polysyndeton, and aposiopesis, which the main sets do not ask about.'}
   ]},
  {roman:'VII', name:'The Whole Case', latin:'causa',
   gloss:'From the situation, name the kind of speech (species), its end, the means of persuasion (pistis), and a figure. Paired debates from Greek and Roman historians, and Antiphon’s tetralogy kept as speech to a jury (forensic).',
   items:[
     {kind:'deck', deck:'gorgias', tag:'TUTORIAL', title:'Gorgias and the four aitiai', desc:'Persuasion as a drug; speech (logos) as a powerful ruler; fortune, violence, persuasion, love (the four causes, aitiai).'},
     {kind:'deck', deck:'antiphon', tag:'TUTORIAL', title:'The Second Tetralogy', desc:'Javelin practice; facts agreed; cause and error (hamartia); ritual pollution (miasma); the quiet man who minds his own business (apragmon).'},
     {kind:'deck', deck:'augustine', tag:'TUTORIAL', title:'The Christian orator', desc:'To teach, to delight, to move (docere, delectare, flectere); three styles; tears, not applause.'},
     {kind:'ex', ex:'augoffice', tag:'EXERCISE', title:'The Christian orator', desc:'The three offices and the three styles, from De doctrina christiana IV.'},
     {kind:'ex', ex:'antiphon', tag:'EXERCISE', title:'Antiphon: side, pistis, topos', desc:'Four speeches, two a side: which side, which means of persuasion (pistis), which seat of argument (topos).'},
     {kind:'ex', ex:'debates', tag:'EXERCISE', title:'Paired debates', desc:'Archidamus and Sthenelaidas; Cleon and Diodotus; Pericles; Catiline and Caesar; the javelin.'},
     {kind:'ex', ex:'whole', tag:'EXERCISE', title:'The whole case', desc:'Kind of speech (species), end, means of persuasion (pistis), a figure that is actually there.'}
   ]}
];
const DIFF = {
  1:{gain:10, loss:4,  name:'I',   desc:'Beginning. The names are given and a hint is shown. A right answer is worth ten points. Most sets are ten questions, and a clean run of ten is 100. The six offices, the paired debates, and Gorgias’s Helen are six; the Christian orator is eight.'},
  2:{gain:12, loss:6,  name:'II',  desc:'The wrong answers sit closer to the right one. Twelve points for a right answer; six lost for a wrong one.'},
  3:{gain:15, loss:8,  name:'III', desc:'Less help. You name the thing from the speech. Fifteen points for a right answer.'},
  4:{gain:18, loss:10, name:'IV',  desc:'Shorter passages and closer wrong answers. Eighteen points for a right answer.'},
  5:{gain:22, loss:12, name:'V',   desc:'No hint. You judge the speech as it stands. Twenty-two points for a right answer.'}
};
const SET_LEN = 10;
