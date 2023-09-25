import "./current-weather.css";
// import d1 from "icons/01d.png";
const CurrentWeather = ({ data }) => {
  return (
    <div className="cont">
      <div className="weather">
        <div className="top">
          <div>
            <p className="city">{data.city}</p>
            <p className="description">{data.weather[0].description}</p>
          </div>
          <img
            src={`icons/${data.weather[0].icon}.png`}
            alt="weather"
            className="weather-icon"
          />
        </div>
        <div className="bottom">
          <p className="temperature">{Math.round(data.main.temp)}°C</p>
          <div className="details">
            <div className="peramter-row">
              <span className="paramater-label top">Details</span>
            </div>
            <div className="peramter-row">
              <span className="paramater-label">Feels like</span>
              <span className="paramater-value">
                {Math.round(data.main.feels_like)}°C
              </span>
            </div>
            <div className="peramter-row">
              <span className="paramater-label">Wind</span>
              <span className="paramater-value">
                {Math.round(data.wind.speed)} m/s
              </span>
            </div>
            <div className="peramter-row">
              <span className="paramater-label">Humidity</span>
              <span className="paramater-value">
                {Math.round(data.main.feels_like)}%
              </span>
            </div>
            <div className="peramter-row">
              <span className="paramater-label">Pressure</span>
              <span className="paramater-value">{Math.round(data.main.pressure)} hPa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
