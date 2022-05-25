import React from "react";
import { connect } from "react-redux";

import {
    CELSIUS,
    FAHRENHEIT,
    KM,
    MILES,
    MILLIBARS,
    INCHES,
} from "../../store/WeatherSettings/weatherSettingsActionTypes";

const CurrentWeatherDetails = (props) => {
    return (
        <>
            <hr />
            <div className="w-100 mb-3">
                <div className="d-flex flex-column text-break">
                    <div className="d-flex">
                        <p className="w-50 px-3 text-end mb-1">Sunrise:</p>
                        <p className="w-50 px-3 text-start mb-1">
                            {props.sunrise}
                        </p>
                    </div>
                    <div className="d-flex">
                        <p className="w-50 px-3 text-end mb-1">Sunset:</p>
                        <p className="w-50 px-3 text-start mb-1">
                            {props.sunset}
                        </p>
                    </div>

                    {!!props.will_it_snow && (
                        <div className="d-flex">
                            <p className="w-50 px-3 text-end mb-1">
                                Chance of snow:
                            </p>
                            <p className="w-50 px-3 text-start mb-1">
                                {props.chance_of_snow}%
                            </p>
                        </div>
                    )}

                    {!!!props.will_it_snow && (
                        <div className="d-flex">
                            <p className="w-50 px-3 text-end mb-1">
                                Chance of rain:
                            </p>
                            <p className="w-50 px-3 text-start mb-1">
                                {props.chance_of_rain}%
                            </p>
                        </div>
                    )}

                    <div className="d-flex">
                        <p className="w-50 px-3 text-end mb-1">Humidity:</p>
                        <p className="w-50 px-3 text-start mb-1">
                            {props.humidity}%
                        </p>
                    </div>

                    {props.metric_scale === MILES && (
                        <div className="d-flex">
                            <p className="w-50 px-3 text-end mb-1">Wind:</p>
                            <p className="w-50 px-3 text-start mb-1">
                                {props.wind_dir} {props.wind_mph.toFixed()} mph
                            </p>
                        </div>
                    )}

                    {props.metric_scale === KM && (
                        <div className="d-flex">
                            <p className="w-50 px-3 text-end mb-1">Wind:</p>
                            <p className="w-50 px-3 text-start mb-1">
                                {props.wind_dir} {props.wind_kph.toFixed()} km/h
                            </p>
                        </div>
                    )}

                    {props.temp_scale === CELSIUS && (
                        <div className="d-flex">
                            <p className="w-50 px-3 text-end mb-1">
                                Feels Like:
                            </p>
                            <p className="w-50 px-3 text-start mb-1">
                                {props.feelslike_c.toFixed()}°
                            </p>
                        </div>
                    )}

                    {props.temp_scale === FAHRENHEIT && (
                        <div className="d-flex">
                            <p className="w-50 px-3 text-end mb-1">
                                Feels Like:
                            </p>
                            <p className="w-50 px-3 text-start mb-1">
                                {props.feelslike_f.toFixed()}°
                            </p>
                        </div>
                    )}

                    {props.pressure_scale === MILLIBARS && (
                        <div className="d-flex">
                            <p className="w-50 px-3 text-end mb-1">Pressure:</p>
                            <p className="w-50 px-3 text-start mb-1">
                                {props.pressure_mb} hPa
                            </p>
                        </div>
                    )}

                    {props.pressure_scale === INCHES && (
                        <div className="d-flex">
                            <p className="w-50 px-3 text-end mb-1">Pressure:</p>
                            <p className="w-50 px-3 text-start mb-1">
                                {props.pressure_in} Hg
                            </p>
                        </div>
                    )}

                    {props.metric_scale === MILES && (
                        <div className="d-flex">
                            <p className="w-50 px-3 text-end mb-1">Visibility:</p>
                            <p className="w-50 px-3 text-start mb-1">
                                {props.vis_miles} mph
                            </p>
                        </div>
                    )}

                    {props.metric_scale === KM && (
                        <div className="d-flex">
                            <p className="w-50 px-3 text-end mb-1">Visibility:</p>
                            <p className="w-50 px-3 text-start mb-1">
                                {props.vis_km.toFixed()} km/h
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    sunrise: state.weather.sunrise,
    sunset: state.weather.sunset,

    chance_of_snow: state.weather.chance_of_snow,
    chance_of_rain: state.weather.chance_of_rain,

    humidity: state.weather.humidity,

    wind_mph: state.weather.wind_mph,
    wind_kph: state.weather.wind_kph,
    wind_dir: state.weather.wind_dir,

    feelslike_c: state.weather.feelslike_c,
    feelslike_f: state.weather.feelslike_f,

    pressure_mb: state.weather.pressure_mb,
    pressure_in: state.weather.pressure_in,

    vis_km: state.weather.vis_km,
    vis_miles: state.weather.vis_miles,

    temp_scale: state.weatherSettings.temp_scale,
    metric_scale: state.weatherSettings.metric_scale,
    pressure_scale: state.weatherSettings.pressure_scale,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrentWeatherDetails);
