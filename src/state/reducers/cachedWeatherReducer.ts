import { Action } from "../actions";
import { ICachedWeather } from "../../interfaces";
import { ActionType } from "../action-types";

const initialState: ICachedWeather = {
  loading: false,
  error: null,
  data: null
};

const reducer = (state: ICachedWeather = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_CACHED_WEATHER_START:
      return {
        ...state,
        loading: true
      };

    case ActionType.ADD_CACHED_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          [action.payload.name]: action.payload.data
        }
      };

    case ActionType.ADD_CACHED_WEATHER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
