import { ActionType } from '../action-types';
import {CityWeather} from "../../interfaces";


export interface AddCachedWeatherStart {
    type: ActionType.ADD_CACHED_WEATHER_START;
}
export interface AddCachedWeatherSuccess {
    type: ActionType.ADD_CACHED_WEATHER_SUCCESS,
    payload: {
        name:string,
        data:CityWeather
    };
}
export interface AddCachedWeatherError {
    type: ActionType.ADD_CACHED_WEATHER_ERROR,
    payload: string
}
////
export interface AddCityWeatherStart {
    type: ActionType.ADD_CITY_WEATHER_START;
}
export interface AddCityWeatherSuccess {
    type: ActionType.ADD_CITY_WEATHER_SUCCESS,
    payload: CityWeather;
}
export interface AddCityWeatherError {
    type: ActionType.ADD_CITY_WEATHER_ERROR,
    payload: string
}
///
export interface ClearCityWeatherStart {
    type: ActionType.CLEAR_CITY_WEATHER_START;
}
export interface ClearCityWeatherSuccess {
    type: ActionType.CLEAR_CITY_WEATHER_SUCCESS,
    payload: null;
}
export interface ClearCityWeatherError {
    type: ActionType.CLEAR_CITY_WEATHER_ERROR,
    payload: string
}

export type Action =
    | AddCityWeatherStart
    | AddCityWeatherSuccess
    | AddCityWeatherError
    | AddCachedWeatherStart
    | AddCachedWeatherSuccess
    | AddCachedWeatherError
    | ClearCityWeatherStart
    | ClearCityWeatherSuccess
    | ClearCityWeatherError
