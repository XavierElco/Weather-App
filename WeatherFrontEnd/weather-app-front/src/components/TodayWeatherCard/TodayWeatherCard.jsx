import "./TodayWeatherCard.css";
import rainIcon from "../../assets/meta_icon/weather_icon/Rain.png";

function TodayWeatherCard(props) {
  const { temp, temp_max, temp_min, wind} = props.data;
  const {humidity} = props.data.main;
  return (
    <div className="today-weather-card weather-background">
      <img 
        src={rainIcon} 
        alt="Weather Icon" 
        className="weather-icon"
        />

      TodayWeatherCard
      <p>{temp}</p>
      <p>{temp_max}</p>
      <p>{temp_min}</p>
      <p>{humidity}</p> 
      <p>{wind.speed}</p>
    </div>
  );
}

export default TodayWeatherCard;