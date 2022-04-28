import {
    SET_LOCATION,
    SET_SEARCH_LOCATION,
    SET_WEATHER,
    SET_HOURLY_FORECAST,
} from "./weatherActionTypes";


export const setLocation = (city) => ({type: SET_LOCATION, payload: city});
export const setSearchLocation = (city) => ({type: SET_SEARCH_LOCATION, payload: city});
export const setWeather = (response) => ({type: SET_WEATHER, payload: response});
export const setHourlyForecast = (response) => ({
    type: SET_HOURLY_FORECAST, payload: response.map((hour) => {
        return {
            temp_c: hour.temp_c,
            temp_f: hour.temp_f,
            hour: hour.time,
            is_day: hour.is_day,
            code: hour.condition.code,
            will_it_rain: hour.will_it_rain,
            chance_of_rain: hour.chance_of_rain,
            will_it_snow: hour.will_it_snow,
            chance_of_snow: hour.chance_of_snow,
        };
    })
});
