import {action} from "typesafe-actions";
import {CityActionTypes} from "./types";
import {IMockCities} from "../middlewares/types";
import {MOCK_API, OPEN_WEATHER_APY_KEW, SERVER_API} from "../../constants";


export const addCityInList = (city: IMockCities) => (dispatch: any, getState: any) => {
    dispatch({type: CityActionTypes.ADD_CITY_IN_LIST, payload: city});
    dispatch({
        type: CityActionTypes.GET_WEATHER_BY_CITY_ID,
        payload: { id: city.id },
        currentAPI: SERVER_API,
        callAPI: `/onecall?lat=${city.coordinates.lat}&lon=${city.coordinates.lon}` +
        `&exclude=current,minutely,hourly,alerts&units=metric&appid=${OPEN_WEATHER_APY_KEW}`,
    });
    return action(CityActionTypes.ADD_CITY_IN_LIST, city);
};

export const removeCityFromList = (cityId: number) => {
    return action(CityActionTypes.REMOVE_CITY_FROM_LIST, cityId);
};

export const getCity = (cityName: string) => (dispatch: any, getState: any) => {
    const dssd = getState();
    if  (!cityName || cityName.length < 3) return;

    dispatch({
        type: CityActionTypes.GET_CITY_BY_NAME,
        payload: { cityName },
        currentAPI: MOCK_API,
        callAPI: `/api/city?name=${cityName}`,
    });
}