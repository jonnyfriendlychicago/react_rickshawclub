import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = (props) => {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Container >
                    {/*<Container fluid>*/}
                    <Navbar.Brand href="/">Rickshaw World</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/rickshaws">Rickshaws</Nav.Link>
                            {/*<Nav.Link href="#pricing">Gear</Nav.Link>*/}
                            {/*<Nav.Link href="#pricing">Community</Nav.Link>*/}
                            {/*<Nav.Link href="#pricing">About</Nav.Link>*/}

                            {/*<NavDropdown title="Dropdown" id="collasible-nav-dropdown">*/}
                            {/*  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                            {/*  <NavDropdown.Item href="#action/3.2">*/}
                            {/*    Another action*/}
                            {/*  </NavDropdown.Item>*/}
                            {/*  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                            {/*  <NavDropdown.Divider />*/}
                            {/*  <NavDropdown.Item href="#action/3.4">*/}
                            {/*    Separated link*/}
                            {/*  </NavDropdown.Item>*/}
                            {/*</NavDropdown>*/}
                        </Nav>
                        <Nav>
                            {/*<Nav.Link href="#deets">More deets</Nav.Link>*/}
                            {/*<Nav.Link eventKey={2} href="#memes">*/}
                            {/*  Dank memes*/}
                            {/*</Nav.Link>*/}
                            <NavDropdown title="JonnyFriendly9" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>

            </div>
        </>

    ) // end return
} // end const
export default Header;