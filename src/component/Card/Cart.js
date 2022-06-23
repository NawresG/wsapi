import React from 'react'
import "./Card.css"
const Cart = ({el,localisation}) => {
  return (
 <div className="widget">
    <div className="left-panel panel">
      <div className="date">
       {el.date}
      </div>
      <div className="city">
        {localisation.tz_id}
      </div>
      <div className="temp">
        {el.day&&el.day.mintemp_c}°
      </div>
    </div>
    <div className="right-panel panel">
      <img src={el.day.condition&&el.day.condition.icon} alt="" width={60} />
    </div>
  </div>

  )
}

export default Cart