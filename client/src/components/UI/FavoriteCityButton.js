import React from "react";
import { connect } from "react-redux";
import { motion } from "framer-motion";

import { Card } from "react-bootstrap";

import { CELSIUS } from "../../store/WeatherSettings/weatherSettingsActionTypes";
import CardWrapper from "../Layout/CardWrapper";

import classes from "./FavoriteCityButton.module.css";

const FavoriteCityButton = (props) => {
    const onCLickEvent = () => {
        props.onClick(props.search_location);
    };

    // variants for framer-motion animation
    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    };

    return (
        <>
            <motion.div
                variants={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onCLickEvent}
                className={`${classes["FavoriteCityWeatherContainer"]} mb-3`}
            >
                <CardWrapper
                    className={`${classes["favorite-city-weather-wrapper"]} flex-row justify-content-between align-items-center flex-wrap px-3 py-1  text-break`}
                >
                    <Card.Text className="m-0">{props.city}</Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                        <Card.Img
                            className={`${classes["favorite-city-weather-icon"]}`}
                            src={props.icon}
                        />

                        <Card.Text>
                            {props.temp_scale === CELSIUS
                                ? props.temp_c
                                : props.temp_f}
                            °
                        </Card.Text>
                    </div>
                </CardWrapper>
            </motion.div>
        </>
    );
};

const mapStateToProps = (state) => ({
    temp_scale: state.weatherSettings.temp_scale,
});

export default connect(mapStateToProps)(FavoriteCityButton);
