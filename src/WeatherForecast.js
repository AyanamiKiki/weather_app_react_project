import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(){
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