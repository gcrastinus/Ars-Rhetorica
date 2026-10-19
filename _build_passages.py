#!/usr/bin/env python3
"""Build passages.js from cleaned public-domain translations under /tmp/pdtexts/clean."""
from pathlib import Path
import json, re

CLEAN = Path("/tmp/pdtexts/clean")
OUT = Path("/workspace/ars-rhetorica/passages.js")
TEXTS = {p.name: p.read_text() for p in CLEAN.glob("*.txt")}

def extract(src, start, end=None, maxlen=1100):
    t = TEXTS[src]
    i = t.find(start)
    if i < 0:
        raise ValueError(f"[{src}] start not found: {start[:90]!r}")
    if end:
        j = t.find(end, i)
        if j < 0:
            raise ValueError(f"[{src}] end not found: {end[:90]!r}")
        j += len(end)
    else:
        j = min(len(t), i + maxlen)
        m = re.search(r'[.!?]["\']?', t[j:j+220])
        if m:
            j = j + m.end()
    text = re.sub(r"\s+", " ", t[i:j]).strip()
    text = re.sub(r"\[\s*[nN]\s*\]", "", text)
    text = re.sub(r"\s+", " ", text).strip()
    return text

PASSAGES, ERRORS = [], []

def add(pid, author, work, locus, src, start, cue, figs, end=None, maxlen=1100):
    try:
        text = extract(src, start, end=end, maxlen=maxlen)
    except ValueError as e:
        ERRORS.append(str(e))
        return
    spans = []
    for fig, snip, why in figs:
        k = text.find(snip)
        if k < 0:
            ERRORS.append(f"[{pid}] {fig} missing: {snip[:75]!r}")
            continue
        spans.append({"start": k, "end": k + len(snip), "figure": fig, "why": why})
    if len(spans) < 2:
        ERRORS.append(f"[{pid}] only {len(spans)} spans; text starts {text[:80]!r}")
        return
    PASSAGES.append({
        "id": pid, "author": author, "work": work, "locus": locus,
        "cue": cue, "text": text, "spans": spans
    })

# ======================== CICERO ========================
add("cic-cat1-1","Cicero","First Oration against Catiline","1.1",
    "cicero-cat1.txt","How much further, Catilina, will you carry your abuse of our forbearance?",
    "The opening of the First Catilinarian: patience exhausted, the conspiracy known.",
    [
      ("apostrophe","How much further, Catilina, will you carry your abuse of our forbearance?","He turns from the senate and addresses the accused by name."),
      ("anaphora","How much further, Catilina, will you carry your abuse of our forbearance? How much longer will your reckless temper baffle our restraint?","How much is sounded twice; the ear waits for the blow to fall."),
      ("rhetorical question","What bounds will you set to this display of your uncontrolled audacity?","The question is not for an answer. It is a charge dressed as inquiry."),
      ("tricolon","by the alarm of the people, by the rallying of all loyal citizens, by the convening of the senate","Three members, same construction, rising in public weight."),
    ], maxlen=780)

add("cic-cat1-2","Cicero","First Oration against Catiline","1.2",
    "cicero-cat1.txt","Alas! what degenerate days are these!",
    "The criminal still lives — and sits in the senate.",
    [
      ("exclamatio","Alas! what degenerate days are these!","An open cry of the times, before the proof begins."),
      ("epizeuxis","Lives? Yes, lives;","The word lives is struck twice, once as question and once as bitter confirmation."),
      ("irony","And we, such is our bravery, think we are doing our duty to our country","He praises their bravery in order to name their cowardice."),
      ("apostrophe","No, Catilina, long ere now you should yourself have been led by the consul's orders to execution","Again the name, and the sentence that has not been passed."),
    ], maxlen=700)

add("cic-cat1-4","Cicero","First Oration against Catiline","1.4",
    "cicero-cat1.txt","Merciful heavens! Where are we?",
    "The night at Laeca's house, named in the senate's hearing.",
    [
      ("apostrophe","Merciful heavens!","He cries out to the gods before he names the place."),
      ("rhetorical question","Where are we? In what country, in what city are we dwelling?","Three questions, none wanting an answer: the shock is the point."),
      ("hyperbole","the total ruin of this city and in fact of the civilised world","The plot against Rome is stretched to the ruin of the world."),
      ("asyndeton","you divided Italy into districts; you decided to what quarter you wished each of your friends to proceed; you chose whom you would leave at Rome","Clause after clause, no and to soften them: a night's work as a list."),
    ], maxlen=1100)

add("cic-cat1-5","Cicero","First Oration against Catiline","1.5",
    "cicero-cat1.txt","I will not bear, I will not endure, I will not allow it.",
    "The consul refuses any longer to share the city with the conspirator.",
    [
      ("anaphora","I will not bear, I will not endure, I will not allow it.","Three refusals, same opening, last member the strongest."),
      ("tricolon","I will not bear, I will not endure, I will not allow it.","A rising three: bear, endure, allow."),
      ("epithet","this brutal man, this baneful and vindictive enemy of our country","Stacked names for one man, each heavier than the last."),
    ], maxlen=500)

add("cic-cat1-6","Cicero","First Oration against Catiline","1.6",
    "cicero-cat1.txt","What object indeed is there in this city, Catilina, in which you can feel any pleasure?",
    "Nothing in Rome can please a man whom every loyal citizen fears and hates.",
    [
      ("rhetorical question","What object indeed is there in this city, Catilina, in which you can feel any pleasure?","The question is a door slammed: there is no such object."),
      ("anaphora","Is there any form of personal immorality which has not stained your family life? Is there any scandal to be incurred by private conduct which has not attached itself to your reputation?","Is there any — twice. The vice is made to seem without remainder."),
      ("praeteritio","I pass over, and am content to leave it unnamed","He names that he will not name it — and so names it more sharply than a charge would."),
    ], maxlen=1600)

add("cic-cat1-7","Cicero","First Oration against Catiline","1.7",
    "cicero-cat1.txt","Your country, Catilina, pleads with you thus, and appeals with mute eloquence:",
    "Rome herself is made to speak, and to send him away.",
    [
      ("personification","Your country, Catilina, pleads with you thus, and appeals with mute eloquence:","The res publica is given a voice and a mother's claim."),
      ("prosopopoeia","For several years now no crime has been committed without your help","Not Cicero now: Rome speaks in the first person."),
      ("antithesis","If they are well-founded, withdraw that I may not be utterly destroyed; if they are groundless, go that I may at last cease to be apprehensive.","Two horns, same command: go."),
    ], end='cease to be apprehensive."')

add("cic-cat1-13","Cicero","First Oration against Catiline","1.13",
    "cicero-cat1.txt","As men stricken with a dangerous disease, when hot and tossing with fever",
    "The conspiracy as a fever: kill one man and the disease returns.",
    [
      ("simile","As men stricken with a dangerous disease, when hot and tossing with fever, often seem at first to be relieved by a draught of cold water, but afterwards are much more gravely and severely afflicted","The sick man and the cold water: a likeness drawn out."),
      ("metaphor","so this disease, which has seized the state","Now the likeness is dropped and the state is simply ill."),
      ("anaphora","Let the disloyal then withdraw, let them separate themselves from the loyal, let them herd together in one place","Three let them, the last already treating the conspirators as cattle."),
    ], maxlen=850)

add("cic-cat2-1","Cicero","Second Oration against Catiline","2.1",
    "cicero-cat2.txt","At length and at last, citizens of Rome, we have prevailed over L. Catilina;",
    "Catiline has left the city: the consul tells the people what has been won.",
    [
      ("apostrophe","citizens of Rome, we have prevailed over L. Catilina;","He turns to the people, not the senate, with the news."),
      ("tricolon","with passion in his violent heart, with crime on his furious lips, in the midst of his abominable designs","Three with-phrases, each a charge, before the news that he is gone."),
      ("correctio","he has been by us ejected, or shall I say despatched from the city, or at least while departing of his own accord sped on his way by our valedictions.","He offers a word, takes it back, offers a milder — and the mildest is still a jeer."),
      ("asyndeton","He has gone, he has escaped us, evaded us","Three verbs, no and: the flight is made to sound like a rout."),
    ], maxlen=780)

add("cic-cat2-7","Cicero","Second Oration against Catiline","2.7",
    "cicero-cat2.txt","Alas! how wretched is the vocation not only of those who govern but even of those",
    "The consul on the wretchedness of office when the city itself is the enemy's camp.",
    [
      ("exclamatio","Alas! how wretched is the vocation","A cry, not a proof: the feeling is put first."),
      ("antithesis","not only of those who govern but even of those","The misery is stretched from the governors to those who merely look on."),
      ("rhetorical question","Alas! how wretched is the vocation not only of those who govern but even of those","The how is not a request for measure; it is already a verdict."),
    ], maxlen=700)

add("cic-cat2-11","Cicero","Second Oration against Catiline","2.11",
    "cicero-cat2.txt","Oh! how horribly we must dread this war, when we know that Catilina is going to",
    "Irony at the army Catiline will lead: the dread is a jeer.",
    [
      ("irony","Oh! how horribly we must dread this war","He names dread in order to deny it."),
      ("exclamatio","Oh! how horribly we must dread this war","The cry is too large for the thing: that is the point."),
      ("apostrophe","when we know that Catilina is going to","The name again, now of a general without an army worth the name."),
    ], maxlen=700)

add("cic-cat3-1","Cicero","Third Oration against Catiline","3.1",
    "cicero-cat3.txt","Your country, citizens of Rome, and the lives of you all, your goods and estates, your wives and children",
    "The people are shown what has been snatched from the fire.",
    [
      ("enumeratio","Your country, citizens of Rome, and the lives of you all, your goods and estates, your wives and children, yes, and this abode and seat of an empire most renowned, this most fortunate and beautiful of cities","A rising list of what was at stake, from household to the empire's seat."),
      ("tricolon","the toils, the policy, and the perils of myself","Three nouns for the consul's work, the last the cost."),
      ("metaphor","snatched from the jaws of","The danger is given a mouth."),
      ("apostrophe","citizens of Rome, and the lives of you all","The people are named as those who still have lives to lose."),
    ], maxlen=700)

add("cic-cat3-9","Cicero","Third Oration against Catiline","3.9",
    "cicero-cat3.txt","Now who can be so obstinately blind to truth, so headstrong, so deluded, as to d",
    "After the letters are read, disbelief itself is made to look like madness.",
    [
      ("rhetorical question","Now who can be so obstinately blind to truth, so headstrong, so deluded","The who expects no name: the answer is no one, or a fool."),
      ("tricolon","so obstinately blind to truth, so headstrong, so deluded","Three so-phrases, mounting from blindness to delusion."),
      ("climax","blind to truth, so headstrong, so deluded","Blind, then stubborn, then out of one's mind."),
    ], maxlen=700)

add("cic-cat4-1","Cicero","Fourth Oration against Catiline","4.1",
    "cicero-cat4.txt","I perceive, conscript fathers, that the faces and the eyes of all present are turned towards me:",
    "Before the vote on the conspirators' lives, the consul reads the house.",
    [
      ("apostrophe","I perceive, conscript fathers, that the faces and the eyes of all present are turned towards me:","He names the order he is about to move."),
      ("antithesis","Pleasant indeed to me in the midst of misfortunes, and gratifying in the midst of sorrow","Pleasure set against misfortune, gratification against sorrow."),
      ("climax","anxious not only as to the danger to yourselves and the country, but even, supposing that danger to be averted, as to the personal danger to me","From the state to himself: the last anxiety is the one he will refuse to honour."),
    ], maxlen=700)

add("cic-cat4-2","Cicero","Fourth Oration against Catiline","4.2",
    "cicero-cat4.txt","Therefore, conscript fathers, take thought for yourselves, provide for your fath",
    "The house is told to look to itself, its people, and its children.",
    [
      ("apostrophe","Therefore, conscript fathers, take thought for yourselves","The vocative, then the charge."),
      ("tricolon","take thought for yourselves, provide for your fath","The three cares of a senate that still has something to save — if the third member completes."),
      ("rhetorical question","Therefore, conscript fathers, take thought for yourselves","A command dressed in the address of counsel."),
    ], maxlen=800)

add("cic-milo-1","Cicero","Pro Milone","1",
    "cicero-milo.txt","Although I am afraid, gentlemen of the jury, that fear is an unseemly condition in which to begin a speech in defence of the bravest of men;",
    "The defence of Milo opens by confessing fear — and making that fear an argument.",
    [
      ("irony","fear is an unseemly condition in which to begin a speech in defence of the bravest of men","The bravest of men is defended by a speaker who admits he is afraid."),
      ("antithesis","Titus Annius himself is more anxious for the safety of the state than for his own","The client's care is for Rome, not for Milo."),
      ("apostrophe","gentlemen of the jury, that fear is an unseemly condition","The jury is named before the fear is confessed."),
    ], maxlen=780)

add("cic-marc-1","Cicero","Pro Marcello","1",
    "cicero-marcellus.txt","To-day, conscript fathers, has brought to a close the long silence, due not to a feeling of fear, but to mingled feelings of grief and of diffidence",
    "Caesar has pardoned Marcellus: Cicero finds his voice again.",
    [
      ("antithesis","due not to a feeling of fear, but to mingled feelings of grief and of diffidence","He denies the worse motive in order to confess the better ones."),
      ("climax","such humanity, such exceptional, nay, unheard-of clemency, such invariable moderation","Humanity, then clemency named as unheard-of, then moderation that does not fail."),
      ("hyperbole","such incredible and almost superhuman loftiness of mind","Almost superhuman: the praise is deliberately past the human measure."),
      ("apostrophe","To-day, conscript fathers, has brought to a close the long silence","The senate is named as the place where silence ends."),
    ], maxlen=850)

add("cic-phil-1","Cicero","Philippics","1.1",
    "cicero-philippics.txt","To what destiny of mine, O conscript fathers, shall I say that it is owing, that none for the last twenty years has been an enemy to the republic without at the same time declaring war against me?",
    "The First Philippic opens by binding Cicero's person to the republic's enemies.",
    [
      ("apostrophe","O conscript fathers","The senate is addressed in the vocative before the charge is laid."),
      ("rhetorical question","To what destiny of mine, O conscript fathers, shall I say that it is owing, that none for the last twenty years has been an enemy to the republic without at the same time declaring war against me?","The question answers itself: his fate and the republic's are one."),
      ("apostrophe","O Antonius, do not fear the end of those men whose conduct you are imitating.","The turn from the house to the man: the name is a warning."),
    ], maxlen=900)

add("cic-ver-1","Cicero","Against Verres I","1.1",
    "cicero-verres.txt","Gentlemen of the Court: At this great political crisis, there seems to have been offered to you, not through man's wisdom but almost as the direct gift of heaven, the very thing that was most to be desired;",
    "The first Verrine: the court is told that heaven has given it a chance to clear its name.",
    [
      ("apostrophe","Gentlemen of the Court:","The jury is named at once; the case is theirs."),
      ("antithesis","not through man's wisdom but almost as the direct gift of heaven","Human counsel is set down so that providence may be set up."),
      ("climax","the unpopularity of your Order and the discredit attaching to these Courts of Law","From the senate's name to the courts' name: both are in the dock with Verres."),
    ], maxlen=780)


# ======================== PLATO ========================
add("plato-ap-1","Plato","Apology","17a",
    "plato-apology.txt","How you, O Athenians, have been affected by my accusers, I cannot tell;",
    "Socrates opens by denying that he is the clever speaker they have been warned against.",
    [
      ("apostrophe","O Athenians, have been affected by my accusers, I cannot tell;","He turns to the judges by name at the first breath."),
      ("irony","they almost made me forget who I was—so persuasively did they speak; and yet they have hardly uttered a word of truth.","Praise of their persuasion, at once taken back: the persuasion was of falsehood."),
      ("antithesis","so persuasively did they speak; and yet they have hardly uttered a word of truth.","Persuasion set against truth: the two are not the same art."),
    ], maxlen=850)

add("plato-ap-2","Plato","Apology","38a",
    "plato-apology.txt","the unexamined life is not worth living",
    "The sentence for which the jury will not forgive him.",
    [
      ("sententia","the unexamined life is not worth living","A maxim, compact enough to be carried away — and to convict him."),
      ("litotes","you are still less likely to believe me.","Not a loud claim: the understatement is that they will not believe even this."),
      ("antithesis","Yet I say what is true, although a thing of which it is hard for me to persuade you.","True, and hard to persuade: logos without the other two pisteis."),
    ], maxlen=700)

add("plato-crito-1","Plato","Crito","43a",
    "plato-crito.txt","Why have you come at this hour, Crito? it must be quite early.",
    "Dawn in the prison: the dialogue opens in a low voice.",
    [
      ("apostrophe","Why have you come at this hour, Crito?","The friend is named before the hour is asked."),
      ("rhetorical question","Why have you come at this hour, Crito?","He knows; the question is wonder, not ignorance."),
      ("hypotyposis","The dawn is breaking.","A single stroke of the hour: the scene is made visible."),
    ], maxlen=650)

add("plato-phaed-1","Plato","Phaedrus","227a",
    "plato-phaedrus.txt","My dear Phaedrus, whence come you, and whither are you going?",
    "A walk outside the wall, and a speech about love in the pocket.",
    [
      ("apostrophe","My dear Phaedrus, whence come you, and whither are you going?","The friend named, and two questions that are already a welcome."),
      ("rhetorical question","whence come you, and whither are you going?","Not for a map: for the talk that will follow."),
      ("antithesis","whence come you, and whither are you going?","From and to: the whole of a walk in two adverbs."),
    ], maxlen=700)

add("plato-sym-1","Plato","Symposium","201d",
    "symposium.txt","And now, taking my leave of you, I would rehearse a tale of love which I heard from Diotima of Mantineia",
    "Socrates yields the floor to a woman of Mantineia, and calls her his teacher.",
    [
      ("praeteritio","And now, taking my leave of you","He pretends to leave the company in order to bring in another voice."),
      ("prosopopoeia","a tale of love which I heard from Diotima of Mantineia","Another speaker is about to be given the oration."),
      ("epithet","a woman wise in this and in many other kinds of knowledge","The authority is named before the doctrine."),
    ], maxlen=750)

# ======================== THUCYDIDES (Crawley) ========================
add("thuc-per-1","Thucydides","History of the Peloponnesian War","2.36",
    "thucydides.txt","I shall begin with our ancestors: it is both just and proper that they should have the honour of the first mention on an occasion like the present.",
    "Pericles' funeral oration: the dead are praised through the city that bred them.",
    [
      ("prooimion","I shall begin with our ancestors: it is both just and proper that they should have the honour of the first mention on an occasion like the present.","The beginning names its own duty: ancestors first."),
      ("climax","And if our more remote ancestors deserve praise, much more do our own fathers, who added to their inheritance the empire which we now possess","From the remote to the fathers to the present: the praise climbs."),
      ("antithesis","They dwelt in the country without break in the succession from generation to generation, and handed it down free to the present time by their valour.","Dwelling without break, and freedom won by valour: two goods, one line."),
    ], maxlen=850)

add("thuc-per-2","Thucydides","History of the Peloponnesian War","2.37",
    "thucydides.txt","Our constitution does not copy the laws of neighbouring states; we are rather a pattern to others than imitators ourselves.",
    "Athens as original, not copy: the democratic claim in a single antithesis.",
    [
      ("antithesis","we are rather a pattern to others than imitators ourselves.","Pattern, not copy: the city is made the measure of others."),
      ("definition","Its administration favours the many instead of the few; this is why it is called a democracy.","He gives the name by the thing, not the thing by the name."),
      ("antithesis","If we look to the laws, they afford equal justice to all in their private differences; if no social standing, advancement in public life falls to reputation for capacity","Private equality, public advancement by merit: two fields, one justice."),
    ], maxlen=900)

add("thuc-mel-1","Thucydides","History of the Peloponnesian War","5.89",
    "thucydides.txt","the strong do what they can and the weak suffer what they must.",
    "The Athenian word at Melos: right is set aside, power is named.",
    [
      ("antithesis","the strong do what they can and the weak suffer what they must.","Two clauses, two lots: the sentence is itself the doctrine."),
      ("sententia","the strong do what they can and the weak suffer what they must.","A maxim hard enough to be remembered against its speakers."),
      ("chiasmus","the strong do what they can and the weak suffer what they must.","Strong/can, weak/must: the second pair inverts the first in fortune, not in grammar only."),
    ], maxlen=850)

# ======================== HERODOTUS (Macaulay) ========================
add("her-cro-1","Herodotus","Histories","1.6",
    "herodotus1.txt","Croesus was Lydian by race, the son of Alyattes and ruler of the nations which dwell on this side of the river Halys;",
    "The first barbarian to subdue Greeks is named, and the river that bounded him.",
    [
      ("epithet","Croesus was Lydian by race, the son of Alyattes and ruler of the nations","Race, father, rule: three names for one man before the deeds."),
      ("enumeratio","subdued certain of the Hellenes and forced them to pay tribute, while others he gained over and made them his friends.","Two lots of Greeks, two methods: tribute or friendship."),
      ("antithesis","Those whom he subdued were the Ionians","The sentence will divide the Greeks as he divided them."),
    ], maxlen=750)

add("her-sol-1","Herodotus","Histories","1.30",
    "herodotus1.txt","Athenian guest, much report of thee has come to us, both in regard to thy wisdom and thy wanderings,",
    "Croesus asks Solon who is happiest, expecting to hear his own name.",
    [
      ("apostrophe","Athenian guest, much report of thee has come to us","The king addresses the wanderer as guest before he asks the fatal question."),
      ("irony","This he asked supposing that he himself was the happiest of men; but Solon, using no flattery but the truth only","The questioner has already answered it for himself; the wise man will not."),
      ("antithesis","using no flattery but the truth only","Flattery and truth named as two roads, and only one taken."),
    ], maxlen=850)

add("her-sol-2","Herodotus","Histories","1.30",
    "herodotus1.txt",'O king, Tellos the Athenian."',
    "Solon names Tellos, not Croesus; the king must ask why.",
    [
      ("apostrophe","O king, Tellos the Athenian.","The vocative honours Croesus; the name that follows does not."),
      ("rhetorical question",'In what respect dost thou judge Tellos to be the most happy?"',"The king's question is real: he has not yet learned that he is not the measure."),
      ("enumeratio","living while his native State was prosperous, had sons fair and good and saw from all of them children begotten and living to grow up","Life, city, sons, grandsons: happiness counted in a list, not in gold."),
    ], maxlen=850)

add("her-therm-1","Herodotus","Histories","7.175",
    "herodotus2.txt","Thermopylai; for it was seen to be narrower than that leading into Thessaly, and at the same time it was single",
    "The pass is chosen because it is narrow: the place will make the men famous.",
    [
      ("antithesis","narrower than that leading into Thessaly, and at the same time it was single","Narrow and single: two reasons that are one strategy."),
      ("litotes","they did not even know of its existence until they were informed by the people of Trachis","Not even known: the understatement of a path that will ruin them."),
      ("tricolon","This pass then they resolved to guard, and not permit the Barbarian to go by into Hellas; and they resolved that the fleet should sail to Artemision","Guard, forbid, sail: three resolutions for one war."),
    ], maxlen=850)

# ======================== SALLUST (Watson) ========================
add("sal-cat-1","Sallust","Conspiracy of Catiline","5",
    "sallust.txt","Lucius Catiline was a man of noble birth, and of eminent mental and personal endowments; but of a vicious and depraved disposition.",
    "The character of Catiline: gifts named, then the use he made of them.",
    [
      ("antithesis","of eminent mental and personal endowments; but of a vicious and depraved disposition.","Gifts, then the soul that spoiled them: the but is the portrait."),
      ("asyndeton","civil commotions, bloodshed, robbery, and sedition","Four names for one delight, piled without rest."),
      ("tricolon","hunger, want of sleep, and cold","Three hardships his body could bear: the praise of a soldier given to a conspirator."),
      ("antithesis","covetous of other men's property, and prodigal of his own","Two vices that look like opposites and are one hunger."),
    ], maxlen=850)

add("sal-cat-2","Sallust","Conspiracy of Catiline","58",
    "sallust.txt","I am well aware, soldiers, that words can not inspire courage;",
    "Catiline to his last army: a speech that denies the power of speeches.",
    [
      ("apostrophe","I am well aware, soldiers, that words can not inspire courage;","He names them as soldiers before he tells them words will not save them."),
      ("sententia","words can not inspire courage; and that a spiritless army can not be rendered active, or a timid army valiant, by the speech of its commander.","A maxim against oratory, spoken by an orator."),
      ("antithesis","a spiritless army can not be rendered active, or a timid army valiant","Two pairs: spiritless/active, timid/valiant."),
      ("personification","the terror in his breast stops his ears.","Terror is given hands to stop the ears."),
    ], maxlen=800)

# ======================== TACITUS ========================
add("tac-cal-1","Tacitus","Agricola","30",
    "agricola.txt","When I reflect on the causes of the war, and the circumstances of our situation, I feel a strong persuasion that our united efforts on the present day will prove the beginning of universal liberty to Britain.",
    "Calgacus before the battle: Britain at the world's end, and Rome as the last enemy.",
    [
      ("prooimion","When I reflect on the causes of the war, and the circumstances of our situation","The speech begins by naming its grounds, as a deliberative oration should."),
      ("hyperbole","the beginning of universal liberty to Britain.","One day, all liberty: the hope is made larger than the field."),
      ("antithesis","the use of arms, which is at all times honorable to the brave, now offers the only safety even to cowards.","Honour for the brave, safety even for cowards: the same arms, two uses."),
    ], maxlen=850)

add("tac-cal-2","Tacitus","Agricola","30",
    "agricola.txt","To ravage, to slaughter, to usurp under false titles, they call empire; and where they make a desert, they call it peace.",
    "The most famous sentence in the Agricola: names stolen for crimes.",
    [
      ("tricolon","To ravage, to slaughter, to usurp under false titles","Three infinitives, no conjunction until the last crime is named as naming."),
      ("irony","they call empire; and where they make a desert, they call it peace.","They call: the names are the lie."),
      ("antithesis","where they make a desert, they call it peace.","Desert and peace: the same place, two names."),
      ("asyndeton","To ravage, to slaughter, to usurp","Three blows, no and between the first two."),
    ], maxlen=900)

# ======================== LIVY ========================
add("liv-tar-1","Livy","History of Rome","1.53",
    "livy.txt","Sextus Tarquinius had been sent to them as their general, by the special favour of the gods.",
    "Sextus at Gabii: a son's favour, and a father's lesson in treachery.",
    [
      ("irony","by the special favour of the gods.","The gods' favour is the narrator's dry word for a plot."),
      ("antithesis","Tarquin the father had not greater power at Rome than the son at Gabii.","Father at Rome, son at Gabii: two powers, one house."),
      ("litotes","When he saw he had got sufficient strength collected to support him in any undertaking","Sufficient: the understatement of a man about to ask how to betray a city."),
    ], maxlen=800)

# ======================== PLUTARCH ========================
add("plu-cae-1","Plutarch","Life of Caesar","32",
    "plutarch.txt","The die is cast,",
    "Caesar at the Rubicon: a proverb for an irreversible step.",
    [
      ("metaphor","The die is cast,","A throw of dice for a crossing of a river: the game is the war."),
      ("sententia","The die is cast,","The proverb is left to do the work of a speech."),
      ("hypotyposis","with these words he took the river. Once over, he used all expedition possible, and before it was day reached Ariminum","The night, the river, the town by dawn: the scene is made to move."),
    ], end="reached Ariminum, and took it.")

# ======================== DEMOSTHENES ========================
add("dem-1","Demosthenes","Public Orations","On the Navy-Boards? / Forefathers",
    "demosthenes1.txt","Those who praise your forefathers,[n] men of Athens, desire, no doubt, to gratify you by their speeches;",
    "Praise of the ancestors is itself put on trial: Time, not the orator, is their monument.",
    [
      ("apostrophe","men of Athens, desire, no doubt, to gratify you by their speeches;","The people named as those who like to hear themselves praised through their dead."),
      ("irony","desire, no doubt, to gratify you","No doubt: the courtesy is already an accusation."),
      ("antithesis","although they thus win for themselves the reputation of capable speakers, the impression which they convey to their hearers of the merit of our forefathers is not adequate","The speaker is served; the dead are not."),
      ("personification","their highest praise is constituted by Time","Time is made the true orator of the dead."),
    ], maxlen=850)

# ======================== AUGUSTINE ========================
add("aug-1","Augustine","Confessions","1.1",
    "augustine.txt","Great art Thou, O Lord, and greatly to be praised; great is Thy power, and Thy wisdom infinite.",
    "The Confessions open in praise, and already in a question.",
    [
      ("apostrophe","Great art Thou, O Lord, and greatly to be praised;","The book begins by turning to God, not to the reader."),
      ("anaphora","Great art Thou, O Lord, and greatly to be praised; great is Thy power, and Thy wisdom infinite.","Great, greatly, great: the same word in three cases of praise."),
      ("tricolon","Great art Thou, O Lord, and greatly to be praised; great is Thy power, and Thy wisdom infinite.","Thou, power, wisdom: three goods, one God."),
      ("antithesis","Thou madest us for Thyself, and our heart is restless, until it repose in Thee.","Made for, and restless until: the whole of the book in one turn."),
    ], maxlen=900)

# ======================== GREGORY ========================
add("greg-1","Gregory the Great","Pastoral Rule","III.1",
    "gregory3.txt","Differently, then, to be admonished are men and women; because on the former heavier injunctions, on the latter lighter are to be laid, that those may be exercised by great things, but these winningly converted by light ones.",
    "The first of Gregory's pairs: the same vice is not cured by the same word.",
    [
      ("antithesis","on the former heavier injunctions, on the latter lighter are to be laid","Heavy and light, as the hearers differ."),
      ("antithesis","those may be exercised by great things, but these winningly converted by light ones.","Exercise and conversion: two medicines."),
      ("anaphora","Differently, then, to be admonished are men and women","Differently is the key of the whole book: one gospel, many hearings."),
    ], maxlen=550)

add("greg-2","Gregory the Great","Pastoral Rule","II",
    "gregory2.txt","The ruler should be a near neighbour to every one in sympathy, and exalted above all in contemplation,",
    "The pastor is to be near in pity and high in prayer — and not to drop either.",
    [
      ("antithesis","a near neighbour to every one in sympathy, and exalted above all in contemplation","Near and exalted: the two heights of the same office."),
      ("metaphor","through the bowels of loving-kindness he may transfer the infirmities of others to himself","Bowels: the old word for mercy as a bodily taking-on."),
      ("antithesis","lest either in seeking high things he despise the weak things of his neighbours, or in suiting himself to the weak things of his neighbours he relinquish","Two ditches, one road: contempt of the weak, or loss of the high."),
    ], maxlen=850)

# ======================== DOUAY-RHEIMS ========================
add("douay-beat","Matthew (Douay-Rheims)","Gospel according to St Matthew","5:3–8",
    "douay-nt.txt","Blessed are the poor in spirit: for theirs is the kingdom of heaven.",
    "The Beatitudes: blessing named eight times, each with its reason.",
    [
      ("anaphora","Blessed are the poor in spirit: for theirs is the kingdom of heaven.","Blessed are: the same door for each lot."),
      ("tricolon","Blessed are the meek: for they shall possess the land. 5:5. Blessed are they that mourn: for they shall be comforted. 5:6. Blessed are they that hunger and thirst after justice: for they shall have their fill.","Three blessings in series, each a reversal of what the world pays."),
      ("antithesis","Blessed are they that mourn: for they shall be comforted.","Mourn, and comfort: the second undoes the first without denying it."),
    ], maxlen=700)

add("douay-cor","Paul (Douay-Rheims)","First Epistle to the Corinthians","13:1–4",
    "douay-nt.txt","If I speak with the tongues of men and of angels, and have not charity, I am become as sounding brass, or a tinkling cymbal.",
    "Gifts without charity are noise: the apostle's own climax.",
    [
      ("anaphora","and have not charity, I am become as sounding brass, or a tinkling cymbal. 13:2. And if I should have prophecy and should know all mysteries and all knowledge, and if I should have all faith, so that I could remove mountains, and have not charity, I am nothing.","And have not charity — repeated until the ear will not let it go."),
      ("simile","I am become as sounding brass, or a tinkling cymbal.","The gifted man without love is likened to metal that only sounds."),
      ("hyperbole","if I should have all faith, so that I could remove mountains","All faith, mountains moved: the gift is stretched to the miraculous, and still fails."),
      ("climax","and have not charity, I am nothing.","From noise to nothing: the last word is the drop."),
      ("personification","Charity is patient, is kind:","Charity is given the verbs of a person."),
    ], maxlen=900)

add("douay-john","John (Douay-Rheims)","Gospel according to St John","1:1–5",
    "douay-nt.txt","In the beginning was the Word: and the Word was with God: and the Word was God.",
    "The Word at the beginning: three clauses, one subject.",
    [
      ("anaphora","and the Word was with God: and the Word was God.","The Word was — twice more, each time a higher claim."),
      ("tricolon","In the beginning was the Word: and the Word was with God: and the Word was God.","Three members, last the name of God."),
      ("antithesis","And the light shineth in darkness: and the darkness did not comprehend it.","Light and darkness: the second cannot take in the first."),
      ("metaphor","And the light shineth in darkness:","The Word is named as light."),
    ], maxlen=700)

add("douay-pater","Matthew (Douay-Rheims)","Gospel according to St Matthew","6:9–13",
    "douay-nt.txt","Our Father who art in heaven, hallowed be thy name.",
    "The Lord's Prayer: petitions in a rising order, from the Name to our bread.",
    [
      ("apostrophe","Our Father who art in heaven, hallowed be thy name.","The prayer turns to a Person, and will not speak of Him in the third person."),
      ("tricolon","hallowed be thy name. 6:10. Thy kingdom come. Thy will be done on earth as it is in heaven.","Three thy-petitions, before any our."),
      ("antithesis","Thy will be done on earth as it is in heaven.","Earth measured against heaven, and told to match it."),
    ], maxlen=550)

# ======================== HOMER (Pope) ========================
add("hom-il-1","Homer","Iliad (Pope)","1.1–5",
    "iliad.txt","Achilles’ wrath, to Greece the direful spring Of woes unnumber’d, heavenly goddess, sing!",
    "The wrath is named before the man is asked to sing it.",
    [
      ("apostrophe","heavenly goddess, sing!","The muse is addressed: the poem begins as a prayer."),
      ("metaphor","to Greece the direful spring Of woes unnumber’d","Wrath as a spring: the water is woe, and it has a source."),
      ("hyperbole","woes unnumber’d","Unnumbered: the poet refuses to count what he is about to recount."),
      ("apostrophe","Declare, O Muse! in what ill-fated hour","The muse is named a second time, now for the cause."),
    ], maxlen=700)

# ======================== VIRGIL (Dryden) ========================
add("verg-1","Virgil","Aeneid (Dryden)","1.1–8",
    "aeneid.txt","Arms, and the man I sing, who, forc’d by fate, And haughty Juno’s unrelenting hate,",
    "Arms and the man: war and the wanderer in the first breath.",
    [
      ("apostrophe","O Muse! the causes and the crimes relate;","As Homer, so Virgil: the causes are asked of the muse."),
      ("tricolon","Long labours, both by sea and land, he bore, And in the doubtful war, before he won The Latian realm, and built the destin’d town;","Sea, land, war: three labours before the town is named."),
      ("rhetorical question","Can heav’nly minds such high resentment show, Or exercise their spite in human woe?","A question to the gods' own dignity, not to a human court."),
      ("epithet","haughty Juno’s unrelenting hate","Two adjectives, one hate: the goddess is characterized before she acts."),
    ], maxlen=850)

# ======================== BOETHIUS ========================
add("boe-1","Boethius","Consolation of Philosophy","1.1",
    "boethius.txt","While I was thus mutely pondering within myself, and recording my sorrowful complainings with my pen, it seemed to me that there appeared above my head a woman of a countenance exceeding venerable.",
    "Philosophy appears over the prisoner's head: a woman, and more than a woman.",
    [
      ("prosopopoeia","there appeared above my head a woman of a countenance exceeding venerable.","The art is made a person, and will speak as one."),
      ("simile","Her eyes were bright as fire, and of a more than human keenness;","Eyes as fire: the likeness, then the claim that they exceed the human."),
      ("antithesis","her vigour showed no trace of enfeeblement; and yet her years were right full","Vigour and years: the two that do not usually keep company."),
      ("hypotyposis","Her eyes were bright as fire, and of a more than human keenness; her complexion was lively, her vigour showed no trace of enfeeblement","The figure is drawn so that the reader sees her before she speaks."),
    ], maxlen=850)


# ======================== MORE CICERO ========================
add("cic-cat2-2","Cicero","Second Oration against Catiline","2.2",
    "cicero-cat2.txt","Yet if there is any one here who, under the influence of feelings which should have been felt by all, hotly denounces me",
    "Some blame the consul for sending Catiline away rather than arresting him.",
    [
      ("occupatio","Yet if there is any one here who, under the influence of feelings which should have been felt by all, hotly denounces me","He names the objection before the objector can: a figure of occupying the ground."),
      ("antithesis","blames me for not having arrested, for having merely sent away, so deadly a foe","Arrested, or sent away: two policies, one foe."),
      ("correctio","I must plead that the blame should fall not on me but on the circumstances of the time.","Not me, but the time: the correction is the defence."),
    ], maxlen=750)

add("cic-cat2-3","Cicero","Second Oration against Catiline","2.3",
    "cicero-cat2.txt","So I for my part utterly despise Catilina's army in comparison with our legions from Cisalpine Gaul",
    "The consul counts the enemy's army in order to make it look small.",
    [
      ("litotes","utterly despise Catilina's army","Utterly despise: the understatement is that there is nothing there to fear."),
      ("enumeratio","ruined veterans, of country spendthrifts and rustic bankrupts","The army is named as kinds of ruin, not as ranks."),
      ("antithesis","in comparison with our legions from Cisalpine Gaul","Theirs and ours: the comparison is the argument."),
    ], maxlen=750)

add("cic-cat2-12","Cicero","Second Oration against Catiline","2.12",
    "cicero-cat2.txt","Do you, therefore, under these circumstances, citizens of Rome, as you have done previously, protect your own homes with watch and ward.",
    "The people are told to watch their own doors; the consul has watched the city.",
    [
      ("apostrophe","citizens of Rome, as you have done previously, protect your own homes","The vocative, then the charge of the night."),
      ("antithesis","I myself have taken thought and made provision for the safe defence of the city without any disturbance to you or any alarm of war.","His care, without their alarm: ethos as quiet provision."),
      ("metaphor","this midnight excursion of Catilina","Excursion: a light word for a flight into war."),
    ], maxlen=750)

add("cic-cat3-10","Cicero","Third Oration against Catiline","3.10",
    "cicero-cat3.txt","So, citizens of Rome, since a public thanksgiving has been voted to be held at all the sacred couches, keep the festal days with your wives and children.",
    "A thanksgiving without blood: the gods are paid in festival, not in funerals.",
    [
      ("apostrophe","So, citizens of Rome, since a public thanksgiving has been voted","The people named as those who still have wives and children to keep the day with."),
      ("litotes","none more justly due to them than these","None more justly: the understatement of a unique deliverance."),
      ("asyndeton","rescued without bloodshed, without slaughter, withou","Three withouts: the rescue is named by what it did not cost."),
    ], maxlen=750)

add("cic-cat3-11","Cicero","Third Oration against Catiline","3.11",
    "cicero-cat3.txt","For these important services, citizens of Rome, I do not require from you any reward of merit, any outward sign of honour, any memorial of my renown, except the eternal remembrance of this day.",
    "The consul will take no statue: only that the day be remembered.",
    [
      ("praeteritio","I do not require from you any reward of merit, any outward sign of honour, any memorial of my renown","He lists the honours he refuses, and so lists them."),
      ("tricolon","any reward of merit, any outward sign of honour, any memorial of my renown","Three anys, one refusal."),
      ("antithesis","In your hearts and there alone I desire that all my triumphs","Hearts, not stone: the memorial is to be inward."),
      ("apostrophe","citizens of Rome, I do not require from you any reward","The people are named as those who might have given what he will not take."),
    ], maxlen=800)

add("cic-cat4-5","Cicero","Fourth Oration against Catiline","4.5",
    "cicero-cat4.txt","At this moment, conscript fathers, I see well which way my own interest lies.",
    "Before the vote, the consul puts his own safety second, and says so.",
    [
      ("apostrophe","At this moment, conscript fathers, I see well which way my own interest lies.","The house is named; then his interest is named in order to be set aside."),
      ("antithesis","If you adopt the proposal of C. Caesar, then since he has adopted that course in political life which is considered popular","Caesar's road and the other: two motions, two dangers for the consul."),
      ("occupatio","I see well which way my own interest lies.","He occupies the charge of self-seeking before it is made."),
    ], maxlen=800)

add("cic-cat4-9","Cicero","Fourth Oration against Catiline","4.9",
    "cicero-cat4.txt","You have a consul who has been preserved from very many perils and secret treacheries, yes, from the very jaws of death, not for the prolongation of his own life but for the promotion of your welfare.",
    "The consul's life is named as already spent for the city.",
    [
      ("metaphor","from the very jaws of death","Death is given a mouth."),
      ("antithesis","not for the prolongation of his own life but for the promotion of your welfare.","His life, your welfare: the second is the final cause of the first."),
      ("personification","The native land of all of us, beset by the firebrands and swords of an infamous conspiracy, extends to you her s","The country is given hands, and stretches them toward the senate."),
      ("tricolon","united in heart and mind and voice","Three unities, one commonwealth."),
    ], maxlen=800)

add("cic-milo-2","Cicero","Pro Milone","11",
    "cicero-milo.txt","When arms speak, the laws are silent;",
    "Self-defence in the midst of arms: the law itself, he says, authorises the blow.",
    [
      ("personification","When arms speak, the laws are silent;","Arms are given speech; the laws, a mouth that shuts."),
      ("antithesis","When arms speak, the laws are silent;","Speech and silence, two persons, one moment."),
      ("sententia","When arms speak, the laws are silent;","A maxim the tradition kept: silent enim leges inter arma."),
      ("antithesis","it forbids not homicide, but the carrying of a weapon with a view to homicide","Not the killing, but the carrying with intent: a fine edge for a jury."),
    ], maxlen=800)

add("cic-phil-2","Cicero","Philippics","2.54",
    "cicero-philippics.txt","O miserable man if you are aware, more miserable still if you are not aware, that this is recorded in writings",
    "Antonius is told that posterity will not forget the expulsion of the consuls.",
    [
      ("apostrophe","O miserable man if you are aware, more miserable still if you are not aware","The vocative, then two miseries, the second worse."),
      ("antithesis","if you are aware, more miserable still if you are not aware","Knowledge and ignorance: both damning, ignorance more so."),
      ("hyperbole","our very latest posterity in the most distant ages will never forget this fact","Latest, most distant, never: the memory is stretched past any living jury."),
      ("epithet","Cnaeus Pompeius, who was the glory and light of the empire of the Roman people","Glory and light: two names for one man now expelled."),
    ], maxlen=800)

# ======================== MORE GREEK ========================
add("dem-2","Demosthenes","Public Orations","Vol. II, opening",
    "demosthenes2.txt","It was the duty, men of Athens, of every speaker not to allow either malice or favour to influence any speech which he might make, but simply to declare the policy which he considered to be the best",
    "Before the advice, a law for advisers: no malice, no favour, the best policy only.",
    [
      ("apostrophe","men of Athens, of every speaker not to allow either malice or favour","The people named as those who must hear policy, not passion."),
      ("antithesis","not to allow either malice or favour to influence any speech","Malice and favour: two winds, one forbidden."),
      ("sententia","simply to declare the policy which he considered to be the best","The whole duty of the deliberative orator in one clause."),
    ], maxlen=800)

add("dem-3","Demosthenes","First Philippic","34",
    "demosthenes1.txt","If, men of Athens, you first supply the sum I have mentioned, and then, after making ready the rest of the armament--soldiers, ships, cavalry--bind the whole force in its entirety",
    "A deliberative period: money, then ships, then a law that the force remain at the war.",
    [
      ("apostrophe","If, men of Athens, you first supply the sum I have mentioned","The people named as paymasters of their own war."),
      ("tricolon","soldiers, ships, cavalry","Three arms, one force."),
      ("climax","if you become your own paymasters, your own commissioners of supply, but require your general to account for the actual operations","Pay, supply, then the general's account: the last is the sting."),
    ], maxlen=800)

add("thuc-per-3","Thucydides","History of the Peloponnesian War","2.40",
    "thucydides.txt","We cultivate refinement without extravagance and knowledge without effeminacy; wealth we employ more for use than for show",
    "Pericles on the Athenian temper: goods kept from their neighbouring vices.",
    [
      ("antithesis","refinement without extravagance and knowledge without effeminacy","Two goods, each fenced from its vice."),
      ("antithesis","wealth we employ more for use than for show","Use, not show: a deliberative measure of wealth."),
      ("antithesis","place the real disgrace of poverty not in owning to the fact but in declining the struggle against it","Not poverty, but the refusal to fight it: a new name for shame."),
    ], maxlen=800)

add("plato-ap-3","Plato","Apology","29d",
    "plato-apology.txt","Men of Athens, I honour and love you; but I shall obey God rather than you, and while I have life and strength I shall never cease from the practice and teaching of philosophy",
    "Honour for the city, obedience for God: the sentence he will not commute.",
    [
      ("apostrophe","Men of Athens, I honour and love you;","The vocative of piety toward the very men who will condemn him."),
      ("antithesis","I honour and love you; but I shall obey God rather than you","Honour them, obey God: the but is the whole defence."),
      ("apostrophe","You, my friend,—a citizen of the great and mighty and wise city of Athens,—are you not ashamed","He turns from the court to any one man, and makes the city a witness against him."),
      ("rhetorical question","are you not ashamed of heaping up the greatest amount of money and honour and reputation","The question is already a rebuke."),
    ], maxlen=850)

add("plato-men-1","Plato","Menexenus","234a",
    "menexenus.txt","Whence come you, Menexenus? Are you from the Agora?",
    "A funeral speech is about to be mocked, and first a young man is met coming from the Council.",
    [
      ("apostrophe","Whence come you, Menexenus?","The friend named; the question is already a smile."),
      ("rhetorical question","And what might you be doing at the Council? And yet I need hardly ask","He asks, then says he need not: the figure of asking in order to answer."),
      ("irony","believing yourself to have arrived at the end of education and of philosophy, and to have had enough of them, are mounting upwards to things higher still","The end of philosophy, and still higher: the praise is a pinch."),
    ], maxlen=750)

add("her-xer-1","Herodotus","Histories","6.98",
    "herodotus2.txt","Xerxes the son of Dareios and Artoxerxes the son of Xerxes, three generations following upon one another, there happened more evils to Hellas than during the twenty other generations which came before Dareios",
    "Three Persian generations weighed against twenty of Hellas: the evils named as a sum.",
    [
      ("enumeratio","Xerxes the son of Dareios and Artoxerxes the son of Xerxes, three generations following upon one another","Three names, one house, the evils counted by the line."),
      ("antithesis","more evils to Hellas than during the twenty other generations which came before Dareios","Three against twenty: the disproportion is the point."),
      ("climax","some of the evils coming to it from the Persians, and others from the leaders themselves","From the foreign enemy to their own leaders: the last wound is home-made."),
    ], maxlen=700)

# ======================== MORE LATIN HISTORY ========================
add("liv-luc-1","Livy","History of Rome","1.58",
    "livy.txt","A few days after, without the knowledge of Collatinus, Sextus came to Collatia with one attendant only;",
    "The night at Collatia: a guest, a sword, and a name spoken in the dark.",
    [
      ("hypotyposis","being kindly received by them, as not being aware of his intention, after he had been conducted after supper into the guests' chamber, burning with passion, when every thing around seemed sufficiently secure, and all fast asleep, he comes to Lucretia, as she lay asleep, with a naked sword","The house, the supper, the sleep, the sword: the scene is made to be seen."),
      ("apostrophe","Be silent, Lucretia; I am Sextus Tarquin; I have a sword in my hand; you shall die, if you utter a word.","He names her, then himself, then the sword: three facts, one command."),
      ("asyndeton","Be silent, Lucretia; I am Sextus Tarquin; I have a sword in my hand; you shall die, if you utter a word.","Four clauses, no and: the terror is in the shortness."),
    ], maxlen=900)

add("liv-hor-1","Livy","History of Rome","2.10",
    "livy.txt","Cocles, (that defence the fortune of Rome had on that day,) who, happening to be posted on guard at the bridge, when he saw the Janiculum taken by a sudden assault",
    "Horatius at the bridge: one man named as the fortune of Rome that day.",
    [
      ("parenthesis","(that defence the fortune of Rome had on that day,)","A clause slipped in to name him as Rome's luck before he acts."),
      ("hypotyposis","when he saw the Janiculum taken by a sudden assault, and that the enemy were pouring down from thence in full speed, and that his own party, in terror and confusion, were abandoning their arms and ranks","The hill taken, the enemy pouring, his own in flight: three sights, one stand."),
      ("apostrophe","That their flight would avail them nothing if they deserted their post","He turns upon his own, not upon the enemy first."),
      ("personification","appealing to the faith of gods and men","Faith of gods and men: two witnesses called to a bridge."),
    ], maxlen=900)

add("tac-ann-1","Tacitus","Annals (Gordon)","1.1",
    "tacitus-annals.txt","Kings were the original Magistrates of Rome: Lucius Brutus founded Liberty and the Consulship: Dictators were chosen occasionally, and used only in pressing exigencies.",
    "The opening of the Annals: a history of names for power, each shorter than the last.",
    [
      ("asyndeton","Kings were the original Magistrates of Rome: Lucius Brutus founded Liberty and the Consulship: Dictators were chosen occasionally","Clause after clause, no and: the constitutions pass like a list."),
      ("antithesis","Lucius Brutus founded Liberty and the Consulship","Liberty and the consulship named as one founding."),
      ("climax","The domination of Cinna was but short, that of Sylla not long. The authority of Pompey and Crassus was quickly swallowed up in Caesar; that of Lepidus and Anthony in Aug","Short, not long, swallowed: the names of power grow and are eaten."),
      ("metaphor","quickly swallowed up in Caesar","Authority as a thing that can be swallowed."),
    ], maxlen=800)

add("aug-2","Augustine","Confessions","10.27",
    "augustine.txt","Too late loved I Thee, O Thou Beauty of ancient days, yet ever new! too late I loved Thee!",
    "The cry of Book Ten: late love, and the Beauty that was within.",
    [
      ("apostrophe","Too late loved I Thee, O Thou Beauty of ancient days, yet ever new!","He turns to Beauty as to a person, and names it Thou."),
      ("epizeuxis","too late I loved Thee!","The same cry twice: late, and again late."),
      ("antithesis","Thou wert within, and I abroad","Within and abroad: two places, one search in the wrong one."),
      ("personification","Thou calledst, and shoutedst, and burstest my deafness.","God given the verbs of a voice that breaks a wall."),
      ("tricolon","Thou calledst, and shoutedst, and burstest my deafness.","Call, shout, burst: three acts, one hearing."),
    ], maxlen=800)

add("greg-3","Gregory the Great","Pastoral Rule","III.2",
    "gregory3.txt","Differently to be admonished are the poor and the rich: for to the former we ought to offer the solace of comfort against tribulation, but in the latter to induce fear as against elation.",
    "Poor and rich: comfort against trouble, fear against swelling.",
    [
      ("antithesis","to the former we ought to offer the solace of comfort against tribulation, but in the latter to induce fear as against elation.","Comfort and fear: two medicines, two diseases."),
      ("apostrophe","O you poor little one, tossed with tempest","Isaiah's vocative, kept as a word for the poor hearer."),
      ("anaphora","Differently to be admonished are the poor and the rich","Differently: the same key as the men and women."),
    ], maxlen=800)

add("greg-4","Gregory the Great","Pastoral Rule","III.3",
    "gregory3.txt","Differently to be admonished are the joyful and the sad. That is, before the joyful are to be set the sad things that follow upon punishment; but before the sad the promised glad things of the kingdom.",
    "Joyful and sad: threatenings for the one, promises for the other.",
    [
      ("antithesis","before the joyful are to be set the sad things that follow upon punishment; but before the sad the promised glad things of the kingdom.","Sad things to the joyful, glad things to the sad: a chiastic cure."),
      ("chiasmus","Let the joyful learn by the asperity of threatenings what to be afraid of: let the sad bear what joys of reward they may look forward to.","Joyful/fear, sad/joy: the second pair inverts the first."),
      ("anaphora","let the sad bear what joys of reward they may look forward to.","Let: the same mood of counsel as throughout the pairs."),
    ], maxlen=800)

# more Cicero Verres / Marcellus / Milo texture
add("cic-marc-2","Cicero","Pro Marcello","1",
    "cicero-marcellus.txt","For such humanity, such exceptional, nay, unheard-of clemency, such invariable moderation exhibited by one who has attained supreme power",
    "Caesar's clemency named as almost past the human, and therefore a new topic for praise.",
    [
      ("climax","such humanity, such exceptional, nay, unheard-of clemency, such invariable moderation","Humanity, then unheard-of clemency, then moderation that holds."),
      ("correctio","such exceptional, nay, unheard-of clemency","Exceptional taken back for unheard-of: the correction climbs."),
      ("antithesis","exhibited by one who has attained supreme power","Clemency in the one man who need not be clement."),
    ], maxlen=700)

add("cic-ver-2","Cicero","Against Verres I","1",
    "cicero-verres.txt","A belief has by this time established itself, as harmful to the whole nation as it is perilous to yourselves, and everywhere expressed not mer",
    "The courts' bad name: a belief that hurts the nation and the order alike.",
    [
      ("antithesis","as harmful to the whole nation as it is perilous to yourselves","Nation and yourselves: two who suffer from one belief."),
      ("climax","harmful to the whole nation as it is perilous to yourselves","Harmful, then perilous: the second is nearer the jury's skin."),
      ("occupatio","A belief has by this time established itself","He names the prejudice the defence will use, before they use it."),
    ], maxlen=700)

# more Plato Phaedrus / Crito / Symposium
add("plato-crito-2","Plato","Crito","43b",
    "plato-crito.txt","I wonder that the keeper of the prison would let you in.",
    "Even the jailer is named: kindness has already opened the door.",
    [
      ("irony","I wonder that the keeper of the prison would let you in.","Wonder at a kindness: the prison is already less a prison."),
      ("antithesis","He knows me because I often come, Socrates; moreover. I have done him a kindness.","Knowledge and kindness: two keys."),
      ("rhetorical question","Then why did you sit and say nothing, instead of at once awakening me?","The question is already a welcome."),
    ], maxlen=700)

add("plato-sym-2","Plato","Symposium","201d",
    "symposium.txt","She was my instructress in the art of love, and I shall repeat to you what she said to",
    "Diotima named as teacher: the speech to come is not his, he says.",
    [
      ("ethos","She was my instructress in the art of love","He borrows a woman's authority for a doctrine he will not claim as his invention."),
      ("occupatio","I shall repeat to you what she said","He occupies the charge of originality by refusing it."),
      ("epithet","a woman wise in this and in many other kinds of knowledge","Wise in this, and in many: the praise is larger than the one art."),
    ], maxlen=400)

# Sallust more - character continued
add("sal-cat-3","Sallust","Conspiracy of Catiline","5",
    "sallust.txt","He had abundance of eloquence, though but little wisdom. His insatiable ambition was always pursuing objects extravagant, romantic, and unattainable.",
    "Eloquence without wisdom: a portrait of the orator as conspirator.",
    [
      ("antithesis","abundance of eloquence, though but little wisdom","The gift of speech, and not the gift of mind: a warning to this art."),
      ("tricolon","objects extravagant, romantic, and unattainable","Three adjectives, last the verdict."),
      ("hyperbole","always pursuing objects extravagant, romantic, and unattainable","Always, and unattainable: the hunger is named as without end or object."),
    ], maxlen=550)

# Thucydides more - ancestors honour
add("thuc-per-4","Thucydides","History of the Peloponnesian War","2.36",
    "thucydides.txt","They dwelt in the country without break in the succession from generation to generation, and handed it down free to the present time by their valour.",
    "The land kept, and kept free: Pericles' first praise of the dead is of those before them.",
    [
      ("antithesis","handed it down free to the present time by their valour.","Free, by valour: the second is the price of the first."),
      ("climax","And if our more remote ancestors deserve praise, much more do our own fathers","Remote, then fathers: the nearer dead are the greater."),
      ("anaphora","And if our more remote ancestors deserve praise, much more do our own fathers","The if is already a yes."),
    ], maxlen=700)

# Agricola more
add("tac-cal-3","Tacitus","Agricola","30",
    "agricola.txt","These plunderers of the world, after exhausting the land by their devastations, are rifling the ocean: stimulated by avarice, if their enemy be rich; by ambition, if poor;",
    "Rome as a thief of land and sea, of rich and poor alike.",
    [
      ("metaphor","These plunderers of the world","The empire named as a robber-band."),
      ("antithesis","stimulated by avarice, if their enemy be rich; by ambition, if poor;","Rich or poor: two motives, one theft."),
      ("hyperbole","unsatiated by the East and by the West","East and West: the hunger is made world-wide."),
      ("personification","the still more hostile Romans, whose arrogance we cannot escape by obsequiousness and submission.","Arrogance given the place of an enemy that outruns the sea."),
    ], maxlen=700)

# Demosthenes more - duty of speaker already have. Another from vol1
add("dem-4","Demosthenes","Public Orations","Vol. I, forefathers continued",
    "demosthenes1.txt","For my part I believe that their highest praise is constituted by Time: for the time that has passed has been long",
    "Time as the true panegyrist: the orator will not compete with it.",
    [
      ("personification","their highest praise is constituted by Time","Time given the office of praise."),
      ("litotes","the subject on which they attempt to speak is one to which no words can do justice","No words: the understatement of a theme too large for speech."),
      ("antithesis","they thus win for themselves the reputation of capable speakers, the impression which they convey to their hearers of the merit of our forefathers is not adequate","Speakers served, forefathers not: two reputations, one cheap."),
    ], maxlen=500)

# Douay more - light darkness already have. Add 1 Cor remaining personification
add("douay-cor2","Paul (Douay-Rheims)","First Epistle to the Corinthians","13:4–7",
    "douay-nt.txt","Charity is patient, is kind: charity envieth not, dealeth not perversely, is not puffed up,",
    "Charity given the verbs of a person, and then a list of what she will not do.",
    [
      ("personification","Charity is patient, is kind:","The virtue is made an agent."),
      ("anaphora","charity envieth not, dealeth not perversely, is not puffed up,","Not, not, not: the praise is a series of refusals."),
      ("asyndeton","is patient, is kind: charity envieth not, dealeth not perversely, is not puffed up","The list runs without and, as a rule of life, not a period."),
    ], maxlen=500)

# Boethius more - eyes
add("boe-2","Boethius","Consolation of Philosophy","1.1",
    "boethius.txt","Her eyes were bright as fire, and of a more than human keenness; her complexion was lively, her vigour showed no trace of enfeeblement; and yet her years were right full",
    "The face of Philosophy: fire, keenness, years that have not withered her.",
    [
      ("simile","Her eyes were bright as fire","Eyes as fire: the first likeness."),
      ("hyperbole","of a more than human keenness","More than human: the figure is already past nature."),
      ("antithesis","her vigour showed no trace of enfeeblement; and yet her years were right full","Vigour and years: the riddle of her age."),
    ], maxlen=500)

# Iliad more
add("hom-il-2","Homer","Iliad (Pope)","1.8–12",
    "iliad.txt","Declare, O Muse! in what ill-fated hour Sprung the fierce strife, from what offended power",
    "The cause asked of the Muse: Apollo, the priest, the king.",
    [
      ("apostrophe","Declare, O Muse! in what ill-fated hour","The second calling of the goddess, now for the cause."),
      ("rhetorical question","in what ill-fated hour Sprung the fierce strife, from what offended power","Two whats: the hour and the power, both to be sung, not answered by a man."),
      ("metaphor","And heap’d the camp with mountains of the dead","The dead as mountains: the hyperbole of a plague."),
    ], maxlen=550)

# Aeneid more
add("verg-2","Virgil","Aeneid (Dryden)","1.8–11",
    "aeneid.txt","O Muse! the causes and the crimes relate; What goddess was provok’d, and whence her hate;",
    "Juno's hate asked as a question the poem will spend itself answering.",
    [
      ("apostrophe","O Muse! the causes and the crimes relate;","Causes and crimes: two objects of one prayer."),
      ("rhetorical question","What goddess was provok’d, and whence her hate;","The goddess is not named yet: the question is the hook."),
      ("rhetorical question","Can heav’nly minds such high resentment show, Or exercise their spite in human woe?","A question against heaven, spoken in a poem that will not answer it cheaply."),
    ], maxlen=600)

# Gregory admonition 2 young and old - already in greg-1 adjacent. Add subjects/prelates if present
add("greg-5","Gregory the Great","Pastoral Rule","III.4",
    "gregory3.txt","Differently to be admonished are subjects and prelates: the former that subjection crush them not, the latter that superior place elate them not",
    "Subjects and prelates: crush not, swell not.",
    [
      ("antithesis","the former that subjection crush them not, the latter that superior place elate them not","Crush and elate: two falls from two places."),
      ("chiasmus","the former that they fail not to fulfil what is commanded them, the latter that they command not more to be fulfilled than is just","Fulfil the command, command what is just: the second inverts the first."),
      ("anaphora","Differently to be admonished are subjects and prelates","Differently, still: the book has not changed its key."),
    ], maxlen=700)

# Plutarch more - after the die
add("plu-cae-2","Plutarch","Life of Caesar","32",
    "plutarch.txt","As soon as Ariminum was taken, wide gates, so to say, were thrown open, to let in war upon every land alike and sea",
    "After the river, the gates of war: a metaphor for a civil war beginning.",
    [
      ("metaphor","wide gates, so to say, were thrown open, to let in war","Gates for war: he marks the likeness with so to say."),
      ("hyperbole","war upon every land alike and sea","Land and sea, every: the war is made total."),
      ("personification","to let in war upon every land alike and sea","War given entrance, as a guest or a flood."),
    ], maxlen=500)

# Herodotus Thermopylai second
add("her-therm-2","Herodotus","Histories","7.205",
    "herodotus2.txt","Leonidas the Spartans had sent out first, in order that seeing them the other allies might join in the campaign, and for fear that they also might take the side of the Medes",
    "Leonidas sent first, as a sight to hold the allies, and as a fear to hold them.",
    [
      ("antithesis","in order that seeing them the other allies might join in the campaign, and for fear that they also might take the side of the Medes","Join, or Medize: two uses of one small force."),
      ("occupatio","for fear that they also might take the side of the Medes","He names the worse possibility in order to have sent the kings against it."),
      ("epithet","Leonidas the Spartans had sent out first","The name first, the people next: the man is the signal."),
    ], maxlen=700)

# Cicero cat1 more - chapter 8 senate silence
add("cic-cat1-8","Cicero","First Oration against Catiline","1.8",
    "cicero-cat1.txt","What is it, Catilina? Do you not heed, do you not mark the silence of the house?",
    "The senate's silence is made to speak: consent by not speaking.",
    [
      ("apostrophe","What is it, Catilina? Do you not heed, do you not mark the silence of the house?","The name, then two questions about a silence."),
      ("personification","Their silence denotes consent.","Silence given the power of a vote."),
      ("rhetorical question","Why do you wait for them to express their sanction in words, when you can see by their silence the nature of their wishes?","The question is already the reading of the house."),
      ("antithesis","their silence is equivalent to loud denunciation of you","Silence and loud: the same verdict."),
    ], maxlen=700)

# Cicero cat1 chapter 9
add("cic-cat1-9","Cicero","First Oration against Catiline","1.9",
    "cicero-cat1.txt","Yet why do I speak? Is it possible that anything can influence a man like you?",
    "He asks whether speech can touch Catiline, and answers by going on.",
    [
      ("rhetorical question","Yet why do I speak?","The orator questions his own art, and then uses it."),
      ("anaphora","Is it possible that anything can influence a man like you? Is it possible that a man like you will ever reform?","Is it possible — twice, and the answer is no."),
      ("apostrophe","Would indeed that heaven might inspire you with such a thought!","A wish flung at the man, and already given up."),
    ], maxlen=700)


add("cic-cat2-6","Cicero","Second Oration against Catiline","2.6",
    "cicero-cat2.txt","And yet, citizens of Rome, there are people who say that I have driven Catilina into exile.",
    "He is said to have driven Catiline into exile: he treats the charge as a compliment too large.",
    [
      ("apostrophe","citizens of Rome, there are people who say that I have driven Catilina into exile.","The people named, then the rumour."),
      ("irony","Truly if a word of mine could do so much, I should very soon drive into exile the men who use such language.","If a word could exile Catiline, it would exile these talkers first."),
      ("rhetorical question","What","The what that follows is already a jeer at the timid creature."),
    ], maxlen=750)

add("cic-cat3-7","Cicero","Third Oration against Catiline","3.7",
    "cicero-cat3.txt","And now, men of Rome, since you have seized and secured with a firm grasp the abominable leaders in this most wicked and dangerous war",
    "The leaders seized: the consul tells the people the war's head is already off.",
    [
      ("apostrophe","And now, men of Rome, since you have seized and secured with a firm grasp","The people named as those who now hold the men."),
      ("metaphor","you have seized and secured with a firm grasp the abominable leaders","Grasp: the city given hands."),
      ("climax","all the forces of Catilina were defeated, that all his hopes and all his resources collapsed","Forces, hopes, resources: three falls."),
    ], maxlen=750)

add("cic-cat4-4","Cicero","Fourth Oration against Catiline","4.4",
    "cicero-cat4.txt","I see that as yet there are only two motions, one of that D. Silanus, who proposes that men who have tried to destroy so much, shall be punished by death, the other, that of C. Caesar",
    "Two motions: death, or Caesar's lesser severities — both named as rigour.",
    [
      ("antithesis","one of that D. Silanus, who proposes that men who have tried to destroy so much, shall be punished by death, the other, that of C. Caesar, who omits the punishment of death","Death, or not death: the house is shown its two roads."),
      ("litotes","who omits the punishment of death, but includes in his proposal the severities of all other forms of punishment","Omits death, includes all other severities: the understatement of a hard mercy."),
      ("occupatio","Both the proposers deal with the culprits with the utmost rigour","He occupies the charge that one motion is soft."),
    ], maxlen=800)

add("aug-3","Augustine","Confessions","1.2",
    "augustine.txt","And how shall I call upon my God, my God and Lord, since, when I call for Him, I shall be calling Him to myself?",
    "How to call on God, who made heaven and earth, to come into a man.",
    [
      ("rhetorical question","And how shall I call upon my God, my God and Lord, since, when I call for Him, I shall be calling Him to myself?","The question is already a doctrine of presence."),
      ("apostrophe","is there, indeed, O Lord my God, aught in me that can contain Thee?","He turns from the reader to the Lord."),
      ("antithesis","whither can God come into me, God who made heaven and earth?","The maker of heaven, and a man's room: two magnitudes."),
    ], maxlen=750)

add("plato-ap-4","Plato","Apology","40c",
    "plato-apology.txt","Let us reflect in another way, and we shall see that there is great reason to hope that death is a good; for one of two things—either death is a state of nothingness and utter unconsciousness, or, as men say, there is a change and migration of the soul from this world to another.",
    "Death as nothing, or as a going: either way, he says, a good.",
    [
      ("dilemma","either death is a state of nothingness and utter unconsciousness, or, as men say, there is a change and migration of the soul from this world to another.","Two horns, both hope: a deliberative division of a last thing."),
      ("simile","a sleep like the sleep of him who is undistu","Death likened to a dreamless sleep, if the first horn holds."),
      ("antithesis","either death is a state of nothingness and utter unconsciousness, or, as men say, there is a change and migration","Nothingness, or migration: two names for one unknown."),
    ], maxlen=800)

add("plato-ap-5","Plato","Apology","30d",
    "plato-apology.txt","And now, Athenians, I am not going to argue for my own sake, as you may think, but for yours, that you may not sin against the God by condemning me, who am his gift to you.",
    "The gadfly of Athens: a ludicrous figure, he says, and he will not drop it.",
    [
      ("apostrophe","And now, Athenians, I am not going to argue for my own sake","The vocative, then the claim that the speech is for them."),
      ("antithesis","not going to argue for my own sake, as you may think, but for yours","Mine, yours: the defence is turned into a warning."),
      ("metaphor","am a sort of gadfly, given to the state by God; and the state is a great and noble steed","Gadfly and steed: the city given a hide that needs stinging."),
    ], maxlen=800)

add("thuc-per-5","Thucydides","History of the Peloponnesian War","2.40",
    "thucydides.txt","In generosity we are equally singular, acquiring our friends by conferring, not by receiving, favours.",
    "Athenian friendship as a gift, not a debt received.",
    [
      ("antithesis","acquiring our friends by conferring, not by receiving, favours.","Conferring, not receiving: the city's boast about friends."),
      ("sententia","the doer of the favour is the firmer friend of the two, in order by continued kindness to keep the recipient in his debt","A maxim of benefit, almost a topos of more and less."),
      ("antithesis","the return he makes will be a payment, not a free gift","Payment, not gift: two names for a return."),
    ], maxlen=750)

add("greg-6","Gregory the Great","Pastoral Rule","III.9",
    "gregory3.txt","Differently to be admonished are the meek and the passionate.",
    "Meek and passionate: sloth beside gentleness, and a sweep of anger.",
    [
      ("antithesis","Differently to be admonished are the meek and the passionate.","Two tempers, two words."),
      ("metaphor","suffer from the torpor of sloth, which is a kindred disposition, and as it were placed hard by","Sloth as a neighbour of meekness: a likeness of place."),
      ("antithesis","from the laxity of too great gentleness they soften the force of strictness beyond need. But on the other hand the passionate","Soften, and on the other hand: two excesses."),
    ], maxlen=700)

add("greg-7","Gregory the Great","Pastoral Rule","III.10",
    "gregory3.txt","Differently to be admonished are the humble and the haughty.",
    "Humble and haughty: eternal things to the one, nothingness of glory to the other.",
    [
      ("antithesis","To the former it is to be insinuated how true is that excellence which they hold in hoping for it; to the latter it is to be intimated how that temporal glory is as nothing","True excellence, temporal nothing: two lessons."),
      ("antithesis","Let the humble hear how eternal are the things that they long for, how transitory the things which the","Eternal and transitory: the humble are to learn both."),
      ("anaphora","Differently to be admonished are the humble and the haughty.","Differently, still."),
    ], maxlen=700)

add("thuc-corc","Thucydides","History of the Peloponnesian War","1.36",
    "thucydides.txt","To sum up as shortly as possible, embracing both general and particular considerations, let this show you the folly of sacrificing us.",
    "The Corcyreans close: three naval powers, and the folly of letting two become one.",
    [
      ("enumeratio","there are but three considerable naval powers in Hellas—Athens, Corcyra, and Corinth","Three names, one sea."),
      ("sententia","let this show you the folly of sacrificing us.","The summing-up is already a verdict."),
      ("antithesis","if you allow two of these three to become one, and Corinth to secure us for herself, you will have to hold the sea against the united fle","Two become one: the arithmetic of a naval war."),
    ], maxlen=700)

add("her-cro-2","Herodotus","Histories","1.6",
    "herodotus1.txt","This Croesus, first of all the Barbarians of whom we have knowledge, subdued certain of the Hellenes and forced them to pay tribute, while others he gained over and made them his friends.",
    "First of the barbarians to take Greeks: some by tribute, some by friendship.",
    [
      ("epithet","first of all the Barbarians of whom we have knowledge","First: a historian's honour that is also a warning."),
      ("antithesis","subdued certain of the Hellenes and forced them to pay tribute, while others he gained over and made them his friends.","Tribute or friendship: two methods, one king."),
      ("enumeratio","subdued certain of the Hellenes and forced them to pay tribute, while others he gained over and made them his friends.","Two lots, listed."),
    ], maxlen=600)

add("sal-cat-4","Sallust","Conspiracy of Catiline","5",
    "sallust.txt","His constitution could endure hunger, want of sleep, and cold, to a degree surpassing belief. His mind was daring, subtle, and versatile, capable of pretending or dissembling whatever he wished.",
    "Body and mind: three hardships endured, three tricks of mind.",
    [
      ("tricolon","hunger, want of sleep, and cold","Three hardships, one constitution."),
      ("tricolon","daring, subtle, and versatile","Three adjectives for a mind that will not sit still."),
      ("hyperbole","to a degree surpassing belief","Surpassing belief: the historian's own marvel."),
      ("antithesis","capable of pretending or dissembling whatever he wished.","Pretend or dissemble: two faces, one will."),
    ], maxlen=550)

add("liv-luc-2","Livy","History of Rome","1.57",
    "livy.txt","There the villanous passion for violating Lucretia by force seizes Sextus Tarquin; both her beauty, and her approved purity, act as incentives.",
    "Beauty and purity named as the two incentives of a crime.",
    [
      ("antithesis","both her beauty, and her approved purity, act as incentives.","Beauty and purity: two goods made into two baits."),
      ("personification","the villanous passion for violating Lucretia by force seizes Sextus Tarquin","Passion given hands to seize the man."),
      ("epithet","her approved purity","Approved: the public name of a private virtue."),
    ], maxlen=500)

add("cic-phil-3","Cicero","Philippics","1.1",
    "cicero-philippics.txt","they have all hitherto suffered severer punishments than I could have wished for them; but I marvel that you, O Antonius, do not fear the end of those men whose conduct you are imitating.",
    "The enemies of Cicero have died badly; Antonius is invited to notice it.",
    [
      ("apostrophe","O Antonius, do not fear the end of those men whose conduct you are imitating.","The name, then the warning."),
      ("irony","but I marvel that you, O Antonius, do not fear the end of those men whose conduct you are imitating.","Marvel at a man who will not fear: the courtesy is a threat."),
      ("paradeigma","the end of those men whose conduct you are imitating.","Example: the dead as a pattern of an end."),
    ], maxlen=500)

add("verg-3","Virgil","Aeneid (Dryden)","1.1–3",
    "aeneid.txt","Arms, and the man I sing, who, forc’d by fate, And haughty Juno’s unrelenting hate, Expell’d and exil’d, left the Trojan shore.",
    "The man and the arms: fate and Juno named before the shore is left.",
    [
      ("hendiadys","Arms, and the man I sing","Two nouns for one subject of song, as arma virumque."),
      ("epithet","haughty Juno’s unrelenting hate","Haughty, unrelenting: two marks of one goddess."),
      ("asyndeton","Expell’d and exil’d, left the Trojan shore.","Expelled, exiled, left: three verbs of going."),
    ], maxlen=400)

add("hom-il-3","Homer","Iliad (Pope)","1.1–3",
    "iliad.txt","That wrath which hurl’d to Pluto’s gloomy reign The souls of mighty chiefs untimely slain; Whose limbs unburied on the naked shore, Devouring dogs and hungry vultures tore.",
    "The wrath's work: souls to Pluto, bodies to dogs.",
    [
      ("metaphor","hurl’d to Pluto’s gloomy reign","Death as a hurling into a reign."),
      ("hypotyposis","Whose limbs unburied on the naked shore, Devouring dogs and hungry vultures tore.","The shore, the dogs, the birds: the scene is made ugly on purpose."),
      ("epithet","mighty chiefs untimely slain","Mighty and untimely: two adjectives, one waste."),
    ], maxlen=400)

add("douay-beat2","Matthew (Douay-Rheims)","Gospel according to St Matthew","5:7–10",
    "douay-nt.txt","Blessed are the merciful: for they shall obtain mercy. 5:8. Blessed are the clean of heart: they shall see God.",
    "More beatitudes: mercy for mercy, the clean of heart to see God.",
    [
      ("anaphora","Blessed are the merciful: for they shall obtain mercy. 5:8. Blessed are the clean of heart:","Blessed are, still the same door."),
      ("antithesis","Blessed are the merciful: for they shall obtain mercy.","Give mercy, obtain mercy: the same word both ways."),
      ("metaphor","Blessed are the clean of heart: they shall see God.","The heart named as a thing that can be clean, and so see."),
    ], maxlen=500)

add("greg-8","Gregory the Great","Pastoral Rule","III.1",
    "gregory3.txt","Differently to be admonished are young men and old; because for the most part severity of admonition directs the former to improvement, while kind remonstrance disposes the latter to better",
    "Young and old: severity for the one, entreaty for the other, as Paul wrote of an elder.",
    [
      ("antithesis","severity of admonition directs the former to improvement, while kind remonstrance disposes the latter","Severity and kindness: two ages, two tones."),
      ("anaphora","Differently to be admonished are young men and old","Differently, as throughout."),
      ("sententia","severity of admonition directs the former to improvement","A rule of pastoral speech, not a mood."),
    ], maxlen=500)

add("plato-phaed-2","Plato","Phaedrus","227a",
    "plato-phaedrus.txt","I come from Lysias the son of Cephalus, and I am going to take a walk outside the wall, for I have been sitting with him the whole morning",
    "A speech in the pocket, and a walk outside the wall: the Phaedrus begins in motion.",
    [
      ("hypotyposis","I am going to take a walk outside the wall, for I have been sitting with him the whole morning","Inside all morning, now outside: the scene is a leaving of the city."),
      ("antithesis","it is much more refreshing to walk in the open air than to be shut up in a cloister.","Open air, cloister: two places for talk, and the better is named."),
      ("apostrophe","My dear Phaedrus","The vocative that opened the talk is still in the air."),
    ], maxlen=500)


print("COUNT", len(PASSAGES), "ERR", len(ERRORS))
for e in ERRORS:
    print(" ", e)

# ======================== WRITE JS ========================
# de-dupe ids
seen=set(); uniq=[]
for p in PASSAGES:
    if p["id"] in seen:
        ERRORS.append("dup "+p["id"]); continue
    seen.add(p["id"]); uniq.append(p)
PASSAGES = uniq

js = "/* Ars Rhetorica — public-domain passage bank. Loaded before the main script. */\\n"
js += "window.PASSAGES = "
js += json.dumps(PASSAGES, ensure_ascii=False, indent=2)
js += ";\\n"
OUT.write_text(js)
print("WROTE", OUT, "n=", len(PASSAGES), "bytes", OUT.stat().st_size)
print("authors", sorted({p["author"] for p in PASSAGES}))
print("ERR leftover", len(ERRORS))
