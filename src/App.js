import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Current from './component/Current/Current';
import ForcastList from './component/ForcastList/ForcastList';
import Details from './component/Details/Details';
import {Route,Routes} from "react-router-dom"
function App() {
  const [current,setCurrent]=useState({})
  const [localisation,setLocalisation]=useState({})
  const [forcast,setForcast]=useState({})
  const[loading,setLoading]=useState(true)
  const getWeather = async()=>{
    try{
  const res = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=345bbc2071a548bb8d291615222206&q=gafsa&days=4&aqi=no&alerts=no`)
setCurrent(res.data.current)
setForcast(res.data.forecast)
setLocalisation(res.data.location)
setLoading(false)}
catch (error){
  console.log(error)

} 
}
useEffect(() => {
 getWeather()
}, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={loading?<h1>loading ...</h1>: <div> <Current  current={current}  localisation={localisation}/>
     <ForcastList forcast={forcast}  /></div>}/>
     <Route path="/details/:date" element={<Details forcast={forcast}/>}/>
     </Routes>
    </div>

  );
}

export default App;
