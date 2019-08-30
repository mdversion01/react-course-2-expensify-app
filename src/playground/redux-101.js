import { createStore } from 'redux';

// Action generators - functions that return action

// const add = (data) => {
//     return data.a + data.b;
// }

//Destructuring the Action above
// const add = ({ a, b}, c) => {
//     return a + b + c;
// }

// console.log(add({a: 1, b: 12}, 100));

// const incrementCount = (payload = {}) => ({
//     type: 'INCREMENT',
//     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1  
// });

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

// REDUCERS
// 1. Reducers are pure function 
// 2. Never change state or action
   
const countReducer = (state = { count: 0 }, action ) => {
    switch (action.type) {
        case 'INCREMENT':
            // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - action.decrementBy
            }; 
        case 'SET':
            return {
                count: action.count
            };    
        case 'RESET':
            return {
                count: 0
            };       
        default:
            return state;
    }
};    

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

// store.dispatch({
//     type: 'INCREMENT'
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

// store.dispatch({
//     type: 'RESET'
// });

store.dispatch(resetCount());

store.dispatch(decrementCount()); 

store.dispatch(decrementCount({ decrementBy: 10})); 

// store.dispatch({
//     type: 'SET',
//     count: 101
// })

store.dispatch(setCount({count: 101}));
