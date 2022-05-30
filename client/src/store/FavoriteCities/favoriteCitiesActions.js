import {
    SET_FAVORITES_CITIES,
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES,
    UPDATE_FAVORITE_CITY,
} from "./favoriteCitiesActionTypes";

export const setCities = (cities) => ({type: SET_FAVORITES_CITIES, payload: cities});
export const addFavoriteCity = (city) => ({type: ADD_TO_FAVORITES, payload: city});
export const removeFavoriteCity = (city) => ({type: REMOVE_FROM_FAVORITES, payload: city});
export const updateFavoriteCity = (city) => ({type: UPDATE_FAVORITE_CITY, payload: city});
