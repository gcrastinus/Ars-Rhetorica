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
  lysias_lamb:{kind:'primary', short:'Lysias, trans. Lamb',
    full:'Lysias, trans. W. R. M. Lamb, Loeb (1930). Public domain in the United States as of 2026. The bank now draws on more than the two speeches first used: <i>Against Simon</i>, <i>For Mantitheus</i>, the Funeral Oration, <i>Against Diogeiton</i>, <i>For the Invalid</i>, <i>On the Olive-Stump</i>, besides <i>On the Murder of Eratosthenes</i> and <i>Against Eratosthenes</i>.', note:'Lamb 1930 is PD in the US as of 2026. Maidment is not used.'},
  cic_yonge:{kind:'primary', short:'Cicero, trans. Yonge',
    full:'Cicero, orations, trans. C. D. Yonge (Bohn). Public domain. Used for <i>Pro Roscio Amerino</i>, <i>Divinatio in Caecilium</i>, <i>In Verrem</i> II.4, <i>De lege Manilia</i>, <i>Pro Murena</i>, <i>Pro Sulla</i>, <i>Pro Flacco</i>, <i>Pro Cluentio</i>, <i>Pro Sestio</i>, <i>Pro Plancio</i>, <i>Pro Rabirio perduellionis reo</i>, <i>Pro rege Deiotaro</i>, Second Philippic stretches, besides <i>Pro Archia</i>, <i>Pro Caelio</i>, <i>Pro Ligario</i>, Fourth Philippic already in the bank. Distinct from the Catilinarians (Blakiston). The bank\'s existing Verrines I opening is not refiled as Yonge.', note:'Yonge is named on these excerpts. Do not file them under Blakiston.'},
  isoc_norlin:{kind:'primary', short:'Isocrates, trans. Norlin',
    full:'Isocrates, trans. George Norlin, Loeb vol. 1 (1928) and vol. 2 (1929). Public domain in the United States as of 2026. <i>Panegyricus</i>, <i>To Philip</i>, <i>Antidosis</i>, <i>On the Peace</i>. Vol. 3 (1945) is not PD: <i>Helen</i> is not used.', note:'Norlin Helen (1945) is excluded.'},
  aesch_adams:{kind:'primary', short:'Aeschines, trans. Adams',
    full:'Aeschines, trans. Charles Darwin Adams, Loeb (1919). Public domain. <i>On the Embassy</i> and <i>Against Ctesiphon</i>.', note:''},
  demosth:{kind:'primary', short:'Demosthenes, trans. Pickard',
    full:'Demosthenes, public orations, trans. A. W. Pickard-Cambridge, <i>The Public Orations of Demosthenes</i>. Public domain. The bank’s English is Pickard (not Vince). Olynthiacs, Philippics, On the Peace, On the Chersonese, For the Megalopolitans, For the Freedom of the Rhodians, On the Embassy, On the Crown, On the Navy-Boards.', note:'Vince Loeb 1930 is also PD; the bank stays with Pickard for these excerpts.'},
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
  chrys_npnf:{kind:'primary', short:'John Chrysostom, NPNF',
    full:'John Chrysostom, Homilies on the Statues, NPNF I.9, trans. W. R. W. Stephens. Public domain.', note:'Rhetorical homilies after the Antiochine riot, not a dump of the whole NPNF.'},
  naz_npnf:{kind:'primary', short:'Gregory of Nazianzus, NPNF',
    full:'Gregory of Nazianzus, First Theological Oration (Or. 27) and Funeral Oration on St. Basil (Or. 43), NPNF II.7. Public domain.', note:''},
  jerome_npnf:{kind:'primary', short:'Jerome, Letter 22',
    full:'Jerome, Letter 22 to Eustochium, NPNF II.6. Public domain.', note:'A polemical exhortation in letter form, not a private note.'}
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
{ src:['arist_rhet','cic_inv'], h:'<p><strong>Three species, three ends.</strong> Aristotle (I.3) divides speeches by the hearer’s job:</p><ul style="margin:8px 0 8px 22px"><li><strong>Deliberative</strong> (<span class="lat">symbouleutikon</span>) — the assembly, judging the future: the expedient and the harmful. End: to exhort or dissuade.</li><li><strong>Forensic</strong> (<span class="lat">dikanikon</span>) — the jury, judging the past: the just and the unjust. End: to accuse or defend.</li><li><strong>Epideictic</strong> (<span class="lat">epideiktikon</span>) — the spectator, judging the present: the noble and the shameful. End: to praise or blame.</li></ul><p>Pericles’ funeral oration is the showpiece of the third. Antiphon’s tetralogy is a school-piece of the second. Cleon and Diodotus on Mytilene are deliberative: a past act, a future policy.</p>',
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
{ src:['arist_rhet'], h:'<p><strong>Signs and likelihoods.</strong> A necessary sign (<span class="lat">tekmerion</span>) is as a syllogism from a necessary premise: if he has a fever, he is ill. A fallible sign is only likely. The orator who treats a fallible sign as necessary is cheating the hearer — and Aristotle names the cheat.</p><p>Antiphon’s javelin case: the facts are agreed. The fight is over <em>cause</em> and <em>hamartia</em>. A sign (the boy is dead; a javelin was thrown) does not by itself settle which description is the just one.</p>' }
]};

DECKS.ethos = {
  title:'Invention · Ethos and Pathos', sub:'Character, passions, the hearers — not scored',
  panels:[
{ src:['arist_rhet'], h:'<p><strong>Ethos in the speech.</strong> We trust a speaker for three reasons shown <em>in the speech</em> — practical wisdom (<span class="lat">phronesis</span>), virtue (<span class="lat">arete</span>), and goodwill (<span class="lat">eunoia</span>). Reputation brought in from outside is an inartistic proof.</p><p>Socrates in the <em>Apology</em> refuses the usual captatio: he will speak as he speaks in the marketplace. That refusal is itself ethos. Antiphon’s defendant claims he is <span class="lat">apragmon</span> — a man who minds his own business — forced into court. Character as argument.</p>' },
{ src:['arist_rhet','aquinas_st'], h:'<p><strong>Pathos.</strong> Rhetoric II is a treatise on the passions: anger and mildness, love and hate, fear and confidence, shame, kindness, pity, indignation, envy, emulation. For each: a definition, the state of mind, the objects, the grounds.</p><p>St Thomas, mapping the same motions in I–II, divides them by object: the <strong>concupiscible</strong> (love, hate, desire, aversion, pleasure, pain) and the <strong>irascible</strong> (hope, despair, fear, daring, anger) — the latter where good or evil is arduous. One list is written for the orator; the other for the theologian. This course uses both.</p>',
  q:{ prompt:'On Aquinas’s division, anger belongs to',
      options:['The concupiscible appetite, because it is a simple love of revenge','The irascible appetite, because its object is an arduous evil','The intellect, because it is a judgment','Pathos only, never a passion of the soul'],
      correct:1,
      explain:'Anger is irascible: the object is an evil that must be overcome. Rhetoric names anger because the orator must know what state of mind it is, toward whom, and on what grounds (Aristotle II.2).' } },
{ src:['greg'], h:'<p><strong>Gregory’s pairs.</strong> The <em>Pastoral Care</em> is a book of hearers. The same admonition is not to be given to the joyful and to the sad, to the humble and to the proud, to the silent and to the talkative. Rhetoric without a doctrine of the hearer is only a box of figures. Gregory writes the box of hearers.</p>' }
]};

DECKS.taxis = {
  title:'Arrangement', sub:'Taxis — the parts of the oration — not scored',
  panels:[
{ src:['cic_inv','arist_rhet'], h:'<p><strong>Cicero’s six; Aristotle’s four.</strong> Aristotle is spare: <span class="lat">prooimion</span>, statement with narration as needed, <span class="lat">pistis</span>, <span class="lat">epilogos</span>. The Latin school kept six:</p><ol style="margin:8px 0 8px 22px"><li><strong>Exordium</strong> — attentive, teachable, well-disposed.</li><li><strong>Narration</strong> — the facts, brief, clear, plausible.</li><li><strong>Division</strong> (<span class="lat">partitio</span>) — the points in dispute.</li><li><strong>Proof</strong> (<span class="lat">confirmatio</span>).</li><li><strong>Refutation</strong> (<span class="lat">reprehensio</span>).</li><li><strong>Peroration</strong> — recapitulate, and move.</li></ol><p>A tetralogy may open on the law because the facts are agreed. The six are offices, not a template to force on every speech.</p>',
  q:{ prompt:'When the facts are agreed and only the cause is in dispute, which part shrinks?',
      options:['The peroration, because there is nothing to feel','The narration, because the story is not the fight','The proof, because there are no arguments left','The exordium, because the jury is already paying attention'],
      correct:1,
      explain:'Antiphon’s prosecutor says as much at once: when the facts are agreed, the verdict is determined by the laws — and then he still has to argue cause. Narration can be a sentence. Proof and refutation swell.' } }
]};

DECKS.lexis = {
  title:'Style', sub:'Lexis — clarity, propriety, metaphor — not scored',
  panels:[
{ src:['arist_rhet'], h:'<p><strong>Virtue of style.</strong> Aristotle (III.2): let style be clear, and neither mean nor above the dignity of the subject. “The greatest thing by far is to be a master of metaphor.” Clarity first. Ornament second. The vice of the sophist is to make the style do the work of the argument.</p><p>Gorgias is the exhibit. Van Hook’s Helen is almost all figure: antithesis, isocolon, homoeoteleuton. That is not a mistake. It is a demonstration of what logos can do when it is treated as a drug. Aristotle admires the power and distrusts the use.</p>' },
{ src:['gorgias_vh','arist_rhet'], h:'<p><strong>Figures the ear can name.</strong> A short working list:</p><ul style="margin:8px 0 8px 22px"><li><strong>Anaphora</strong> — same word at the head of members.</li><li><strong>Antithesis</strong> — opposed thoughts in parallel frames.</li><li><strong>Tricolon</strong> — three members, often rising.</li><li><strong>Isocolon</strong> — members of equal length.</li><li><strong>Homoeoteleuton</strong> — like endings (Gorgias’s signature).</li><li><strong>Apostrophe</strong> — a turn to address someone present or absent.</li><li><strong>Rhetorical question</strong> — inquiry that is a charge.</li><li><strong>Metaphor</strong> — naming one thing with another’s name.</li><li><strong>Irony</strong> — saying the less, or the opposite, to mean the more.</li><li><strong>Chiasmus</strong> — ABBA crossing.</li></ul><p>Tragedy loves these. A messenger speech, an agon, a chorus that argues, stichomythia that snaps — the figures are how the drama thinks aloud.</p>' }
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
{ src:['gorgias_vh','arist_rhet'], h:'<p><strong>Witchery.</strong> “Inspired incantations are provocative of charm and revocative of harm. For the power of song in association with the belief of the soul captures and enraptures and translates the soul with witchery.”</p><p>Hold this beside Aristotle’s cooler sentence: the hearer is put into a certain frame of mind. Same observation; different metaphysics. A figures set in this course can be almost all Gorgias, because Van Hook’s English is built to be heard as figure. Then ask whether the argument would survive in plain clauses. That question is the beginning of judgment.</p>' }
]};

DECKS.antiphon = {
  title:'Antiphon · Second Tetralogy', sub:'A forensic school-piece — not scored',
  panels:[
{ src:['antiphon'], h:'<p><strong>The case.</strong> Javelin practice. A boy runs out. He is struck in the side and dies on the spot. The facts are agreed. The prosecutor (the dead boy’s father) charges not intentional but <em>unintentional</em> homicide. Four speeches: prosecution, defence, prosecution’s second, defence’s second. That is a tetralogy — a sophistic school-piece in the shape of a trial.</p><p>What is on trial is <strong>cause</strong> and <strong>hamartia</strong>. Who missed? The thrower, whose javelin flew true at the target, or the boy who ran into the line? Pollution (<span class="lat">miasma</span>) hangs over the city until a verdict names the cause. <span class="lat">Erga</span> against <span class="lat">logoi</span>. <span class="lat">Doxa</span> against <span class="lat">aletheia</span>. The defendant calls himself <span class="lat">apragmon</span> — no busybody — forced into court by misfortune.</p>' },
{ src:['antiphon'], h:'<p><strong>How to read it.</strong> Do not dump these speeches into the Cicero pile. They are a drill in forensic invention when the narrative is finished on the first page. Every later claim is a redescription of the same throw.</p><p>Ask, of each excerpt: which <em>side</em>? which <em>pistis</em> is doing the work? which <em>topos</em> (from consequences; from the laws; from more and less; from the name of the act)?</p>',
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
  'plato-men-1':'epideictic','plato-sym-1':'epideictic','plato-sym-2':'epideictic',
  'plato-phaed-1':'epideictic','plato-phaed-2':'epideictic','plato-prot-1':'epideictic',
  'thuc-per-1':'epideictic','thuc-per-2':'epideictic','thuc-per-3':'epideictic','thuc-per-4':'epideictic','thuc-per-5':'epideictic',
  'thuc-mel-1':'deliberative','thuc-corc':'deliberative',
  'dem-olyn1-1':'deliberative','dem-olyn1-2':'deliberative','dem-olyn1-4':'deliberative',
  'dem-phil3-1':'deliberative','dem-phil3-4':'deliberative',
  'dem-crown-1':'forensic','dem-crown-4':'forensic','dem-crown-7':'forensic',
  'lys-1-1':'forensic','lys-1-6':'forensic','lys-1-25':'forensic','lys-1-34':'forensic',
  'lys-12-1':'forensic','lys-12-5':'forensic','lys-12-17':'forensic','lys-12-25':'forensic',
  'cic-arch-1':'forensic','cic-arch-12':'forensic','cic-arch-16':'forensic','cic-arch-19':'forensic',
  'cic-cael-1':'forensic','cic-cael-32':'forensic','cic-cael-33':'forensic','cic-cael-70':'forensic',
  'cic-lig-1':'forensic','cic-lig-10':'forensic','cic-phil4-1':'deliberative',
  'thuc-nic-1':'deliberative','thuc-nic-2':'deliberative',
  'thuc-herm-1':'deliberative','thuc-herm-4':'deliberative','thuc-athen-1':'deliberative',
  'thuc-plat-1':'forensic','thuc-theb-1':'forensic',
  'isoc-pan-1':'epideictic','isoc-pan-25':'epideictic','aesch-ctes-6':'forensic',
  'dem-1':'deliberative','dem-2':'deliberative','dem-3':'deliberative',
  'sal-cat-1':'deliberative','sal-cat-2':'deliberative','sal-cat-3':'deliberative','sal-cat-4':'deliberative',
  'aug-1':'epideictic','aug-2':'epideictic','aug-3':'epideictic',
  'aug-ddc-12':'epideictic','aug-ddc-17':'epideictic',
  'lys-3-1':'forensic',  'lys-3-6':'forensic',  'lys-16-1':'forensic',  'lys-16-13':'forensic',
  'lys-2-1':'epideictic',  'lys-2-17':'epideictic',  'lys-32-1':'forensic',  'lys-32-12':'forensic',
  'lys-24-1':'forensic',  'lys-7-1':'forensic',  'isoc-phil-1':'deliberative',  'isoc-phil-16':'deliberative',
  'isoc-phil-127':'deliberative',  'isoc-antid-1':'forensic',  'isoc-antid-253':'forensic',  'isoc-pan-50':'epideictic',
  'isoc-pan-158':'epideictic',  'isoc-peace-1':'deliberative',  'aesch-emb-1':'forensic',  'aesch-emb-20':'forensic',
  'aesch-ctes-1':'forensic',  'aesch-ctes-8':'forensic',  'aesch-ctes-49':'forensic',  'aesch-ctes-260':'forensic',
  'dem-olyn2-1':'deliberative',  'dem-olyn3-1':'deliberative',  'dem-peace-1':'deliberative',  'dem-phil2-1':'deliberative',
  'dem-mega-1':'deliberative',  'dem-rhod-1':'deliberative',  'dem-emb-1':'forensic',  'dem-crown-208':'forensic',
  'cic-rosc-1':'forensic',  'cic-rosc-13':'forensic',  'cic-rosc-26':'forensic',  'cic-man-1':'deliberative',
  'cic-man-10':'deliberative',  'cic-mur-1':'forensic',  'cic-mur-11':'forensic',  'cic-sest-1':'forensic',
  'cic-sest-45':'forensic',  'cic-phil2-1':'deliberative',  'cic-phil2-44':'deliberative',  'cic-phil2-46':'deliberative',
  'cic-div-1':'forensic',  'cic-cluent-1':'forensic',  'cic-flacc-1':'forensic',  'cic-planc-1':'forensic',
  'cic-rab-1':'forensic',  'cic-sul-1':'forensic',  'cic-deiot-1':'forensic',  'cic-ver4-1':'forensic',
  'thuc-cor-1':'deliberative',  'thuc-per-last':'deliberative',  'thuc-mel-2':'deliberative',  'thuc-ath-sparta':'deliberative',
  'thuc-per-tyr':'deliberative',  'dem-phil1-1':'deliberative',  'dem-chers-40':'deliberative',  'cic-mur-29':'forensic',
  'cic-man-13':'deliberative',  'sal-cato-1':'deliberative',  'aug-tolle':'epideictic',  'aug-hort':'epideictic',
  'aug-ostia':'epideictic',  'aug-mem':'epideictic',  'aug-fields':'epideictic',  'aug-study':'epideictic',
  'aug-eyes':'epideictic',  'aug-ddc-1':'epideictic',  'aug-ddc-5':'epideictic',  'aug-ddc-6':'epideictic',
  'aug-ddc-10':'epideictic',  'aug-ddc-13':'epideictic',  'aug-ddc-15':'epideictic',  'aug-ddc-18':'epideictic',
  'aug-ddc-19':'epideictic',  'aug-ddc-26':'epideictic',  'aug-ddc-27':'epideictic',  'aug-serm-52':'epideictic',
  'aug-ep137':'epideictic',  'chrys-stat-2':'epideictic',  'chrys-stat-1':'epideictic',  'naz-theol-1':'epideictic',
  'naz-theol-2':'epideictic',  'naz-basil-1':'epideictic',  'jerome-22-1':'epideictic'
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
  if(/Archidamus|Sthenelaidas|Pericles|Cleon|Diodotus|Alcibiades|Nicias|Hermocrates|Athenagoras|Plataeans|Thebans/.test(p.author)) return 'thuc_crawley';
  if(p.author==='Herodotus') return 'herodotus';
  if(p.author==='Sophocles') return 'soph_storr';
  if(p.author==='Gregory the Great') return 'greg';
  if(p.author==='Sallust' || /Sallust|Catiline|Caesar/.test(p.author)) return 'sallust_w';
  if(p.author==='Tacitus') return 'tacitus_cb';
  if(p.author==='Livy') return 'livy_r';
  if(p.author==='Demosthenes') return 'demosth';
  if(p.author==='Lysias') return 'lysias_lamb';
  if(p.author==='Isocrates') return 'isoc_norlin';
  if(p.author==='Aeschines') return 'aesch_adams';
  if(p.author==='Homer') return 'homer';
  if(p.author==='Virgil') return 'virgil';
  if(p.author==='Boethius') return 'boeth';
  if(/Douay/.test(p.author)) return 'douay';
  if(p.author==='Plutarch') return 'plutarch_d';
  if(p.author==='Gorgias') return 'gorgias_vh';
  if(p.author==='Antiphon') return 'antiphon';
  if(p.author==='John Chrysostom') return 'chrys_npnf';
  if(/Nazianzus/.test(p.author)) return 'naz_npnf';
  if(p.author==='Jerome') return 'jerome_npnf';
  return 'appown';
}
const ANT_SIDE = {
  'ant-3.1.1':'prosecution','ant-3.3.1':'prosecution','ant-3.3.4':'prosecution','ant-3.3.5':'prosecution',
  'ant-3.2.1':'defence','ant-3.2.4':'defence','ant-3.2.6':'defence','ant-3.2.10':'defence',
  'ant-3.4.1':'defence','ant-3.4.8':'defence'
};
const TAXIS_PARTS = [
  {key:'exordium', name:'Exordium', job:'Make them attentive, teachable, well-disposed.'},
  {key:'narration', name:'Narration', job:'The facts — brief, clear, plausible.'},
  {key:'division', name:'Division', job:'The points in dispute, and the order of taking them.'},
  {key:'proof', name:'Proof', job:'Your arguments (confirmatio).'},
  {key:'refutation', name:'Refutation', job:'The other side (reprehensio).'},
  {key:'peroration', name:'Peroration', job:'Recapitulate, and move.'}
];
const TAXIS_ITEMS = [
  {id:'t1', part:'exordium', text:'How much further, Catilina, will you carry your abuse of our forbearance?', src:'cic_cat', cite:'Cicero, First Catilinarian 1.1'},
  {id:'t2', part:'narration', text:'My boy, struck in the side on the training field by a javelin thrown by this young man, died on the spot.', src:'antiphon', cite:'Antiphon, Second Tetralogy 3.1.1'},
  {id:'t3', part:'division', text:'For either by fortune and the gods and necessity she did what she did, or by violence, or by persuasion, or by Love.', src:'gorgias_vh', cite:'Gorgias, Helen 6'},
  {id:'t4', part:'proof', text:'I consider that we are deliberating for the future more than for the present.', src:'thuc_crawley', cite:'Thucydides 3.44, Diodotus'},
  {id:'t5', part:'refutation', text:'You were then, Catilina, at Laeca’s house that night; you divided Italy into districts.', src:'cic_cat', cite:'Cicero, First Catilinarian 1.4'},
  {id:'t6', part:'peroration', text:'You have heard the facts; you have heard the arguments. It remains for you to give judgment.', src:'appown', cite:'School form of a peroration (the office, not a forged classical sentence)'},
  {id:'t7', part:'exordium', text:'I am more than seventy years of age, and appearing now for the first time in a court of law, I am quite a stranger to the language of the place.', src:'plato_jowett', cite:'Plato, Apology 17c–d (Jowett) — the refusal of a captatio'},
  {id:'t8', part:'narration', text:'There arose a mighty storm, bringing a shower of tears. I cast myself down under a certain fig-tree.', src:'aug_pusey', cite:'Augustine, Confessions VIII.12 (Pusey)'},
  {id:'t9', part:'proof', text:'Logos is a powerful potentate, who with frailest, feeblest frame works wonders.', src:'gorgias_vh', cite:'Gorgias, Helen 8'},
  {id:'t10', part:'peroration', text:'For heroes have the whole earth for their tomb; and in lands far from their own, where the column with its epitaph declares it, there is enshrined in every breast a record unwritten with no tablet to preserve it, except that of the heart.', src:'thuc_crawley', cite:'Thucydides 2.43, Pericles'},
  {id:'t11', part:'exordium', text:'Although I am afraid, gentlemen of the jury, that fear is an unseemly condition in which to begin a speech in defence of the bravest of men.', src:'cic_cat', cite:'Cicero, Pro Milone 1.1'},
  {id:'t12', part:'exordium', text:'Gentlemen of the Court: At this great political crisis, there seems to have been offered to you, not through man\'s wisdom but almost as the direct gift of heaven, the very thing that was most to be desired.', src:'cic_cat', cite:'Cicero, Against Verres I.1'},
  {id:'t13', part:'narration', text:'When I, Athenians, decided to marry, and brought a wife into my house, for some time I was disposed neither to vex her nor to leave her too free to do just as she pleased.', src:'lysias_lamb', cite:'Lysias, On the Murder of Eratosthenes 1.6 (Lamb)'},
  {id:'t14', part:'division', text:'I am in many respects at a disadvantage in the present controversy, as compared with Aeschines; and particularly, men of Athens, in two points of importance.', src:'demosth', cite:'Demosthenes, On the Crown 18.3 (Pickard)'},
  {id:'t15', part:'proof', text:'instead of looking on discussion as a stumbling-block in the way of action, we think it an indispensable preliminary to any wise action at all.', src:'thuc_crawley', cite:'Thucydides 2.40, Pericles'},
  {id:'t16', part:'refutation', text:'What is it, Catilina? Do you not heed, do you not mark the silence of the house? Their silence denotes consent.', src:'cic_cat', cite:'Cicero, First Catilinarian 1.8'},
  {id:'t17', part:'peroration', text:'The native land of all of us, beset by the firebrands and swords of an infamous conspiracy, extends to you her suppliant hands.', src:'cic_cat', cite:'Cicero, Fourth Catilinarian 4.9'},
  {id:'t18', part:'exordium', text:'Most of my predecessors in this place have commended him who made this speech part of the law, telling us that it is well that it should be delivered at the burial of those who fall in battle.', src:'thuc_crawley', cite:'Thucydides 2.35, Pericles'},
  {id:'t19', part:'narration', text:'When the Thirty, by the evil arts of slander-mongers, were established in the government, and declared that the city must be purged of unjust men and the rest of the citizens inclined to virtue and justice, despite these professions they had the effrontery to discard them in practice.', src:'lysias_lamb', cite:'Lysias, Against Eratosthenes 12.5 (Lamb)'},
  {id:'t20', part:'proof', text:'I affirm, then, that you leave many enemies behind you here to go yonder and bring more back with you.', src:'thuc_crawley', cite:'Thucydides 6.10, Nicias'},
  {id:'t21', part:'refutation', text:'it forbids not homicide, but the carrying of a weapon with a view to homicide', src:'cic_cat', cite:'Cicero, Pro Milone 11'},
  {id:'t22', part:'peroration', text:'By this discourse I have freed a woman from evil reputation; I have kept the promise which I made in the beginning.', src:'gorgias_vh', cite:'Gorgias, Helen 20–21'},
  {id:'t23', part:'division', text:'I take it, sirs, that what I have to show is that Eratosthenes had an intrigue with my wife, and not only corrupted her but inflicted disgrace upon my children and an outrage on myself by entering my house.', src:'lysias_lamb', cite:'Lysias, On the Murder of Eratosthenes 1.4 (Lamb)'},
  {id:'t24', part:'proof', text:'he is at one and the same time general, master, and treasurer', src:'demosth', cite:'Demosthenes, First Olynthiac 1.4 (Pickard)'},
  {id:'t25', part:'exordium', text:'I imagine that you, O judges, are marvelling why it is that when so many most eminent orators and most noble men are sitting still, I above all others should get up.', src:'cic_yonge', cite:'Cicero, Pro Roscio Amerino 1 (Yonge)'},
  {id:'t26', part:'exordium', text:'Although, O Romans, your numerous assembly has always seemed to me the most agreeable body that any one can address, and this place, which is most honourable to plead in.', src:'cic_yonge', cite:'Cicero, De lege Manilia 1 (Yonge)'},
  {id:'t27', part:'division', text:'I have observed, O judges, that the whole speech of the accuser is divided into two parts, one of which appeared to me to rely upon, and to put its main trust in, the inveterate unpopularity of the trial before Junius.', src:'cic_yonge', cite:'Cicero, Pro Cluentio 1 (Yonge)'},
  {id:'t28', part:'narration', text:'broke down the doors, and entered the women\'s rooms.', src:'lysias_lamb', cite:'Lysias, Against Simon 3.6 (Lamb)'},
  {id:'t29', part:'proof', text:'This is the godlike and incredible virtue of that general. What more shall I say? How many and how great are his other exploits.', src:'cic_yonge', cite:'Cicero, De lege Manilia 13 (Yonge)'},
  {id:'t30', part:'refutation', text:'It is obviously incumbent upon me, the complainant, to show this to you, that the praise given to Demosthenes is false.', src:'aesch_adams', cite:'Aeschines, Against Ctesiphon 3.50 (Adams)'},
  {id:'t31', part:'peroration', text:'Be ye my witnesses, O Earth and Sun, and virtue and Conscience, and Education, by which we distinguish the honorable and the base.', src:'aesch_adams', cite:'Aeschines, Against Ctesiphon 3.260 (Adams)'},
  {id:'t32', part:'exordium', text:'If the discourse which is now about to be read had been like the speeches which are produced either for the law-courts or for oratorical display.', src:'isoc_norlin', cite:'Isocrates, Antidosis 15.1 (Norlin)'},
  {id:'t33', part:'exordium', text:'What shall I say, or what shall I speak of? The present season is one for tears, and not for words.', src:'chrys_npnf', cite:'John Chrysostom, Homilies on the Statues 2.1'},
  {id:'t34', part:'proof', text:'For what you hold is, to speak somewhat plainly, a tyranny; to take it perhaps was wrong, but to let it go is unsafe.', src:'thuc_crawley', cite:'Thucydides 2.63, Pericles'},
  {id:'t35', part:'narration', text:'Take up and read; Take up and read. Instantly, my countenance altered, I began to think most intently whether children were wont in any kind of play to sing such words.', src:'aug_pusey', cite:'Augustine, Confessions 8.12 (Pusey)'},
  {id:'t36', part:'peroration', text:'But this single day, this very day that now is, this very moment while I am speaking, defend your conduct during this very moment, if you can.', src:'cic_yonge', cite:'Cicero, Second Philippic 2.44 (Yonge)'}
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
  {id:'e9', said:'The strong do what they can and the weak suffer what they must.', missing:'Among unequals, right is only a name; power settles what will be done.',
    distractors:['Sparta always defends the weak','Pericles is speaking of the funeral','Pity is the only pistis at Melos'], src:'thuc_crawley', cite:'Thucydides 5.89, Melian dialogue'},
  {id:'e10', said:'Their silence denotes consent.', missing:'When a body that can speak refuses to speak against a proposal, it is taken to have approved it.',
    distractors:['Silence is always fear','The senate has no voice','Catiline has already been executed'], src:'cic_cat', cite:'Cicero, First Catilinarian 1.8'},
  {id:'e11', said:'Haste and passion are the two things most opposed to good counsel.', missing:'Deliberation requires time and a mind not already moved to anger.',
    distractors:['The Mytileneans are innocent by nature','Empire forbids all second thoughts','Diodotus is giving a funeral oration'], src:'thuc_crawley', cite:'Thucydides 3.42, Diodotus'},
  {id:'e12', said:'I have a better right to command than others — Nicias has attacked me — and I believe myself to be worthy of it.', missing:'The man whose public display already profits the city is fit to lead its next enterprise.',
    distractors:['Nicias has no honour','Olympic horses are a forensic proof of murder','Sicily has already fallen'], src:'thuc_crawley', cite:'Thucydides 6.16, Alcibiades'},
  {id:'e13', said:'Inflict only such penalties as the laws have provided.', missing:'A novel penalty, once used, becomes a precedent against men unlike these.',
    distractors:['Caesar wants no penalty at all','The laws have already executed Catiline','Sallust is writing a Philippic'], src:'sallust_w', cite:'Sallust, Catiline 51, Caesar'},
  {id:'e14', said:'If the javelin had hit because it carried outside its proper course, we would have no argument; but the boy ran under its trajectory.', missing:'The cause of an unintentional killing is the error that put the body in the way, not the throw that flew true.',
    distractors:['All throws are intentional','The father has no standing','Miasma cannot attach to a city'], src:'antiphon', cite:'Antiphon, Second Tetralogy 3.2.4'},
  {id:'e15', said:'You leave many enemies behind you here to go yonder and bring more back with you.', missing:'A city should not divide its power to fight a distant war while neighbours remain unreconciled.',
    distractors:['Nicias wants the command for himself','Treaties never fail','Hermocrates is speaking at Athens'], src:'thuc_crawley', cite:'Thucydides 6.10, Nicias'},
  {id:'e16', said:'It is not I who am going to kill you, but our city\'s law.', missing:'A husband who kills an adulterer caught in the house is the law\'s agent, not a private avenger.',
    distractors:['All killing is unintentional','The Areopagus forbids every death','Eratosthenes was a member of the Thirty'], src:'lysias_lamb', cite:'Lysias, On the Murder of Eratosthenes 1.26 (Lamb)'},
  {id:'e17', said:'These studies are the food of youth, the delight of old age.', missing:'What trains the orator for the republic is itself a public good, not a private luxury.',
    distractors:['Poets should not be citizens','Gratius is a Greek','The forum needs no rest'], src:'cic_yonge', cite:'Cicero, Pro Archia 16 (Yonge)'},
  {id:'e18', said:'When a juror sits against an illegal motion, he casts his vote for or against his own freedom of speech.', missing:'A democracy is kept by its laws; to allow an illegal motion is to vote away the constitution.',
    distractors:['Tyranny is the best of the three forms','Ctesiphon is on trial for homicide','Adams is translating Demosthenes'], src:'aesch_adams', cite:'Aeschines, Against Ctesiphon 3.6 (Adams)'},
  {id:'e19', said:'Time itself seems almost to cry aloud that you must take matters into your own hands yonder.', missing:'A crisis that will not wait is itself an argument for sending help at once.',
    distractors:['Olynthus has already won','Philip is a friend of Athens','Embassies replace armies'], src:'demosth', cite:'Demosthenes, First Olynthiac 1.2 (Pickard)'},
  {id:'e20', said:'I pray that you take counsel of the laws and of your oath, not of my adversary, as to the spirit in which you hear me.', missing:'A jury sworn to hear both sides with a like mind must not let the first speaker fix its temper.',
    distractors:['Aeschines is the defendant','Solon forbade oaths','On the Crown is a funeral oration'], src:'demosth', cite:'Demosthenes, On the Crown 18.1–2 (Pickard)'},
  {id:'e21', said:'They will not be able to do us more hurt than we shall do them.', missing:'A great force far from home can be matched by the people of the country.',
    distractors:['Athens never left home','Hermocrates is urging surrender','Carthage has already landed'], src:'thuc_crawley', cite:'Thucydides 6.33, Hermocrates'},
  {id:'e22', said:'We must, I suppose, confess the truth; it would not now be in my power to deny it.', missing:'When the deed is confessed, the remaining office of the defence is pardon, not a second narration.',
    distractors:['Ligarius denies he was in Africa','Caesar has no power to pardon','Tubero is the defendant'], src:'cic_yonge', cite:'Cicero, Pro Ligario 1 (Yonge)'},
  {id:'e23', said:'I am the same man and do not alter, it is you who change.', missing:'A counsellor whose advice has not changed should not be blamed for a change in fortune.',
    distractors:['Pericles is asking to be deposed','The plague proves the policy was wrong','The assembly has always opposed him'], src:'thuc_crawley', cite:'Thucydides 2.61, Pericles'},
  {id:'e24', said:'For what you hold is, to speak somewhat plainly, a tyranny; to take it perhaps was wrong, but to let it go is unsafe.', missing:'Once a city holds an empire, the question of justice in taking it does not settle the question of safety in keeping it.',
    distractors:['Athens should free the allies at once','Tyranny is always the safest constitution','Pericles denies that Athens has an empire'], src:'thuc_crawley', cite:'Thucydides 2.63, Pericles'},
  {id:'e25', said:'It cannot, it cannot be that you were wrong, men of Athens, when you took upon you the struggle for freedom and deliverance.', missing:'A struggle shared with the men of Marathon cannot have been a crime, even if it failed.',
    distractors:['Marathon was a Macedonian victory','Demosthenes is confessing the policy failed','The jury is being asked to forget Chaeronea'], src:'demosth', cite:'Demosthenes, On the Crown 18.208 (Pickard)'},
  {id:'e26', said:'When the city is taken, no power is left to the vanquished.', missing:'Counsel about punishing conspirators is idle unless the city is first secured against them.',
    distractors:['Cato is asking for exile not death','Caesar has already taken the city','The vanquished keep the courts'], src:'sallust_w', cite:'Sallust, Catiline 52, Cato (Watson)'},
  {id:'e27', said:'we must beware of the man who abounds in eloquent nonsense.', missing:'Eloquence is not a sign that what is said is true.',
    distractors:['Augustine forbids all rhetoric','Nonsense is harmless if it pleases','The hearer cannot be pleased by a lie'], src:'ddc', cite:'Augustine, De doctrina christiana 4.5 (Shaw)'},
  {id:'e28', said:'the life of the speaker will count for more in securing the hearer\'s compliance.', missing:'Ethos of life outweighs even the majestic style when obedience is the end.',
    distractors:['Style is more than character','Wicked preachers cannot instruct anyone','Augustine denies the three styles'], src:'ddc', cite:'Augustine, De doctrina christiana 4.27 (Shaw)'},
  {id:'e29', said:'persuasion will be helpful in dealing with the Hellenes, so compulsion will be useful in dealing with the barbarians.', missing:'Greeks are moved by speech; barbarians, in this counsel, by force.',
    distractors:['Philip should invade Sparta first','Isocrates is urging a war among Greeks','Barbarians have already asked for terms'], src:'isoc_norlin', cite:'Isocrates, To Philip 5.16 (Norlin)'},
  {id:'e30', said:'I thought it shameful, while the majority were to face danger, to take the field with precaution for my own security.', missing:'A man who chooses the greater danger for himself is not the oligarch his accusers describe.',
    distractors:['Mantitheus admits he avoided service','The cavalry were the first to fight','Orthobulus struck him for cowardice'], src:'lysias_lamb', cite:'Lysias, For Mantitheus 16.13 (Lamb)'},
  {id:'e31', said:'so many most eminent orators and most noble men are sitting still.', missing:'If the best speakers are silent, the times themselves are the danger, and a younger man may have to rise.',
    distractors:['Cicero is the most eminent man in court','Sulla has ordered the eminent to speak','The jury has forbidden famous orators'], src:'cic_yonge', cite:'Cicero, Pro Roscio Amerino 1 (Yonge)'},
  {id:'e32', said:'Philip is at war with Athens, and has broken the Peace.', missing:'A peace already broken is not a reason to stay inactive, but a reason to name the war.',
    distractors:['Demosthenes is proposing to renew the Peace','Philip has asked for arbitration','The Chersonese is already safe'], src:'demosth', cite:'Demosthenes, On the Chersonese 8.39 (Pickard)'},
  {id:'e33', said:'The present season is one for tears, and not for words; for lamentation, not for discourse; for prayer, not for preaching.', missing:'When the deed is past speech, the fitting office is pathos and prayer, not a display of words.',
    distractors:['Chrysostom is refusing to preach ever again','The riot is a small civic quarrel','Tears are forbidden in a Christian homily'], src:'chrys_npnf', cite:'John Chrysostom, Homilies on the Statues 2.1 (NPNF)'},
  {id:'e34', said:'I have observed, O judges, that the whole speech of the accuser is divided into two parts.', missing:'A defence may begin by dividing the accusation, so that each part can be met in order.',
    distractors:['Cicero is conceding both parts','The accuser gave no speech','Division belongs only to the prosecution'], src:'cic_yonge', cite:'Cicero, Pro Cluentio 1 (Yonge)'}
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
  {id:'p9', name:'calmness', appetite:'irascible', text:'I think the two things most opposed to good counsel are haste and passion.', cite:'Thucydides 3.42, Diodotus', src:'thuc_crawley', why:'Calmness (praotes) is the settling of anger (II.3). Diodotus cools the assembly before the argument.'},
  {id:'p10', name:'hate', appetite:'concupiscible', text:'There is not a man in Rome, outside your band of desperate conspirators, who does not fear you, not a man who does not hate you.', cite:'Cicero, Catilinarian 1.6', src:'cic_cat', why:'Hate (II.4) is wishing another harm as such. Cicero states it as the city’s settled mind toward Catiline.'},
  {id:'p11', name:'envy', appetite:'concupiscible', text:'Mighty hopes, absolute power, would in vain be within our grasp.', cite:'Sallust, Catiline 20', src:'sallust_w', why:'Envy (II.10) is pain at others’ good fortune. Catiline’s call treats the few who hold the state as the envied.'},
  {id:'p12', name:'emulation', appetite:'irascible', text:'We are rather a pattern to others than imitators ourselves.', cite:'Thucydides 2.37, Pericles', src:'thuc_crawley', why:'Emulation (II.11) is pain at seeing goods one can attain. The city as paradeigma is meant to move the hearer to match it.'},
  {id:'p13', name:'shamelessness', appetite:'concupiscible', text:'Lives? Yes, lives; and even comes down to the senate, takes part in the public deliberations.', cite:'Cicero, Catilinarian 1.2', src:'cic_cat', why:'Shamelessness (II.6) is slighting discredit. Catiline sits as if the senate were still a place for him.'},
  {id:'p14', name:'unkindness', appetite:'concupiscible', text:'A democracy is incapable of empire, and never more so than by your present change of mind in the matter of Mitylene.', cite:'Thucydides 3.37, Cleon', src:'thuc_crawley', why:'Unkindness (II.7) is not returning good, or returning harm. Cleon would have the city refuse even a second hearing.'},
  {id:'p15', name:'fear', appetite:'irascible', text:'We shall no longer feel his dagger pricking our sides; we shall not now quake with fear in the Campus, in the Forum, in the Senate-house, or in the privacy of our own homes.', cite:'Cicero, Catilinarian 2.1', src:'cic_cat', why:'Fear named in order to be dismissed: the future evil (II.5) has, he claims, walked out of the gates.'},
  {id:'p16', name:'pity', appetite:'concupiscible', text:'The native land of all of us, beset by the firebrands and swords of an infamous conspiracy, extends to you her suppliant hands.', cite:'Cicero, Catilinarian 4.9', src:'cic_cat', why:'Pity (II.8) for a sufferer who does not deserve the destruction. Rome herself is made the suppliant.'},
  {id:'p17', name:'anger', appetite:'irascible', text:'The long speech of the Athenians I do not pretend to understand. They said a good deal in praise of themselves, but nowhere denied that they are injuring our allies and Peloponnese.', cite:'Thucydides 1.86, Sthenelaidas', src:'thuc_crawley', why:'Anger (II.2) at a slight done to allies. The ephor refuses the long speech and names the injury.'},
  {id:'p18', name:'confidence', appetite:'irascible', text:'They will not be able to do us more hurt than we shall do them; nor is the greatness of their armament altogether without advantage to us.', cite:'Thucydides 6.33, Hermocrates', src:'thuc_crawley', why:'Confidence (II.5) as imagined safety, even against a great force. Size is turned into a reason not to fear.'},
  {id:'p19', name:'anger', appetite:'irascible', text:'I went first and expressed my indignation to Hegemon, the husband of this man\'s daughter; I then discussed the matter with the other relations.', cite:'Lysias, Against Diogeiton 32.12 (Lamb)', src:'lysias_lamb', why:'Anger (II.2) at a guardian who should have been last to plunder orphans. The speaker names his indignation before the jury hears the mother.'},
  {id:'p20', name:'pity', appetite:'concupiscible', text:'I closed her eyes; and there flowed withal a mighty sorrow into my heart, which was overflowing into tears.', cite:'Augustine, Confessions 9.12 (Pusey)', src:'aug_pusey', why:'Pity (II.8) for a death already holy: the passion is named in the body before doctrine checks the tears.'},
  {id:'p21', name:'fear', appetite:'irascible', text:'When in the greatest perils of this city and empire, in the most important and terrible disasters of the republic, I was repelling slaughter from you, your wives, and your children.', cite:'Cicero, Pro Flacco 1 (Yonge)', src:'cic_yonge', why:'Fear (II.5) recalled as the city\'s recent danger, so that the present jury feel what was at stake.'},
  {id:'p22', name:'shame', appetite:'irascible', text:'I went up to Orthobulus and told him to strike me off the roll, as I thought it shameful, while the majority were to face danger, to take the field with precaution for my own security.', cite:'Lysias, For Mantitheus 16.13 (Lamb)', src:'lysias_lamb', why:'Shame (II.6) named as the reason a cavalryman chose the infantry\'s danger.'},
  {id:'p23', name:'indignation', appetite:'irascible', text:'you now propose to crown with a golden crown Demosthenes, a man who has not indeed “transported” the gold of the Medes, but has received it as a bribe, and keeps it to this day.', cite:'Aeschines, Against Ctesiphon 3.259 (Adams)', src:'aesch_adams', why:'Indignation (II.9) at unmerited honour: the crown is named as a wrong against the dead at Marathon.'},
  {id:'p24', name:'confidence', appetite:'irascible', text:'In the first place, then, men of Athens, we must not be downhearted at our present situation, however wretched it may seem to be. For in the worst feature of the past lies our best hope for the future.', cite:'Demosthenes, First Philippic 4.2 (Pickard)', src:'demosth', why:'Confidence (II.5) as imagined safety drawn from a past failure: you were not doing your duty, therefore you can still do it.'},
  {id:'p25', name:'love', appetite:'concupiscible', text:'This book of his contains an exhortation to philosophy, and is called “Hortensius.” But this book altered my affections, and turned my prayers to Thyself O Lord.', cite:'Augustine, Confessions 3.4 (Pusey)', src:'aug_pusey', why:'Love (II.4) as a turning of the affections: the pagan book is the instrument, God the object.'},
  {id:'p26', name:'kindness', appetite:'concupiscible', text:'I can almost find it in me to be grateful to my accuser, gentlemen of the Council, for having involved me in these proceedings.', cite:'Lysias, For the Invalid 24.1 (Lamb)', src:'lysias_lamb', why:'Kindness (II.7) named ironically: the pensioner treats the accusation as a gift that lets him render an account.'},
  {id:'p27', name:'calmness', appetite:'irascible', text:'I, O Cato, do not venture to find fault with your intentions, by reason of my extraordinarily high opinion of your virtue; but in some particulars I may perhaps be able slightly to amend and reform them.', cite:'Cicero, Pro Murena 30 (Yonge)', src:'cic_yonge', why:'Calmness (II.3) as the settling of anger: Cato is praised before he is guided, so that the rebuke not inflame him.'},
  {id:'p28', name:'hate', appetite:'irascible', text:'My feelings, Conscript Fathers, are extremely different, when I contemplate our circumstances and dangers, and when I revolve in my mind the sentiments of some who have spoken before me.', cite:'Sallust, Catiline 52, Cato (Watson)', src:'sallust_w', why:'Hate (II.4) of traitors named as a different feeling from the last speakers\' mere wish to punish after the fact.'},
  {id:'p29', name:'envy', appetite:'irascible', text:'I come now to what Verres himself calls his passion what his friends call his disease, his madness; what the Sicilians call his rapine; what I am to call it, I know not.', cite:'Cicero, Verrines II.4.1 (Yonge)', src:'cic_yonge', why:'Envy (II.10) is refused: the passion Verres claims is renamed rapine, so that the jury hate the taking, not admire the taste.'},
  {id:'p30', name:'emulation', appetite:'irascible', text:'To the admirers of virtue a discourse is at once a pleasure and an incentive to virtue. For when I have learned the praises of men, I have a distinct idea of their progress.', cite:'Gregory of Nazianzus, Funeral Oration on Basil 43.1 (NPNF)', src:'naz_npnf', why:'Emulation (II.11) as the work of epideictic: praise is an incentive, not a decoration.'},
  {id:'p31', name:'shamelessness', appetite:'irascible', text:'To what destiny of mine, O conscript fathers, shall I say that it is owing, that none for the last twenty years has been an enemy to the republic without at the same time declaring war against me?', cite:'Cicero, Second Philippic 2.1 (Yonge)', src:'cic_yonge', why:'Shamelessness (II.6) in the adversary: Antony\'s war on Cicero is named as of a piece with war on the republic.'},
  {id:'p32', name:'unkindness', appetite:'concupiscible', text:'you enjoin us to let right alone and talk only of interest—that you should not destroy what is our common protection, the privilege of being allowed in danger to invoke what is fair and right.', cite:'Thucydides 5.90, Melians (Crawley)', src:'thuc_crawley', why:'Unkindness (II.7) as the withholding of the common protection of right: the Melians name the Athenian doctrine as already a harm.'}
];
const DEBATES = [
  {id:'d-arch', title:'War with Athens', a:{who:'Archidamus', pid:'thuc-arch-1', claim:'Do not rush to war; experience teaches its cost.'}, b:{who:'Sthenelaidas', pid:'thuc-sthen-1', claim:'Vote the war; the Athenians are in the wrong.'}, species:'deliberative', src:'thuc_crawley', locus:'Thucydides 1.80 / 1.86'},
  {id:'d-myt', title:'Mytilene', a:{who:'Cleon', pid:'thuc-cleon-1', claim:'A democracy that talks cannot hold empire; do not reopen the sentence.'}, b:{who:'Diodotus', pid:'thuc-diod-1', claim:'Haste and anger are the two things most opposed to good counsel.'}, species:'deliberative', src:'thuc_crawley', locus:'Thucydides 3.37 / 3.42'},
  {id:'d-fun', title:'The dead of the first year', a:{who:'Pericles', pid:'thuc-fun-1', claim:'I shall speak of the city, not only of the men.'}, b:{who:'Pericles', pid:'thuc-fun-2', claim:'Our constitution does not copy our neighbours; we are an example.'}, species:'epideictic', src:'thuc_crawley', locus:'Thucydides 2.35 / 2.37'},
  {id:'d-cat', title:'The Catilinarian conspirators', a:{who:'Catiline', pid:'sal-cat-consp', claim:'The conspirators are called to dare, as men dispossessed.'}, b:{who:'Caesar', pid:'sal-caes-1', claim:'Inflict only such penalties as the laws have provided.'}, species:'deliberative', src:'sallust_w', locus:'Sallust, Catiline 20 / 51'},
  {id:'d-ant', title:'The javelin', a:{who:'The father (prosecution)', pid:'ant-3.1.1', claim:'Unintentional homicide; the thrower caused the death.'}, b:{who:'The thrower (defence)', pid:'ant-3.2.1', claim:'Misfortune forces the quiet man into court; the running-out is the cause.'}, species:'forensic', src:'antiphon', locus:'Antiphon 3.1 / 3.2'},
  {id:'d-sic', title:'Sicily', a:{who:'Nicias', pid:'thuc-nic-1', claim:'Do not send the ships; the advertised vote is still the wrong question.'}, b:{who:'Alcibiades', pid:'thuc-alc-1', claim:'I have a better right to command; the display that is abused already profits the city.'}, species:'deliberative', src:'thuc_crawley', locus:'Thucydides 6.9 / 6.16'},
  {id:'d-syr', title:'The Athenian armament at Syracuse', a:{who:'Hermocrates', pid:'thuc-herm-1', claim:'The invasion is real; a great force far from home can still be beaten.'}, b:{who:'Athenagoras', pid:'thuc-athen-1', claim:'Those who credit the news are cowards or traitors; the Athenians will not come.'}, species:'deliberative', src:'thuc_crawley', locus:'Thucydides 6.33 / 6.36'},
  {id:'d-plat', title:'The surrendered Plataeans', a:{who:'The Plataeans', pid:'thuc-plat-1', claim:'We trusted you with the city and looked for a lawful trial.'}, b:{who:'The Thebans', pid:'thuc-theb-1', claim:'Their long self-praise is outside the question; the quarrel is older than this war.'}, species:'forensic', src:'thuc_crawley', locus:'Thucydides 3.53 / 3.61'},
  {id:'d-cicsal', title:'Catiline in the city', a:{who:'Cicero', pid:'cic-cat1-1', claim:'The conspiracy is known; how much further will you abuse our forbearance?'}, b:{who:'Catiline', pid:'sal-cat-consp', claim:'The hour has come to dare; power is within reach if you are not irresolute.'}, species:'deliberative', src:'cic_cat', locus:'Cicero, Catilinarian 1.1 / Sallust, Catiline 20'},
  {id:'d-crown', title:'The crown of Demosthenes', a:{who:'Aeschines', pid:'aesch-ctes-1', claim:'The preparations in the marketplace are an attempt to prevent a fair trial of an illegal motion.'}, b:{who:'Demosthenes', pid:'dem-crown-1', claim:'I pray first that the jury meet me with the goodwill I have ever felt toward the city.'}, species:'forensic', src:'aesch_adams', locus:'Aeschines, Against Ctesiphon 3.1 / Demosthenes, On the Crown 18.1'},
  {id:'d-emb', title:'The embassy to Philip', a:{who:'Demosthenes', pid:'dem-emb-1', claim:'The embassy is on trial, and the city must hear how it was handled.'}, b:{who:'Aeschines', pid:'aesch-emb-1', claim:'Hear me with a willing mind: my accuser asked you not even to listen.'}, species:'forensic', src:'demosth', locus:'Demosthenes, On the Embassy 19.1 / Aeschines, On the Embassy 2.1'},
  {id:'d-cato', title:'What to do with the conspirators', a:{who:'Julius Caesar', pid:'sal-caes-1', claim:'A novel penalty will become a precedent; keep to the laws already written.'}, b:{who:'Cato', pid:'sal-cato-1', claim:'The last speakers thought only of punishment; the city must first be secured.'}, species:'deliberative', src:'sallust_w', locus:'Sallust, Catiline 51 / 52'},
  {id:'d-cor', title:'Athenian character at Sparta', a:{who:'The Corinthians', pid:'thuc-cor-1', claim:'The Athenians are addicted to innovation; you Spartans keep what you have.'}, b:{who:'Archidamus', pid:'thuc-arch-1', claim:'We are not to be hurried into war by a speech about their swiftness.'}, species:'deliberative', src:'thuc_crawley', locus:'Thucydides 1.70 / 1.80'},
  {id:'d-mel2', title:'Right and interest at Melos', a:{who:'The Athenians', pid:'thuc-mel-1', claim:'The question is power, not names of right.'}, b:{who:'The Melians', pid:'thuc-mel-2', claim:'Even speaking only of interest, do not destroy the common protection of right.'}, species:'deliberative', src:'thuc_crawley', locus:'Thucydides 5.89 / 5.90'},
  {id:'d-phil', title:'Who should lead against Persia', a:{who:'Isocrates', pid:'isoc-phil-16', claim:'Philip should champion concord among Greeks and a campaign against the barbarian.'}, b:{who:'Demosthenes', pid:'dem-phil2-1', claim:'Whenever we talk of Philip\'s outrages the speeches are just; the deeds do not follow.'}, species:'deliberative', src:'isoc_norlin', locus:'Isocrates, To Philip 5.1 / Demosthenes, Second Philippic 6.1'}
];
const GREG_PAIRS = [
  {id:'g1', pair:'the joyful and the sad', why:'The joyful are to be checked lest they run to excess; the sad are to be comforted lest they break.', src:'greg'},
  {id:'g2', pair:'the humble and the proud', why:'The humble are to be praised carefully, lest praise become a snare; the proud are to be rebuked, lest silence confirm them.', src:'greg'},
  {id:'g3', pair:'the silent and the talkative', why:'The silent must be drawn to a useful word; the talkative must be taught to spare the hearer.', src:'greg'},
  {id:'g4', pair:'the young and the old', why:'The young are to be admonished to keep order; the old to be asked for the example their years already claim.', src:'greg'},
  {id:'g5', pair:'men and women', why:'Men are to be urged to heavier things; women to milder, lest a burden they cannot bear break them.', src:'greg'},
  {id:'g6', pair:'the poor and the rich', why:'The poor are to be comforted lest they break; the rich admonished lest they swell in what they hold.', src:'greg'},
  {id:'g7', pair:'subjects and prelates', why:'Subjects are not to judge the life of those over them; prelates are not to lord it as over a possession.', src:'greg'},
  {id:'g8', pair:'servants and masters', why:'Servants are to regard the humility of their condition; masters, the equality of their nature.', src:'greg'},
  {id:'g9', pair:'the wise of this world and the dull', why:'The wise are not to be proud of what they understand; the dull not to despair of what they do not.', src:'greg'},
  {id:'g10', pair:'the impudent and the bashful', why:'The impudent are to be rebuked that they may learn to fear; the bashful encouraged that they may learn to speak.', src:'greg'},
  {id:'g11', pair:'the forward and the fainthearted', why:'The forward are to be repressed lest they run into danger; the fainthearted drawn on lest they do nothing.', src:'greg'},
  {id:'g12', pair:'the impatient and the patient', why:'The impatient lose even the good they have by not enduring; the patient must not love the evil they endure.', src:'greg'},
  {id:'g13', pair:'the kindly and the envious', why:'The kindly are to be warned lest they yield more than is just; the envious, that they are already punishing themselves.', src:'greg'},
  {id:'g14', pair:'the simple and the insincere', why:'The simple are to be taught not to be deceived while intending well; the insincere, that God looks at the heart.', src:'greg'},
  {id:'g15', pair:'the whole and the sick', why:'The whole are to use health for good; the sick neither to despair nor to waste the time of their trial.', src:'greg'},
  {id:'g16', pair:'those who fear scourges and those grown hardened', why:'Those who fear are to be comforted lest fear consume them; the hardened to be threatened lest they feel nothing.', src:'greg'},
  {id:'g17', pair:'the slothful and the hasty', why:'The slothful are to be urged not to put off; the hasty not to begin without counsel.', src:'greg'},
  {id:'g18', pair:'the meek and the passionate', why:'The meek are not to be more silent than is good; the passionate are to set a guard on the tongue.', src:'greg'},
  {id:'g19', pair:'the obstinate and the fickle', why:'The obstinate think more of themselves than they are, and will not take counsel; the fickle undervalue themselves and take every counsel.', src:'greg'},
  {id:'g20', pair:'the gluttonous and the abstinent', why:'Superfluity of speech and lechery wait on the gluttonous; impatience and pride often wait on the abstinent.', src:'greg'},
  {id:'g21', pair:'those who give of their own and those who seize others\' goods', why:'Those who already give are not to swell above those they help; those who seize must be told they are still empty.', src:'greg'},
  {id:'g22', pair:'those who neither seize nor give, and those who give and still seize', why:'Those who keep their own and take none are to be taught to open the hand; those who give and still plunder give no alms.', src:'greg'},
  {id:'g23', pair:'those at variance and those at peace', why:'Those at variance cannot become spiritual while they neglect to be united; those at peace must not love peace more than truth.', src:'greg'},
  {id:'g24', pair:'sowers of strifes and peacemakers', why:'Sowers of strifes are to be shown whose followers they are; peacemakers, not to make a peace that conceals a wound.', src:'greg'},
  {id:'g25', pair:'those who understand not the sacred Law and those who understand but speak not humbly', why:'Those who misread are to be told they turn food into poison; those who read aright, not to make a trumpet of the gift.', src:'greg'},
  {id:'g26', pair:'those able to preach who shrink, and those who cannot yet rush', why:'Excessive humility must not bury a gift that would profit others; precipitancy must not take an office the life cannot carry.', src:'greg'},
  {id:'g27', pair:'those who prosper temporally and those wearied by adversity', why:'The prosperous are to fear the gifts that puff them; the wearied are not to think the labour a proof they are abandoned.', src:'greg'},
  {id:'g28', pair:'those bound in wedlock and those free of it', why:'The married are to please one another without displeasing God; the unmarried, not to condemn a bond they have not taken.', src:'greg'},
  {id:'g29', pair:'those conscious of sins of the flesh and those who know them not', why:'Those who have suffered shipwreck are to fear the sea; those who have not, not to puff themselves as if the harbour were their own virtue.', src:'greg'},
  {id:'g30', pair:'those who deplore sins of deed and those who deplore sins of thought', why:'Sins of deed need a perfected lament that washes out what was done; sins of thought must not be despised as if they were nothing.', src:'greg'},
  {id:'g31', pair:'those who lament and forsake not, and those who forsake and lament not', why:'Tears without leaving the sin are a lie; leaving without tears forgets the wound that still needs a physician.', src:'greg'},
  {id:'g32', pair:'those who praise the unlawful things they do, and those who censure them and yet avoid them not', why:'To praise the wrong is to offend twice; to censure it and still do it is to be a witness against oneself.', src:'greg'}
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
  prooimion:'an opening that does the job of an exordium',
  exordium:'the opening office of the speech',
  exemplum:'an example used as proof',
  hendiadys:'one idea through two coordinated nouns',
  litotes:'understatement by denying the contrary',
  parenthesis:'a break that inserts a second voice',
  hypothesis:'a supposed case used as argument',
  prosopopoeia:'giving a voice to the absent or the dead',
  epithet:'a characterizing adjunct'
};
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
  instr:'Name the species by the hearer’s job: forensic (past, just/unjust), deliberative (future, expedient), epideictic (present, noble/shameful). Ten questions make a set; at difficulty 1 each is worth 10, and 100 completes the set.',
  src:['arist_rhet'],
  gen(diff){
    const p = pickPass(x => !!speciesOf(x), 'sp:');
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
  instr:'Is the work here chiefly ethos, pathos, or logos? Real excerpts. Ten make a set.',
  src:['arist_rhet'],
  gen(diff){
    const bank = [
      {pid:'cic-cat1-1', pistis:'pathos', why:'The questions are not for information; they put the senate into alarm and shame.'},
      {pid:'ant-3.2.1', pistis:'ethos', why:'The quiet man, forced into court against his nature: character as proof.'},
      {pid:'gor-hel-8', pistis:'logos', why:'A claim about what logos is, offered as the ground of Helen\'s acquittal.'},
      {pid:'thuc-diod-1', pistis:'logos', why:'Diodotus argues from the nature of counsel: haste and anger oppose good deliberation.'},
      {pid:'ant-3.1.1', pistis:'logos', why:'Facts agreed; the charge is a description of cause.'},
      {pid:'plato-ap-1', pistis:'ethos', why:'Socrates refuses the usual captatio; the manner of speaking is the proof of the man.'},
      {pid:'aug-chast', pistis:'pathos', why:'The divided will is staged so that the hearer feel the shame of \'not yet.\''},
      {pid:'thuc-fun-2', pistis:'ethos', why:'Athens is characterized; the city\'s ethos becomes the speaker\'s.'},
      {pid:'sal-caes-1', pistis:'logos', why:'Caesar argues from the laws and from the consequences of a novel penalty.'},
      {pid:'cic-cat1-4', pistis:'pathos', why:'\'Where are we?\' — fear and indignation before the proof is unfolded.'},
      {pid:'gor-hel-10', pistis:'pathos', why:'Song as witchery: the doctrine of pathos offered as a physics of the soul.'},
      {pid:'soph-ant-2', pistis:'ethos', why:'\'My nature is for mutual love, not hate\' — character named as the ground of the act.'},
      {pid:'cic-milo-1', pistis:'ethos', why:'Fear named as unseemly in a defence of the bravest of men: the speaker\'s character is the opening proof.'},
      {pid:'dem-1', pistis:'logos', why:'Those who praise the ancestors, he says, do not serve them: the subject exceeds any speech.'},
      {pid:'lys-12-1', pistis:'ethos', why:'The accuser of one of the Thirty presents himself as having suffered, not as a hired speaker.'},
      {pid:'cic-arch-1', pistis:'ethos', why:'Cicero\'s debt to the poet, and the unusual brief, are offered as the speaker\'s warrant.'},
      {pid:'thuc-arch-1', pistis:'ethos', why:'Archidamus claims the authority of a long life in many wars before he advises against haste.'},
      {pid:'plato-ap-5', pistis:'ethos', why:'He argues not for his own sake but for theirs: the gadfly is the character of the man as a gift to the city.'},
      {pid:'cic-cat4-9', pistis:'pathos', why:'Rome herself is made the suppliant: pity and fear for the native land.'},
      {pid:'lys-12-17', pistis:'pathos', why:'The arrest and death of Polemarchus are told so that the jury hate the Thirty.'},
      {pid:'thuc-fun-1', pistis:'pathos', why:'The burial speech opens on the pain of the occasion before it praises the city.'},
      {pid:'cic-cael-70', pistis:'pathos', why:'The peroration swells a charge of violence into a danger to the empire and the majesty of the state.'},
      {pid:'thuc-plat-1', pistis:'pathos', why:'The Plataeans plead from trust betrayed and from the fear of an unlawful death.'},
      {pid:'dem-crown-1', pistis:'pathos', why:'He opens with a prayer for a like mind, so that anger at the first speaker not fix the jury.'},
      {pid:'dem-2', pistis:'logos', why:'A rule for counsel: no malice, no favour, only the policy one takes to be best.'},
      {pid:'thuc-mel-1', pistis:'logos', why:'The Athenian case is a claim about power and names, not a plea to pity.'},
      {pid:'cic-milo-2', pistis:'logos', why:'The law is distinguished: it forbids not homicide but carrying a weapon with a view to homicide.'},
      {pid:'lys-1-25', pistis:'logos', why:'The killing is referred to the city\'s law: the husband claims to be the law\'s agent.'},
      {pid:'thuc-nic-1', pistis:'logos', why:'Nicias argues that the advertised vote is still the wrong question: whether to send the ships at all.'},
      {pid:'gor-hel-6', pistis:'logos', why:'Four aitiai are laid down as a complete division: if any one holds, she is acquitted.'},
      {pid:'cic-lig-1', pistis:'logos', why:'The fact is confessed so that the remaining office is pardon, not a second narration.'},
      {pid:'dem-phil3-4', pistis:'logos', why:'The city\'s disease is named as a cause: speakers who seek favour, not what is best.'},
      {pid:'aesch-ctes-6', pistis:'logos', why:'A juror against an illegal motion is said to be voting on his own freedom of speech.'},
      {pid:'cic-rosc-1', pistis:'ethos', why:'Young Cicero rises because the eminent are silent: the speaker\'s unworthiness is the proof of the times.'},
      {pid:'lys-16-13', pistis:'ethos', why:'He struck his own name from the cavalry roll: character as a choice of danger.'},
      {pid:'dem-crown-208', pistis:'pathos', why:'The oath by Marathon, Plataea, Salamis: the dead are made to forbid the jury\'s regret.'},
      {pid:'isoc-antid-253', pistis:'logos', why:'A claim about what the art of discourse is, offered as the ground of the defence.'},
      {pid:'thuc-per-last', pistis:'ethos', why:'I am the same man; it is you who change: constancy named as the speaker\'s character.'},
      {pid:'sal-cato-1', pistis:'pathos', why:'Cato opens on a different feeling from the last speakers, and on danger still hanging over the city.'},
      {pid:'aesch-ctes-1', pistis:'logos', why:'The marketplace preparations are named as an attempt to override law: the charge is a description of cause.'},
      {pid:'chrys-stat-2', pistis:'pathos', why:'Tears, not words: the homily begins by putting the city into mourning before it argues.'},
      {pid:'cic-phil2-1', pistis:'pathos', why:'Twenty years of enemies who declared war on him with the republic: indignation before the narrative.'},
      {pid:'naz-theol-1', pistis:'ethos', why:'He speaks against those who pride themselves on eloquence: the speaker\'s character is a refusal of their tone.'}
    ];
    const item = pickSeen(bank, x => 'pi:'+x.pid);
    const p = passages().find(x => x.id === item.pid) || pickPass(null, 'pi');
    const names = ['ethos','pathos','logos'];
    const cue = diff <= 2 ? '<div class="q-cue">'+esc(p.cue||item.why)+'</div>' : '';
    return mcQ({
      prompt:'Which pistis is doing the chief work in this stretch?',
      options:['Ethos — the speaker as the speech shows him','Pathos — the hearer’s frame of mind','Logos — the argument of the speech itself'],
      correct: names.indexOf(item.pistis),
      passage: cue + esc(excerpt(p, diff >= 4 ? 240 : 400)),
      source: citeP(p), orig: p.orig, olang: p.olang, src: srcOf(p),
      note: item.pistis.charAt(0).toUpperCase()+item.pistis.slice(1)+'. '+item.why,
      also:'Aristotle I.2: a stretch may use more than one; name the one that is carrying the moment.'
    });
  }
};
EX.enthymeme = {
  id:'enthymeme', title:'Supply the Missing Premise',
  instr:'The enthymeme leaves a premise for the hearers to supply. Name it. Ten make a set.',
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
EX.pathos = {
  id:'pathos', title:'Name the Passion',
  instr:'Aristotle’s passions (Rhetoric II) with Aquinas’s concupiscible / irascible map. Ten make a set.',
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
  instr:'Cicero’s six offices: exordium, narration, division, proof, refutation, peroration. Ten make a set.',
  src:['cic_inv'],
  gen(diff){
    const e = pickSeen(TAXIS_ITEMS, x => 'tx:'+x.id);
    const names = TAXIS_PARTS.map(t => t.key);
    const options = [e.part].concat(names.filter(n => n !== e.part).slice(0,3));
    const labels = {};
    TAXIS_PARTS.forEach(t => { labels[t.key] = t.name + ' — ' + t.job; });
    return mcQ({
      prompt:'Which office of the oration is this stretch performing?',
      options: options.map(k => labels[k]), correct:0,
      passage:esc(e.text), source:e.cite, src:e.src,
      note: TAXIS_PARTS.find(t=>t.key===e.part).name+'. '+TAXIS_PARTS.find(t=>t.key===e.part).job,
      also: diff >= 3 ? 'Aristotle is content with four; the Latin six name jobs you can actually see.' : ''
    });
  }
};
EX.taxisorder = {
  id:'taxisorder', title:'Order the Six',
  instr:'Put Cicero’s six parts in school order. Click them from first to last, then submit.',
  src:['cic_inv'],
  gen(diff){
    const shuffled = shuffle(TAXIS_PARTS.map(p => p.key));
    return {
      kind:'order',
      prompt: diff <= 2 ? 'Click the six offices in Ciceronian order, from exordium to peroration.'
                        : 'The Latin school order. Click first to last. Do not collapse proof and refutation.',
      keys: shuffled,
      labels: shuffled.map(k => TAXIS_PARTS.find(t => t.key===k).name + ' — ' + TAXIS_PARTS.find(t => t.key===k).job),
      target: TAXIS_PARTS.map(t => t.key),
      src:['cic_inv'],
      check(ans){
        const right = Array.isArray(ans) && ans.join() === TAXIS_PARTS.map(t=>t.key).join();
        return {right, note: right ? 'Exordium, narration, division, proof, refutation, peroration.'
                                  : 'School order: exordium → narration → division → proof → refutation → peroration.',
          also:'De inventione I. The six are offices. A tetralogy may shrink narration.'};
      }
    };
  }
};
EX.figclick = {
  id:'figclick', title:'Click the Figure',
  instr:'A real excerpt. Click the stretch that is the named figure. Ten, without repeating a passage in the set.',
  src:['cic_cat','gorgias_vh'],
  gen(diff){
    const p = pickPass(x => (x.spans||[]).length >= (diff >= 4 ? 3 : 2), 'fc:');
    const spans = p.spans || [];
    const target = (diff <= 2) ? spans[0] : rand(spans);
    const gloss = FIGURE_GLOSS[target.figure] || target.why;
    const cue = diff <= 2 ? '<div class="q-cue">'+esc(p.cue||'')+'</div>' : '';
    return {
      kind:'figclick',
      prompt:'Click the stretch that is <strong>'+esc(target.figure)+'</strong> <span style="color:var(--ink-soft);font-style:italic">('+esc(gloss)+')</span>.',
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
  instr:'Four real excerpts. Which one is using the named figure? Ten to a set; passages are not reused.',
  src:['cic_cat'],
  gen(diff){
    const figs = Object.keys(FIGURE_GLOSS).filter(f => withFig(f).length >= 1);
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
      const p = pickPass(pred, id+':');
      const target = (diff <= 2) ? (p.spans||[])[0] : rand(p.spans||[]);
      const cue = diff <= 2 ? '<div class="q-cue">'+esc(p.cue||'')+'</div>' : '';
      const gloss = diff<=2 ? ' <em>('+esc(FIGURE_GLOSS[target.figure]||target.why||'')+')</em>' : '';
      return {
        kind:'figclick',
        prompt:'Click the <strong>'+esc(target.figure)+'</strong>.'+gloss,
        passageHtml: cue + wrapFigs(p.text, p.spans, target.figure),
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
  'Almost all Gorgias. Van Hook’s English is built of antithesis, isocolon, homoeoteleuton. The bank is six; it will not repeat in the same set.',
  x => x.track==='gorgias', ['gorgias_vh']);
EX.figaugustine = figSet('figaugustine', 'Figures · Augustine',
  'Confessions (Pusey), De doctrina IV (Shaw), letters and sermons (NPNF). Latin on the original-text button where we honestly have it.',
  x => x.author==='Augustine', ['aug_pusey','ddc','aug_npnf']);
EX.figcicero = figSet('figcicero', 'Figures · Cicero',
  'The Catilinarians and the rest of the Latin backbone. Ten, no repeats in the set.',
  x => x.author==='Cicero', ['cic_cat']);
EX.figgorgias.setLen = 6;
EX.enthymeme.setLen = 8;
EX.pathos.setLen = 8;


EX.antiphon = {
  id:'antiphon', title:'Antiphon · Side, Pistis, Topos',
  instr:'The javelin tetralogy only. Which side? Which pistis? Which topic? All three must be right. Ten without repeating a speech in the set.',
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
          note: 'This stretch is <strong>'+side+'</strong>, working chiefly by <strong>'+pistis+'</strong>, topic: '+esc(topos)+'.',
          also:'Do not file this under Cicero. It is a school tetralogy: four speeches, two a side, one set of facts.'};
      }
    };
  }
};
EX.debates = {
  id:'debates', title:'Paired Debates',
  instr:'Two genuine opposing voices, public-domain English. Species of the pair, then the claim of a voice. The bank is larger than a single set; items will not exhaust it.',
  src:['thuc_crawley','sallust_w','antiphon','demosth','aesch_adams','isoc_norlin','cic_yonge'],
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
        also:'Blaisdell’s course is built on these paired debates. Name the genus before you take a side.'
      });
    }
    const who = rand([d.a, d.b]);
    const other = who === d.a ? d.b : d.a;
    const p = passages().find(x => x.id === who.pid);
    return mcQ({
      prompt:'This voice is arguing which claim?',
      options:[who.claim, other.claim, 'Helen is to be praised for going to Troy.', 'The parts of speech are conventions.'],
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
    const p = pickPass(x => !!speciesOf(x) && (x.spans||[]).length, 'wh:');
    const sp = speciesOf(p);
    const end = {forensic:'accuse or defend', deliberative:'exhort or dissuade', epideictic:'praise or blame'}[sp];
    const present = figNames(p);
    const fig = present[0];
    const pistis = p.track==='gorgias' ? 'logos'
               : (p.author==='Cicero' && /cat1-1$|cat1-2$|cat1-4$/.test(p.id) ? 'pathos'
               : (p.track==='antiphon' && /3\.2\.1|3\.4\.1/.test(p.id) ? 'ethos' : 'logos'));
    let figOpts = present.slice();
    ['anaphora','metaphor','zeugma','malapropism'].forEach(f => { if(figOpts.indexOf(f)<0) figOpts.push(f); });
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
EX.greg = {
  id:'greg', title:'Gregory’s Hearers',
  instr:'Gregory the Great, Pastoral Care Book III, is a doctrine of the hearer: thirty-two pairs. The same vice is not admonished in the same way. Four make a set; the bank is not exhausted.',
  src:['greg'],
  gen(diff){
    const g = pickSeen(GREG_PAIRS, x => 'gr:'+x.id);
    const wrong = GREG_PAIRS.find(x => x.id !== g.id).why;
    return mcQ({
      prompt:'Gregory pairs <strong>'+esc(g.pair)+'</strong>. Why — what is the rhetorical reason for the pair?',
      options:[g.why, wrong, 'Because all hearers are moved only by fear.', 'Because figures of speech replace a doctrine of the hearer.'],
      correct:0, src:'greg', note:g.why,
      also:'Rhetoric without a doctrine of the hearer is only a box of figures. Gregory writes the box of hearers.'
    });
  }
};

EX.greg.setLen = 4;
const ACTS = [
  {roman:'I', name:'What Rhetoric Is', latin:'quid sit rhetorica',
   gloss:'The third road of the trivium. Definition, three pisteis, three species. Grammar is congruity; logic is truth; rhetoric is whether the hearer is moved.',
   items:[
     {kind:'deck', deck:'orient', tag:'STUDY', title:'The counterpart of dialectic', desc:'Aristotle’s definition; the three pisteis; the three species and their ends.'},
     {kind:'ex', ex:'species', tag:'EXERCISE', title:'The three species', desc:'Forensic, deliberative, epideictic — named from real speeches.'},
     {kind:'ex', ex:'pisteis', tag:'EXERCISE', title:'The three pisteis', desc:'Ethos, pathos, logos in Cicero, Antiphon, Gorgias, Thucydides, Plato, Augustine.'}
   ]},
  {roman:'II', name:'Invention · Logos', latin:'inventio · logos',
   gloss:'Enthymeme and example; the topics; signs that are necessary and signs that are only likely.',
   items:[
     {kind:'deck', deck:'logos', tag:'STUDY', title:'Enthymeme, example, topics', desc:'The rhetorical syllogism and the paradeigma. A premise the hearers supply is not a defect.'},
     {kind:'ex', ex:'enthymeme', tag:'EXERCISE', title:'Supply the missing premise', desc:'Cicero, Antiphon, Gorgias, Thucydides, Sophocles, Plato.'}
   ]},
  {roman:'III', name:'Invention · Ethos and Pathos', latin:'ethos et pathos',
   gloss:'Character shown in the speech; Aristotle’s passions; Aquinas’s concupiscible and irascible; Gregory’s pairs of hearers.',
   items:[
     {kind:'deck', deck:'ethos', tag:'STUDY', title:'The speaker and the hearer', desc:'Phronesis, arete, eunoia. Rhetoric II beside Summa I–II. Gregory’s Pastoral Care.'},
     {kind:'ex', ex:'pathos', tag:'EXERCISE', title:'Name the passion', desc:'Anger, pity, fear, shame, indignation, confidence, love, kindness — from real excerpts.'},
     {kind:'ex', ex:'greg', tag:'EXERCISE', title:'Gregory’s hearers', desc:'Why the same vice is not admonished in the same way.'}
   ]},
  {roman:'IV', name:'Arrangement', latin:'taxis',
   gloss:'Aristotle’s four; the Latin school’s six. Offices, not a template to force on every speech.',
   items:[
     {kind:'deck', deck:'taxis', tag:'STUDY', title:'The parts of the oration', desc:'Exordium, narration, division, proof, refutation, peroration.'},
     {kind:'ex', ex:'taxis', tag:'EXERCISE', title:'Name the part', desc:'Which office is this stretch performing?'},
     {kind:'ex', ex:'taxisorder', tag:'EXERCISE', title:'Order the six', desc:'Click them from first to last.'}
   ]},
  {roman:'V', name:'Style', latin:'lexis',
   gloss:'Clarity and propriety first; metaphor as seeing likeness; the sophistic vice of making style do the work of argument.',
   items:[
     {kind:'deck', deck:'lexis', tag:'STUDY', title:'Virtue of style', desc:'Aristotle III; the working list of figures; why Gorgias is the exhibit.'}
   ]},
  {roman:'VI', name:'Figures', latin:'figurae',
   gloss:'Click the stretch; which of four excerpts. Filters: Cicero, Gorgias’s Helen, Augustine. Tragedy and early prose are in the mixed sets.',
   items:[
     {kind:'ex', ex:'figclick', tag:'EXERCISE', title:'Click the figure', desc:'The mixed bank — Cicero to Sophocles, Gorgias to the Confessions.'},
     {kind:'ex', ex:'figwhich', tag:'EXERCISE', title:'Which excerpt?', desc:'Four real stretches; one of them is using the named figure.'},
     {kind:'ex', ex:'figcicero', tag:'EXERCISE', title:'Cicero’s figures', desc:'The Catilinarian backbone.'},
     {kind:'ex', ex:'figgorgias', tag:'EXERCISE', title:'Gorgias’s Helen', desc:'Almost all Gorgias: antithesis, isocolon, homoeoteleuton, the potentate and the drug.'},
     {kind:'ex', ex:'figaugustine', tag:'EXERCISE', title:'Augustine’s figures', desc:'Confessions, De doctrina IV. Latin on the original-text button where we have it.'}
   ]},
  {roman:'VII', name:'The Whole Case', latin:'causa',
   gloss:'Situation → species, end, pistis, figure. Paired debates from the Blaisdell course. Antiphon’s tetralogy kept as forensic, not dumped into Cicero.',
   items:[
     {kind:'deck', deck:'gorgias', tag:'STUDY', title:'Gorgias and the four aitiai', desc:'Persuasion as a drug; logos as potentate; fortune, violence, persuasion, love.'},
     {kind:'deck', deck:'antiphon', tag:'STUDY', title:'The Second Tetralogy', desc:'Javelin practice; facts agreed; cause and hamartia; miasma; the apragmon.'},
     {kind:'deck', deck:'augustine', tag:'STUDY', title:'The Christian orator', desc:'Docere, delectare, movere; three styles; tears, not applause.'},
     {kind:'ex', ex:'antiphon', tag:'EXERCISE', title:'Antiphon: side, pistis, topos', desc:'Four speeches, two a side. Do not file them under Cicero.'},
     {kind:'ex', ex:'debates', tag:'EXERCISE', title:'Paired debates', desc:'Archidamus and Sthenelaidas; Cleon and Diodotus; Pericles; Catiline and Caesar; the javelin.'},
     {kind:'ex', ex:'whole', tag:'EXERCISE', title:'The whole case', desc:'Species, end, pistis, a figure that is actually there.'}
   ]}
];
const DIFF = {
  1:{gain:10, loss:4,  name:'I',   desc:'The names are given, the cue is shown, the stretch is longer. A set of ten is 100 points.'},
  2:{gain:12, loss:6,  name:'II',  desc:'Still cued, but the options sit closer together.'},
  3:{gain:15, loss:8,  name:'III', desc:'The cue thins. You name the thing from the speech.'},
  4:{gain:18, loss:10, name:'IV',  desc:'Shorter excerpts, closer distractors, more figures in play.'},
  5:{gain:22, loss:12, name:'V',   desc:'No cue. The speech as a jury would hear it.'}
};
const SET_LEN = 10;
