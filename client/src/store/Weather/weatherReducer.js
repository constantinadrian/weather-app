import {
    SET_LOCATION,
    SET_SEARCH_LOCATION,
    SET_WEATHER,
    SET_HOURLY_FORECAST,
} from "./weatherActionTypes";

const initialState = {
    location: "",
    search_location: "",
    response_location: "",
    region: "",
    country: "",
    temp_c: "",
    temp_f: "",
    is_day: "",
    condition: "",
    icon: "", // used weather api icon to display the forecasts
    code: "",
    wind_mph: "",
    wind_kph: "",
    wind_dir: "",
    pressure_mb: "", // hPa
    pressure_in: "", // Hg
    humidity: "",
    feelslike_c: "",
    feelslike_f: "",
    vis_km: "",
    vis_miles: "",

    maxtemp_c: "",
    maxtemp_f: "",
    mintemp_c: "",
    mintemp_f: "",

    will_it_rain: "",
    chance_of_rain: "",
    will_it_snow: "",
    chance_of_snow: "",

    sunrise: "",
    sunset: "",
    hourly_forecast: [],
    days_forecast: [],
};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOCATION:
            return {
                ...state,
                location: action.payload,
            };
        case SET_SEARCH_LOCATION:
            return {
                ...state,
                search_location: action.payload,
            };
        case SET_WEATHER:
            return {
                ...state,
                response_location: action.payload.location.name,
                region: action.payload.location.region,
                country: action.payload.location.country,

                temp_c: action.payload.current.temp_c.toFixed(),
                temp_f: action.payload.current.temp_f.toFixed(),
                is_day: action.payload.current.is_day,

                condition: action.payload.current.condition.text,
                icon: action.payload.current.condition.icon,
                code: action.payload.current.condition.code,

                wind_mph: action.payload.current.wind_mph.toFixed(),
                wind_kph: action.payload.current.wind_kph.toFixed(),
                wind_dir: action.payload.current.wind_dir,

                pressure_mb: action.payload.current.pressure_mb,
                pressure_in: action.payload.current.pressure_in,

                humidity: action.payload.current.humidity,

                feelslike_c: action.payload.current.feelslike_c.toFixed(),
                feelslike_f: action.payload.current.feelslike_f.toFixed(),

                vis_km: action.payload.current.vis_km.toFixed(),
                vis_miles: action.payload.current.vis_miles,

                maxtemp_c: action.payload.forecast.forecastday[0].day.maxtemp_c.toFixed(),
                maxtemp_f: action.payload.forecast.forecastday[0].day.maxtemp_f.toFixed(),
                mintemp_c: action.payload.forecast.forecastday[0].day.mintemp_c.toFixed(),
                mintemp_f: action.payload.forecast.forecastday[0].day.mintemp_f.toFixed(),

                will_it_rain:
                    action.payload.forecast.forecastday[0].day
                        .daily_will_it_rain,
                chance_of_rain:
                    action.payload.forecast.forecastday[0].day
                        .daily_chance_of_rain,
                will_it_snow:
                    action.payload.forecast.forecastday[0].day
                        .daily_will_it_snow,
                chance_of_snow:
                    action.payload.forecast.forecastday[0].day
                        .daily_chance_of_snow,

                sunrise: action.payload.forecast.forecastday[0].astro.sunrise,
                sunset: action.payload.forecast.forecastday[0].astro.sunset,

                days_forecast: action.payload.forecast.forecastday.map(
                    (day) => {
                        return {
                            date: day.date,
                            temp_c: day.day.maxtemp_c.toFixed(),
                            temp_f: day.day.maxtemp_f.toFixed(),
                            code: day.day.condition.code,
                            condition: day.day.condition.text,
                            icon: day.day.condition.icon,
                            is_day: "1",
                            will_it_rain:	day.day.daily_will_it_rain,
                            chance_of_rain: day.day.daily_chance_of_rain,
                            will_it_snow: day.day.daily_will_it_snow,
                            chance_of_snow: day.day.daily_chance_of_snow,
                        };
                    }
                ),
                localTime: action.payload.location.localtime,
            };
        case SET_HOURLY_FORECAST:
            return {
                ...state,
                hourly_forecast: action.payload,
            };
        default:
            return state;
    }
};

export default weatherReducer;
