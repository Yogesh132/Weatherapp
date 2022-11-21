import React, { useState, useEffect } from "react";
import "./Temp.css";

const Temp = ({ city1 }) => {
  const [city, setCity] = useState();
  const [search, setSearch] = useState("pune");
  useEffect(() => {
    const fetchApi = async () => {
      setSearch(city1);
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${search}&cnt=1&appid=5ddd4b9a52a1038e1f2d663d9b05929b&units=metric`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson);
      console.log(resJson);
    };
    fetchApi();
  }, [search, city1]);

  // if((city.list[0].weather[0].main)

  return (
    <>
      {!city ? (
        <p> Loading...</p>
      ) : (
        <div className="weather_wrapper">
          <div className="weatherCard">
            <div className="currentTemp">
              <div className="temp">
                {parseInt(city.list[0].main.temp)}&deg;
              </div>
              <div className="location">{search}</div>
            </div>

            {/* start of current weather  */}
            <div className="currentWeather">
              <span className="conditions">&#xf00d;</span>
              <div className="info">
                <span className="rain">{city.list[0].main.humidity} %RH</span>
                <span className="wind">{city.list[0].wind.speed} MPH</span>
              </div>
            </div>
            {/* end of current weather  */}
          </div>
        </div>
      )}
    </>
  );
};

export default Temp;
