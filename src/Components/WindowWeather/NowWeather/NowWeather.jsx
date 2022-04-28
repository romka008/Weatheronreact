import React, {createRef} from 'react'
import {useDispatch} from 'react-redux'
import {addCityActionCreator, updateCityActionCreator} from '../../../redux/cities-reducer'
import './NowWeather.css'
// import cloudDefault from "../../../image/cloud.svg";

function NowWeather({actualDatas, addFavoriteCity}) {
    // const defaultValue = {
    //     temperature: "14°",
    //     cloud: cloudDefault,
    //     city: "Actobe",
    // };
    // const setData = data
    //     ? {
    //           temperature: Math.round(data.main.temp),
    //           cloud: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
    //           city: data.name,
    //       }
    //     : { ...defaultValue };
    const newCity = createRef()
    const dispatch = useDispatch()

    let onUpdateCity = () => {
        let city = newCity.current.innerHTML
        console.log(city)
        dispatch(updateCityActionCreator(city))
        dispatch(addCityActionCreator(city))
        addFavoriteCity(city)
    }

    return (
        <div className="information__current-city">
            <div className="information__temperature">{actualDatas.temperature}</div>
            <img className="information__cloud-svg" src={actualDatas.cloud} alt="" />

            <div className="information__wrapper">
                <div className="information__name-current-city" ref={newCity}>
                    {actualDatas.city}
                </div>
                <button className="information__favorites-city" onClick={onUpdateCity}></button>
            </div>
        </div>
    )
}

export default NowWeather
