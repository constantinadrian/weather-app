import React, { useState, useRef, useLayoutEffect } from "react";
import Card from "react-bootstrap/Card";

import CardWrapper from "../Layout/CardWrapper";
import classes from "./ForecastSwiper.module.css";
import { connect } from "react-redux";
import { motion } from "framer-motion";

import dayjs from "dayjs";
import {
    CELSIUS,
    DAYS,
    HOURS,
} from "../../store/WeatherSettings/weatherSettingsActionTypes";

// turn component into a motion component
const MotionCardWrapper = motion(CardWrapper);
const MotionCardBody = motion(Card.Body);
const MotionCardText = motion(Card.Text);
const MotionCardImg = motion(Card.Img);

const ForecastSwiper = (props) => {
    const swiperRef = useRef(null);
    const constraintRef = useRef(null);
    const [constraintStyle, setConstraintStyle] = useState({
        position: "absolute",
        width: 0,
        left: 0,
    });

    // change dynamic constraints when window resize
    useLayoutEffect(() => {
        const calcConstraint = () => {
            const offsetWidth = swiperRef?.current?.offsetWidth;
            const scrollWidth = swiperRef?.current?.scrollWidth;

            let left = offsetWidth - scrollWidth;
            let width = offsetWidth + (scrollWidth - offsetWidth);

            // take the card wrapper margin into consideration (1rem)
            if (offsetWidth !== scrollWidth) {
                left = offsetWidth - scrollWidth - 16;
                width = offsetWidth + (scrollWidth - offsetWidth) + 16;
            }

            setConstraintStyle((prev) => ({
                ...prev,
                width: width,
                left: left,
            }));
        };

        calcConstraint();
        window.addEventListener("resize", calcConstraint);

        return () => window.removeEventListener("resize", calcConstraint);
    }, []);

    // variants for framer-motion animation
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.07,
                delayChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    };

    const forecastCardWrapperClasses =
        props.forecast_scale === HOURS
            ? `${classes["card-forecast-hours"]}`
            : `${classes["card-forecast-days"]}`;

    // swiper for forecast hours and days
    return (
        <>
            <motion.div
                whileTap={{ cursor: "grabbing" }}
                className={`${classes["card-forecast-swiper"]} overflow-hidden`}
                variants={container}
                initial="hidden"
                animate="show"
            >
                <motion.div
                    drag="x"
                    ref={swiperRef}
                    dragConstraints={constraintRef}
                    className="d-flex position-relative justify-content-between pb-3"
                >
                    {props.forecast_weather.map((forecast, idx) => (
                        <MotionCardWrapper
                            key={idx}
                            className={`${forecastCardWrapperClasses} d-flex flex-row mx-3`}
                            variants={item}
                        >
                            <motion.div className="position-relative d-flex flex-column justify-content-center align-items-center h-100 w-100">
                                <MotionCardBody className="pb-3 d-flex flex-column align-items-stretch h-100">
                                    {props.forecast_scale === HOURS && (
                                        <MotionCardText>
                                            {idx === 0
                                                ? "Now"
                                                : dayjs(forecast.hour).format(
                                                      "HH"
                                                  )}
                                        </MotionCardText>
                                    )}
                                    {props.forecast_scale === DAYS && (
                                        <MotionCardText>
                                            {idx === 0
                                                ? "Today"
                                                : dayjs(forecast.date).format(
                                                      "dddd"
                                                  )}
                                        </MotionCardText>
                                    )}
                                </MotionCardBody>

                                <motion.div className="d-flex justify-content-center align-items-center position-relative">
                                    {!!forecast.will_it_snow && (
                                        <MotionCardText
                                            className={`${classes["card-forecast-percentage"]}`}
                                        >
                                            {forecast.chance_of_snow}
                                            <small>%</small>
                                        </MotionCardText>
                                    )}

                                    {!!!forecast.will_it_snow &&
                                        !!forecast.will_it_rain && (
                                            <MotionCardText
                                                className={`${classes["card-forecast-percentage"]}`}
                                            >
                                                {forecast.chance_of_rain}
                                                <small>%</small>
                                            </MotionCardText>
                                        )}
                                </motion.div>

                                <MotionCardText className="d-flex justify-content-center align-items-center position-relative p-3">
                                    <MotionCardImg
                                        className={`${classes["card-forecast-icon"]}`}
                                        src={forecast.icon}
                                    />
                                </MotionCardText>

                                <MotionCardText className="pb-3">
                                    {props.temp_scale === CELSIUS
                                        ? forecast.temp_c
                                        : forecast.temp_f}
                                    °
                                </MotionCardText>
                            </motion.div>
                        </MotionCardWrapper>
                    ))}
                </motion.div>
                <motion.div style={constraintStyle} ref={constraintRef} />
            </motion.div>
        </>
    );
};

const mapStateToProps = (state) => ({
    temp_scale: state.weatherSettings.temp_scale,
    forecast_scale: state.weatherSettings.forecast_scale,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ForecastSwiper);
