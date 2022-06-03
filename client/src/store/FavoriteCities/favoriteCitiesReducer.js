import {
    SET_FAVORITES_CITIES,
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES,
    UPDATE_FAVORITE_CITY,
} from "./favoriteCitiesActionTypes";

const initialState = {
    favorite_cities: [],
};

const favoriteCitiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FAVORITES_CITIES:
            return {
                ...state,
                favorite_cities: action.payload,
            };
        case ADD_TO_FAVORITES:
            return {
                ...state,
                favorite_cities: [
                    ...state.favorite_cities,
                    {
                        city: action.payload.city,
                        search_location: action.payload.search_location,
                        temp_c: action.payload.temp_c,
                        temp_f: action.payload.temp_f,
                        is_day: action.payload.is_day,
                        icon: action.payload.icon,
                        code: action.payload.code,
                        last_updated: action.payload.last_updated,
                    },
                ],
            };
        case REMOVE_FROM_FAVORITES:
            return {
                ...state,
                favorite_cities: state.favorite_cities.filter(
                    (favorite) => favorite.search_location !== action.payload
                ),
            };
        case UPDATE_FAVORITE_CITY:
            return {
                ...state,
                favorite_cities: state.favorite_cities.map((favorite) =>
                    favorite.city === action.payload.location.name
                        ? {
                              ...favorite,
                              temp_c: action.payload.current.temp_c,
                              temp_f: action.payload.current.temp_f,
                              is_day: action.payload.current.is_day,
                              icon: action.payload.current.condition.icon,
                              code: action.payload.current.condition.code,
                              last_updated: Date.now(),
                          }
                        : favorite
                ),
            };
        default:
            return state;
    }
};

export default favoriteCitiesReducer;
