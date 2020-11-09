import {IMockCities, IOpenWeatherDaily} from "../middlewares/types";

// export interface

export interface ICityState {
    cityName: string
    cities: IMockCities[]
    citiesInList: IMockCities[]
    weather: IOpenWeatherDaily[]
}