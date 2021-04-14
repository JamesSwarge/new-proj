import React from 'react';
// import * as ReactBootstrap from "react-bootstrap";
import './Navigation.css';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown, Nav, DropdownButton, Dropdown } from "react-bootstrap";

function Navigation() {
    return (
        <>
        <div className="main-header">
            <div className="container-fluid">
                <Navbar expand="lg">
                <Navbar.Brand href="#home"> <img src="assets/images/logo.png" className="main-logo" alt="React Bootstrap logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav className="mx-auto">
                    <Nav.Link href="#home" className="header-links">Vaults</Nav.Link>
                    <Nav.Link href="#link" className="header-links">Buy Fast</Nav.Link>
                    <Nav.Link href="#link" className="header-links">Dashboard</Nav.Link>
                    </Nav>
                    <div className="rt-menu-wrap">
                        <div className="custom-toggle-switch">
                            <input type="checkbox" id="toggle_checkbox" />
                            <label for="toggle_checkbox">
                            <div id="star">
                                <div class="star" id="star-1">★</div>
                                <div class="star" id="star-2">★</div>
                            </div>
                            <div id="moon"></div>
                            </label>
                        </div>
                        <button className="btn bttn bttn-primary bttn-rounded">connect wallet</button>
                    </div>
                </Navbar.Collapse>                
                </Navbar>
            </div>
        </div>
        </>
    )
}

export default Navigation
