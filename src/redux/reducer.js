import { ADD_TODO_ACTION, DELETE_TODO_ACTION, TOGGLE_CHECK } from "./action";
const initialState = {
  title: "",
  content: "",
  isChecked: false,
};
let todos = [];
let there = false;
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO_ACTION:
      there = false;
      todos.map((todo) => {
        if (todo.title === action.payload.title) {
          alert("This todo already there");
          there = true;
        }
        return there;
      });
      if (!there) todos.push(action.payload);
      return {
        todoList: [...todos],
      };
    case TOGGLE_CHECK:
      todos.map((todo) => {
        if (todo.title === action.payload.title) {
          todo.isChecked = action.payload.isChecked;
        }
      });
      return {
        todoList: [...todos],
      };
    case DELETE_TODO_ACTION:
      todos = todos.filter((todo) => {
        return todo.title !== action.payload.title;
      });
      return {
        todoList: [...todos],
      };
    default:
      return state;
  }
}

export default rootReducer;
