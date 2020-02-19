import {
  TOGGLE_TODO,
  ADD_TODO,
  CLEAR_COMPLETED_TODOS,
  DELETE_TODO
} from "./actions";

import React, { useContext } from "react";
import { SetListContext } from "./App";

const rootReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const addedToDo = {
        userId: 1,
        id: Math.floor(Math.random() * 100000),
        title: listText,
        completed: false
      };

      return [...state, addedToDo];

    case DELETE_TODO:
      console.log(action.index);
      return state.filter((value, index) => index !== action.index);

    case TOGGLE_TODO:
      return state.map(value => {
        if (value.id !== action.item.id) {
          return value;
        }
        return { ...value, completed: !value.completed };
      });

    case CLEAR_COMPLETED_TODOS:
      return state.filter(value => value.completed === false);

    default:
      return state;
  }
};

export default rootReducer;
