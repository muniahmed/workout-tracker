import React, { useEffect } from "react";
import { Navbar, Container, Nav, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const linkStyle = { color: "#ffffff", textDecoration: "none", margin: "0 10px", "cursor": "pointer" };

const Header = () => {


    const Logout = () => {
        localStorage.removeItem("userInfo");
        window.location.href = "/";
    }


    const userInfo = localStorage.getItem("userInfo");


    useEffect(() => {

    }, []);

    if (userInfo) {
        return (
            <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Container>
                    <Navbar.Brand>
                        <Link to={"/"} style={linkStyle}>
                            Peak Tracker
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Form >
                                <Form.Control
                                    type="search"
                                    placeholder="Search Exercises"
                                    className="mr-sm-2"
                                />
                            </Form>
                        </Nav>
                    </Navbar.Collapse>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to={"exercises"} style={linkStyle}>
                                Exercises
                            </Link>

                            <Link to={"progress"} style={linkStyle}>
                                Progress
                            </Link>

                            <Nav.Item style={linkStyle} onClick={() => {
                                Logout();
                            }}>Logout</Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );

    } else {
        return (
            <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Container>
                    <Navbar.Brand>
                        <Link to={"/"} style={linkStyle}>
                            Peak Tracker
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />


                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to={"login"} style={linkStyle}>
                                Log In
                            </Link>

                            <Link to={"signup"} style={linkStyle}>
                                Sign Up
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }

};

export default Header;
