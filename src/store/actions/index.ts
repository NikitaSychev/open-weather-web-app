import {IMockCities} from "../middlewares/types";
import {ActionTypes} from "./types";
import {MOCK_API, OPEN_WEATHER_APY_KEW, SERVER_API} from "../../constants";
import {action} from "typesafe-actions";


export const addCityInList = (city: IMockCities) => (dispatch: any) => {
    dispatch({type: ActionTypes.ADD_CITY_IN_LIST, payload: city});

    // Отправка запроса на OpenWeather за сводкой погоды
    dispatch({
        type: ActionTypes.GET_WEATHER_BY_CITY_ID,
        payload: city,
        currentAPI: SERVER_API,
        callAPI: `/onecall?lat=${city.coordinates.lat}&lon=${city.coordinates.lon}` +
            `&exclude=current,minutely,hourly,alerts&units=metric&appid=${OPEN_WEATHER_APY_KEW}`,
    });
};

export const removeCityFromList = (cityId: number) => action(ActionTypes.REMOVE_CITY_FROM_LIST, cityId);
export const clearSearchList = () => action(ActionTypes.CLEAR_SEARCH_LIST);

export const getCity = (cityName: string) => (dispatch: any, getState: any) => {
    if  (!cityName || cityName.length < 3) return;

    // Отправка запроса в Mock за городами
    dispatch({
        type: ActionTypes.GET_CITY_BY_NAME,
        payload: { cityName },
        currentAPI: MOCK_API,
        callAPI: `/api/city?name=${cityName}`,
    });
}