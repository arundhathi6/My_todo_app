import { createStore } from "redux";
import { todoReducer } from "./reducer";

export const store = createStore(todoReducer);
