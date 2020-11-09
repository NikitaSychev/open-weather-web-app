import {applyMiddleware, combineReducers, createStore} from "redux";
import {SearchStringReducer} from "./reducers/cities";
import api from "./middlewares/api";
import thunk from "redux-thunk";

const rootReducer = combineReducers({SearchStringReducer});

const store = createStore(rootReducer, applyMiddleware(thunk, api));

export type AppState = ReturnType<typeof rootReducer>;
export default store;