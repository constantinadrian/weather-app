import React from "react";
import Card from "react-bootstrap/Card";
import classes from './CardWrapper.module.css';

const CardWrapper = (props) => {
    return (
        <Card className={`${classes.card} text-center ${props.className ? props.className : ''}`}>
            {props.children}
        </Card>
    );
};

export default CardWrapper;
