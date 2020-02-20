import React /*{ useContext }*/ from "react";
// import { DispatchContext } from "./App";
import { ADD_TODO } from "./actions";
import { useDispatch } from "react-redux";

const Header = () => {
  // const dispatch = useContext(DispatchContext);
  const dispatch = useDispatch();

  const keyDownHandler = event => {
    if ((event.key === "Enter") & (event.target.value.length > 0)) {
      // setListText(event.target.value);
      const addedToDo = {
        userId: 1,
        id: Math.floor(Math.random() * 100000),
        title: event.target.value,
        completed: false
      };
      dispatch({ type: ADD_TODO, addedToDo });
      event.target.value = "";
    }
  };

  return (
    <React.Fragment>
      <header className="header">
        <h1 className="header">todos</h1>
        <input
          className="new-todo"
          type="text"
          placeholder="type to do"
          autoFocus
          onKeyDown={keyDownHandler}
        ></input>
      </header>
    </React.Fragment>
  );
};

export default Header;
