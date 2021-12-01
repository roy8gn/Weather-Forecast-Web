import React from 'react';
import { FaTemperatureHigh } from 'react-icons/fa';
import { BsCloudRainHeavy } from 'react-icons/bs';
import { MdOutlineWaterDrop } from 'react-icons/md';
import { Container, Row, Col } from 'react-bootstrap';

function convertToHourString(dateString) {
    let dateArray = dateString.split(" ");
    return dateArray[1]
}

function WeatherHourCard({ hour }) {
    const hourString = convertToHourString(hour.time)

    return (
        <div>
            <Container>
                <Row className='weather-forcast-card-hour'>
                    <Col className='detail main-detail'>{hourString}</Col>
                    <Col className='detail main-detail'>{hour.temp_c}°C</Col>
                    <Col xs={3} className='detail'><FaTemperatureHigh  className="icon"/> Feels like {hour.feelslike_c}°C</Col>
                    <Col className='detail'><BsCloudRainHeavy  className="icon"/> {hour.chance_of_rain}%</Col>
                    <Col xs={3} className='detail'><MdOutlineWaterDrop  className="icon"/> {hour.humidity}% humidity</Col>
                    <Col xs={2} className='detail'>{hour.condition.text}</Col>
                </Row>
            </Container>
        </div>

    )
}

export default WeatherHourCard;