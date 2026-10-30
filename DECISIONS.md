# DECISIONS

Dated log of team decisions. Newest at the bottom. "Pending Albert" = needs his approval.

## 2026-10-30

1. **Branch `drafts` created from `main` (`4686a49`).** All team work goes there; nothing is pushed or merged to `main`; Albert merges. (Before this, the repo had only `main` with `React.md`; the repo is a fork of `moocai/React-curriculum`.)
2. **`React.md` is the primary reference** for topics and order; it is not edited by the team.
3. **Curriculum = React.md's 20 topics, 1:1, in 5 modules** following its "Recommended learning path" (Foundation 1–4, Data flow 5–8, State mastery 9–16, Scaling 17–18, Correctness & side effects 19–20). *Pending Albert.*
4. **Scope:** pure React concepts only. Albert's JavaScript/ES6 pages are prerequisites to link, not lessons. Router, styling, data fetching appear only as examples in "What is not React". Labs are not mapped yet (open question). *Pending Albert.*
5. **References:** 48 pages from the albertprofe.dev ReactJS sidebar captured as markdown into `references/albertprofe-dev/` (text + code; images linked, not downloaded). react.dev is **linked only**, not saved, to avoid copying it.
6. **Drive folder** `react` (1OPIc19pSdcc3C509HxCbvZF-ZotUBW3Y) checked: empty. Albert's local folder: empty for now (per Albert; not accessed). Both noted in `references/INDEX.md`.
7. **Lesson files:** `lessons/MM-LL-slug.md` (module-lesson-slug), from `LESSON-TEMPLATE.md`.
8. **Format:** English, plain GitHub markdown; callouts as GitHub alerts (`> [!NOTE]` etc.) so they can be mapped to Quarto callouts later. Filename shown as a bold label above code blocks, matching Albert's habit.
9. **Modern defaults:** React 19, `createRoot`, Vite; no create-react-app (deprecated 2025-02-14), no `ReactDOM.render` (removed in React 19), no class components, no `Context.Consumer`. Links go to react.dev, not `beta.reactjs.org`/`reactjs.org`.
10. **Status flow:** planned → drafted → edited → ready for Albert (tracked in `PROGRESS.md`). All 20 lessons start as `planned`; no drafting until the curriculum is approved.

### 2026-10-30 (later) — Albert's answers to the open questions (decided by Albert)

11. **Purity moves into Foundation** as lesson 1.5 (`lessons/01-05-purity.md`), right after "React is a component tree rendering"; it keeps its React.md topic number (19). Module 05 becomes "Side effects". Replaces the placement in decision 3. *Decided by Albert.*
12. **"What is not React" (1.3) briefly teaches** routing, styling and data fetching: a short intro and one tiny example each, not just a list of names. Goals updated. Partly replaces decision 4. *Decided by Albert.*
13. **One optional lesson added:** "You Might Not Need an Effect" as 5.2 (`lessons/05-02-you-might-not-need-an-effect.md`), after Effects (now 5.1, `lessons/05-01-effects.md`). **No refs lesson.** Total: 21 lessons (20 core + 1 optional). *Decided by Albert.*
14. **Labs are a separate track.** Lessons don't end with lab exercises; they keep their own small "Try it" exercises. *Decided by Albert.*
15. **Vite is the only recommended setup.** No CRA and no other build tools or frameworks in lessons. *Decided by Albert.*
16. **Lessons are plain GitHub markdown** (confirms decision 8). *Decided by Albert.*
17. Curriculum status stays **PROPOSED – awaiting Albert's final approval**. STYLE-GUIDE.md and LESSON-TEMPLATE.md unchanged (persona changes on hold).

### 2026-10-30 10:50 (Europe/Madrid) — Curriculum approved; Tom persona choices (decided by Albert)

18. **CURRICULUM.md APPROVED by Albert, 2026-10-30** (21 lessons: 20 core + 1 optional). Replaces the PROPOSED status in decision 17. Lesson writing can start; 1.1 is assigned to react-writer. *Decided by Albert.*
19. **Author persona "Tom"**, as described in `/workspace/TOM-STYLE-GUIDE.md` (react-lead's working draft, not in this repo). Albert's choices: *Decided by Albert.*
    - No epigraphs.
    - Address the reader as **"you"** in concept lessons and **"we"** in labs.
    - Code comments: only ✅ / ❌ markers.
    - Runnable examples live in `examples/` and are linked from lessons via StackBlitz GitHub import.
    - Emoji may be used freely.
    - No note about Tom in README.md.
20. **On hold:** updating STYLE-GUIDE.md and LESSON-TEMPLATE.md to reflect decision 19 waits for Albert's go-ahead. Until then both files stay unchanged.

### 2026-10-30 — Albert's answers as relayed by react-editor (decided by Albert)

21. **Mermaid diagrams** render on the platform; lessons may use them. *Decided by Albert.*
22. **`<details>` collapsibles** render on the platform; lessons may use them. *Decided by Albert.*
23. **Images from albertprofe.dev stay hotlinked** for now (not copied into the repo). *Decided by Albert.*
24. **"JavaScript XML"** only at the first mention of JSX; after that, just "JSX". *Decided by Albert.*

### 2026-10-30 — Lead decision (react-lead)

25. **Keep `package-lock.json` in `examples/`** so runnable examples install reproducibly.
