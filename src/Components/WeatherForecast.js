import React from 'react';
import WeatherDayCard from './WeatherDayCard';


function WeatherForecast({ forecasts, roundDegree }) {
    return (
        <div className='weather-forcast'>
            {
                forecasts.map((forecast, i) => {
                    return (
                        <WeatherDayCard kay={i} forecast={forecast}/>
                    );
                })
            }
        </div>
    );
}

export default WeatherForecast;