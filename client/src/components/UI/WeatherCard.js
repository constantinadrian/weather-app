import React from "react";
import { connect } from "react-redux";

import CardWrapper from "../Layout/CardWrapper";
import ForecastWeather from "./ForecastWeather";
import CurrentWeatherDetails from "./CurrentWeatherDetails";
import WeatherCardHeader from "./WeatherCardHeader";
import WeatherCardBody from "./WeatherCardBody";
import WeatherCardFooter from "./WeatherCardFooter";

const WeatherCard = (props) => {
    if (props.response_location) {
        return (
            <>
                <CardWrapper>
                    <WeatherCardHeader />
                    <WeatherCardBody />
                    <ForecastWeather />
                    <CurrentWeatherDetails />
                    <WeatherCardFooter />
                </CardWrapper>
            </>
        );
    } else {
        return null;
    }
};

const mapStateToProps = (state) => ({
    response_location: state.weather.response_location,
});

export default connect(mapStateToProps)(WeatherCard);
