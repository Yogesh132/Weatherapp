
import WeatherDay from '../weatherDay/weatherDay'
import './Component2.css'
import Component3 from './Component3'
import './Component3.css'

import React from 'react'

const Component2 = ({weatherIn}) => {
  return (
           <>
            {
weatherIn.map((i, index) => (
  <div key={index}>
    <WeatherDay
      index={index}
      min={i.min}
      max={i.max}
      weatherType={i.weatherType}
      windSpeed={i.windSpeed} 
    />
    
  </div>
))
}
</>
)
}

export default Component2
              