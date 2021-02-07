import React from 'react'
import {ICity} from "../interfaces";

interface HourPickerProps {
    setHours: (hours: number) => void,
    city: ICity | null
}

interface HourItem {
    name: string,
    value: number,
}

export const HourPicker: React.FC<HourPickerProps> = ({setHours, city}) => {
    let hours: Array<HourItem> = Array.from(Array(23))
        .map((_, index: number): HourItem => {
            let hour = index + 1;
            return hour <= 12 ? {name: `${hour} am`, value: hour} : {name: `${hour - 12} pm`, value: hour};
        })
    let setHoursValue = (hours: number) => {
        setHours(hours)
    }
    let options = [];
    if(!city ) {
        options.push(<option key="Firstly please choose the city" value={""}>Firstly please choose the city</option> )
    }else{
        options.push(<option key="Now you can choose the hours" value={""}>Now you can choose the hours</option>);
        options.push(...hours.map((el: HourItem) => (
            <option key={el.value} value={el.value}>{el.name}</option>
        )))
    }

    return (
        <select defaultValue={""} onChange={(e => {
            setHoursValue(+e.target.value)
        })} className="form-select" aria-label="Default select example">
            {options}
        </select>
    );
};

export default HourPicker;