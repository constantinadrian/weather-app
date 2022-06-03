import React, { lazy, Suspense } from "react";
import Main from "../components/Layout/Main";
import WeatherCardPlaceholder from "../components/UI/WeatherCardPlaceholder";
import WeatherSearchForm from "../components/UI/WeatherSearchForm";

const WeatherCard = lazy(() => import("../components/UI/WeatherCard"));

const Weather = () => {
    return (
        <Main>
            <WeatherSearchForm />
            <Suspense fallback={<WeatherCardPlaceholder />}>
                <WeatherCard />
            </Suspense>
        </Main>
    );
};

export default Weather;
