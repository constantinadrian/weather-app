import React from "react";
import { connect } from "react-redux";
import { DAYS, HOURS } from "../../store/WeatherSettings/weatherSettingsActionTypes";

import ForecastSwiper from "./ForecastSwiper";

const ForecastWeather = (props) => {
    return (
        <>
            {props.forecast_scale === HOURS && (
                <ForecastSwiper forecast_weather={props.hourly_forecast} />
            )}
            {props.forecast_scale === DAYS && (
                <ForecastSwiper forecast_weather={props.days_forecast} />
            )}
        </>
    );
};

const mapStateToProps = (state) => ({
    forecast_scale: state.weatherSettings.forecast_scale,
    hourly_forecast: state.weather.hourly_forecast,
    days_forecast: state.weather.days_forecast,
});

export default connect(mapStateToProps)(ForecastWeather);
