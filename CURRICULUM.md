# CURRICULUM — Core React (MOOC4ALL / mooc4class)

> **Status: APPROVED by Albert, 2026-10-30.**
> Drafted by react-lead, 2026-10-30, on branch `drafts`; revised the same day with Albert's answers to the open questions (see [`DECISIONS.md`](DECISIONS.md)).

## Basis

- **Topics and order:** Albert's 20-topic TOC in [`React.md`](React.md) (primary reference). Modules = his "Recommended learning path" (Foundation → Data flow → State mastery → Scaling → Side effects), with one change decided by Albert: **Purity (React.md 19) moves into Foundation** as lesson 1.5. Each lesson notes its React.md topic number.
- **Albert's pages:** captured in [`references/albertprofe-dev/`](references/albertprofe-dev/) (see [`references/INDEX.md`](references/INDEX.md)). Linked below to the live page; `§` = section number on that page.
- **react.dev:** the official [Learn React](https://react.dev/learn/describing-the-ui) path, linked only (we paraphrase, never copy).
- **Scope (from React.md):** pure React mental models. No HTML/JS/TS/CSS teaching; Albert's JS/ES6 pages are prerequisites, not lessons.
- **Setup:** Vite is the only setup the course recommends (no CRA, no other build tools or frameworks).
- **Format:** plain GitHub markdown.
- **Labs:** a separate track (see below); lessons don't end with lab exercises.
- **Files:** one lesson = one file `lessons/MM-LL-slug.md` (module-lesson), built from [`LESSON-TEMPLATE.md`](LESSON-TEMPLATE.md).

Short names used below: `AP:` = albertprofe.dev/reactjs page, `RD:` = react.dev/learn page. `[T n]` = React.md topic number.

---

## Module 01 — Foundation: what React actually is (React.md 1–4 + 19)

| # | File | Lesson | Learning goals (student can…) | Albert | react.dev |
|---|---|---|---|---|---|
| 1.1 | `lessons/01-01-what-is-react.md` | What is React and why is it so relevant? [T 1] | say what React is (UI library, view layer only); explain declarative vs imperative; name the 4 reasons it matters from React.md | [AP: what-principles](https://albertprofe.dev/reactjs/reactjs-what-principles.html) §1.1–1.2, §1.5 | [RD: Quick Start](https://react.dev/learn), [RD: Thinking in React](https://react.dev/learn/thinking-in-react) |
| 1.2 | `lessons/01-02-jsx-describing-the-ui.md` | JSX: describing the UI [T 2] | read/write JSX; apply the JSX rules (single root, closed tags, camelCase); use `{}` for JS; explain JSX → React elements → tree | [AP: what-jsx](https://albertprofe.dev/reactjs/reactjs-what-jsx.html) §2–6 | [RD: Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx), [RD: JavaScript in JSX](https://react.dev/learn/javascript-in-jsx-with-curly-braces) |
| 1.3 | `lessons/01-03-what-is-not-react.md` | What is not React [T 3] | list what React leaves to others (the real DOM via `react-dom`, routing, styling, data fetching, global state libs); recognise library vs framework; **with a short intro + one tiny example each:** route between two pages with React Router, style a component (`className` + a CSS file, inline `style`), fetch data and show it (preview of Effects, lesson 5.1) | [AP: what-jsx](https://albertprofe.dev/reactjs/reactjs-what-jsx.html) §4 (styling is not React's job), [AP: app-router](https://albertprofe.dev/reactjs/reactjs-app-router.html), [AP: app-styling](https://albertprofe.dev/reactjs/reactjs-app-styling.html), [AP: app-async](https://albertprofe.dev/reactjs/reactjs-app-async.html), [AP: hook-custom](https://albertprofe.dev/reactjs/reactjs-hook-custom.html) (useFetch) | [RD: Build a React App from Scratch](https://react.dev/learn/build-a-react-app-from-scratch) (Vite; routing and data fetching sections), [RD: Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx) (`className`) |
| 1.4 | `lessons/01-04-component-tree-rendering.md` | React is a component tree rendering [T 4] | write a function component; export/import it; draw the render tree of a small app; describe the 4 render steps in React.md | [AP: what-components](https://albertprofe.dev/reactjs/reactjs-what-components.html), [AP: es6-import](https://albertprofe.dev/reactjs/reactjs-es6-import.html), [AP: what-render-dom](https://albertprofe.dev/reactjs/reactjs-what-render-dom.html) | [RD: Your First Component](https://react.dev/learn/your-first-component), [RD: Importing and Exporting](https://react.dev/learn/importing-and-exporting-components), [RD: Your UI as a Tree](https://react.dev/learn/understanding-your-ui-as-a-tree) |
| 1.5 | `lessons/01-05-purity.md` | Purity of components [T 19] | state the purity rules; spot impure render code; know why StrictMode renders twice in dev | [AP: what-props](https://albertprofe.dev/reactjs/reactjs-what-props.html) §2 | [RD: Keeping Components Pure](https://react.dev/learn/keeping-components-pure) |

## Module 02 — Data flow: props and events (React.md 5–8)

| # | File | Lesson | Learning goals | Albert | react.dev |
|---|---|---|---|---|---|
| 2.1 | `lessons/02-01-passing-props.md` | Passing props to a component [T 5] | pass props parent → child; destructure props; explain read-only props and one-way data flow; use `children` | [AP: what-props](https://albertprofe.dev/reactjs/reactjs-what-props.html) §1, [AP: es6-destructuring](https://albertprofe.dev/reactjs/reactjs-es6-destructuring.html) | [RD: Passing Props](https://react.dev/learn/passing-props-to-a-component) |
| 2.2 | `lessons/02-02-conditional-rendering.md` | Conditional rendering [T 6] | choose between `if`, ternary, `&&`, and returning `null` | [AP: app-conditional-render](https://albertprofe.dev/reactjs/reactjs-app-conditional-render.html) | [RD: Conditional Rendering](https://react.dev/learn/conditional-rendering) |
| 2.3 | `lessons/02-03-rendering-lists.md` | Rendering lists [T 7] | render arrays with `map`/`filter`; choose stable keys; explain "keys are identity, not position" | [AP: es6-data](https://albertprofe.dev/reactjs/reactjs-es6-data.html) | [RD: Rendering Lists](https://react.dev/learn/rendering-lists) |
| 2.4 | `lessons/02-04-events-and-handlers.md` | Events and handlers: passing and calling [T 8] | add handlers; tell passing `onClick={fn}` from calling `onClick={fn()}`; pass handlers as props; name them `handleX` / `onX` | [AP: app-events](https://albertprofe.dev/reactjs/reactjs-app-events.html) | [RD: Responding to Events](https://react.dev/learn/responding-to-events) |

## Module 03 — State mastery: ownership, updates, identity (React.md 9–16)

| # | File | Lesson | Learning goals | Albert | react.dev |
|---|---|---|---|---|---|
| 3.1 | `lessons/03-01-state-component-memory.md` | State: a component's memory [T 9] | add state with `useState`; explain why a local variable is not enough; follow the Rules of Hooks | [AP: hook-state](https://albertprofe.dev/reactjs/reactjs-hook-state.html) §1–4, [AP: hook-rules](https://albertprofe.dev/reactjs/reactjs-hook-rules.html) | [RD: State: A Component's Memory](https://react.dev/learn/state-a-components-memory) |
| 3.2 | `lessons/03-02-render-and-commit.md` | Render and commit [T 10] | name the trigger → render → commit steps; explain why render must be pure and commit touches the DOM | [AP: what-props](https://albertprofe.dev/reactjs/reactjs-what-props.html) §3, [AP: what-render-dom](https://albertprofe.dev/reactjs/reactjs-what-render-dom.html) | [RD: Render and Commit](https://react.dev/learn/render-and-commit) |
| 3.3 | `lessons/03-03-state-as-snapshot.md` | State as a snapshot [T 11] | predict what a handler "sees" after `setState`; explain stale values in handlers/timeouts | [AP: what-props](https://albertprofe.dev/reactjs/reactjs-what-props.html) §5.1–5.2 | [RD: State as a Snapshot](https://react.dev/learn/state-as-a-snapshot) |
| 3.4 | `lessons/03-04-queueing-state-updates.md` | Queueing a series of state updates [T 12] | explain batching; use the updater form `n => n + 1`; predict mixed updates | [AP: what-props](https://albertprofe.dev/reactjs/reactjs-what-props.html) §5.4, [AP: hook-state](https://albertprofe.dev/reactjs/reactjs-hook-state.html) §5, [AP: app-async](https://albertprofe.dev/reactjs/reactjs-app-async.html) §4 | [RD: Queueing Updates](https://react.dev/learn/queueing-a-series-of-state-updates) |
| 3.5 | `lessons/03-05-objects-in-state.md` | Objects in state [T 13] | update objects immutably with spread (incl. nested); explain why mutation breaks re-render | [AP: what-props](https://albertprofe.dev/reactjs/reactjs-what-props.html) §4, [AP: es6-spread](https://albertprofe.dev/reactjs/reactjs-es6-spread.html), [AP: js-objects](https://albertprofe.dev/reactjs/reactjs-js-objects.html) §2 | [RD: Updating Objects in State](https://react.dev/learn/updating-objects-in-state) |
| 3.6 | `lessons/03-06-arrays-in-state.md` | Arrays in state [T 14] | add/remove/update/insert items without mutation (`[...a, x]`, `filter`, `map`, `slice`) | [AP: hook-state](https://albertprofe.dev/reactjs/reactjs-hook-state.html) §7, [AP: es6-data](https://albertprofe.dev/reactjs/reactjs-es6-data.html) | [RD: Updating Arrays in State](https://react.dev/learn/updating-arrays-in-state) |
| 3.7 | `lessons/03-07-sharing-state.md` | Sharing state between components [T 15] | lift state to the closest common parent; pass value + updater down; keep one source of truth | **gap** – only partial: [AP: app-events](https://albertprofe.dev/reactjs/reactjs-app-events.html) §3 (handlers as props) | [RD: Sharing State](https://react.dev/learn/sharing-state-between-components) |
| 3.8 | `lessons/03-08-preserving-resetting-state.md` | Preserving and resetting state [T 16] | predict when state survives (same type + position + key); reset with `key` or a different type | **gap** – no Albert page | [RD: Preserving and Resetting State](https://react.dev/learn/preserving-and-resetting-state) |

## Module 04 — Scaling: complex state and deep data (React.md 17–18)

| # | File | Lesson | Learning goals | Albert | react.dev |
|---|---|---|---|---|---|
| 4.1 | `lessons/04-01-reducer.md` | Reducer [T 17] | move update logic to `(state, action) => newState`; dispatch actions that say *what happened*; use `useReducer` | [AP: hook-reducer](https://albertprofe.dev/reactjs/reactjs-hook-reducer.html), lab [rjslab3](https://albertprofe.dev/reactjs/rjslab3.html) | [RD: Extracting State Logic into a Reducer](https://react.dev/learn/extracting-state-logic-into-a-reducer) |
| 4.2 | `lessons/04-02-context.md` | Context [T 18] | spot prop drilling; create/provide/read context with `useContext`; know when not to use it; combine with a reducer | [AP: hook-context](https://albertprofe.dev/reactjs/reactjs-hook-context.html), lab [rjslab3-4](https://albertprofe.dev/reactjs/rjslab3-4.html) | [RD: Passing Data Deeply with Context](https://react.dev/learn/passing-data-deeply-with-context), [RD: Scaling Up with Reducer and Context](https://react.dev/learn/scaling-up-with-reducer-and-context) |

## Module 05 — Side effects (React.md 20 + optional)

| # | File | Lesson | Learning goals | Albert | react.dev |
|---|---|---|---|---|---|
| 5.1 | `lessons/05-01-effects.md` | Effects [T 20] | sync with an external system via `useEffect`; set dependencies; write cleanup | [AP: hook-effect](https://albertprofe.dev/reactjs/reactjs-hook-effect.html), [AP: hook-custom](https://albertprofe.dev/reactjs/reactjs-hook-custom.html) (useFetch) | [RD: Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects), [RD: Lifecycle of Reactive Effects](https://react.dev/learn/lifecycle-of-reactive-effects) |
| 5.2 | `lessons/05-02-you-might-not-need-an-effect.md` | **(Optional)** You might not need an effect [not in React.md] | spot effects that should be render-time calculations, event-handler logic, or a `key` reset; remove them | **gap** – no Albert page ([AP: hook-effect](https://albertprofe.dev/reactjs/reactjs-hook-effect.html) §2.1 effects vs events is the nearest) | [RD: You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect) |

**Total: 5 modules, 21 lessons** — 20 core (1:1 with React.md topics, purity moved to 1.5) + 1 optional (5.2).

## Labs — separate track

Albert's 18 labs ([rjslab1](https://albertprofe.dev/reactjs/rjslab1.html) … [rjslab7-1](https://albertprofe.dev/reactjs/rjslab7-1.html), listed in [`references/INDEX.md`](references/INDEX.md)) are a **separate practice track**, not part of the lessons. Lessons end with their own small "Try it" exercises on the lesson's concept, not with lab exercises. Mapping labs to the course is out of scope for this curriculum.

---

## Gaps

### A. react.dev covers, Albert's pages don't (or only partly)

| Topic | react.dev | Albert | Impact |
|---|---|---|---|
| Sharing state / lifting state up | [Sharing State](https://react.dev/learn/sharing-state-between-components) | none dedicated | Lesson 3.7 needs new material (React.md topic 15) |
| Preserving and resetting state | [Preserving and Resetting](https://react.dev/learn/preserving-and-resetting-state) | none | Lesson 3.8 needs new material (React.md topic 16) |
| UI as a tree (render tree, module tree) | [Your UI as a Tree](https://react.dev/learn/understanding-your-ui-as-a-tree) | VDOM/diffing only ([render-dom](https://albertprofe.dev/reactjs/reactjs-what-render-dom.html)) | Lesson 1.4: tree framing must be written fresh |
| Updating objects in state (nested objects) | [Updating Objects](https://react.dev/learn/updating-objects-in-state) | spread + mutation basics only | Lesson 3.5 needs a state-specific example |
| Reacting to input with state; choosing state structure | [Reacting to Input](https://react.dev/learn/reacting-to-input-with-state), [Choosing State Structure](https://react.dev/learn/choosing-the-state-structure) | none | Not in React.md — propose as optional extras |
| Effects in depth: you might not need an effect, reactive lifecycle, separating events from effects, removing dependencies | [Escape Hatches](https://react.dev/learn/escape-hatches) | basic `useEffect` only | Lesson 5.1 covers the essentials; **optional lesson 5.2** covers "You Might Not Need an Effect"; the rest is out of scope |
| Refs (values and DOM) | [Refs](https://react.dev/learn/referencing-values-with-refs) | [hook-ref](https://albertprofe.dev/reactjs/reactjs-hook-ref.html) exists | Not in React.md — **no refs lesson** (decided by Albert) |
| Thinking in React, TypeScript, React Compiler | [Get Started](https://react.dev/learn) | none | Out of current scope |

### B. Albert covers, outside this core course (React.md scope)

- JavaScript and ES6 pages (basics, functions, objects, variables, flow, arrow, import, destructuring, spread) → **prerequisites**; link from lessons, don't teach.
- `useMemo`, `useRef`, custom hooks, Rules of Hooks as standalone pages → hooks reference; only Rules of Hooks and a custom-hook example are used.
- Router, styling libraries (Sass, Tailwind, Semantic, MUI, w3.css, Bootstrap), async/Axios → **taught briefly** in lesson 1.3 "What is not React" (short intro + one tiny example each for routing, styling, data fetching); not covered beyond that.
- Virtual DOM / reconciliation framing → react.dev no longer teaches with "virtual DOM"; use it as background in 1.4/3.2, not as the core model.
- 18 labs (REST/Axios, router, to-do CRUD, Highcharts, Spring Boot, Feathers, AWS websockets chat, healthyFood, traffic lights) → **separate track** (see "Labs — separate track" above).

### C. Outdated content in Albert's pages (do not reuse as-is)

| Issue | Where | Current guidance |
|---|---|---|
| `create-react-app` as the way to start | [what-create](https://albertprofe.dev/reactjs/reactjs-what-create.html) §2.3–2.4, [what-principles](https://albertprofe.dev/reactjs/reactjs-what-principles.html), labs [rjslab1](https://albertprofe.dev/reactjs/rjslab1.html), [rjslab4-2](https://albertprofe.dev/reactjs/rjslab4-2.html), [rjslab6-1](https://albertprofe.dev/reactjs/rjslab6-1.html) | CRA deprecated for new apps on 2025-02-14 ([react.dev blog](https://react.dev/blog/2025/02/14/sunsetting-create-react-app)); use **Vite**, the course's only recommended setup (Albert's [rjslab7-1](https://albertprofe.dev/reactjs/rjslab7-1.html) already uses Vite) |
| `ReactDOM.render(...)` | [what-create](https://albertprofe.dev/reactjs/reactjs-what-create.html) §2.1 | Removed in React 19; use `createRoot` ([upgrade guide](https://react.dev/blog/2024/04/25/react-19-upgrade-guide)) |
| Links to `beta.reactjs.org` / `reactjs.org` / `legacy.reactjs.org` | ~18 pages (e.g. events, es6-data, hook-context, conditional-render) | `beta.reactjs.org` now redirects to react.dev; lessons should link react.dev directly |
| `<Context.Consumer>` render-prop pattern | [hook-context](https://albertprofe.dev/reactjs/reactjs-hook-context.html) §5.3 | Teach `useContext` only |
| Class components | Only mentioned historically (hooks replaced classes) in [what-principles](https://albertprofe.dev/reactjs/reactjs-what-principles.html), [hook-state](https://albertprofe.dev/reactjs/reactjs-hook-state.html) §2 | No class-component code found; keep classes to a one-line history note |
| "Hooks are a new feature (16.8)" / sidebar section "ReacJS 18: Hooks" | [what-principles](https://albertprofe.dev/reactjs/reactjs-what-principles.html) §1.3–1.4 | Hooks are simply "how React works" today; React 19 is current |
| React called both "not a framework" and "a SPA framework" | [what-principles](https://albertprofe.dev/reactjs/reactjs-what-principles.html) §1.1–1.2 | Lesson 1.1/1.3 must be consistent: library, view layer |
| Arrow-function components "may provide performance benefits" | [what-components](https://albertprofe.dev/reactjs/reactjs-what-components.html) §5 | Unsupported claim; present the three styles as equivalent |

## Open questions for Albert

None open. The six questions from the first draft were answered by Albert on 2026-10-30 (see [`DECISIONS.md`](DECISIONS.md)). Remaining step: **Albert's final approval of this curriculum.**
