import React from "react";
import {ICountry} from "../interfaces";

interface CountryPickerProps {
    country: string,
    onCountrySelect: (name: string) => void,
    countries: any
}

export const CountryPicker: React.FC<CountryPickerProps> = ({
                                                                country,
                                                                countries,
                                                                onCountrySelect,
                                                            }) => {
    return (
        <select
            value={country}
            onChange={(e) => onCountrySelect(e.target.value)}
            className="form-select"
            aria-label="Default select example"
            name="country"
            id="country"
        >
            <option key="Select the country" disabled={true} value="">
                Select the country
            </option>
            {countries.map((el: ICountry) => (
                <option key={el.value} value={el.value}>
                    {el.name}
                </option>
            ))}
        </select>
    );
};

export default CountryPicker;
