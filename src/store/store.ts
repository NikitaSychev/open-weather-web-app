import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import {SearchStringReducer} from "./reducers/search-field/search-string";

const store = createStore(combineReducers({SearchStringReducer}));

export default store;