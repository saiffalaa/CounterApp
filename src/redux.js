const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  counter: 0,
};

const rootReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      counter: state.counter + action.payload,
    };
  } else return state;
};

export const store = createStore(rootReducer);
console.log(store.getState());
