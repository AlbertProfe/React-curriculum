
# React

## Summary 

> Core React Course (no HTML / JS / TS / CSS — pure React mental models & concepts) This course follows the exact topic list you shared and stays strictly on React’s core ideas: components, the render tree, props, state, updates, and data flow.

## TOC

 1. What is React and why is it so relevant?
 2. JSX: describing the UI
 3. What is not React
 4. React is a component tree rendering
 5. Passing props to a component
 6. Conditional rendering
 7. Rendering lists
 8. Events and handlers: passing and calling
 9. State: A Component’s Memory
10. Render and Commit
11. State as a Snapshot
12. Queueing a Series of State Updates
13. Objects in State
14. Arrays in State
15. Sharing State Between Components
16. Preserving and Resetting State
17. Reducer
18. Context
19. Purity of components
20. Effects

## Detail

**1. What is React and why is it so relevant?**

React is a library for building user interfaces by describing them as a tree of components.  
 You declare *what* the UI should look like for a given state; React figures out *how* to update the real UI efficiently.

Why it matters:

- Component model → reusable & composable
- Declarative style → fewer bugs
- Unidirectional data flow → predictable
- Virtual representation of the UI → fast updates

React only cares about the view layer.

**2. JSX: describing the UI**

JSX is a syntax that lets you write the structure of your UI in a way that looks familiar, but under the hood it creates plain JavaScript objects called React elements.

Mental model:  
 JSX → React elements → component tree

It is **not** HTML. It is just a convenient way to create the objects React works with.

**3. What is not React**

React does **not**:

- Handle routing
- Manage global application state by itself
- Provide data fetching or form libraries
- Own the real DOM

React only produces a description of the UI. Everything else lives outside of it.

**4. React is a component tree rendering**

Everything in React is a tree of components.  
 A component is a function that returns a description of UI (React elements).

When React renders it:

1. Calls your components
2. Collects the tree of elements
3. Diffs it against the previous tree
4. Applies the minimal changes to the host environment

The whole application is one big component tree.

**5. Passing props to a component**

Props are how a parent passes data down to a child.  
 They are read-only from the child’s point of view.

- Parent owns the data
- Child receives a snapshot via props
- Changing props causes the child to re-render

Data flows only downward.

**6. Conditional rendering**

You decide what to show by returning different element trees based on conditions (usually from props or state).

React simply renders whatever tree you return — including null when you want to hide something.

**7. Rendering lists**

When you have an array of data, you produce an array of elements.  
 Each element needs a stable **key** so React can match items across renders and reuse existing component instances efficiently.

Keys express identity, not position.

**8. Events and handlers: passing and calling**

You pass functions as props (event handlers).  
 When the event occurs, React calls that function.

Important distinction:

- Passing a function → the child can call it later
- Calling a function during render → runs immediately (usually wrong)

Handlers close over the state and props from the render in which they were created.

**9. State: A Component’s Memory**

State is data that belongs to a component and can change over time.  
 When state changes, React re-renders the component (and its children).

State is:

- Private to the component (unless shared)
- The reason a component can be interactive
- The source of truth for that component’s dynamic data

**10. Render and Commit**

Two distinct phases:

**Render phase**  
 React calls your components, builds the new element tree, and calculates the differences. This phase must be pure.

**Commit phase**  
 React applies the changes to the host environment and runs effects.

Understanding this separation is fundamental.

**11. State as a Snapshot**

The state values you read during a render are a snapshot of the state at the beginning of that render.  
 They do not change until the next render.

This explains why event handlers see the state from the render in which they were created.

**12. Queueing a Series of State Updates**

When you update state multiple times in the same event, React queues the updates.  
 By default they all see the same previous state.  
 Using the functional updater form lets each update see the result of the previous one.

**13. Objects in State**

State must be treated as immutable.  
 To change an object you create a **new** object with the desired changes instead of mutating the existing one.

React relies on this to detect changes.

**14. Arrays in State**

Same rule as objects: never mutate.  
 To add, remove, or update items you always produce a new array.

**15. Sharing State Between Components**

When two components need the same state:

- Lift the state up to their closest common ancestor
- Pass the state down via props
- Pass updater functions down so children can request changes

This keeps a single source of truth.

**16. Preserving and Resetting State**

React preserves state as long as the component stays in the same position in the tree (same type + same key).

To reset state you can:

- Change the key
- Conditionally render a different component type
- Move the component to a different place in the tree

Component identity in the tree controls state lifetime.

**17. Reducer**

When state logic becomes complex, extract the update logic into a pure reducer function:

(state, action) => newState

You dispatch actions that describe *what happened*.  
 The reducer decides *how the state changes*.

This centralizes logic and makes it easier to reason about.

**18. Context**

Context lets you pass data through the tree without manually threading props at every level.

Best used for data that many components at different depths need (theme, current user, locale…).  
 Overusing it can make data flow harder to follow.

**19. Purity of components**

A component must be a pure function with respect to its props and state:

- Same inputs → same output
- No side effects during render
- No mutations of existing objects/arrays
- No reading or writing external mutable values during render

Purity is what allows React to safely re-render, batch updates, and potentially render multiple times.

**20. Effects**

Effects let a component synchronize with systems outside of React (network, browser APIs, third-party libraries, subscriptions, etc.).

They run **after** the commit phase.  
 You declare:

- What to do (the effect)
- When to re-run it (dependencies)
- How to clean it up

Effects are the bridge between React’s pure world and the impure outside world.

## **Recommended learning path**

**Foundation (1–4)** → What React actually is  
 **Data flow (5–8)** → Props & events  
 **State mastery (9–16)** → Ownership, updates, identity  
 **Scaling (17–18)** → Complex state & deep data  
 **Correctness & side effects (19–20)** → Purity + Effects

This 20-topic list is a complete, modern core React curriculum.