/* Ars Rhetorica — quiz-only corpus.
   Loaded only by teacher-quiz.html. Students never see these passages in the app.
   English is public domain (Yonge, Crawley, Jowett, Pusey, Shaw, Watson, Pickard,
   Spillan/Roberts, Storr, Macaulay, Murphy). Spans are exact substrings. */
(function(){
function qmark(text, figs){
  const spans = [];
  figs.forEach(f => {
    const start = text.indexOf(f.s);
    if(start < 0){
      if(typeof console !== 'undefined') console.warn('quiz-corpus: snippet not found —', f.s.slice(0, 48));
      return;
    }
    spans.push({start:start, end:start + f.s.length, figure:f.f, why:f.w});
  });
  return spans;
}

const P = [];

(function(){
  const t = "These studies are the food of youth, the delight of old age; the ornament of prosperity, the refuge and comfort of adversity; a delight at home, and no hindrance abroad; they are with us at night, they go with us on our travels, they accompany us to our rural retreats.";
  P.push({id:'q-cic-arch-1', unmarkedFigures:['metaphor'], author:'Cicero', work:'Pro Archia', locus:'16', species:'forensic', src:'cic_orat',
    cue:'Cicero defends the poet Archias by praising the studies that made him.',
    text:t, spans:qmark(t, [
      {s:'the food of youth, the delight of old age', f:'antithesis', w:'Youth is set against age and food against delight, in parallel frames.'},
      {s:'the ornament of prosperity, the refuge and comfort of adversity', f:'antithesis', w:'Prosperity and adversity take opposite offices of the same studies.'},
      {s:'they are with us at night, they go with us on our travels, they accompany us to our rural retreats', f:'tricolon', w:'There are three members with the same subject, rising from night to travel to retreat.'},
      {s:'a delight at home, and no hindrance abroad', f:'litotes', w:'No hindrance is said where a help is meant, so the denial understates the praise.'}
    ])});
})();

(function(){
  const t = "Depart then, and rid us of this fear; if it is a well-founded fear, that it may not crush us; if a groundless one, that at last an end may be put to our miserable alarms. If, as you say, I have driven you into the arms of a set of desperate men, then go; you cannot possibly inflict less injury on the republic in the midst of that band than in the midst of this body.";
  P.push({id:'q-cic-cat1-end', author:'Cicero', work:'First Oration against Catiline', locus:'1.10–11', species:'forensic', src:'cic_cat',
    cue:'The close of the First Catilinarian: leave the city.',
    text:t, spans:qmark(t, [
      {s:'if it is a well-founded fear, that it may not crush us; if a groundless one, that at last an end may be put to our miserable alarms', f:'antithesis', w:'Whether the fears are founded or groundless, both alternatives send him out of the city.'},
      {s:'in the midst of that band than in the midst of this body', f:'antithesis', w:'That band is set against this body, the conspiracy against the senate.'}
    ])});
})();

(function(){
  const t = "There is one principle, Athenians, which I hold to through all, and you, as I know, hold to it too, and that is that we must not yield to the Peloponnesians. I know that the spirit of concession is dangerous, and that it is as true of a state as of a man that, once it begins to submit, it will find itself with a master.";
  P.push({id:'q-thuc-per-140', author:'Pericles (Thucydides)', work:'History of the Peloponnesian War', locus:'1.140', species:'deliberative', src:'thuc_crawley',
    cue:'Pericles before the war: do not yield.',
    text:t, spans:qmark(t, [
      {s:'we must not yield to the Peloponnesians', f:'sententia', w:'A general claim, briefly stated, is offered as the city’s rule.'},
      {s:'it is as true of a state as of a man that, once it begins to submit, it will find itself with a master', f:'simile', w:'The city is measured by the man, and concession makes a master.'}
    ])});
})();

(function(){
  const t = "I have often before now been convinced that a democracy is incapable of empire, and never more so than by your present change of mind in the matter of Mytilene. Punish them as they deserve, and teach your other allies by a striking example that the penalty of rebellion is death. Let them once understand this and you will not have so often to neglect your enemies because you have to fight with your own confederates.";
  P.push({id:'q-thuc-cleon-40', author:'Cleon (Thucydides)', work:'History of the Peloponnesian War', locus:'3.40', species:'deliberative', src:'thuc_crawley',
    cue:'Cleon on Mytilene: the penalty of rebellion is death.',
    text:t, spans:qmark(t, [
      {s:'a democracy is incapable of empire', f:'sententia', w:'It is a hard maxim, offered as if it settled the case.'},
      {s:'Punish them as they deserve, and teach your other allies by a striking example that the penalty of rebellion is death', f:'climax', w:'The members rise from punish to teach to death, the example he wants.'}
    ])});
})();

(function(){
  const t = "Men of Athens, I honour and love you; but I shall obey God rather than you, and while I have life and strength I shall never cease from the practice and teaching of philosophy, exhorting any one whom I meet after my manner, and convincing him, saying: O my friend, why do you, who are a citizen of the great and mighty and wise city of Athens, care so much about laying up the greatest amount of money and honour and reputation, and so little about wisdom and truth and the greatest improvement of the soul?";
  P.push({id:'q-plato-ap-29', author:'Plato', work:'Apology', locus:'29d–e', species:'forensic', src:'plato_jowett',
    cue:'Socrates will not stop: God rather than the jury.',
    text:t, spans:qmark(t, [
      {s:'I shall obey God rather than you', f:'antithesis', w:'God and the jury are set in opposing scales.'},
      {s:'money and honour and reputation', f:'tricolon', w:'Three worldly goods are matched by the three goods of the soul that follow.'}
    ])});
})();

(function(){
  const t = "A man who is a good and true Christian ought to be aware that the truth he holds is not his own, and that the falsehood he attacks is not merely another man’s. He should be a defender of truth and a refuter of falsehood, and he should do both in such a way as to win, if possible, the man he refutes. For it is not the victory of the speaker that is sought, but the salvation of the hearer.";
  P.push({id:'q-aug-ddc-win', author:'Augustine', work:'On Christian Doctrine', locus:'IV.14 (Shaw)', species:'epideictic', src:'ddc',
    cue:'The Christian orator seeks the hearer’s salvation, not his own victory.',
    text:t, spans:qmark(t, [
      {s:'the truth he holds is not his own, and that the falsehood he attacks is not merely another man’s', f:'antithesis', w:'His truth and the other’s falsehood are both referred beyond the speakers.'},
      {s:'it is not the victory of the speaker that is sought, but the salvation of the hearer', f:'antithesis', w:'Victory is set against salvation, so the end of the office is named by its opposite.'}
    ])});
})();

(function(){
  const t = "I am well aware, soldiers, that words cannot inspire courage; and that a spiritless army cannot be rendered active, or a timid one valiant, by speeches from their commander. Whatever courage is in a man’s breast, whether from nature or from habit, so much will be shown in the field. He whom neither glory nor danger can move, it is vain to exhort; fear of death robs him of his memory.";
  P.push({id:'q-sal-cat-58', author:'Catiline (Sallust)', work:'Conspiracy of Catiline', locus:'58', species:'deliberative', src:'sallust_w',
    cue:'Catiline to his soldiers before the last battle: words cannot make the timid valiant.',
    text:t, spans:qmark(t, [
      {s:'a spiritless army cannot be rendered active, or a timid one valiant, by speeches from their commander', f:'antithesis', w:'In the pairs spiritless and active, timid and valiant, the speech denies its own power.'},
      {s:'He whom neither glory nor danger can move, it is vain to exhort', f:'sententia', w:'This is a brief rule about pathos: some breasts will not take the charge.'}
    ])});
})();

(function(){
  const t = "By this blood, most chaste until a king’s injury was offered to it, I swear, and I call you, gods, to witness, that I will pursue Lucius Tarquinius Superbus and his wicked wife and all their children, with sword, with fire, aye with whatsoever violence I may; and that I will suffer neither them nor any other to be king at Rome.";
  P.push({id:'q-liv-brut-1', author:'Livy', work:'History of Rome', locus:'1.59', species:'deliberative', src:'livy_r',
    cue:'Brutus over Lucretia’s body: no more kings at Rome.',
    text:t, spans:qmark(t, [
      {s:'I swear, and I call you, gods, to witness', f:'apostrophe', w:'He turns from the household to the gods as witnesses of the oath.'},
      {s:'with sword, with fire, aye with whatsoever violence I may', f:'climax', w:'The members rise from sword to fire to any violence whatever.'},
      {s:'I will suffer neither them nor any other to be king at Rome', f:'sententia', w:'The oath becomes a law for the city.'}
    ])});
})();

(function(){
  const t = "If I were asked, men of Athens, what is the greatest boon that the city could receive in the present crisis, I should say that it would be that all of you should be of one mind, and should both feel and say the same things about Philip. But since that is not so, I must try to convince you, as far as I can, that it is for your interest to take the course which I recommend, and to make your preparations at once.";
  P.push({id:'q-dem-ol1', author:'Demosthenes', work:'First Olynthiac', locus:'1', species:'deliberative', src:'demosth',
    cue:'Demosthenes opens on Olynthus: be of one mind about Philip.',
    text:t, spans:qmark(t, [
      {s:'all of you should be of one mind, and should both feel and say the same things about Philip', f:'isocolon', w:'To feel and to say the same things are members of like shape.'},
      {s:'it is for your interest to take the course which I recommend, and to make your preparations at once', f:'climax', w:'The counsel rises to action, from being convinced to taking the course to preparing at once.'}
    ])});
})();

(function(){
  const t = "The difficulty, my friends, is not in avoiding death, but in avoiding unrighteousness; for that runs faster than death. I am old and move slowly, and the slower runner has overtaken me, and my accusers are keen and quick, and the faster runner, who is unrighteousness, has overtaken them.";
  P.push({id:'q-plato-ap-diff', unmarkedFigures:['personification'], author:'Plato', work:'Apology', locus:'39a–b', species:'forensic', src:'plato_jowett',
    cue:'After the sentence: death is the slower runner.',
    text:t, spans:qmark(t, [
      {s:'not in avoiding death, but in avoiding unrighteousness', f:'antithesis', w:'Death is set against unrighteousness, so the true difficulty is named by its opposite.'},
      {s:'for that runs faster than death', f:'metaphor', w:'Unrighteousness is pictured as a runner, and the likeness carries the claim.'},
      {s:'the slower runner has overtaken me, and my accusers are keen and quick, and the faster runner, who is unrighteousness, has overtaken them', f:'antithesis', w:'Slow death overtakes him and swift unrighteousness overtakes them, and so the figure is completed.'},
      {s:'The difficulty, my friends, is not in avoiding death, but in avoiding unrighteousness', f:'sententia', w:'A general truth about death and wrongdoing is stated briefly, as a rule for every man.'}
    ])});
})();

(function(){
  const t = "But when, by perseverance and integrity, the republic had increased its power; when mighty princes had been vanquished in war; when barbarous tribes and populous states had been reduced to subjection; when Carthage, the rival of Rome’s dominion, had been utterly destroyed, and sea and land lay everywhere open to her sway, Fortune began to grow cruel, and to throw all things into confusion.";
  P.push({id:'q-sal-cat-10', author:'Sallust', work:'Conspiracy of Catiline', locus:'10', species:'epideictic', src:'sallust_w',
    cue:'Sallust on the turn of Fortune after Carthage fell.',
    text:t, spans:qmark(t, [
      {s:'when mighty princes had been vanquished in war; when barbarous tribes and populous states had been reduced to subjection; when Carthage, the rival of Rome’s dominion, had been utterly destroyed', f:'climax', w:'The members rise from princes to tribes to the fall of Carthage, the rival city.'},
      {s:'Fortune began to grow cruel, and to throw all things into confusion', f:'personification', w:'Fortune is made an agent with a will.'},
      {s:'when, by perseverance and integrity, the republic had increased its power; when mighty princes had been vanquished in war', f:'anaphora', w:'When opens each member, and the hearer waits for the turn that follows them.'}
    ])});
})();

(function(){
  const t = "Consider, Socrates, if you go forth, to what you are going. The laws will say: Tell us, Socrates, what are you about? Are you not going by an act of yours to destroy us — the laws, who have brought you up? Do you imagine that a state can subsist and not be overthrown, in which the decisions of law have no power, but are set aside and overthrown by individuals?";
  P.push({id:'q-plato-crito-laws', author:'Plato', work:'Crito', locus:'50a–b', species:'deliberative', src:'plato_jowett',
    cue:'The laws of Athens made to speak against flight.',
    text:t, spans:qmark(t, [
      {s:'The laws will say: Tell us, Socrates, what are you about?', f:'prosopopoeia', w:'The laws are given a voice and a question.'},
      {s:'Are you not going by an act of yours to destroy us — the laws, who have brought you up?', f:'rhetorical question', w:'The question is a charge that treats flight as parricide, the killing of the laws as of a parent.'},
      {s:'The laws will say: Tell us, Socrates, what are you about? Are you not going by an act of yours to destroy us — the laws, who have brought you up?', f:'personification', w:'The laws are made persons who speak, question, and reproach, as parents would.'}
    ])});
})();

(function(){
  const t = "Xerxes, having thus spoken, was silent; and next Mardonios said: Master, thou dost surpass not only all the Persians who have been before thee, but also those who shall come after, in that thou hast attained to the highest of all things, and art about to add to them yet greater. For it is a reasonable thing that they who dwell in Europe should be brought to be thy slaves, seeing that they are men of no account.";
  P.push({id:'q-her-mar-1', author:'Herodotus', work:'Histories', locus:'7.9', species:'deliberative', src:'herodotus',
    cue:'Mardonios flatters Xerxes into Europe.',
    text:t, spans:qmark(t, [
      {s:'thou dost surpass not only all the Persians who have been before thee, but also those who shall come after', f:'hyperbole', w:'Mardonios says that Xerxes outdoes past and future Persians alike, a deliberate excess offered as counsel.'},
      {s:'they who dwell in Europe should be brought to be thy slaves, seeing that they are men of no account', f:'irony', w:'He calls those who will break the expedition men of no account, and the slight serves as the argument.'}
    ])});
})();

(function(){
  const t = "Creon. Whomsoever the city may appoint, that man must be obeyed, in little things and great, in just things and unjust. I should be sure that he who is a good servant in the house will be a good ruler in the state. But he who violates the laws, or thinks to dictate to those in power, shall never have praise from me.";
  P.push({id:'q-soph-creon-1', author:'Sophocles', work:'Antigone', locus:'666–672 (Storr)', species:'deliberative', src:'soph_storr',
    cue:'Creon: the city’s appointee must be obeyed, just or unjust.',
    text:t, spans:qmark(t, [
      {s:'in little things and great, in just things and unjust', f:'antithesis', w:'Obedience is claimed on both sides of each pair, little and great, just and unjust.'},
      {s:'he who is a good servant in the house will be a good ruler in the state', f:'sententia', w:'A general rule about ruling is offered as if it settled Antigone’s case.'},
      {s:'in little things and great, in just things and unjust', f:'anaphora', w:'In opens both members of the pair.'}
    ])});
})();

(function(){
  const t = "Wisdom without eloquence is of little use to states, but eloquence without wisdom is often a great hindrance, and never of any use. If, then, those who have been taught the true wisdom — that is, the wisdom of God — are also eloquent, so much the better.";
  P.push({id:'q-aug-ddc-wis', author:'Augustine', work:'On Christian Doctrine', locus:'IV.5 (Shaw)', species:'epideictic', src:'ddc',
    cue:'Wisdom without eloquence helps little; eloquence without wisdom hinders.',
    text:t, spans:qmark(t, [
      {s:'Wisdom without eloquence is of little use to states, but eloquence without wisdom is often a great hindrance, and never of any use', f:'antithesis', w:'Wisdom without eloquence is set against eloquence without wisdom, and both alternatives are named.'},
      {s:'the true wisdom — that is, the wisdom of God', f:'correctio', w:'He takes back “wisdom” to put a sharper name in its place, the wisdom of God.'},
      {s:'Wisdom without eloquence is of little use to states, but eloquence without wisdom', f:'chiasmus', w:'Wisdom and eloquence change places in the second member, so the order is reversed.'},
      {s:'Wisdom without eloquence is of little use to states, but eloquence without wisdom is often a great hindrance, and never of any use', f:'sententia', w:'A general rule about wisdom and eloquence is stated briefly, as a maxim for every speaker.'}
    ])});
})();

(function(){
  const t = "How many pictures of high endeavour has the great poet left us, of brave men, of famous cities, of wars! How many speeches of kings and of captains, how many descriptions of places, how many precepts of life and of manners! These we may set before us as patterns, and from them take what is of use for our own speaking and our own life.";
  P.push({id:'q-cic-arch-poet', unmarkedFigures:['tricolon'], author:'Cicero', work:'Pro Archia', locus:'14', species:'forensic', src:'cic_orat',
    cue:'The poet as a store of examples for the orator.',
    text:t, spans:qmark(t, [
      {s:'How many pictures of high endeavour has the great poet left us, of brave men, of famous cities, of wars!', f:'exclamatio', w:'An open cry of plenty comes before the list.'},
      {s:'How many speeches of kings and of captains, how many descriptions of places, how many precepts of life and of manners!', f:'anaphora', w:'How many is sounded three times, and the hearer waits for the store of examples.'}
    ])});
})();

window.QUIZ_PASSAGES = P;

window.QUIZ_ITEMS = {
  ENTHYMEMES:[
    {id:'qe1', said:'We must not yield to the Peloponnesians. Once a state begins to submit, it will find itself with a master.',
      missing:'To keep freedom, a city must refuse the first concession.',
      distractors:['All Peloponnesians are slaves.','Helen went by love only.','The six offices are a template for every speech.'],
      src:'thuc_crawley', cite:'Thucydides 1.140, Pericles'},
    {id:'qe2', said:'A democracy is incapable of empire — punish Mytilene and teach the allies that rebellion is death.',
      missing:'Empire is held by fear of a known penalty, not by being talked out of a sentence.',
      distractors:['All democracies are just.','The funeral oration is forensic.','Javelins always miss.'],
      src:'thuc_crawley', cite:'Thucydides 3.40, Cleon'},
    {id:'qe3', said:'I shall obey God rather than you.',
      missing:'When the city’s command and the god’s command differ, the god is to be obeyed.',
      distractors:['Socrates has no city.','All philosophy is epideictic.','The narration of a tetralogy never shrinks.'],
      src:'plato_jowett', cite:'Plato, Apology 29d (Jowett)'},
    {id:'qe4', said:'It is not the victory of the speaker that is sought, but the salvation of the hearer.',
      missing:'The Christian orator’s end is the hearer’s good, not the speaker’s fame.',
      distractors:['Augustine forbids all Cicero.','Pathos is the only pistis.','Catiline sits in the senate by right.'],
      src:'ddc', cite:'Augustine, De doctrina christiana IV'},
    {id:'qe5', said:'I will suffer neither them nor any other to be king at Rome.',
      missing:'Kingship, once it has done this injury, is itself the crime to be ended.',
      distractors:['Brutus was already consul.','All oaths are epideictic.','The boy ran out on purpose.'],
      src:'livy_r', cite:'Livy 1.59'},
    {id:'qe6', said:'The city’s appointee must be obeyed, in just things and unjust.',
      missing:'Civic order is a greater good than the justice of any one command.',
      distractors:['Creon is a jury.','Antigone is a deliberative assembly.','All signs are necessary.'],
      src:'soph_storr', cite:'Sophocles, Antigone'},
    {id:'qe7', said:'Words cannot inspire courage; a timid army cannot be made valiant by a speech.',
      missing:'Courage, if it is not already in the breast, will not be put there by logos.',
      distractors:['Catiline has no soldiers.','All pathos is irascible.','Helen is a forensic narration.'],
      src:'sallust_w', cite:'Sallust, Catiline 58'},
    {id:'qe8', said:'These studies are the food of youth, the delight of old age.',
      missing:'What nourishes the mind in every season is a public good, and its teachers are to be kept.',
      distractors:['Archias was a Roman by birth.','All praise is forensic.','The four aitiai acquit Catiline.'],
      src:'cic_orat', cite:'Cicero, Pro Archia 16'}
  ],
  PASSIONS:[
    {id:'qp1', name:'anger', appetite:'irascible', text:'Depart then, and rid us of this fear; if it is a well-founded fear, that it may not crush us.', cite:'Cicero, Catilinarian 1.10–11', src:'cic_cat', why:'Anger at the man still sitting there, joined with the desire that he be gone (Aristotle II.2).'},
    {id:'qp2', name:'fear', appetite:'irascible', text:'Once a state begins to submit, it will find itself with a master.', cite:'Thucydides 1.140, Pericles', src:'thuc_crawley', why:'This is fear of a future master, a pain from imagining a destructive evil (II.5).'},
    {id:'qp3', name:'confidence', appetite:'irascible', text:'I honour and love you; but I shall obey God rather than you, and while I have life and strength I shall never cease.', cite:'Plato, Apology 29d', src:'plato_jowett', why:'This is confidence, an imagination of safety (II.5), resting on the god’s command against the jury’s threat.'},
    {id:'qp4', name:'pity', appetite:'concupiscible', text:'By this blood, most chaste until a king’s injury was offered to it, I swear.', cite:'Livy 1.59', src:'livy_r', why:'This is pity for the undeserved destruction of the chaste (II.8), turned at once into an oath.'},
    {id:'qp5', name:'indignation', appetite:'irascible', text:'Fortune began to grow cruel, and to throw all things into confusion.', cite:'Sallust, Catiline 10', src:'sallust_w', why:'This is indignation at a turn of fortune after greatness (II.9), when the good of empire was already in hand.'},
    {id:'qp6', name:'shame', appetite:'concupiscible', text:'Why do you care so much about money and honour and reputation, and so little about wisdom and truth and the soul?', cite:'Plato, Apology 29d–e', src:'plato_jowett', why:'This is shame at caring for the lesser goods (II.6), and the question is meant to sting.'},
    {id:'qp7', name:'hatred', appetite:'concupiscible', text:'I will pursue Lucius Tarquinius Superbus and his wicked wife and all their children, with sword, with fire.', cite:'Livy 1.59', src:'livy_r', why:'This is hatred, a settled wish for another’s ill that does not wait on a fresh slight (II.4).'},
    {id:'qp8', name:'kindness', appetite:'concupiscible', text:'He should do both in such a way as to win, if possible, the man he refutes. For it is not the victory of the speaker that is sought, but the salvation of the hearer.', cite:'Augustine, DDC IV', src:'ddc', why:'This is kindness, which wishes the hearer’s good (II.7) even in refutation.'}
  ],
  TAXIS_ITEMS:[
    {id:'qt1', part:'exordium', text:'If I were asked, men of Athens, what is the greatest boon that the city could receive in the present crisis, I should say that it would be that all of you should be of one mind.', src:'demosth', cite:'Demosthenes, First Olynthiac 1'},
    {id:'qt2', part:'exordium', text:'Men of Athens, I honour and love you; but I shall obey God rather than you.', src:'plato_jowett', cite:'Plato, Apology 29d'},
    {id:'qt3', part:'narration', text:'Xerxes, having thus spoken, was silent; and next Mardonios said: Master, thou dost surpass not only all the Persians who have been before thee.', src:'herodotus', cite:'Herodotus 7.9'},
    {id:'qt4', part:'proof', text:'I know that the spirit of concession is dangerous, and that it is as true of a state as of a man that, once it begins to submit, it will find itself with a master.', src:'thuc_crawley', cite:'Thucydides 1.140'},
    {id:'qt5', part:'refutation', text:'The laws will say: Are you not going by an act of yours to destroy us — the laws, who have brought you up?', src:'plato_jowett', cite:'Plato, Crito 50a–b'},
    {id:'qt6', part:'peroration', text:'Depart then, and rid us of this fear; if it is a well-founded fear, that it may not crush us; if a groundless one, that at last an end may be put to our miserable alarms.', src:'cic_cat', cite:'Cicero, Catilinarian 1.10–11'},
    {id:'qt7', part:'peroration', text:'I will suffer neither them nor any other to be king at Rome.', src:'livy_r', cite:'Livy 1.59'},
    {id:'qt8', part:'division', text:'To teach is a necessity, to delight is a beauty, to persuade is a triumph.', src:'ddc', cite:'Augustine, DDC IV.12'}
  ],
  PISTEIS_ITEMS:[
    {pid:'q-cic-arch-1', pistis:'logos', why:'The studies are argued from what they do in every season, which makes this a claim about their use and not a mere cry.'},
    {pid:'q-cic-cat1-end', pistis:'pathos', why:'Fear is named, founded or groundless, and both alternatives are meant to move the senate to be rid of him.'},
    {pid:'q-thuc-per-140', pistis:'logos', why:'Pericles argues from one principle held throughout, that concession makes a master.'},
    {pid:'q-thuc-cleon-40', pistis:'logos', why:'Cleon argues a policy on rebellion from what empire is.'},
    {pid:'q-plato-ap-29', pistis:'ethos', why:'He will obey God rather than the jury, and his manner is the proof of his character.'},
    {pid:'q-aug-ddc-win', pistis:'ethos', why:'The speaker’s goodwill is for the hearer’s salvation, not his own victory.'},
    {pid:'q-sal-cat-58', pistis:'ethos', why:'He will not pretend that a speech can make the timid valiant, and his character appears as frankness.'},
    {pid:'q-liv-brut-1', pistis:'pathos', why:'The oath is sworn over blood, so the hearer is moved first to horror and then to a vow.'},
    {pid:'q-dem-ol1', pistis:'logos', why:'The counsel to be of one mind and then to prepare is a deliberative sequence argued from interest.'},
    {pid:'q-plato-ap-diff', pistis:'logos', why:'Death is the slower runner, a claim about which evil is worse that is argued through the likeness.'},
    {pid:'q-sal-cat-10', pistis:'pathos', why:'Fortune grows cruel, and the hearer is put into the frame of mind of a fall after greatness.'},
    {pid:'q-plato-crito-laws', pistis:'logos', why:'The laws argue from what a state is, if decisions can be set aside.'},
    {pid:'q-her-mar-1', pistis:'pathos', why:'Through flattery and a slight against Europe, the hearer (Xerxes) is put into confidence.'},
    {pid:'q-soph-creon-1', pistis:'logos', why:'Obedience in things just and unjust is argued as a rule of the city, as if it were necessary.'},
    {pid:'q-aug-ddc-wis', pistis:'logos', why:'Wisdom and eloquence are distinguished in a claim about what each is worth without the other.'},
    {pid:'q-cic-arch-poet', pistis:'logos', why:'The poet is offered as paradeigma (a store of examples) for speaking and for living.'}
  ],
  ETHOS_ITEMS:[
    {id:'qet1', pid:'q-plato-ap-29', which:'arete', label:'Virtue (arete)',
      why:'He will obey God rather than the jury, and the refusal shows his character.'},
    {id:'qet2', pid:'q-thuc-per-140', which:'phronesis', label:'Practical wisdom (phronesis)',
      why:'He holds one principle throughout and asks to be trusted as a man who has seen where concession ends.'},
    {id:'qet3', pid:'q-aug-ddc-win', which:'eunoia', label:'Goodwill (eunoia)',
      why:'The hearer’s salvation, not the speaker’s victory, is named as the end, and that is goodwill.'},
    {id:'qet4', pid:'q-sal-cat-58', which:'phronesis', label:'Practical wisdom (phronesis)',
      why:'He will not claim that words make the timid valiant, and his frankness about the limits of the art earns him credit.'},
    {id:'qet5', pid:'q-dem-ol1', which:'eunoia', label:'Goodwill (eunoia)',
      why:'He wants them to be of one mind for their own interest, so that his goodwill appears as shared advantage.'},
    {id:'qet6', pid:'q-cic-arch-1', which:'phronesis', label:'Practical wisdom (phronesis)',
      why:'He knows what the studies are for in youth and age, and he speaks as an advocate who has used them.'}
  ],
  LEXIS_ITEMS:[
    {id:'qlx1', pid:'q-plato-ap-diff',
      prompt:'“Unrighteousness runs faster than death.” Does the claim stand without the figure, or is the figure the claim?',
      options:['The figure is only sound, and nothing is being argued','The likeness shows the claim; reduced to “unrighteousness is worse,” it still argues','This is a forensic narration of a homicide in a law court','These are Gorgias’s four aitiai, the causes that excuse Helen'],
      correct:1, note:'The metaphor makes the ranking visible, but the ranking can still be stated in plain clauses.'},
    {id:'qlx2', pid:'q-sal-cat-10',
      prompt:'“Fortune began to grow cruel.” Does the personification do the work of the claim, or serve it?',
      options:['Without Fortune as an agent there is no history here at all','The turn after Carthage can be said plainly; Fortune makes it felt','This is the subdued style, used for teaching only','This is an inartistic proof, such as a contract'],
      correct:1, note:'Fortune as an agent serves pathos; the facts (Carthage fallen, sea and land open) remain without her name.'},
    {id:'qlx3', pid:'q-cic-arch-1',
      prompt:'The studies as food, delight, ornament, refuge: is the figure doing the work of the argument?',
      options:['Yes, since without the metaphors there is no case for Archias','The metaphors dress a list of uses that plain prose could number','This is only an opening (exordium) meant to rouse fear','This is a necessary sign, like a fever that proves illness'],
      correct:1, note:'Here the metaphor ornaments a catalogue, and the catalogue itself is the logos.'},
    {id:'qlx4', pid:'q-thuc-cleon-40',
      prompt:'“A democracy is incapable of empire.” If we drop the hardness of the maxim, what remains?',
      options:['Nothing remains but Cleon’s harsh manner of speaking','A deliberative claim about holding empire, true or false','An encomium of Helen, a speech in her praise','A confession of delayed chastity, as in Augustine'],
      correct:1, note:'A sententia (maxim) can be stated plainly, because Cleon’s case rests on the penalty and not on the sound of the clause.'},
    {id:'qlx5', pid:'q-aug-ddc-wis',
      prompt:'“Wisdom without eloquence… eloquence without wisdom.” The antithesis here is',
      options:['The whole doctrine, since without the turn there are not two dangers','Dress for two claims: wisdom alone helps little, eloquence alone hinders','Gorgias’s drug, persuasion working on the soul like medicine','The six parts of the Latin oration, in their school order'],
      correct:1, note:'The figure sets the two dangers in parallel, but both can be stated as two sentences of plain counsel.'},
    {id:'qlx6', pid:'q-liv-brut-1',
      prompt:'Sword, fire, whatsoever violence: does the climax replace the oath, or serve it?',
      options:['The climax is the oath, since there is no promise without the rise','The oath would stand in plain words; the climax moves those who hear it','This is the subdued style, used for teaching only','This is an inartistic proof, such as a contract'],
      correct:1, note:'Here style serves pathos in an oath, and the duty sworn could be stated without the rising members.'}
  ],
  AUG_ITEMS:[
    {id:'qau1', pid:'q-aug-ddc-win',
      prompt:'“It is not the victory of the speaker that is sought, but the salvation of the hearer.” Augustine is naming',
      options:['The sophistic end, which is to win the case for pay','The Christian orator’s end, the hearer’s good, even in refutation','The four aitiai (causes) by which Gorgias excuses Helen','The shrinking of the narration when the facts are agreed'],
      correct:1, note:'The office is kept but the end is changed: the orator seeks to win the man, not the prize.'},
    {id:'qau2', pid:'q-aug-ddc-wis',
      prompt:'“Eloquence without wisdom is often a great hindrance, and never of any use.” Augustine is warning against',
      options:['Any use of Cicero’s art by Christians at all','Style doing the work of wisdom: words (lexis) without true matter (res)','The shrinking of the narration when the facts are agreed','The four aitiai (causes) by which Gorgias excuses Helen'],
      correct:1, note:'Eloquence is kept, but only together with wisdom; the Christian may be eloquent, but he may not be eloquent instead of wise.'},
    {id:'qau3', pid:'q-aug-ddc-win',
      prompt:'A Christian who holds the truth as if it were his own, on this account, has',
      options:['Succeeded, since the truth is his private property','Failed in ethos, since the truth is not his own','Completed a tetralogy, a set of four speeches','Proved a tekmerion, a necessary sign'],
      correct:1, note:'The truth he holds is not his own, and the speech must show a character that knows this.'},
    {id:'qau4', pid:'q-aug-ddc-wis',
      prompt:'If those taught the wisdom of God are also eloquent, “so much the better.” Eloquence is',
      options:['Forbidden to the Christian as something worldly','Permitted and even praised when it serves true wisdom','The whole of the Christian orator’s art','A tekmerion (necessary sign) of grace'],
      correct:1, note:'Wisdom comes first, and eloquence joined to it is a gain; the order is not reversed.'}
  ],
  GREG_PAIRS:[
    {id:'qg1', pair:'the healthy and the sick', why:'The healthy are to be admonished not to trust the body; the sick are to be comforted, lest pain break them into murmuring.', src:'greg'},
    {id:'qg2', pair:'those who sin in thought and those who sin in deed', why:'The one must be checked before the thought becomes an act; the other must be called back from an act already public.', src:'greg'},
    {id:'qg3', pair:'the married and the unmarried', why:'The married are to be bound to fidelity without being taught to despise the unmarried life; the unmarried, to continence without pride against the married.', src:'greg'},
    {id:'qg4', pair:'those in authority in the world and those in want', why:'The powerful are to be made afraid of the Judge; those in want are not to be crushed by their want, nor taught to envy as if it were justice.', src:'greg'},
    {id:'qg5', pair:'the forward and the faint-hearted', quote:'Those count all they do to be singularly eminent; these think what they do to be exceedingly despised, and so are broken down to despondency.', why:'The forward count all they do as singularly eminent. The faint-hearted think what they do is exceedingly despised, and so fall into despondency.', src:'greg'},
    {id:'qg6', pair:'the obstinate and the fickle', quote:'The former are to be told that they think more of themselves than they are, and therefore do not acquiesce in the counsels of others: but the latter are to be given to understand that they undervalue and disregard themselves too much, and so are turned aside from their own judgment in successive moments of time.', why:'One hearer will not take the counsels of others, because he thinks more of himself than he is: that is the obstinate. The other is turned aside from his own judgment, because he undervalues himself: that is the fickle.', src:'greg'},
    {id:'qg7', pair:'those who weep for sins and still commit them, and those who leave their sins and do not weep', quote:'seeing that the end for which they wash themselves in tears is that, when clean, they may return to filth.', why:'They wash themselves in tears so that, once clean, they may return to filth. These are the hearers who weep for a sin and still commit it. The other half of the pair has left the sin and does not mourn it.', src:'greg'},
    {id:'qg8', pair:'those who commend the wrong they do and those who blame a wrong and still commit it', quote:'but with the mouth they bring out wickedness in the persons of as many as there are souls of hearers, to whom they teach wicked things by praising them.', why:'By praising a wicked thing they teach it to every hearer. These are the hearers who commend the wrong they do. The other half blame a wrong and still commit it, and so sentence themselves.', src:'greg'},
    {id:'qg9', pair:'the simple and the insincere', quote:'how heavy is the labour of duplicity, which with guilt they endure.', why:'Gregory calls duplicity a heavy labour, endured with guilt. That counsel belongs to the insincere. The simple, the other half of the pair, are sometimes to be silent about a truth.', src:'greg'},
    {id:'qg10', pair:'those who give of their own and those who seize what belongs to others', quote:'not to lift themselves up in swelling thought above those to whom they impart earthly things', why:'They impart earthly things, and they are to be kept from a swelling thought above the people they support. These are the hearers who give of their own. The other half seize what belongs to others.', src:'greg'},
    {id:'qg11', pair:'those who do evil in private and good before men, and those who hide their good', quote:'since, while the attestation of human praise passes away, the heavenly sentence, which penetrates even hidden things, grows strong unto lasting retribution.', why:'Human praise passes away, and the heavenly sentence reaches what was hidden. These are the hearers who do evil in private and good before men. The other half hide the good they do, and lay a stumbling-block before the weak.', src:'greg'},
    {id:'qg12', pair:'those who prosper in temporal wishes and those worn by adversity', quote:'They are, therefore, to be admonished to regard whatever things they attain in this world as consolations in calamity, but not as the rewards of retribution', why:'What they attain in this world is a consolation in calamity, and it fails as a reward of retribution. The counsel belongs to those who prosper in temporal wishes. Those worn by adversity are to see a physician’s care in what is withheld.', src:'greg'}
  ],
  DEBATES:[
    {id:'qd-per-cleon', title:'How to hold the allies',
      a:{who:'Pericles', pid:'q-thuc-per-140', claim:'Do not yield: the first concession makes a master.'},
      b:{who:'Cleon', pid:'q-thuc-cleon-40', claim:'Punish rebellion with death, or the empire cannot be held.'},
      species:'deliberative', src:'thuc_crawley', locus:'Thucydides 1.140 / 3.40'}
  ]
};

window.QUIZ_DOCTRINE = [
  {div:'I', prompt:'On Aristotle’s definition, rhetoric is first of all',
    options:['The art of winning any case you are paid to win','The faculty of observing, in a given case, the available means of persuasion','A science of a special subject, like geometry','The study of tropes and figures only'],
    correct:1, note:'Rhetoric I.2: winning is an effect of the art, and figures belong to lexis (style); the first work of the art is to see what can be said.'},
  {div:'I', prompt:'The three artistic means of persuasion (pisteis) are',
    options:['Grammar, logic, and rhetoric','Ethos, pathos, and logos','Opening, narration, and proof','Teaching, delighting, and moving'],
    correct:1, note:'Aristotle I.2, 1356a: the speaker’s character (ethos), the hearer’s passions (pathos), and the argument (logos). Inartistic proofs (laws, witnesses) lie outside the art.'},
  {div:'I', prompt:'The three kinds of speech (species) are distinguished by',
    options:['The length of the whole oration','What the hearer judges: past, future, or the noble','Whether Latin or Greek is spoken','The number of figures in the close'],
    correct:1, note:'Aristotle I.3: the species are forensic (a jury judging the past), deliberative (an assembly judging the future), and epideictic (a spectator judging the noble), named from what the hearer is to judge.'},
  {div:'II', prompt:'What makes an enthymeme rhetorical rather than a full syllogism of the Analytics?',
    options:['It is always invalid in its syllogistic form','Its premises are probable, and hearers often supply one','It never argues from signs of any kind','It belongs only to forensic oratory in court'],
    correct:1, note:'The form is still syllogistic; the matter is likely, and the audience is not a class in logic.'},
  {div:'II', prompt:'A necessary sign (tekmerion) differs from a fallible sign in that',
    options:['It is spoken more loudly in the speech','With a tekmerion the conclusion is certain; otherwise only likely','It is always a metaphor of some kind','It belongs only to epideictic oratory'],
    correct:1, note:'If he has a fever, he is ill: that is a tekmerion. A death and a thrown javelin, however, do not by themselves settle whose error it was.'},
  {div:'III', prompt:'Ethos, for Aristotle, is trustworthy when it is',
    options:['A reputation brought in from outside the speech','Shown in the speech: practical wisdom, virtue, and goodwill','The same thing as pathos, the hearer’s passion','An inartistic proof, like a written law'],
    correct:1, note:'Practical wisdom (phronesis), virtue (arete), and goodwill (eunoia) must be shown in the speech; a reputation named from outside is atechnos (inartistic).'},
  {div:'III', prompt:'On Aquinas’s division, anger belongs to',
    options:['The concupiscible appetite, because it is a simple love of revenge','The irascible appetite, because its object is an arduous evil','The intellect, because it is a judgment','Pathos only, never a passion of the soul'],
    correct:1, note:'Anger is irascible because its object is an evil that must be overcome; Rhetoric II.2 names the state of mind, its objects, and its grounds.'},
  {div:'III', prompt:'Gregory pairs hearers because',
    options:['Every vice is cured by the same word','One vice is admonished differently in different constitutions','Figures of speech replace a doctrine of the hearer','All hearers are moved only by fear'],
    correct:1, note:'The Pastoral Care is a book about hearers, since a word that heals one may wound another.'},
  {div:'IV', prompt:'Aristotle’s four parts of the speech, beside the Latin school’s six offices, are',
    options:['Ethos, pathos, logos, and lexis','Prooimion, statement, proof, and epilogos','Teach, delight, move, and convert','Genus, species, difference, and property'],
    correct:1, note:'Aristotle’s four are opening (prooimion), statement with narration as needed, proof, and close (epilogos). The Latin six are offices a part may perform, not a template, and a tetralogy may shrink the narration to a sentence.'},
  {div:'IV', prompt:'When the facts are agreed and only the cause is in dispute, which office shrinks?',
    options:['The peroration, because there is nothing to feel','The narration, because the story is not the fight','The proof, because there are no arguments left','The exordium, because the jury is already paying attention'],
    correct:1, note:'In Antiphon’s tetralogy the narration can be a single sentence, while proof and refutation swell.'},
  {div:'V', prompt:'The first virtue of style, for Aristotle, is',
    options:['As many figures as the breath will bear','Clarity, and neither meanness nor a dignity above the subject','That the figures do the work of the argument','Silence rather than speech'],
    correct:1, note:'Rhetoric III.2: clarity comes first and ornament second, and the sophistic vice is to make lexis (style) do the work of logos (argument).'},
  {div:'V', prompt:'Gorgias’s Helen is the exhibit of',
    options:['A plain deliberative policy argued from interest','Style asked to do the work of argument','The six offices in their school order','Aquinas’s irascible appetite at work'],
    correct:1, note:'Van Hook’s English is built of antithesis and equal members, and the question is whether the claim would survive in plain clauses.'},
  {div:'VI', prompt:'Anaphora is',
    options:['The speaker’s character doing the work of proof','The same word at the head of successive members','The opening office of the oration','A necessary sign, like a fever that proves illness'],
    correct:1, note:'Anaphora is a figure of speech, not a pistis (means of persuasion) and not an office of arrangement.'},
  {div:'VI', prompt:'Ethos, pathos, and the exordium are',
    options:['Figures of speech, to be clicked in the excerpt','Means of persuasion and an office of arrangement, not figures','The three species (kinds) of oratory','The four aitiai (causes) of Helen'],
    correct:1, note:'A pistis or an office should not be named as if it were anaphora; the figures exercises ask only for figures of speech.'},
  {div:'VII', prompt:'On Gorgias’s four aitiai, Helen went by fortune (or the gods), by violence, by persuasion, or by love. Being persuaded is treated as',
    options:['Choosing freely, and therefore being guilty','Acted on, as by a drug or violence, and so not culpable','A logical demonstration from necessary premises','A forensic narration of agreed facts'],
    correct:1, note:'Helen 8–14 presents logos as a potentate. Aristotle will not grant that account of agency, and the course asks us to recognize it.'},
  {div:'VII', prompt:'In Antiphon’s Second Tetralogy the facts of the throw are agreed. The dispute is therefore',
    options:['Whether a javelin was thrown at all','How to name the act and its cause: whose error (hamartia)','Whether Helen is to be praised or blamed','Whether Athens should sail to Sicily'],
    correct:1, note:'This is forensic oratory at its limit: the narration collapses, and invention has to work on description and cause.'},
  {div:'VII', prompt:'Augustine keeps Cicero’s three offices. They are',
    options:['Grammar, logic, and rhetoric','To teach, to delight, to move (docere, delectare, flectere)','Ethos, pathos, and logos','Opening, narration, and proof'],
    correct:1, note:'DDC IV: the end is Scripture’s truth, not a fee, and the test of the grand style is tears, not applause.'},
  {div:'VII', prompt:'The sign that a grand-style sermon has done its office, for Augustine, is',
    options:['Applause and the preacher’s name','Tears, and a change of life','A perfect isocolon in every member','The suppression of all figures as worldly'],
    correct:1, note:'At Caesarea, preaching against the Caterva, he asked for groans, not cheers.'}
];
})();
