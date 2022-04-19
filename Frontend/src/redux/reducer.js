import { ADD_TODO, GET_TODO, } from "./actionTypes";

const init = {
  todos: {
    dataz: [],
  },
};

export const todoReducer = (store = init, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return { ...store, todos: { ...store.todos } };

    case GET_TODO:
      return { ...store, todos: { ...store.todos, dataz: payload } };

    
  
    default:
      return { ...store };
  }
};
