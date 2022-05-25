import { useState, useEffect } from "react";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";


import classes from "./ToggleButtonForecast.module.css";
import useBtnBackgroundSliding from "../../hooks/useBtnBackgroundSliding";


const SettingsButton = ({setSettingsScale, ...props}) => {
    const [value, setValue] = useState(localStorage.getItem(props.settings_scale_name) ? localStorage.getItem(props.settings_scale_name) : props.settings_scale);
    const {leftSide, backgroundWidth, btnRef_1, btnRef_2, toggleWidth} =
        useBtnBackgroundSliding();

    // get the settings scale from localStorage if any
    useEffect(() => {
        if (localStorage.getItem(props.settings_scale_name)) {
            setSettingsScale(localStorage.getItem(props.settings_scale_name));
        }
    });

    // set the background to settings scale
    useEffect(() => {
        toggleWidth(value);
    }, [toggleWidth, value]);

    // set the settings scale on change
    const handleChange = (val) => {
        setValue(val);
        setSettingsScale(val);
        localStorage.setItem(props.settings_scale_name, val);
    };

    return (
        <div className="position-relative overflow-hidden">
            <ToggleButtonGroup
                className={`${classes["weather-z-index"]} border border-primary position-relative`}
                type="radio"
                name={props.settings_scale_name}
                value={value}
                onChange={handleChange}
            >
                <ToggleButton
                    id={`${props.btn_value_1}-tbg-radio-1`}
                    ref={btnRef_1}
                    className={`bg-transparent ${classes["btn-label"]} shadow-none border-0`}
                    name="radio"
                    value={props.btn_value_1}
                >
                    {props.btn_dispay_1}
                </ToggleButton>
                <ToggleButton
                    id={`${props.btn_value_2}-tbg-radio-2`}
                    ref={btnRef_2}
                    className={`bg-transparent ${classes["btn-label"]} shadow-none border-0`}
                    name="radio"
                    value={props.btn_value_2}
                >
                    {props.btn_dispay_2}
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

export default SettingsButton;