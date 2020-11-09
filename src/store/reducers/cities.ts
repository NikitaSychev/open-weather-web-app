import {OrderedMap, Record, Map} from "immutable";
import {ICityState} from "./types";
import {CityActionTypes} from "../actions/types";
import {FAIL, SUCCESS} from "../../constants";
import {IOpenWeatherDaily} from "../middlewares/types";
import {AnyAction, Reducer} from "redux";

const initialState: ICityState = {
    cityName: '',
    cities: [],
    citiesInList: [],
    weather: []
}

const ReducerRecord = Record({
    entities: OrderedMap({}),
    pagination: Map({})
})

const reducer: Reducer<ICityState> = (state: ICityState = initialState, action: AnyAction): ICityState => {
    switch (action.type) {
        // case CityActionTypes.GET_CITY_BY_NAME: {
        //     return {...state, data: action.payload};
        // }
        case CityActionTypes.GET_CITY_BY_NAME + SUCCESS: {
            return {...state, cities: action.jsonRes};
        }
        case CityActionTypes.GET_CITY_BY_NAME + FAIL: {
            return {...state, cities: action.error};
        }
        case CityActionTypes.ADD_CITY_IN_LIST: {
            if (action.payload && action.payload.id
                && !state.citiesInList.find(item => item.id === action.payload.id)) {
                return {...state, citiesInList: [...state.citiesInList, action.payload]};
            }
            return state
        }
        case CityActionTypes.REMOVE_CITY_FROM_LIST: {
            const newCitiesList = state.citiesInList.filter(item => item.id !== action.payload);
            return {...state, citiesInList: newCitiesList ? newCitiesList : []};
        }
        case CityActionTypes.GET_WEATHER_BY_CITY_ID + SUCCESS: {
            const newWeather: IOpenWeatherDaily = Object.assign({} as IOpenWeatherDaily, action.jsonRes);
            return {...state, weather: [...state.weather, newWeather]};
        }
        default: {
            return state
        }
    }
};

export {reducer as SearchStringReducer}