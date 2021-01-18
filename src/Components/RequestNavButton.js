import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import reqnavbtn from "../L-LOGO-dark.png";


class RequestNavButton extends Component {
    render() {

        const reqBtnNavStyle = {
            color: "white",
            backgroundColor: "rgba(245, 245, 245, 0.3)",
            border: "1px solid white",
            borderRadius: "50%",
            height: "45px",
            width: "45px",
            marginTop: "-10px"
        }

        const btnLogoStyle = {
            height: "100%",
            width: "100%",
            marginLeft: "3px",
        }


        return (
            <div>
                <div className="btn reqBtn text-center" style={reqBtnNavStyle}>
                    <img src={reqnavbtn} className="reqbtnlogo" alt="reqbtnlogo" style={btnLogoStyle} />
                </div>
            </div >
        );
    }
}

export default RequestNavButton;

