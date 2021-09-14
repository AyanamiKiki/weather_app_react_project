import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
    let apiKey = "b4407213e455b1634cc61a84e0b730a1";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
    return (
    <div className="WeatherForecast">
        <div className="row">
            <div className="col-2"> 
            <div className="weatherForecastDay">Thursday</div>
            <WeatherIcon code="01d" size={40} />
            <div className="weatherForecastTemp">
                <span className="weatherForecastTemp-max">19°</span>
                <span className="weatherForecastTemp-min">10°</span>
            </div>
            </div>
        </div>
    </div>
)
}