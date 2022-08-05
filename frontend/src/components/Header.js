import React from 'react';
import { Navbar, Container, Nav, Form } from 'react-bootstrap'

const Header = () => {
    return (
        <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Container>

                <Navbar.Brand href="#home">Workout Tracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>
                        <Form inline>
                            <Form.Control
                                type="search"
                                placeholder="Search Exercises"
                                className='mr-sm-2'
                            />
                        </Form>
                    </Nav>
                </Navbar.Collapse>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#routines">Routines</Nav.Link>
                        <Nav.Link href="#history">History</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default Header