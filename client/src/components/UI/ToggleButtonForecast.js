import { useState, useEffect, useRef } from "react";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

import classes from "./ToggleButtonForecast.module.css";
import useBtnBackgroundSliding from "../../hooks/useBtnBackgroundSliding";

const ToggleButtonForecast = () => {
    const [value, setValue] = useState("hours");
    const {leftSide, backgroundWidth, btnRef_1, btnRef_2, toggleWidth} =
        useBtnBackgroundSliding();

    const togRef = useRef(null);

    useEffect(() => {
        toggleWidth(value);
    }, [toggleWidth, value]);


    const handleChange = (val) => {
        setValue(val);
    };

    return (
        <div className="position-relative overflow-hidden">
            <ToggleButtonGroup
                className={`${classes["weather-z-index"]} border border-primary position-relative`}
                type="radio"
                name="forecast"
                value={value}
                ref={togRef}
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

export default ToggleButtonForecast;
