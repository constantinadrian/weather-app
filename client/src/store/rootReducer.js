import { combineReducers } from "redux";
import csrfReducer from "./CsrfToken/csrfReducer";
import weatherReducer from "./Weather/weatherReducer";
import weatherSettingsReducer from './WeatherSettings/weatherSettingsReducer';

const rootReducer = combineReducers({
    weather: weatherReducer,
    weatherSettings: weatherSettingsReducer,
    csrf: csrfReducer,
});

export default rootReducer;
