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
            <nav className="navbar sticky-top navbar-expand-sm" style={{ height: "60px" }}>
                <div className="container-fluid">
                    <ul className=" container navbar-nav">
                        <li className="nav-item "><a className="nav-link tabHome"><img src={navlogo} className="App-nav-logo" alt="navlogo" style={navlogostyle} /></a></li>
                    </ul>
                    <ul className="container navbar-nav ml-auto">
                        <li className="nav-item "> <a className="tabAbout navTab nav-link">ABOUT ME</a></li>
                        <li className="nav-item"> <a className="tabMessage navTab nav-link">CONTACT</a></li>
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