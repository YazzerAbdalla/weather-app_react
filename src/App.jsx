import "./App.css";
import CurrentWeather from "./components/current-weather/current-weather";
import Search from "./components/search/Search";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import { useState } from "react";
import Forecast from "./components/forecast/forecast";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForcast] = useState(null);
  const handleOnSearchChange = async (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    try {
      const currentWeatherFetch = await fetch(
        `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      );
      const forcastFetch = await fetch(
        `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      );
      const weatherResponse = await currentWeatherFetch.json();
      setCurrentWeather({ city: searchData.label, ...weatherResponse });

      const forcastResponse = await forcastFetch.json();
      setForcast({ city: searchData.label, ...forcastResponse });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
