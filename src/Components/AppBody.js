import React, { useState } from 'react';
import Weather from "./Weather";
import { Button } from 'react-bootstrap';

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
            const weatherApiCall = `https://api.weatherapi.com/v1/forecast.json?key=${key1}&q=${location}&days=6&aqi=no&alerts=no`
            fetch(weatherApiCall)
                .then(res => res.json())
                .then(result => {
                    setWeather(result)
                })
    }

    return (
        <div className="app-body">
            <div className="flex-wrap">
                <input id="weatherLocation" className="search-input"
                    placeholder="Search for a city..." type="text" onChange={onChangeLocation} />
                <Button variant="secondary" className="SearchdBtn grow" onClick={Search}>Search</Button>
            </div>
            <Weather weather={weather} roundDegree={roundDegree} />
        </div>
    )
}

export default AppBody;