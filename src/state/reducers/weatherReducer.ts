import {Action} from "../actions";
import {CitiesWeather} from "../../interfaces";
import {ActionType} from "../action-types";

const initialState: CitiesWeather = {
    loading: false,
    error: null,
    data: null,
};

const reducer = (state: CitiesWeather = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.ADD_CITY_WEATHER_START:
            return  {
                ...state,
                loading: true,
            }

        case ActionType.ADD_CITY_WEATHER_SUCCESS:
            return  {
                ...state,
                loading: false,
                data: action.payload
            }

        case ActionType.ADD_CITY_WEATHER_ERROR:
            return  {
                ...state,
                loading: false,
                error: action.payload
            }
        case ActionType.CLEAR_CITY_WEATHER_START:
            return  {
                loading: true,
                error: null,
                data: null,
            }

        case ActionType.CLEAR_CITY_WEATHER_SUCCESS:
            return  {
                loading: false,
                error: null,
                data: null,
            }

        case ActionType.CLEAR_CITY_WEATHER_ERROR:
            return  {
                loading: false,
                error: action.payload,
                data: null,
            }

        default:
            return state;
    }
};

export default reducer;