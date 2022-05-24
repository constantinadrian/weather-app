import React from "react";
import classes from './WelcomePage.module.css';
import { Link } from 'react-router-dom';

const WelcomePage = (props) => {

    return (
        <div className={`${classes["full-screen"]}`} >
            <div className={`d-flex justify-content-center align-items-center flex-column h-100 text-center text-break`}>
                <h1>Weather App</h1>
                <Link className="text-black" to="/weather">Enter</Link>
            </div>
        </div>
    )
};

export default WelcomePage;