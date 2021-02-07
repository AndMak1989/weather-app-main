import { combineReducers } from 'redux';
import citiesWeatherReducer from './weatherReducer'
import cachedWeatherReducer from "./cachedWeatherReducer";

const reducers = combineReducers({
    citiesWeather: citiesWeatherReducer,
    cachedWeather: cachedWeatherReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;