import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class RequestButton extends Component {
    render() {

        const reqBtnStyle = {
            color: "white",
            backgroundColor: "Blue",
            border: "1px solid white",
            borderRadius: "50%"
        }

        const reqBtnNavStyle = {
            color: "white",
            backgroundColor: "Blue",
            border: "1px solid white",
            borderRadius: "50%"
        }

        return (
            <div className="btn reqBtn" >
                Request Button
            </div>
        );
    }
}

export default RequestButton;

