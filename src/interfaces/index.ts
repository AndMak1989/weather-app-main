export interface ICountry {
    name: string,
    value: string,
    cities: Array<ICity>
}

export interface ICity {
    name: string,
    value: string,
    lat: number,
    lon: number

}

export interface HourWeather {
    "temp": number,
    "feels_like": number,
    "pressure": number,
    "humidity": number,
    "dew_point": number,
    "uvi": number,
    "clouds": number,
}

export interface HourWeather {
    "temp": number,
    "feels_like": number,
    "pressure": number,
    "humidity": number,
    "clouds": number,
    "wind_speed": number,
    "wind_deg": number,
}

export interface CityWeather {
    current: HourWeather ,
    hourly: Array<HourWeather>
}

export interface CitiesWeather {
    loading: boolean,
    error: null,
    data: CityWeather | null
}

export interface IWeatherRequestData {
    city: ICity,
}

export interface ICachedWeather {
    loading: boolean,
    error: null,
    data: {
        [key:string] : CityWeather
    } | null

}