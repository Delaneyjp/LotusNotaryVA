import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavArrows extends Component {
    render() {



        return (
            <nav className="navArrows sticky-bottom navbar-expand-sm" style={{ backgroundColor: "blue", height: "50px", marginBottom: "100px", zIndex: "7" }}>
                <div className="container-fluid row no-gutters">
                    <div className="container-fluid navRowArrows">
                        <ul className="container navbar-nav  col-12">
                            <li className="nav-arrow"><a href="#AboutMeSlide" className="tabAbout navTab nav-link">^</a></li>
                            <li className="nav-arrow"><a href="#MessageMeSlide" className="tabMessage navTab nav-link">v</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

        );
    }
}



export default NavArrows;