import { createStore } from "redux";

// Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: "INCREMENT",
    incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: "DECREMENT",
    decrementBy: decrementBy
});

const setCount = ({ count } = {}) => ({
    type: "SET",
    count: count
});

const resetCount = () => ({
    type: "RESET"
});

// Reducers
// 1. Reducers are pure functions (output depends on input)
// 2. Never change state or action !!!

const countReducer = (state = { count: 0 }, action) => {
    console.log(action);

    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + action.incrementBy
            };
        case "DECREMENT":
            return {
                count: state.count - action.decrementBy
            };
        case "RESET":
            return {
                count: 0
            };
        case "SET":
            return {
                count: action.count
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

store.subscribe(() => {
    console.log("CURRENT STATE > ", store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 77 }));

store.dispatch(resetCount());

// OLD WAY

// Increment the count
// store.dispatch({
//     type: "INCREMENT",
//     incrementBy: 5
// });

// Decrement the count
// store.dispatch({
//     type: "DECREMENT",
//     decrementBy: 5
// });

// Reset the count
// store.dispatch({
//     type: "RESET"
// });

// store.dispatch({
//     type: "SET",
//     count: 10
// });
