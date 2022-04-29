import {
    CHANGE_FORECAST_SCALE,
    CHANGE_TEMP_SCALE,
    CHANGE_METRIC_SCALE,
    CHANGE_PRESSURE_SCALE,
} from "./weatherSettingsActionTypes";

export const changeForecastScale = (response) => ({type: CHANGE_FORECAST_SCALE, payload: response});
export const changeTempScale = (response) => ({type: CHANGE_TEMP_SCALE, payload: response});
export const changeMetricScale = (response) => ({type: CHANGE_METRIC_SCALE, payload: response});
export const changePressureScale = (response) => ({type: CHANGE_PRESSURE_SCALE, payload: response});
