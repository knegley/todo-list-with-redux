import React /*{ useContext }*/ from "react";
// import { DispatchContext } from "./App";
import { TOGGLE_TODO, DELETE_TODO } from "./actions";
import { useDispatch } from "react-redux";

const ToDoList = ({ toDo }) => {
  // const dispatch = useContext(DispatchContext);
  const dispatch = useDispatch();

  return toDo.map((item, index) => {
    return (
      <section className="main" key={item.id}>
        <ul className="todo-list">
          <li className={toDo[index].completed ? "completed" : null}>
            <div className="view">
              <input
                type="checkbox"
                className="toggle"
                onClick={() => dispatch({ type: TOGGLE_TODO, index, item })}
              ></input>
              <label>{toDo[index].title}</label>
              <button
                className="destroy"
                onClick={() => dispatch({ type: DELETE_TODO, index, item })}
              ></button>
            </div>
          </li>
        </ul>{" "}
      </section>
    );
  });
};

export default ToDoList;
