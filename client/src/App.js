import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";

import React from "react";
import Header from "./Components/PageLayout/Header";
import Home from "./Components/Verticals/Home";
import Rickshaws from "./Components/Verticals/Rickshaws";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";


function App() {
  return (
      <>
          <BrowserRouter>
              {/*<Header/>*/}
              <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                  <Container >
                      {/*<Container fluid>*/}
                      <Navbar.Brand href="/">Rickshaw Worldly</Navbar.Brand>
                      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                      <Navbar.Collapse id="responsive-navbar-nav">
                          <Nav className="me-auto">
                              <Nav.Link href="/rickshaws">BTS rickshaws</Nav.Link>
                              <Link to={"/rickshaws"}>RCT rickshaws </Link>

                          </Nav>
                          <Nav>
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
              <Routes>

                  <Route path="/" element={<Home/>} />

                  <Route path="/rickshaws" element={<Rickshaws/>} />


              </Routes>
          </BrowserRouter>
      </>



    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
