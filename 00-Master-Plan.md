# ARS RHETORICA — Master Plan

*The third art of the trivium, taught as a liberal art: Aristotelian in its spine, Ciceronian in its arrangement, Augustinian in its offices* (docere, delectare, movere), *Thomistic in the map of the passions, with real speeches throughout and no invented classical-sounding prose.*

Sibling applications: **Ars Grammatica** and **Ars Syllogistica**. Same engine, same parchment, own colour (deep red / oxblood; dark mode burgundy-black), own `localStorage` key.

---

## 0. What this app is for

Grammar asks whether the utterance is well formed (*congruitas*). Logic asks whether what is said is true, and what follows. **Rhetoric asks whether the hearer is moved to see it.**

*The moon is made of green cheese* is congruous and false. *Him go store yesterday* is incongruous and may well be true. A speech may be both well formed and true, and still fail — if it does not find the available means of persuasion in this case, for these hearers.

The app does not grade compositions. It trains the eye on real speeches: to name the species, the pistis, the office of the oration, the figure that is actually in the English, the missing premise of an enthymeme.

### The governing distinction

| | asks | is satisfied by | fails as |
|---|---|---|---|
| **Grammar** | is the utterance well formed? | *congruitas* | solecism / barbarism |
| **Logic** | is the proposition true, and what follows? | truth, validity | falsity / fallacy |
| **Rhetoric** | will the hearer be moved to see it? | persuasion | ineffectiveness |

### Relation to the sisters

- Ars Grammatica hands the student a well-formed sentence.
- Ars Syllogistica hands him a true (or valid) argument.
- Ars Rhetorica asks what must still be done for *these hearers*, in *this case*.
- Progress keys are separate. The design system is shared. This app’s distinguishing colour is wine, not Grammatica’s navy or Syllogistica’s brown.

---

## 1. The Acts

The spine is Aristotle, *Rhetoric*. Invention, arrangement, style — with the three pisteis and the three species named before the figures, because figures without a case are a box of ornaments.

**I. What Rhetoric Is.** Counterpart of dialectic (Rhys Roberts I.1–2). Three artistic pisteis: ethos, pathos, logos. Three species: deliberative, forensic, epideictic, by the hearer’s job.

**II. Invention · Logos.** Enthymeme and example. Topics. Necessary signs and fallible signs. Antiphon’s javelin as a lesson: the facts agreed, the fight is cause.

**III. Invention · Ethos and Pathos.** Ethos shown *in the speech* (phronesis, arete, eunoia). Aristotle *Rhetoric* II on the passions; Aquinas I–II concupiscible and irascible beside it. Gregory, *Pastoral Care*: pairs of hearers.

**IV. Arrangement (taxis).** Aristotle’s four; the Latin school’s six (exordium, narratio, partitio, confirmatio, reprehensio, peroratio). Offices, not a template. A tetralogy shrinks narration; a funeral oration is not a proof of a crime.

**V. Style (lexis).** Clarity and propriety first; metaphor as seeing likeness. Gorgias as the exhibit of what happens when style is asked to do the work of argument.

**VI. Figures.** Click the stretch; which of four excerpts. Filters: Cicero backbone; Gorgias *Helen* (almost all Gorgias); Augustine (Confessions + DDC IV, Latin on the original-text button). Tragedy and early prose live in the mixed set.

**VII. The Whole Case.** Situation → species, end, pistis, figure. Dedicated rooms:

- **Gorgias, *Encomium of Helen*** (Van Hook 1913): logos as a powerful potentate; persuasion as a drug / witchery; four aitiai (fortune/gods/necessity, violence, persuasion, love).
- **Antiphon, Second Tetralogy**: javelin practice; unintentional homicide; facts agreed; hamartia; miasma; erga/logoi; doxa/aletheia; the apragmon. Forensic; not filed under Cicero.
- **Augustine, *De doctrina christiana* IV**: the Christian orator keeps *docere / delectare / movere* and the three styles; tears, not applause (Caterva at Caesarea).
- **Blaisdell course debates**, in public-domain English: Archidamus / Sthenelaidas; Pericles (war and funeral); Cleon / Diodotus; Alcibiades; Sallust’s Catiline and Caesar.

---

## 2. The passage bank

No invented examples for quotations. Every excerpt is cited (author, work, locus). Spans are exact substrings. Session uniqueness: shuffle without replacement; a set does not reuse a passage until the pool is exhausted. Gorgias’s set is six because the bank is six.

Authors actually in the bank: Cicero (backbone), Plato, Thucydides and the named speakers of the Blaisdell debates, Herodotus, Antiphon, Gorgias, Augustine, Gregory, Sallust, Tacitus, Livy, Demosthenes, Sophocles, Homer, Virgil, Boethius, Plutarch, Douay-Rheims.

---

## 3. Engine and look

Copied from Ars Grammatica: screens (`scr-home`, `scr-deck`, `scr-ex`, `scr-src`, `scr-prog`), `srcLine` / Sources modal, original-text button, study decks unscored, exercises with 1–4 and Enter, difficulty 1–5 that changes the item. From Ars Syllogistica: How to Proceed, 100-point sets (ten items × 10 at difficulty I), gold ornaments, Cinzel + EB Garamond.

Colour: parchment (`--paper #f6f0e1`, `--ink #2b2118`); wine leads (`--wine`); dark mode burgundy-black (`--paper #14090c`). Primary buttons wine, not gold.

Footer: Designed and Built by Timothy Kearns, PhD.

---

## 4. What this app will not do

It will not grade a student’s composition. It will not call an API. It will not invent a Ciceronian sentence to fill a hole. It will not paste the 2014 Dover editor’s wording of Blaisdell. It will not dump Antiphon into the Cicero pile, or treat Gorgias as only a list of figures.
