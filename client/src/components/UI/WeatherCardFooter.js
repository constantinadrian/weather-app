import React from "react";
import Card from "react-bootstrap/Card";
import classes from "./WeatherCardFooter.module.css";

const WeatherCardFooter = () => {
    return (
        <>
            <Card.Footer className="text-muted border-top-0">
                Powered by{" "}
                <a
                    href="https://www.weatherapi.com/"
                    title="Free Weather API"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    WeatherAPI.com
                </a>
            </Card.Footer>
            <footer className={`${classes['page-footer']}`}>
                <div className={`${classes['footer-moon']}`}></div>
                <div className={`${classes['footer-clouds']}`} ></div>
                <hr className="mt-0"/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="footer-copyright position-relative text-center pb-3">
                                © AC WEATHER 2022
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default WeatherCardFooter;
