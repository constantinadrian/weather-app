import React from "react";
import Card from "react-bootstrap/Card";

import CardWrapper from "../Layout/CardWrapper";
import classes from "./ForecastDays.module.css";
import { connect } from "react-redux";

import dayjs from "dayjs";


const ForecastDays = (props) => {

    return (
        <>
            <div className="d-flex position-relative justify-content-around overflow-hidden pb-3">
                {props.days_forecast.map((day, idx) => (
                    <CardWrapper
                        key={idx}
                        className={`${classes["card-forecast-days"]} d-flex flex-row mx-3`}
                    >
                        <div className="position-relative d-flex flex-column justify-content-center align-items-center h-100 w-100">
                            <Card.Body className="pb-3 d-flex flex-column align-items-stretch h-100">
                                <Card.Text>
                                    {idx === 0
                                        ? "Today"
                                        : dayjs(day.date).format("dddd")}
                                </Card.Text>
                            </Card.Body>

                            <div className="d-flex justify-content-center align-items-center position-relative">
                                {!!day.daily_will_it_snow && (
                                    <Card.Text
                                        className={`${classes["card-forecast-percentage"]}`}
                                    >
                                        {day.daily_chance_of_snow}
                                        <small>%</small>
                                    </Card.Text>
                                )}

                                {!(!!day.daily_will_it_snow) &&
                                    !!day.daily_will_it_rain && (
                                        <Card.Text
                                            className={`${classes["card-forecast-percentage"]}`}
                                        >
                                            {day.daily_chance_of_rain}
                                            <small>%</small>
                                        </Card.Text>
                                    )}
                            </div>

                            <Card.Text className="d-flex justify-content-center align-items-center position-relative p-3">
                                <Card.Img
                                    className={`${classes["card-forecast-icon"]}`}
                                    src={day.icon}
                                />
                            </Card.Text>

                            <Card.Text className="pb-3">{day.temp_c}</Card.Text>
                        </div>
                    </CardWrapper>
                ))}
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    days_forecast: state.weather.days_forecast,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ForecastDays);
