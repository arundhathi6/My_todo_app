import { ADD_TODO, GET_TODO} from "./actionTypes";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const getTodo = (payload) => {
  return {
    type: GET_TODO,
    payload,
  };
};



