1. What problem does the context API help solve?

Context API allows for props that are required by many components without have to explicitly pass a prop through every level of the tree.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? 

The store holds the applications state. Actions tell reducers how to update the state. Reducers update the state.


Why is the store known as a 'single source of truth' in a redux application?

Because it is where the applications state is.


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is useful for that developers may fear may go into inconstistent state. Component state is good when this is not a fear.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk allows us to apply middleware. It allows action creators to return function instead of an object.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I really don't know yet, but I am excited there are good options!
