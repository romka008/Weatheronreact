import React from "react";
import "./Tabs.css";
import { NavLink } from "react-router-dom";

function Tabs() {
    return (
        <div className="information__about">
            <div className="item ">
                <NavLink to="/">Now</NavLink>
            </div>
            <div className="item ">
                <NavLink to="/details">Details</NavLink>
            </div>
            <div className="item ">
                <NavLink to="/forecast">Forecast</NavLink>
            </div>
        </div>
    );
}

export default Tabs;
