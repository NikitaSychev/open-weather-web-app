import {IWeatherState} from "../types";
import {AnyAction, Reducer} from "redux";
import {ActionTypes} from "../actions/types";
import {SUCCESS} from "../../constants";
import {IMockCities, IOpenWeatherDaily} from "../middlewares/types";

const initialState: IWeatherState = {
    list: []
}

const reducer: Reducer<IWeatherState> = (state: IWeatherState = initialState, action: AnyAction): IWeatherState => {
    switch (action.type) {
        // удаляем текущие данные о погоде из таблицы
        case ActionTypes.REMOVE_CITY_FROM_LIST: {
            const newWeatherList = state.list.filter(item => item.cityId !== action.payload);
            return {
                ...state,
                list: newWeatherList ? newWeatherList : []
            };
        }
        // добавляем новые данные о погоде в таблицу
        case ActionTypes.GET_WEATHER_BY_CITY_ID + SUCCESS: {
            if (!action.jsonRes || !action.payload) {
                return state;
            }

            const newWeather: IOpenWeatherDaily = Object.assign({} as IOpenWeatherDaily, action.jsonRes);
            const city: IMockCities = Object.assign({} as IOpenWeatherDaily, action.payload);

            // Если вдруг данные для текущего города уже добавлены в таблицу погоды - возвращаем state
            if (!city
                || !newWeather
                || state.list.find(item => item.cityId === city.id)) {
                return state;
            }

            newWeather.cityId = city.id;
            newWeather.cityName = city.name;

            return {...state, list: [...(state.list), newWeather]};
        }
        default: {
            return state
        }
    }
}

export {reducer as WeatherReducer}