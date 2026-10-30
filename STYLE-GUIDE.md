# STYLE GUIDE — writing lessons the way Albert writes

Drawn from Albert's pages on albertprofe.dev/reactjs (local copies in [`references/albertprofe-dev/`](references/albertprofe-dev/)). Every rule cites at least one page where the habit appears. Nothing here is a quote unless it is marked as one and copied exactly from his page.

## 1. Tone

- **Direct and teacher-like.** Short paragraphs, one idea each. Concept pages talk to the reader ("you"); lab pages use "we" — e.g. labs open with "In this lab, we will be using:" ([rjslab1](https://albertprofe.dev/reactjs/rjslab1.html), [rjslab2](https://albertprofe.dev/reactjs/rjslab2.html), [rjslab3](https://albertprofe.dev/reactjs/rjslab3.html)).
- **Bold the key phrase inside the sentence**, not whole sentences ([what-props](https://albertprofe.dev/reactjs/reactjs-what-props.html) §1, [app-events](https://albertprofe.dev/reactjs/reactjs-app-events.html) §1, [what-principles](https://albertprofe.dev/reactjs/reactjs-what-principles.html) §1.1).
- **Inline code for technical names**, including names like `React`, `JSX`, `DOM`, `props` ([what-render-dom](https://albertprofe.dev/reactjs/reactjs-what-render-dom.html), [what-jsx](https://albertprofe.dev/reactjs/reactjs-what-jsx.html)).
- **Questions to make the reader predict**, then the answer — e.g. asking what a number will be on the next render ([hook-state](https://albertprofe.dev/reactjs/reactjs-hook-state.html) §5), "How it works?" as a heading ([what-render-dom](https://albertprofe.dev/reactjs/reactjs-what-render-dom.html) §3).
- **Problem → solution framing**: "The problem" then "The solution" ([what-jsx](https://albertprofe.dev/reactjs/reactjs-what-jsx.html) §2–3; [hook-context](https://albertprofe.dev/reactjs/reactjs-hook-context.html) §3.1–3.2).
- **Occasional epigraph**: a short real quote from a known person as a blockquote ([what-principles](https://albertprofe.dev/reactjs/reactjs-what-principles.html) – Confucius, Frans de Waal; [what-props](https://albertprofe.dev/reactjs/reactjs-what-props.html) – Leonardo da Vinci; [hook-effect](https://albertprofe.dev/reactjs/reactjs-hook-effect.html) – Ryan Florence). **Team rule:** at most one per lesson, only if the quote and its author can be verified; never invent or paraphrase a quote.

## 2. Page structure

1. **Title** `# Topic` (Albert uses "React JS: Topic" / "ReactJS: useX"; our lessons use the lesson title).
2. **Opening card**: 📘 + **bold topic name**, then a one/two-line definition; for hooks, the signature in backticks (e.g. `useState(initialState)`, `useEffect(setup, dependencies?)`). Then a `---` rule. Seen on nearly every page ([hook-state](https://albertprofe.dev/reactjs/reactjs-hook-state.html), [hook-memo](https://albertprofe.dev/reactjs/reactjs-hook-memo.html), [hook-effect](https://albertprofe.dev/reactjs/reactjs-hook-effect.html), [app-events](https://albertprofe.dev/reactjs/reactjs-app-events.html), [what-components](https://albertprofe.dev/reactjs/reactjs-what-components.html)).
3. **Numbered sections**: `## 1 Overview` first, then concept sections, then examples ([what-components](https://albertprofe.dev/reactjs/reactjs-what-components.html), [app-events](https://albertprofe.dev/reactjs/reactjs-app-events.html), [app-conditional-render](https://albertprofe.dev/reactjs/reactjs-app-conditional-render.html)).
4. **Hook/API pages** add `Parameters` and `Returns` subsections ([hook-context](https://albertprofe.dev/reactjs/reactjs-hook-context.html) §2, [hook-effect](https://albertprofe.dev/reactjs/reactjs-hook-effect.html) §1, [hook-ref](https://albertprofe.dev/reactjs/reactjs-hook-ref.html) §1).
5. **Several small examples**: `## Example 1`, `## Example 2`… (also written `Example#1`) ([hook-state](https://albertprofe.dev/reactjs/reactjs-hook-state.html), [hook-reducer](https://albertprofe.dev/reactjs/reactjs-hook-reducer.html), [hook-effect](https://albertprofe.dev/reactjs/reactjs-hook-effect.html)). **Team rule:** use `Example 1` form consistently.
6. **Callouts**: Important (most used), Note, Tip, Warning ([app-events](https://albertprofe.dev/reactjs/reactjs-app-events.html) "Important" on passing vs calling; [what-render-dom](https://albertprofe.dev/reactjs/reactjs-what-render-dom.html) "Note").
7. **Closing references** list where useful ([hook-effect](https://albertprofe.dev/reactjs/reactjs-hook-effect.html) "Refs articles", [hook-memo](https://albertprofe.dev/reactjs/reactjs-hook-memo.html) "References").

## 3. Code-example habits

- **Filename label above the code block** (`App.js`, `profile.jsx`, `todolist.jsx`, `index.js`) ([what-components](https://albertprofe.dev/reactjs/reactjs-what-components.html), [what-jsx](https://albertprofe.dev/reactjs/reactjs-what-jsx.html), [hook-state](https://albertprofe.dev/reactjs/reactjs-hook-state.html)). We write it as a bold line: **`App.jsx`** then the fenced block.
- **Function components only**, usually `export default function Name() { … }` ([what-components](https://albertprofe.dev/reactjs/reactjs-what-components.html) §3–5, [app-events](https://albertprofe.dev/reactjs/reactjs-app-events.html)). No class components found in the captured pages.
- **Small, runnable, one-concept examples** (a counter, a button, a list) ([hook-state](https://albertprofe.dev/reactjs/reactjs-hook-state.html) §4, [app-events](https://albertprofe.dev/reactjs/reactjs-app-events.html) §2).
- **Same example in several forms** to compare syntax ([what-components](https://albertprofe.dev/reactjs/reactjs-what-components.html) §5: three ways to write `BookList`).
- **Skeletons with comment placeholders** to show structure ([what-jsx](https://albertprofe.dev/reactjs/reactjs-what-jsx.html) §3, business logic vs render).
- **Correct vs incorrect side by side** ([app-events](https://albertprofe.dev/reactjs/reactjs-app-events.html): passing vs calling a handler).
- **Numbered walk-through after the code** (1. export, 2. define, 3. add markup — [what-components](https://albertprofe.dev/reactjs/reactjs-what-components.html) §3; three steps to add a handler — [app-events](https://albertprofe.dev/reactjs/reactjs-app-events.html) §2).
- **Screenshot of the result + caption** after examples ([what-components](https://albertprofe.dev/reactjs/reactjs-what-components.html), [hook-state](https://albertprofe.dev/reactjs/reactjs-hook-state.html), [app-events](https://albertprofe.dev/reactjs/reactjs-app-events.html)). Lessons mark this as `<!-- screenshot: … -->` until Albert supplies images.
- **Credits the source of an example** with an "In this example" link (often to react.dev) ([hook-state](https://albertprofe.dev/reactjs/reactjs-hook-state.html) §4–5, [app-conditional-render](https://albertprofe.dev/reactjs/reactjs-app-conditional-render.html)). **Team rule:** our examples are our own; when inspired by react.dev, link it, don't copy it.

## 4. Team rules on top of Albert's habits

- English, plain GitHub markdown. Callouts as GitHub alerts (`> [!IMPORTANT]`, `> [!NOTE]`, `> [!TIP]`, `> [!WARNING]`) so they map cleanly to Quarto callouts later.
- Link react.dev (never `beta.reactjs.org` / `reactjs.org`); link Albert's page when a lesson builds on it.
- Never paste react.dev prose; paraphrase in Albert's voice and link.
- Modern defaults: React 19, `createRoot`, Vite; no CRA, no `ReactDOM.render`, no classes (see CURRICULUM.md Gaps C).
- Fix typos rather than carrying them over from reference pages.
- Stay in scope (React.md): no teaching HTML/JS/CSS; link Albert's JS/ES6 pages as prerequisites.
