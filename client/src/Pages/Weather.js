import React from "react";
import Main from "../components/Layout/Main";
import WeatherCard from "../components/UI/WeatherCard";
import WeatherSearchForm from "../components/UI/WeatherSearchForm";

const Weather = () => {
    return (
        <Main>
            <WeatherSearchForm />
            <WeatherCard />
        </Main>
    );
};

export default Weather;
