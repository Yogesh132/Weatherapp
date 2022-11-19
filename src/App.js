import { useEffect, useState } from "react";
import Home from "./pages/Home";
import WeatherDay from "./weatherDay/weatherDay";

function App() {
  const [city, setCity] = useState("pokhara");
  const apiKey = "cd0da94259651c5f50d4ae2cbd52eb26";

  const [weatherInfo, setWeatherInfo] = useState();
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=5&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((res) =>
        setWeatherInfo(
          res.list.map((ls) => {
            console.log(ls);
            return {
              min: ls.main.temp_min,
              max: ls.main.temp_max,
              weatherType: ls.weather[0].description,
              windSpeed: ls.wind.speed,
            };
          })
        )
      );
  }, [city]);

  //checking objects

  // useEffect(() => {
  //   console.log(weatherInfo);
  // }, [weatherInfo]);

  const setValue = (parameter) => {
    setCity(parameter);
    console.log(parameter);
  };
  return (
    <>
      <Home setValueprop={setValue} />

      {!!weatherInfo &&
        weatherInfo.map((i, index) => (
          <div key={index}>
            <WeatherDay
              index={index}
              min={i.min}
              max={i.max}
              weatherType={i.weatherType}
              windSpeed={i.windSpeed}
            />
          </div>
        ))}
    </>
  );
}

export default App;
