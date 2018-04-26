import axios from 'axios';

const API_KEY = 'c7e2cff6f2c819d21b04e93fee166973';
const ROOT_WEATHER_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city, country){
    const url = `${ROOT_WEATHER_URL}&q=${city},us`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}