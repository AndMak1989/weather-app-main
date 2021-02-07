import React from 'react'
import {CitiesWeather, CityWeather, HourWeather} from "../interfaces";
import Spinner from "./Spinner";

interface HourlyWeatherProps {
    weather: CitiesWeather
    hours: number
}

export const HourlyWeather: React.FC<HourlyWeatherProps> = ({weather, hours}) => {
    const {loading, error}: CitiesWeather = weather;
    const data: CityWeather | null = weather.data;
    const hourlyFiltered = data?.hourly.filter((h, index) => {
        return index + (hours - 1) < 23;
    })
    return (
        <div className="row d-flex justify-content-center ">
            {
                loading ? <Spinner/> : data ?
                    hourlyFiltered?.map((forecast: HourWeather) => {

                        return (<div style={{width: "15rem"}} className="card m5">
                            <div className="card-header">
                                Hourly Weather
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="d-flex justify-content-space-between list-group-item">
                                    <b>Temperature:</b>{forecast.temp}</li>
                                <li className="d-flex justify-content-space-between list-group-item"><b>Feels
                                    like:</b>{forecast.feels_like}</li>
                                <li className="d-flex justify-content-space-between list-group-item">
                                    <b>Humidity:</b>{forecast.humidity}</li>
                                <li className="d-flex justify-content-space-between list-group-item">
                                    <b>Pressure:</b>{forecast.pressure}</li>
                                <li className="d-flex justify-content-space-between list-group-item">
                                    <b>Clouds:</b>{forecast.clouds}</li>
                                <li className="d-flex justify-content-space-between list-group-item"><b>Wind
                                    speed:</b>{forecast.wind_speed}</li>

                            </ul>
                        </div>)
                    }) : null
            }

        </div>
    );
};

export default HourlyWeather;