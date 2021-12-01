import React from 'react';
import { MdOutlineWaterDrop } from 'react-icons/md';
import { FaTemperatureHigh } from 'react-icons/fa';
import { GiWindTurbine } from 'react-icons/gi';
import { FaWind } from 'react-icons/fa';


function CurrentWeather({current, location}) { 
    return (
        <div className='current-weather'>
                <div className="city">{location.name}, {location.country}</div>
                <div className="temp">{current.temp_c}°C</div>
                <div className="description">{current.condition.text}</div>
                <div className="flex-wrap">
                    <div className="detail" ><FaTemperatureHigh className="icon"/> Feels like {current.feelslike_c}°C</div>
                    <div className="detail"><MdOutlineWaterDrop className="icon"/> {current.humidity}% humidity</div>
                    <div className="detail"><FaWind className="icon" /> Wind Speed: {current.wind_kph}Km/Hour</div>
                    <div className="detail"><GiWindTurbine className="icon" /> Wind Direction: {current.wind_dir}</div>
                </div> 
        </div>

    )
}

export default CurrentWeather;