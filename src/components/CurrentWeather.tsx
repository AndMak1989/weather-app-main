import React from 'react'
import {CitiesWeather, CityWeather} from "../interfaces";
import Spinner from "./Spinner";

interface CurrentWeatherProps {
    weather: CitiesWeather
}

export const CurrentWeather: React.FC<CurrentWeatherProps> = ({weather}) => {
    const {loading, error}: CitiesWeather = weather;
    const data: CityWeather | null = weather.data;

    return (
        <div className="d-flex justify-content-center mb20">
            {
                loading ? <Spinner/> : data ?
                    (<div style={{width: "20rem"}} className="card">
                        <div className="card-header">
                            Current Weather
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="d-flex justify-content-space-between list-group-item"><b>Temperature:</b>{data?.current.temp}</li>
                            <li className="d-flex justify-content-space-between list-group-item"><b>Feels like:</b>{data?.current.feels_like}</li>
                            <li className="d-flex justify-content-space-between list-group-item"><b>Humidity:</b>{data?.current.humidity}</li>
                            <li className="d-flex justify-content-space-between list-group-item"><b>Pressure:</b>{data?.current.pressure}</li>
                            <li className="d-flex justify-content-space-between list-group-item"><b>Clouds:</b>{data?.current.clouds}</li>
                            <li className="d-flex justify-content-space-between list-group-item"><b>Wind speed:</b>{data?.current.wind_speed}</li>
                        </ul>
                    </div>) : null
            }
        </div>
    );
};

export default CurrentWeather;