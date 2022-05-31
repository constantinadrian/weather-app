import React from "react";
import Card from "react-bootstrap/Card";
import AddToFavoriteButton from "./AddToFavoriteButton";

import classes from "./WeatherCardHeader.module.css"

const WeatherCardHeader = () => {
    return (
        <>
            <Card.Header className={`${classes["card-header"]}`}>
                <AddToFavoriteButton />
            </Card.Header>
        </>
    );
};

export default WeatherCardHeader;
