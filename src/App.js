import React /*{ useReducer }*/ from "react";
// import ToDoList from "./ToDoList";
import Footer from "./Footer";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import ToDoItem from "./ToDoItem";
import { useSelector } from "react-redux";
// import { connect } from "react-redux";
// import {
//   addToDo,
//   toggleToDo,
//   clearCompletedToDos,
//   deleteToDo
// } from "./actions";

// import todosList from "./todos.json";

// export const DispatchContext = React.createContext(null);

const App = () => {
  const toDo = useSelector(state => state);

  // const [toDo, dispatch] = useReducer((state, action) => {
  //   switch (action.type) {
  //     case "add":
  //       return [...state, action.addedToDo];

  //     case "delete":
  //       console.log(action.index);
  //       return state.filter((value, index) => index !== action.index);

  //     case "markComplete":
  //       return state.map(value => {
  //         if (value.id !== action.item.id) {
  //           return value;
  //         }
  //         return { ...value, completed: !value.completed };
  //       });

  //     case "deleteComplete":
  //       return state.filter(value => value.completed === false);

  //     default:
  //       return state;
  //   }
  // }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <React.Fragment>
        {/* <DispatchContext.Provider value={dispatch}> */}
        <section className="todoapp">
          <Header />

          <ToDoItem toDo={toDo} />
          <Footer toDo={toDo} />
        </section>
        {/* </DispatchContext.Provider> */}
      </React.Fragment>
    </Router>
  );
};

// const mapStateToProps = state => {
//   return { toDo: state.todo };
// };
// const mapDispatchtoProps = {
//   toggleToDo,
//   deleteToDo,
//   addToDo,
//   clearCompletedToDos
// };

// export default connect(mapStateToProps, mapDispatchtoProps)(App);

export default App;
