import React, { useContext } from "react";
import { DispatchContext } from "./App";

const Header = () => {
  const dispatch = useContext(DispatchContext);

  const keyDownHandler = event => {
    if (event.key === "Enter") {
      // setListText(event.target.value);
      const addedToDo = {
        userId: 1,
        id: Math.floor(Math.random() * 100000),
        title: event.target.value,
        completed: false
      };
      dispatch({ type: "add", addedToDo });
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
          placeholder=" type to do"
          autoFocus
          onKeyDown={keyDownHandler}
        ></input>
      </header>
    </React.Fragment>
  );
};

export default Header;
