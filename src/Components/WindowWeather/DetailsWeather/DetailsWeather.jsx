import React from "react";
import "./DetailsWeather.css";

function DetailsWeather({ actualDatas }) {
    return (
        <div>
            <div className="information__name-current-city up">{actualDatas.city}</div>
            <div className="information__about">
                <ul className="information__details">
                    <div>
                        <li>Temperature: {actualDatas.temperature}</li>
                        <li>Feels like: {actualDatas.feels}</li>
                        <li>Weather: {actualDatas.weather}</li>
                        <li>Sunrise: {actualDatas.sunrise}</li>
                        <li>Sunset: {actualDatas.sunset}</li>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default DetailsWeather;
