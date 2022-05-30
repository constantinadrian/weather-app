import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { motion } from "framer-motion";

import Main from "../components/Layout/Main";
import CardWrapper from "../components/Layout/CardWrapper";
import FavoriteCityButton from "../components/UI/FavoriteCityButton";
import { setLocation } from "../store/Weather/weatherActions";

// turn component into a motion component
const MotionCardWrapper = motion(CardWrapper);

const FavoriteCities = ({ setCityLocation, ...props }) => {
    const navigate = useNavigate();

    const onClickHandler = (data) => {
        setCityLocation(data);
        navigate(`/weather`);
    };

    // variants for framer-motion animation
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.07,
                delayChildren: 0.3,
            },
        },
    };

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    };

    return (
        <Main>
            <MotionCardWrapper
                variants={container}
                initial="hidden"
                animate="show"
                className="px-3 py-5"
            >
                <motion.div variants={item} className="mb-5 card-title h5">Favorite Cities</motion.div>
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
                {!props.favorite_cities.length && (
                    <motion.p variants={item}>
                        You don't have any favorites cities yet!
                    </motion.p>
                )}
            </MotionCardWrapper>
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
