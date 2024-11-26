import {useState, useEffect} from 'react';
import {getWeather} from '../services/WeatherServices';

export const useWeather = city => {
  const [data, setData] = useState (null);

  const loadWeather = async () => {
    if (city) {
      let res = await getWeather (
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4251b5f89948a271b3def71083a728f0&units=metric`
      );
      setData (res.data);
    }
  };

  useEffect (
    () => {
      loadWeather ();
    },
    [city]
  );

  return {data};
};
