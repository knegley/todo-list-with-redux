import React from "react";
import { withRouter, useRouteMatch } from "react-router-dom";
import ToDoList from "./ToDoList";

const TodoItem = ({ toDo }) => {
  let homeMatch = useRouteMatch({ path: "/", exact: true });
  let activeMatch = useRouteMatch("/active");
  let completedMatch = useRouteMatch("/completed");

  return (
    <React.Fragment>
      {homeMatch && <ToDoList toDo={toDo} />}

      {activeMatch && (
        <ToDoList toDo={toDo.filter(value => value.completed === false)} />
      )}

      {completedMatch && (
        <ToDoList toDo={toDo.filter(value => value.completed === true)} />
      )}
    </React.Fragment>
  );
};

export default withRouter(TodoItem);
