export interface ICityCoordinates {
    lon: number
    lat: number
}

export interface IMockCities {
    id: number
    name: string
    state: string
    country: string
    coordinates: ICityCoordinates
}