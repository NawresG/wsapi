import React from 'react'
import "./Current.css"
const Current = ({current,localisation}) => {
  return (

<div id="weather_wrapper">
  <div className="weatherCard">
    <div className="currentTemp">
      <span className="temp">{current.temp_c}°</span>
      <span className="location">{localisation.name}</span>
    </div>
    <div className="currentWeather">
      <span className="conditions"><img src={current.condition&&current.condition.icon} alt=""/></span>
      <div className="info">
        <span className="rain">1.3 MM</span>
        <span className="wind">10 MPH</span>
      </div>
    </div>
  </div>
</div>

  )
}

export default Current