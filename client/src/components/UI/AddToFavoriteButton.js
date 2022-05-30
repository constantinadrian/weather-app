import React, { useEffect, useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { connect } from "react-redux";
import { addFavoriteCity, removeFavoriteCity } from "../../store/FavoriteCities/favoriteCitiesActions";

import { ReactComponent as HeartEmpty } from "./../../assets/image/heart-svgrepo-com-empty.svg";
import { ReactComponent as HeartFull } from "./../../assets/image/heart-svgrepo-com-full.svg";
import classes from "./AddToFavoriteButton.module.css"

const AddToFavoriteButton = ({addFavorite, removeFavorite, ...props}) => {
    const [checked, setChecked] = useState(props.favorite_cities.find(favorite => favorite.search_location === props.search_location));
    const [animatePulse, setAnimatePulse] = useState(false);

    useEffect(() => {
        setChecked(props.favorite_cities.find(favorite => favorite.search_location === props.search_location));
    },[props.favorite_cities, props.search_location])

    useEffect(() => {
        localStorage.setItem('favoriteCities', JSON.stringify(props.favorite_cities));
    }, [props.favorite_cities]);

    const onChangeHandler = (e) => {
        setChecked(e.currentTarget.checked)
        setAnimatePulse(true)

        if (e.currentTarget.checked) {
            addFavorite({
                city: props.response_location,
                search_location: props.search_location,
                temp_c: props.temp_c,
                temp_f: props.temp_f,
                is_day: props.is_day,
                icon: props.icon,
                code: props.code,
                last_updated: Date.now(),
            });
        }
        else {
            removeFavorite(props.search_location);
        }
    }

    return (
        <>
            <ButtonGroup>
                <ToggleButton
                    className={`${classes['HeartWrapper']}`}
                    id="toggle-check"
                    type="checkbox"
                    checked={checked}
                    value="1"
                    onChange={onChangeHandler}
                    onAnimationEnd={() => setAnimatePulse(false)}
                    data-pulse={animatePulse}
                >
                    {!checked && <HeartEmpty className={`${classes['heart-svg']}`}/>}
                    {checked && <HeartFull className={`${classes['heart-svg']}`}/>}
                </ToggleButton>
            </ButtonGroup>
        </>
    );
};

const mapStateToProps = (state) => ({
    favorite_cities: state.favoriteCities.favorite_cities,

    search_location: state.weather.search_location,
    response_location: state.weather.response_location,

    temp_c: state.weather.temp_c,
    temp_f: state.weather.temp_f,
    is_day: state.weather.is_day,
    icon: state.weather.icon,
    code: state.weather.code,
});

const mapDispatchToProps = (dispatch) => ({
    addFavorite: (data) => {
        dispatch(addFavoriteCity(data));
    },
    removeFavorite: (data) => {
        dispatch(removeFavoriteCity(data));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToFavoriteButton);
