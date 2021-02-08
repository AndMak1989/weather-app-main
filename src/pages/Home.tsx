import React, { useCallback, useState } from "react";
import HourPicker from "../components/HourPicker";
import CityPicker from "../components/CityPicker";
import CountryPicker from "../components/CountryPicker";
import {ICachedWeather, ICity, ICountry} from "../interfaces";
import { useActions } from "hooks/use-actions";
import Countries from "../utils/selectorData";
import Weather from "../components/Weather";
import { useTypedSelector } from "../hooks/use-typed-selector";

function Home() {
  const [country, setCountry] = useState<string>("");
  const [city, setCity] = useState<ICity | null>(null);
  const [hours, setHours] = useState<number>(0);
  const [cities, setSelectCities] = useState<Array<ICity>>([]);
  const { getWeatherForecast } = useActions();


  let citiesPreparate = useCallback(
    (countryName: string) =>
      Countries.forEach((country: ICountry) => {
        if (countryName === country.value) {
          setSelectCities(country.cities);
        }
      }),
    [country]
  );

  const cachedWeather: ICachedWeather= useTypedSelector((state) => state.cachedWeather);

  let setCityData = (cityName: string) => {
    Countries.forEach((countryData: ICountry) => {
      if (country === countryData.value) {
        countryData.cities.forEach((city: ICity) => {
          if (city.value === cityName) {
            setCity(city);

            if (!cachedWeather?.data?.hasOwnProperty(city.value)) {
              getWeatherForecast({ city });
            }
          }
        });
      }
    });
  };

  const countryChange = useCallback(
    (newCountry) => {
      if (country !== newCountry) {
        citiesPreparate(newCountry);
        setCountry(newCountry);
        setCity(null);
      }
    },
    [country, citiesPreparate, setCountry]
  );

  return (
    <div className="container">
      {`${country} ${JSON.stringify(city)} ${hours}`}
      <CountryPicker
        country={country}
        countries={Countries}
        onCountrySelect={countryChange}
      />

      <CityPicker city={city} setCityData={setCityData} cities={cities} />
      <HourPicker city={city} setHours={setHours} />
      {/* <HourPicker hours={hours} onHoursSelect={function} /> */}
      <hr />

      <Weather city={city} hours={hours} cachedWeather={cachedWeather} />
    </div>
  );
}

export default Home;
