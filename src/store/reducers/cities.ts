import {ActionTypes} from "../actions/types";
import {FAIL, SUCCESS} from "../../constants";
import {AnyAction, Reducer} from "redux";
import {ICitiesSearchState} from "../types";

const initialState: ICitiesSearchState = {
     list: []
}

const reducer: Reducer<ICitiesSearchState> = (state: ICitiesSearchState = initialState, action: AnyAction): ICitiesSearchState => {
    switch (action.type) {
        // Очистить лист поиска городов
        case ActionTypes.CLEAR_SEARCH_LIST: {
            return {...state, list: []};
        }
        // Ддоавляем города которые удалось найти по запросу пользователя
        case ActionTypes.GET_CITY_BY_NAME + SUCCESS: {
            return {...state, list: action.jsonRes};
        }
        // Не удалось получить город из Mock
        case ActionTypes.GET_CITY_BY_NAME + FAIL: {
            console.error(action.error);
            return state;
        }
        default: {
            return state
        }
    }
};

export {reducer as SearchReducer}