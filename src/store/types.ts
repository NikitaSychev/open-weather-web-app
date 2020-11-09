import {IMockCities, IOpenWeatherDaily} from "./middlewares/types";

export interface ICitiesSearchState {
    list: IMockCities[]
}

export interface ICitiesListState {
    list: IMockCities[]
}

export interface IWeatherState {
    list: IOpenWeatherDaily[]
}

export interface IAppState {
    citiesInSearch: ICitiesSearchState
    citiesInList: ICitiesListState
    weather: IWeatherState
}