import React from 'react';
// import * as ReactBootstrap from "react-bootstrap";
import './Navigation.css';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown, Nav, DropdownButton, Dropdown } from "react-bootstrap";

import styled from "styled-components";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

function Navigation(props) {

    function changeTheme() {
        if (props.theme === "light") {
            props.setTheme("dark");
            props.setLogo("logo-white");
        } else {
            props.setTheme("light");
            props.setLogo("logo_1");
        }
    };

    const icon = props.theme === "light" ? <CgSun /> : <HiMoon />;

    return (
        <>
        <div className="main-header">
            <div className="container">
                <Navbar expand="lg">
                <Navbar.Brand href="#home">
                    {/* <img src="assets/images/logo.png" className="main-logo" alt="React Bootstrap logo"/> */}
                    <img src={"assets/images/" + props.logo_v + ".png"} className="main-logo" alt="React Bootstrap logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav className="mx-auto">
                    <Nav.Link href="#home" className="header-links">Vaults</Nav.Link>
                    <Nav.Link href="#link" className="header-links">Buy Fast</Nav.Link>
                    <Nav.Link href="#link" className="header-links">Dashboard</Nav.Link>                    
                    </Nav>
                    <ul className="top-menu-ul show-mob-only">
                        <li className="top-menu-li top-menu-ttl">Learn More</li>
                        <li className="top-menu-li"><a href="">Audit</a></li>
                        <li className="top-menu-li"><a href="">Contract</a></li>
                        <li className="top-menu-li"><a href="">Wiki</a></li>
                    </ul>
                    <ul className="top-menu-ul show-mob-only">
                        <li className="top-menu-li top-menu-ttl">Contact US</li>
                        <li className="top-menu-li"><a href="mailto:contact@fastyield.app">contact@fastyield.app</a></li>
                    </ul>                    
                    <div className="rt-menu-wrap">
                        <div className="custom-toggle-switch">
                            <input type="checkbox" id="toggle_checkbox" />
                            <label for="toggle_checkbox" onClick={changeTheme}>
                                {/* <div id="star">
                                    <div class="star" id="star-1">???</div>
                                    <div class="star" id="star-2">???</div>
                                </div>
                                <div id="moon"></div> */}
                                <div className="toggle-icon">{icon}</div>                                
                            </label>
                        </div>
                        {/* <button onClick={() => props.changeWord('james')} className="btn bttn bttn-primary bttn-rounded">connect wallet</button> */}
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
