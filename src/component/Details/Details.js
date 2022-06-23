import React from 'react'
import {useParams} from "react-router-dom"
const Details = ({forcast}) => {
    const {date}=useParams()
  return (
    <div>
      <table>
      {forcast.forecastday.find(el=>el.date==date).hour.map(el=>

        <tr>
          <td>{el.time}</td>
          <td>{el.temp_c}</td>
        </tr>
          )}
          </table>
    

    </div>
  )
}

export default Details