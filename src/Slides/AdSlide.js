import React, { Component } from 'react';

class AdSlide extends Component {
    render() {
        return (
            <div className="Slide" id="AdSlide">
                <div className="photoSpan">

                </div>
                <div className="container adSection">
                    <div className="row">
                        <div className="col-9 adText">
                            <h3>
                                ARE YOU LOOKING TO PURCHASE OR SELL A PROPERTY?
                            </h3>
                            <h2>
                                FOUND OUT HOW I CAN HELP,
                            </h2>
                            <div className="btn btn-primary btn-lg">
                                HERE
                            </div>
                        </div>
                        <div className="col-3 adLogo">
                            <h4>
                                <b>Tanya Martin</b>
                                <br></br>
                                REALTOR
                            </h4>
                        </div>
                    </div>
                </div>
                <div style={{ height: "90%" }}></div>
                <div className="bottom">
                </div>


            </div>
        );
    }
}

export default AdSlide;