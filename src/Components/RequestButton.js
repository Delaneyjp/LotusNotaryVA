import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class RequestButton extends Component {
    render() {

        const reqBtnStyle = {
            color: "white",
            backgroundColor: "rgba(245, 245, 245, 0.6)",
            border: "3px solid rgba(250, 250, 250, 0.4)",
            borderRadius: "50%",
            height: "200px",
            width: "200px",
            position: "absolute",
            top: "200px",
            right: "400px"
        }

        const quoteBtnText = {
            marginTop: "45px",
            color: "black",
            fontWeight: "bolder",
            fontSize: "35px",
            fontFamily: "Imapact, Charcoal, sansSerif"
        }


        return (
            <div className="btn reqBtn" style={reqBtnStyle}>
                <div className="quoteText" style={quoteBtnText}>
                    REQUEST QUOTE
                </div>
            </div>
        );
    }
}

export default RequestButton;

