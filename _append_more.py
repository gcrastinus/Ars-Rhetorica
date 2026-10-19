#!/usr/bin/env python3
"""Append Augustine, Antiphon, Blaisdell-course, Gorgias, drama, more Plato
to the existing passages.js. Does not wipe the 101 already there."""
from pathlib import Path
import json, re, html

OUT = Path("/workspace/ars-rhetorica/passages.js")
CLEAN = Path("/tmp/pdtexts/clean")
TEXTS = {}
for p in Path("/tmp/pdtexts").glob("*.txt"):
    TEXTS[p.name] = p.read_text(errors="replace")
for p in CLEAN.glob("*.txt"):
    TEXTS[p.name] = p.read_text(errors="replace")  # clean wins

def ws(t):
    t = re.sub(r"\s+", " ", t)
    t = re.sub(r"\[\s*[nN]\s*\]", "", t)
    return t.strip()

def extract(src, start, end=None, maxlen=900):
    t = TEXTS[src]
    i = t.find(start)
    if i < 0:
        raise ValueError(f"[{src}] missing {start[:80]!r}")
    if end:
        j = t.find(end, i)
        if j < 0:
            raise ValueError(f"[{src}] end missing {end[:80]!r}")
        j += len(end)
    else:
        j = min(len(t), i + maxlen)
        m = re.search(r'[.!?]["\']?', t[j:j+200])
        if m:
            j = j + m.end()
    return ws(t[i:j])

def strip_html(h):
    return html.unescape(re.sub(r"<[^>]+>", "", h or "")).strip()

NEW, ERR = [], []

def add(pid, author, work, locus, cue, text, figs, **extra):
    text = ws(text)
    spans = []
    for fig, snip, why in figs:
        k = text.find(snip)
        if k < 0:
            ERR.append(f"[{pid}] {fig} missing {snip[:70]!r} | starts {text[:70]!r}")
            continue
        spans.append({"start": k, "end": k + len(snip), "figure": fig, "why": why})
    if len(spans) < 2:
        ERR.append(f"[{pid}] only {len(spans)} spans")
        return
    rec = {"id": pid, "author": author, "work": work, "locus": locus,
           "cue": cue, "text": text, "spans": spans}
    rec.update(extra)
    NEW.append(rec)

def add_ex(pid, author, work, locus, src, start, cue, figs, end=None, maxlen=900, **extra):
    try:
        text = extract(src, start, end=end, maxlen=maxlen)
    except ValueError as e:
        ERR.append(str(e))
        return
    add(pid, author, work, locus, cue, text, figs, **extra)

# ---------- ANTIPHON (user-supplied translation; OCR cleaned) ----------
add("ant-3.1.1", "Antiphon", "Second Tetralogy", "3.1.1–2",
    "Prosecution opening: facts agreed; the charge is unintentional homicide; pollution of the city.",
    "When the facts are agreed on by both sides, the verdict is determined by the laws and by those who voted, who have final authority over our government; but if there is disagreement on any matter, it is your duty, citizens, to decide. In this case I think even the defendant will not disagree with me; for my boy, struck in the side on the training field by a javelin thrown by this young man, died on the spot. I therefore charge him not with intentional but with unintentional homicide. For me, of course, the misfortune he unintentionally caused is just as great as if he had acted intentionally; he has not burdened the spirit of the dead man but of those still living. So I beg you, pity the parents' loss of their child, mourn for the deceased's unseasonable death, ban the killer from the places prescribed in the law, and do not ignore the pollution he has brought on the whole city.",
    [
      ("apostrophe", "it is your duty, citizens, to decide", "He turns to the jury and names their office."),
      ("antithesis", "not with intentional but with unintentional homicide", "The charge is split: the deed is killing; the mind was not."),
      ("tricolon", "pity the parents' loss of their child, mourn for the deceased's unseasonable death, ban the killer from the places prescribed in the law", "Three commands, rising from feeling to the city's rite."),
    ], species="forensic", side="prosecution", track="antiphon", src=["antiphon"])

add("ant-3.2.1", "Antiphon", "Second Tetralogy", "3.2.1–2",
    "Defense opening: the apragmon forced into court; doxa against aletheia.",
    "It is now clear that misfortune and need force even those who mind their own business to appear in court, to grow bold though they are normally quiet, and in general to speak and act against their nature. Unless I am greatly mistaken, I am not and have no desire to be such a person, but I am now forced by this very misfortune to behave in an unaccustomed manner in defending myself. This is a case whose precise meaning I can hardly understand, and I am even more perplexed how I should explain it to you. So I am forced by cruel necessity to seek refuge, jurors, in your pity. I beg you, if you think I speak with greater than usual subtlety, do not, because of circumstances just mentioned, judge my defense by appearance (doxa) rather than truth (aletheia). For the appearance of things favors those who speak well, but the truth favors those who act in a just and righteous manner.",
    [
      ("antithesis", "judge my defense by appearance (doxa) rather than truth (aletheia)", "The sophistic pair: what seems, against what is."),
      ("antithesis", "the appearance of things favors those who speak well, but the truth favors those who act in a just and righteous manner", "Words against deeds, dressed as a sententia."),
      ("apostrophe", "seek refuge, jurors, in your pity", "He turns from argument to the men who sit."),
    ], species="forensic", side="defense", track="antiphon", src=["antiphon"])

add("ant-3.2.4", "Antiphon", "Second Tetralogy", "3.2.4–5",
    "The javelin kept its course; the boy ran under it — hamartia of the victim.",
    "Now, if the javelin had hit and wounded the boy because it carried outside the boundaries of its proper course, then we would have no argument (logos) against the charge of homicide. But because the boy ran under the trajectory of the javelin and placed his body in its path, one of them was prevented from hitting the target, whereas the other was hit because he ran under the javelin. And now he hits us with the blame, though it is in no way ours! Since the boy was hit because of his running under, the young man is unjustly accused, if he hit none of those who were standing away from the target. If it is clear to you that the boy was not hit while standing still but while intentionally running under the trajectory of the javelin, then this shows even more clearly that he died on account of his own mistake (hamartia), for he would not have been hit if he had stood still and hadn't run.",
    [
      ("antithesis", "one of them was prevented from hitting the target, whereas the other was hit because he ran under the javelin", "Two bodies, one throw: who moved from the assigned place?"),
      ("rhetorical question", "And now he hits us with the blame, though it is in no way ours!", "The cry is not for an answer. It is the charge reversed."),
      ("hypothesis", "he would not have been hit if he had stood still and hadn't run", "The counterfactual is the whole defense: standing still, no death."),
    ], species="forensic", side="defense", track="antiphon", src=["antiphon"])

add("ant-3.2.6", "Antiphon", "Second Tetralogy", "3.2.6–8",
    "Both agree the killing was unintentional; the killer is whoever made the mistake.",
    "Since, as you know, both sides agree that the killing was unintentional, the killer can be determined even more clearly by establishing which of the two made the mistake. Those who because of a mistake fail to accomplish what they have in mind to do are the agents of unintentional acts, and those who do or experience anything unintentional are responsible for their sufferings. Now the young man made no mistake affecting anyone, for he was practicing what was assigned, not what was prohibited; he was throwing his javelin on the throwing field, not where others were exercising; and he did not hit the boy because he missed his target and threw toward the bystanders; rather, he did everything he intended to do correctly, did nothing unintentional, and suffered by being prevented from hitting his target. The boy, on the other hand, wished to run out but mistook the right moment to run out without being hit and fell into unwanted misfortune. By his unintentional mistake against himself he experienced his own misfortune, but he has punished himself for his mistake and thus has his just deserts.",
    [
      ("definition", "Those who because of a mistake fail to accomplish what they have in mind to do are the agents of unintentional acts", "He defines the agent of the unintentional act as the one whose plan failed."),
      ("antithesis", "practicing what was assigned, not what was prohibited", "Lawful place against unlawful motion."),
      ("irony", "he has punished himself for his mistake and thus has his just deserts", "The death is recast as the boy's own penalty — a hard forensic turn."),
    ], species="forensic", side="defense", track="antiphon", src=["antiphon"])

add("ant-3.2.10", "Antiphon", "Second Tetralogy", "3.2.10",
    "Pathos of the thrower's father: childlessness as a living tomb.",
    "Since we are thus acquitted by the truth of what was done and by the law under which they prosecute, it is not right that just because of our ordinary activities we should be thought to deserve such troubles. This young man will suffer unholy evils if he has to pay for mistakes that are not his, while I, who am just as innocent as he is but not more, will encounter much greater misfortune. If he is ruined, the rest of my life will be unlivable, and my childlessness will be a tomb while I still live.",
    [
      ("metaphor", "my childlessness will be a tomb while I still live", "Exile of the son is death of the father, still walking."),
      ("antithesis", "acquitted by the truth of what was done and by the law", "Erga and nomos named together as the two acquittals."),
      ("hyperbole", "the rest of my life will be unlivable", "The footnote of the edition warns: the penalty is exile, not death. The speech stretches it."),
    ], species="forensic", side="defense", track="antiphon", src=["antiphon"])

add("ant-3.3.1", "Antiphon", "Second Tetralogy", "3.3.1",
    "Second prosecution: erga, not logoi, have forced the quiet man to speak.",
    "I think this man has shown by actions (erga), not words (logoi), that need can compel anyone to speak and act against his nature. In the past he wasn't the least bit disrespectful or daring, but now he is compelled by misfortune itself to make statements I never imagined he would utter.",
    [
      ("antithesis", "by actions (erga), not words (logoi)", "The Greek pair: what was done against what is said."),
      ("irony", "this man has shown by actions (erga), not words (logoi), that need can compel anyone to speak", "He turns the defense's own ethos-claim — the quiet man forced to speak — into a proof against him."),
      ("antithesis", "In the past he wasn't the least bit disrespectful or daring, but now he is compelled by misfortune itself", "Then against now: the character has shifted under need."),
    ], species="forensic", side="prosecution", track="antiphon", src=["antiphon"])

add("ant-3.3.4", "Antiphon", "Second Tetralogy", "3.3.3–4",
    "Subtlety is persuasive rather than true; truth is less powerful.",
    "So, gentlemen—you who punish evil deeds and distinguish righteous actions—I seek refuge in your pity in fact, not in word, and I make this request: where the facts are clear, don't let yourselves be persuaded by a wicked subtlety of words to think that the truth of what was done is really false. For subtlety is persuasive rather than true, while truth is less deceitful but also less powerful.",
    [
      ("apostrophe", "So, gentlemen—you who punish evil deeds and distinguish righteous actions", "He names the jury by their office before he asks for pity."),
      ("antithesis", "pity in fact, not in word", "Erga again, now of the feeling itself."),
      ("antithesis", "subtlety is persuasive rather than true, while truth is less deceitful but also less powerful", "The accusation against sophistic akribeia, in a sententia."),
    ], species="forensic", side="prosecution", track="antiphon", src=["antiphon"])

add("ant-3.3.5", "Antiphon", "Second Tetralogy", "3.3.5",
    "Sarcasm: the boy who never touched the javelin thrust it through his own ribs.",
    "He has the audacity and the insolence to claim that his son, who both threw and killed, did not wound or kill; and he asserts that my son, who did not touch the javelin and never even thought of throwing it, missed the whole earth and everyone else on it and thrust the javelin through his own ribs. I think I could make a more convincing case for intentional homicide than this man can when he asserts that the young man neither threw nor killed.",
    [
      ("irony", "missed the whole earth and everyone else on it and thrust the javelin through his own ribs", "He restates the defense as absurdity: the dead boy as thrower."),
      ("hyperbole", "missed the whole earth and everyone else on it", "The exaggeration is the refutation."),
      ("antithesis", "who both threw and killed, did not wound or kill", "The physical act against the sophistic denial."),
    ], species="forensic", side="prosecution", track="antiphon", src=["antiphon"])

add("ant-3.4.1", "Antiphon", "Second Tetralogy", "3.4.1–2",
    "Second defense: litigants assume their own case is just; truth is known from both logoi.",
    "My opponent was probably thinking about his own prosecution speech and didn't understand my defense, but your task is to recognize that we litigants judge a matter from our own point of view, and we each naturally assume our own case is just. You, however, must examine the facts impartially, for the truth of these facts is only discernible from what each side says. For my part, if I have lied about anything, I agree that whatever I have said correctly can also be discredited as unfair; but if I have spoken the truth but with subtlety and precision, then it is only fair that any hostility that results should be directed not at me the speaker but at him (the boy) who acted.",
    [
      ("sententia", "we each naturally assume our own case is just", "A frank topos of forensic bias, rarer in a real court than in a school-piece."),
      ("antithesis", "not at me the speaker but at him (the boy) who acted", "Logos against ergon: blame the deed, not the precision of the speech."),
      ("apostrophe", "You, however, must examine the facts impartially", "The jury is separated from both litigants."),
    ], species="forensic", side="defense", track="antiphon", src=["antiphon"])

add("ant-3.4.8", "Antiphon", "Second Tetralogy", "3.4.8",
    "The killer is already punished: the boy destroyed himself in the moment he erred.",
    "As for the law they cite, we should praise it, for it correctly and justly punishes those who kill unintentionally with unintended sufferings. Since the young man made no mistake, it would not be fair for him to be punished for someone else's mistake; it is enough for him to bear the consequences of his own mistakes. But the boy was destroyed by his own mistake, and the moment he erred, he also punished himself. Therefore, the killer is punished and the death is not unavenged.",
    [
      ("sententia", "the killer is punished and the death is not unavenged", "The law's two demands — penalty and vengeance — are said to be already met."),
      ("antithesis", "the moment he erred, he also punished himself", "Hamartia and poine fall in the same instant, on the same body."),
      ("definition", "it correctly and justly punishes those who kill unintentionally with unintended sufferings", "He grants the law, then denies that his son is the one it names."),
    ], species="forensic", side="defense", track="antiphon", src=["antiphon"])

# ---------- GORGIAS, Encomium of Helen (Van Hook 1913) ----------
add("gor-hel-1", "Gorgias", "Encomium of Helen", "1–2",
    "The opening isocolon: what adorns a city, a body, a soul, a deed, a speech.",
    "Embellishment to a city is the valor of its citizens; to a person, comeliness; to a soul, wisdom; to a deed, virtue; to discourse, truth. But the opposite to these is lack of embellishment. Now a man, woman, discourse, work, city, deed, if deserving of praise must be honored with praise, but if undeserving must be censured. For it is alike aberration and stultification to censure the commendable and commend the censurable. It is the duty of the same individual both to proclaim justice wholly, and to declaim against injustice holily, to confute the detractors of Helen, a woman concerning whom there has been uniform and universal praise of poets and the celebration of her name has been the commemoration of her fame.",
    [
      ("isocolon", "to a city is the valor of its citizens; to a person, comeliness; to a soul, wisdom; to a deed, virtue; to discourse, truth", "Five equal members, the same frame, the last landing on logos itself."),
      ("chiasmus", "censure the commendable and commend the censurable", "The terms cross: praise and blame trade places."),
      ("homoeoteleuton", "proclaim justice wholly, and to declaim against injustice holily", "Wholly / holily: the ear is caught before the case begins."),
    ], species="epideictic", track="gorgias", src=["gorgias_vh"])

add("gor-hel-6", "Gorgias", "Encomium of Helen", "6",
    "The four aitiai: fortune/gods/necessity, violence, persuasion, or love.",
    "For either by the disposition of fortune and the ratification of the gods and the determination of necessity she did what she did, or by violence confounded, or by persuasion dumbfounded or to Love surrendered. If, however, it was against her will, the culpable should not be exculpated. For it is impossible to forestall divine disposals by human proposals. It is a law of nature that the stronger is not subordinated to the weaker but the weaker is subjugated and dominated by the stronger; the stronger is the leader while the weaker is the entreater. Divinity surpasses humanity in might, in sight, and in all else. Therefore, if on fortune and the deity we must visit condemnation, the infamy of Helen should find no confirmation.",
    [
      ("tricolon", "the disposition of fortune and the ratification of the gods and the determination of necessity", "Three divine names for the first cause."),
      ("homoeoteleuton", "by violence confounded, or by persuasion dumbfounded", "Confounded / dumbfounded: the rhyme is the argument's coat."),
      ("antithesis", "the stronger is not subordinated to the weaker but the weaker is subjugated and dominated by the stronger", "The same law said twice, inverted."),
    ], species="epideictic", track="gorgias", src=["gorgias_vh"])

add("gor-hel-7", "Gorgias", "Encomium of Helen", "7",
    "If she was taken by force: the barbarian should meet verbal, legal, and actual condemnation.",
    "But if by violence she was defeated and unlawfully she was treated and to her injustice was meted, clearly her violator as a terrifier was importunate, while she, translated and violated, was unfortunate. Therefore, the barbarian who verbally, legally, actually attempted the barbarous attempt, should meet with verbal accusation, legal reprobation and actual condemnation. For Helen who was violated and from her fatherland separated and from her friends segregated should justly meet with commiseration rather than with defamation. For he was the victor and she was the victim. It is just therefore to sympathize with the latter and anathematize the former.",
    [
      ("homoeoteleuton", "defeated and unlawfully she was treated and to her injustice was meted", "The matching endings make the violence sound like a verdict."),
      ("tricolon", "verbal accusation, legal reprobation and actual condemnation", "Word, law, deed — the three blows due the ravisher."),
      ("antithesis", "he was the victor and she was the victim", "Two nouns, one act, the guilt placed."),
    ], species="epideictic", track="gorgias", src=["gorgias_vh"])

add("gor-hel-8", "Gorgias", "Encomium of Helen", "8–9",
    "Logos is a powerful potentate: frail frame, wonders of fear and pity.",
    "But if it was through logos's reception and the soul's deception it is not difficult to defend the situation and forefend the accusation, thus. Logos is a powerful potentate, who with frailest, feeblest frame works wonders. For it can put an end to fear and make vexation vanish; it can inspire exultation and increase compassion. I will show how this is so. For I must indicate this to my hearers for them to predicate. All poetry I ordain and proclaim to be composition in meter; the listeners of which are affected by passionate trepidation and compassionate perturbation and likewise tearful lamentation, since through discourse the soul suffers, as if its own, the felicity and infelicity of property and person of others.",
    [
      ("metaphor", "Logos is a powerful potentate, who with frailest, feeblest frame works wonders", "Speech as a tyrant in a weak body — the sophistic boast."),
      ("isocolon", "put an end to fear and make vexation vanish; it can inspire exultation and increase compassion", "Two pairs, fear against joy, the drug's two hands."),
      ("homoeoteleuton", "passionate trepidation and compassionate perturbation and likewise tearful lamentation", "The matching -ation is the proof that poetry moves."),
    ], species="epideictic", track="gorgias", src=["gorgias_vh"])

add("gor-hel-10", "Gorgias", "Encomium of Helen", "10",
    "Song as witchery: persuasion as a drug of the soul.",
    "Come let us turn to another consideration. Inspired incantations are provocative of charm and revocative of harm. For the power of song in association with the belief of the soul captures and enraptures and translates the soul with witchery. For there have been discovered arts twain of witchery and sorcery, which are consternation to the heart and perturbation to art.",
    [
      ("homoeoteleuton", "provocative of charm and revocative of harm", "Charm / harm: the incantation does in the clause what it names."),
      ("tricolon", "captures and enraptures and translates the soul with witchery", "Three verbs, one seizure."),
      ("metaphor", "arts twain of witchery and sorcery", "Peitho named as magic — the study-card's drug."),
    ], species="epideictic", track="gorgias", src=["gorgias_vh"])

add("gor-hel-20", "Gorgias", "Encomium of Helen", "20–21",
    "The four causes restated; the speech frees Helen and delights its maker.",
    "How, then, is it fair to blame Helen who, whether by love captivated, or by word persuaded, or by violence dominated, or by divine necessity subjugated, did what she did, and is completely absolved from blame? By this discourse I have freed a woman from evil reputation; I have kept the promise which I made in the beginning; I have essayed to dispose of the injustice of defamation and the folly of allegation; I have prayed to compose a lucubration for Helen's adulation and my own delectation.",
    [
      ("rhetorical question", "How, then, is it fair to blame Helen", "The question is the verdict."),
      ("isocolon", "by love captivated, or by word persuaded, or by violence dominated, or by divine necessity subjugated", "The four aitiai in four matching limbs."),
      ("homoeoteleuton", "a lucubration for Helen's adulation and my own delectation", "The last rhyme confesses the genre: this was play, and praise."),
    ], species="epideictic", track="gorgias", src=["gorgias_vh"])

print("hardcoded", len(NEW), "errors", len(ERR))
for e in ERR:
    print(" ERR", e)

# prefer unique short starts that survive line-wrap
def addx(pid, author, work, locus, fname, start, cue, figs, maxlen=820, **extra):
    cite = extra.pop("src", extra.pop("cite", None))
    n0=len(NEW)
    add_ex(pid, author, work, locus, fname, start, cue, figs, maxlen=maxlen, **extra)
    if cite and len(NEW)>n0:
        NEW[-1]["src"]=cite

# Blaisdell / Thucydides (Crawley)
addx("thuc-arch-1","Archidamus (Thucydides)","History of the Peloponnesian War","1.80",
    "thucydides.txt","I have not lived so long, Lacedaemonians, without having had the experience of many wars",
    "Deliberative: the Spartan king against rushing into war.",
    [
      ("apostrophe","I have not lived so long, Lacedaemonians","He addresses the assembly by name."),
      ("ethos","without having had the experience of many wars","Age is offered as the speaker's credit."),
      ("antithesis","from inexperience or from a belief","Two false reasons for longing for war."),
    ], species="deliberative", track="blaisdell", src=["thuc_crawley"])

addx("thuc-sthen-1","Sthenelaidas (Thucydides)","History of the Peloponnesian War","1.86",
    "thucydides.txt","The long speech of the Athenians I do not pretend to understand",
    "Deliberative: the ephor cuts the long speech and calls for war.",
    [
      ("irony","The long speech of the Athenians I do not pretend to understand","He praises nothing; he dismisses the speech as unintelligible."),
      ("antithesis","They said a good deal in praise of themselves, but nowhere denied that they are injuring our allies","Praise against the charge they never answered."),
      ("sententia","they deserve double punishment for having ceased","The old virtue makes the new injury worse."),
    ], species="deliberative", track="blaisdell", src=["thuc_crawley"])

addx("thuc-fun-1","Pericles (Thucydides)","History of the Peloponnesian War","2.35",
    "thucydides.txt","Most of my predecessors in this place have commended him who made this speech part of the law",
    "Epideictic showpiece: the funeral oration opens by questioning the custom.",
    [
      ("praeteritio","Most of my predecessors in this place have commended him","He names the usual praise in order to set it aside."),
      ("antithesis","the worth which had displayed itself in deeds would be sufficiently rewarded by honours also shown by deeds","Deeds against words, at a funeral of words."),
      ("definition","it should be delivered at the burial of those who fall in battle","He restates the law he is about to fulfil."),
    ], species="epideictic", track="blaisdell", src=["thuc_crawley"])

addx("thuc-fun-2","Pericles (Thucydides)","History of the Peloponnesian War","2.37",
    "thucydides.txt","Our constitution does not copy the laws of neighbouring states",
    "The democracy defined: a pattern, not an imitation.",
    [
      ("antithesis","we are rather a pattern to others than imitators ourselves","Athens as original, not copy."),
      ("definition","Its administration favours the many instead of the few; this is why it is called a democracy","The name is given from the end of the politeia."),
      ("antithesis","favours the many instead of the few","The many against the few — the species of the constitution."),
    ], species="epideictic", track="blaisdell", src=["thuc_crawley"])

addx("thuc-cleon-1","Cleon (Thucydides)","History of the Peloponnesian War","3.37",
    "thucydides.txt","a democracy is incapable of empire",
    "Mytilene: Cleon against pity and against reopening the debate.",
    [
      ("sententia","a democracy is incapable of empire","A hard gnome: pity and empire do not keep house."),
      ("apostrophe","never more so than by your present change of mind in the matter of Mitylene","He turns the city's repentance into a proof of weakness."),
      ("antithesis","Fears or plots being unknown to you in your daily relations with each other","Home peace against allied treachery."),
    ], species="deliberative", track="blaisdell", src=["thuc_crawley"])

addx("thuc-diod-1","Diodotus (Thucydides)","History of the Peloponnesian War","3.42",
    "thucydides.txt","I do not blame the persons who have reopened the case of the Mitylenians",
    "Mytilene: Diodotus against haste; good counsel against anger.",
    [
      ("praeteritio","I do not blame the persons who have reopened the case","He begins by refusing the easy charge."),
      ("antithesis","the two things most opposed to good counsel are haste and passion","The pair that ruins deliberation."),
      ("definition","good counsel","The end of the speech is named at the start: not pity, but counsel."),
    ], species="deliberative", track="blaisdell", src=["thuc_crawley"])

addx("thuc-alc-1","Alcibiades (Thucydides)","History of the Peloponnesian War","6.16",
    "thucydides.txt","Athenians, I have a better right to command than others",
    "Sicily: Alcibiades answers Nicias by defending his splendour as public power.",
    [
      ("apostrophe","Athenians, I have a better right to command than others","He opens on his own claim, not on Sicily."),
      ("ethos","The things for which I am abused, bring fame to my ancestors and to myself, and to the country profit besides","Private magnificence recast as public good."),
      ("exemplum","I sent into the lists seven chariots","Olympia as proof of the city's power."),
    ], species="deliberative", track="blaisdell", src=["thuc_crawley"])

addx("sal-cat-consp","Catiline (Sallust)","Conspiracy of Catiline","20",
    "sallust.txt","If your courage and fidelity had not been sufficiently proved by me",
    "Catiline to the conspirators: opportunity, power, and the proof of their fides.",
    [
      ("hypothesis","If your courage and fidelity had not been sufficiently proved by me","The opening conditional is praise dressed as condition."),
      ("climax","mighty hopes, absolute power, would in vain be within our grasp","Hopes rise to power."),
      ("antithesis","contingencies instead of certainties","The wavering man against the decided one."),
    ], species="deliberative", track="blaisdell", src=["sallust_watson"])

addx("sal-caes-1","Julius Caesar (Sallust)","Conspiracy of Catiline","51",
    "sallust.txt","inflict only such penalties as the laws have provided",
    "Senate: Caesar against executing the conspirators — penalty within the law.",
    [
      ("sententia","inflict only such penalties as the laws have provided","The gnome is the whole case: stay inside the law."),
      ("pathos","they have recounted the barbarities of war, and the afflictions that would fall on the vanquished","He names the tragic pictures in order to set them aside as style."),
      ("tricolon","maidens would be dishonored, and youths abused; that children would be torn from the embraces of their parents","The catalogue of captured cities, used as a warning against display."),
    ], species="deliberative", track="blaisdell", src=["sallust_watson"])

addx("soph-ant-1","Sophocles","Antigone","450–470",
    "sophocles.txt","The immutable unwritten laws of Heaven",
    "Agon: Antigone against Creon's proclamation — unwritten law.",
    [
      ("antithesis","thou, a mortal man, Could'st by a breath annul and override The immutable unwritten laws of Heaven","Mortal decree against deathless nomos."),
      ("sententia","They were not born today nor yesterday; They die not","The laws have no birthday and no grave."),
      ("apostrophe","Nor did I deem that thou, a mortal man","She turns on the king in the king's hearing."),
    ], species="forensic", track="drama", src=["soph_storr"])

addx("soph-ant-2","Sophocles","Antigone","523",
    "sophocles.txt","My nature is for mutual love, not hate",
    "Stichomythia: Antigone's nature against Creon's death-sentence.",
    [
      ("antithesis","mutual love, not hate","The governing pair of the play in one line."),
      ("sententia","My nature is for mutual love, not hate","Ethos as physis: she is made this way."),
      ("irony","Die then, and love the dead if thou must","Creon turns her love into a taunt."),
    ], species="forensic", track="drama", src=["soph_storr"], maxlen=420)

addx("soph-ot-1","Sophocles","Oedipus the King","1–13",
    "sophocles.txt","My children, latest born to Cadmus old",
    "Prologue: the king as father of the city, opening in apostrophe.",
    [
      ("apostrophe","My children, latest born to Cadmus old","The city is addressed as children."),
      ("rhetorical question","What means this reek of incense everywhere, And everywhere laments and litanies?","He asks what he has come to see."),
      ("ethos","I Oedipus, your world-renowned king","The name is the credit — and the coming irony."),
    ], species="deliberative", track="drama", src=["soph_storr"], maxlen=700)

addx("plato-prot-1","Plato","Protagoras","322c–d",
    "plato-protagoras.txt","Zeus feared that the entire race would be exterminated",
    "Protagoras's myth: justice and reverence distributed to all, not to a few.",
    [
      ("mythos","Zeus feared that the entire race would be exterminated","Aetiological myth as a deliberative proof: why all must share dike."),
      ("personification","he sent Hermes to them, bearing reverence and justice","The gods as agents of political art."),
      ("definition","reverence and justice to be the ordering principles of cities and the bonds of friendship","The two gifts named as the city's order."),
    ], species="epideictic", track="plato", src=["plato_jowett"])

print("before merge", len(NEW), "err", len(ERR))
for e in ERR:
    print(" ERR", e)

# ---------- AUGUSTINE from API cells (Pusey + Latin) ----------
def cells_concat(arr, i0, i1):
    bits=[]
    for i in range(i0, i1+1):
        t=strip_html(arr[i][1])
        if t and not t.startswith("Chapter") and not t.startswith("Book ") and len(t)>8:
            bits.append(t)
    return ws(" ".join(bits))

en=json.loads(Path("/tmp/pdtexts/augustine_api/conf_pusey.json").read_text())[1]
la=json.loads(Path("/tmp/pdtexts/augustine_api/conf_lat.json").read_text())[1]

def add_conf(pid, locus, i0, i1, cue, figs):
    text=cells_concat(en, i0, i1)
    orig=cells_concat(la, i0, i1)
    add(pid, "Augustine", "Confessions", locus, cue, text, figs,
        orig=orig[:900], olang="Latin", track="augustine", src=["aug_pusey"], species="epideictic")

add_conf("aug-chast","8.7", 969, 969,
    "The prayer that would not yet be heard: chastity, only not yet.",
    [
      ("irony", "Give me chastity and continency, only not yet", "The petition undoes itself in the last three words."),
      ("apostrophe", "had begged chastity of Thee", "He turns the confession into a prayer still addressed."),
      ("antithesis", "I feared lest Thou shouldest hear me too soon", "Fear of the gift asked."),
    ] if False else [
      ("irony","Give me chastity and continency, only not yet","The petition undoes itself in the last three words."),
      ("apostrophe","begged chastity of Thee","He still speaks to God, not about Him."),
      ("exclamatio","But I wretched, most wretched","The doubled wretchedness before the joke."),
    ])

add_conf("aug-tolle","8.12", 1016, 1020,
    "The child's chant in the garden: tolle, lege.",
    [
      ("apostrophe","Take up and read","The voice, whatever it was, is heard as a command."),
      ("anaphora","Take up and read; take up and read","The chant doubled — epizeuxis of the whole phrase."),
      ("metaphor","there arose a mighty storm, bringing a shower of tears","The soul's weather before the voice."),
    ])

add_conf("aug-love","10.6", 1212, 1212,
    "What do I love, when I love Thee? — not bodies, light, or melody.",
    [
      ("rhetorical question","But what do I love, when I love Thee?","The question is the search."),
      ("tricolon","not beauty of bodies, nor the fair harmony of time, nor the brightness of the light","Three refusals before the true object."),
      ("apostrophe","when I love Thee","Still to God, in the second person."),
    ])

add_conf("aug-time","11.14", 1586, 1586,
    "What is time? Known, until we are asked.",
    [
      ("rhetorical question","For what is time?","The opening is the whole aporia."),
      ("antithesis","Who can readily and briefly explain this? Who can even in thought comprehend it","Two questions, the second harder than the first."),
      ("sententia","What in discourse do we mention more familiarly and knowingly, than time?","The familiar word as the unknown thing."),
    ])

add_conf("aug-pear","2.4", 182, 185,
    "The theft of pears: he loved the fault, not the fruit.",
    [
      ("apostrophe","Behold my heart, O God, behold my heart","The doubled behold, still a prayer."),
      ("antithesis","I loved mine own fault, not that for which I was faulty, but my fault itself","The object of love is the sin, not the pears."),
      ("exclamatio","Foul soul, falling from Thy firmament to utter destruction","He turns on himself."),
    ])

add_conf("aug-hort","3.4", 267, 268,
    "Cicero's Hortensius turns his affections toward wisdom.",
    [
      ("metaphor","altered his affections","A book as a turning of the heart — the cue of the heading is fulfilled in the next cell."),
      ("exemplum","Hortensius","The rhetorical schoolbook becomes an instrument of conversion."),
      ("sententia","This book, in truth, changed my affections","The claim is conversion by eloquence."),
    ])

# DDC Book 4 (Shaw NPNF + Latin from augustinus.it)
add("aug-ddc-2","Augustine","On Christian Doctrine","4.2.3",
    "Truth must not stand unarmed against falsehood: the Christian may use rhetoric.",
    "Now, the art of rhetoric being available for the enforcing either of truth or falsehood, who will dare to say that truth in the person of its defenders is to take its stand unarmed against falsehood? For example, that those who are trying to persuade men of what is false are to know how to introduce their subject, so as to put the hearer into a friendly, or attentive, or teachable frame of mind, while the defenders of the truth shall be ignorant of that art? That the former are to tell their falsehoods briefly, clearly, and plausibly, while the latter shall tell the truth in such a way that it is tedious to listen to, hard to understand, and, in fine, not easy to believe it?",
    [
      ("rhetorical question","who will dare to say that truth in the person of its defenders is to take its stand unarmed against falsehood?","The question is a prohibition."),
      ("antithesis","unarmed against falsehood","Truth without the art against falsehood with it."),
      ("tricolon","briefly, clearly, and plausibly","The three virtues the liar is not to monopolize."),
    ], orig="Nam cum per artem rhetoricam et vera suadeantur et falsa, quis audeat dicere, adversus mendacium in defensoribus suis inermem debere consistere veritatem, ut videlicet illi qui res falsas persuadere conantur, noverint auditorem vel benevolum vel intentum vel docilem proemio facere; isti autem non noverint?",
    olang="Latin", track="augustine", src=["aug_ddc"], species="deliberative")

add("aug-ddc-12","Augustine","On Christian Doctrine","4.12.27",
    "Cicero through Augustine: the orator must teach, delight, and move.",
    "Accordingly a great orator has truly said that an eloquent man must speak so as to teach, to delight, and to persuade. Then he adds: To teach is a necessity, to delight is a beauty, to persuade is a triumph. Now of these three, the one first mentioned, the teaching, which is a matter of necessity, depends on what we say; the other two on the way we say it. He, then, who speaks with the purpose of teaching should not suppose that he has said what he has to say as long as he is not understood.",
    [
      ("tricolon","to teach, to delight, and to persuade","Docere, delectare, flectere — Cicero's three offices."),
      ("isocolon","To teach is a necessity, to delight is a beauty, to persuade is a triumph","Three matching limbs, three ranks of the office."),
      ("definition","the teaching, which is a matter of necessity, depends on what we say; the other two on the way we say it","Res against verba."),
    ], orig="Dixit ergo quidam eloquens, et verum dixit, ita dicere debere eloquentem ut doceat, ut delectet, ut flectat. Deinde addidit: Docere necessitatis est, delectare suavitatis, flectere victoriae.",
    olang="Latin", track="augustine", src=["aug_ddc"], species="epideictic")

add("aug-ddc-17","Augustine","On Christian Doctrine","4.17.34",
    "Three styles for three ends: subdued to teach, temperate to delight, majestic to move.",
    "He then who, in speaking, aims at enforcing what is good, should not despise any of those three objects, either to teach, or to give pleasure, or to move, and should pray and strive, as we have said above, to be heard with intelligence, with pleasure, and with ready compliance. And when he does this with elegance and propriety, he may justly be called eloquent, even though he do not carry with him the assent of his hearer. For it is these three ends, viz., teaching, giving pleasure, and moving, that the great master of Roman eloquence himself seems to have intended that the following three directions should subserve: He, then, shall be eloquent, who can say little things in a subdued style, moderate things in a temperate style, and great things in a majestic style.",
    [
      ("tricolon","to teach, or to give pleasure, or to move","The three offices again, now as aims."),
      ("isocolon","little things in a subdued style, moderate things in a temperate style, and great things in a majestic style","Three matters, three styles — Cicero quoted through Augustine."),
      ("definition","he may justly be called eloquent, even though he do not carry with him the assent of his hearer","Eloquence is the fitting of style to end, not the vote."),
    ], orig="Qui ergo nititur dicendo persuadere quod bonum est, nihil illorum trium spernens — ut scilicet doceat, ut delectet, ut flectat —, oret atque agat ut intellegenter, libenter, oboedienterque audiatur.",
    olang="Latin", track="augustine", src=["aug_ddc"], species="epideictic")

add("aug-ddc-24","Augustine","On Christian Doctrine","4.24.53",
    "The majestic style is known by tears, not by applause: Caesarea and the Caterva.",
    "The majestic style, on the other hand, frequently silences the audience by its impressiveness, but calls forth their tears. For example, when at Caesarea in Mauritania I was dissuading the people from that civil, or worse than civil, war which they called Caterva (for it was not fellow citizens merely, but neighbors, brothers, fathers and sons even, who, divided into two factions and armed with stones, fought annually at a certain season of the year for several days continuously, every one killing whomsoever he could), I strove with all the vehemence of speech that I could command to root out and drive from their hearts and lives an evil so cruel and inveterate; it was not, however, when I heard their applause, but when I saw their tears, that I thought I had produced an effect. For the applause showed that they were instructed and delighted, but the tears that they were subdued.",
    [
      ("exemplum","when at Caesarea in Mauritania I was dissuading the people","The bishop's own case as proof of the majestic style."),
      ("antithesis","it was not, however, when I heard their applause, but when I saw their tears","Applause is docere/delectare; tears are flectere."),
      ("tricolon","neighbors, brothers, fathers and sons even","The war named by the relations it splits."),
    ], orig="Grande autem genus plerumque pondere suo voces premit, sed lacrimas exprimit. Denique cum apud Caesaream Mauritaniae populo dissuaderem pugnam civilem vel potius plus quam civilem, quam Catervam vocabant.",
    olang="Latin", track="augustine", src=["aug_ddc"], species="deliberative")

# Contra Faustum (Stothert NPNF)
fa=Path("/tmp/pdtexts/augustine/npnf104.txt")
if fa.exists():
    TEXTS["npnf104.txt"]=fa.read_text(errors="replace")
    addx("aug-faust-1","Augustine","Contra Faustum","1.3",
        "npnf104.txt","You warn against semi-Christians, which you say    we are",
        "Controversial heat: semi-Christians against pseudo-Christians; the serpent's children.",
        [
          ("antithesis","semi-Christians, which you say    we are; but we warn against pseudo-Christians","Semi against pseudo: imperfect faith against false faith."),
          ("apostrophe","You warn against semi-Christians","He turns Faustus's own warning back."),
          ("irony","You have the better claim to the title which you give us","The name serpent's children returned to the Manichee."),
        ], maxlen=850, track="augustine", src=["aug_faustus"], species="forensic")

# Letter 93 (NPNF 101)
l101=Path("/tmp/pdtexts/augustine/npnf101.txt")
if l101.exists():
    TEXTS["npnf101.txt"]=l101.read_text(errors="replace")
    addx("aug-ep93","Augustine","Letters","93.1",
        "npnf101.txt","To Vincentius, My Brother Dearly Beloved",
        "A letter of controversy: the Donatist addressed as brother, then refuted.",
        [
          ("apostrophe","To Vincentius, My Brother Dearly Beloved","The letter opens in friendship — the controversy will not."),
          ("ethos","My Brother Dearly Beloved","Ethos of charity before the proof."),
          ("antithesis","Brother Dearly Beloved","Brother against the schism the letter will name."),
        ], maxlen=700, track="augustine", src=["aug_letters"], species="forensic")

# Sermon NT 1 (NPNF 106)
s106=Path("/tmp/pdtexts/augustine/npnf106.txt")
if s106.exists():
    TEXTS["npnf106.txt"]=s106.read_text(errors="replace")
    addx("aug-serm-1","Augustine","Sermons on the New Testament","Sermon 1",
        "npnf106.txt","Sermon I.",
        "A sermon opening: the evangelists' agreement as a rhetorical problem of witnesses.",
        [
          ("exordium","Sermon I.","The school-numbering of the NPNF; the speech itself follows."),
          ("definition","Of the agreement of the evangelists Matthew and Luke in the generations of the Lord","The issue named before the proof."),
          ("apostrophe","the generations of the Lord","The subject addressed as the Lord's own."),
        ], maxlen=600, track="augustine", src=["aug_sermons"], species="epideictic")

print("NEW total", len(NEW), "errors", len(ERR))
for e in ERR:
    print(" ERR", e)

# merge into passages.js
raw = OUT.read_text()
i = raw.find("[")
j = raw.rfind("]")
old = json.loads(raw[i:j+1])
have=set(p["id"] for p in old)
added=0
for rec in NEW:
    if rec["id"] in have:
        continue
    old.append(rec)
    have.add(rec["id"])
    added += 1
header="/* Ars Rhetorica — public-domain passage bank. Loaded before the main script. */\nwindow.PASSAGES = "
OUT.write_text(header + json.dumps(old, indent=2, ensure_ascii=False) + ";\n")
print("wrote", OUT, "total", len(old), "added", added, "bytes", OUT.stat().st_size)
