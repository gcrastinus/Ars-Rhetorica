# Ars Rhetorica

The third art of the trivium. A static, GitHub-Pages-ready course in Aristotelian–Thomistic rhetoric: study decks and working exercises, parchment and wine, no bundler.

Sister applications: [Ars Syllogistica](https://gcrastinus.github.io/ars-syllogistica/) (logic) and [Ars Grammatica](https://github.com/gcrastinus/ars-grammatica) (grammar).

**Designed and Built by Timothy Kearns, PhD** — [academia.edu](https://lccollege.academia.edu/TimothyKearns)

## Open it

Serve the folder, or open `index.html` in a browser that will load the sibling scripts (`passages.js`, `data.js`). GitHub Pages: publish this directory as the site root.

```
index.html      UI, engine, parchment
data.js         sources, study decks, exercise generators
passages.js     public-domain passage bank (figures marked)
```

Progress is stored in this browser under `ars-rhetorica-progress`. Nothing leaves the machine.

**Free Practice and the Guided Path.** A toggle on the home screen chooses the path. Free Practice opens everything. The Guided Path (`guided.js`, ported from Ars Logica's) opens the exercises in eight steps (species; pisteis; enthymeme, issue, and topics; ethos and pathos; the six offices; style and the figures; Antiphon, the debates, and the whole case; Augustine and Gregory). A set is passed at 9 of the last 10 right at Level III or above across two days, which also opens Levels IV and V, and mastered at 8 of 10 at Level V across two days. Mastered sets return in Today's Review after 1, 3, 7, 16, and 35 days. Each deck has a content review (`RECALL` in `data.js`), ready on the Guided Path one day after the deck is finished and one of its exercises is passed. Reviews gate nothing. The Guided record is opt-in, kept under `ars-rhetorica-guided` (the path under `ars-rhetorica-path`), and exported with the course record from Progress & Review. `progress-report.html` turns an exported file into a report and grade for instructors.

The Recitation Tablet (top left of the home screen, the same tablet as Ars Grammatica's) offers each study deck once it has been finished, and each Division once all its decks are finished: the student writes out the doctrine from memory, then opens the deck's outline (the `recitation` field of each deck in `data.js`) and checks off the points covered. The home screen asks for a recitation again after 3, 7, and 30 days. The code is `recitation.js` (shared with Ars Grammatica) and `recitation-adapter.js`.

## How to proceed

Act I’s study deck first — *The counterpart of dialectic* — then *The three species* at difficulty I. Most sets are ten questions. At difficulty I each item is worth ten points, and a clean run of ten is 100. The six offices, the paired debates, and Gorgias’s Helen are six questions; the Christian orator is eight. Difficulty changes the item, not only the score.

Keys `1`–`4` choose a multiple-choice option; Enter goes on. Where Latin is on file, an original-text button shows it. Every panel names its source.

## What is in it

| Act | Study | Exercise |
|---|---|---|
| I What Rhetoric Is | Definition, three pisteis, three species | Species; pisteis |
| II Invention · Logos | Enthymeme, example, topics | Supply the missing premise |
| III Ethos and Pathos | Character; Aristotle II + Aquinas I–II; Gregory’s pairs | Name the passion; Gregory’s hearers |
| IV Arrangement | Cicero’s six; Aristotle’s four | Name the part; order the six |
| V Style | Clarity, metaphor, Gorgias as exhibit | (the figures act is the drill) |
| VI Figures | — | Click the figure; which excerpt; Cicero; **Gorgias’s Helen**; **Augustine** |
| VII The Whole Case | **Gorgias four aitiai**; **Antiphon tetralogy**; **Christian orator** | Antiphon side/pistis/topos; Blaisdell paired debates; the whole case |

The passage bank keeps Cicero as backbone and widens it: Herodotus and Thucydides (early prose, beyond the Blaisdell excerpts), Plato (Apology, Phaedrus, Symposium, Menexenus, Protagoras myth), Sophocles (agon), Gorgias *Encomium of Helen* (Van Hook), Antiphon’s Second Tetralogy (the javelin school-piece), Augustine (Confessions, *De doctrina christiana* IV), and the Blaisdell course debates (Archidamus/Sthenelaidas, Pericles, Cleon/Diodotus, Alcibiades, Catiline, Caesar).

Antiphon is labelled forensic and kept out of the Cicero pile. Gorgias is a showpiece of sophistic lexis and a doctrine: persuasion as a drug; four aitiai of Helen’s going.

## Licence of the texts

English in the bank is public domain (Yonge, Crawley, Jowett, Pusey, Shaw, Van Hook 1913, Storr, Watson, Pope, Dryden, Douay-Rheims). See `CITATIONS.md`. The 2014 Dover wording of Blaisdell is not used; the course list is, in older translations.
