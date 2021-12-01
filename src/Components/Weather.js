import React from 'react';
import WeatherForecast from "./WeatherForecast";
import CurrentWeather from "./CurrentWeather";

function Weather({ weather, roundDegree }) {

    if (Object.keys(weather).length === 0) {
        return (<div></div>)
    }
    else {
        if ('error' in weather) {
            return (<div className="ma2">Could not find the location.</div>)
        }
    }

    return (
        <div className="app-body">
            <CurrentWeather current={weather.current} location={weather.location}/>
            <WeatherForecast forecasts={weather.forecast.forecastday}/>
            
        </div>

    )
}

export default Weather;