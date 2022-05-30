import React from "react";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import ToggleButtonForecast from "./ToggleButtonForecast";
import classes from "./WeatherCard.module.css";

import CardWrapper from "../Layout/CardWrapper";
import ForecastWeather from "./ForecastWeather";
import {
    CELSIUS,
    FAHRENHEIT,
} from "../../store/WeatherSettings/weatherSettingsActionTypes";
import CurrentWeatherDetails from "./CurrentWeatherDetails";

const WeatherCard = (props) => {
    if (props.response_location) {
        return (
            <>
                <CardWrapper>
                    <Card.Header
                        className={`${classes["card-header"]}`}
                    >
                    </Card.Header>

                    <Card.Body>
                        <Card.Title className="my-1">
                            {props.response_location}
                        </Card.Title>
                        <div className={`${classes["weather-contry"]}`}>
                            {props.country}
                        </div>

                        <div
                            className={`${classes["card-weather-info"]} d-flex align-items-center position-relative py-3 mb-3`}
                        >
                            <div
                                className={`${classes["card-weather-info-details"]} d-flex justify-content-center align-items-center flex-wrap`}
                            >
                                <Card.Img
                                    className={`${classes["card-weather-icon"]}`}
                                    src={props.icon}
                                />
                                <Card.Title
                                    className={`${classes["card-weather-temp"]}`}
                                >
                                    {props.temp_scale === CELSIUS
                                        ? props.temp_c
                                        : props.temp_f}
                                    °
                                </Card.Title>
                            </div>

                            <p className={`${classes["weather-condition"]}`}>
                                {props.condition}
                            </p>
                        </div>

                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                            <ToggleButtonForecast />
                            {props.temp_scale === CELSIUS && (
                                <Card.Text>
                                    {props.maxtemp_c}° {props.mintemp_c}°
                                </Card.Text>
                            )}
                            {props.temp_scale === FAHRENHEIT && (
                                <Card.Text>
                                    {props.maxtemp_f}° {props.mintemp_f}°
                                </Card.Text>
                            )}
                        </div>
                    </Card.Body>
                    <ForecastWeather />
                    <CurrentWeatherDetails />

                    <Card.Footer className="text-muted">
                        Powered by{" "}
                        <a
                            href="https://www.weatherapi.com/"
                            title="Free Weather API"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            WeatherAPI.com
                        </a>
                    </Card.Footer>
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

    temp_scale: state.weatherSettings.temp_scale,
});

export default connect(mapStateToProps)(WeatherCard);
