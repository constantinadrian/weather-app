import ReactDOM from "react-dom/client";
import React from "react";
import { Provider } from "react-redux";
import store from './store/index';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import App from "./App";
import ThemeContextProvider from "./context/ThemeContext";
import { setFavoriteCities } from "./store/FavoriteCities/favoriteCitiesActions";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// get favorite from localStorage if any
if (localStorage.getItem('favoriteCities')) {
    const favoriteCities = JSON.parse(localStorage.getItem('favoriteCities'));
    store.dispatch(setFavoriteCities(favoriteCities));
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/*" element={<App />} />
                    </Routes>
                </BrowserRouter>
            </ThemeContextProvider>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
