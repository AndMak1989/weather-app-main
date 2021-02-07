import {ICountry} from "../interfaces";


const Countries: Array<ICountry> = [
    {
        name: 'USA',
        value: 'USA',
        cities: [
            {name: 'Chicago', value: 'Chicago', lat: 41.85, lon: -87.65},
            {name: 'California', value: 'California', lat: 38.3004, lon: -76.5074}
        ]
    },
    {
        name: 'England',
        value: 'England',
        cities: [
            {name: 'London', value: 'London', lat: 51.509865, lon: -0.1181},
            {name: 'Oxford', value: 'Oxford', lat: 53.4809, lon: -2.2374}
        ]
    },
];

export default Countries;