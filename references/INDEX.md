# References index

Starting references for the React course team (react-lead, react-writer, react-editor). Last updated 2026-10-30.

These are **reference material, not lesson content**. Lessons go in `lessons/` and must paraphrase and link, never copy, especially react.dev.

## 1. Albert's course TOC (primary reference)

| File | Title | What it is | Source |
|---|---|---|---|
| [`../React.md`](../React.md) | React (Core React Course) | Albert's 20-topic TOC and short detail per topic, plus a recommended 5-stage learning path. **Primary reference**: CURRICULUM.md follows its topics and order. Do not edit. | `main` branch, commit `4686a49` (2026-09-02) |

## 2. albertprofe.dev/reactjs pages (48 captured)

Crawled 2026-10-30 from the ReactJS sidebar of <https://albertprofe.dev/reactjs/reactjs-what-principles.html>, staying in `albertprofe.dev/reactjs/`. Saved in [`albertprofe-dev/`](albertprofe-dev/) as markdown (text + code blocks; images kept as links to albertprofe.dev). Each file has the source URL, sidebar section, published/modified dates and categories at the top. Sidebar order is kept below.

### ReactJS: Principles

| File | Title | What it is | Last modified | Source |
|---|---|---|---|---|
| [`reactjs-what-principles.md`](albertprofe-dev/reactjs-what-principles.md) | React JS: Introduction | Intro to React: library for UIs, main features (SPA, components, VDOM, JSX, state, props, routing), hooks vs classes, history, quick start. | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/reactjs-what-principles.html> |
| [`reactjs-what-render-dom.md`](albertprofe-dev/reactjs-what-render-dom.md) | React JS: render virtual DOM | Virtual DOM, diffing and reconciliation explained with diagrams. | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/reactjs-what-render-dom.html> |
| [`reactjs-what-create.md`](albertprofe-dev/reactjs-what-create.md) | React JS: Create a React project | Project setup: nvm/Node, React in plain HTML, create-react-app, React DevTools, folder structure, debugging. | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/reactjs-what-create.html> |
| [`reactjs-what-components.md`](albertprofe-dev/reactjs-what-components.md) | React JS: Components | Components and the component-oriented paradigm; defining/using components; three ways to write and export one. | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/reactjs-what-components.html> |
| [`reactjs-what-jsx.md`](albertprofe-dev/reactjs-what-jsx.md) | React JS: JSX | JSX: why markup lives in JS, what React does not do (styling), rules of JSX, curly braces. | Tuesday, November 4, 2025 | <https://albertprofe.dev/reactjs/reactjs-what-jsx.html> |
| [`reactjs-what-props.md`](albertprofe-dev/reactjs-what-props.md) | React JS: props and state | Props (passing data parent→child), pure/stateless components, state and the update/render cycle, immutability, snapshot and updater examples. | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/reactjs-what-props.html> |

### JavaScript: web scripting

| File | Title | What it is | Last modified | Source |
|---|---|---|---|---|
| [`reactjs-js-basics.md`](albertprofe-dev/reactjs-js-basics.md) | JavaScript: basics | JavaScript prerequisites: running order, interpreted vs compiled, client vs server, variables, comments, operators. | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/reactjs-js-basics.html> |
| [`reactjs-js-functions.md`](albertprofe-dev/reactjs-js-functions.md) | JavaScript: functions | JavaScript functions: built-in vs custom, functions vs methods, invoking. | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/reactjs-js-functions.html> |
| [`reactjs-js-objects.md`](albertprofe-dev/reactjs-js-objects.md) | JavaScript: objects | JavaScript objects: dot notation, this, mutability, destructuring, shorthand properties, prototypes. | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/reactjs-js-objects.html> |
| [`reactjs-js-variables.md`](albertprofe-dev/reactjs-js-variables.md) | JavaScript: variables | JavaScript var / let / const. | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/reactjs-js-variables.html> |
| [`reactjs-js-flux.md`](albertprofe-dev/reactjs-js-flux.md) | JavaScript: flux control | JavaScript control flow: conditionals and loops (for…of, for…in, while). | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/reactjs-js-flux.html> |

### ES6: ECMAScript 6

| File | Title | What it is | Last modified | Source |
|---|---|---|---|---|
| [`reactjs-es6-arrow.md`](albertprofe-dev/reactjs-es6-arrow.md) | React JS ES6: arrow functions | ES6 arrow functions as used in React code. | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/reactjs-es6-arrow.html> |
| [`reactjs-es6-import.md`](albertprofe-dev/reactjs-es6-import.md) | React JS ES6: import modules | ES6 modules: exporting and importing components (default vs named). | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/reactjs-es6-import.html> |
| [`reactjs-es6-data.md`](albertprofe-dev/reactjs-es6-data.md) | React JS ES6: array, data and key | Arrays of data rendered as lists with map/filter and the key prop. | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/reactjs-es6-data.html> |
| [`reactjs-es6-destructuring.md`](albertprofe-dev/reactjs-es6-destructuring.md) | React JS ES6: destructuring | ES6 destructuring: arrays, rest, swapping, function arguments, objects (props). | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/reactjs-es6-destructuring.html> |
| [`reactjs-es6-spread.md`](albertprofe-dev/reactjs-es6-spread.md) | React JS ES6: spread operator | ES6 spread operator; copying objects with spread. | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/reactjs-es6-spread.html> |

### ReacJS 18: Hooks

| File | Title | What it is | Last modified | Source |
|---|---|---|---|---|
| [`reactjs-hook-rules.md`](albertprofe-dev/reactjs-hook-rules.md) | React JS: Rules of Hooks | Rules of Hooks (top level only, only from React functions) and the ESLint plugin. | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/reactjs-hook-rules.html> |
| [`reactjs-hook-state.md`](albertprofe-dev/reactjs-hook-state.md) | ReactJS: useState | useState: signature, why hooks replaced classes, counter examples, queued updates, updating arrays without mutation. | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/reactjs-hook-state.html> |
| [`reactjs-hook-reducer.md`](albertprofe-dev/reactjs-hook-reducer.md) | React JS: useReducer | useReducer: signature, dispatch, two worked examples. | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/reactjs-hook-reducer.html> |
| [`reactjs-hook-ref.md`](albertprofe-dev/reactjs-hook-ref.md) | React JS: useRef | useRef: signature and three examples (values and DOM). | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/reactjs-hook-ref.html> |
| [`reactjs-hook-effect.md`](albertprofe-dev/reactjs-hook-effect.md) | React JS: useEffect | useEffect: signature, synchronizing with external systems, effects vs events, cleanup, examples. | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/reactjs-hook-effect.html> |
| [`reactjs-hook-context.md`](albertprofe-dev/reactjs-hook-context.md) | React JS: useContext | useContext: prop-drilling problem, context as solution, provider/consumer examples. | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/reactjs-hook-context.html> |
| [`reactjs-hook-memo.md`](albertprofe-dev/reactjs-hook-memo.md) | ReactJS: useMemo | useMemo: caching expensive calculations, dependencies, one example. | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/reactjs-hook-memo.html> |
| [`reactjs-hook-custom.md`](albertprofe-dev/reactjs-hook-custom.md) | ReactJS: custom hooks | Custom hooks: extracting reusable logic, useFetch example with JSONPlaceholder. | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/reactjs-hook-custom.html> |

### ReactJS: Designing an App

| File | Title | What it is | Last modified | Source |
|---|---|---|---|---|
| [`reactjs-app-async.md`](albertprofe-dev/reactjs-app-async.md) | React JS App: async | Async JavaScript (sync vs async, async/await, fetch) and a queued-updates marketplace example. | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/reactjs-app-async.html> |
| [`reactjs-app-events.md`](albertprofe-dev/reactjs-app-events.md) | React JS App: events | Event handlers: adding them, passing vs calling, passing handlers as props. | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/reactjs-app-events.html> |
| [`reactjs-app-router.md`](albertprofe-dev/reactjs-app-router.md) | React JS App: router | React Router: install, folder tree, routes setup with createRoot. | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/reactjs-app-router.html> |
| [`reactjs-app-conditional-render.md`](albertprofe-dev/reactjs-app-conditional-render.md) | React JS App: conditional render | Conditional rendering: if, ternary, returning JSX conditionally; crosswalk example. | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/reactjs-app-conditional-render.html> |
| [`reactjs-app-styling.md`](albertprofe-dev/reactjs-app-styling.md) | React JS App: styling | Styling options: Sass, Tailwind, Semantic UI, Material UI, w3.css, Bootstrap. | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/reactjs-app-styling.html> |

### React JS: Laboratories

| File | Title | What it is | Last modified | Source |
|---|---|---|---|---|
| [`rjslab1.md`](albertprofe-dev/rjslab1.md) | Lab#RE01-1: API Rest Axios | Lab: book list from Open Library REST API with Axios, loading state. | Monday, September 21, 2026 | <https://albertprofe.dev/reactjs/rjslab1.html> |
| [`rjslab2.md`](albertprofe-dev/rjslab2.md) | Lab#RE02-1: Router & Hooks | Lab: react-router-dom + Axios + useState/useEffect/useReducer. | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/rjslab2.html> |
| [`rjslab3.md`](albertprofe-dev/rjslab3.md) | Lab#RE03-1: to-do app | Lab: to-do app with router, Semantic UI, useReducer/useContext. | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/rjslab3.html> |
| [`rjslab3-2.md`](albertprofe-dev/rjslab3-2.md) | Lab#RE03-2: HighCharts | Lab: Highcharts React wrapper for charts. | Wednesday, November 20, 2024 | <https://albertprofe.dev/reactjs/rjslab3-2.html> |
| [`rjslab3-3.md`](albertprofe-dev/rjslab3-3.md) | Lab#RE03-3: API Rest Mono | Lab: CRUD to-do with Axios/Fetch against MockAPI. | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/rjslab3-3.html> |
| [`rjslab3-4.md`](albertprofe-dev/rjslab3-4.md) | Lab#RE03-4: API Rest Domains | Lab: to-do split into service layer (Axios), Context repository and UI components. | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/rjslab3-4.html> |
| [`rjslab3-5.md`](albertprofe-dev/rjslab3-5.md) | Lab#RE03-5: data management | Lab: data management with Context API, local storage, Redux/Zustand stores. | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/rjslab3-5.html> |
| [`rjslab4.md`](albertprofe-dev/rjslab4.md) | Lab#RE04-1: todo & server | Lab: feeding the to-do app from Feathers JS / Spring Boot / AWS servers. | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/rjslab4.html> |
| [`rjslab4-2.md`](albertprofe-dev/rjslab4-2.md) | Lab#RE04-2: Spring Boot & ReactJS | Lab: Spring Boot REST backend + React to-do front end. | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/rjslab4-2.html> |
| [`rjslab5-1.md`](albertprofe-dev/rjslab5-1.md) | Lab#RE05-1: chat & websockets | Lab series intro: chat app with websockets, router and AWS. | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/rjslab5-1.html> |
| [`rjslab5-2.md`](albertprofe-dev/rjslab5-2.md) | Lab#RE05-2: chat: backend | Lab: chat backend on AWS. | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/rjslab5-2.html> |
| [`rjslab5-3.md`](albertprofe-dev/rjslab5-3.md) | Lab#RE05-3: chat & AWS | Lab: chat and AWS setup. | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/rjslab5-3.html> |
| [`rjslab5-4.md`](albertprofe-dev/rjslab5-4.md) | Lab#RE05-4: chat: test ws AWS | Lab: testing the AWS websocket. | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/rjslab5-4.html> |
| [`rjslab5-5.md`](albertprofe-dev/rjslab5-5.md) | Lab#RE05-5: chat & front | Lab: chat front end. | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/rjslab5-5.html> |
| [`rjslab5-6.md`](albertprofe-dev/rjslab5-6.md) | Lab#RE05-6: chat & ws: front | Lab: chat websocket front end. | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/rjslab5-6.html> |
| [`rjslab6-1.md`](albertprofe-dev/rjslab6-1.md) | Lab#RE06-1: healthyFood Restaurant | Lab: healthyFood restaurant app (CRA, w3.css, JSX components, JSON array as model). | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/rjslab6-1.html> |
| [`rjslab6-1-PR.md`](albertprofe-dev/rjslab6-1-PR.md) | Lab#RE06-1-PR: create a pull request | Lab: how to open a GitHub pull request for the healthyFood lab. | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/rjslab6-1-PR.html> |
| [`rjslab7-1.md`](albertprofe-dev/rjslab7-1.md) | Lab#RE07-1: traffic lights simulation | Lab: traffic-lights simulation (Vite, inline styles, hooks, timeouts). | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/rjslab7-1.html> |

### React JS readings

| File | Title | What it is | Last modified | Source |
|---|---|---|---|---|
| [`resources.md`](albertprofe-dev/resources.md) | ReactJS Resources | Short list of external React readings and sites. | Friday, November 1, 2024 | <https://albertprofe.dev/reactjs/resources.html> |

Not captured: `../learning/learning-vocab-reactjs.html` (linked from the sidebar but outside `/reactjs/`).
## 3. react.dev/learn (official docs, starting reference)

Learning order as shown in the react.dev sidebar, read 2026-10-30 from <https://react.dev/learn/describing-the-ui>. **Link only. Never copy react.dev text into lessons; paraphrase and link.** Not saved locally.

### Get Started

| Page | URL |
|---|---|
| Quick Start | <https://react.dev/learn> |
| Tutorial: Tic-Tac-Toe | <https://react.dev/learn/tutorial-tic-tac-toe> |
| Thinking in React | <https://react.dev/learn/thinking-in-react> |
| Installation | <https://react.dev/learn/installation> |
| ↳ Creating a React App | <https://react.dev/learn/creating-a-react-app> |
| ↳ Build a React App from Scratch | <https://react.dev/learn/build-a-react-app-from-scratch> |
| ↳ Add React to an Existing Project | <https://react.dev/learn/add-react-to-an-existing-project> |
| Setup | <https://react.dev/learn/setup> |
| ↳ Editor Setup | <https://react.dev/learn/editor-setup> |
| ↳ Using TypeScript | <https://react.dev/learn/typescript> |
| ↳ React Developer Tools | <https://react.dev/learn/react-developer-tools> |
| React Compiler | <https://react.dev/learn/react-compiler> |
| ↳ Introduction | <https://react.dev/learn/react-compiler/introduction> |
| ↳ Installation | <https://react.dev/learn/react-compiler/installation> |
| ↳ Incremental Adoption | <https://react.dev/learn/react-compiler/incremental-adoption> |
| ↳ Debugging and Troubleshooting | <https://react.dev/learn/react-compiler/debugging> |

### Learn React

| Section | Page | URL |
|---|---|---|
| **Describing the UI** | (overview) | <https://react.dev/learn/describing-the-ui> |
| | Your First Component | <https://react.dev/learn/your-first-component> |
| | Importing and Exporting Components | <https://react.dev/learn/importing-and-exporting-components> |
| | Writing Markup with JSX | <https://react.dev/learn/writing-markup-with-jsx> |
| | JavaScript in JSX with Curly Braces | <https://react.dev/learn/javascript-in-jsx-with-curly-braces> |
| | Passing Props to a Component | <https://react.dev/learn/passing-props-to-a-component> |
| | Conditional Rendering | <https://react.dev/learn/conditional-rendering> |
| | Rendering Lists | <https://react.dev/learn/rendering-lists> |
| | Keeping Components Pure | <https://react.dev/learn/keeping-components-pure> |
| | Your UI as a Tree | <https://react.dev/learn/understanding-your-ui-as-a-tree> |
| **Adding Interactivity** | (overview) | <https://react.dev/learn/adding-interactivity> |
| | Responding to Events | <https://react.dev/learn/responding-to-events> |
| | State: A Component's Memory | <https://react.dev/learn/state-a-components-memory> |
| | Render and Commit | <https://react.dev/learn/render-and-commit> |
| | State as a Snapshot | <https://react.dev/learn/state-as-a-snapshot> |
| | Queueing a Series of State Updates | <https://react.dev/learn/queueing-a-series-of-state-updates> |
| | Updating Objects in State | <https://react.dev/learn/updating-objects-in-state> |
| | Updating Arrays in State | <https://react.dev/learn/updating-arrays-in-state> |
| **Managing State** | (overview) | <https://react.dev/learn/managing-state> |
| | Reacting to Input with State | <https://react.dev/learn/reacting-to-input-with-state> |
| | Choosing the State Structure | <https://react.dev/learn/choosing-the-state-structure> |
| | Sharing State Between Components | <https://react.dev/learn/sharing-state-between-components> |
| | Preserving and Resetting State | <https://react.dev/learn/preserving-and-resetting-state> |
| | Extracting State Logic into a Reducer | <https://react.dev/learn/extracting-state-logic-into-a-reducer> |
| | Passing Data Deeply with Context | <https://react.dev/learn/passing-data-deeply-with-context> |
| | Scaling Up with Reducer and Context | <https://react.dev/learn/scaling-up-with-reducer-and-context> |
| **Escape Hatches** | (overview) | <https://react.dev/learn/escape-hatches> |
| | Referencing Values with Refs | <https://react.dev/learn/referencing-values-with-refs> |
| | Manipulating the DOM with Refs | <https://react.dev/learn/manipulating-the-dom-with-refs> |
| | Synchronizing with Effects | <https://react.dev/learn/synchronizing-with-effects> |
| | You Might Not Need an Effect | <https://react.dev/learn/you-might-not-need-an-effect> |
| | Lifecycle of Reactive Effects | <https://react.dev/learn/lifecycle-of-reactive-effects> |
| | Separating Events from Effects | <https://react.dev/learn/separating-events-from-effects> |
| | Removing Effect Dependencies | <https://react.dev/learn/removing-effect-dependencies> |
| | Reusing Logic with Custom Hooks | <https://react.dev/learn/reusing-logic-with-custom-hooks> |

Also used for the "outdated content" notes in CURRICULUM.md:
- Sunsetting Create React App (2025-02-14): <https://react.dev/blog/2025/02/14/sunsetting-create-react-app>
- React 19 Upgrade Guide (removal of `ReactDOM.render`): <https://react.dev/blog/2024/04/25/react-19-upgrade-guide>

## 4. Other places checked

| Place | Result (2026-10-30) |
|---|---|
| Google Drive folder `react` — <https://drive.google.com/drive/folders/1OPIc19pSdcc3C509HxCbvZF-ZotUBW3Y> | **Empty** (listed via the Drive connector; folder created 2026-10-30, owner Albert Profe). Nothing to capture yet. |
| Albert's local course folder | **Empty for now** (as reported by Albert; not accessed by the team). |
