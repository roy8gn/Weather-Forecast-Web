import React, { useState } from 'react';
import Weather from "./Weather";


function AppBody() {
    const [location, setLocation] = useState('')
    const [weather, setWeather] = useState({})

    const key1 = '59e6b01c841048acabf125327212911'
    const roundDegree = (number) => {
        return Math.round(number * 10) / 10;
    }

    const onChangeLocation = (event) => {
        setLocation(event.target.value);
    }

    const Search = (event) => {
        if (event.key === "Enter") {
            const weatherApiCall = `http://api.weatherapi.com/v1/forecast.json?key=${key1}&q=${location}&days=6&aqi=no&alerts=no`
            fetch(weatherApiCall)
                .then(res => res.json())
                .then(result => {
                    setWeather(result)
                })
        }
    }

    return (
        <div className="app-body">
            <input id="weatherLocation" className="search-input"
                placeholder="Search for a city..." type="text" onChange={onChangeLocation} onKeyPress={Search} />
            <Weather weather={weather} roundDegree={roundDegree} />
        </div>
    )
}

export default AppBody;