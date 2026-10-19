# Ars Rhetorica: plan for the study cards, the Imitation Tablet, and the whole-speech rooms

Prepared 18 Oct 2026 from the repository at commit b330c16 (gcrastinus/ars-rhetorica). Nothing in the repository was changed. Card positions are given as `deck[index]`, counting panels from 0 as they stand in `DECKS` in data.js. Passage ids are ids that exist in `window.PASSAGES` (passages.js); exercise sets are named by their `EX` ids.

---

## 1. The governing idea

Augustine says that eloquence is learned more readily by reading and hearing the eloquent, and by imitating them, than by following the rules of the art (*On Christian Doctrine* IV.3). Cicero has Crassus say that the art came from eloquence, and not eloquence from the art: the rules were gathered by observing what eloquent men already did (*De oratore* I.146). If that is so, a course in rhetoric should not try to become a complete textbook. A student who has memorized every division of Hermagoras and has never read a whole speech closely has learned the names of the art without the art.

But a student also cannot imitate what he does not see, and he cannot answer an exercise that asks him to name a topic or a passion that nothing has taught him. So the course needs a lean core of doctrine. It has to be enough to give the real art (invention, arrangement, style, and briefly memory and delivery), and enough that the student knows what to do in every exercise set. Beyond that core, the course should send the student to the speeches themselves.

This plan therefore does three things:

1. It ties each card to specific passages in the bank where the principle can be seen at work, so that the card points the student to a real speech, not only to a definition.
2. It adds an Imitation Tablet, built on the model of the Recitation Tablet in Ars Grammatica: the student reads a passage, paraphrases it or writes the same move on a new subject, and then compares the work with a model and a checklist of what the original does. There is no automatic grader.
3. It adds a few whole-speech rooms, where the student reads a complete public-domain speech and sees the parts of the art working together.

The cards follow the rule in STYLE-GUIDE-CARDS.md: each card begins from realities and common experience, then states the principle, then brings in the tradition.

**Sources not yet in the passage bank.** The two texts quoted above are not in passages.js. *On Christian Doctrine* IV.3 (Shaw, NPNF I.2, already the course's translation of Book IV) and *De oratore* I.146 (Yonge, already listed under `cic_orat`) should be added as passages before the opening deck quotes them: NEEDS SOURCE (exact wording to be copied and checked).

---

## 2. Gap audit

### 2.1 Headline

- **19 of the 22 exercise sets** have at least one prerequisite that the cards teach thinly or not at all.
- **12 sets have a MISSING prerequisite:** enthymeme, topics, pathos, taxis, lexis, figclick, figwhich, figaugustine, figcicero, debates, whole, augoffice.
- **7 sets are THIN only:** species, pisteis, stasis, ethos, antiphon, greg, figfurther.
- **3 sets are adequately prepared:** taxisorder, effects, figgorgias.

The worst gaps:

1. **Style (lexis).** 47 of the 61 items quote Aristotle, *Rhetoric* III (Freese), and ask about propriety, the four causes of frigid style, simile and metaphor, metaphor from proportion, the periodic style, divided and opposed clauses, setting things before the eyes, surprise, and hyperbole. The cards teach only that style should be clear and fitting and that metaphor is the greatest thing (lexis[0]). The exercise's own instruction ("ask whether the claim still stands in plain clauses") describes only the other 14 items.
2. **Figures.** `CORE_FIGURES` has 18 figures, but the only card that lists figures (lexis[1]) names 10 and says that "the main figures exercises ask only about them." The eight untaught core figures are personification (39 marked spans in the bank), sententia (32), asyndeton (30), hyperbole (20), simile (19), climax (17), praeteritio (5), and litotes (4). 129 of the 293 figure-bearing passages contain at least one of them (35 of 75 in Cicero, 17 of 47 in Augustine). The figure-click sets by author show the gloss only at difficulty 1–2, so from difficulty 3 the student meets these figures with no definition anywhere in the course. Act VI has no study deck at all.
3. **Topics.** The topics set uses all 24 of Aristotle's topics and all 17 of Cicero's. logos[5] names 13 of Aristotle's and all of Cicero's, but it defines none of them. Eleven of Aristotle's topics used in the set are not even named: inflections, turning the charge, two opposites, same result, change of choice, possible motive, the incredible, contradiction, cause of a slander, contrary acts, and mistakes. The answer options do carry a one-line gloss, which keeps the set playable, but the student is learning from the options, not from a card.
4. **The passions.** ethos[1] lists Aristotle's passions but defines none of them, and it gives Thomas's eleven passions without placing Aristotle's on Thomas's map. The set asks the student to tell anger from indignation, pity from love, and emulation from confidence, and its feedback classifies pity, shame, and kindness as concupiscible and indignation, emulation, and confidence as irascible. No card says so.
5. **The paired debates.** Seven of the ten debates (Corcyra and Corinth, Plataea and Thebes, Nicias and Alcibiades, Hermocrates and Euphemus, Catiline, Caesar and Cato, and the Mytilene situation beyond one sentence) have no card that gives the situation.
6. **Augustine.** augustine[0] and augustine[1] teach the three offices, the three styles, mixing, and the tears at Caesarea. The set also asks about truth not standing unarmed (IV.2), why teaching is the necessary office (IV.12), the rule that the style follows the speaker's purpose and not the size of the subject (IV.19, with Ambrose in IV.21), the difference between the majestic and the temperate style (IV.20), the subdued style for knotty questions (IV.23), the effects of each style (IV.24–25), and wisdom before eloquence (IV.28). None of these is on a card. The card says "grand" where the items say "majestic."

Two conflicts between cards and items also turned up:

- taxis[1] gives "You were then, Catilina, at Laeca's house that night" as the **proof** of the First Catilinarian, but `TAXIS_ITEMS` t13 marks the same sentence as **narration**, and the set will mark a student wrong for following the card.
- lexis[1] says that the main figures sets ask only about its ten figures, which is no longer true (see above).

### 2.2 Audit table

"OK" means the card teaches the concept clearly enough to act on. "THIN" means the card names it or touches it but a student could not reliably apply it. "MISSING" means no card teaches it.

| Exercise set | Concept the items require | Where taught | Status |
|---|---|---|---|
| species | Three species by what the hearer judges; time; end | orient[3] | OK |
| | The chief species of a mixed speech (Cleon and Diodotus; First Catilinarian marked deliberative; Second and Third Catilinarian openings marked epideictic) | orient[3] (Cleon and Diodotus only); taxis[1] calls the First Catilinarian "forensic in its charge and deliberative in its demand" | THIN |
| pisteis | Ethos, pathos, logos; artistic and inartistic proofs | orient[2] | OK |
| | Naming the chief pistis when a passage uses more than one; pathos is the hearer's state, not the speaker's outburst | only in the set's feedback note | THIN |
| enthymeme | The enthymeme as a syllogism with a premise left to the hearers | orient[4], logos[0], logos[3] (the same Catiline example twice) | OK |
| | A method for finding the premise that joins the stated reason to the conclusion, and for rejecting true but irrelevant premises | logos[3] gives one worked example | THIN |
| | Maxims (general statements accepted by the hearers) as the usual unstated premise | none | MISSING |
| stasis | The four issues: fact, definition, quality, transference | logos[4] | OK (dense) |
| | The divisions of quality: absolute, comparison, retort, removal, ignorance, accident, necessity, deprecation (asked from difficulty 3) | logos[4], one clause each, no examples | THIN |
| topics | What a topic is | logos[5], orient[4] | OK |
| | Aristotle's topics named on the card (opposites, relative terms, more and less, time, definition, division, induction, previous judgment, parts, consequences, analogy, cause, meaning of a name) | logos[5], names only | THIN |
| | Aristotle's topics not named on any card (inflections, turning the charge, two opposites, same result, change of choice, possible motive, the incredible, contradiction, cause of a slander, contrary acts, mistakes) | none (option labels carry a gloss) | MISSING |
| | Cicero's 17 topics | logos[5], names only | THIN |
| ethos | Practical wisdom, virtue, goodwill, shown in the speech | ethos[0] | OK |
| | How a speech shows each (the items that ask which phrase shows goodwill); Aristotle's reason for the three (II.1) | ethos[0] gives one example of each | THIN |
| pathos | Definitions of anger, pity, fear, shame, indignation, confidence, love, kindness, hatred, emulation | ethos[1] lists the names only (and says "hate," where the set says "hatred") | MISSING |
| | Telling near passions apart (anger and indignation; pity and love; emulation and confidence) | none | MISSING |
| | Concupiscible and irascible | ethos[1] | OK |
| | Where Aristotle's passions fall on Thomas's division (shown in feedback and, at difficulty 4, in the note) | none | MISSING |
| greg | Gregory's principle that the same word does not cure the same vice in every hearer | ethos[2] | OK |
| | The 33 pairs in the set and what each pair needs; naming the pair from a quotation | ethos[2] gives 4 pairs | THIN |
| taxis | The six offices and their duties | taxis[0], taxis[1] | OK |
| | How an exordium wins attention, teachableness, and goodwill; the subtle approach | taxis[0], duties only | THIN |
| | Narration may be one sentence; narration can carry feeling | taxis[0] | THIN |
| | Ways of refuting (including drawing an absurd consequence, as in t-lys24-archon) | none | MISSING |
| | The parts of the peroration: summing up, indignation, pity (cited in the item notes from De inventione I.52–55) | taxis[0] says only "to recapitulate, and to move" | MISSING |
| | The proof/narration label for the Laeca's-house sentence | taxis[1] conflicts with item t13 | CONFLICT |
| taxisorder | Duties, school order, which office shrinks, Aristotle's four against the Latin six | taxis[0] | OK |
| lexis | Whether the figure is the claim or style serves an argument (14 items) | lexis[0], lexis[2] | OK |
| | Propriety and the natural (Theodorus; actors and pirates; the Telephus; ugly sounds; the riddle; Simonides; diminutives) | lexis[0] states the rule only | MISSING |
| | The four causes of frigid style | none | MISSING |
| | Simile and metaphor; metaphor from proportion; faults of metaphor; why metaphor teaches | lexis[0] quotes the *Poetics* line only | MISSING |
| | Continuous and periodic style; clause length; divided and opposed clauses; like endings; antithesis as like a syllogism | effects[4] covers III.9.2–3 only | THIN |
| | Setting before the eyes (actuality); surprise; conciseness; hyperbole | none | MISSING |
| effects | Known and new; end focus; cohesion; passive; cleft; rhythm and the period | effects[0]–effects[4] | OK |
| figclick | The 10 figures on lexis[1] | lexis[1] | OK |
| | Personification, sententia, asyndeton, hyperbole, simile, climax, praeteritio, litotes (core; gloss shown in the prompt) | none | MISSING |
| figwhich | Same as figclick (gloss shown in the prompt) | lexis[1] | MISSING for the 8 |
| figgorgias | Antithesis, isocolon, homoeoteleuton, and the other core figures in Helen (all within lexis[1]'s ten) | lexis[0], lexis[1], gorgias[2] | OK |
| figaugustine | Core figures, gloss only at difficulty 1–2; apostrophe to God | lexis[1] | MISSING for the 8 (17 of 47 passages) |
| figcicero | Core figures, gloss only at difficulty 1–2 | lexis[1] | MISSING for the 8 (35 of 75 passages) |
| figfurther | 23 optional figures (gloss always shown) | lexis[1] names 4 | THIN (acceptable for an optional set) |
| antiphon | Which side speaks in 3.1, 3.2, 3.3, 3.4 | antiphon[0] gives the order of speeches but not the numbering | THIN |
| | Pistis | orient[2] | OK |
| | The ten topic labels used only in this set ("from character," "from cause," "from refutation of the defense's descriptions," "from the city's pollution if the killer walks," and others) | antiphon[1] names four | THIN |
| debates | Species of each debate | orient[3] | OK |
| | The situation of each debate | orient[3] (Mytilene, Pericles), ethos[0] (Archidamus) | MISSING for 7 of 10 |
| | Telling a voice's claim from its reasons | none | THIN |
| whole | Species and end; pistis | orient[2], orient[3] | OK |
| | A figure actually in the excerpt | lexis[1] | MISSING for the 8 |
| augoffice | Three offices; three styles; mixing; tears at Caesarea | augustine[0], augustine[1] | OK |
| | Truth not unarmed (IV.2); teaching as the necessary office (IV.12) | none | MISSING |
| | Style follows purpose, not the size of the subject (IV.19; Ambrose, IV.21) | none | MISSING |
| | Majestic and temperate distinguished (IV.20.42); subdued for knotty questions (IV.23); effects of each style (IV.24–25) | augustine[0] in outline | THIN |
| | Wisdom before eloquence (IV.28; IV.5) | none | MISSING |

### 2.3 Taught on the cards but used by no exercise

- The counterpart of dialectic and Quintilian's definition (orient[1]). These belong in the opening deck in any case.
- The example (*paradeigma*) as a separate kind of proof (orient[4], logos[1]). The topics set touches it only through induction and analogy.
- Necessary and fallible signs, *tekmerion* (logos[2]). No item asks about signs.
- Thomas's eleven passions taken one by one (hope, despair, desire, aversion, pleasure, pain, daring) and Aristotle's mildness and envy (ethos[1]). The pathos set uses ten passions and only the two classes.
- *Erga* and *logoi*, *doxa* and *aletheia* (antiphon[0]).
- Gorgias's "witchery" passage as doctrine (gorgias[2]) and the *Defense of Palamedes* (gorgias[3]). Palamedes has no passage in the bank.
- The *Confessions* paragraph in augustine[1].

These are not faults in themselves. Signs and the example are part of the lean core of invention and should stay; the plan below ties them to passages and to the Imitation Tablet. The Palamedes card and the *Confessions* paragraph are candidates for cutting (decision 11).

---

## 3. Deck and card plan

### 3.1 Totals

| | Cards |
|---|---|
| KEEP (existing; at most a passage link added) | 7 |
| REVISE (existing; rewritten, retitled, merged, or given a passage tie) | 23 |
| NEW | 41 |
| **Total** | **71** |

Of the 32 existing cards, 30 survive as cards. Two are merged into another card: orient[4] and logos[3] go into II.1 with logos[0], because all three teach the enthymeme with the same Catilinarian example.

There are 13 decks: the 9 existing decks (8 revised, `effects` kept) and 4 new decks (the opening deck, the issue and the topics, the figures, and reading the whole case). The three rooms are reading screens, each opened by one guide card.

**Why 71 and not fewer.** The count sits near the top of the 50–75 range for one reason: the existing exercise sets already require more doctrine than the cards give. The 41 new cards break down as follows. Twenty-three exist only because a set already asks for the doctrine: Aristotle on style for the lexis set (6), the figures for the five figure sets and the whole case (5), the topics and the divisions of quality (4), the passions (3), the offices of the oration (4), and the debates (1, VII.3). The remaining 18 are the opening deck (3), the Augustine gaps (2), the room guides (3), and 10 cards that fill thin prerequisites or join the core together (I.2, I.4, II.2, II.3, III.2, III.8, IV.7, G.4, VII.1, VII.2). If Timothy prefers a leaner course, a 63-card version is possible without losing any exercise prerequisite: merge II.9 with II.10, III.8 with III.7, V.5 with V.4, and VII.2 with VII.3; cut gorgias[3]; and make the three room guides headers on the room screens instead of cards.

Each existing card that carries a question point (`q`) needs its point rewritten after the card is revised, so that options and explanations match the new text.

### 3.2 Opening deck: The Art of Rhetoric (NEW deck)

This deck follows Timothy's rule of 16 Oct for each trivium course: the definition of the art and an ordered overview of the whole art. (Ars Grammatica's NEXT-STEP.md §8 still lists the order-of-the-art overview as not yet approved for grammar; this plan follows the rule as given for Rhetorica.)

| # | Card | Status | Content note | Passages | Prepares for |
|---|---|---|---|---|---|
| O.1 | Why is persuasion an art? | REVISE (orient[0]) | Opens from experience: we all persuade and are persuaded (a parent at bedtime, a salesman, a sermon). Then the three questions of the trivium: whether the utterance is well formed, whether it is true, whether the hearer is moved to see it; keeps the "green cheese" example. | plato-ap-1 | species, pisteis (general) |
| O.2 | What is the definition of rhetoric? | REVISE (orient[1]) | A good advocate sees which arguments this jury, on this day, will hear. Aristotle's definition (I.2), the counterpart of dialectic (I.1), Quintilian's *bene dicendi scientia*. The art can serve truth or falsehood, which is why it matters who learns it. | thuc-diod-1, aug-ddc-2 | pisteis, species, whole |
| O.3 | The five parts of the art, in order | NEW | Preparing a toast: what to say, in what order, in what words, remembering it, saying it. Invention, arrangement, style, memory, delivery (*De inventione* I.7.9), each glossed, and the order of the course: invention (Acts II–III), arrangement (IV), style and figures (V–VI), the whole case (VII). | aug-ddc-2, cic-cat1-1 | whole, taxis |
| O.4 | Memory and delivery | NEW | Brief. A good speech read badly fails. Aristotle on the voice of Theodorus, which seemed natural and so persuaded (III.2.4); Cicero's report of Demosthenes on delivery (NEEDS SOURCE: *De oratore* III.213 in Yonge); memory by places and images (NEEDS SOURCE: a public-domain English of *Ad Herennium* III.16–24). | arist-rhet-3.2.4 | lexis (the Theodorus item) |
| O.5 | How the art is learned | NEW | Children learn to speak by hearing speech, and apprentices learn by watching a master. Cicero: the art came from eloquence (*De oratore* I.146, NEEDS SOURCE); Augustine: eloquence is learned more by reading and imitating the eloquent than by rules (IV.3, NEEDS SOURCE), and Paul's eloquence did not come from the rules (IV.7.11); Cicero on the images of great men left "for our imitation." Says why the course is lean and sends the student to passages, the Imitation Tablet, and the rooms. | cic-arch-14, cic-arch-18, aug-ddc-7-11 | Imitation Tablet, rooms |

### 3.3 Act I. What Rhetoric Is (deck `orient`, REVISED)

| # | Card | Status | Content note | Passages | Prepares for |
|---|---|---|---|---|---|
| I.1 | The three means of persuasion | REVISE (orient[2]) | Why we take a doctor's advice: we trust him, we are afraid, and his reasons are good. Inartistic and artistic proofs; ethos, pathos, logos (I.2). | thuc-arch-1, cic-cat1-4, dem-phil1-23 | pisteis, whole, antiphon |
| I.2 | Which means is the speech chiefly using? | NEW | Most passages use more than one. Three tests: does the sentence work through the speaker's character, the hearer's feeling, or the matter itself? A cry of the speaker's own feeling aims at the hearer's passion; a reputation announced from outside is inartistic. | thuc-per-60, cic-cat1-2, sal-caes-passion, lys-16-1 | pisteis, whole, antiphon |
| I.3 | The three species | REVISE (orient[3]) | A town meeting about a road (the future), a trial (the past), a retirement dinner (present praise). The hearer's office, time, and end (I.3). | thuc-arch-1, lys-1-1, thuc-fun-1 | species, debates, whole |
| I.4 | Mixed speeches and the chief species | NEW | Cleon and Diodotus argue about a past revolt but ask for a future decree; the First Catilinarian charges a man but asks the senate to act; the Third Catilinarian reports and gives thanks; a forensic speech may praise at length. We name the species by what the hearers are asked to decide now. | thuc-cleon-1, thuc-diod-1, cic-cat1-13, cic-cat3-1, cic-arch-16 | species, debates, whole |

orient[4] moves to II.1.

### 3.4 Act II. Invention: Logos

**Deck `logos`, REVISED and retitled "Enthymeme, Example, and Signs."**

| # | Card | Status | Content note | Passages | Prepares for |
|---|---|---|---|---|---|
| II.1 | The enthymeme | REVISE (merges orient[4], logos[0], logos[3]) | "Take an umbrella; the sky is black" works because we supply "black skies bring rain." A syllogism about things that can be otherwise, with a premise the hearers supply (I.2; II.22). The Catilinarian "Lives?" kept once. | cic-cat1-2 | enthymeme |
| II.2 | How to find the missing premise | NEW | Three steps: the conclusion the speaker wants, the reason he states, and the general statement that joins them, which the hearers already hold. Why the tempting wrong answers fail: they are true but do not join, or they restate the conclusion. | thuc-sthen-1, thuc-per-2, plato-ap-2 | enthymeme, debates |
| II.3 | Maxims | NEW | Proverbs such as "haste makes waste" serve as premises in ordinary argument. Aristotle's maxim (II.21) is a general statement about action, often the premise or conclusion of an enthymeme; the same thing heard as a figure is the sententia. | thuc-mel-1, thuc-cleon-1, cic-milo-2, eng-jc-antony-evil-lives | enthymeme, figclick, figcicero, whole |
| II.4 | Example | REVISE (logos[1]) | "The last time we skipped the inspection, the roof leaked." Historical and invented examples (II.20); the example as rhetorical induction. | thuc-herm-examples, thuc-per-2, cic-arch-14 | topics (induction, analogy), enthymeme, pisteis |
| II.5 | Signs and likelihoods | REVISE (logos[2]) | Smoke and fire, against a man seen running from a house. The necessary sign (*tekmerion*), the fallible sign, and the likely (*eikos*); Antiphon's agreed facts. | ant-3.2.4, cic-cat1-1, eng-webster-knapp-there | stasis (fact), antiphon |

**Deck "The Issue and the Topics," NEW (split from `logos`).**

| # | Card | Status | Content note | Passages | Prepares for |
|---|---|---|---|---|---|
| II.6 | Where the case stands: the four issues | REVISE (logos[4], first half) | A child accused of taking a cookie: "I didn't" (fact), "I only borrowed it" (definition), "Mother said I could" (quality), "You can't punish me; you aren't my mother" (transference). *De inventione* I.8; the three-issue count noted in a sentence. | cic-arch-8, ant-3.1.1, lys-1-1, cic-milo-10 | stasis |
| II.7 | The divisions of the issue of quality | NEW | Absolute, comparison, retort, removal, and concession (ignorance, accident, necessity, deprecation), each with a one-line case and the question that tells it apart (*De inventione* II.23–36). | cic-lig-30 (deprecation), cic-milo-10 (the slain man as the plotter; compare retort), ant-3.2.4 (blame laid on the boy; compare removal) | stasis (difficulty 3+) |
| II.8 | What a topic is | REVISE (logos[5]) | A person looking for reasons goes to familiar questions: what is it, what caused it, what follows, compared with what? Cicero (*Topica* 8) and Aristotle (II.26.1); a topic is not an argument but a place to find one; the two lists kept apart. | thuc-per-4, dem-phil3-8 | topics, antiphon |
| II.9 | Aristotle's topics from words, kinds, and comparisons | NEW | Opposites, inflections, relative terms, more and less, time, definition, meaning of a name, division, parts, induction, analogy, previous judgment: one line and Aristotle's own example each (II.23). | thuc-per-4 (more and less), thuc-fun-2 (definition: "this is why it is called a democracy"), thuc-herm-examples (induction) | topics |
| II.10 | Aristotle's topics from acts, motives, and persons | NEW | Turning the charge, consequence, two opposites, same result, change of choice, possible motive, the incredible, contradiction, cause of a slander, cause, contrary acts, mistakes. | dem-phil3-8 (word against deed), thuc-per-143 (consequence), plato-ap-1 (answering the charge of eloquence), ant-3.2.4 (cause) | topics, antiphon |
| II.11 | Cicero's topics | NEW | Topics in the subject (definition, enumeration of parts, notation), topics related to it (conjugates, genus, species, similarity, difference, contraries, adjuncts, antecedents, consequents, contradictories, causes, effects, comparison), and topics from outside (authority). | cic-phil2-113 (definition of peace), cic-man-28 (comparison), cic-arch-8 (authority of a witness) | topics |

### 3.5 Act III. Invention: Ethos and Pathos (deck `ethos`, REVISED)

| # | Card | Status | Content note | Passages | Prepares for |
|---|---|---|---|---|---|
| III.1 | Why we trust a speaker | REVISE (ethos[0]) | Choosing a mechanic: we want one who knows the work, is honest, and wants our good. Practical wisdom, virtue, goodwill; Aristotle's reason (II.1): men give bad advice for lack of one of the three. Pericles names all three in one sentence. | thuc-per-60, thuc-arch-1, plato-ap-1, dem-crown-1 | ethos, pisteis |
| III.2 | How a speech shows character | NEW | Character is shown by choices: declining to flatter, admitting limits, explaining why one speaks unwillingly, the quiet citizen forced into court. Alcibiades shows what boasting does to trust. | lys-16-1, lys-24-1, cic-arch-1, ant-3.2.1, thuc-alc-1 | ethos, taxis (exordium), antiphon |
| III.3 | The passions, and how a speaker reaches them | REVISE (ethos[1]) | The same news angers one man and frightens another. Aristotle's three questions for each passion (the state of mind, toward whom, on what grounds; II.1); his list; Thomas's concupiscible and irascible, and where the course places Aristotle's passions on that division (decision 5). | cic-cat1-1, thuc-plat-compassion | pathos |
| III.4 | Anger, love, hatred, kindness | NEW | Definitions from II.2, II.4, II.7. Anger is toward a person for a slight; hatred can be toward a class; kindness is help given without return. | cic-cat1-1 (anger), thuc-cleon-1 (anger toward the Mytilenians), cic-arch-18 (love), thuc-per-5 (kindness) | pathos |
| III.5 | Fear, confidence, shame | NEW | II.5–6. Fear imagines a destructive evil near at hand; confidence is its contrary; shame is felt before those whose opinion we value. | cic-cat1-4 (fear), thuc-nic-native (confidence), eng-henry-stronger, plato-ap-3 (shame), aug-chast | pathos |
| III.6 | Pity, indignation, emulation | NEW | II.8–11. Pity at undeserved misfortune; indignation at undeserved good fortune, which differs from anger because there is no personal slight; emulation, which moves us to get the goods we see in others like us, and which differs from envy. | thuc-plat-compassion, lys-12-18, cic-milo-105, thuc-fun-41 | pathos |
| III.7 | The same word does not suit every hearer | REVISE (ethos[2]) | A coach must hearten one player and hold back another. Gregory's principle and four pairs as examples; cut the "box of figures" figure. | greg-1, greg-3 | greg |
| III.8 | Gregory's pairs, in order | NEW | The pairs of *Pastoral Care* III (Barmby) grouped by kind (state of life; temperament; virtues and vices; ways of sinning), with the rule for each kind: what heals one wounds the other. | greg-1, greg-4, greg-5, greg-6, greg-7, greg-8 | greg |

### 3.6 Act IV. Arrangement (deck `taxis`, REVISED)

| # | Card | Status | Content note | Passages | Prepares for |
|---|---|---|---|---|---|
| IV.1 | The parts of a speech are offices | REVISE (taxis[0]) | A letter asking a landlord for repairs: greeting, what happened, what is asked, why, the objection answered, the close. Aristotle's four and the Latin six; offices, not a template. | aug-ddc-2, lys-1-1 | taxis, taxisorder |
| IV.2 | The exordium | NEW | Attentive, teachable, well-disposed; goodwill drawn from our own person, the opponents, the hearers, and the case (*De inventione* I.16.22); the direct opening and the subtle approach (*insinuatio*) for a hostile hearer (I.15.20, I.17.23). | cic-milo-1, cic-arch-1, thuc-fun-1, lys-19-fear, eng-jc-antony-bury | taxis, ethos |
| IV.3 | Narration and division | NEW | Narration brief, clear, and plausible (I.20.28); it shrinks when the facts are agreed and can carry feeling. Division states what is agreed and what is disputed, or lists the points to be proved (I.22.31). | cic-cat1-4, lys-12-18, gor-hel-6, thuc-nic-sicily | taxis, taxisorder |
| IV.4 | Proof and refutation | NEW | Proof draws on the topics. Refutation denies a premise, denies that the conclusion follows, draws an absurd consequence, or sets a like argument against the opponent's (I.42.79). | dem-phil1-23, cic-milo-59, plato-ap-1, eng-henry-stronger | taxis |
| IV.5 | The peroration | NEW | Summing up, stirring indignation, stirring pity (I.52.98). | cic-milo-105, cic-phil2-118, thuc-fun-44, cic-cat4-s24 | taxis |
| IV.6 | One speech, the six offices: the First Catilinarian | REVISE (taxis[1]) | Keep the walk-through, tie each office to a passage, and resolve the Laeca's-house conflict (decision 4). Cut the line about "the next exercises." | cic-cat1-1, cic-cat1-4, cic-cat1-7, cic-cat1-13 | taxis, whole; First Catilinarian room |
| IV.7 | Arrangement fitted to the species | NEW | A deliberative speech seldom needs narration; in epideictic the facts are scattered through the praise (Aristotle III.13–17). The funeral speech's order: ancestors, constitution, the dead, consolation. | thuc-per-4, thuc-per-2, thuc-fun-42, thuc-fun-44, plato-menex-237b | taxis, taxisorder, whole; Pericles room |

### 3.7 Act V. Style

**Deck `lexis`, REVISED and retitled "Virtue of Style."** lexis[1] moves to Act VI.

| # | Card | Status | Content note | Passages | Prepares for |
|---|---|---|---|---|---|
| V.1 | Clear and fitting speech | REVISE (lexis[0]) | A speaker who uses grand words for a small matter sounds false. Clarity; neither mean nor above the dignity of the subject (III.2); what seems natural persuades (Theodorus). The Gorgias paragraph moves to V.7. | arist-rhet-3.2.4, arist-rhet-3.2.10b, eng-lincoln-war-came | lexis |
| V.2 | Choosing the name | NEW | The nobler or the meaner name for the same thing (actors as "artists," pirates as "purveyors"), the diminutive, Simonides' mules, ugly sounds, and the riddle that rests on kinship (III.2.10–15). | arist-rhet-3.2.10a, arist-rhet-3.2.11, arist-rhet-3.2.12, arist-rhet-3.2.14, arist-rhet-3.2.15 | lexis |
| V.3 | Frigid style | NEW | Four causes: compound words, strange words, epithets that are long, untimely, or crowded, and inappropriate metaphors (III.3). | arist-rhet-3.3.1, arist-rhet-3.3.3a, arist-rhet-3.3.3c, arist-rhet-3.3.3d, arist-rhet-3.3.3e, arist-rhet-3.3.4a, arist-rhet-3.3.4c | lexis |
| V.4 | Metaphor | NEW | "The leg of a table," "a cold reception." Metaphor teaches by likeness (III.10.2); metaphor from proportion (III.4.4, III.10.7); far-fetched, ridiculous, and overgrand metaphors (III.2.12, III.3.4); the *Poetics* line kept here. | arist-rhet-3.10.2, arist-rhet-3.10.7a, arist-rhet-3.10.7b, arist-rhet-3.4.4, cic-cat1-13 | lexis, figure sets (metaphor) |
| V.5 | Simile and metaphor | NEW | A simile is a metaphor with a word added; it is longer and less pleasant, and prose uses it sparingly (III.4.1–2, III.10.3). | arist-rhet-3.4.1, arist-rhet-3.4.2, arist-rhet-3.4.3a, arist-rhet-3.4.3c, arist-rhet-3.10.3, cic-cat1-13 | lexis, figure sets (simile) |
| V.6 | Setting things before the eyes | NEW | Words that signify actuality (III.11.2–3), surprise (III.11.6), conciseness and antithesis (III.11.9), hyperbole and its youthful vehemence (III.11.15). | arist-rhet-3.11.2, arist-rhet-3.11.3, arist-rhet-3.11.5, arist-rhet-3.11.6, arist-rhet-3.11.9, arist-rhet-3.11.15, arist-rhet-3.11.15b, cic-phil2-112 | lexis, figure sets (hyperbole) |
| V.7 | When style takes the place of argument | REVISE (lexis[2], with the Gorgias paragraph of lexis[0]) | Keep Gorgias against Diodotus; add Pericles' antithesis as a case where the claim survives in plain clauses; cut the course talk about "the exercise in this division." | gor-hel-8, thuc-diod-1, thuc-per-2, ant-3.1.1 | lexis (the 14 style items), figgorgias |
| V.8 | The periodic style | NEW | Continuous and periodic style (III.9.2–3); the period ends with the sense (III.9.4); clauses too short or too long (III.9.6); divided and opposed periods (III.9.7); antithesis is like a syllogism (III.9.8); like endings (III.9.9). Recalls effects[4] in one sentence. | arist-rhet-3.9.2, arist-rhet-3.9.3, arist-rhet-3.9.4, arist-rhet-3.9.6a, arist-rhet-3.9.6b, arist-rhet-3.9.7a, arist-rhet-3.9.7b, arist-rhet-3.9.8, arist-rhet-3.9.9, cic-arch-1 | lexis, effects |

**Deck `effects`, EXISTING ("Choosing among Correct Sentences").** The five cards are clear and match the set. They use the course's own English examples, which is right for this subject. A one-line link to a passage may be added where the bank has a clear instance.

| # | Card | Status | Content note | Passages | Prepares for |
|---|---|---|---|---|---|
| E.1 | Several correct sentences (known and new) | KEEP (effects[0]) | As it stands. | thuc-per-1 | effects |
| E.2 | End focus | KEEP (effects[1]) | As it stands. | cic-arch-8, eng-jc-brutus-rome | effects |
| E.3 | Cohesion and the passive | KEEP (effects[2]) | As it stands. | no clear instance in the bank; the card's own examples suffice | effects |
| E.4 | The cleft sentence | KEEP (effects[3]) | As it stands. | no clear instance in the bank | effects |
| E.5 | Rhythm and the period | KEEP (effects[4]) | As it stands. | cic-arch-1, eng-johnson-chesterfield | effects, lexis |

### 3.8 Act VI. Figures (NEW deck "The Figures")

| # | Card | Status | Content note | Passages | Prepares for |
|---|---|---|---|---|---|
| VI.1 | What a figure is, and which figures the course asks about | REVISE (lexis[1]) | We notice "Not that I loved Caesar less, but that I loved Rome more" because it departs from the plain way of saying it. Figure and trope (Quintilian IX.1); the 18 core figures named in their groups; the optional tier. Correct the sentence that the main sets ask only about ten. | eng-jc-brutus-rome, eng-lincoln-gettysburg-hallow | all figure sets, whole |
| VI.2 | Figures of repetition | NEW | Anaphora (core); epistrophe, symploce, epizeuxis, anadiplosis, conduplicatio, polyptoton, epanalepsis, epimone (optional). | cic-cat1-1, cic-cat1-5, cic-milo-59, cic-cat1-2, eng-webster-knapp-there | figclick, figwhich, figcicero, figfurther |
| VI.3 | Figures of balance and rising order | NEW | Antithesis, isocolon, tricolon, climax, chiasmus, homoeoteleuton (core); anastrophe (optional). | thuc-per-3, gor-hel-1, cic-arch-16, eng-lincoln-gettysburg-hallow, cic-man-35, gor-hel-7 | all figure sets, figgorgias |
| VI.4 | Figures of omission and addition | NEW | Asyndeton (core); polysyndeton, ellipsis, aposiopesis, parenthesis, hendiadys (optional). | cic-lig-30, dem-3, eng-lincoln-war-came, cic-marc-7, cic-milo-105 | all figure sets, figfurther |
| VI.5 | Tropes | NEW | Metaphor and simile recalled from V.4–5; personification, hyperbole, litotes, irony (core); prosopopoeia, epithet (optional). | cic-arch-19, cic-cat1-7, cic-marc-8, eng-burke-inconsiderable, cic-cat1-2, plato-ap-1 | all figure sets, whole |
| VI.6 | Figures of thought | NEW | Rhetorical question, apostrophe, praeteritio, sententia (core); hypophora, exclamatio, occupatio, correctio, hypotyposis, enumeratio, dilemma (optional). | cic-cat1-1, eng-henry-liberty-death, cic-cat1-6, eng-jc-antony-bury, thuc-mel-1, cic-lig-9, eng-henry-stronger, cic-cat2-1, plato-ap-4 | all figure sets, figfurther |

### 3.9 Act VII. The Whole Case

**Deck "Reading the Whole Case," NEW.**

| # | Card | Status | Content note | Passages | Prepares for |
|---|---|---|---|---|---|
| VII.1 | Taking a case in order | NEW | The situation and the hearers; species and end; the issue; the chief pistis; the arrangement; a figure that serves. Worked once on the opening of the First Catilinarian and once on Pericles. | cic-cat1-1, thuc-fun-1, lys-1-1 | whole |
| VII.2 | Paired speeches | NEW | Greek historians set two speeches on one question side by side. Reading a voice: the claim, the reasons, the passion; Caesar's warning against passion beside Cato's answer. | thuc-cleon-1, thuc-diod-1, sal-caes-passion, sal-cato-feelings | debates |
| VII.3 | The ten debates in brief | NEW | One line of situation each: the Spartan war vote (432 BC); Corcyra and Corinth at Athens (433); Mytilene (427); Plataea before the Spartan judges (427); the Sicilian expedition (415); Camarina (415/414); Catiline to his followers and Caesar on the penalty, and Caesar and Cato on the prisoners (63 BC); Pericles' funeral speech; Antiphon's two sides. | thuc-arch-1, thuc-sthen-1, thuc-corc, thuc-cor-neutral, thuc-plat-compassion, thuc-theb-vindicate, thuc-nic-sicily, thuc-alc-1, thuc-herm-camarina, thuc-euph-fear, sal-cat-consp, sal-caes-1, sal-cato-feelings | debates |

**Deck `gorgias`, REVISED.**

| # | Card | Status | Content note | Passages | Prepares for |
|---|---|---|---|---|---|
| G.1 | A showpiece, not a law-court speech | KEEP (gorgias[0]) | As it stands. | gor-hel-8 | pisteis, species |
| G.2 | Four causes | KEEP (gorgias[1]) | As it stands. | gor-hel-6, gor-hel-20 | taxis (division), lexis |
| G.3 | Witchery | REVISE (gorgias[2]) | Keep the Aristotle comparison; cut the sentence about "a figures set in this course." | gor-hel-10 | lexis, figgorgias |
| G.4 | Gorgias's figures | NEW | Opposed clauses, equal members, like endings, and the crossed order, in Van Hook's English, and why this English is built to be heard as figure. | gor-hel-1, gor-hel-7, gor-hel-8 | figgorgias |
| G.5 | Helen is not his only case | REVISE (gorgias[3]) | Shorten to one paragraph or cut (decision 11). It has no passage in the bank and carries course talk ("the figures set that follows this tutorial"). | none (NEEDS SOURCE if a Palamedes passage is wanted) | none |

**Deck `antiphon`, REVISED.**

| # | Card | Status | Content note | Passages | Prepares for |
|---|---|---|---|---|---|
| A.1 | The case | REVISE (antiphon[0]) | Add which numbers are which speeches: 3.1 and 3.3 the prosecution, 3.2 and 3.4 the defense. | ant-3.1.1, ant-3.2.1, ant-3.3.1, ant-3.4.1 | antiphon, debates |
| A.2 | How to read it | REVISE (antiphon[1]) | Explain each of the ten topic labels the set uses, and give the Aristotelian name where one exists (decision 6). | ant-3.2.4, ant-3.2.6, ant-3.2.10, ant-3.3.4, ant-3.3.5, ant-3.4.8 | antiphon |

**Deck `augustine`, REVISED.**

| # | Card | Status | Content note | Passages | Prepares for |
|---|---|---|---|---|---|
| Au.1 | Three offices, kept | REVISE (augustine[0]) | Add truth not standing unarmed against falsehood (IV.2) and "to teach is a necessity, to delight is a beauty, to persuade is a triumph" (IV.12). | aug-ddc-2, aug-ddc-12, aug-ddc-17 | augoffice |
| Au.2 | The style follows the purpose | NEW | A great subject is taught quietly, praised temperately, and urged with power (IV.19); Ambrose's three examples (IV.21); the majestic style is marked by feeling, not ornament (IV.20.42). | aug-ddc-19-38, aug-ddc-21-46, aug-ddc-21-48, aug-ddc-21-50, aug-ddc-20-42-style, aug-ddc-20-43, aug-ddc-20-40-night | augoffice |
| Au.3 | Tears, not applause | REVISE (augustine[1]) | Keep Caesarea; add what change each style makes in the hearer (IV.24–25); cut the *Confessions* paragraph. | aug-ddc-24, aug-ddc-24-54, aug-ddc-25-55 | augoffice |
| Au.4 | Mixing the styles; wisdom before eloquence | NEW | One style kept up too long tires the hearer (IV.22); knotty questions need the subdued style (IV.23); wisdom is the guide and eloquence the attendant (IV.5, IV.7.12, IV.28). | aug-ddc-22-51, aug-ddc-23-52, aug-ddc-5-7, aug-ddc-5-8, aug-ddc-7-12, aug-ddc-28-61 | augoffice, figaugustine |

**Room guides, NEW (one card at the head of each room; see section 5).**

| # | Card | Status | Content note | Passages | Prepares for |
|---|---|---|---|---|---|
| R.1 | Pericles' Funeral Oration | NEW | The Athenian law of the public funeral; the speaker; the order of the speech; what to watch for (praise of the city as proof of the men; the turn to consolation). | thuc-fun-1, thuc-per-4, thuc-per-2, thuc-fun-41, thuc-fun-42, thuc-fun-44 | whole, taxis, species, Imitation Tablet |
| R.2 | The First Catilinarian | NEW | The senate in November 63 BC, Catiline present; why the speech is forensic in its charge but deliberative in what it asks; the offices as they appear. | cic-cat1-1, cic-cat1-2, cic-cat1-4, cic-cat1-6, cic-cat1-7, cic-cat1-13 | whole, taxis, pathos, figcicero, Imitation Tablet |
| R.3 | For Archias | NEW | A short case on the issue of fact (was Archias a citizen?), settled quickly, followed by a long praise of letters that makes the jury want to keep him. | cic-arch-1, cic-arch-8, cic-arch-16, cic-arch-19, cic-arch-29 | stasis, taxis, ethos, whole, Imitation Tablet |

### 3.10 Disposition of the 32 existing cards

| Existing card | Disposition |
|---|---|
| orient[0] The third art | REVISE → O.1 |
| orient[1] The definition | REVISE → O.2 |
| orient[2] Three pisteis | REVISE → I.1 |
| orient[3] Three species | REVISE → I.3 |
| orient[4] Two bodies of proof | merged into II.1 |
| logos[0] The enthymeme | REVISE → II.1 |
| logos[1] Example | REVISE → II.4 |
| logos[2] Signs and likelihoods | REVISE → II.5 |
| logos[3] How to hear an enthymeme | merged into II.1 (its worked example) |
| logos[4] The issue | REVISE → II.6 (the divisions of quality go to II.7) |
| logos[5] The topics | REVISE → II.8 |
| ethos[0] Ethos in the speech | REVISE → III.1 |
| ethos[1] Pathos | REVISE → III.3 |
| ethos[2] Gregory's pairs | REVISE → III.7 |
| taxis[0] Cicero's six; Aristotle's four | REVISE → IV.1 |
| taxis[1] One speech, the six offices | REVISE → IV.6 |
| lexis[0] Virtue of style | REVISE → V.1 (Gorgias paragraph to V.7) |
| lexis[1] Figures the ear can name | REVISE → VI.1 |
| lexis[2] When style takes the place of argument | REVISE → V.7 |
| effects[0]–effects[4] | KEEP → E.1–E.5 |
| gorgias[0], gorgias[1] | KEEP → G.1, G.2 |
| gorgias[2] Witchery | REVISE → G.3 |
| gorgias[3] Palamedes | REVISE → G.5 (or cut) |
| antiphon[0], antiphon[1] | REVISE → A.1, A.2 |
| augustine[0], augustine[1] | REVISE → Au.1, Au.3 |

---

## 4. Imitation Tablet: specification

**Purpose.** The tablet is for practice in the ancient way, not for testing. The student reads a real passage, says in plain words what it says and does, and then writes the same move on a new subject. The student then compares the work with a model and with a checklist of what the original does. Nothing is graded automatically, for the reason Ars Grammatica gives for its Recitation Tablet: a keyword checker cannot tell a move made well from one made badly, and a wrong mark is worse than no mark.

**Where it opens.**

1. A button labeled "Imitation Tablet" on the homepage, placed and styled like the Recitation Tablet button in Ars Grammatica (top left, the full label, scaled to the screen).
2. A link under any card that is tied to a passage with an imitation item ("Imitate this passage"), which opens the tablet on that item.
3. A link at the end of each whole-speech room, which opens the items drawn from that speech.

The dropdown lists items by passage and move (for example, "Pericles 2.44: consolation, not condolence"). An item opens once the deck that teaches its move has been completed; until then it is grayed out with the note "Complete the deck first."

**Steps.**

1. **Read.** The passage, with its cue line and source, and the original-text button where Latin or Greek is on file.
2. **Paraphrase.** In a writing space, the student states in plain words what the passage says and what it does (for example, "He opens by saying that deeds should be honored by deeds, so that his speech will seem less than the men"). Some items may skip this step.
3. **Imitate.** In a second writing space, the student writes the same move on a new subject. The item offers two or three subjects, and the student may choose his own.
4. **Compose (optional).** On items marked for it, the student may extend the imitation into a short speech of his own that uses the move in its proper office.
5. **Compare.** "See the model" opens the model imitation and the checklist beside the student's text (above it on narrow screens). Each checklist point has a box for the student to check.

**Safeguards**, as on the Recitation Tablet: pasting into the writing spaces is disabled; "See the model" stays inactive until the imitation reaches a minimum (set per item, never fewer than about 40 distinct words of three or more letters, and no word count is shown); once the model is shown, the text is locked for that attempt, and "Start a new imitation" clears it. The last text for each item is kept in the browser under the course's progress key (for example, `store.imitations[itemId]`). A print view, setting the student's text beside the model and the checked boxes, can come later.

**Data fields for each item.**

| Field | Meaning |
|---|---|
| `id` | Item id, for example `im-pericles-consolation` |
| `pid` | Passage id in `window.PASSAGES` (never an id from quiz-corpus.js, which students do not see) |
| `deck` | The deck that teaches the move; it unlocks the item |
| `move` | Short name of the move, in the course's settled terms |
| `paraphraseTask` | The paraphrase prompt, or empty if the step is skipped |
| `task` | The imitation prompt |
| `subjects` | Two or three suggested new subjects |
| `model` | A model imitation on one of the suggested subjects, written for the course and labeled as the course's own (`appown`); see decision 9 |
| `paraphraseModel` | Optional model paraphrase |
| `checklist` | Three to five statements of what the original does, each one checkable in the student's text |
| `minWords` | Minimum length before the model can be shown |
| `compose` | Optional prompt for step 4 |

**Starter items.** Models are to be written and approved before release; the list below gives the passage, the move, the task, and the checklist.

| # | Passage | Move to imitate | Task (subject suggestions) | Checklist: what the original does |
|---|---|---|---|---|
| 1 | cic-cat1-1 | Opening that names the offender in the room with a volley of rising questions | Open a rebuke to someone present who has abused others' patience (a neighbor's noise; a committee member who blocks every vote) | Names the person at once; three or more questions with the same opening words; each question is a charge, not a request; the last questions say that the plot is known |
| 2 | thuc-fun-1 | Exordium that doubts whether words can match deeds | Open a speech honoring a teacher, a firefighter, or a founder | Notes the custom of the occasion; says that deeds would be best honored by deeds; admits the risk that one speaker may fall short; wins goodwill by modesty, not boasting |
| 3 | thuc-per-2 | Praise of a community by contrast with others | Praise a school, a town, or a monastery | States what the community does not do and what it does instead; names its way of life plainly; gives a reason for the name it bears; keeps each contrast balanced |
| 4 | thuc-per-4 | Praise rising by more and less, from ancestors to fathers to the living | Praise three generations of a family farm, a parish, or a team | Moves through three ranks in order; uses "if these deserve praise, much more do those"; ends on the present hearers |
| 5 | thuc-fun-44 | Consolation that reframes grief | Console the family of someone who died serving others | Distinguishes comfort from condolence; admits the many chances of life; calls the death fortunate because it was honorable; speaks directly to the mourners |
| 6 | thuc-per-60 | Self-defense by naming the three causes of trust and showing why each is needed | A treasurer answers members who are angry at him | Names knowledge, the power to explain it, love of the community, and honesty; shows what each would lack without the others; answers anger without flattery |
| 7 | cic-arch-16 | Praise of a pursuit by its uses at every age and place | Praise music, reading, or gardening | Grants the case even without profit; lists uses in balanced pairs (youth and age, prosperity and adversity, home and abroad); ends with companionship at all times |
| 8 | cic-arch-8 | Presenting a witness by rising corrections ("not that he thinks it, but that he knows it") | Present a witness to an event in a club or school dispute | Says the cause is over on the point of law; asks the opponent what he can deny; names the witness's character; rises in three steps from opinion to knowledge to his own act |
| 9 | cic-arch-1 | Periodic exordium of obligation ("If there is any... if... if..., this man is entitled") | Open a speech defending a mentor or a former coach | Holds the main clause until the end; three conditional clauses, each with a modest aside; ends by naming the client's claim on the speaker |
| 10 | lys-1-1 | Asking the hearers to judge as if the wrong had been done to them | Open a complaint to a school board or a homeowners' meeting | Appeals to the hearers' own feelings about such a wrong; says they would all be indignant; suggests the penalty is too mild, without yet telling the facts |
| 11 | cic-milo-59 | Refuting a piece of evidence by questions answered in one word | Refute a report produced by an interested party | Puts each fact as a short question; answers each in a word or a name; repeats the same name at the ends of answers; closes with an exclamation on the bias shown |
| 12 | cic-cat1-13 | A simile from medicine developed into an argument | Argue against a policy that treats a symptom and leaves the cause | States the likeness in full (relief at first, then worse); applies it point by point to the case; draws the practical conclusion; turns at once to what must be done |
| 13 | thuc-diod-1 | The dilemma: the opponent is "either senseless or interested" | Answer someone who says a question should not be debated again | Grants what can be granted; names the two faults that oppose good counsel; divides the opponent's motives into two, both discreditable; gives the reason for each |
| 14 | dem-phil3-8 | Word set against deed (the topic of contradiction) | Answer a party that calls itself a friend while acting as an enemy | Names the fair word the other side uses; sets its acts against the word; ends with a question that admits only one answer |
| 15 | eng-johnson-chesterfield | A late offer declined with a rising triplet | Decline help that came too late | Grants that the help would once have been kind; three clauses beginning "till I am..."; each pairs a present state with what it now prevents; restrained irony, no open insult |

---

## 5. Whole-speech rooms

A room presents one complete speech in sections, with its guide card at the head (R.1–R.3). The student reads it straight through first. A second reading can show the marks the bank already has (the figure spans), the offices of the oration, and the chief pistis of each section, and it ends with links to the imitation items drawn from that speech. The full texts are **not** in the repository: passages.js holds excerpts only, so each full text must be copied from the public-domain source that CITATIONS.md already names, checked, and stored with the same care as the passages.

| Candidate | Public-domain translation | In the repository now | Full text source | Recommendation |
|---|---|---|---|---|
| Pericles' Funeral Oration (Thucydides 2.35–46) | Richard Crawley (1874) | 10 excerpts: thuc-fun-1, thuc-per-1, thuc-per-4, thuc-fun-2, thuc-per-2, thuc-per-3, thuc-per-5, thuc-fun-41, thuc-fun-42, thuc-fun-44 (thuc-fun-2 and thuc-per-2 share 2.37; thuc-per-1 and thuc-per-4 share 2.36) | Project Gutenberg #7142, already cited in CITATIONS.md | Room 1 |
| Cicero, First Catilinarian | H. E. D. Blakiston (1894), the bank's Catilinarian English | 9 excerpts: cic-cat1-1, cic-cat1-2, cic-cat1-4, cic-cat1-5, cic-cat1-6, cic-cat1-7, cic-cat1-8, cic-cat1-9, cic-cat1-13 | attalus.org/cicero/catilina1.html, already cited (page confirmed reachable 18 Oct 2026) | Room 2 |
| Cicero, For Archias | C. D. Yonge (1856) | 9 excerpts: cic-arch-1, cic-arch-8, cic-arch-14, cic-arch-16, cic-arch-18, cic-arch-19, cic-arch-21, cic-arch-25, cic-arch-29; also Archias 4 and 9 quoted inside exercise items | Perseus text 1999.02.0019, already cited | Room 3 |
| Lincoln, Gettysburg Address (1863) | English original; public domain | 1 sentence: eng-lincoln-gettysburg-hallow (quoted via Farnsworth) | Project Gutenberg #14721 (Everyman edition, already the course's `lincoln_ev` source; the address is in that file) | Alternate; a short epideictic counterpart to Pericles |
| Lysias 1, On the Murder of Eratosthenes | W. R. M. Lamb (1930), public domain in the United States only (Lamb died in 1961) | 1 excerpt: lys-1-1; sections 1.4, 1.6, 1.37 quoted inside taxis items | Perseus text of the Loeb, already the course's Lysias source | Alternate; the clearest forensic speech for the six offices |

Two other candidates should wait. Gorgias's *Helen* (Van Hook 1913, public domain; 6 excerpts in the bank) already has its own deck, so a room would add little. Antiphon's Second Tetralogy is nearly complete in the bank (10 excerpts across all four speeches), but CITATIONS.md describes its English only as "the classroom translation of the javelin case supplied for this course." Its translator and copyright status need to be established before it is shown as a whole text: NEEDS SOURCE.

---

## 6. Decisions for Timothy

1. **Size.** Approve the 71-card plan, or the 63-card lean version described in section 3.1. Either way every exercise set has its prerequisites taught. Recommendation: 71, since the extra eight cards make the topics, Gregory, simile, and debates easier to study.
2. **The lexis set.** 47 of its 61 items test Aristotle's doctrine of style in *Rhetoric* III, which no card teaches. The options are (a) add the six cards V.2–V.6 and V.8, (b) move those 47 items into a separate set named something like "Aristotle on Style," with its own instruction, or (c) cut them. Recommendation: (a) and (b) together, because the present instruction describes only the other 14 items.
3. **Figures.** Eight core figures are untaught, and lexis[1] says the main sets ask only about its ten. Either add the Figures deck (VI.1–VI.6), or move the eight figures to the optional tier in `CORE_FIGURES`. Recommendation: add the deck; personification, sententia, and asyndeton are too common in the bank to leave optional.
4. **The Laeca's-house sentence.** taxis[1] calls "You were then, Catilina, at Laeca's house that night" the proof; taxis item t13 marks it narration. Which should both say? Recommendation: narration in the item, and in the card name the narration and the proof as the same night told and then pressed as evidence.
5. **The passions on Thomas's map.** The pathos set treats pity, shame, and kindness as concupiscible and indignation, emulation, and confidence as irascible. Thomas's eleven do not name pity, shame, indignation, or emulation. Should the card present this as the course's own placement, citing the reasons, or should the set drop the appetite labels? Also settle "hate" (card) against "hatred" (set), and "confidence" (set) against Thomas's "daring."
6. **Antiphon.** Name the translator and status of the "classroom translation" before any further quotation or a room. And decide whether the ten topic labels in the Antiphon set stay as they are or are brought into line with Aristotle's names in II.23 (cause, consequence, turning the charge, and so on), which the topics set already uses.
7. **Augustine's terms.** The card says "grand," the items and Shaw say "majestic," and the master plan says "movere" where the card says "flectere" and Shaw says "persuade." Choose one set of terms for cards and items.
8. **Rooms.** Approve Pericles, the First Catilinarian, and For Archias, and choose whether a fourth is the Gettysburg Address or Lysias 1. The full texts must be added from the cited public-domain sources.
9. **Imitation models.** Who writes the model imitations: Timothy, or drafts for his approval? They are clearly labeled as the course's own and are on modern subjects, so they do not break the master plan's rule against inventing classical prose, but that should be confirmed.
10. **Sources to add.** Add *On Christian Doctrine* IV.3 (Shaw) and *De oratore* I.146 (Yonge) to the passage bank for O.5, and approve a public-domain English for memory and delivery (O.4), or keep O.4 to Aristotle alone.
11. **Palamedes and the *Confessions* paragraph.** Cut gorgias[3] (no passage, no exercise) or keep it as a short paragraph; cut the *Confessions* paragraph from augustine[1].

---

## REVISION-LOG

### Section 3 card pass (19 Oct 2026, Claude; awaiting Timothy's reading)

Decisions applied as settled in the prompt: 1 (the 71-card plan), 2 (a and b), 3, 4, 5, 6, 7, and 11. Decisions 8, 9, and 10 were left for Timothy, so the room guides R.1–R.3 and the Imitation Tablet were not built, and no source was added to the passage bank. The result is 67 cards in 13 decks (71, less the three room guides and gorgias[3]).

- **Engine (index.html).** One sources line per deck, on its first card (deck `sources`); panel `src` notes kept in the data but not shown. Card question options shuffled on each visit. A group with no Division number shows as "Preliminaries."
- **Card examples kept out of the sets.** Panels carry `taught` keys (for example `species:lys-3-3`, `fig:cic-cat4-1:anaphora`, `greg:the young and the old`), and the species, pisteis, enthymeme, issue, ethos, taxis, Gregory, lexis, and figure sets skip a card's own example in the respect in which the card gives it. Panels also carry `pids`, the passages each card uses (not shown; for the later Imitation Tablet links).
- **The Art of Rhetoric** (new, `art`; O.1–O.5). Why persuasion is an art; the definition; the five parts (De inventione I.7.9); memory and delivery (Aristotle III.1, Cicero's definitions only); how the art is learned (De oratore I.146 by reference and in Latin; On Christian Doctrine IV.3.4–5 in Shaw; For Archias 14).
- **What Rhetoric Is** (`orient`; I.1–I.4). orient[4] merged into II.1.
- **Enthymeme, Example, and Signs** (`logos`; II.1–II.5). logos[0] and logos[3] merged into II.1; the Catilinarian "Lives?" kept once (enthymeme item e1 skipped by the set).
- **The Issue and the Topics** (new, `issue`; II.6–II.11). The examples for Aristotle's 24 topics and Cicero's 17 are the course's own, because the topics set uses the authors' examples.
- **The Speaker and the Hearers** (`ethos`; III.1–III.8). Decision 5 applied: the concupiscible/irascible placement is presented as the course's own, with reasons; "hatred"; "confidence," noting Thomas's "daring" (audacia).
- **Arrangement** (`taxis`; IV.1–IV.7). Decision 4: the Laeca's-house sentences are narration, and the card names the same night told and then pressed as proof; item t13 kept as narration, with a note.
- **Virtue of Style** (`lexis`; V.1–V.8). The 47 items on Aristotle, Rhetoric III, moved to a new set, "Aristotle on Style" (`aristlexis`); the instruction of "Style and the argument" now describes its 14 items. The Poetics line now quotes Butcher as printed ("to have a command of metaphor").
- **Choosing among Correct Sentences** (`effects`; E.1–E.5). Kept; sources line only.
- **The Figures** (new, `figures`; VI.1–VI.6). All 18 core figures and the 23 optional ones; lexis[1]'s claim that the main sets ask only about ten figures is gone.
- **Reading the Whole Case** (new, `whole`; VII.1–VII.3).
- **Gorgias** (G.1–G.4). gorgias[3] (Palamedes) cut; course talk cut from G.3; G.4 new.
- **Antiphon** (A.1–A.2). Speech numbering; the ten topic labels kept and explained, with Aristotle's names where his list has one. The classroom translation is flagged in CITATIONS.md, and the cards quote none of it (II.5 paraphrases 3.2.4).
- **Augustine** (Au.1–Au.4). Decision 7: "grand" in cards, items, and passage cues; the offices as docere, delectare, flectere, "to teach, to delight, to move"; Shaw's "majestic" and "to persuade" kept inside quotations. The Confessions paragraph cut.
- Every quotation on the cards was checked against the cited public-domain text (Rhys Roberts at classics.mit.edu; Freese and the Perseus TEI; Butcher, Gutenberg 1974; Yonge, Gutenberg 11080; Shaw and Barmby at CCEL; Butler at LacusCurtius; the English Dominican Summa at New Advent; Crawley, Gutenberg 7142) or against passages.js.
- **Timothy's answers to the card pass (19 Oct 2026).** t13 skipped in the taxis set, its note kept; shame moved to the irascible passions, following Thomas (I–II q.41 a.4), on the passions card, in the pathos items (six in data.js, one in quiz-corpus.js), and in the pathos feedback; Crassus (*De oratore* I.146) quoted in Watson's Bohn English (1860), with the Latin, and CITATIONS.md corrected (Watson, not Yonge); the memory card given a paraphrase of the places and images of the *Ad Herennium* (III.16–22, from Marx's Latin); the defense in the Second Tetralogy named as the thrower's father (the Greek of 3.2.3 has τὸν υἱόν, "my son"); Helen 8 and the course's groupings left as they stand.

### Exercise pass (19 Oct 2026, Claude; awaiting Timothy's reading)

The 23 sets brought into line with the finished cards; cards, quoted passages, and ids unchanged. Instructions rewritten as statements in the cards' terms (the six offices as exordium, narration, division, proof, refutation, peroration; Cicero's order for "school order"; Aristotle's introduction and epilogue; On Christian Doctrine; concession for Cicero's purgation; no scoring talk, no translator named). Every multiple-choice set measured by simulation (1,500 questions at each of difficulties I, III, V): the correct option is strictly the longest in at most 29% of questions in any set. Ethos labels evened in length; four enthymeme items given rival premises in place of unrelated facts; two nonsense options in the six-offices set removed; one off-target option (lx60) replaced. The debates set now states each voice's claim as a decision, as VII.2 teaches. A new `ITEM_SKIP` list (beside `cardTaught`) keeps out ten items whose answer a card gives in the same respect: e13, eng-e3, the pistis of plato-ap-3, et4, et18, lx8, lx10, and the species question for the funeral speech, Plataea, and Antiphon's case.
- **Timothy's answers to the exercise pass (19 Oct 2026).** Rule 15: after ffa6ac4, ten list paragraphs still ran a closing sentence (or, on the species card, the note on Rhys Roberts's names) on after the last item; each now begins its own paragraph. The Augustine and Aristotle-on-style items on quoted passages kept. The card on paired speeches now says that an epideictic voice's claim is what it praises, with Aristotle's account of praise (Rhetoric I.9); the two Pericles voices kept as stated. The three debate species questions stay skipped. Gregory: the card of his pairs works one or two pairs in each group with both admonitions (the young and the old, servants and masters; the impudent and the bashful, the obstinate and the fickle; the gluttonous and the abstinent, the merciful and the envious; those who do not begin and those who do not finish a good work, those overcome by a sudden passion and those who sin on purpose); those pairs are skipped in the set, and three items that need more than the group's rule (g5, gq-weep, gq-hide) are dropped. The set now draws on 31 items (22 on what a pair needs, 9 naming the pair from a quotation), down from 50.
- **Audio reader, as in Ars Grammatica b503e85 (19 Oct 2026).** A deck's title and subtitle are read only on its first card; every later card starts with its own title. An exercise question is read only when it quotes a passage (a passage box or the original text, a prompt of several lines or of paragraph length, a quotation set in the prompt, or options that are excerpts); otherwise the reader says, "Exercises are read aloud only when a question quotes a passage." Exercise instructions are no longer read. The exercise strip on deck tiles (Grammatica 0828812) is in place; see the note below for which set sits on which deck.
- **Rooms and sources, decisions 8 and 10 (19 Oct 2026).** Full texts of the four rooms stored in rooms.js (not yet loaded by the page; the room screens are not built): Pericles' Funeral Oration (Crawley, 2.35–46, 12 chapters), the First Catilinarian (Blakiston, 33 sections), For Archias (Yonge, 32 sections), and the Gettysburg Address (Everyman Lincoln). Each is taken from the source named in CITATIONS.md, checked paragraph by paragraph, and contains every bank passage of the same speech word for word. Added to passages.js for O.5: On Christian Doctrine 4.3.4 and 4.3.5 (Shaw) and De oratore 1.146 (Watson, with the Latin), and O.5's passage list updated. CITATIONS.md records each. O.4 and the imitation pairs (decision 9) are reported to Timothy for choice; nothing written for them.
- **O.4 and the imitation pairs (19 Oct 2026).** The card on memory and delivery now quotes De oratore II.351–354 and III.213 (Watson), Quintilian XI.2.20 and XI.3.5 (Butler), and Orator 55 (Yonge), beside the existing Ad Herennium paraphrase and Aristotle; the duplicate wax-tablet clause of the paraphrase gives way to Cicero's sentence, and the placing of the places is cut. imitations.js (not yet loaded) holds four matched pairs: Juvenal III.1–9 and Johnson's London 1–18; Juvenal X.1–6 and The Vanity of Human Wishes 1–12; Horace Satires II.1.1–12 (Smart) and Pope's imitation 1–22; Milton's Areopagitica (its opening and the sentence that points to Isocrates) and Isocrates' Areopagiticus 1–3 (Norlin), Milton first; with Franklin's account of imitating the Spectator as the method, and Pericles and Gettysburg as a parallel only. Erasmus dropped. The Latin of On Christian Doctrine IV.3.4–5 is still missing: augustinus.it returned 503 again.
- **Latin of On Christian Doctrine IV.3.4–5 (19 Oct 2026).** The original-text button for aug-ddc-3-4 and aug-ddc-3-5 now gives the Maurist Latin, cut to match Shaw's English, from augustinus.cc (augustinus.it still down; Timothy approved augustinus.cc for these two). The site's "in genium" (for "ingenium") in 3.4 is kept as printed. CITATIONS.md records the source.
- **Room guides R.1–R.3 (19 Oct 2026).** The three guide cards are written (ROOM_GUIDES in data.js) and shown at the head of their rooms: R.1 Pericles' Funeral Oration (the law of the public funeral, the speaker, the order of the speech, the praise of the city as proof of the men, the turn to consolation), with the Gettysburg Address folded in as the parallel, so the Gettysburg room opens with R.1 and each of the two links to the other room; R.2 the First Catilinarian (the senate in November 63 BC with Catiline present, forensic in its charge and deliberative in what it asks, the offices in the order of the full text); R.3 For Archias (the issue of fact settled quickly, then the long praise of letters that makes the jurors want to keep him). Every quotation is from rooms.js, cited by the room's section numbers (the First Catilinarian by section, 1–33, not by the chapter numbers that some bank loci and IV.6 use). The audio reader reads the guide before the speech. No other card changed.
- **Timothy's answers on the room guides (19 Oct 2026).** R.1 and R.2: the list lines are full sentences; R.2 says that four of the six offices appear plainly in the full text. The Latin of IV.3.4 reads "ingenium" (the Maurist reading) for the site's "in genium." The First Catilinarian is now cited everywhere by the standard sections 1–33, as rooms.js shows, in place of chapter numbers: IV.6 and the taxis item (Laeca's house 1.4 → 1.9), orient[3] (1.13 → 1.32), the figure cards (1.7 → 1.18, 1.8 → 1.20), the passion items (1.4 → 1.9, 1.5 → 1.13), the six-offices item on the order to leave (1.5 → 1.10), the two quiz-corpus items from the country's speech (1.10–11 → 1.18), and the loci of eight bank passages (cic-cat1-2, -4, -5, -6, -7, -8, -9, -13); ids unchanged.
- **Exercise strip (19 Oct 2026).** Each exercise is a button on the right edge of its deck tile, in a set-off shade, instead of a tile of its own. species and pisteis are on orient; enthymeme on logos; stasis and topics on issue; ethos, pathos, and greg on ethos; taxis and taxisorder on taxis; lexis and aristlexis on lexis; effects on effects; debates and the whole-case set on whole; antiphon on antiphon; augoffice on augustine. art and gorgias have none. A deck with more than three sets has one Exercises button, which opens a pane; Figures uses it, and figfurther is marked Optional. Card, set, and passage text are unchanged.
