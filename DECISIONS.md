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
