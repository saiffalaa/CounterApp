export const ADD_TODO_ACTION = "ADD-TODO";
export const DELETE_TODO_ACTION = "DELETE-TODO";
export const ADD_COUNT_ACTION = "ADD_COUNT";
export const TOGGLE_CHECK = "TOGGLE_CHECK";
export const addTodo = (title, content, isChecked) => {
  return {
    type: ADD_TODO_ACTION,
    payload: {
      title: title,
      content: content,
      isChecked: isChecked,
    },
  };
};
export const togCheck = (title, content, isChecked) => {
  return {
    type: TOGGLE_CHECK,
    payload: {
      title: title,
      content: content,
      isChecked: isChecked,
    },
  };
};
export const delTodo = (title, content, isChecked) => {
  return {
    type: DELETE_TODO_ACTION,
    payload: {
      title: title,
      content: content,
      isChecked: isChecked,
    },
  };
};
export const addCounter = (count) => {
  return {
    type: ADD_COUNT_ACTION,
    payload: {
      counter: count,
    },
  };
};
