import {
  ADD_TODO,
  TOGGLE_TODO,
  CLEAR_COMPLETED_TODOS,
  DELETE_TODO
} from "./actions";

const rootReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.addedToDo];

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
