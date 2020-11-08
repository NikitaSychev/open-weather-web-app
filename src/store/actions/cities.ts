import { action } from 'typesafe-actions'
import {CityActionTypes} from "./types";

// export const getCity = (cityName: string) => action(CityActionTypes.GET_CITY_BY_NAME, cityName);

export const getCity = (cityName: string) => (dispatch: any, getState: any) => {
    const dssd = getState();
    if  (!cityName || cityName.length < 3) return;

    dispatch({
        type: CityActionTypes.GET_CITY_BY_NAME,
        payload: { cityName },
        callAPI: `/api/city?name=${cityName}`
    });
}