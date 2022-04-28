import React from "react";
import { Route, Routes } from "react-router-dom";
import NowWeather from "./NowWeather/NowWeather";
import DetailsWeather from "./DetailsWeather/DetailsWeather";
import ForecastWeather from "./ForecastWeather/ForecastWeather";
import "./WindowWeather.css";
import Tabs from "../Tabs/Tabs";

function WindowWeather({ data, actualDatas, addFavoriteCity }) {
    return (
        <div className="information">
            {/* <div className="information__current-city">
                <div className="information__temperature">14°</div>
                <img className="information__cloud" src="./image/cloud.svg" alt="" />

                <div>
                    <div className="information__name-current-city">Aktobe</div>
                    <button className="information__favorites-city" type="button">
                        <img className="information__svg" src="./image/favorites.svg" alt="" />
                    </button>
                </div>
            </div>

            <div className="information__details">
                <div className="information__name-current-city up up__details">Aktobe</div>
                <div className="information__about">
                    <ul className="information__list">
                        <li>
                            Temperature: <span className="information__temperature-about"></span>
                        </li>
                        <li>
                            Feels like: <span className="information__feels about"></span>
                        </li>
                        <li>
                            Weather: <span className="information__weather about"></span>
                        </li>
                        <li>
                            Sunrise: <span className="information__sunrise about"></span>
                        </li>
                        <li>
                            Sunset: <span className="information__sunset about"></span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="information__forecast">
                <div className="information__name-current-city up up__forecast">Aktobe</div>
                <div className="information__forecast-block"></div>
            </div> */}

            <Routes>
                <Route path="/" element={<NowWeather actualDatas={actualDatas} addFavoriteCity={addFavoriteCity} />} />
                <Route path="/details" element={<DetailsWeather actualDatas={actualDatas} />} />
                <Route path="/forecast" element={<ForecastWeather />} />
            </Routes>

            <Tabs />
        </div>
    );
}

export default WindowWeather;
