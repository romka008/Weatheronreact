import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {updateCityActionCreator} from '../../redux/cities-reducer'
import './SearchCity.css'

function SearchCity({handleSetSearchCity}) {
    const dispatch = useDispatch()
    const currentCity = useSelector((state) => state.citiesList.newCurrentCity)

    let onSearchCity = (e) => {
        let city = e.target.value
        console.log(city)
        dispatch(updateCityActionCreator(city))
    }

    return (
        <div>
            <form className="form" onSubmit={handleSetSearchCity}>
                <input className="form-input" placeholder="Search city" value={currentCity} onChange={onSearchCity} />
                <input type="submit" className="form-button" />
            </form>
        </div>
    )
}

export default SearchCity
