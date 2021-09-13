import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props){
const [city, setCity] = useState(props.defaultCity);
const [weatherData, setWeatherData] = useState({ready: false});
function handleResponse(response) {
    setWeatherData({
        ready: true,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        date: new Date(response.data.dt * 1000),
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        wind: response.data.wind.speed,
        city: response.data.name,
    })
    
}

function search(){
const apiKey = "b4407213e455b1634cc61a84e0b730a1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event){
    event.preventDefault();
    search();
}

function handleCityChange(event){
    setCity(event.target.value);
}


if (weatherData.ready) {
 return ( 
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                <input 
                type="search" 
                placeholder="enter a city..." 
                className="form-control" 
                autoFocus="on"
                onChange={handleCityChange}
                />
           </div> 
           <div className="col-3">
           <input 
           type="submit" 
           value="Search" 
           className="btn btn-primary w-100"/>
           </div>
           </div>
            </form>
            <WeatherInfo data={weatherData}/>
            <hr />
            <WeatherForecast />
            </div>
    );
} else {
    search();
    return"Loading...";
}
 }