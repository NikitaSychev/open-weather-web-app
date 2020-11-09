import {applyMiddleware, combineReducers, createStore} from "redux";
import {SearchReducer} from "./reducers/cities";
import thunk from "redux-thunk";
import {CitiesInListReducer} from "./reducers/cities-list";
import {WeatherReducer} from "./reducers/weather";
import serviceApi from "./middlewares/api";

const rootReducer = combineReducers({SearchReducer, CitiesInListReducer, WeatherReducer});

export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunk, serviceApi));

export default store;