import React from "react";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";

import CardWrapper from "../Layout/CardWrapper";
import classes from "./WeatherCardPlaceholder.module.css";

const WeatherCardPlaceholder = () => {
    return (
        <>
            <CardWrapper>
                <Card.Header className={`${classes["card-header"]}`}>
                    <Placeholder as={Card.Title} animation="glow">
                        <Placeholder
                            style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                            }}
                        />
                    </Placeholder>
                </Card.Header>

                <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder
                        as={Card.Title}
                        animation="glow"
                        className="mb-3 pb-3"
                    >
                        <Placeholder xs={4} size="xs" />
                    </Placeholder>

                    <div
                        className={`${classes["card-weather-info"]} d-flex  position-relative py-3 mb-3`}
                    >
                        <div
                            className={`${classes["card-weather-info-details"]} d-flex justify-content-center align-items-center flex-wrap`}
                        >
                            <Placeholder as={Card.Text} animation="glow">
                                <Placeholder
                                    className={`${classes["card-weather-icon"]}`}
                                    xs={3}
                                    style={{
                                        width: "100px",
                                        height: "100px",
                                        marginRight: "16px",
                                        marginBottom: "16px",
                                    }}
                                />

                                <Placeholder
                                    xs={3}
                                    style={{
                                        width: "50px",
                                        height: "100px",
                                        marginBottom: "16px",
                                    }}
                                />
                            </Placeholder>
                        </div>

                        <Placeholder
                            as={Card.Text}
                            xs={3}
                            className={`${classes["weather-condition"]}`}
                            animation="glow"
                        >
                            <Placeholder xs={12} />
                        </Placeholder>
                    </div>

                    <div className="d-flex justify-content-between align-items-start flex-wrap">
                        <Placeholder as={Card.Text} xs={3} animation="glow">
                            <Placeholder xs={12} />
                        </Placeholder>
                        <Placeholder as={Card.Text} xs={3} animation="glow">
                            <Placeholder xs={12} />
                        </Placeholder>
                    </div>
                </Card.Body>

                <Placeholder
                    as={Card.Text}
                    className="p-3 overflow-hidden d-flex flex-row flex-nowrap"
                    animation="glow"
                >
                    {[1, 2, 3, 4, 5, 6].map((idx) => (
                        <Placeholder
                            key={idx}
                            xs={3}
                            style={{
                                width: "50px",
                                height: "100px",
                                marginRight: "32px",
                                marginBottom: "16px",
                            }}
                        />
                    ))}
                </Placeholder>

                <hr />

                {[1, 2, 3, 4, 5, 6].map((idx) => (
                    <div
                        key={idx}
                        className="d-flex justify-content-center align-items-start mb-1"
                    >
                        <Placeholder
                            as={Card.Text}
                            xs={3}
                            animation="glow"
                            style={{
                                marginRight: "16px",
                            }}
                        >
                            <Placeholder xs={12} />
                        </Placeholder>
                        <Placeholder as={Card.Text} xs={3} animation="glow">
                            <Placeholder xs={12} />
                        </Placeholder>
                    </div>
                ))}

                <Card.Footer className="d-flex justify-content-center align-items-center">
                    <Placeholder as={Card.Text} xs={6} animation="glow">
                        <Placeholder xs={12} />
                    </Placeholder>
                </Card.Footer>
            </CardWrapper>
        </>
    );
};

export default WeatherCardPlaceholder;
