import { combineReducers } from "redux";
import csrfReducer from "./CsrfToken/csrfReducer";
import weatherReducer from "./Weather/weatherReducer";

const rootReducer = combineReducers({
    weather: weatherReducer,
    csrf: csrfReducer,
});

export default rootReducer;
