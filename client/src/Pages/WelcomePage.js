import React from "react";
import classes from './WelcomePage.module.css';
import { Link } from 'react-router-dom';
import useVanta from "../hooks/useVanta";

const WelcomePage = (props) => {

    const myRefDiv = useVanta();

    return (
        <div className={`${classes["full-screen"]}`} ref={myRefDiv} >
            <div className={`d-flex justify-content-center align-items-center flex-column h-100 text-center text-break`}>
                <h1>Weather App</h1>
                <Link className="text-black" to="/weather">Enter</Link>
            </div>
        </div>
    )
};

export default WelcomePage;