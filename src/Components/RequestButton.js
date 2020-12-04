import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ReqBtn from "../ReqQuote.png";


class RequestButton extends Component {
    render() {

        const reqBtnStyle = {



            height: "40vmin",
            // width: "calc(300px + 2vmax)",
            position: "absolute",
            left: "40vmin",
            // display: "flex",
            zIndex: "3",

            // top: "10%",
        }

        // const quoteBtnText = {
        //     marginTop: "5px",
        //     color: "black",
        //     fontWeight: "bolder",
        //     fontSize: "35px",
        //     fontFamily: "Imapact, Charcoal, sansSerif"
        // }


        return (

            <div>
                <a><img src={ReqBtn} className="Request Quote Button" alt="Quote" style={reqBtnStyle} /></a>
            </div>
            // <div className="btn reqBtn" style={reqBtnStyle}>
            //     <div className="quoteText" style={quoteBtnText}>
            //         REQUEST QUOTE
            //     </div>
            // </div>
        );
    }
}

export default RequestButton;

