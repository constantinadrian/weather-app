import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "./../../assets/image/cloud-logo.svg";
import classes from "./Header.module.css";
import { StateThemeContext } from "../../context/ThemeContext";
import DarkMode from "./../UI/DarkMode";
import useClickOutside from "../../hooks/useClickOutside";

const Header = (props) => {
    // use useContext to change theme light - dark
    const stateTheme = useContext(StateThemeContext);

    // state of colapsed navbar
    const [expanded, setExpanded] = useState(false);

    const navDomRef = useClickOutside(() => setExpanded(false));

    // toggle handler for colapsed navbar
    const toggleHandler = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };

    // classname for theme light - dark
    const linksTextColor =
        stateTheme.theme === "light" ? "text-dark" : "text-light";
    const buttonBackgroundColor =
        stateTheme.theme === "light" ? "bg-dark" : "bg-light";

    return (
        <>
            <Navbar
                collapseOnSelect
                expand="lg"
                className={`${classes["header-bg"]}`}
                ref={navDomRef}
                onToggle={toggleHandler}
                expanded={expanded}
            >
                <Container>
                    <Navbar.Brand>
                        <Link className="logo-link" to="/">
                            <img
                                src={logo}
                                className="d-inline-block"
                                alt="Cloud Logo"
                            />{" "}
                            <span className="d-none d-sm-inline">
                                {" "}
                                AC Weather
                            </span>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle
                        className="border-0 shadow-none"
                        aria-controls="responsive-navbar-nav"
                    >
                        <span
                            className={`${classes["navbar-icon-bars"]} ${buttonBackgroundColor}`}
                        ></span>
                        <span
                            className={`${classes["navbar-icon-bars"]} ${buttonBackgroundColor}`}
                        ></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse
                        id="responsive-navbar-nav"
                        className="justify-content-end"
                    >
                        <Nav>
                            <Nav.Link
                                as={Link}
                                to="/weather"
                                eventKey="1"
                                className={`${linksTextColor} ${classes.NavLink}`}
                            >
                                Weather
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/weather/favorite-cities"
                                eventKey="2"
                                className={`${linksTextColor} ${classes.NavLink}`}
                            >
                                Favorite Cities
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/weather/settings"
                                eventKey="3"
                                className={`${linksTextColor} ${classes.NavLink}`}
                            >
                                Settings
                            </Nav.Link>
                        </Nav>
                        <DarkMode />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
