import React from "react"
import { Link } from "react-router-dom"
import { Navbar, Nav, Container, Button } from "react-bootstrap"
import { Component } from "react";
import { Row, Col } from "react-bootstrap";


import '../fonts/AdigianaUI.ttf'
import Logo from "../img/logo.png";
import DarkMoon from "../img/dark_moon.png";
import '../css/App.css';
import '../css/navbar.css';

class Navigation extends Component {
    render() {

        return (
            <>
                <Row>                        
                    <Navbar bg="light" expand="lg">
                        {/* <Container> */}
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    {/* <Nav className="me-auto"> */}
                                        <Col className="left" lg={4}>
                                        <Navbar.Brand >
                                            <img src={Logo} height="50"  className="d-inline-block align-top" alt="logo" />
                                            <a className="vert"><img src={DarkMoon} height="30"  className="d-inline-block align-top" alt="logo" /></a>

                                        </Navbar.Brand>
                                        </Col>

                                        <Col className="mid" lg={4}>
                                            <Link className="align-items-center" id="navlink" to="/events">Événements</Link>            
                                            <Link className="align-items-center" id="navlink" to="/twitch">Twitch</Link>
                                            <Link className="align-items-center" id="navlink" to="/articles">Articles</Link>
                                            <Link className="align-items-center" id="navlink" to="/otakulture">Otakulture</Link>
                                        </Col>

                                        <Col className="right" lg={4}>
                                            <Link className="align-items-center" id="navlink" to="/account">Se connecter</Link>
                                        </Col>
                                    {/* </Nav> */}
                                </Navbar.Collapse>
                        {/* </Container> */}
                    </Navbar>
                </Row>
            </>
        );
    }
} export default Navigation