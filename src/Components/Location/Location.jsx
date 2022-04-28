import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Location.css";
import ClearIcon from "@mui/icons-material/Clear";
import { removeCityActionCreator } from "../../redux/cities-reducer";

// function location({ favoriteCities, handleShowCity }) {
//     let favCities = [...favoriteCities].map((city, index) => (
//         <li key={index} onClick={() => handleShowCity(city)}>
//             {city}
//         </li>
//     ));

function Location({ handleShowCity }) {
    const cities = useSelector((state) => state.citiesList.cities);
    const dispatch = useDispatch();
    const removeCity = (city) => {
        dispatch(removeCityActionCreator(city));
    };

    let favCities = cities.map((i) => (
        <div key={i.id} className="location__city">
            <li onClick={() => handleShowCity(i.city)}>{i.city}</li>
            <li onClick={() => removeCity(i.id)}>
                <ClearIcon />
            </li>
        </div>
    ));

    return (
        <div className="location">
            <div className="location__add">
                <div className="addedLocation">Added location:</div>
            </div>
            <div className="location__favorites">
                <ul className="information__list">{favCities}</ul>
            </div>
        </div>
    );
}

export default Location;
