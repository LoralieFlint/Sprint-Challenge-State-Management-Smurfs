1. What problem does the context API help solve?
A. Context API allows you to pass down data to just the components that need it instead of prop drilling

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
A. Actions are the changes in state.
    Reducers respond to the actions that are made and updates the state.
    Store holds all of the state of the application.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
A. Component state is local to that component where as application state is global to the whole application
    Application state is best used if there will be changes to that said state in many components. Use component state when state only changes within the one component.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
A. Redux-thunk allows for asynchronus action creators.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
A. Im really enjoying redux ive tried to learn it before with FCC and it kinda made sense but now at Lambda made a lightbulb light up in my head.

