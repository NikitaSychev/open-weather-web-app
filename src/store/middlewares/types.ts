export interface ICoordinates {
    lon: number
    lat: number
}

export interface IMockCities {
    id: number
    name: string
    state: string
    country: string
    coordinates: ICoordinates
}

export interface IOpenWeatherCity{
    id: number
    name: string
    coord: ICoordinates
    country: string
    population: number
    timezone: number
}

export interface IOpenWeatherTemperature{
    day: number
    min: number
    max: number
    night: number
    eve: number
    morn: number
}

export interface IOpenWeatherSensitivity{
    day: number
    night: number
    eve: number
    morn: number
}

export interface IOpenWeatherData{
    id: number
    main: string
    description: string
    icon: string
}

export interface IOpenWeatherSummary{
    clouds: number
    dew_point: number
    dt: number
    feels_like: IOpenWeatherSensitivity
    humidity: number
    pop: number
    pressure: number
    sunrise: number
    sunset: number
    temp: IOpenWeatherTemperature
    uvi: number
    weather: IOpenWeatherData[]
    wind_deg: number
    wind_speed: number
}

export interface IOpenWeatherDaily {
    daily: IOpenWeatherSummary[]
    lat: number
    lon: number
    timezone: string
    timezone_offset: number
    cityName?: string
    cityId?: number
}

