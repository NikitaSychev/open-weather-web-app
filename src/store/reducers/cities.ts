import {OrderedMap, Record, Map} from "immutable";
import {AnyAction, Reducer} from "redux";
import {ICityState} from "./types";
import {CityActionTypes} from "../actions/types";
import {FAIL, SUCCESS} from "../../constants";

const initialState: ICityState = {
    cityName: '',
    cities: []
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
        default: {
            return state
        }
    }
};

export { reducer as SearchStringReducer }