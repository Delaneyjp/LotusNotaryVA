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
                    <ul className="navbar-nav">
                        <li className="navItem"><a className="nav-link"><img src={navlogo} className="App-nav-logo" alt="navlogo" style={navlogostyle} /></a></li>
                        <li className="nav-item"> <a className="tabAbout nav-link">ABOUT ME</a></li>
                        <li className="nav-item"> <a className="tabMessage nav-link">CONTACT</a></li>
                        <li className="nav-item float-Right"> <a className="nav-link"><span style={{ float: "left" }}><RequestNavButton /> </span><span >Request Quote</span></a></li>
                    </ul>

                </div>
            </nav>

        );
    }
}

Navbar.propTypes = {

};

export default Navbar;