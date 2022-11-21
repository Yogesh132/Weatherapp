import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Temp from "./pages/Temp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Component1 from "./Fivedays/Component1";
import Component2 from "./Fivedays/Component2";
import Component3 from "./Fivedays/Component3";

function App() {
  const [city, setCity] = useState("pokhara");
  const apiKey = "cd0da94259651c5f50d4ae2cbd52eb26";

  const [weatherInfo, setWeatherInfo] = useState();
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=5&appid=${apiKey}&units=metric`
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

  /* 
<!--  -->



*/

  // useEffect(() => {
  //   console.log(weatherInfo);
  // }, [weatherInfo]);

  const setValue = (parameter) => {
    console.log("para", parameter);
    setCity(parameter);
  };
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <Home setValueprop={setValue} /> <Temp city1={city} />{" "}
              </div>
            }
          />
          <Route
            path="/five"
            element={
              <div>
                <Component1 /> <Component2 weatherIn={weatherInfo} />{" "}
                <Component3 />
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
