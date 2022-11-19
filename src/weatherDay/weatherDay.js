import React from "react";
import "./weatherDay.css";
import { WiDayCloudyWindy, WiCloudy } from "react-icons/wi";
const WeatherDay = ({ index, min, max, weatherType, windSpeed }) => {
  return (
    <>
      <div className="tbl-content">
        <table cellPadding="0" cellSpacing="0" border="0">
          <tbody>
            <tr>
              <td>
                <WiDayCloudyWindy /> DAY{index + 1}{" "}
              </td>
              <td>{min}</td>

              <td>{max}</td>
              <td>{weatherType}</td>
              <td>
                <WiCloudy />
                {windSpeed}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WeatherDay;
