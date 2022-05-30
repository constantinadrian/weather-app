import { combineReducers } from "redux";
import csrfReducer from "./CsrfToken/csrfReducer";
import weatherReducer from "./Weather/weatherReducer";
import weatherSettingsReducer from './WeatherSettings/weatherSettingsReducer';
import favoriteCitiesReducer from "./FavoriteCities/favoriteCitiesReducer";

const rootReducer = combineReducers({
    weather: weatherReducer,
    weatherSettings: weatherSettingsReducer,
    favoriteCities: favoriteCitiesReducer,
    csrf: csrfReducer,
});

export default rootReducer;
