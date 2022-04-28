import React from "react";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";

import classes from "./WeatherCard.module.css";

import CardWrapper from "../Layout/CardWrapper";

const WeatherCard = (props) => {
    if (props.response_location) {
        return (
            <>
                <CardWrapper>
                    <Card.Header className={`${classes["card-header"]}`}>
                        <div className="pb-3">
                            <div className="my-1">
                                {props.response_location}
                            </div>
                            <div className={`${classes["weather-contry"]}`}>
                                {props.country}
                            </div>
                        </div>
                        <p className="weather-info pb-5">{props.condition}</p>
                    </Card.Header>
                    <div className="d-flex justify-content-center align-items-center position-relative">
                        <Card.Img
                            className={`${classes["card-weather-icon"]}`}
                            src={props.icon}
                        />
                    </div>
                    <Card.Body className="mt-5">
                        <Card.Title className="pb-5">
                            {props.temp_c}°
                        </Card.Title>
                        <div className="d-flex justify-content-center align-items-center flex-wrap">
                            <Card.Text>
                                {props.maxtemp_c}° {props.mintemp_c}°
                            </Card.Text>
                        </div>
                    </Card.Body>
                    <Card.Footer className="text-muted">Powered by <a href="https://www.weatherapi.com/" title="Free Weather API" target="_blank" rel="noopener noreferrer">WeatherAPI.com</a></Card.Footer>
                </CardWrapper>
            </>
        );
    } else {
        return null;
    }
};

const mapStateToProps = (state) => ({
    location: state.weather.location,
    response_location: state.weather.response_location,
    country: state.weather.country,
    condition: state.weather.condition,
    icon: state.weather.icon,
    temp_c: state.weather.temp_c,
    temp_f: state.weather.temp_f,

    maxtemp_c: state.weather.maxtemp_c,
    maxtemp_f: state.weather.maxtemp_f,
    mintemp_c: state.weather.mintemp_c,
    mintemp_f: state.weather.mintemp_f,

    hourly_forecast: state.weather.hourly_forecast,
});

export default connect(mapStateToProps)(WeatherCard);
