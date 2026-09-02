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
  quint:{kind:'primary', short:'Quintilian, <i>Institutio oratoria</i>',
    full:'Quintilian, <i>Institutio oratoria</i>, trans. H. E. Butler, Loeb (1920–22). Public domain in the United States.', note:''},
  ddc:{kind:'primary', short:'Augustine, <i>De doctrina christiana</i> IV',
    full:'Augustine, <i>De doctrina christiana</i> Book IV, trans. J. F. Shaw, NPNF I.2. Public domain. Latin from the Maurist text. Docere, delectare, movere; three styles; tears, not applause.',
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
    full:'Rita Copeland and Ineke Sluiter, eds., Medieval Grammar and Rhetoric, Oxford, 2012.', note:''}
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
{ src:['appown','copeland'], h:'<p><strong>THE THIRD ROAD.</strong> The old course of study put three arts together and called them the <span class="lat">trivium</span>: <strong>grammar</strong>, which asks whether the utterance is well formed (<span class="lat">congruitas</span>); <strong>logic</strong>, which asks whether what is said is true, and what follows; and <strong>rhetoric</strong>, which asks whether the hearer is moved to see it.</p><p><em>The moon is made of green cheese</em> is congruous and false. <em>Him go store yesterday</em> is incongruous and may well be true. A speech may be both well formed and true, and still fail — if it does not find the available means of persuasion in this case, for these hearers.</p><p>This course is Aristotelian in its spine and Ciceronian in its arrangement. It takes Augustine at his word that the Christian orator still has three offices: to teach, to delight, to move. It does not grade your compositions. It trains the eye on real speeches.</p>' },
{ src:['arist_rhet'], h:'<p><strong>The definition.</strong> Aristotle opens the <em>Rhetoric</em> by pairing the art with dialectic: “Rhetoric is the counterpart of Dialectic” (I.1, 1354a1). Both deal with matters that can go either way; neither is a science of a special subject. Then the working definition (I.2):</p><p style="font-style:italic">Rhetoric may be defined as the faculty of observing in any given case the available means of persuasion.</p><p>Not “the art of winning.” The orator’s first work is to <em>see</em> what can be said. Quintilian will later call rhetoric <span class="lat">bene dicendi scientia</span> — the science of speaking well (<em>Institutio</em> 2.15.34, Butler).</p>',
  q:{ prompt:'On Aristotle’s definition, what is rhetoric first of all?',
      options:['The art of winning any case you are paid to win','The faculty of seeing, in this case, the available means of persuasion','A science of a special subject, like geometry','The study of tropes and figures only'],
      correct:1,
      explain:'I.2: the faculty of observing in any given case the available means of persuasion. Winning is an effect. Figures belong to lexis.' } },
{ src:['arist_rhet'], h:'<p><strong>Three pisteis.</strong> Of the means of persuasion some are <span class="lat">atechnoi</span> (laws, witnesses, contracts); some are <span class="lat">entechnoi</span>, furnished by the art. Of the artistic proofs there are three (I.2, 1356a):</p><ul style="margin:8px 0 8px 22px"><li><strong>Ethos</strong> — in the character of the speaker, as the speech itself shows him trustworthy.</li><li><strong>Pathos</strong> — in putting the hearer into a certain frame of mind.</li><li><strong>Logos</strong> — in the speech itself, when we have proved a truth or an apparent truth by suitable arguments.</li></ul><p>Aristotle says the character of the speaker is nearly the most effective means of persuasion.</p>',
  q:{ prompt:'Which pistis lives in the hearer’s frame of mind?',
      options:['Ethos','Pathos','Logos','The inartistic proofs (laws, witnesses)'],
      correct:1,
      explain:'Pathos is putting the hearer into a certain frame of mind. Ethos is in the speaker as the speech shows him. Logos is in the argument.' } },
{ src:['arist_rhet','cic_inv'], h:'<p><strong>Three species, three ends.</strong> Aristotle (I.3) divides speeches by the hearer’s office:</p><ul style="margin:8px 0 8px 22px"><li><strong>Deliberative</strong> (<span class="lat">symbouleutikon</span>) — the assembly, judging the future: the expedient and the harmful. End: to exhort or dissuade.</li><li><strong>Forensic</strong> (<span class="lat">dikanikon</span>) — the jury, judging the past: the just and the unjust. End: to accuse or defend.</li><li><strong>Epideictic</strong> (<span class="lat">epideiktikon</span>) — the spectator, judging the present: the noble and the shameful. End: to praise or blame.</li></ul><p>Pericles’ funeral oration is the showpiece of the third. Antiphon’s tetralogy is a school-piece of the second. Cleon and Diodotus on Mytilene are deliberative: a past act, a future policy.</p>',
  q:{ prompt:'A jury is asked whether a thrower of a javelin is guilty of unintentional homicide. The species is',
      options:['Deliberative — the expedient','Forensic — the just and the unjust','Epideictic — the noble','A fourth species Aristotle forgot'],
      correct:1,
      explain:'The hearer judges a past act under the just and the unjust. That is forensic. Antiphon’s Second Tetralogy is built on exactly that situation.' } },
{ src:['arist_rhet'], h:'<p><strong>Two bodies of proof in logos.</strong> The orator’s own arguments are the <strong>enthymeme</strong> (rhetorical syllogism) and the <strong>example</strong> (<span class="lat">paradeigma</span>, rhetorical induction). One premise is often left unsaid because the hearers supply it. That is not a defect. It is how speech works among people who already share a world.</p><p>The topics (<span class="lat">topoi</span>) are the seats of arguments: more and less, from contraries, from consequences, from definition. You invent by going to a place and looking.</p>' }
]};

DECKS.logos = {
  title:'Invention · Logos', sub:'Enthymeme, example, topics — not scored',
  panels:[
{ src:['arist_rhet'], h:'<p><strong>The enthymeme.</strong> The enthymeme is a syllogism concerned with things that can be otherwise, drawn from likely premises or from signs, addressed to hearers who cannot be led through a long chain. One premise is commonly omitted.</p><p>Cicero, First Catilinarian: Catiline still lives — and sits in the senate. The unspoken: a man who plots massacre of the senate ought not to sit in it. The hearers complete it. That is why the question “Lives?” works.</p>',
  q:{ prompt:'What makes an enthymeme rhetorical rather than a full syllogism of the <em>Analytics</em>?',
      options:['It is always invalid','It addresses probable matters, often with a premise the hearers supply','It never uses signs','It belongs only to forensic oratory'],
      correct:1,
      explain:'Rhetoric deals with what can be otherwise. The form is still syllogistic; the matter is likely, and the audience is not a class in logic.' } },
{ src:['arist_rhet'], h:'<p><strong>Example.</strong> The other body of proof is the <span class="lat">paradeigma</span>. Historical example: this is what the Persians did, this is what our fathers did. Pericles’ funeral oration works by holding up Athens herself as the example — the city as paradeigma of the men being buried.</p><p>The topic of <em>more and less</em>: if even the lesser thing holds, the greater holds. The topic of <em>contraries</em>: if war is the cause of our evils, peace is the cause of their opposites.</p>' },
{ src:['arist_rhet'], h:'<p><strong>Signs and likelihoods.</strong> A necessary sign (<span class="lat">tekmerion</span>) is as a syllogism from a necessary premise: if he has a fever, he is ill. A fallible sign is only likely. The orator who treats a fallible sign as necessary is cheating the hearer — and Aristotle names the cheat.</p><p>Antiphon’s javelin case: the facts are agreed. The fight is over <em>cause</em> and <em>hamartia</em>. A sign (the boy is dead; a javelin was thrown) does not by itself settle which description is the just one.</p>',
  q:{ prompt:'The boy is dead, and a javelin was thrown. Taken as a proof that the thrower is guilty of homicide, that pair of facts is',
      options:['A necessary sign (tekmerion): from these facts the guilt cannot fail','A fallible sign: the facts are agreed, but they do not settle whose error the death was','A complete syllogism of the Analytics','An inartistic proof, like a written law'],
      correct:1,
      explain:'The death and the throw are signs. They do not name the cause. Treating them as a tekmerion is the cheat Aristotle warns against.' } },
{ src:['arist_rhet','cic_cat'], h:'<p><strong>How to hear an enthymeme.</strong> The exercise that follows will give you a sentence from a speech and ask what premise the hearers are meant to supply. Work it once here, in the open.</p><p>Cicero: <em>Lives? Yes, lives; and even comes down to the senate.</em> What is said is a fact the senate can see. What makes it an argument is what they already hold: a man who plots the massacre of the senate ought not to sit in it. Name that unspoken premise, and you have named the enthymeme.</p>',
  q:{ prompt:'Cicero says Catiline still lives — and sits in the senate. The hearers are meant to supply:',
      options:['All senators live in Rome','A man who plots the massacre of the senate ought not to sit in it','Javelins always fly true','The parts of an oration are six'],
      correct:1,
      explain:'The fact is visible. The premise that makes it a charge is the one the senate already grants. That is the work of the next exercise.' } }
]};

DECKS.ethos = {
  title:'Invention · Ethos and Pathos', sub:'Character, passions, the hearers — not scored',
  panels:[
{ src:['arist_rhet'], h:'<p><strong>Ethos in the speech.</strong> We trust a speaker for three reasons shown <em>in the speech</em> — practical wisdom (<span class="lat">phronesis</span>), virtue (<span class="lat">arete</span>), and goodwill (<span class="lat">eunoia</span>). Reputation brought in from outside is an inartistic proof.</p><p>Socrates in the <em>Apology</em> refuses the usual captatio: he will speak as he speaks in the marketplace. That refusal is itself ethos — virtue shown, not a borrowed name. Antiphon’s defendant claims he is <span class="lat">apragmon</span> — a man who minds his own business — forced into court. Archidamus opens on his years and his wars: practical wisdom. The exercise that follows will ask which of the three is doing the work.</p>',
  q:{ prompt:'Socrates will not speak in the language of the law-court, but as he speaks in the marketplace. What is shown in the speech?',
      options:['An inartistic proof: his reputation, brought in from outside','Virtue (arete): the manner of the man is the proof of the man','A necessary sign that he is innocent','The office of narration'],
      correct:1,
      explain:'Aristotle I.2: ethos is in the speech. The refusal of a borrowed eloquence is itself character. Reputation named from outside would be atechnos.' } },
{ src:['arist_rhet','aquinas_st'], h:'<p><strong>Pathos.</strong> Rhetoric II is a treatise on the passions: anger and mildness, love and hate, fear and confidence, shame, kindness, pity, indignation, envy, emulation. For each: a definition, the state of mind, the objects, the grounds.</p><p>St Thomas, mapping the same motions in I–II, divides them by object: the <strong>concupiscible</strong> (love, hate, desire, aversion, pleasure, pain) and the <strong>irascible</strong> (hope, despair, fear, daring, anger) — the latter where good or evil is arduous. One list is written for the orator; the other for the theologian. This course uses both.</p>',
  q:{ prompt:'On Aquinas’s division, anger belongs to',
      options:['The concupiscible appetite, because it is a simple love of revenge','The irascible appetite, because its object is an arduous evil','The intellect, because it is a judgment','Pathos only, never a passion of the soul'],
      correct:1,
      explain:'Anger is irascible: the object is an evil that must be overcome. Rhetoric names anger because the orator must know what state of mind it is, toward whom, and on what grounds (Aristotle II.2).' } },
{ src:['greg'], h:'<p><strong>Gregory’s pairs.</strong> The <em>Pastoral Care</em> is a book of hearers. The same vice is not cured by the same word. Rhetoric without a doctrine of the hearer is only a box of figures. Gregory writes the box of hearers.</p><p>He proceeds by pairs, because a word that heals one hearer wounds another:</p><ul style="margin:8px 0 8px 22px"><li><strong>The joyful and the sad.</strong> Before the joyful, the punishments that follow excess; before the sad, the promised goods of the kingdom.</li><li><strong>The poor and the rich.</strong> Comfort against tribulation for the one; fear of elation for the other.</li><li><strong>Subjects and prelates.</strong> Subjection must not crush; place must not swell, nor command more than is just.</li><li><strong>The humble and the proud.</strong> Praise the humble carefully, lest praise become a snare; rebuke the proud, lest silence confirm them.</li></ul><p>The exercise that follows will give you a pair and ask <em>why</em> they are paired — what the two hearers need differently. The reason is always the same kind of reason: the same medicine is not for every constitution.</p>' }
]};

DECKS.taxis = {
  title:'Arrangement', sub:'Taxis — the parts of the oration — not scored',
  panels:[
{ src:['cic_inv','arist_rhet'], h:'<p><strong>Cicero’s six; Aristotle’s four.</strong> Aristotle is spare: the opening (<span class="lat">prooimion</span>), the statement of the case with narration as needed, the proof (<span class="lat">pistis</span>), the close (<span class="lat">epilogos</span>). The Latin school named six <em>offices</em> — duties a part of the speech may perform:</p><ol style="margin:8px 0 8px 22px"><li><strong>Exordium</strong> (opening) — make them attentive, teachable, well-disposed.</li><li><strong>Narration</strong> (the facts) — brief, clear, plausible.</li><li><strong>Division</strong> (<span class="lat">partitio</span>) — the points in dispute, and the order of taking them.</li><li><strong>Proof</strong> (<span class="lat">confirmatio</span>) — your arguments.</li><li><strong>Refutation</strong> (<span class="lat">reprehensio</span>) — the other side.</li><li><strong>Peroration</strong> (the close) — recapitulate, and move.</li></ol><p>The six are offices, not a template to force on every speech. A funeral oration is not a proof of a crime. A tetralogy may open on the law because the facts are agreed, and narration shrinks to a sentence.</p>',
  q:{ prompt:'When the facts are agreed and only the cause is in dispute, which office shrinks?',
      options:['The peroration, because there is nothing to feel','The narration, because the story is not the fight','The proof, because there are no arguments left','The exordium, because the jury is already paying attention'],
      correct:1,
      explain:'Antiphon’s prosecutor says as much at once: when the facts are agreed, the verdict turns on the laws — and then he still has to argue cause. Narration can be a sentence. Proof and refutation swell.' } },
{ src:['cic_cat'], h:'<p><strong>One speech, the six offices.</strong> The First Catilinarian is forensic in its charge, deliberative in its demand that the senate act. Watch them as offices, not as chapter headings:</p><ul style="margin:8px 0 8px 22px"><li><strong>Opening.</strong> “How much further, Catilina…” — he makes them attentive by naming the man in the room.</li><li><strong>Facts.</strong> Last night at Laeca’s house: Italy divided, the city to be fired, the consul to be killed.</li><li><strong>Points in dispute.</strong> Not whether there is a conspiracy (he will not grant that as open), but whether the man may still sit here.</li><li><strong>Proof.</strong> “You were then, Catilina, at Laeca’s house that night” — the night named in the senate’s hearing.</li><li><strong>The other side.</strong> He answers the plea that Catiline still lives among them as if that were a defence; it is the charge.</li><li><strong>Close.</strong> Leave the city. The peroration is a command, and a moving of fear and shame.</li></ul><p>The next exercises ask you to name the office a part of a passage is performing, and to keep the six in school order. The order is a school memory. The offices are what you should see in the speech.</p>' }
]};

DECKS.lexis = {
  title:'Style', sub:'Lexis — clarity, propriety, metaphor — not scored',
  panels:[
{ src:['arist_rhet'], h:'<p><strong>Virtue of style.</strong> Aristotle (III.2): let style be clear, and neither mean nor above the dignity of the subject. “The greatest thing by far is to be a master of metaphor.” Clarity first. Ornament second. The vice of the sophist is to make the style do the work of the argument.</p><p>Gorgias is the exhibit. Van Hook’s Helen is almost all figure: antithesis, isocolon, homoeoteleuton. That is not a mistake. It is a demonstration of what logos can do when it is treated as a drug. Aristotle admires the power and distrusts the use.</p>' },
{ src:['gorgias_vh','arist_rhet'], h:'<p><strong>Figures the ear can name.</strong> A short working list (these are figures of speech, not the means of persuasion, and not the offices of the oration):</p><ul style="margin:8px 0 8px 22px"><li><strong>Anaphora</strong> — same word at the head of members.</li><li><strong>Antithesis</strong> — opposed thoughts in parallel frames.</li><li><strong>Tricolon</strong> — three members, often rising.</li><li><strong>Isocolon</strong> — members of equal length.</li><li><strong>Homoeoteleuton</strong> — like endings (Gorgias’s signature).</li><li><strong>Apostrophe</strong> — a turn to address someone present or absent.</li><li><strong>Rhetorical question</strong> — inquiry that is a charge.</li><li><strong>Metaphor</strong> — naming one thing with another’s name.</li><li><strong>Irony</strong> — saying the less, or the opposite, to mean the more.</li><li><strong>Chiasmus</strong> — ABBA crossing.</li></ul><p>The figures exercises that follow ask you to find these in a real passage. They do not ask you to name ethos, or pathos, or an exordium. Those belong to invention and arrangement.</p>' },
{ src:['gorgias_vh','thuc_crawley'], h:'<p><strong>When style does the work of argument.</strong> Aristotle’s warning is practical. Take two sentences.</p><p>Gorgias on logos: “a powerful potentate, who with frailest, feeblest frame works wonders.” The figure is the claim: speech is small and does what a ruler does. Strip the antithesis and the personification, and little argument remains.</p><p>Diodotus on counsel: “Haste and anger are the two things most opposed to good counsel.” You may keep or drop the balance of the members; the claim still stands. That is style serving an argument, not replacing one.</p><p>The exercise in this division asks which is which. The Gorgias figures set in Division VI is the ear’s drill. This is the judgment that should follow the ear.</p>' }
]};


DECKS.gorgias = {
  title:'Gorgias · Encomium of Helen', sub:'Persuasion as a drug — not scored',
  panels:[
{ src:['gorgias_vh'], h:'<p><strong>A showpiece, not a law-court speech.</strong> The <em>Encomium of Helen</em> is epideictic: praise of a woman the tradition blames, and a display of what logos can do. Van Hook (1913): “Logos is a powerful potentate, who with frailest, feeblest frame works wonders. For it can put an end to fear and make vexation vanish; it can inspire exultation and increase compassion.”</p><p>Speech is small. Its work is not small. Aristotle will classify this as pathos produced by lexis. Gorgias offers it as a physics of the soul.</p>' },
{ src:['gorgias_vh'], h:'<p><strong>Four aitiai.</strong> Helen went. Why? Gorgias gives four causes, and if any one of them holds, she is to be acquitted:</p><ol style="margin:8px 0 8px 22px"><li>The disposition of <strong>fortune</strong>, the gods, necessity.</li><li><strong>Violence</strong> — she was taken.</li><li><strong>Persuasion</strong> — logos deceived her.</li><li><strong>Love</strong>.</li></ol><p>“For either by the disposition of fortune and the ratification of the gods and the determination of necessity she did what she did, or by violence confounded, or by persuasion dumbfounded or to Love surrendered.” If logos is a drug, then being persuaded is being acted on — and the accuser has charged the patient.</p>',
  q:{ prompt:'On Gorgias’s four aitiai, being persuaded by speech is most like',
      options:['Choosing freely, and therefore being guilty','Being acted on, as by a drug or by violence, and therefore not culpable','A logical demonstration from necessary premises','A forensic narration of agreed facts'],
      correct:1,
      explain:'Helen 8–14 treats logos as a potentate and song as witchery. If persuasion captures the soul, the persuaded is not the cause. Aristotle will not grant that account of agency; the course asks you to see it, not to baptise it.' } },
{ src:['gorgias_vh','arist_rhet'], h:'<p><strong>Witchery.</strong> “Inspired incantations are provocative of charm and revocative of harm. For the power of song in association with the belief of the soul captures and enraptures and translates the soul with witchery.”</p><p>Hold this beside Aristotle’s cooler sentence: the hearer is put into a certain frame of mind. Same observation; different metaphysics. A figures set in this course can be almost all Gorgias, because Van Hook’s English is built to be heard as figure. Then ask whether the argument would survive in plain clauses. That question is the beginning of judgment.</p>' },
{ src:['gorgias_vh'], h:'<p><strong>Helen is not his only case.</strong> Gorgias also wrote a <em>Defence of Palamedes</em>: Odysseus accuses Palamedes of treason; Palamedes argues that he could not have done the deed and would not have wished to. That is a forensic school-piece — a case, not a display. Helen praises; Palamedes defends. The four aitiai of Helen (fortune, violence, persuasion, love) are causes of an act already done; Palamedes has to show that the act was not done at all.</p><p>The figures set that follows this tutorial is still Helen, because Van Hook’s English of that speech is public domain and written to be heard as figure. Palamedes belongs beside it as the forensic counterpart. Hear Helen as epideictic display; keep Palamedes in mind as what a Gorgian <em>case</em> looks like when there is a charge to answer.</p>' }
]};

DECKS.antiphon = {
  title:'Antiphon · Second Tetralogy', sub:'A forensic school-piece — not scored',
  panels:[
{ src:['antiphon'], h:'<p><strong>The case.</strong> Javelin practice. A boy runs out. He is struck in the side and dies on the spot. The facts are agreed. The prosecutor (the dead boy’s father) charges not intentional but <em>unintentional</em> homicide. Four speeches: prosecution, defence, prosecution’s second, defence’s second. That is a tetralogy — a sophistic school-piece in the shape of a trial.</p><p>What is on trial is <strong>cause</strong> and <strong>hamartia</strong>. Who missed? The thrower, whose javelin flew true at the target, or the boy who ran into the line? Pollution (<span class="lat">miasma</span>) hangs over the city until a verdict names the cause. <span class="lat">Erga</span> against <span class="lat">logoi</span>. <span class="lat">Doxa</span> against <span class="lat">aletheia</span>. The defendant calls himself <span class="lat">apragmon</span> — no busybody — forced into court by misfortune.</p>' },
{ src:['antiphon'], h:'<p><strong>How to read it.</strong> These are not Ciceronian orations. They are a sophistic school-piece in forensic form: four speeches, two a side, one set of facts. They are a drill in invention when the narrative is finished on the first page. Every later claim is a redescription of the same throw.</p><p>Ask, of each excerpt: which <em>side</em>? which means of persuasion (<em>pistis</em>) is doing the work? which seat of argument (<em>topos</em> — from consequences; from the laws; from more and less; from the name of the act)?</p>',
  q:{ prompt:'In this tetralogy the facts of the throw are agreed. The dispute is therefore',
      options:['Whether a javelin was thrown at all','How the act is to be named and caused — hamartia, and whose','Whether Helen is to be praised or blamed','Whether Athens should sail to Sicily'],
      correct:1,
      explain:'Forensic oratory at the limit: narration collapses, and invention has to work on description and cause. That is why the piece is a school-piece.' } }
]};

DECKS.augustine = {
  title:'Augustine · The Christian Orator', sub:'Docere, delectare, movere — not scored',
  panels:[
{ src:['ddc','cic_orat'], h:'<p><strong>Three offices, kept.</strong> Augustine in <em>De doctrina christiana</em> IV does not throw Cicero away. The orator’s work is still to <strong>teach</strong>, to <strong>delight</strong>, to <strong>move</strong> — <span class="lat">docere, delectare, movere</span>. What changes is the end. The Christian orator serves the truth already found in Scripture; he does not invent a case for pay. Eloquence is not refused. It is subordinated.</p><p>Three styles travel with the three offices: the subdued (<span class="lat">summissum</span>) for teaching, the temperate (<span class="lat">temperatum</span>) for praise and blame, the grand (<span class="lat">grande</span>) for moving to action. Mix them. Do not use the grand style everywhere.</p>' },
{ src:['ddc'], h:'<p><strong>Tears, not applause.</strong> Augustine tells of preaching at Caesarea in Mauretania against the civil brawl called the Caterva. He did not want their shouts. He wanted their tears — and when they wept, he knew the speech had done its office. The test of Christian rhetoric is not the noise in the room. It is whether the hearer is changed.</p><p>The <em>Confessions</em> are not orations, but they are rhetorically alive: the stolen pears, <em>da mihi castitatem et continentiam, sed noli modo</em>, the child’s voice, “too late have I loved thee,” “what is time?”</p>',
  q:{ prompt:'For Augustine, the sign that a grand-style sermon has succeeded is',
      options:['Applause and the reputation of the preacher','Tears, and a change of life — the hearer moved to act','A perfect isocolon in every member','The suppression of all figures as worldly'],
      correct:1,
      explain:'DDC IV: he asked for groans, not cheers; the Caterva story is the emblem. Figures are permitted; they are not the end.' } }
]};


const SPECIES_MAP = {
  'cic-cat1-1':'forensic','cic-cat1-2':'forensic','cic-cat1-4':'forensic','cic-cat1-5':'forensic',
  'cic-cat1-6':'forensic','cic-cat1-7':'forensic','cic-cat1-8':'forensic','cic-cat1-9':'forensic',
  'cic-cat1-13':'forensic','cic-cat2-1':'forensic','cic-cat2-2':'forensic','cic-cat2-3':'forensic',
  'cic-cat2-6':'forensic','cic-cat2-7':'forensic','cic-cat2-11':'forensic','cic-cat2-12':'forensic',
  'cic-cat3-1':'forensic','cic-cat3-7':'forensic','cic-cat3-9':'forensic','cic-cat3-10':'forensic','cic-cat3-11':'forensic',
  'cic-cat4-1':'deliberative','cic-cat4-2':'deliberative','cic-cat4-4':'deliberative','cic-cat4-5':'deliberative','cic-cat4-9':'deliberative',
  'cic-milo-1':'forensic','cic-milo-2':'forensic','cic-ver-1':'forensic','cic-ver-2':'forensic',
  'cic-marc-1':'epideictic','cic-marc-2':'epideictic','cic-phil-1':'deliberative','cic-phil-2':'deliberative',
  'plato-ap-1':'forensic','plato-ap-2':'forensic','plato-ap-3':'forensic','plato-ap-4':'forensic','plato-ap-5':'forensic',
  'plato-crito-1':'deliberative','plato-crito-2':'deliberative',
  'plato-men-1':'epideictic','plato-sym-1':'epideictic','plato-sym-2':'epideictic',
  'plato-phaed-1':'epideictic','plato-phaed-2':'epideictic','plato-prot-1':'epideictic',
  'thuc-per-1':'epideictic','thuc-per-2':'epideictic','thuc-per-3':'epideictic','thuc-per-4':'epideictic','thuc-per-5':'epideictic',
  'thuc-fun-1':'epideictic','thuc-fun-2':'epideictic',
  'thuc-mel-1':'deliberative','thuc-corc':'deliberative',
  'thuc-arch-1':'deliberative','thuc-sthen-1':'deliberative','thuc-cleon-1':'deliberative','thuc-diod-1':'deliberative','thuc-alc-1':'deliberative',
  'dem-1':'deliberative','dem-2':'deliberative','dem-3':'deliberative',
  'sal-cat-1':'deliberative','sal-cat-2':'deliberative','sal-cat-3':'deliberative','sal-cat-4':'deliberative',
  'sal-cat-consp':'deliberative','sal-caes-1':'deliberative',
  'aug-1':'epideictic','aug-2':'epideictic','aug-3':'epideictic',
  'aug-chast':'epideictic','aug-love':'epideictic','aug-time':'epideictic','aug-pear':'epideictic',
  'aug-ddc-2':'epideictic','aug-ddc-12':'epideictic','aug-ddc-17':'epideictic','aug-ddc-24':'epideictic',
  'aug-ep93':'deliberative','aug-serm-1':'epideictic',
  'her-cro-1':'deliberative','her-cro-2':'deliberative','her-sol-1':'deliberative','her-sol-2':'epideictic',
  'her-therm-1':'epideictic','her-therm-2':'epideictic','her-xer-1':'deliberative',
  'tac-cal-1':'deliberative','tac-cal-2':'deliberative','tac-cal-3':'deliberative','tac-ann-1':'forensic',
  'liv-tar-1':'forensic','liv-luc-1':'forensic','liv-luc-2':'forensic','liv-hor-1':'epideictic',
  'plu-cae-1':'epideictic','plu-cae-2':'epideictic',
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
  {key:'exordium', name:'Exordium', duty:'Make them attentive, teachable, well-disposed.'},
  {key:'narration', name:'Narration', duty:'The facts — brief, clear, plausible.'},
  {key:'division', name:'Division', duty:'The points in dispute, and the order of taking them.'},
  {key:'proof', name:'Proof', duty:'Your arguments (confirmatio).'},
  {key:'refutation', name:'Refutation', duty:'The other side (reprehensio).'},
  {key:'peroration', name:'Peroration', duty:'Recapitulate, and move.'}
];
const TAXIS_ITEMS = [
  {id:'t1', part:'exordium', text:'How much further, Catilina, will you carry your abuse of our forbearance?', src:'cic_cat', cite:'Cicero, First Catilinarian 1.1'},
  {id:'t2', part:'narration', text:'My boy, struck in the side on the training field by a javelin thrown by this young man, died on the spot.', src:'antiphon', cite:'Antiphon, Second Tetralogy 3.1.1'},
  {id:'t3', part:'division', text:'For either by fortune and the gods and necessity she did what she did, or by violence, or by persuasion, or by Love.', src:'gorgias_vh', cite:'Gorgias, Helen 6'},
  {id:'t4', part:'proof', text:'I consider that we are deliberating for the future more than for the present.', src:'thuc_crawley', cite:'Thucydides 3.44, Diodotus'},
  {id:'t5', part:'refutation', text:'You were then, Catilina, at Laeca’s house that night; you divided Italy into districts.', src:'cic_cat', cite:'Cicero, First Catilinarian 1.4'},
  {id:'t6', part:'peroration', text:'How, then, is it fair to blame Helen who, whether by love captivated, or by word persuaded, or by violence dominated, or by divine necessity subjugated, did what she did, and is completely absolved from blame?', src:'gorgias_vh', cite:'Gorgias, Helen 20'},
  {id:'t7', part:'exordium', text:'I am more than seventy years of age, and appearing now for the first time in a court of law, I am quite a stranger to the language of the place.', src:'plato_jowett', cite:'Plato, Apology 17c–d (Jowett) — the refusal of a captatio'},
  {id:'t8', part:'narration', text:'There arose a mighty storm, bringing a shower of tears. I cast myself down under a certain fig-tree.', src:'aug_pusey', cite:'Augustine, Confessions VIII.12 (Pusey)'},
  {id:'t9', part:'proof', text:'Logos is a powerful potentate, who with frailest, feeblest frame works wonders.', src:'gorgias_vh', cite:'Gorgias, Helen 8'},
  {id:'t10', part:'peroration', text:'For heroes have the whole earth for their tomb; and in lands far from their own, where the column with its epitaph declares it, there is enshrined in every breast a record unwritten with no tablet to preserve it, except that of the heart.', src:'thuc_crawley', cite:'Thucydides 2.43, Pericles'},
  {id:'t11', part:'exordium', text:'Although I am afraid, gentlemen of the jury, that fear is an unseemly condition in which to begin a speech in defence of the bravest of men.', src:'cic_cat', cite:'Cicero, Pro Milone 1'},
  {id:'t12', part:'exordium', text:'Most of my predecessors in this place have commended him who made this speech part of the law, telling us that it is well that it should be delivered at the burial of those who fall in battle.', src:'thuc_crawley', cite:'Thucydides 2.35, Pericles'},
  {id:'t13', part:'narration', text:'You were then, Catilina, at Laeca’s house that night; you divided Italy into districts; you decided to what quarter you wished each of your friends to proceed.', src:'cic_cat', cite:'Cicero, First Catilinarian 1.4'},
  {id:'t14', part:'proof', text:'If, men of Athens, you first supply the sum I have mentioned, and then, after making ready the rest of the armament—soldiers, ships, cavalry—bind the whole force in its entirety, by law, to remain at the seat of war.', src:'demosth', cite:'Demosthenes, First Philippic'},
  {id:'t15', part:'proof', text:'Inflict only such penalties as the laws have provided.', src:'sallust_w', cite:'Sallust, Catiline 51, Caesar'},
  {id:'t16', part:'refutation', text:'The strong do what they can and the weak suffer what they must. Melians. As we think, at any rate, it is expedient—we speak as we are obliged, since you enjoin us to let right alone and talk only of interest.', src:'thuc_crawley', cite:'Thucydides 5.89–90, Melian dialogue'},
  {id:'t17', part:'exordium', text:'To-day, conscript fathers, has brought to a close the long silence, due not to a feeling of fear, but to mingled feelings of grief and of diffidence.', src:'cic_orat', cite:'Cicero, Pro Marcello 1'},
  {id:'t18', part:'division', text:'Differently, then, to be admonished are men and women; the young and the old; the poor and the rich.', src:'greg', cite:'Gregory, Pastoral Care III (Barmby)'},
  {id:'t19', part:'narration', text:'Cocles, (that defence the fortune of Rome had on that day,) who, happening to be posted on guard at the bridge, when he saw the Janiculum taken by a sudden assault.', src:'livy_r', cite:'Livy 2.10, Horatius'},
  {id:'t20', part:'refutation', text:'How you, O Athenians, have been affected by my accusers, I cannot tell; but I know that they almost made me forget who I was—so persuasively did they speak; and yet they have hardly uttered a word of truth.', src:'plato_jowett', cite:'Plato, Apology (Jowett)'}
];
const ENTHYMEMES = [
  {id:'e1', said:'Catiline still lives — and sits in the senate.', missing:'A man who plots the massacre of the senate ought not to sit in it.',
    distractors:['All senators live in Rome','Javelins always fly true','Helen is not to be blamed'], src:'cic_cat', cite:'Cicero, First Catilinarian 1.2'},
  {id:'e2', said:'My boy was struck by this young man’s javelin and died; I charge him with unintentional homicide.', missing:'Whoever caused a death, even without intent, is liable for the killing.',
    distractors:['The stronger is always just','Poetry is composition in meter','Athens should invade Sicily'], src:'antiphon', cite:'Antiphon, Second Tetralogy 3.1'},
  {id:'e3', said:'If logos deceived her, Helen is not culpable.', missing:'One who is acted on by a cause as strong as a drug or a kidnapper’s hand is not the author of the act.',
    distractors:['All praise is epideictic','The jury must be well-disposed','Metaphor is the soul of style'], src:'gorgias_vh', cite:'Gorgias, Helen 8–14'},
  {id:'e4', said:'A democracy is incapable of empire — so Cleon, urging that Mytilene be punished without reopening the case.', missing:'To hold empire one must be willing to punish without being talked out of it.',
    distractors:['All democracies are just','The funeral oration is forensic','Solon was happier than Croesus'], src:'thuc_crawley', cite:'Thucydides 3.37, Cleon'},
  {id:'e5', said:'I have not lived so long, Lacedaemonians, without having had the experience of many wars.', missing:'Experience of war teaches that it is not to be longed for as a good.',
    distractors:['Sparta has no assembly','Pathos is the only pistis','The boy ran out on purpose'], src:'thuc_crawley', cite:'Thucydides 1.80, Archidamus'},
  {id:'e6', said:'We do not copy our neighbours, but are an example to them.', missing:'What is original and successful is more to be praised than what is borrowed.',
    distractors:['All copying is theft','Juries judge the future','Augustine forbids eloquence'], src:'thuc_crawley', cite:'Thucydides 2.37, Pericles'},
  {id:'e7', said:'The unwritten laws of Heaven were not born today nor yesterday; they die not, and none knows their birth.', missing:'A human decree cannot override a law that is not of human making.',
    distractors:['Creon is the author of divine law','Antigone is a deliberative speech to an assembly','All laws are written'], src:'soph_storr', cite:'Sophocles, Antigone 450–457 (Storr)'},
  {id:'e8', said:'Men are not born with the art of politics; Zeus sent Hermes with dike and aidos for all.', missing:'If justice and shame had been given only to a few, cities could not stand.',
    distractors:['Only philosophers should rule from birth','Helen went by violence only','The javelin is a tekmerion of intent'], src:'plato_jowett', cite:'Plato, Protagoras 322c–d (Jowett)'},
  {id:'e9', said:'The unexamined life is not worth living.', missing:'A life that is not worth living ought not to be chosen even to escape death.',
    distractors:['All Athenians examine their lives','The funeral oration is forensic','Javelins always miss the mark'], src:'plato_jowett', cite:'Plato, Apology (Jowett)'},
  {id:'e10', said:'The strong do what they can and the weak suffer what they must.', missing:'Right has no standing where power is unequal; only interest remains.',
    distractors:['Melos is a Spartan colony only in name','Pericles forbids counsel','All pity is weakness'], src:'thuc_crawley', cite:'Thucydides 5.89, Melian dialogue'},
  {id:'e11', said:'Inflict only such penalties as the laws have provided.', missing:'A penalty not in the law is itself a new crime against the republic.',
    distractors:['Caesar wishes the conspirators freed without trial','All fear is irascible','Helen went by love only'], src:'sallust_w', cite:'Sallust, Catiline 51, Caesar'},
  {id:'e12', said:'Give me chastity and continency, only not yet.', missing:'A prayer that postpones the good it names is still a love of the old disease.',
    distractors:['Augustine forbids all eloquence','Shame is only irascible','The senate sits in the temple of Jupiter'], src:'aug_pusey', cite:'Augustine, Confessions VIII (Pusey)'},
  {id:'e13', said:'I have a better right to command than others — I must begin with this as Nicias has attacked me.', missing:'The man whose private splendour brings the city profit is fit to command.',
    distractors:['Nicias has no ships','All epideictic is funeral oration','The javelin is a necessary sign of intent'], src:'thuc_crawley', cite:'Thucydides 6.16, Alcibiades'},
  {id:'e14', said:'An eloquent man must speak so as to teach, to delight, and to persuade.', missing:'These three offices belong to the same orator, not to three different arts.',
    distractors:['Delight is the only necessity','Forensic speech has no close','All signs are necessary'], src:'ddc', cite:'Augustine, De doctrina christiana IV'},
  {id:'e15', said:'There are but three considerable naval powers in Hellas—Athens, Corcyra, and Corinth—and if you allow two of these three to become one, you will have to fight the two together.', missing:'It is folly to let two naval powers combine against you when you might keep one as an ally.',
    distractors:['Corinth has no ships','Pity is the only passion of war','Catiline sits in the senate by right'], src:'thuc_crawley', cite:'Thucydides 1.36, Corcyra'},
  {id:'e16', said:'To-day has brought to a close the long silence which I had observed during the recent troubles.', missing:'When the republic can again hear a free voice, the orator ought to speak.',
    distractors:['Marcellus was never pardoned','All silence is shame','The Melian dialogue is epideictic'], src:'cic_orat', cite:'Cicero, Pro Marcello 1'},
  {id:'e17', said:'Fear not, for you shall not be confounded — so the poor are to be comforted, while the rich are to be made afraid of elation.', missing:'The same vice is not cured by the same word in every hearer.',
    distractors:['Gregory forbids preaching to the rich','All hearers are moved only by fear','Figures replace a doctrine of the hearer'], src:'greg', cite:'Gregory, Pastoral Care III'},
  {id:'e18', said:'Although I am afraid, gentlemen of the jury, that fear is unseemly in a speech for the bravest of men.', missing:'If even the advocate of the brave man is afraid, the danger to the republic is real.',
    distractors:['Milo asked to be left undefended','All exordia are captationes','The javelin proves intent'], src:'cic_cat', cite:'Cicero, Pro Milone 1'}
];
const PASSIONS = [
  {id:'p1', name:'anger', appetite:'irascible', text:'How much further, Catilina, will you carry your abuse of our forbearance?', cite:'Cicero, Catilinarian 1.1', src:'cic_cat', why:'Aristotle II.2: anger is a desire, accompanied by pain, for conspicuous revenge, toward one who has slighted us.'},
  {id:'p2', name:'pity', appetite:'concupiscible', text:'My boy, struck in the side on the training field by a javelin thrown by this young man, died on the spot.', cite:'Antiphon 3.1.1', src:'antiphon', why:'Pity is pain at a destructive evil happening to one who does not deserve it (Aristotle II.8).'},
  {id:'p3', name:'fear', appetite:'irascible', text:'There are here, here among our fellow-senators, men who are meditating the destruction of us all, the total ruin of this city.', cite:'Cicero, Catilinarian 1.4', src:'cic_cat', why:'Fear is a pain due to imagining a future destructive evil (II.5).'},
  {id:'p4', name:'shame', appetite:'concupiscible', text:'Give me chastity and continency, only not yet.', cite:'Augustine, Confessions VIII (Pusey)', src:'aug_pusey', why:'Shame is pain about evils that seem to bring discredit (II.6). Augustine stages the divided will.'},
  {id:'p5', name:'indignation', appetite:'irascible', text:'Alas! what degenerate days are these! The senate is well aware of the facts… but the criminal still lives.', cite:'Cicero, Catilinarian 1.2', src:'cic_cat', why:'Indignation is pain at undeserved good fortune (II.9) — here, the good of going unpunished.'},
  {id:'p6', name:'confidence', appetite:'irascible', text:'We throw open our city to the world, and never by alien acts exclude foreigners from any opportunity of learning or observing.', cite:'Thucydides 2.39, Pericles', src:'thuc_crawley', why:'Confidence is the opposite of fear: imagination of safety (II.5).'},
  {id:'p7', name:'love', appetite:'concupiscible', text:'Too late loved I Thee, O Thou Beauty of ancient days, yet ever new!', cite:'Augustine, Confessions X (Pusey)', src:'aug_pusey', why:'Love is the motion toward a good taken as such. The apostrophe is pathos and prayer at once.'},
  {id:'p8', name:'kindness', appetite:'concupiscible', text:'My nature is for mutual love, not hate.', cite:'Sophocles, Antigone (Storr)', src:'soph_storr', why:'Kindness as a settled wish for another’s good. Antigone names her ethos as a passion that has become character.'},
  {id:'p9', name:'hatred', appetite:'concupiscible', text:'To what destiny of mine, O conscript fathers, shall I say that it is owing, that none for the last twenty years has been an enemy to the republic without at the same time declaring war against me?', cite:'Cicero, Philippic 1', src:'cic_orat', why:'Hatred is a settled wish for another’s ill, without the pain of anger (II.4). Cicero makes the enemy of the republic his own.'},
  {id:'p10', name:'fear', appetite:'irascible', text:'Although I am afraid, gentlemen of the jury, that fear is an unseemly condition in which to begin a speech in defence of the bravest of men.', cite:'Cicero, Pro Milone 1', src:'cic_cat', why:'The advocate’s fear is itself the argument: the danger is present and public (II.5).'},
  {id:'p11', name:'emulation', appetite:'irascible', text:'Athenian guest, much report of thee has come to us, both in regard to thy wisdom and thy wanderings… a desire has come upon me to ask thee whether thou hast seen any whom thou deemest to be the happiest.', cite:'Herodotus 1.30, Croesus to Solon', src:'herodotus', why:'Emulation is pain at seeing goods one might have (II.11). Croesus wants the name of happiest.'},
  {id:'p12', name:'pity', appetite:'concupiscible', text:'My children, latest born to Cadmus old, Why sit ye here as suppliants, in your hands Branches of olive filleted with wool?', cite:'Sophocles, Oedipus Tyrannus (Storr)', src:'soph_storr', why:'The city as children, the plague as undeserved evil: the king is moved to pity before he is moved to inquiry (II.8).'},
  {id:'p13', name:'anger', appetite:'irascible', text:'When I reflect on the causes of the war, and the circumstances of our situation, I feel a strong persuasion that our united efforts on the present day will prove the beginning of universal liberty to Britain.', cite:'Tacitus, Agricola, Calgacus (Murphy)', src:'tacitus_cb', why:'Anger at a slight to a free people, joined with hope of revenge (II.2).'},
  {id:'p14', name:'love', appetite:'concupiscible', text:'But what do I love, when I love Thee? not beauty of bodies, nor the fair harmony of time, nor the brightness of the light.', cite:'Augustine, Confessions X (Pusey)', src:'aug_pusey', why:'Love seeking its object by denying lesser goods (II.4; Aquinas I–II on the concupiscible).'},
  {id:'p15', name:'confidence', appetite:'irascible', text:'If your courage and fidelity had not been sufficiently proved by me, this favorable opportunity would have occurred to no purpose; mighty hopes, absolute power, would in vain be within our grasp.', cite:'Sallust, Catiline 20', src:'sallust_w', why:'Confidence as imagination of safety and of goods within reach (II.5) — here, a conspirator’s confidence.'},
  {id:'p16', name:'shame', appetite:'concupiscible', text:'How you, O Athenians, have been affected by my accusers, I cannot tell; but I know that they almost made me forget who I was—so persuasively did they speak; and yet they have hardly uttered a word of truth.', cite:'Plato, Apology (Jowett)', src:'plato_jowett', why:'Socrates would have the jury feel the shame of being moved by a lie (II.6).'},
  {id:'p17', name:'indignation', appetite:'irascible', text:'Haste and anger are the two things most opposed to good counsel.', cite:'Thucydides 3.42, Diodotus', src:'thuc_crawley', why:'Diodotus would have the assembly feel indignation at being rushed, not only pity for Mytilene (II.9).'},
  {id:'p18', name:'kindness', appetite:'concupiscible', text:'The ruler should be a near neighbour to every one in sympathy, and exalted above all in contemplation, so that through the bowels of loving-kindness he may transfer the infirmities of others to himself.', cite:'Gregory, Pastoral Care II (Barmby)', src:'greg', why:'Kindness as wishing another’s good and taking his ills as one’s own (II.7).'}
];
const DEBATES = [
  {id:'d-arch', title:'War with Athens', a:{who:'Archidamus', pid:'thuc-arch-1', claim:'Do not rush to war; experience teaches its cost.'}, b:{who:'Sthenelaidas', pid:'thuc-sthen-1', claim:'Vote the war; the Athenians are in the wrong.'}, species:'deliberative', src:'thuc_crawley', locus:'Thucydides 1.80 / 1.86'},
  {id:'d-myt', title:'Mytilene', a:{who:'Cleon', pid:'thuc-cleon-1', claim:'A democracy that talks cannot hold empire; do not reopen the sentence.'}, b:{who:'Diodotus', pid:'thuc-diod-1', claim:'Haste and anger are the two things most opposed to good counsel.'}, species:'deliberative', src:'thuc_crawley', locus:'Thucydides 3.37 / 3.42'},
  {id:'d-fun', title:'Pericles’ funeral oration', a:{who:'Pericles (the custom)', pid:'thuc-fun-1', claim:'I shall speak of the city, not only of the men.'}, b:{who:'Pericles (the city)', pid:'thuc-fun-2', claim:'Our constitution does not copy our neighbours; we are an example.'}, species:'epideictic', src:'thuc_crawley', locus:'Thucydides 2.35 / 2.37'},
  {id:'d-cat', title:'The Catilinarian conspirators', a:{who:'Catiline', pid:'sal-cat-consp', claim:'The conspirators are called to dare, as men dispossessed.'}, b:{who:'Caesar', pid:'sal-caes-1', claim:'Inflict only such penalties as the laws have provided.'}, species:'deliberative', src:'sallust_w', locus:'Sallust, Catiline 20 / 51'},
  {id:'d-ant', title:'The javelin', a:{who:'The father (prosecution)', pid:'ant-3.1.1', claim:'Unintentional homicide; the thrower caused the death.'}, b:{who:'The thrower (defence)', pid:'ant-3.2.1', claim:'Misfortune forces the quiet man into court; the running-out is the cause.'}, species:'forensic', src:'antiphon', locus:'Antiphon 3.1 / 3.2'},
  {id:'d-ap', title:'Socrates before the jury', a:{who:'The accusers (as Socrates reports them)', pid:'plato-ap-1', claim:'Beware his eloquence; he is a clever speaker.'}, b:{who:'Socrates', pid:'plato-ap-2', claim:'The unexamined life is not worth living; he will not beg.'}, species:'forensic', src:'plato_jowett', locus:'Plato, Apology (Jowett)'}
];
const GREG_PAIRS = [
  {id:'g1', pair:'the joyful and the sad', why:'The joyful are to be checked lest they run to excess; the sad are to be comforted lest they break.', src:'greg'},
  {id:'g2', pair:'the humble and the proud', why:'The humble are to be praised carefully, lest praise become a snare; the proud are to be rebuked, lest silence confirm them.', src:'greg'},
  {id:'g3', pair:'the silent and the talkative', why:'The silent must be drawn to a useful word; the talkative must be taught to spare the hearer.', src:'greg'},
  {id:'g4', pair:'the young and the old', why:'The young are to be admonished to keep order; the old to be asked for the example their years already claim.', src:'greg'},
  {id:'g5', pair:'men and women', why:'Heavier injunctions are laid on the one, lighter on the other, that those may be exercised by great things and these winningly converted by light ones.', src:'greg'},
  {id:'g6', pair:'the poor and the rich', why:'The poor are to be offered the solace of comfort against tribulation; the rich are to be made afraid of elation.', src:'greg'},
  {id:'g7', pair:'subjects and prelates', why:'Subjects must not be crushed by subjection; prelates must not be elated by place, nor command more than is just.', src:'greg'},
  {id:'g8', pair:'servants and masters', why:'Servants are to be admonished that they despise not their masters; masters, that they forget not they have a Master in heaven.', src:'greg'},
  {id:'g9', pair:'the wise of this world and the dull', why:'The wise must not trust their own cleverness; the dull must not despair of being taught.', src:'greg'},
  {id:'g10', pair:'the impudent and the bashful', why:'The impudent are to be checked by open rebuke; the bashful are to be drawn on by gentle encouragement.', src:'greg'},
  {id:'g11', pair:'the gluttonous and the abstinent', why:'The gluttonous are to be restrained from the belly; the abstinent are to be kept from pride in their restraint.', src:'greg'},
  {id:'g12', pair:'the merciful and the envious', why:'The merciful are to be praised without being taught to spare justice; the envious are to be shown another’s good as no theft from themselves.', src:'greg'},
  {id:'g13', pair:'the peaceful and the brawlers', why:'The peaceful are to be kept from a false peace that hides the wound; the brawlers are to be taught the cost of a quarrel.', src:'greg'},
  {id:'g14', pair:'those who preach and those who are silent in the office of preaching', why:'Those who preach must not neglect their own life; those who are silent in the office must not hide the talent.', src:'greg'}
];
const FIGURE_GLOSS = {
  anaphora:'the same word at the head of successive members',
  antithesis:'opposed thoughts set in parallel frames',
  apostrophe:'a turn to address someone, present or absent',
  tricolon:'three coordinated members, often rising',
  isocolon:'members of roughly equal length and shape',
  homoeoteleuton:'like endings on successive clauses',
  metaphor:'naming one thing with another’s name, on a seen likeness',
  irony:'saying less, or the opposite, to mean more',
  'rhetorical question':'a question that is a charge, not a request for information',
  chiasmus:'crossed order, ABBA',
  epizeuxis:'immediate repetition of the same word',
  sententia:'a compressed general claim',
  climax:'members rising in force',
  asyndeton:'coordination without conjunctions',
  personification:'treating an abstraction as an agent',
  simile:'a likeness with like or as',
  hyperbole:'deliberate excess',
  occupatio:'anticipating an objection',
  praeteritio:'claiming to pass over what you thereby name',
  hypotyposis:'vivid bringing-before-the-eyes',
  exclamatio:'an open cry',
  correctio:'taking back a word to put a sharper one',
  enumeratio:'a numbered or listed unfolding',
  dilemma:'a choice of two, both costly',
  mythos:'a story offered as explanation',
  definition:'an argument from what the thing is called',
  ethos:'character doing the work of proof',
  pathos:'the hearer’s passion doing the work of proof',
  prooimion:'an opening that does the office of an exordium',
  exordium:'the opening office of the speech',
  exemplum:'an example used as proof',
  hendiadys:'one idea through two coordinated nouns',
  litotes:'understatement by denying the contrary',
  parenthesis:'a break that inserts a second voice',
  hypothesis:'a supposed case used as argument',
  prosopopoeia:'giving a voice to the absent or the dead',
  epithet:'a characterizing adjunct'
};
const SPEECH_FIGURES = {
  anaphora:1, antithesis:1, apostrophe:1, tricolon:1, isocolon:1, homoeoteleuton:1,
  metaphor:1, irony:1, 'rhetorical question':1, chiasmus:1, epizeuxis:1, sententia:1,
  climax:1, asyndeton:1, personification:1, simile:1, hyperbole:1, occupatio:1,
  praeteritio:1, hypotyposis:1, exclamatio:1, correctio:1, enumeratio:1, dilemma:1,
  hendiadys:1, litotes:1, parenthesis:1, prosopopoeia:1, epithet:1
};
function isSpeechFigure(name){ return !!SPEECH_FIGURES[name]; }
function speechSpans(p){ return (p.spans||[]).filter(s => isSpeechFigure(s.figure)); }
function isOration(p){
  if(!p) return false;
  if(/Douay|Matthew|Paul|John/.test(p.author||'')) return false;
  if(/Homer|Virgil|Boethius/.test(p.author||'')) return false;
  if(/Pastoral Rule|Consolation|Confessions/.test(p.work||'')) return false;
  return !!speciesOf(p);
}
const PISTEIS_ITEMS = [
  {pid:'cic-cat1-1', pistis:'pathos', why:'The questions are not for information; they put the senate into alarm and shame.'},
  {pid:'ant-3.2.1', pistis:'ethos', why:'The quiet man, forced into court against his nature: character as proof.'},
  {pid:'gor-hel-8', pistis:'logos', why:'A claim about what logos is, offered as the ground of Helen’s acquittal.'},
  {pid:'thuc-diod-1', pistis:'logos', why:'Diodotus argues from the nature of counsel: haste and anger oppose good deliberation.'},
  {pid:'ant-3.1.1', pistis:'logos', why:'Facts agreed; the charge is a description of cause.'},
  {pid:'plato-ap-1', pistis:'ethos', why:'Socrates refuses the usual captatio; the manner of speaking is the proof of the man.'},
  {pid:'aug-chast', pistis:'pathos', why:'The divided will is staged so that the hearer feel the shame of “not yet.”'},
  {pid:'thuc-fun-2', pistis:'ethos', why:'Athens is characterized; the city’s ethos becomes the speaker’s.'},
  {pid:'sal-caes-1', pistis:'logos', why:'Caesar argues from the laws and from the consequences of a novel penalty.'},
  {pid:'cic-cat1-4', pistis:'pathos', why:'“Where are we?” — fear and indignation before the proof is unfolded.'},
  {pid:'gor-hel-10', pistis:'pathos', why:'Song as witchery: the doctrine of pathos offered as a physics of the soul.'},
  {pid:'soph-ant-2', pistis:'ethos', why:'“My nature is for mutual love, not hate” — character named as the ground of the act.'},
  {pid:'cic-milo-1', pistis:'ethos', why:'The advocate’s confessed fear is made a proof of the man he defends, and of the danger.'},
  {pid:'thuc-arch-1', pistis:'ethos', why:'Age and experience of many wars: the speaker’s character is the reason to wait.'},
  {pid:'thuc-cleon-1', pistis:'logos', why:'Cleon argues from what empire is: a democracy that talks cannot hold it.'},
  {pid:'aug-ddc-12', pistis:'logos', why:'The three offices are distinguished by what they do, not by a display of feeling.'},
  {pid:'sal-cat-consp', pistis:'pathos', why:'Catiline moves the conspirators by hope, grievance, and the dare.'},
  {pid:'plato-ap-2', pistis:'ethos', why:'He will not beg; the manner of the man is the argument.'},
  {pid:'tac-cal-1', pistis:'pathos', why:'Calgacus puts the host into the mind of a last free people, with no land behind them.'},
  {pid:'dem-3', pistis:'logos', why:'Money, ships, a law that the force remain: a policy argued from its parts.'},
  {pid:'cic-marc-1', pistis:'ethos', why:'The long silence, grief not fear: Cicero’s character restored with Caesar’s clemency.'},
  {pid:'gor-hel-6', pistis:'logos', why:'Four causes named; the case is divided before it is proved.'},
  {pid:'ant-3.2.10', pistis:'pathos', why:'Pollution and the city’s danger if the killer walks: the hearer is put in fear.'},
  {pid:'thuc-fun-1', pistis:'ethos', why:'He will not praise as others have praised; the city’s character is his.'}
];
function pistisOf(p){
  const it = PISTEIS_ITEMS.find(x => x.pid === p.id);
  return it ? it.pistis : '';
}
const ETHOS_ITEMS = [
  {id:'et1', pid:'plato-ap-1', which:'arete', label:'Virtue (arete)',
    why:'He will not borrow the law-court’s eloquence. The manner of the man is the proof of the man.'},
  {id:'et2', pid:'thuc-arch-1', which:'phronesis', label:'Practical wisdom (phronesis)',
    why:'Years and many wars: he asks to be trusted because he has seen what war costs.'},
  {id:'et3', pid:'ant-3.2.1', which:'arete', label:'Virtue (arete)',
    why:'The quiet man (apragmon), forced into court against his nature: character as argument.'},
  {id:'et4', pid:'cic-milo-1', which:'eunoia', label:'Goodwill (eunoia)',
    why:'Fear for the bravest of men and for the republic: the advocate’s goodwill is the opening.'},
  {id:'et5', pid:'plato-ap-2', which:'arete', label:'Virtue (arete)',
    why:'He will not beg for his life. The refusal is the man.'},
  {id:'et6', pid:'thuc-fun-2', which:'phronesis', label:'Practical wisdom (phronesis)',
    why:'Athens as original, not copy: the city’s wisdom is offered as the speaker’s credit.'},
  {id:'et7', pid:'cic-marc-1', which:'eunoia', label:'Goodwill (eunoia)',
    why:'The silence was grief, not fear; today he speaks again for the house — goodwill restored.'},
  {id:'et8', pid:'soph-ant-2', which:'arete', label:'Virtue (arete)',
    why:'“My nature is for mutual love, not hate”: she names the character from which the act follows.'},
  {id:'et9', pid:'thuc-diod-1', which:'phronesis', label:'Practical wisdom (phronesis)',
    why:'He argues from what counsel is. The credit he asks is that of a man who will not be rushed.'},
  {id:'et10', pid:'sal-caes-1', which:'phronesis', label:'Practical wisdom (phronesis)',
    why:'Penalty within the law: Caesar asks to be heard as the man who sees what a novel punishment costs the republic.'},
  {id:'et11', pid:'cic-cat1-1', which:'eunoia', label:'Goodwill (eunoia)',
    why:'The questions shame the senate into the consul’s side: goodwill toward the republic, shown as shared alarm.'},
  {id:'et12', pid:'aug-ddc-2', which:'eunoia', label:'Goodwill (eunoia)',
    why:'Truth must not stand unarmed: the Christian orator’s goodwill is for the hearer’s good, not for a fee.'}
];
const LEXIS_ITEMS = [
  {id:'lx1', pid:'gor-hel-8', kind:'style',
    prompt:'Does the argument here still stand if you strip the figures, or is the figure doing the work of the claim?',
    options:['The figure is the claim: speech as a potentate is a personification, not a proof from premises','The claim would stand in plain clauses: a policy is being argued from its parts','This is only narration of agreed facts','This is an inartistic proof, a written law'],
    correct:0, note:'Helen 8: logos as potentate. Remove the personification and the antithesis of frail frame and wonders, and the doctrine has little left but the image.'},
  {id:'lx2', pid:'thuc-diod-1', kind:'style',
    prompt:'Does the argument here still stand if you strip the figures, or is the figure doing the work of the claim?',
    options:['The figure is the claim; without the balance of members nothing is being argued','The claim would stand in plain clauses: haste and anger oppose good counsel','This is only an exordium of goodwill','This is epideictic praise of Athens'],
    correct:1, note:'Diodotus’s sentence can be said without isocolon. The argument is about counsel, not about the shape of the clause.'},
  {id:'lx3', pid:'ant-3.1.1', kind:'style',
    prompt:'Does the argument here still stand if you strip the figures, or is the figure doing the work of the claim?',
    options:['The figure is the whole case; there is no argument from cause','The facts and the charge would stand in plain clauses: a death, a throw, a name for the act','This is a funeral oration','This is style doing the work of a hymn'],
    correct:1, note:'The tetralogy’s first speech can be stripped of ornament and still be a charge. The fight is cause, not lexis.'},
  {id:'lx4', pid:'gor-hel-10', kind:'style',
    prompt:'Does the argument here still stand if you strip the figures, or is the figure doing the work of the claim?',
    options:['The witchery of song is argued by the sound and the image; the figure is doing the work','A plain policy remains: Athens should keep two naval powers from combining','This is only a list of the parts of an oration','This is a necessary sign of fever'],
    correct:0, note:'Song as witchery is a physics offered as figure. Aristotle will name the same fact as pathos, without the drug.'},
  {id:'lx5', pid:'sal-caes-1', kind:'style',
    prompt:'Does the argument here still stand if you strip the figures, or is the figure doing the work of the claim?',
    options:['Without the studied language of pity, Caesar has no case','The claim would stand in plain clauses: inflict only such penalties as the laws have provided','This is Gorgias’s four aitiai','This is an epideictic hymn'],
    correct:1, note:'Caesar can be plain. The argument is from the law and from consequence, not from the music of the members.'},
  {id:'lx6', pid:'cic-cat1-1', kind:'style',
    prompt:'The opening questions of the First Catilinarian — how much further, how much longer — are',
    options:['Only decoration, with no work on the hearer','Rhetorical questions that put the senate into alarm; the figure is doing pathos, and the charge is still there without them, but weaker','A complete proof from a necessary sign','The office of narration'],
    correct:1, note:'The questions are a charge. The fact they rest on (the conspiracy known) would remain in plain assertion; the questions are how the hearer is moved to feel it.'},
  {id:'lx7', pid:'thuc-fun-2', kind:'style',
    prompt:'“We do not copy our neighbours, but are an example to them.” If you drop the antithesis, what remains?',
    options:['Nothing: the whole praise was the figure','A claim about Athens that can still be judged true or false as praise','A forensic narration of a crime','A tetralogy’s second speech'],
    correct:1, note:'Antithesis serves the praise. The claim (Athens is original) is still a claim if you say it without the turn.'},
  {id:'lx8', pid:'gor-hel-6', kind:'style',
    prompt:'The four aitiai are listed in parallel members. Is the list a figure doing the work of argument, or an argument that happens to be figured?',
    options:['Only sound: there are not four causes, only four clauses','A division of the case: four causes, any one of which would acquit; the isocolon dresses a real partitio','A necessary sign of fever','An inartistic witness'],
    correct:1, note:'The four causes are a division (partitio). The equal members make them memorable. The argument would survive as a numbered list in plain prose.'},
  {id:'lx9', pid:'dem-3', kind:'style',
    prompt:'Demosthenes binds money, ships, cavalry, and a law that the force remain. Strip any figure you hear. What remains?',
    options:['Nothing but sound','A deliberative policy, argued from its parts','An encomium of Helen','A confession of delayed chastity'],
    correct:1, note:'A policy can be numbered. That is arrangement and logos, not Gorgian witchery.'},
  {id:'lx10', pid:'aug-ddc-24', kind:'style',
    prompt:'Augustine at Caesarea wanted tears, not applause. On his account, the grand style has succeeded when',
    options:['The members are equal and the endings match','The hearer is moved to a change of life, even if the room is silent','The preacher is known for isocolon','All figures have been suppressed as worldly'],
    correct:1, note:'DDC IV: the majestic style is known by tears. Style is for an office (movere), not for display.'}
];
const AUG_ITEMS = [
  {id:'au1', pid:'aug-ddc-12',
    prompt:'Augustine, following Cicero: to teach, to delight, to persuade. Which of the three is a necessity?',
    options:['To delight — without pleasure no one listens','To teach — teaching depends on what we say; the other two on the way we say it','To persuade — applause is the test','None: a Christian must not use rhetoric'],
    correct:1, note:'DDC IV: to teach is a necessity, to delight a beauty, to persuade a triumph. Teaching is in the matter; the other two in the manner.'},
  {id:'au2', pid:'aug-ddc-17',
    prompt:'Which style does Augustine assign to teaching?',
    options:['The grand (grande), because teaching must move to tears','The subdued (summissum), for being understood','The temperate (temperatum), for praise and blame only','No style: teaching is not speaking'],
    correct:1, note:'Subdued for teaching, temperate for delighting, grand for moving. Mix them. Do not use the grand style everywhere.'},
  {id:'au3', pid:'aug-ddc-24',
    prompt:'The sign that the grand style has done its office is',
    options:['Applause and the preacher’s name','Tears, and a change — at Caesarea, the Caterva ended','A perfect homoeoteleuton in every member','The suppression of all Cicero'],
    correct:1, note:'He asked for groans, not cheers. The Caterva story is the emblem of movere.'},
  {id:'au4', pid:'aug-ddc-2',
    prompt:'Why may the Christian use rhetoric?',
    options:['Because winning a case for pay is the end of the art','Because truth must not stand unarmed against those who use the art for falsehood','Because figures are themselves sacraments','Because Augustine forbids the subdued style'],
    correct:1, note:'DDC IV: the art is available for truth or falsehood. Who will dare say that truth should take the field unarmed?'},
  {id:'au5', pid:'aug-ddc-17',
    prompt:'The temperate style, on Augustine’s map, is especially for',
    options:['Teaching a difficult doctrine','Praise and blame — to delight, and to make the good attractive','Moving a mob to arms only','Silent prayer'],
    correct:1, note:'Temperate for delectare: the good is shown as lovely. Grand for movere: the will is pushed to act.'},
  {id:'au6', pid:'aug-serm-1',
    prompt:'A sermon that opens by asking to be heard as God’s word in an earthen vessel is chiefly',
    options:['Display of the preacher’s ethos as a sophist','Teaching (docere) in the subdued style, with a little ethos of humility','A forensic narration of a homicide','Gorgias’s four aitiai'],
    correct:1, note:'The treasure in earthen vessels is a teaching opening. Humility is ethos; the office is still docere.'},
  {id:'au7', pid:'aug-ddc-12',
    prompt:'“To teach is a necessity, to delight is a beauty, to persuade is a triumph.” The three offices are',
    options:['Three different arts, for three different men','The same orator’s three offices, kept from Cicero and turned to Scripture’s end','A rejection of all pagan rhetoric','The six parts of the Latin oration'],
    correct:1, note:'Augustine keeps Cicero’s offices and changes the end. The Christian orator serves a truth already found.'},
  {id:'au8', pid:'aug-ddc-24',
    prompt:'If the room shouts and does not weep, Augustine’s judgment of a grand-style sermon is that',
    options:['It has succeeded: noise is the test','It has not yet done the office of moving (movere)','It has proved the four aitiai','It has completed a tetralogy'],
    correct:1, note:'Applause can be the temperate style’s delight. The grand style is for a change of life.'}
];
function passages(){ return window.PASSAGES || []; }
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
function pickPass(pred, prefix){
  const pool = pred ? passages().filter(pred) : passages();
  const arr = pool.length ? pool : passages();
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
  instr:'Name the species by the hearer’s office: forensic (past, just/unjust), deliberative (future, expedient), epideictic (present, noble/shameful). Ten questions make a set; at difficulty 1 each is worth 10, and 100 completes the set.',
  src:['arist_rhet'],
  gen(diff){
    const p = pickPass(x => isOration(x), 'sp:');
    const sp = speciesOf(p);
    const labels = {
      forensic:'Forensic — the jury, the past, the just and the unjust',
      deliberative:'Deliberative — the assembly, the future, the expedient',
      epideictic:'Epideictic — the spectator, praise and blame, the noble'
    };
    const opts = ['forensic','deliberative','epideictic'];
    const cue = diff <= 2 ? '<div class="q-cue">'+esc(p.cue||'')+'</div>' : '';
    return mcQ({
      prompt:'What is the species of this speech?',
      options: opts.map(k => labels[k]),
      correct: opts.indexOf(sp),
      passage: cue + esc(excerpt(p, diff >= 4 ? 280 : 420)),
      source: citeP(p), orig: p.orig, olang: p.olang, src: srcOf(p),
      note: sp.charAt(0).toUpperCase()+sp.slice(1)+'. Aristotle I.3: the species follows the hearer’s judgment.',
      also: labels[sp]
    });
  }
};
EX.pisteis = {
  id:'pisteis', title:'The Three Pisteis',
  instr:'Is the work here chiefly the speaker’s character (ethos), the hearer’s passions (pathos), or the argument (logos)? Real passages. Ten questions make a set; a passage is not repeated in the set.',
  src:['arist_rhet'],
  gen(diff){
    const item = pickSeen(PISTEIS_ITEMS, x => 'pi:'+x.pid);
    const p = passages().find(x => x.id === item.pid) || pickPass(null, 'pi');
    const names = ['ethos','pathos','logos'];
    const cue = diff <= 2 ? '<div class="q-cue">'+esc(p.cue||item.why)+'</div>' : '';
    return mcQ({
      prompt:'Which pistis is doing the chief work in this passage?',
      options:['Ethos — the speaker as the speech shows him','Pathos — the hearer’s frame of mind','Logos — the argument of the speech itself'],
      correct: names.indexOf(item.pistis),
      passage: cue + esc(excerpt(p, diff >= 4 ? 240 : 400)),
      source: citeP(p), orig: p.orig, olang: p.olang, src: srcOf(p),
      note: item.pistis.charAt(0).toUpperCase()+item.pistis.slice(1)+'. '+item.why,
      also:'Aristotle I.2: a passage may use more than one; name the one that is carrying the moment.'
    });
  }
};
EX.enthymeme = {
  id:'enthymeme', title:'Supply the Missing Premise',
  instr:'The rhetorical syllogism (enthymeme) leaves a premise for the hearers to supply. Name it. Ten questions make a set; an example is not repeated in the set.',
  src:['arist_rhet'],
  gen(diff){
    const e = pickSeen(ENTHYMEMES, x => 'en:'+x.id);
    const extra = diff <= 2 ? e.distractors.slice(0,2) : e.distractors;
    const options = [e.missing].concat(extra);
    return mcQ({
      prompt:'The speech says: <em>'+esc(e.said)+'</em><br><br>What premise are the hearers meant to supply?',
      options, correct:0, source:e.cite, src:e.src,
      note:'The missing premise is the one that makes the said into an argument: <em>'+esc(e.missing)+'</em>',
      also:'Aristotle I.2: the enthymeme is a syllogism; the audience completes it.'
    });
  }
};
EX.ethos = {
  id:'ethos', title:'Character in the speech',
  instr:'Aristotle: we trust a speaker for practical wisdom (phronesis), virtue (arete), or goodwill (eunoia) — shown in the speech, not borrowed as a reputation from outside. Name which of the three is doing the work. Ten questions; a passage is not repeated in the set.',
  src:['arist_rhet'],
  gen(diff){
    const e = pickSeen(ETHOS_ITEMS, x => 'et:'+x.id);
    const p = passages().find(x => x.id === e.pid);
    const labels = [
      {v:'phronesis', lab:'Practical wisdom (phronesis) — he seems to know what to do'},
      {v:'arete', lab:'Virtue (arete) — he seems a good man'},
      {v:'eunoia', lab:'Goodwill (eunoia) — he seems to wish the hearers well'}
    ];
    const cue = diff <= 2 ? '<div class="q-cue">'+esc(e.why)+'</div>' : '';
    return mcQ({
      prompt:'Which of the three artistic reasons for trust is this speech chiefly showing?',
      options: labels.map(x => x.lab),
      correct: labels.findIndex(x => x.v === e.which),
      passage: cue + (p ? esc(excerpt(p, diff>=4?240:400)) : ''),
      source: p ? citeP(p) : '', orig: p && p.orig, olang: p && p.olang, src: p ? srcOf(p) : 'arist_rhet',
      note: e.label+'. '+e.why,
      also:'Reputation named from outside the speech is an inartistic proof. Ethos here is what the speech itself shows.'
    });
  }
};
EX.pathos = {
  id:'pathos', title:'Name the Passion',
  instr:'Aristotle’s passions (Rhetoric II) with Aquinas’s passions of attraction (concupiscible) and of repulsion (irascible). Ten questions make a set; a passage is not repeated in the set.',
  src:['arist_rhet','aquinas_st'],
  gen(diff){
    const e = pickSeen(PASSIONS, x => 'pa:'+x.id);
    const names = [...new Set(PASSIONS.map(p => p.name))];
    const rest = names.filter(n => n !== e.name);
    const options = [e.name].concat(rest.slice(0, diff <= 2 ? 2 : 3));
    return mcQ({
      prompt:'Which passion is being moved?',
      options: options.map(n => n.charAt(0).toUpperCase()+n.slice(1)),
      correct:0, passage:esc(e.text), source:e.cite, src:e.src,
      note: e.name.charAt(0).toUpperCase()+e.name.slice(1)+' ('+e.appetite+'). '+e.why,
      also: diff >= 4 ? 'Aquinas I–II: irascible passions take an arduous object; concupiscible take good or evil as such.' : ''
    });
  }
};
EX.taxis = {
  id:'taxis', title:'Name the Part',
  instr:'Cicero’s six offices: opening (exordium), facts (narratio), laying-out (partitio), proof (confirmatio), answer to the other side (reprehensio), close (peroratio). Ten questions make a set; a passage is not repeated in the set.',
  src:['cic_inv'],
  gen(diff){
    const e = pickSeen(TAXIS_ITEMS, x => 'tx:'+x.id);
    const names = TAXIS_PARTS.map(t => t.key);
    const options = [e.part].concat(names.filter(n => n !== e.part).slice(0,3));
    const labels = {};
    TAXIS_PARTS.forEach(t => { labels[t.key] = t.name + ' — ' + t.duty; });
    return mcQ({
      prompt:'Which office of the oration is this part of the passage performing?',
      options: options.map(k => labels[k]), correct:0,
      passage:esc(e.text), source:e.cite, src:e.src,
      note: TAXIS_PARTS.find(t=>t.key===e.part).name+'. '+TAXIS_PARTS.find(t=>t.key===e.part).duty,
      also: diff >= 3 ? 'Aristotle is content with four; the Latin six name offices you can actually see.' : ''
    });
  }
};
EX.taxisorder = {
  id:'taxisorder', title:'The six offices',
  instr:'The Latin school’s six offices: their duties, their order, and when one of them shrinks. A set is six questions; you will not be asked to put the same list in order ten times.',
  src:['cic_inv'],
  setLen:6,
  gen(diff){
    const duties = TAXIS_PARTS.map(p => ({k:'duty', part:p.key}));
    const pairs = [];
    for(let i = 0; i < TAXIS_PARTS.length-1; i++){
      pairs.push({k:'first', a:TAXIS_PARTS[i].key, b:TAXIS_PARTS[i+1].key});
    }
    const kinds = [{k:'order'}, {k:'shrink'}].concat(duties).concat(pairs);
    const item = pickSeen(kinds, x => 'txo:'+x.k+':'+(x.part||'')+':'+(x.a||'')+':'+(x.b||''));
    const labels = {};
    TAXIS_PARTS.forEach(t => { labels[t.key] = t.name + ' — ' + t.duty; });
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
                                    : 'School order: opening → facts → points in dispute → proof → the other side → close.',
            also:'De inventione I. The six are offices. A tetralogy may shrink narration.'};
        }
      };
    }
    if(item.k === 'shrink'){
      return mcQ({
        prompt:'When the facts are agreed and only the cause is in dispute, which office shrinks?',
        options:['Peroration — there is nothing to feel','Narration — the story is not the fight','Proof — there are no arguments left','Exordium — the jury is already paying attention'],
        correct:1, src:'cic_inv',
        note:'Narration can be a sentence. Proof and refutation swell. Antiphon’s tetralogy is built on that.',
        also:'The six are offices, not a template. A funeral oration is not a proof of a crime.'
      });
    }
    if(item.k === 'first'){
      const A = TAXIS_PARTS.find(t => t.key===item.a);
      const B = TAXIS_PARTS.find(t => t.key===item.b);
      return mcQ({
        prompt:'In the Latin school order, which office comes first?',
        options:[A.name+' — '+A.duty, B.name+' — '+B.duty, 'They are the same office under two names', 'Neither: both belong only to epideictic'],
        correct:0, src:'cic_inv',
        note: A.name+' precedes '+B.name+'. School order: opening, facts, points in dispute, proof, the other side, close.',
        also:'Proof and refutation are two offices. Do not collapse them.'
      });
    }
    const part = TAXIS_PARTS.find(t => t.key===item.part);
    const others = TAXIS_PARTS.filter(t => t.key!==item.part);
    const opts = [part].concat(diff<=2 ? others.slice(0,2) : others.slice(0,3));
    return mcQ({
      prompt:'Which office has this duty: <em>'+esc(part.duty)+'</em>',
      options: opts.map(t => t.name),
      correct:0, src:'cic_inv',
      note: part.name+' — '+part.duty,
      also:'Name the duty, then you can find it in a speech even when the speech does not use all six.'
    });
  }
};
EX.lexis = {
  id:'lexis', title:'Style and the argument',
  instr:'Aristotle: let style be clear, and do not make the figures do the work of the argument. Read the passage. Does the claim still stand in plain clauses, or is the figure the claim? Ten questions; a passage is not repeated in the set.',
  src:['arist_rhet','gorgias_vh'],
  gen(diff){
    const e = pickSeen(LEXIS_ITEMS, x => 'lx:'+x.id);
    const p = passages().find(x => x.id === e.pid);
    const cue = diff <= 2 ? '<div class="q-cue">'+(p ? esc(p.cue||'') : '')+'</div>' : '';
    return mcQ({
      prompt: e.prompt,
      options: e.options, correct: e.correct,
      passage: cue + (p ? esc(excerpt(p, diff>=4?240:400)) : ''),
      source: p ? citeP(p) : '', orig: p && p.orig, olang: p && p.olang, src: p ? srcOf(p) : 'arist_rhet',
      note: e.note,
      also:'Clarity first. Ornament second. The sophistic vice is to make the style do the work of the argument.'
    });
  }
};
EX.figclick = {
  id:'figclick', title:'Click the Figure',
  instr:'A real excerpt. Click the part of the passage that is the named figure. Ten questions; a passage is not repeated in the set.',
  src:['cic_cat','gorgias_vh'],
  gen(diff){
    const p = pickPass(x => speechSpans(x).length >= (diff >= 4 ? 2 : 1), 'fc:');
    const spans = speechSpans(p);
    const target = (diff <= 2) ? spans[0] : rand(spans);
    const gloss = FIGURE_GLOSS[target.figure] || target.why;
    const cue = diff <= 2 ? '<div class="q-cue">'+esc(p.cue||'')+'</div>' : '';
    return {
      kind:'figclick',
      prompt:'Click the part of the passage that is <strong>'+esc(target.figure)+'</strong> <span style="color:var(--ink-soft);font-style:italic">('+esc(gloss)+')</span>.',
      passageHtml: cue + wrapFigs(p.text, spans, target.figure),
      source: citeP(p), orig: p.orig, olang: p.olang, target: target.figure, why: target.why, src: srcOf(p),
      check(ans){
        const right = String(ans) === String(target.figure);
        return {right, note: right ? target.why : 'The '+target.figure+' is this: “'+p.text.slice(target.start, target.end)+'” — '+target.why,
          also: figNames(p).filter(f=>f!==target.figure).join(' · ')};
      }
    };
  }
};
EX.figwhich = {
  id:'figwhich', title:'Which Excerpt?',
  instr:'Four real passages. Which one is using the named figure? Ten to a set; a passage is not reused.',
  src:['cic_cat'],
  gen(diff){
    const figs = Object.keys(FIGURE_GLOSS).filter(f => isSpeechFigure(f) && withFig(f).length >= 1);
    const fig = pickSeen(figs, f => 'fwfig:'+f);
    const yes = pickPass(x => withFig(fig).indexOf(x)>=0, 'fwy:');
    const nos = sample(passages().filter(p => p.id !== yes.id && figNames(p).indexOf(fig) < 0), 3);
    const optsP = [yes].concat(nos);
    return mcQ({
      prompt:'Which excerpt is using <strong>'+esc(fig)+'</strong> <em>('+esc(FIGURE_GLOSS[fig]||'')+')</em>?',
      options: optsP.map(p => '<span style="font-size:16px">'+esc(excerpt(p, diff<=2?160:120))+'</span><br><span style="font-size:14px;color:var(--ink-soft);font-style:italic">'+citeP(p)+'</span>'),
      correct:0, src: srcOf(yes),
      note: citeP(yes)+'. '+((yes.spans.find(s=>s.figure===fig)||{}).why || FIGURE_GLOSS[fig]),
      also:'Figures of speech love tragedy and Gorgias equally — the test is whether you can still hear them in Cicero’s English.'
    });
  }
};
function figSet(id, title, instr, pred, src){
  return {
    id, title, instr, src,
    gen(diff){
      const p = pickPass(x => pred(x) && speechSpans(x).length, id+':');
      const spans = speechSpans(p);
      const target = (diff <= 2) ? spans[0] : rand(spans);
      const cue = diff <= 2 ? '<div class="q-cue">'+esc(p.cue||'')+'</div>' : '';
      const gloss = diff<=2 ? ' <em>('+esc(FIGURE_GLOSS[target.figure]||target.why||'')+')</em>' : '';
      return {
        kind:'figclick',
        prompt:'Click the part of the passage that is <strong>'+esc(target.figure)+'</strong>.'+gloss,
        passageHtml: cue + wrapFigs(p.text, spans, target.figure),
        source: citeP(p), orig:p.orig, olang:p.olang, target:target.figure, why:target.why, src: srcOf(p),
        check(ans){
          const right = String(ans) === String(target.figure);
          return {right, note: target.why || FIGURE_GLOSS[target.figure] || '', also: figNames(p).join(' · ')};
        }
      };
    }
  };
}
EX.figgorgias = figSet('figgorgias', 'Figures · Gorgias’s Helen',
  'Almost all Gorgias. Van Hook’s English is built of opposed clauses (antithesis), equal members (isocolon), like endings (homoeoteleuton). Six passages; none repeats in the same set.',
  x => x.track==='gorgias', ['gorgias_vh']);
EX.figaugustine = figSet('figaugustine', 'Figures · Augustine',
  'Confessions, On Christian Teaching IV, a letter, a sermon. Latin on the original-text button where we have it.',
  x => x.author==='Augustine', ['aug_pusey','ddc']);
EX.figcicero = figSet('figcicero', 'Figures · Cicero',
  'The great Roman orator’s use of figures throughout his work but especially in the orations against Catiline. Ten questions; a passage is not repeated in the set.',
  x => x.author==='Cicero', ['cic_cat']);
EX.figgorgias.setLen = 6;


EX.antiphon = {
  id:'antiphon', title:'Antiphon · Side, Pistis, Topos',
  instr:'The javelin tetralogy only. Which side? Which means of persuasion (pistis)? Which seat of argument (topos)? All three must be right. Ten questions; a speech is not repeated in the set.',
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
      'ant-3.2.6':'from the name of the act (hamartia whose?)',
      'ant-3.2.10':'from consequences (pollution, miasma)',
      'ant-3.3.1':'from refutation of the defence’s descriptions',
      'ant-3.3.4':'from more and less / who missed the target',
      'ant-3.3.5':'from the city’s pollution if the killer walks',
      'ant-3.4.1':'from character again, and from misfortune',
      'ant-3.4.8':'from cause restated — the boy’s own error'
    };
    const topos = toposMap[p.id] || 'from cause';
    const topoi = Object.keys(toposMap).map(k => toposMap[k]);
    const topOpts = [topos].concat(shuffle(topoi.filter(t => t !== topos)).slice(0,3));
    const cue = diff <= 2 ? '<div class="q-cue">'+esc(p.cue||'Second Tetralogy — facts agreed; the fight is cause.')+'</div>' : '';
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
          also:'A school tetralogy: four speeches, two a side, one set of facts, kept as speech to a jury (forensic).'};
      }
    };
  }
};
EX.debates = {
  id:'debates', title:'Paired Debates',
  instr:'Archidamus / Sthenelaidas; Cleon / Diodotus; Pericles’ funeral; Catiline / Caesar; Antiphon’s two sides; Socrates before the jury. Name the kind of speech, or the claim of a voice. A pair is not reused in the set.',
  src:['thuc_crawley','sallust_w','antiphon'],
  gen(diff){
    const kinds = [];
    DEBATES.forEach(d => { kinds.push({d, kind:'species'}); kinds.push({d, kind:'claim'}); });
    const item = pickSeen(kinds, x => 'db:'+x.d.id+':'+x.kind);
    const d = item.d;
    const pa = passages().find(p => p.id === d.a.pid);
    const pb = passages().find(p => p.id === d.b.pid);
    if(item.kind === 'species'){
      const opts = ['forensic','deliberative','epideictic'];
      const labels = {
        forensic:'Forensic — past act, just / unjust',
        deliberative:'Deliberative — future policy, expedient / harmful',
        epideictic:'Epideictic — praise and blame, the noble'
      };
      return mcQ({
        prompt:'<strong>'+esc(d.title)+'</strong> — '+esc(d.locus)+'.<br>Two voices: <em>'+esc(d.a.who)+'</em> and <em>'+esc(d.b.who)+'</em>. What is the species of the debate?',
        options: opts.map(k => labels[k]),
        correct: opts.indexOf(d.species),
        passage: (pa ? '<p><strong>'+esc(d.a.who)+'.</strong> '+esc(excerpt(pa, 180))+'</p>' : '') +
                 (pb ? '<p><strong>'+esc(d.b.who)+'.</strong> '+esc(excerpt(pb, 180))+'</p>' : ''),
        src: d.src, source: d.locus,
        note: d.species.charAt(0).toUpperCase()+d.species.slice(1)+'. '+d.a.who+': '+d.a.claim+' — '+d.b.who+': '+d.b.claim,
        also:'Paired debates from Greek and Roman historians. Name the kind of speech before you take a side.'
      });
    }
    const who = rand([d.a, d.b]);
    const other = who === d.a ? d.b : d.a;
    const p = passages().find(x => x.id === who.pid);
    return mcQ({
      prompt:'This voice is arguing which claim?',
      options:[who.claim, other.claim,
               'The speech is only a list of the parts of an oration.',
               'The hearer is asked only to name a figure of speech.'],
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
  instr:'Situation → species, end, pistis, a figure actually in the excerpt. Chips. Ten to a set; a passage is not reused.',
  src:['arist_rhet','cic_inv'],
  gen(diff){
    const p = pickPass(x => isOration(x) && speechSpans(x).length && pistisOf(x), 'wh:');
    const sp = speciesOf(p);
    const end = {forensic:'accuse or defend', deliberative:'exhort or dissuade', epideictic:'praise or blame'}[sp];
    const present = speechSpans(p).map(s => s.figure).filter((f,i,a) => a.indexOf(f)===i);
    const fig = present[0];
    const pistis = pistisOf(p);
    let figOpts = present.slice();
    ['anaphora','metaphor','tricolon','irony'].forEach(f => { if(figOpts.indexOf(f)<0) figOpts.push(f); });
    figOpts = shuffle(figOpts).slice(0,4);
    if(figOpts.indexOf(fig)<0){ figOpts[3] = fig; figOpts = shuffle(figOpts); }
    const cue = diff <= 2 ? '<div class="q-cue">'+esc(p.cue||'')+'</div>' : '';
    return {
      kind:'chips',
      prompt:'Take the case in order: species, the end of that species, the pistis doing the work, and a figure actually present.',
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
          also:'The whole case is the point of the art: not a figure in isolation, and not a definition without a speech.'};
      }
    };
  }
};
EX.augoffice = {
  id:'augoffice', title:'The Christian orator',
  instr:'Augustine keeps Cicero’s three offices — to teach, to delight, to move (docere, delectare, movere) — and the three styles. The end is Scripture’s truth, not a fee. Ten questions; a passage is not repeated in the set.',
  src:['ddc'],
  setLen:8,
  gen(diff){
    const e = pickSeen(AUG_ITEMS, x => 'au:'+x.id);
    const p = passages().find(x => x.id === e.pid);
    const cue = diff <= 2 ? '<div class="q-cue">'+(p ? esc(p.cue||'') : '')+'</div>' : '';
    return mcQ({
      prompt: e.prompt,
      options: e.options, correct: e.correct,
      passage: cue + (p ? esc(excerpt(p, diff>=4?260:420)) : ''),
      source: p ? citeP(p) : '', orig: p && p.orig, olang: p && p.olang, src: p ? srcOf(p) : 'ddc',
      note: e.note,
      also:'The test is whether the hearer is changed. Tears, not applause.'
    });
  }
};
EX.greg = {
  id:'greg', title:'Gregory’s Hearers',
  instr:'The Pastoral Care is a book of pairs. The same vice is not admonished in the same way. Ten questions; a pair is not repeated in the set.',
  src:['greg'],
  gen(diff){
    const g = pickSeen(GREG_PAIRS, x => 'gr:'+x.id);
    const others = shuffle(GREG_PAIRS.filter(x => x.id !== g.id)).slice(0, 3).map(x => x.why);
    return mcQ({
      prompt:'Gregory pairs <strong>'+esc(g.pair)+'</strong>. Why — what do the two hearers need differently?',
      options:[g.why].concat(others),
      correct:0, src:'greg', note:g.why,
      also:'The same vice is not cured by the same word. Name the two constitutions, and you have named the pair.'
    });
  }
};

EX.greg.setLen = 10;
const ACTS = [
  {roman:'I', name:'What Rhetoric Is', latin:'quid sit rhetorica',
   gloss:'The third road of the trivium. Definition of rhetoric, three means of persuasion (pisteis), three kinds of speech (species). Grammar considers congruity of speech; logic considers the truth of speech; rhetoric considers whether and how the hearer is moved.',
   items:[
     {kind:'deck', deck:'orient', tag:'TUTORIAL', title:'The counterpart of dialectic', desc:'Aristotle’s definition; the three means of persuasion (pisteis); the three kinds of speech (species) and what each is for.'},
     {kind:'ex', ex:'species', tag:'EXERCISE', title:'The three species', desc:'Speech to a jury on a past act (forensic); speech to an assembly on what to do (deliberative); speech of praise or blame (epideictic) — named from real speeches.'},
     {kind:'ex', ex:'pisteis', tag:'EXERCISE', title:'The three pisteis', desc:'The speaker’s character (ethos), the hearer’s passions (pathos), and the argument (logos), in Cicero, Antiphon, Gorgias, Thucydides, Plato, Augustine.'}
   ]},
  {roman:'II', name:'Invention · Logos', latin:'inventio · logos',
   gloss:'The rhetorical syllogism (enthymeme) and the example (paradeigma); the seats of arguments (topics); signs that are necessary and signs that are only likely.',
   items:[
     {kind:'deck', deck:'logos', tag:'TUTORIAL', title:'Enthymeme, example, topics', desc:'The rhetorical syllogism (enthymeme) and the example (paradeigma). A premise the hearers supply is not a defect.'},
     {kind:'ex', ex:'enthymeme', tag:'EXERCISE', title:'Supply the missing premise', desc:'Name the unspoken premise in Cicero, Antiphon, Gorgias, Thucydides, Sophocles, Plato.'}
   ]},
  {roman:'III', name:'Invention · Ethos and Pathos', latin:'ethos et pathos',
   gloss:'The speaker’s character shown in the speech; Aristotle’s account of the passions; Aquinas’s passions of attraction (concupiscible) and passions of repulsion (irascible); Gregory the Great’s account of the kinds of men and his contrasts of pairs of listeners.',
   items:[
     {kind:'deck', deck:'ethos', tag:'TUTORIAL', title:'The speaker and the hearer', desc:'Practical wisdom (phronesis), virtue (arete), goodwill (eunoia). Aristotle’s Rhetoric II beside Aquinas’s Summa I–II. Gregory’s Pastoral Care.'},
     {kind:'ex', ex:'ethos', tag:'EXERCISE', title:'Character in the speech', desc:'Which of the three — practical wisdom, virtue, goodwill — is the speech itself showing?'},
     {kind:'ex', ex:'pathos', tag:'EXERCISE', title:'Name the passion', desc:'Anger, pity, fear, shame, indignation, confidence, love, kindness — from real passages.'},
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
   gloss:'Click the marked part of the passage; which of four excerpts uses the named figure. Filters: Cicero, Gorgias’s Helen, Augustine. Tragedy and early prose are in the mixed sets.',
   items:[
     {kind:'ex', ex:'figclick', tag:'EXERCISE', title:'Click the figure', desc:'Mixed selections — Cicero to Sophocles, Gorgias to the Confessions.'},
     {kind:'ex', ex:'figwhich', tag:'EXERCISE', title:'Which excerpt?', desc:'Four real passages; one of them is using the named figure.'},
     {kind:'ex', ex:'figcicero', tag:'EXERCISE', title:'Cicero’s figures', desc:'The great Roman orator’s use of figures throughout his work but especially in the orations against Catiline.'},
     {kind:'ex', ex:'figgorgias', tag:'EXERCISE', title:'Gorgias’s Helen', desc:'Almost all Gorgias: opposed clauses (antithesis), equal members (isocolon), like endings (homoeoteleuton); the potentate and the drug.'},
     {kind:'ex', ex:'figaugustine', tag:'EXERCISE', title:'Augustine’s figures', desc:'Confessions, On Christian Teaching IV (De doctrina christiana). Latin on the original-text button where we have it.'}
   ]},
  {roman:'VII', name:'The Whole Case', latin:'causa',
   gloss:'From the situation: the kind of speech (species), its end, the means of persuasion (pistis), a figure. Paired debates from Greek and Roman historians. Antiphon’s tetralogy kept as speech to a jury (forensic).',
   items:[
     {kind:'deck', deck:'gorgias', tag:'TUTORIAL', title:'Gorgias and the four aitiai', desc:'Persuasion as a drug; speech (logos) as a powerful ruler; fortune, violence, persuasion, love (the four causes, aitiai).'},
     {kind:'deck', deck:'antiphon', tag:'TUTORIAL', title:'The Second Tetralogy', desc:'Javelin practice; facts agreed; cause and error (hamartia); ritual pollution (miasma); the quiet man who minds his own business (apragmon).'},
     {kind:'deck', deck:'augustine', tag:'TUTORIAL', title:'The Christian orator', desc:'To teach, to delight, to move (docere, delectare, movere); three styles; tears, not applause.'},
     {kind:'ex', ex:'augoffice', tag:'EXERCISE', title:'The Christian orator', desc:'The three offices and the three styles, from De doctrina christiana IV.'},
     {kind:'ex', ex:'antiphon', tag:'EXERCISE', title:'Antiphon: side, pistis, topos', desc:'Four speeches, two a side: which side, which means of persuasion (pistis), which seat of argument (topos).'},
     {kind:'ex', ex:'debates', tag:'EXERCISE', title:'Paired debates', desc:'Archidamus and Sthenelaidas; Cleon and Diodotus; Pericles; Catiline and Caesar; the javelin.'},
     {kind:'ex', ex:'whole', tag:'EXERCISE', title:'The whole case', desc:'Kind of speech (species), end, means of persuasion (pistis), a figure that is actually there.'}
   ]}
];
const DIFF = {
  1:{gain:10, loss:4,  name:'I',   desc:'Beginning. The names are given and a hint is shown. Ten questions, ten points each; 100 finishes the set.'},
  2:{gain:12, loss:6,  name:'II',  desc:'The wrong answers sit closer to the right one. Twelve points for a right answer; six lost for a wrong one.'},
  3:{gain:15, loss:8,  name:'III', desc:'Less help. You name the thing from the speech. Fifteen points for a right answer.'},
  4:{gain:18, loss:10, name:'IV',  desc:'Shorter passages and closer wrong answers. Eighteen points for a right answer.'},
  5:{gain:22, loss:12, name:'V',   desc:'No hint. You judge the speech as it stands. Twenty-two points for a right answer.'}
};
const SET_LEN = 10;
