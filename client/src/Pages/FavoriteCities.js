import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import Main from "../components/Layout/Main";
import CardWrapper from "../components/Layout/CardWrapper";
import FavoriteCityButton from "../components/UI/FavoriteCityButton";
import { setLocation } from "../store/Weather/weatherActions";

const FavoriteCities = ({setCityLocation, ...props}) => {
    const navigate = useNavigate();
    const onClickHandler = (data) => {
        setCityLocation(data)
        navigate(`/weather`);
    };

    return (
        <Main>
            <CardWrapper className="px-3 py-5">
                <div className="mb-5 card-title h5">Favorite Cities</div>
                {props.favorite_cities.map((favorite, idx) => (
                    <FavoriteCityButton
                        key={idx}
                        onClick={onClickHandler}
                        city={favorite.city}
                        search_location={favorite.search_location}
                        temp_c={favorite.temp_c}
                        temp_f={favorite.temp_f}
                        icon={favorite.icon}
                    />
                ))}
                {!props.favorite_cities.length && <p>You don't have any favorites cities yet!</p>}
            </CardWrapper>
        </Main>
    );
};

const mapStateToProps = (state) => ({
    favorite_cities: state.favoriteCities.favorite_cities,
});

const mapDispatchToProps = (dispatch) => ({
    setCityLocation: (data) => {
        dispatch(setLocation(data));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCities);
