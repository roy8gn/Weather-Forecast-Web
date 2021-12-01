import React from 'react';
import WeatherHourCard from './WeatherHourCard';

function ForecastPerHour({ hours, show }) {
    if(show===false){
        return <div></div>
    }
    const current = new Date()
    
    return (
        <div>
            {
                hours.map((hour, i) => {
                    var date = new Date(0)
                    date.setUTCSeconds(hour.time_epoch)
                    if(current.getDay()==date.getDay() && current.getHours()>=date.getHours()){
                        return <div></div>
                    }
                    return (
                        <WeatherHourCard kay={i} hour={hour}/>
                    );
                })
            }
        </div>
    );
}

export default ForecastPerHour;