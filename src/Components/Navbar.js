import React, { Component } from 'react';
import RequestButton from './RequestButton';
import PropTypes from 'prop-types';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar sticky-top ">

                <RequestButton />

            </div>
        );
    }
}

Navbar.propTypes = {

};

export default Navbar;