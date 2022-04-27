import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "./../../assets/image/cloud-logo.svg";
import classes from './Header.module.css';

const Header = (props) => {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className={`${classes['header-bg']}`} >
                <Container>
                    <Navbar.Brand>
                        <Link className="logo-link" to="/">
                            <img
                                src={logo}
                                className="d-inline-block"
                                alt="Cloud Logo"
                            />{" "}
                            <span className="d-none d-sm-inline"> Weather App</span>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle className='border-0 shadow-none' aria-controls="responsive-navbar-nav" >
                        <span className={`${classes['navbar-icon-bars']} `}></span>
                        <span className={`${classes['navbar-icon-bars']} `}></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Link as={Link} to="/weather" eventKey="1" className={`${classes.NavLink}`}>Weather</Nav.Link>
                            <Nav.Link as={Link} to="/weather/favorite-cities" eventKey="2" className={` ${classes.NavLink}`}>Favorite Cities</Nav.Link>
                            <Nav.Link as={Link} to="/weather/settings" eventKey="3" className={` ${classes.NavLink}`}>Settings</Nav.Link>                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
