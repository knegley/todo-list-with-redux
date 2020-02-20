import React /*{ useContext }*/ from "react";
// import { useCallback } from "react";
// import { DispatchContext } from "./App";
import { toggleToDo, deleteToDo } from "./actions";
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
                onClick={() => dispatch(toggleToDo(index, item))}
              ></input>
              <label>{toDo[index].title}</label>
              <button
                className="destroy"
                onClick={() => dispatch(deleteToDo(index, item))}
              ></button>
            </div>
          </li>
        </ul>{" "}
      </section>
    );
  });
};

export default ToDoList;
