import {AnyAction, Reducer} from "redux";
import {ICitiesListState} from "../types";
import {ActionTypes} from "../actions/types";

const initialState: ICitiesListState = {
    list: []
}

const reducer: Reducer<ICitiesListState> = (state: ICitiesListState = initialState, action: AnyAction): ICitiesListState => {
    switch (action.type) {
        // Добавляем новый город в список городов, по которым получаем данные из OpenWeather
        case ActionTypes.ADD_CITY_IN_LIST: {
            if (action.payload && action.payload.id
                && !state.list.find(item => item.id === action.payload.id)) {
                return {...state, list: [...state.list, action.payload]};
            }
            return state;
        }
        // Удаляем город из списка городов, по которым получаем данные из OpenWeather
        case ActionTypes.REMOVE_CITY_FROM_LIST: {
            const newCitiesList = state.list.filter(item => item.id !== action.payload);
            return {
                ...state,
                list: newCitiesList ? newCitiesList : []
            };
        }
        default: {
            return state
        }
    }
}

export {reducer as CitiesInListReducer}