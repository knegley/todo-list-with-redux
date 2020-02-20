import React /*{ useContext }*/ from "react";
// import { DispatchContext } from "./App";
import { NavLink } from "react-router-dom";
import { CLEAR_COMPLETED_TODOS } from "./actions";
import { useDispatch } from "react-redux";

const Footer = ({ toDo }) => {
  // const dispatch = useContext(DispatchContext);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <footer className="footer">
        <span className="todo-count">
          <strong>
            {toDo.reduce((total, current) => {
              if (!current.completed) {
                total += 1;
              }
              return total;
            }, 0)}
          </strong>{" "}
          item(s) left
        </span>
        <ul className="filters">
          <li>
            <NavLink exact to="/" activeClassName="selected">
              All
            </NavLink>
          </li>
          <li>
            <NavLink to="/active" activeClassName="selected">
              Active
            </NavLink>
          </li>
          <li>
            <NavLink to="/completed" activeClassName="selected">
              Completed
            </NavLink>
          </li>
        </ul>
        <button
          className="clear-completed"
          onClick={() => dispatch({ type: CLEAR_COMPLETED_TODOS })}
        >
          Delete Completed
        </button>
      </footer>
    </React.Fragment>
  );
};
export default Footer;
