import "./TodayWeatherCard.css";

function TodayWeatherCard(props) {
  const { temp, temp_max, temp_min, wind} = props.data;
  const {humidity} = props.data.main;
  return (
    <div class="today-weather-card">
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