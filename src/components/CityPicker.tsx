import React from 'react'
import {ICity, ICountry} from "../interfaces";

interface CityPickerProps {
    cities: Array<ICity>,
    setCityData: (cityName: string) => void,
    city: ICity | null
}

export const CityPicker: React.FC<CityPickerProps> = ({cities, setCityData,city}) => {

    let setCityValue = (cityName: string) => {
        setCityData(cityName)
    }
    let options = [];

    if (!cities.length) {
        options.push(<option key="Firstly select the country" value={""}>Firstly select the country</option> )
    } else {
        options.push(<option  value={""} key="Now, please select the city" >Now, please select the city</option>)
        options.push(...cities.map((city: ICity, index) => (
                <option key={city.value} value={city.value}>{city.name}</option>
            ))
        );
    }



    return (
        <select defaultValue={""} onChange={(e) => {setCityValue(e.target.value)}}
                className="form-select" aria-label="Default select example">
            {options}
        </select>
    )
};

export default CityPicker;