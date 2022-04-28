import { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Spinner from "./components/UI/Spinner";
import Weather from "./Pages/Weather";
import FavoriteCities from "./Pages/FavoriteCities";
import WeatherSettings from "./Pages/WeatherSettings";

import { getCsrfToken } from "./store//CsrfToken/csrf-action";
import { useDispatch } from "react-redux";

const WelcomePage = lazy(() => import("./Pages/WelcomePage"));
const Layout = lazy(() => import("./components/Layout/Layout"));

function App() {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCsrfToken())
    }, [dispatch])

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Suspense fallback={<Spinner />}>
                        <WelcomePage />
                    </Suspense>
                }
            />
            <Route
                path="/weather"
                element={<Layout />}
            >
                <Route index element={<Weather />} />
                <Route path="favorite-cities" element={<FavoriteCities />} />
                <Route path="settings" element={<WeatherSettings />} />
            </Route>
        </Routes>
    );
}

export default App;