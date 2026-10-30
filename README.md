# React-curriculum — Core React course (MOOC4ALL / mooc4class)

Working repo for Albert Profe's **Core React** course: pure React mental models (components, render tree, props, state, updates, data flow, effects), written in English markdown. The topic list and order come from Albert's [`React.md`](React.md).

## Team

| Role | Who | Does |
|---|---|---|
| react-lead | Grok Bot agent | References, curriculum, style guide, assigns lessons, tracks progress, marks lessons "ready for Albert" |
| react-writer | Grok Bot agent | Drafts lessons from the template, curriculum and references |
| react-editor | Grok Bot agent | Edits drafts for accuracy, scope, style and links |
| **Albert Profe** | author / owner | **Final reviewer.** Approves the curriculum and each lesson; the only one who merges to `main` |

## Branch rule

- **All team work happens on `drafts`.** The team never pushes to, merges into, or opens PRs against `main`.
- `main` holds Albert's approved content (today: `React.md`). **Albert merges `drafts` → `main`** when he is happy.
- `React.md` is Albert's file: read it, don't edit it.

## Workflow

1. react-lead proposes [`CURRICULUM.md`](CURRICULUM.md) → **Albert approves** (current step: PROPOSED).
2. react-writer drafts `lessons/MM-LL-slug.md` from [`LESSON-TEMPLATE.md`](LESSON-TEMPLATE.md) following [`STYLE-GUIDE.md`](STYLE-GUIDE.md).
3. react-editor edits; react-lead checks and marks "ready for Albert" in [`PROGRESS.md`](PROGRESS.md).
4. Albert reviews and merges.

## File map

| Path | What |
|---|---|
| `React.md` | Albert's 20-topic TOC (primary reference, from `main`) |
| `README.md` | This file |
| `CURRICULUM.md` | Proposed modules, lessons, goals, sources, gaps, open questions |
| `STYLE-GUIDE.md` | How Albert writes (tone, structure, code habits), with cited pages |
| `LESSON-TEMPLATE.md` | Skeleton every lesson starts from |
| `PROGRESS.md` | Lesson status table |
| `DECISIONS.md` | Dated decision log |
| `lessons/` | Lesson files, named `MM-LL-slug.md` (module-lesson-slug), e.g. `lessons/01-02-jsx-describing-the-ui.md` |
| `references/INDEX.md` | Index of all references (React.md, albertprofe.dev pages, react.dev/learn map, Drive/local status) |
| `references/albertprofe-dev/` | 48 pages captured from albertprofe.dev/reactjs as markdown (reference only) |

## Rules of thumb

- Paraphrase and link react.dev; never copy its text.
- Don't invent facts, quotes, or references.
- Stay in React.md's scope; JS/ES6 are prerequisites, not lessons.
