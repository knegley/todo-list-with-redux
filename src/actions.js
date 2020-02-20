export const TOGGLE_TODO = "TOGGLE_TODO";
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const CLEAR_COMPLETED_TODOS = "CLEAR_COMPLETED_TODOS";

export const addToDo = addedToDo => {
  return { type: ADD_TODO, addedToDo };
};

export const toggleToDo = (index, item) => {
  return { type: TOGGLE_TODO, index, item };
};

export const deleteToDo = (index, item) => {
  return { type: DELETE_TODO, index, item };
};

export const clearCompletedToDos = () => {
  return { type: CLEAR_COMPLETED_TODOS };
};
