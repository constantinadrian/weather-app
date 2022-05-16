import { useState, useEffect } from "react";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { connect } from "react-redux";
import { changeForecastScale } from "../../store/WeatherSettings/weatherSettingsActions";


import classes from "./ToggleButtonForecast.module.css";
import useBtnBackgroundSliding from "../../hooks/useBtnBackgroundSliding";

const ToggleButtonForecast = ({setForecastScale, ...props}) => {
    const [value, setValue] = useState(localStorage.getItem("forecastScale") ? localStorage.getItem("forecastScale") : props.forecast_scale);
    const {leftSide, backgroundWidth, btnRef_1, btnRef_2, toggleWidth} =
        useBtnBackgroundSliding();

    // get the forecast scale from localStorage if any
    useEffect(() => {
        if (localStorage.getItem("forecastScale")) {
            setForecastScale(localStorage.getItem("forecastScale"));
        }
    }, [setForecastScale]);

    // set the background to forecast scale
    useEffect(() => {
        toggleWidth(value);
    }, [toggleWidth, value]);

    // set the forecast scale on change
    const handleChange = (val) => {
        setValue(val);
        setForecastScale(val);
        localStorage.setItem("forecastScale", val);
    };

    return (
        <div className="position-relative overflow-hidden">
            <ToggleButtonGroup
                className={`${classes["weather-z-index"]} border border-primary position-relative`}
                type="radio"
                name="forecast"
                value={value}
                onChange={handleChange}
            >
                <ToggleButton
                    id="tbg-radio-1"
                    ref={btnRef_1}
                    className={`bg-transparent ${classes["btn-label"]} shadow-none border-0`}
                    name="radio"
                    value={"hours"}
                >
                    Hours
                </ToggleButton>
                <ToggleButton
                    id="tbg-radio-2"
                    ref={btnRef_2}
                    className={`bg-transparent ${classes["btn-label"]} shadow-none border-0`}
                    name="radio"
                    value={"days"}
                >
                    Days
                </ToggleButton>
                <div
                className={`${classes["btn-active"]}`}
                style={{
                    left: `${leftSide}px`,
                    width: `${backgroundWidth}px`,
                }}
            ></div>
            </ToggleButtonGroup>

        </div>
    );
};


const mapStateToProps = (state) => ({
    forecast_scale: state.weatherSettings.forecast_scale,
});

const mapDispatchToProps = (dispatch) => ({
    setForecastScale: (data) => {
        dispatch(changeForecastScale(data));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ToggleButtonForecast);