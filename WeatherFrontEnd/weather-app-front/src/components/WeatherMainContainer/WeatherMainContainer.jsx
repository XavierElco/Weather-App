import CityWeatherCard from "../CityWeatherCard/CityWeatherCard";
import ForecastWeatherCard from "../ForecastWeatherCard/ForecastWeatherCard";
import TodayWeatherCard from "../TodayWeatherCard/TodayWeatherCard";
import "./WeatherMainContainer.css";
import { useState, useEffect } from "react";
import {getWeather} from '../../api/backend'
function WeatherMainContainer() {

  const [data, setData] = useState();

  const apiData = {
    temp: 32,
    temp_max: 35,
    temp_min: 31,
    humidity: 2,
    wind: 1,
  };

  const cityData = [
    { min: 18, max: 19, city: "sydney" },
    {
      min: 18,
      max: 19,
      city: "mel",
    },
    {
      min: 18,
      max: 20,
      city: "bri",
    },
    {
      min: 18,
      max: 20,
      city: "perth",
    },
  ];

  const foreCastData = [
    { min: 18, max: 19 },
    {
      min: 18,
      max: 19,
    },
    {
      min: 18,
      max: 20,
    },
    {
      min: 18,
      max: 20,
    },
  ];

  useEffect(() => {
    const fetchData = async() => {
      const result = await getWeather();
      setData(result.data)
    };
    fetchData();
  }, []);
  if (!data) {
    return <></>;
  }

  
  return (
    <div className="weather-main-container flex">
      <TodayWeatherCard data={data[0]} />
      <div >
        <ForecastWeatherCard foreCastData={data.filter(item => item.dt_txt.includes('12:00'))} />
        <CityWeatherCard cities={cityData} />
      </div>
    </div>
  );
}

export default WeatherMainContainer;