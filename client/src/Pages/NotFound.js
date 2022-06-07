import React from "react";
import { Link } from "react-router-dom";

import classes from "./NotFound.module.css";

const NotFound = () => {
    return (
        <>
            <div className={`${classes["not-found"]}`}>
                <div
                    className={`d-flex justify-content-center align-items-center flex-column h-100 text-center text-break`}
                >
                    <h1>404</h1>
                    <h2>Oops got lost!</h2>
                    <Link
                        className={`${classes["not-found-text"]}`}
                        to="/weather"
                    >
                        Home
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NotFound;
