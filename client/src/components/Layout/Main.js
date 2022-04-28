import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import classes from "./Main.module.css";

const Main = (props) => {
    return (
        <div className={`${classes["bg-weather-night"]}`}>
            <Container className="d-flex justify-content-center align-items-center flex-column py-5">
                <Row className="w-100">
                    <Col className={`${classes["col-weather"]}`}>
                        {props.children}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;
