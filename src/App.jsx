import {useState} from 'react'
import './App.css'
import SearchCity from './Components/SearchCity/SearchCity'
import WindowWeather from './Components/WindowWeather/WindowWeather'
import Location from './Components/Location/Location'
import axios from 'axios'
import cloudDefault from './image/cloud.svg'
import {getTime} from './helpers/getTime'
import {useSelector} from 'react-redux'

const serverUrl = 'https://api.openweathermap.org/data/2.5/weather'
const apiKey = 'a278804ed34822e20087d1c2cd1be125'

function App() {
    const [city, setCity] = useState('')
    const [data, setData] = useState('')
    const [favoriteCities, setFavoriteCities] = useState([])

    const currentCity = useSelector((state) => state.citiesList.newCurrentCity)

    // useEffect(() => {
    //     show();
    // }, [city]);

    const defaultValue = {
        temperature: '14°',
        cloud: cloudDefault,
        city: 'Aktobe',
    }
    const actualDatas = data
        ? {
              temperature: Math.round(data.main.temp),
              cloud: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
              city: data.name,
              feels: Math.round(data.main.feels_like),
              weather: data.weather[0].main,
              sunrise: getTime(data.sys.sunrise),
              sunset: getTime(data.sys.sunset),
          }
        : {...defaultValue}

    async function searchCity(city) {
        const url = `${serverUrl}?q=${city}&appid=${apiKey}&units=metric`
        try {
            if (city) {
                const response = await axios.get(url)
                let result = await response.data
                console.log(result)
                setData(result)
                setCity('')
            }
        } catch (error) {
            console.error(error)
        }
    }

    function handleSetSearchCity(e) {
        // debugger
        e.preventDefault()
        searchCity(currentCity)
    }

    function handleShowCity(city) {
        setCity(city)
        searchCity(city)
    }

    function addFavoriteCity() {
        setFavoriteCities(new Set([actualDatas.city, ...favoriteCities]))
        console.log(favoriteCities)
    }

    return (
        <div className="wrapper">
            <div className="weather">
                <SearchCity handleSetSearchCity={handleSetSearchCity} />

                <div className="result">
                    <WindowWeather actualDatas={actualDatas} addFavoriteCity={addFavoriteCity} />

                    <Location handleShowCity={handleShowCity} />
                    {/* <Location favoriteCities={favoriteCities} handleShowCity={handleShowCity} /> */}
                </div>
            </div>
        </div>
    )
}

export default App
