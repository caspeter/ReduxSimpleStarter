import axios from 'axios';

const API_KEY = '2a3d7a761b3991c6a5d01cac6e3a938f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather (city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); //asycronous in nature, but it looks syncronous

  return {
    type: FETCH_WEATHER,
    payload: request // returning a promise as the payload
  };
}
