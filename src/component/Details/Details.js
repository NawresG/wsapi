import React from 'react'
import {useParams} from "react-router-dom"
const Details = ({forcast}) => {
    const {date}=useParams()
  return (
    <div>{forcast.forecastday.find(el=>el.date==date).hour.map(el=>el.time)}</div>
  )
}

export default Details