import React, { useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { motion } from "framer-motion";

import Main from "../components/Layout/Main";
import CardWrapper from "../components/Layout/CardWrapper";
import FavoriteCityButton from "../components/UI/FavoriteCityButton";
import { setLocation } from "../store/Weather/weatherActions";
import useHttp from "../hooks/useHttp";
import { updateFavoriteCity } from "../store/FavoriteCities/favoriteCitiesActions";

// turn component into a motion component
const MotionCardWrapper = motion(CardWrapper);

const FavoriteCities = ({
    setCityLocation,
    updateFavoriteCityTemp,
    ...props
}) => {
    const navigate = useNavigate();
    const { sendRequest } = useHttp();

    // use timer for setTimeout to avoid multiple api calls
    const timerRef = useRef(null);

    // declare variable
    const milliSecondsInOneSecond = 1000;
    const secondInOneHour = 3600;
    const milliSecondsInOneHour = milliSecondsInOneSecond * secondInOneHour;

    const fetchWeatherData = useCallback(
        async (location) => {
            const requestConfig = {
                url: "/api/weather-forecast",
                credentials: "include",
                mode: "cors",
                method: "POST",
                body: { city: location },
                headers: {
                    "Content-Type": "application/json",
                    "CSRF-Token": props.csrf_token,
                },
            };

            const loadWeatherData = (data) => {
                console.log("favorite city data", data);
                updateFavoriteCityTemp(data);
            };

            await sendRequest(requestConfig, loadWeatherData);
        },
        [sendRequest, updateFavoriteCityTemp, props.csrf_token]
    );

    useEffect(() => {
        props.favorite_cities.every((favorite) => {
            // update temperature for each favorite city every hour
            if (
                Date.now() - favorite.last_updated >
                milliSecondsInOneHour
            ) {
                timerRef.current = setTimeout(() => {
                    fetchWeatherData(favorite.search_location);
                }, 500);

                return false;
            }
            return true;
        });

        return () => clearTimeout(timerRef.current);
    }, [props.favorite_cities, fetchWeatherData, milliSecondsInOneHour]);

    // update local storage if favorite cities got updated
    useEffect(() => {
        localStorage.setItem(
            "favoriteCities",
            JSON.stringify(props.favorite_cities)
        );
    }, [props.favorite_cities]);

    const onClickHandler = (data) => {
        setCityLocation(data);
        navigate(`/weather`);
    };

    // variants for framer-motion animation
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.07,
                delayChildren: 0.3,
            },
        },
    };

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    };

    return (
        <Main>
            <MotionCardWrapper
                variants={container}
                initial="hidden"
                animate="show"
                className="px-3 py-5"
            >
                <motion.div variants={item} className="mb-5 card-title h5">
                    Favorite Cities
                </motion.div>
                {props.favorite_cities.map((favorite, idx) => (
                    <FavoriteCityButton
                        key={idx}
                        onClick={onClickHandler}
                        city={favorite.city}
                        search_location={favorite.search_location}
                        temp_c={favorite.temp_c}
                        temp_f={favorite.temp_f}
                        icon={favorite.icon}
                    />
                ))}
                {!props.favorite_cities.length && (
                    <motion.p variants={item}>
                        You don't have any favorites cities yet!
                    </motion.p>
                )}
            </MotionCardWrapper>
        </Main>
    );
};

const mapStateToProps = (state) => ({
    favorite_cities: state.favoriteCities.favorite_cities,

    csrf_token: state.csrf.csrf_token,
});

const mapDispatchToProps = (dispatch) => ({
    setCityLocation: (data) => {
        dispatch(setLocation(data));
    },

    updateFavoriteCityTemp: (data) => {
        dispatch(updateFavoriteCity(data));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCities);
