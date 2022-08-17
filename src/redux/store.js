import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";

export const store_redux = createStore(reducer, applyMiddleware(thunk))