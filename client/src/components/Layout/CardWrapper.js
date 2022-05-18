import React from "react";
import Card from "react-bootstrap/Card";
import classes from './CardWrapper.module.css';

// forward ref to the DOM element you want to animate (for framer motion).
const CardWrapper = React.forwardRef((props, ref) => {
    return (
        <Card ref={ref} className={`${classes.card} text-center ${props.className ? props.className : ''}`}>
            {props.children}
        </Card>
    );
});

export default CardWrapper;
