import React from "react";
import { connect } from "react-redux";

import Card from "react-bootstrap/Card";
import Main from "../components/Layout/Main";
import CardWrapper from "../components/Layout/CardWrapper";
import SettingsButton from "../components/UI/SettingsButton";

import {
    CELSIUS,
    FAHRENHEIT,
    KM,
    MILES,
    MILLIBARS,
    INCHES,
} from "../store/WeatherSettings/weatherSettingsActionTypes";
import {
    changeTempScale,
    changeMetricScale,
    changePressureScale,
} from "../store/WeatherSettings/weatherSettingsActions";

const WeatherSettings = ({
    setTempScale,
    setMetricScale,
    setPressureScale,
    ...props
}) => {
    const tempSettingsProps = {
        setSettingsScale: setTempScale,
        settings_scale_name: "tempScale",
        settings_scale: props.temp_scale,
        btn_value_1: CELSIUS,
        btn_dispay_1: "°C",
        btn_value_2: FAHRENHEIT,
        btn_dispay_2: "°F",
    };

    const metricSettingsProps = {
        setSettingsScale: setMetricScale,
        settings_scale_name: "metricScale",
        settings_scale: props.metric_scale,
        btn_value_1: KM,
        btn_dispay_1: "Km",
        btn_value_2: MILES,
        btn_dispay_2: "Miles",
    };

    const pressureSettingsProps = {
        setSettingsScale: setPressureScale,
        settings_scale_name: "pressureScale",
        settings_scale: props.pressure_scale,
        btn_value_1: MILLIBARS,
        btn_dispay_1: "hPa",
        btn_value_2: INCHES,
        btn_dispay_2: "Hg",
    };
    return (
        <Main>
            <CardWrapper className="px-3 py-5">
                <Card.Title className="mb-5">Weather Settings</Card.Title>
                <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
                    <Card.Text className="m-0">Temperature</Card.Text>
                    <SettingsButton {...tempSettingsProps} />
                </div>
                <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
                    <Card.Text className="m-0">Metric</Card.Text>
                    <SettingsButton {...metricSettingsProps} />
                </div>
                <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
                    <Card.Text className="m-0">Pressure</Card.Text>
                    <SettingsButton {...pressureSettingsProps} />
                </div>
            </CardWrapper>
        </Main>
    );
};

const mapStateToProps = (state) => ({
    temp_scale: state.weatherSettings.temp_scale,
    metric_scale: state.weatherSettings.metric_scale,
    pressure_scale: state.weatherSettings.pressure_scale,
});

const mapDispatchToProps = (dispatch) => ({
    setTempScale: (data) => {
        dispatch(changeTempScale(data));
    },

    setMetricScale: (data) => {
        dispatch(changeMetricScale(data));
    },

    setPressureScale: (data) => {
        dispatch(changePressureScale(data));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherSettings);
