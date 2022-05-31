import React from "react";
import Card from "react-bootstrap/Card";

const WeatherCardFooter = () => {
    return (
        <>
            <Card.Footer className="text-muted">
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
        </>
    );
};

export default WeatherCardFooter;
