import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import {SearchStringReducer} from "./reducers/cities";
import thunk from "redux-thunk";
import api from "./middlewares/api";

const rootReducer = combineReducers({SearchStringReducer});

const store = createStore(rootReducer, applyMiddleware(thunk, api));

export type AppState = ReturnType<typeof rootReducer>;
export default store;