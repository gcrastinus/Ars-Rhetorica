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
  P.push({id:'q-cic-arch-1', author:'Cicero', work:'Pro Archia', locus:'16', species:'forensic', src:'cic_orat',
    cue:'Cicero defends the poet Archias by praising the studies that made him.',
    text:t, spans:qmark(t, [
      {s:'the food of youth, the delight of old age', f:'antithesis', w:'Youth and age, food and delight: opposed seasons in parallel frames.'},
      {s:'the ornament of prosperity, the refuge and comfort of adversity', f:'antithesis', w:'Prosperity and adversity take opposite offices of the same studies.'},
      {s:'they are with us at night, they go with us on our travels, they accompany us to our rural retreats', f:'tricolon', w:'Three members, same subject, rising from night to travel to retreat.'}
    ])});
})();

(function(){
  const t = "Depart then, and rid us of this fear; if it is a well-founded fear, that it may not crush us; if a groundless one, that at last an end may be put to our miserable alarms. If, as you say, I have driven you into the arms of a set of desperate men, then go; you cannot possibly inflict less injury on the republic in the midst of that band than in the midst of this body.";
  P.push({id:'q-cic-cat1-end', author:'Cicero', work:'First Oration against Catiline', locus:'1.10–11', species:'forensic', src:'cic_cat',
    cue:'The close of the First Catilinarian: leave the city.',
    text:t, spans:qmark(t, [
      {s:'Depart then, and rid us of this fear', f:'apostrophe', w:'A command addressed to the man in the room, not a narration to the senate.'},
      {s:'if it is a well-founded fear, that it may not crush us; if a groundless one, that at last an end may be put to our miserable alarms', f:'antithesis', w:'Founded or groundless: both horns send him out of the city.'},
      {s:'in the midst of that band than in the midst of this body', f:'antithesis', w:'That band against this body: the conspiracy against the senate.'}
    ])});
})();

(function(){
  const t = "There is one principle, Athenians, which I hold to through all, and you, as I know, hold to it too, and that is that we must not yield to the Peloponnesians. I know that the spirit of concession is dangerous, and that it is as true of a state as of a man that, once it begins to submit, it will find itself with a master.";
  P.push({id:'q-thuc-per-140', author:'Pericles (Thucydides)', work:'History of the Peloponnesian War', locus:'1.140', species:'deliberative', src:'thuc_crawley',
    cue:'Pericles before the war: do not yield.',
    text:t, spans:qmark(t, [
      {s:'we must not yield to the Peloponnesians', f:'sententia', w:'A compressed general claim offered as the city’s rule.'},
      {s:'it is as true of a state as of a man that, once it begins to submit, it will find itself with a master', f:'simile', w:'The city is measured by the man: concession makes a master.'}
    ])});
})();

(function(){
  const t = "I have often before now been convinced that a democracy is incapable of empire, and never more so than by your present change of mind in the matter of Mytilene. Punish them as they deserve, and teach your other allies by a striking example that the penalty of rebellion is death. Let them once understand this and you will not have so often to neglect your enemies because you have to fight with your own confederates.";
  P.push({id:'q-thuc-cleon-40', author:'Cleon (Thucydides)', work:'History of the Peloponnesian War', locus:'3.40', species:'deliberative', src:'thuc_crawley',
    cue:'Cleon on Mytilene: the penalty of rebellion is death.',
    text:t, spans:qmark(t, [
      {s:'a democracy is incapable of empire', f:'sententia', w:'A hard maxim, offered as if it settled the case.'},
      {s:'Punish them as they deserve, and teach your other allies by a striking example that the penalty of rebellion is death', f:'climax', w:'Punish, teach, death: the members rise to the example he wants.'}
    ])});
})();

(function(){
  const t = "Men of Athens, I honour and love you; but I shall obey God rather than you, and while I have life and strength I shall never cease from the practice and teaching of philosophy, exhorting any one whom I meet after my manner, and convincing him, saying: O my friend, why do you, who are a citizen of the great and mighty and wise city of Athens, care so much about laying up the greatest amount of money and honour and reputation, and so little about wisdom and truth and the greatest improvement of the soul?";
  P.push({id:'q-plato-ap-29', author:'Plato', work:'Apology', locus:'29d–e', species:'forensic', src:'plato_jowett',
    cue:'Socrates will not stop: God rather than the jury.',
    text:t, spans:qmark(t, [
      {s:'I shall obey God rather than you', f:'antithesis', w:'God and the jury set in opposing scales.'},
      {s:'O my friend, why do you, who are a citizen of the great and mighty and wise city of Athens, care so much about laying up the greatest amount of money and honour and reputation, and so little about wisdom and truth and the greatest improvement of the soul?', f:'apostrophe', w:'He turns from the court to address the citizen as if in the marketplace.'},
      {s:'money and honour and reputation', f:'tricolon', w:'Three worldly goods, matched by the three of the soul that follow.'}
    ])});
})();

(function(){
  const t = "A man who is a good and true Christian ought to be aware that the truth he holds is not his own, and that the falsehood he attacks is not merely another man’s. He should be a defender of truth and a refuter of falsehood, and he should do both in such a way as to win, if possible, the man he refutes. For it is not the victory of the speaker that is sought, but the salvation of the hearer.";
  P.push({id:'q-aug-ddc-win', author:'Augustine', work:'On Christian Doctrine', locus:'IV.14 (Shaw)', species:'epideictic', src:'ddc',
    cue:'The Christian orator seeks the hearer’s salvation, not his own victory.',
    text:t, spans:qmark(t, [
      {s:'the truth he holds is not his own, and that the falsehood he attacks is not merely another man’s', f:'antithesis', w:'His truth and the other’s falsehood are both referred beyond the speakers.'},
      {s:'it is not the victory of the speaker that is sought, but the salvation of the hearer', f:'antithesis', w:'Victory against salvation: the end of the office is named by its opposite.'}
    ])});
})();

(function(){
  const t = "I am well aware, soldiers, that words cannot inspire courage; and that a spiritless army cannot be rendered active, or a timid one valiant, by speeches from their commander. Whatever courage is in a man’s breast, whether from nature or from habit, so much will be shown in the field. He whom neither glory nor danger can move, it is vain to exhort; fear of death robs him of his memory.";
  P.push({id:'q-sal-cat-58', author:'Catiline (Sallust)', work:'Conspiracy of Catiline', locus:'58', species:'deliberative', src:'sallust_w',
    cue:'Catiline to his soldiers before the last battle: words cannot make the timid valiant.',
    text:t, spans:qmark(t, [
      {s:'a spiritless army cannot be rendered active, or a timid one valiant, by speeches from their commander', f:'antithesis', w:'Spiritless/active, timid/valiant: the speech denies its own power.'},
      {s:'He whom neither glory nor danger can move, it is vain to exhort', f:'sententia', w:'A compressed rule of pathos: some breasts will not take the charge.'}
    ])});
})();

(function(){
  const t = "By this blood, most chaste until a king’s injury was offered to it, I swear, and I call you, gods, to witness, that I will pursue Lucius Tarquinius Superbus and his wicked wife and all their children, with sword, with fire, aye with whatsoever violence I may; and that I will suffer neither them nor any other to be king at Rome.";
  P.push({id:'q-liv-brut-1', author:'Livy', work:'History of Rome', locus:'1.59', species:'deliberative', src:'livy_r',
    cue:'Brutus over Lucretia’s body: no more kings at Rome.',
    text:t, spans:qmark(t, [
      {s:'I swear, and I call you, gods, to witness', f:'apostrophe', w:'He turns from the household to the gods as witnesses of the oath.'},
      {s:'with sword, with fire, aye with whatsoever violence I may', f:'climax', w:'Sword, fire, then any violence: the members rise.'},
      {s:'I will suffer neither them nor any other to be king at Rome', f:'sententia', w:'The oath becomes a law for the city.'}
    ])});
})();

(function(){
  const t = "If I were asked, men of Athens, what is the greatest boon that the city could receive in the present crisis, I should say that it would be that all of you should be of one mind, and should both feel and say the same things about Philip. But since that is not so, I must try to convince you, as far as I can, that it is for your interest to take the course which I recommend, and to make your preparations at once.";
  P.push({id:'q-dem-ol1', author:'Demosthenes', work:'First Olynthiac', locus:'1', species:'deliberative', src:'demosth',
    cue:'Demosthenes opens on Olynthus: be of one mind about Philip.',
    text:t, spans:qmark(t, [
      {s:'all of you should be of one mind, and should both feel and say the same things about Philip', f:'isocolon', w:'Feel and say, the same things: members of like shape.'},
      {s:'it is for your interest to take the course which I recommend, and to make your preparations at once', f:'climax', w:'Be convinced, take the course, prepare at once: counsel rising to action.'}
    ])});
})();

(function(){
  const t = "The difficulty, my friends, is not in avoiding death, but in avoiding unrighteousness; for that runs faster than death. I am old and move slowly, and the slower runner has overtaken me, and my accusers are keen and quick, and the faster runner, who is unrighteousness, has overtaken them.";
  P.push({id:'q-plato-ap-diff', author:'Plato', work:'Apology', locus:'39a–b', species:'forensic', src:'plato_jowett',
    cue:'After the sentence: death is the slower runner.',
    text:t, spans:qmark(t, [
      {s:'not in avoiding death, but in avoiding unrighteousness', f:'antithesis', w:'Death against unrighteousness: the true difficulty named by its opposite.'},
      {s:'for that runs faster than death', f:'metaphor', w:'Unrighteousness is a runner. The likeness does the work of the claim.'},
      {s:'the slower runner has overtaken me, and my accusers are keen and quick, and the faster runner, who is unrighteousness, has overtaken them', f:'antithesis', w:'Slow death for him, fast unrighteousness for them: the figure is finished.'}
    ])});
})();

(function(){
  const t = "But when, by perseverance and integrity, the republic had increased its power; when mighty princes had been vanquished in war; when barbarous tribes and populous states had been reduced to subjection; when Carthage, the rival of Rome’s dominion, had been utterly destroyed, and sea and land lay everywhere open to her sway, Fortune began to grow cruel, and to throw all things into confusion.";
  P.push({id:'q-sal-cat-10', author:'Sallust', work:'Conspiracy of Catiline', locus:'10', species:'epideictic', src:'sallust_w',
    cue:'Sallust on the turn of Fortune after Carthage fell.',
    text:t, spans:qmark(t, [
      {s:'when mighty princes had been vanquished in war; when barbarous tribes and populous states had been reduced to subjection; when Carthage, the rival of Rome’s dominion, had been utterly destroyed', f:'climax', w:'Princes, tribes, Carthage: the members rise to the rival city’s fall.'},
      {s:'Fortune began to grow cruel, and to throw all things into confusion', f:'personification', w:'Fortune is made an agent with a will.'}
    ])});
})();

(function(){
  const t = "Consider, Socrates, if you go forth, to what you are going. The laws will say: Tell us, Socrates, what are you about? Are you not going by an act of yours to destroy us — the laws, who have brought you up? Do you imagine that a state can subsist and not be overthrown, in which the decisions of law have no power, but are set aside and overthrown by individuals?";
  P.push({id:'q-plato-crito-laws', author:'Plato', work:'Crito', locus:'50a–b', species:'deliberative', src:'plato_jowett',
    cue:'The laws of Athens made to speak against flight.',
    text:t, spans:qmark(t, [
      {s:'The laws will say: Tell us, Socrates, what are you about?', f:'prosopopoeia', w:'The laws are given a voice and a question.'},
      {s:'Are you not going by an act of yours to destroy us — the laws, who have brought you up?', f:'rhetorical question', w:'The question is a charge: flight as parricide of the laws.'}
    ])});
})();

(function(){
  const t = "Xerxes, having thus spoken, was silent; and next Mardonios said: Master, thou dost surpass not only all the Persians who have been before thee, but also those who shall come after, in that thou hast attained to the highest of all things, and art about to add to them yet greater. For it is a reasonable thing that they who dwell in Europe should be brought to be thy slaves, seeing that they are men of no account.";
  P.push({id:'q-her-mar-1', author:'Herodotus', work:'Histories', locus:'7.9', species:'deliberative', src:'herodotus',
    cue:'Mardonios flatters Xerxes into Europe.',
    text:t, spans:qmark(t, [
      {s:'thou dost surpass not only all the Persians who have been before thee, but also those who shall come after', f:'hyperbole', w:'Past and future Persians both outdone: deliberate excess as counsel.'},
      {s:'they who dwell in Europe should be brought to be thy slaves, seeing that they are men of no account', f:'irony', w:'Men of no account — said of those who will break the expedition. The slight is the argument.'}
    ])});
})();

(function(){
  const t = "Creon. Whomsoever the city may appoint, that man must be obeyed, in little things and great, in just things and unjust. I should be sure that he who is a good servant in the house will be a good ruler in the state. But he who violates the laws, or thinks to dictate to those in power, shall never have praise from me.";
  P.push({id:'q-soph-creon-1', author:'Sophocles', work:'Antigone', locus:'666–672 (Storr)', species:'deliberative', src:'soph_storr',
    cue:'Creon: the city’s appointee must be obeyed, just or unjust.',
    text:t, spans:qmark(t, [
      {s:'in little things and great, in just things and unjust', f:'antithesis', w:'Little/great, just/unjust: obedience claimed on both sides of each pair.'},
      {s:'he who is a good servant in the house will be a good ruler in the state', f:'sententia', w:'A general rule of rule, offered as if it settled Antigone.'}
    ])});
})();

(function(){
  const t = "Wisdom without eloquence is of little use to states, but eloquence without wisdom is often a great hindrance, and never of any use. If, then, those who have been taught the true wisdom — that is, the wisdom of God — are also eloquent, so much the better.";
  P.push({id:'q-aug-ddc-wis', author:'Augustine', work:'On Christian Doctrine', locus:'IV.5 (Shaw)', species:'epideictic', src:'ddc',
    cue:'Wisdom without eloquence helps little; eloquence without wisdom hinders.',
    text:t, spans:qmark(t, [
      {s:'Wisdom without eloquence is of little use to states, but eloquence without wisdom is often a great hindrance, and never of any use', f:'antithesis', w:'Wisdom without eloquence against eloquence without wisdom: both horns named.'},
      {s:'the true wisdom — that is, the wisdom of God', f:'correctio', w:'He takes back “wisdom” to put the sharper name: of God.'}
    ])});
})();

(function(){
  const t = "How many pictures of high endeavour has the great poet left us, of brave men, of famous cities, of wars! How many speeches of kings and of captains, how many descriptions of places, how many precepts of life and of manners! These we may set before us as patterns, and from them take what is of use for our own speaking and our own life.";
  P.push({id:'q-cic-arch-poet', author:'Cicero', work:'Pro Archia', locus:'14', species:'forensic', src:'cic_orat',
    cue:'The poet as a store of examples for the orator.',
    text:t, spans:qmark(t, [
      {s:'How many pictures of high endeavour has the great poet left us, of brave men, of famous cities, of wars!', f:'exclamatio', w:'An open cry of plenty, before the list.'},
      {s:'How many speeches of kings and of captains, how many descriptions of places, how many precepts of life and of manners!', f:'anaphora', w:'How many sounded three times; the ear waits on the store.'}
    ])});
})();

window.QUIZ_PASSAGES = P;

window.QUIZ_ITEMS = {
  ENTHYMEMES:[
    {id:'qe1', said:'We must not yield to the Peloponnesians. Once a state begins to submit, it will find itself with a master.',
      missing:'To keep freedom, a city must refuse the first concession.',
      distractors:['All Peloponnesians are slaves','Helen went by love only','The six offices are a template for every speech'],
      src:'thuc_crawley', cite:'Thucydides 1.140, Pericles'},
    {id:'qe2', said:'A democracy is incapable of empire — punish Mytilene and teach the allies that rebellion is death.',
      missing:'Empire is held by fear of a known penalty, not by being talked out of a sentence.',
      distractors:['All democracies are just','The funeral oration is forensic','Javelins always miss'],
      src:'thuc_crawley', cite:'Thucydides 3.40, Cleon'},
    {id:'qe3', said:'I shall obey God rather than you.',
      missing:'When the city’s command and the god’s command differ, the god is to be obeyed.',
      distractors:['Socrates has no city','All philosophy is epideictic','The narration of a tetralogy never shrinks'],
      src:'plato_jowett', cite:'Plato, Apology 29d (Jowett)'},
    {id:'qe4', said:'It is not the victory of the speaker that is sought, but the salvation of the hearer.',
      missing:'The Christian orator’s end is the hearer’s good, not the speaker’s fame.',
      distractors:['Augustine forbids all Cicero','Pathos is the only pistis','Catiline sits in the senate by right'],
      src:'ddc', cite:'Augustine, De doctrina christiana IV'},
    {id:'qe5', said:'I will suffer neither them nor any other to be king at Rome.',
      missing:'Kingship, once it has done this injury, is itself the crime to be ended.',
      distractors:['Brutus was already consul','All oaths are epideictic','The boy ran out on purpose'],
      src:'livy_r', cite:'Livy 1.59'},
    {id:'qe6', said:'The city’s appointee must be obeyed, in just things and unjust.',
      missing:'Civic order is a greater good than the justice of any one command.',
      distractors:['Creon is a jury','Antigone is a deliberative assembly','All signs are necessary'],
      src:'soph_storr', cite:'Sophocles, Antigone'},
    {id:'qe7', said:'Words cannot inspire courage; a timid army cannot be made valiant by a speech.',
      missing:'Courage, if it is not already in the breast, will not be put there by logos.',
      distractors:['Catiline has no soldiers','All pathos is irascible','Helen is a forensic narration'],
      src:'sallust_w', cite:'Sallust, Catiline 58'},
    {id:'qe8', said:'These studies are the food of youth, the delight of old age.',
      missing:'What nourishes the mind in every season is a public good, and its teachers are to be kept.',
      distractors:['Archias was a Roman by birth','All praise is forensic','The four aitiai acquit Catiline'],
      src:'cic_orat', cite:'Cicero, Pro Archia 16'}
  ],
  PASSIONS:[
    {id:'qp1', name:'anger', appetite:'irascible', text:'Depart then, and rid us of this fear; if it is a well-founded fear, that it may not crush us.', cite:'Cicero, Catilinarian 1.10–11', src:'cic_cat', why:'Anger at the man still sitting there, joined with the desire that he be gone (Aristotle II.2).'},
    {id:'qp2', name:'fear', appetite:'irascible', text:'Once a state begins to submit, it will find itself with a master.', cite:'Thucydides 1.140, Pericles', src:'thuc_crawley', why:'Fear of a future master: a pain from imagining a destructive evil (II.5).'},
    {id:'qp3', name:'confidence', appetite:'irascible', text:'I honour and love you; but I shall obey God rather than you, and while I have life and strength I shall never cease.', cite:'Plato, Apology 29d', src:'plato_jowett', why:'Confidence as imagination of safety in the god’s command (II.5), against the jury’s threat.'},
    {id:'qp4', name:'pity', appetite:'concupiscible', text:'By this blood, most chaste until a king’s injury was offered to it, I swear.', cite:'Livy 1.59', src:'livy_r', why:'Pity for undeserved destruction of the chaste (II.8), turned at once into an oath.'},
    {id:'qp5', name:'indignation', appetite:'irascible', text:'Fortune began to grow cruel, and to throw all things into confusion.', cite:'Sallust, Catiline 10', src:'sallust_w', why:'Indignation at a turn of fortune after greatness (II.9), the good of empire already in hand.'},
    {id:'qp6', name:'shame', appetite:'concupiscible', text:'Why do you care so much about money and honour and reputation, and so little about wisdom and truth and the soul?', cite:'Plato, Apology 29d–e', src:'plato_jowett', why:'Shame at caring for the lesser goods (II.6): the question is meant to sting.'},
    {id:'qp7', name:'hatred', appetite:'concupiscible', text:'I will pursue Lucius Tarquinius Superbus and his wicked wife and all their children, with sword, with fire.', cite:'Livy 1.59', src:'livy_r', why:'Hatred as a settled wish for another’s ill, without waiting on a fresh slight (II.4).'},
    {id:'qp8', name:'kindness', appetite:'concupiscible', text:'He should do both in such a way as to win, if possible, the man he refutes. For it is not the victory of the speaker that is sought, but the salvation of the hearer.', cite:'Augustine, DDC IV', src:'ddc', why:'Kindness as wishing the hearer’s good (II.7), even in refutation.'}
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
    {pid:'q-cic-arch-1', pistis:'logos', why:'The studies are argued from what they do in every season: a claim about their use, not a cry only.'},
    {pid:'q-cic-cat1-end', pistis:'pathos', why:'Fear named, founded or groundless: both horns are to move the senate to be rid of him.'},
    {pid:'q-thuc-per-140', pistis:'logos', why:'A principle held through all: concession makes a master. The argument is the rule.'},
    {pid:'q-thuc-cleon-40', pistis:'logos', why:'Empire and the penalty of rebellion: a policy from what empire is.'},
    {pid:'q-plato-ap-29', pistis:'ethos', why:'He will obey God rather than the jury. The manner of the man is the proof.'},
    {pid:'q-aug-ddc-win', pistis:'ethos', why:'The speaker’s goodwill is for the hearer’s salvation, not his own victory.'},
    {pid:'q-sal-cat-58', pistis:'ethos', why:'He will not pretend that a speech can make the timid valiant: character as frankness.'},
    {pid:'q-liv-brut-1', pistis:'pathos', why:'The oath over blood: the hearer is put into horror and then into a vow.'},
    {pid:'q-dem-ol1', pistis:'logos', why:'Be of one mind, then prepare: a deliberative sequence from interest.'},
    {pid:'q-plato-ap-diff', pistis:'logos', why:'Death is the slower runner: a claim about which evil is worse, argued by the likeness.'},
    {pid:'q-sal-cat-10', pistis:'pathos', why:'Fortune grows cruel: the hearer is put into the mind of a fall after greatness.'},
    {pid:'q-plato-crito-laws', pistis:'logos', why:'The laws argue from what a state is, if decisions can be set aside.'},
    {pid:'q-her-mar-1', pistis:'pathos', why:'Flattery and slight of Europe: the hearer (Xerxes) is put into confidence.'},
    {pid:'q-soph-creon-1', pistis:'logos', why:'Obedience in just and unjust: a rule of the city, argued as if necessary.'},
    {pid:'q-aug-ddc-wis', pistis:'logos', why:'Wisdom and eloquence distinguished: a claim about what each is worth without the other.'},
    {pid:'q-cic-arch-poet', pistis:'logos', why:'The poet as paradeigma: examples for speaking and for life.'}
  ],
  ETHOS_ITEMS:[
    {id:'qet1', pid:'q-plato-ap-29', which:'arete', label:'Virtue (arete)',
      why:'He will obey God rather than the jury. The refusal is the man.'},
    {id:'qet2', pid:'q-thuc-per-140', which:'phronesis', label:'Practical wisdom (phronesis)',
      why:'One principle held through all: he asks to be trusted as the man who has seen concession’s end.'},
    {id:'qet3', pid:'q-aug-ddc-win', which:'eunoia', label:'Goodwill (eunoia)',
      why:'The hearer’s salvation, not the speaker’s victory: goodwill named as the end.'},
    {id:'qet4', pid:'q-sal-cat-58', which:'phronesis', label:'Practical wisdom (phronesis)',
      why:'He will not claim that words make the timid valiant. Frank limit of the art is itself credit.'},
    {id:'qet5', pid:'q-dem-ol1', which:'eunoia', label:'Goodwill (eunoia)',
      why:'He wants them of one mind for their interest: goodwill as shared advantage.'},
    {id:'qet6', pid:'q-cic-arch-1', which:'phronesis', label:'Practical wisdom (phronesis)',
      why:'He knows what the studies are for, in youth and age: the advocate as a man who has used them.'}
  ],
  LEXIS_ITEMS:[
    {id:'qlx1', pid:'q-plato-ap-diff',
      prompt:'“Unrighteousness runs faster than death.” Does the claim stand without the figure, or is the figure the claim?',
      options:['The figure is only sound; nothing is being argued','The likeness (two runners) is how the claim is seen; stripped to “unrighteousness is worse,” the argument remains, thinner','This is a forensic narration of a homicide','This is Gorgias’s four aitiai'],
      correct:1, note:'The metaphor makes the ranking visible. The ranking can still be said in plain clauses.'},
    {id:'qlx2', pid:'q-sal-cat-10',
      prompt:'“Fortune began to grow cruel.” Does the personification do the work of the claim, or serve it?',
      options:['Without Fortune as an agent there is no history here','The turn of the republic after Carthage can be said in plain clauses; the personification makes the turn felt','This is a subdued teaching style only','This is an inartistic contract'],
      correct:1, note:'Fortune as agent is pathos. The facts (Carthage fallen, sea and land open) remain without her name.'},
    {id:'qlx3', pid:'q-cic-arch-1',
      prompt:'The studies as food, delight, ornament, refuge: is the figure doing the work of the argument?',
      options:['Yes: without the metaphors there is no case for Archias','The metaphors dress a list of uses; the uses can be numbered in plain prose','This is only an exordium of fear','This is a necessary sign of fever'],
      correct:1, note:'Metaphor here is ornament of a catalogue. The catalogue is the logos.'},
    {id:'qlx4', pid:'q-thuc-cleon-40',
      prompt:'“A democracy is incapable of empire.” If you drop the hardness of the maxim, what remains?',
      options:['Nothing but Cleon’s manner','A deliberative claim about how empire is held, which can be judged true or false','An encomium of Helen','A confession of delayed chastity'],
      correct:1, note:'A sententia can be plain. Cleon’s case is the penalty, not the music of the clause.'},
    {id:'qlx5', pid:'q-aug-ddc-wis',
      prompt:'“Wisdom without eloquence… eloquence without wisdom.” The antithesis here is',
      options:['The whole doctrine; without the turn there are not two dangers','A dressing of two claims that remain if listed: wisdom alone helps little, eloquence alone hinders','Gorgias’s drug','The six parts of the Latin oration'],
      correct:1, note:'The figure sets the two dangers in parallel. Both can be said as two sentences of plain counsel.'},
    {id:'qlx6', pid:'q-liv-brut-1',
      prompt:'Sword, fire, whatsoever violence: does the climax replace the oath, or serve it?',
      options:['The climax is the oath; there is no promise without the rise','The oath would stand as a promise in plain words; the climax moves the hearer as it is sworn','This is a subdued teaching style only','This is an inartistic contract'],
      correct:1, note:'Style serving pathos in an oath. The duty sworn can be said without the rise.'}
  ],
  AUG_ITEMS:[
    {id:'qau1', pid:'q-aug-ddc-win',
      prompt:'“It is not the victory of the speaker that is sought, but the salvation of the hearer.” Augustine is naming',
      options:['The sophistic end: win the case for pay','The Christian orator’s end: the hearer’s good, even in refutation','The four aitiai of Helen','The shrinking of narration'],
      correct:1, note:'The office is kept; the end is changed. Win the man, not the palm.'},
    {id:'qau2', pid:'q-aug-ddc-wis',
      prompt:'“Eloquence without wisdom is often a great hindrance, and never of any use.” Augustine is warning against',
      options:['All use of Cicero by Christians','Style asked to do the work of wisdom — lexis without the true res','The shrinking of narration','The four aitiai'],
      correct:1, note:'Eloquence is kept, but only with wisdom. The Christian may be eloquent; he may not be eloquent instead of wise.'},
    {id:'qau3', pid:'q-aug-ddc-win',
      prompt:'A Christian who holds the truth as if it were his own, on this account, has',
      options:['Succeeded: the truth is private property','Failed the ethos of the office: the truth is not his','Completed a tetralogy','Proved a tekmerion'],
      correct:1, note:'The truth he holds is not his own. That is the character the speech must show.'},
    {id:'qau4', pid:'q-aug-ddc-wis',
      prompt:'If those taught the wisdom of God are also eloquent, “so much the better.” Eloquence is',
      options:['Forbidden as worldly','Permitted and even praised, when it serves the true wisdom','The whole of the Christian orator’s art','A tekmerion of grace'],
      correct:1, note:'Wisdom first; eloquence with it is gain. Not the other way round.'}
  ],
  GREG_PAIRS:[
    {id:'qg1', pair:'the healthy and the sick', why:'The healthy are to be admonished not to trust the body; the sick are to be comforted, lest pain break them into murmuring.', src:'greg'},
    {id:'qg2', pair:'those who sin in thought and those who sin in deed', why:'The one must be checked before the thought becomes an act; the other must be called back from an act already public.', src:'greg'},
    {id:'qg3', pair:'the married and the unmarried', why:'The married are to be bound to fidelity without being taught to despise the unmarried life; the unmarried, to continence without pride against the married.', src:'greg'},
    {id:'qg4', pair:'those in authority in the world and those in want', why:'The powerful are to be made afraid of the Judge; those in want are not to be crushed by their want, nor taught to envy as if it were justice.', src:'greg'}
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
    correct:1, note:'Rhetoric I.2. Winning is an effect. Figures belong to lexis. The first work is to see what can be said.'},
  {div:'I', prompt:'The three artistic means of persuasion (pisteis) are',
    options:['Grammar, logic, and rhetoric','The speaker’s character (ethos), the hearer’s passions (pathos), and the argument (logos)','Opening, narration, and proof','Teaching, delighting, and moving'],
    correct:1, note:'Aristotle I.2, 1356a. Inartistic proofs (laws, witnesses) are outside the art.'},
  {div:'I', prompt:'The three kinds of speech (species) are distinguished by',
    options:['The length of the oration','The hearer’s office: jury of the past, assembly of the future, spectator of the noble','Whether Latin or Greek is used','The number of figures in the close'],
    correct:1, note:'Aristotle I.3. Forensic, deliberative, epideictic — from what the hearer is to judge.'},
  {div:'II', prompt:'What makes an enthymeme rhetorical rather than a full syllogism of the Analytics?',
    options:['It is always invalid','It addresses probable matters, often with a premise the hearers supply','It never uses signs','It belongs only to forensic oratory'],
    correct:1, note:'The form is still syllogistic; the matter is likely, and the audience is not a class in logic.'},
  {div:'II', prompt:'A necessary sign (tekmerion) differs from a fallible sign in that',
    options:['It is spoken more loudly','From a tekmerion the conclusion cannot fail; a fallible sign is only likely','It is always a metaphor','It belongs only to epideictic'],
    correct:1, note:'If he has a fever, he is ill — a tekmerion. A death and a thrown javelin do not by themselves settle whose error it was.'},
  {div:'III', prompt:'Ethos, for Aristotle, is trustworthy when it is',
    options:['A reputation brought in from outside the speech','Shown in the speech: practical wisdom, virtue, and goodwill','The same as pathos','An inartistic proof, like a written law'],
    correct:1, note:'Phronesis, arete, eunoia — in the speech. Reputation named from outside is atechnos.'},
  {div:'III', prompt:'On Aquinas’s division, anger belongs to',
    options:['The concupiscible appetite, because it is a simple love of revenge','The irascible appetite, because its object is an arduous evil','The intellect, because it is a judgment','Pathos only, never a passion of the soul'],
    correct:1, note:'Irascible: the object is an evil that must be overcome. Rhetoric II.2 names the state of mind, the objects, and the grounds.'},
  {div:'III', prompt:'Gregory pairs hearers because',
    options:['Every vice is cured by the same word','The same vice is not admonished in the same way in every constitution','Figures of speech replace a doctrine of the hearer','All hearers are moved only by fear'],
    correct:1, note:'The Pastoral Care is a book of hearers. A word that heals one wounds another.'},
  {div:'IV', prompt:'Aristotle’s four parts of the speech, beside the Latin school’s six offices, are',
    options:['Ethos, pathos, logos, and lexis','Opening (prooimion), statement with narration as needed, proof, and close (epilogos)','Teach, delight, move, and convert','Genus, species, difference, and property'],
    correct:1, note:'The six are offices a part may perform, not a template. A tetralogy may shrink narration to a sentence.'},
  {div:'IV', prompt:'When the facts are agreed and only the cause is in dispute, which office shrinks?',
    options:['The peroration, because there is nothing to feel','The narration, because the story is not the fight','The proof, because there are no arguments left','The exordium, because the jury is already paying attention'],
    correct:1, note:'Antiphon’s tetralogy: narration can be a sentence. Proof and refutation swell.'},
  {div:'V', prompt:'The first virtue of style, for Aristotle, is',
    options:['As many figures as the breath will bear','Clarity, and neither meanness nor a dignity above the subject','That the figures do the work of the argument','Silence'],
    correct:1, note:'Rhetoric III.2. Ornament second. The sophistic vice is to make lexis do the work of logos.'},
  {div:'V', prompt:'Gorgias’s Helen is the exhibit of',
    options:['A plain deliberative policy','What happens when style is asked to do the work of argument','The six offices in school order','Aquinas’s irascible appetite'],
    correct:1, note:'Van Hook’s English is built of antithesis and equal members. Ask whether the claim would survive in plain clauses.'},
  {div:'VI', prompt:'Anaphora is',
    options:['The speaker’s character doing the work of proof','The same word at the head of successive members','The opening office of the oration','A necessary sign of fever'],
    correct:1, note:'A figure of speech, not a pistis and not an office of arrangement.'},
  {div:'VI', prompt:'Ethos, pathos, and the exordium are',
    options:['Figures of speech, to be clicked in the excerpt','Means of persuasion, or an office of arrangement — not figures of speech','The three species of oratory','The four aitiai of Helen'],
    correct:1, note:'Do not name a pistis or an office as if it were anaphora. The figures exercises ask for the figures.'},
  {div:'VII', prompt:'On Gorgias’s four aitiai, Helen went by fortune (or the gods), by violence, by persuasion, or by love. Being persuaded is treated as',
    options:['Choosing freely, and therefore being guilty','Being acted on, as by a drug or by violence, and therefore not culpable','A logical demonstration from necessary premises','A forensic narration of agreed facts'],
    correct:1, note:'Helen 8–14: logos as a potentate. Aristotle will not grant that account of agency; the course asks you to see it.'},
  {div:'VII', prompt:'In Antiphon’s Second Tetralogy the facts of the throw are agreed. The dispute is therefore',
    options:['Whether a javelin was thrown at all','How the act is to be named and caused — error (hamartia), and whose','Whether Helen is to be praised or blamed','Whether Athens should sail to Sicily'],
    correct:1, note:'Forensic oratory at the limit: narration collapses; invention works on description and cause.'},
  {div:'VII', prompt:'Augustine keeps Cicero’s three offices. They are',
    options:['Grammar, logic, and rhetoric','To teach, to delight, to move (docere, delectare, flectere)','Ethos, pathos, and logos','Opening, narration, and proof'],
    correct:1, note:'DDC IV. The end is Scripture’s truth, not a fee. The test of the grand style is tears, not applause.'},
  {div:'VII', prompt:'The sign that a grand-style sermon has done its office, for Augustine, is',
    options:['Applause and the preacher’s name','Tears, and a change of life','A perfect isocolon in every member','The suppression of all figures as worldly'],
    correct:1, note:'The Caterva at Caesarea: he asked for groans, not cheers.'}
];
})();
