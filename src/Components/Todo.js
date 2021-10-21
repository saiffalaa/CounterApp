import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, delTodo, togCheck } from "../redux/action";

const Todo = () => {
  const [desc, setDesc] = useState("");
  const [titles, setTitle] = useState("");
  // const [isChecked, setIsChecked] = useState(false);
  const todos = useSelector((state) => state.TodoReducer.todoList);
  const dispacth = useDispatch();

  const sumbitMethod = (e) => {
    e.preventDefault();
    dispacth(addTodo(titles, desc, false));
    setDesc("");
    setTitle("");
    // console.log(todos);
  };
  const handleDelete = (title, content) => {
    dispacth(delTodo(title, content));
  };
  return (
    <div className="w-100">
      <form className="d-flex flex-column w-25 mx-auto justify-content-center">
        <input
          placeholder="Enter Todo Title"
          value={titles}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="mt-3 mb-3"
          placeholder="Enter todo Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button
          className="btn btn-primary"
          type="submit"
          onClick={sumbitMethod}
          disabled={!titles || !desc}
        >
          ADD
        </button>
      </form>
      <div className="w-75 mx-auto mt-5 shadow p-3">
        {todos?.length > 0 ? (
          todos.map((todo, index) => (
            // console.log(todo.isChecked);
            <div
              key={index}
              className={`d-flex justify-content-between align-items-center ${
                todo.isChecked ? "text-decoration-line-through" : ""
              }`}
            >
              <div className="d-flex align-items-center">
                <input
                  type="checkbox"
                  value={todo.isChecked}
                  onChange={(e) =>
                    dispacth(togCheck(todo.title, todo.desc, e.target.checked))
                  }
                />
                <div className="ms-3">
                  <p className="fw-bold p-0 m-0 ">{todo.title}</p>
                  <p>{todo.content}</p>
                </div>
              </div>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(todo.title, todo.content)}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <h1>No TODOS</h1>
        )}
      </div>
    </div>
  );
};

export default Todo;
