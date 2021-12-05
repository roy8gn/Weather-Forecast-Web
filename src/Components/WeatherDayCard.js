import React, { useState } from 'react';
import ForecastPerHour from './ForecastPerHour';
import { FiSunrise } from 'react-icons/fi';
import { FiSunset } from 'react-icons/fi';
import { FaTemperatureLow } from 'react-icons/fa';
import {Container, Row, Col, Button} from 'react-bootstrap';

function convertToNormalDateFormat(dateString) {
    let dateArray = dateString.split("-");
    //console.log(dateArray)
    return dateArray[2] + "/" + dateArray[1] + "/" + dateArray[0]
}

function WeatherDayCard({ forecast }) {
    const [showHours, setShowHours] = useState(false)
    const [buttonText, setButtonText] = useState("Expand")

    const date = convertToNormalDateFormat(forecast.date)

    const onButtonClick = () => {
        if(buttonText=== "Expand")
        {
            setButtonText("Hide")
        }
        else{
            setButtonText("Expand")
        }
        setShowHours(!showHours)
    }

    return (
        <div className="">
            <Container>
                <Row className='weather-forcast-card-day'>
                    <Col className='detail main-detail'>{date}</Col>
                    <Col xs={2} className='detail'><FaTemperatureLow className="icon" /> {forecast.day.mintemp_c}°C - {forecast.day.maxtemp_c}°C</Col>
                    <Col xs={2} className='detail'><FiSunrise className="icon" /> {forecast.astro.sunrise}</Col>
                    <Col xs={2}className='detail'><FiSunset className="icon" /> {forecast.astro.sunset}</Col> 
                    <Col className='detail'>{forecast.day.condition.text}</Col>
                    <Col><Button className="viewHoursdBtn grow" onClick={onButtonClick}>{buttonText}</Button></Col>
                </Row>
            </Container>
            <div>
                <ForecastPerHour hours={forecast.hour} show={showHours}/>
            </div>
        </div>
    )
}

export default WeatherDayCard;