import {
    CHANGE_FORECAST_SCALE,
    CHANGE_TEMP_SCALE,
    CHANGE_METRIC_SCALE,
    CHANGE_PRESSURE_SCALE,
} from "./weatherSettingsActionTypes";

const initialState = {
    forecast_scale: "hours",
    temp_scale: "celsius",
    metric_scale: "km",
    pressure_scale: "hPa",
};

const weatherSettingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FORECAST_SCALE:
            return {
                ...state,
                forecast_scale: action.payload,
            };
        case CHANGE_TEMP_SCALE:
            return {
                ...state,
                temp_scale: action.payload,
            };
        case CHANGE_METRIC_SCALE:
            return {
                ...state,
                metric_scale: action.payload,
            };
        case CHANGE_PRESSURE_SCALE:
            return {
                ...state,
                pressure_scale: action.payload,
            };
        default:
            return state;
    }
};

export default weatherSettingsReducer;
