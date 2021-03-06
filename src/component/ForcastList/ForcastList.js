import React from 'react'
import Cart from '../Card/Cart'
import {Link} from "react-router-dom"
const ForcastList = ({forcast,localisation}) => {
  return (
    <div style={{display:'flex', justifyContent:"space-around" }}>
                {forcast&&forcast.forecastday.map((el,i)=> <Link to={`/details/${el.date}`}><Cart key={i} el={el} localisation={localisation}/></Link>)}

        </div>
  )
}

export default ForcastList