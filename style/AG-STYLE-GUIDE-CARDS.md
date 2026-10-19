# Style guide for the cards (Ars Grammatica): read this first

This is the consolidated guide for Claude's revision pass over Sections II–XI, and for the question points, exercises, and recitations that follow. It distills REVISION-GUIDE.md (decisions A.1–A.12, patterns D and K, Timothy's answers L and N, and the logs of his edits to the Preliminaries and Section I) and compares Claude's first drafts of the Section I decks with the text Timothy settled (`git diff 0382dab..HEAD -- data/decks/i.*.js`, and the logs of `data/decks/prelim.*.js`). Every before/after pair below is taken from those real edits.

The Preliminary decks (`prelim.*.js`) and Section I (`i.*.js`) are finished. They are the model. Read them in full after this file.

**Order of authority.** (1) Timothy's explicit decisions, newest first (the dated entries at the bottom of REVISION-GUIDE.md); (2) this file; (3) CLAUDE.md and the rest of REVISION-GUIDE.md; (4) STYLE-GUIDE-TIMOTHY.md (his general expository voice). Where this file says that an older instruction is superseded, follow this file.

**What this guide does not change.** Doctrine, citations, quotations, Latin and Greek, ids, and which answer is correct stay as they are, unless a rule below requires a change (for example, moving an authority to the end of a card) or Timothy has decided otherwise. Where a rule seems to require changing doctrine, do not change it; put it in the list for Timothy (rule 30).

---

## RULE 1 (first and most important): realities first, then the principle, then the tradition

**Each card, and the opening of each deck, begins from realities, experiences, and things commonly known: ordinary examples in English and everyday speech. It then states the principle plainly. Only after that does it turn to the tradition and the authorities (Aristotle, Priscian, Quintilian, Donatus, St. Augustine, St. Thomas, the modists, and so on).**

- Opening a card with an authority needs a very specific reason. The one reason Timothy has accepted in Section I is a card whose subject is what an author reports or holds, placed after cards that have already given the realities: "Priscian and the dialecticians" still opens "The ancient grammarian Priscian reports…", because the two cards before it have already set out the realities and the principle. A card is not exempt merely because its doctrine comes from an author.
- **Even where the question itself is traditional**, the deck or card still opens with a sentence or two that connects the matter to something real, and only then brings in the tradition. The worked example is the Cratylus card.
- The authority comes in as confirmation, as the name of the doctrine, or as the classic example, not as the ground of the claim: "Quintilian … makes the same division"; "St. Thomas draws the same distinction"; "St. Thomas, commenting on Aristotle, states the same order"; "The ancients knew this kind of ambiguity well."
- In practice a card has this shape: (a) one or more ordinary examples, in English first and Latin where it shows something; (b) the principle stated in a plain sentence, with the term in **bold** where it is defined; (c) the authority, quoted or referred to, with the citation in the text; (d) where useful, a closing sentence that leads to what remains (rule 9).
- Check: if the first sentence of a card names a person, a book, or "the tradition," move the authority later or write down the specific reason for keeping it there.

### Worked example: the Cratylus card (`data/decks/i.imposition.js`, panel `cratylus`)

Claude's draft opened with the tradition:

> BEFORE: "The question whether names signify by nature or by convention is one of the oldest questions in the study of language. In Plato's dialogue *Cratylus*, Cratylus holds that each thing has a name that belongs to it by nature, while Hermogenes holds that names are fixed only by the agreement and custom of those who use them. …"

Timothy put two paragraphs in front of it. The first begins from the experience of what words do and why that makes the "by nature" view seem right; the second gives what real peoples believed about names; only then does the traditional question come in:

> AFTER: "By words we teach and learn, by words we come to know things we have never seen, by words we state what is true, and we move one another to grief, anger, courage, or love. It can therefore seem that words, powerful and directive as they are in human life, must have their meaning by nature, because they somehow represent the world in itself. It might even seem very strange to say that words signify only by convention. If a word has its meaning only because those who use it have agreed on it, how can it carry truth and move the mind so powerfully?"
>
> "For this reason many peoples have held that words are bound to the things they name more closely than by agreement. In the ancient Near East, to name a thing was often thought to express its very nature … From there it is possible to come to think even that certain words and sounds are powerful in themselves, so that to pronounce them is to heal, curse, or bind, as in magic spells and charms."
>
> "The question whether names signify by nature or by convention is one of the oldest questions in the study of language. In Plato's dialogue *Cratylus* …"

The lesson: a traditional question opens from the realities that make the question pressing. The question is the same, but the student now sees why anyone would ask it. (The card's last paragraph, on languages differing and on imitative words such as "buzz," also gives the ordinary evidence for the answer.) **Pending:** `iv.etymology` / `cratylus` (which at present opens "The oldest extended discussion of etymology is Plato's dialogue *Cratylus*…") is not to be changed in the pass; Timothy will send his own text for it (17 Oct 2026).

### More pairs from Section I and the Preliminaries

**Ambiguity, card 1** (`i.ambiguity` / `what-ambiguity`). Draft: definition, then at once "Quintilian, discussing ambiguity in his *Institutio oratoria*, says that it has countless kinds but only two sources…", and only then the grammarian's question and the examples. Timothy's order: the definition; then "The grammarian's first question about any ambiguous expression is therefore a division: does the double sense lie in a single word, or in the way the words are arranged with one another?" with "He went to the bank" and "The man saw the boy with the telescope"; then "Quintilian … makes the same division"; then a complete list of the causes (rule 8).

**Ambiguity, cards 2–7 and 9.** Each draft card opened "Quintilian describes…", "Quintilian also notes…", "Quintilian observes…". Each now opens from English: "English has many such words. 'Bat' can mean…"; "Sometimes the same letters can be read as one word or as two. 'Nowhere' can be read as 'now here'…"; "'Desert,' stressed on the first syllable, is a dry land…". Quintilian and Aristotle follow in a second paragraph: "Quintilian notes the same kind of ambiguity in Latin."

**The kinds of complete sentence** (`i.functions` / `five-kinds`).
> BEFORE: "St. Thomas, commenting on this passage, sets out the kinds of complete sentence that the tradition recognized. Besides the statement, which he calls the enunciative sentence, there are the sentence that calls (vocative), …"
>
> AFTER: "As we have seen already, a complete sentence does not only make a statement. We can also call someone ('Mary!' or 'O Lord'), ask ('Has the rain stopped?'), command ('Bring the umbrella'), and beg or pray ('Send us rain, O Lord'). Each of these is complete and meaningful, but only the statement ('The rain has stopped') says that something is or is not so." Then the principle of their difference, and last: "St. Thomas, commenting on Aristotle, sets out these kinds of complete sentence as the tradition recognized them: the enunciative sentence, that is, the statement; the vocative, which calls; …"

**Logic, rhetoric, poetry, and grammar** (`i.functions` / `rhetoric-poetry`). The draft opened with Aristotle's division of labor; the revision opens "Grammar considers every kind of sentence, because every kind must be correctly formed", then the other arts, and ends with Aristotle's sentence.

**Every sentence signifies, but not every sentence is a statement** (`i.functions` / `aristotle`). The two paragraphs were swapped: the definition of the statement with "The door is open," "Open the door," and "Give us this day our daily bread" first, then Aristotle's quotation.

**The spoken word as a sign of what is in the mind** (`i.sign` / `aristotle`).
> BEFORE: "Aristotle begins his short work on the statement, *De interpretatione* …, with the account of words that the whole later tradition followed: 'Spoken words are the symbols of mental experience …'"
>
> AFTER: "When we hear the word 'horse,' our mind is led to a horse, but not directly. The sound 'horse' has no natural likeness to a horse, as we have seen, and so it cannot by itself bring the animal to mind. What it brings to mind is what we already understand when we understand what a horse is. That understanding is the concept …" Then writing as one more step; then "The whole later tradition took this account from the opening of Aristotle's short work on the statement …"

**The reason for a name** (`i.imposition` / `reason-for-name`). The draft opened "St. Thomas distinguishes two things in the imposition of a name…" with *lapis*/*laedit pedem*. The revision opens with "daisy" ("day's eye") and "breakfast", states the distinction, ties it back to what was true in the "by nature" view, and ends "St. Thomas draws the same distinction. His example comes from …".

**The kinds of syncategorematic words** (`i.syncategorematic` / `kinds`). The draft opened with William of Sherwood's treatise. The revision opens with the four groups, each with what the word does ("'only Socrates runs' shuts out everyone else"), adds a paragraph on what they have in common, and ends "One of the best known treatises on this from the tradition is the *Syncategoremata* of William of Sherwood…".

**Signification and consignification, card 2.** The draft opened with Aristotle's definition of the verb. The revision opens "The words 'runs,' 'ran,' and 'will run' all signify the same action, running; yet they do not say the same thing," and brings in Aristotle afterward: "Aristotle names this as the mark of the verb."

**Instrumental and formal signs** (`i.sign` / `formal-instrumental`). The draft opened "John of St. Thomas … adds a further division in his treatise on signs." The revision opens "Consider the examples of natural signs we have seen already. When we see smoke and think of fire, we first see the smoke itself…", and names John of St. Thomas only in the last sentence.

**The first card of the whole course** (`prelim.definition` / `arts-of-speech`). The draft gave Quintilian's historical reasons first and the general reasons second; Timothy put the general reasons first ("Grammar, logic, and rhetoric are the arts of speech: …") and then "But there are also historical reasons for beginning this way. Quintilian, …".

### Where the drafts of Sections II–XI need this most

Many cards still open with an authority, for example `ii.letter` (card on the Latin alphabet: "Quintilian, writing in the first century, asks…"), `ii.punctuation` ("Donatus calls the marks of pause…", "Isidore of Seville repeats…"), `v.agreement` / `reason` ("The modists explain why agreement is required. Thomas of Erfurt says…"), and `iv.etymology` / `cratylus`. Go through every card of II–XI and every deck's first card with rule 1 in mind.

## RULE 2: John of St. Thomas, and core doctrine generally: argue the thesis directly

John of St. Thomas (John Poinsot) is a core source of the course's doctrine. Where a card rests on his doctrine (the sign, the concept as a formal sign, instrumental and formal signs, words signifying things through concepts), present and argue the thesis directly in plain textbook statements, drawing on his doctrine **without quoting him**, and bring in the authorities after. Timothy: "the first thing students read on this card [should be] a direct presentation of and argument for the thesis, not an authority" (REVISION-GUIDE M, I.1 card 5). Cards 5, 6, 7, and 9 of `i.sign` show the pattern: argument first (the photographs of the same thing; "man" signifies human nature as abstracted, which exists only in the mind; smoke first seen, the concept not first known), Aristotle, St. Thomas, or John of St. Thomas last.

Two notes. First, **quoting John of St. Thomas's definitions is fine** (Timothy, 17 Oct 2026), as on I.1 card 1, which quotes his definition of the sign, in Deely's translation, after Augustine's. The rule against quoting him concerns the argument for a thesis, not a definition. Second, the same order may suit other cards that open with an authority on a core doctrine, but do not apply it mechanically.

---

## Standing rules

### Spelling, marks, and markup

3. **American spelling:** center, meter, color, license, honor, plow, traveler, judgment, gray. Inside a quotation keep the source's spelling exactly.
4. **Words mentioned as words take double quotation marks, not italics:** the word "thing"; "Noun," "verb," "syllable," and "plural" are words of this kind; "'Horse' is a noun." English example sentences also take double quotation marks. Latin, Greek, and other foreign words keep their italics (that is their Latin markup), whether used or mentioned: Latin *res*, *equus*. Every foreign example is translated.
5. **Keep existing bold, italics, Latin markup, and links.** Timothy cannot type bold or italics in chat. When his text replaces a card, keep the text effects already there (bold terms at their definition, italic Latin and titles, links) unless he says to remove them (REVISION-GUIDE J, standing rule). English first, Latin in italic parentheses: "reading (*lectio*), explaining (*enarratio*), correcting (*emendatio*), and judging (*iudicium*)"; on I.3 card 10, the English of the medieval Latin text first and the Latin second.
6. **No macrons in quotations.** Quote Latin exactly as the cited edition prints it. Macrons may stay in teaching examples where they show quantity (*Ītaliam*, *Carthāgō dēlenda est*) (L.2 and addendum).

### Cross-references

7. **Never write "the previous deck" or "the next deck," and never point to other cards within a deck** ("the following cards," "the next two cards," "the next card," "the last card," "the card before," "this page and the two that follow"). Pointers within a deck are not allowed (Timothy, 17 Oct 2026). Decks may be read in any order. Refer back generally or by part of the course; to announce what a deck will cover, state it without a pointer ("We take each part in turn"; "ambiguity has several causes: first, …"):
   - BEFORE: "In the previous deck we saw that the precepts of grammar are drawn from the usage of the authors…" AFTER: "We have seen that the precepts of grammar are drawn from the usage of the authors…" (P.4 card 1).
   - BEFORE: "How a sound comes to signify in this way is the question of imposition, which belongs to this section as well" AFTER: "…which we consider next in this section of the course" (I.1 card 10).
   - Good: "as we saw in the Preliminary section," "we will see in Section VIII," "as we have seen already," "earlier in this section."
   - BEFORE: "The next two cards take each part in turn." AFTER: "We take each part in turn." (P.3 card 1). BEFORE: "ambiguity has several causes, which the following cards take up in turn: first, …" AFTER: "ambiguity has several causes: first, …" (I.6 card 1).
   - General forward and backward references that name no card are fine: "as we saw earlier," "is the next question," "must be considered next," "which we consider next in this section of the course."

### Sources, quotations, translators

8a. **One sources line per deck.** The deck-level `sources` field, shown on the first card only, lists the backbone sources. Sources do not belong on individual cards (Timothy, Oct 17). A text quoted in passing carries its short title and locus in the text: "(*Institutio oratoria* I.6.3)", "(Matthew 4:4)", "(John 1:1)".
8b. **Translators are never named inline, only in the deck's sources line** (and in `sources/TRANSLATIONS-USED.md`). This includes the King James Version:
   - BEFORE: "For example, 'Man shall not live by bread alone' (Matthew 4:4, King James Version) does not say…" AFTER: "…(Matthew 4:4) does not say…", with "the Bible, King James Version" added to the deck's sources line (`i.syncategorematic`; likewise `i.ambiguity`, where "reads, in the King James Version," was cut from the John 1:1 sentence).
   - BEFORE: "Quintilian divides the profession of the grammarian into two parts, which Butler translates as '…'" AFTER: "Quintilian divides the profession of the grammarian into two parts: '…'".
   - Never credit "T. Kearns" unless he made the translation. The exceptions in A.6 (a long quoted passage; the translation section, where the translation itself matters) still stand.
8c. **A slight adjustment to the nuance of a published translation still counts as a quotation.** It stays inside the quotation marks and does not turn the passage into a paraphrase. Augustine (I.1 card 3): "do yet lead to the knowledge" became "do still lead to the knowledge"; Quintilian I.6.42: "sanctioning" became "giving their approval to." Only Timothy makes such adjustments. Claude does not alter a quotation by one letter; if a published wording seems archaic or unclear, flag it for him.
8d. **A mere reference takes no "in paraphrase."** When a sentence only names where a doctrine, term, or example is found ("Aristotle calls the same kind of ambiguity **equivocation** … (*Sophistical Refutations* 4)"; "St. Thomas … sets out these kinds … (*In Peri hermeneias* I, lect. 7)"), give the locus alone. Timothy removed "in paraphrase" from such references on the reason-for-name, Priscian, five-kinds, and ambiguity cards. Keep the tag only where a sentence restates a particular passage closely enough that a reader might take it for the author's words.
8e. **Per-card `src` notes are kept but never shown to students.** They may record citations, working notes, or what was left out. The renderer shows only the deck's `sources` line; never render panel `src`. Keep `src` notes accurate when a card changes, but do not spend effort on their wording.
8f. **Translations must be real** (published, or Timothy's own), checked word for word where possible; every item marked "must be checked" in `sources/TRANSLATIONS-USED.md` is verified or flagged again before anything goes to the live app (L.6). Cite the edition that can actually be reached (N.2).

### Plain textbook statements and glosses

9. **Plain textbook statements.** State the claim in a full declarative sentence, with the logical link explicit (so, but, because, therefore, that is). No imperatives in card text ("Think of…", "Look at…"): Timothy rewrote card 9 of `i.sign` "in plain textbook style (no imperatives)". "Consider…" and "To take a simple example" are acceptable as introductions. Use "we" or let the tradition make the claim. No aphoristic closers, no coined substitutes for standard terms, no calques (CLAUDE.md rules 1–4 still apply in full).
10. **Gloss every technical term on first use, in place:**
   - "a prayer can contain a solecism as easily as a statement can" → "a prayer can contain a solecism, that is, an error in construction, as easily as a statement can" (`i.functions`).
   - "the material of grammar is speech, that is, the voice as it signifies thoughts in the mind" → "…the voice as it signifies thoughts in the mind (i.e., voice as it has meaning) …. Something that signifies (or has meaning) is a sign." (I.1 card 1).
   - "logic studies that variation under the name of supposition" → "…under the name of **supposition** (from the Latin *suppositio*, the way a word stands for something in a sentence)" (I.3 card 1).
   - "partly by a separate word" → "partly by auxiliary verbs, that is, helping verbs joined to the main verb, as 'will' in 'will run'" (I.3 card 3).
   - "can stand as the subject or the predicate of a sentence, that is, as what the sentence is about or as what is said of it" → "…as what the sentence is about, the subject, or as something said of what the sentence is about, the predicate" (I.4 card 1).
   - "a joining" → "a joining, a composition"; "*modus*" glossed as "way" or "manner" (I.3 cards 8 and 10).
   - Place each author for the student at first mention ("The ancient grammarian Priscian"; "Cassiodorus and Isidore, medieval scholars writing after the fall of Rome"; "William of Sherwood, an English logician of the thirteenth century"). No technical term before it is taught (A.7): in early decks say "argument," not "syllogism"; terms from later sections (case, mood, declension) get a plain gloss when they must appear early.
11. **Say the plain thing first, then name it.** "A word that signifies something by itself is what the tradition calls a **categorematic** word" (Timothy's revision of "A **categorematic** word is a word that signifies something by itself"); likewise for **syncategorematic**. "The meaning that was imposed on a word, that is, what the word signifies, is called its **signification**" (for "The meaning that a word was imposed to signify").
12. **The standard term, consistently.** "Conventional sign" is the term throughout the course; "given sign" (*signa data*) appears and is explained only on I.1 card 4. "Precepts" and "interpretation" are the two parts of grammar, never "principles" for the first (A.11). "Error," "barbarism," "solecism," "impropriety" in our own voice; "fault" or "vice" only when reporting the ancients or translating *vitium* (A.1). "The tasks of grammar / of the grammarian," not "offices," except in reporting *officia* (A.2). The functions of language are stating, asking, commanding, praying, and calling, with feeling able to accompany any of them ("wishes or prays" became "prays").
13. **When *methodice* or *historice* appear, explain them in the same sentence.** They are never bare working names (A.11, H). "(*methodice*, from the Greek for the methodical part)"; "Its Greek name, *historice*, comes from *historia*, inquiry or account. (The name does not mean the study of history in our sense …)". The same holds for any Latin or Greek term the student meets: it must be clear on the spot what it is and means.

### Lists

14. **Two kinds of list (Timothy, 17 Oct 2026).** The app has no bullet lists, and `<ul>` is never used.
   - **An important list that will come up again goes on separate lines**, in the existing `<br>` layout: a lead-in sentence ending with a colon, then one item per line, the English term in **bold** with the Latin in italic parentheses. Examples: the four tasks of the grammarian (P.2 card 2), the four criteria of correctness (P.4 card 1), the parts of the material of grammar (P.1). These three Preliminary cards stay as they are. Use this layout for divisions the course returns to, such as the parts of speech, the accidents, the kinds of error, the kinds of supposition, or the tropes.
   - **A passing list that will not come up much again is written in prose**, with ordinals: "first, … second, … third, … and fourth, …" or "and, finally, …". Example: the four causes of ambiguity (I.6 card 1).
   - In the drafts of II–XI, keep the `<br>` layout where the list is an important one that returns, and recast passing lists in prose. Example sentences set out for comparison on separate lines (as in "Every horse runs." / "Some horse runs." on `i.syncategorematic` / `what-they-do`) are not lists in this sense.
15. **Timothy likes lists: give complete ones.** Where a card speaks of several kinds, causes, or functions, enumerate them all. Ambiguity card 1 gained: "Within these two sources, ambiguity has several causes …: first, one word imposed with more than one meaning; second, a construction in which a word can belong to more than one other word; third, letters that can be read as one word or as two; and fourth, writing that does not show how a word is pronounced." The functions card was made a complete list ("to state, to ask, to command, to pray, and to call someone, and any of these sentences can also express what the speaker feels"), and the same list was then made to match in the deck subtitle, `structure.js`, and `xi.modern`. When a list changes, update every place it appears.

### Contrast, qualification, and examples

16. **"Whereas" for contrasts.** Where "while" marks a contrast (not time), write "whereas": "'Every horse is white' is false if a single horse is black, whereas 'Some horse is white' is true if a single horse is white"; "'The rain has stopped' expresses a judgment, whereas 'Has the rain stopped?' asks another person for one". Leave temporal "while" and quotations ("while the evil days come not") alone.
17. **Don't turn single examples into absolute rules.** The before/after pairs are illustrations of Timothy's taste, not blanket substitutions (REVISION-GUIDE, opening note): "treats" → "considers" once does not mean "treats" is banned. Likewise in the doctrine, qualify absolutes: "supports reason less often" → "does not always support reason"; "takes a capital letter" → "usually begins with a capital letter"; "Not every word does signify by itself; some have no definite signification alone." State the case that is true, not the neat one.
18. **Examples.** Examples go in the text, never in a list at the bottom of a card. When illustrating a kind, give more than one, in English and Latin: Timothy asked for "at least two simple examples, English and Latin" for each accident on I.3 card 6 (number, person, case, mood, gender). Follow an example far enough that a beginner sees why it shows the point (the grammar behind *puella bona*; "'water' as a sound has no natural connection with water itself"). Prefer examples a modern student recognizes (the Our Father, "to wend one's way," "neither" pronounced two ways, the "+" and "=" of arithmetic) beside the classical ones. Announce simple examples as such ("To take some simple examples"). Do not reuse an example that another card of the same deck already makes (the *sol*/"sun" line was dropped from I.1 card 7 because card 6 makes the point; the five-kinds examples were changed from those of the first card).
19. **Only as much history as the point needs.** "Go"/"went" was simplified on request (no Old English forms).

### Shape of a card and of a deck

20. **Connect each card to what came before**, then narrow: "We have seen that…," "As we have seen already…," "Now, we can divide words…," "Concerning grammar in this second way as the study of literature…".
21. **Close by pointing to what remains, without naming another deck.** Timothy added such closings throughout Section I: "This is a general account of what a sign is. But we need to say more." "Our concern in this course is on a particular kind of sign, words." "A word, however, often carries more meaning than its signification alone." "But not all words are like this: some words signify only together with something else." "Let us consider syncategorematic words in some detail." "Since these terms without definite signification are crucial to much expression, how words like these signify must be considered next." Use them where the next card really does take up the question; they are not a closer for every card.
22. **Keep the frame visible**: once a division is set up, name it again where it governs ("the first (second, third, fourth) task of the grammarian as teacher and critic of literature"; "The first criterion, reason (*ratio*)…").
23. **Say why, not only what; answer the modern student's doubt; connect the doctrine to the student's situation** (the twentieth-century neglect of grammar as a system; reading aloud as part of studying literature; Augustine on gestures "is not referring to sign language"; "it may be thought that we all learn these words … as we learn our mother tongue. But our concern here is to understand language … with precision and clarity"). A sentence tying the doctrine to the purpose of the course ("That is what this course teaches.") is used sparingly, only where the doctrine states the course's aim.
24. **Judgment over rule-following**: where a deck gives rules, say what they are for and leave room for judgment ("a grammarian is not primarily a strict rule master but a well-measured and careful judge").
25. **Titles carry the frame and the course's terms**, and need not be questions: "What is antiquity?" → "What is the criterion of antiquity?"; "Why does the verb consignify time?" → "Why does the verb consignify time and the noun not consignify time?"; "Given signs" → "Conventional (i.e., given) signs". Mix direct questions, noun phrases, and indirect questions (A.3).
26. **Cut repetition across decks.** Timothy removed `i.imposition` card 2 because it repeated the Sign deck, moving its one new paragraph and its question point to the Cratylus card. If a card in II–XI repeats what an earlier deck teaches, recall it in a sentence ("We have seen that…") rather than teaching it again, and say so in the report.

### Rhetoric overviews

27. **Where a card gives an overview of rhetoric, follow invention, arrangement, and style** (*inventio*, *dispositio*, *elocutio*), each glossed, **and mention memory and delivery briefly** (*memoria*, *pronuntiatio* or *actio*). Do not present rhetoric as style or figures alone. Keep to the grammatical side and refer to Ars Rhetorica for the rest (ITEM-LIST, "Overlap with Ars Rhetorica").

### Naming the tradition

27a. **Do not write "the schools" or "the old schools" for the tradition** (Timothy, 18 Oct 2026). Say "grammarians," "the classical grammarians," "the scholastics," or "the classical tradition," and speak of the tradition well (for example, "for more than a thousand years grammarians took it as the starting point of their art"). Never "old grammarians." A proper name or a quotation ("the schools of rhetoric," "the Carolingian schools") may stay.

27b. **Quotations: the English first, in quotation marks, then the Latin (or Greek) in parentheses after it** (Timothy, 18 Oct 2026), e.g., voice is “the motion of air perceptible to hearing, as far as lies in itself” (<i>vox est aer ictus sensibilis auditu, quantum in ipso est</i>; <i>Ars maior</i> I.1). This holds everywhere unless the Latin itself is being studied (a Latin form, scansion, a Latin example sentence), where the Latin may come first with its translation.

### Question points (and, by the same rules, exercise items)

28. **Question points must be fair.** Each variant has exactly one clearly correct option; the wrong options are plausible (they state a real confusion a student might have, or a true statement that does not answer the question) but are clearly wrong to a student who has understood the card.
   - **Options are shuffled on each visit** (Timothy, 17 Oct 2026; built in the question-point renderer of course.js, still to be built for exercise sets). The answer key is the index of the option in the data, so it follows the option, not its position on the screen. Therefore never write an option that depends on its position ("Both of the above," "A and C," "None of the others").
   - **The correct option must not give itself away by length or hedging, but never at the cost of clarity.** Prefer shortening the correct option, or developing a distractor naturally into a real alternative; never pad wrong options, which makes questions confusing. Timothy twice shortened a correct option that was longer and more qualified than the distractors: "Because it asks a different question: whether a word signifies something definite by itself" → "Because it asks whether a word signifies something definite by itself" (q-not-parts B); "Neither; it signifies, but it does not say that anything is or is not so" → "Neither; it asserts nothing" (q-statement B). In the present Preliminary and Section I items the correct option is the longest in about 56 percent of cases (49 of 87), against 25 percent by chance; even this out with care when writing. **Across a set, the correct option may sometimes be the longest, but never always or mostly (Timothy, 18 Oct 2026):** aim for it to be the longest in no more than about a quarter to a third of a set’s multiple-choice items, and check the count before committing. To even out, tighten the correct option or lengthen a wrong option with real, plausible content that keeps it clearly wrong; never add filler.
   - No trick wording, no "all of the above," no option that is right under a reading the card did not teach. Vary the position of the correct answer in the data as well, so that the order still reads naturally if shuffling is ever turned off.
   - Test only what has been taught by that point (ITEM-LIST rule 4). Use the course's settled terms in options and explanations (e.g., "conventional sign," not "given sign"; "prays," not "wishes").
   - Explanations begin with the content, in full sentences; the renderer supplies "Correct" or "Incorrect." An explanation says why the right answer is right and, where useful, why the most tempting wrong option is wrong.
   - When a card's text changes, reread its question point and fix any option or explanation that no longer matches.
   - Section V decks and others carry `qpTodo` placeholders (186 in II–XI): write each as a point with exactly three variants (A, B, C) after the deck's cards are revised, so the questions match the final text.

### Recitations

29. **Each deck gets a `recitation` outline once its cards are final** (ITEM-LIST.md, "Recitation Tablet"). It follows the deck's order and keeps every point of substance (definitions, distinctions, divisions, arguments, conclusions); it leaves out passing examples, quotations, names mentioned only in passing, and asides. It is written in the same textbook prose, with terms glossed as on the cards, and no sources. Write it only after the deck is settled, so the two match; Section I first. If a card changes later, update the recitation.

### Reporting to Timothy

30. **Timothy does not read Claude's notes, logs, or `src` comments.** Any decision that needs him goes in a short numbered list at the end of Claude's report, each item explained in context: the deck and card, the wording or issue quoted, the options, and Claude's recommendation. Keep it short and put the most important first. Do not bury questions in the log of REVISION-GUIDE.md or in code comments. Continue to log his edits in REVISION-GUIDE.md as before, and add any new standing rule to this file.

---

## Checklist for every card

1. Does the card (and, for the first card, the deck) open from an ordinary reality or English example, then state the principle, then bring in the authority? If not, is there a specific reason?
2. Is every technical term glossed in place on first use, and every Latin or Greek term explained on the spot?
3. American spelling; mentioned English words in double quotes; foreign words italic; bold at definitions kept.
4. No "previous deck," "next deck," and no pointer to other cards within a deck ("the following cards," "the next two cards," "the last card"). No translator named in the text (KJV included). No "in paraphrase" on a mere reference. No per-card sources line.
5. Important, recurring lists on separate lines (`<br>`); passing lists in prose; every list complete and consistent with every other place it appears.
6. "Whereas" for contrast; no absolute claim where a qualified one is true.
7. More than one example for a kind, in English and Latin, explained far enough to show the point; not repeated from another card of the deck.
8. A connecting first sentence and, where it fits, a closing sentence pointing to what remains.
9. Question point: one clearly correct option, not the longest or most hedged; plausible, clearly wrong distractors; terms match the final card.
10. Anything for Timothy goes in the list at the end of the report.
