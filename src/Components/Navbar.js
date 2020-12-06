import React, { Component } from 'react';
import RequestNavButton from './RequestNavButton';
import navlogo from "../L-LOGO-light.png";

import PropTypes from 'prop-types';

class Navbar extends Component {
    render() {

        const navlogostyle = {
            width: "40px"
        }

        return (
            <nav className="navbar sticky-top navbar-expand-sm row" style={{ height: "60px" }}>
                <div className="container-fluid ">
                    <ul className=" container navbar-nav col-3">
                        <li className="nav-item "><a href="#TitleSlide" className="nav-link tabHome"><img src={navlogo} className="App-nav-logo" alt="navlogo" style={navlogostyle} /></a></li>
                    </ul>
                    <ul className="container navbar-nav col-9">
                        <li className="nav-item "> <a href="#AboutMeSlide" className="tabAbout navTab nav-link">ABOUT ME</a></li>
                        <li className="nav-item"> <a href="#MessageMeSlide" className="tabMessage navTab nav-link">CONTACT</a></li>
                        <li className="nav-item"> <a className="nav-link"><span style={{ float: "left" }}><RequestNavButton /> </span><span className="tabReq navTab">Request Quote</span></a></li>
                    </ul>

                </div>
            </nav>

        );
    }
}

Navbar.propTypes = {

};

export default Navbar;