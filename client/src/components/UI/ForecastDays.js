import React, { useState, useRef, useLayoutEffect } from "react";
import Card from "react-bootstrap/Card";

import CardWrapper from "../Layout/CardWrapper";
import classes from "./ForecastDays.module.css";
import { connect } from "react-redux";
import { motion } from "framer-motion";

import dayjs from "dayjs";

// turn component into a motion component
const MotionCardWrapper = motion(CardWrapper);
const MotionCardBody = motion(Card.Body);
const MotionCardText = motion(Card.Text);
const MotionCardImg = motion(Card.Img);

const ForecastDays = (props) => {
    const carouselRef = useRef(null);
    const constraintRef = useRef(null);
    const [constraintStyle, setConstraintStyle] = useState({
        position: "absolute",
        width: 0,
        left: 0,
    });

    // change dynamic constraints when window resize
    useLayoutEffect(() => {
        const calcConstraint = () => {
            const offsetWidth = carouselRef?.current?.offsetWidth;
            const scrollWidth = carouselRef?.current?.scrollWidth;

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

    // // carousel forecast days
    return (
        <>
            <motion.div
                whileTap={{ cursor: "grabbing" }}
                className={`${classes["card-forecast-carousel"]} overflow-hidden`}
            >
                <motion.div
                    drag="x"
                    ref={carouselRef}
                    dragConstraints={constraintRef}
                    className="d-flex position-relative justify-content-between pb-3"
                >
                    {props.days_forecast.map((day, idx) => (
                        <MotionCardWrapper
                            key={idx}
                            className={`${classes["card-forecast-days"]} d-flex flex-row mx-3`}
                        >
                            <motion.div className="position-relative d-flex flex-column justify-content-center align-items-center h-100 w-100">
                                <MotionCardBody className="pb-3 d-flex flex-column align-items-stretch h-100">
                                    <MotionCardText>
                                        {idx === 0
                                            ? "Today"
                                            : dayjs(day.date).format("dddd")}
                                    </MotionCardText>
                                </MotionCardBody>

                                <motion.div className="d-flex justify-content-center align-items-center position-relative">
                                    {!!day.daily_will_it_snow && (
                                        <MotionCardText
                                            className={`${classes["card-forecast-percentage"]}`}
                                        >
                                            {day.daily_chance_of_snow}
                                            <small>%</small>
                                        </MotionCardText>
                                    )}

                                    {!!!day.daily_will_it_snow &&
                                        !!day.daily_will_it_rain && (
                                            <MotionCardText
                                                className={`${classes["card-forecast-percentage"]}`}
                                            >
                                                {day.daily_chance_of_rain}
                                                <small>%</small>
                                            </MotionCardText>
                                        )}
                                </motion.div>

                                <MotionCardText className="d-flex justify-content-center align-items-center position-relative p-3">
                                    <MotionCardImg
                                        className={`${classes["card-forecast-icon"]}`}
                                        src={day.icon}
                                    />
                                </MotionCardText>

                                <MotionCardText className="pb-3">
                                    {day.temp_c}°
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
    hourly_forecast: state.weather.hourly_forecast,
    days_forecast: state.weather.days_forecast,
    temp_scale: state.weatherSettings.temp_scale,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ForecastDays);
