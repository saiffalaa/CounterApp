import { ADD_COUNT_ACTION } from "./action";
const initialState = {
  counter: 0,
};

function CounterReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COUNT_ACTION:
      return {
        counter: action.payload.counter,
      };
    default:
      return state;
  }
}

export default CounterReducer;
