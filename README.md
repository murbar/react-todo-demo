# I made a to-do app with React 🤘

My first time using react was three days ago. I was able to bang out this little todo app from scratch in about 10 hours. I'm excited to see what I can build with a bit more experience working with the framework.

[See it in action.](https://joels-react-todo-app.netlify.com/)

## Features

- Add tasks
- Remove tasks
- Toggle tasks completed/uncompleted
- Toggle visibility of completed tasks
- Clean design
- Smooth UI transitions
- Data persistence via `localStorage`

## Possible enhancements

- Ability to reorder tasks
- Filter tasks displayed with search input
- Multiple task lists
- Persist app data to server

## What I learned about React

- React is fun!
- React makes building complex UIs relatively easy
- UI components "react" to changes in their state
  - No need to manually update the DOM each time application state changes
  - React only updates the DOM where necessary to match application state
  - This makes React fast
- JSX is not as inelegant as I initially thought
  - It's a friendly way to declare UI components, saving us from calls to `React.createElement()`
  - We have the full power of JavaScript in our component "templates"
- Each component can have its own `state` and handle its own events
  - State is not mutated directly, we use `setState()`
  - Calls to `setState()` are asynchronous, we can pass a callback for better control
  - React's synthetic events give us better performance
- We can compose many simple components into complex apps
- Data is passed between components via `props`
  - `props` are read-only
- When two components need to share `state` we hoist it to the nearest common ancestor component
  - Data flows down the component tree via `props`
- Functional and class components are different
  - Class components allow us to store/mutate state and tap component life cycle methods
  - Functional components may be easier to reason about (no `this`!)
  - Hooks are an exciting new addition to the framework that will allow functional components to fulfill the same role as class components
- We can use controlled components for two-way data binding on form elements
- Life cycle methods like allow us to run arbitrary code when state changes or when components are instantiated and destroyed

## What I'll need to investigate further

- Hooks
- Ref forwarding
- Uncontrolled components
