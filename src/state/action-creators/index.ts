import { Dispatch } from "redux";
import axios from "axios";
import { ActionType } from "../action-types";
import { RootState } from "../reducers";
import { Action } from "state/actions";
import { IWeatherRequestData } from "../../interfaces";
import environment from "../../utils/environment";

export const getWeatherForecast = (requestData: IWeatherRequestData) => {
  return (dispatch: Dispatch<Action>, getState: () => RootState) => {
    let { city } = requestData;

    let queryString = `lat=${city.lat}&lon=${city.lon}&exclude=daily,minutely&appid=${environment.apiKey}`;

    dispatch({
      type: ActionType.ADD_CACHED_WEATHER_START
    });

    try {
      // console.log(`${environment.apiUrl}?${queryString}`);
      axios
        .get(`${environment.apiUrl}?${queryString}`)
        .then((res) => {
          const { data } = res;

          dispatch({
            type: ActionType.ADD_CACHED_WEATHER_SUCCESS,
            payload: {
              name: city.value,
              data
            }
          });
        })
        .catch((err) => {
          dispatch({
            type: ActionType.ADD_CITY_WEATHER_ERROR,
            payload: err.message
          });
        });
    } catch (err) {
      dispatch({
        type: ActionType.ADD_CITY_WEATHER_ERROR,
        payload: err.message
      });
    }
  };
};

export const clearWeatherForecast = () => {
  return (dispatch: Dispatch<Action>, getState: () => RootState) => {
    dispatch({
      type: ActionType.CLEAR_CITY_WEATHER_START
    });
    try {
      dispatch({
        type: ActionType.CLEAR_CITY_WEATHER_SUCCESS,
        payload: null
      });
    } catch (err) {
      dispatch({
        type: ActionType.CLEAR_CITY_WEATHER_ERROR,
        payload: err.message
      });
    }
  };
};
