import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class RequestNavButton extends Component {
    render() {

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

export default RequestNavButton;

class RequestButton extends Component {
    render() {

        const reqBtnStyle = {
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