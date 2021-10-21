import rootReducer from "./reducer";
import CounterReducer from "./reducerCounter";
import { combineReducers } from "redux";
const reducers = combineReducers({
  TodoReducer: rootReducer,
  CounterReducer: CounterReducer,
});
export default reducers;
