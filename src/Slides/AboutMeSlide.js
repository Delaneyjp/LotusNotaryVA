import React, { Component } from 'react';

class AboutMeSlide extends Component {
    render() {
        return (
            <div className="Slide" id="AboutMeSlide">
                <div className="container slideContainer">
                    <div className="row statementRow">
                        <div className="col-12">
                            <h2>
                                Providing excellent service, with a smile. <br></br>
                                Knowledgable, Clear, and Efficient. We are here for you.
                            </h2>
                            <hr></hr>
                        </div>
                    </div>
                    <div className="row aboutRow justify-content-md-center">
                        <div className="col-5 aboutSide">
                            <div className="container">
                                <div className="row credRow text-center">
                                    <div>
                                        <h4>
                                            Certified member of the <br></br>
                                            National Association Notary Association
                                        </h4>
                                        <br></br>
                                        <h4>
                                            Notary Public & Loan Signing Agent
                                        </h4>
                                    </div>
                                </div>
                                <div className="row locationsRow justify-content-md-center">
                                    <div>

                                        <div className="dropdown">
                                            <button className="btn btn-secondary btn-xs dropdown-toggle locBtn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-hashpopup="true" aria-expanded="false" style={{ fontSize: "15px" }}>
                                                Locations Serviced:
                                       </button>
                                            <br></br>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <p className="dropdown-item">
                                                    Henrico
                                                </p>
                                                <p className="dropdown-item">
                                                    Varina
                                                </p>
                                                <p className="dropdown-item">
                                                    Chesapeake
                                                </p>
                                                <p className="dropdown-item">
                                                    Mechanicsville
                                                </p>
                                                <p className="dropdown-item">
                                                    Petersburg
                                                </p>
                                                <p className="dropdown-item">
                                                    Prince Charles
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row hoursRow justify-content-md-center">
                                    <div className="text-center">
                                        <h4>
                                            Monday - Sunday
                                        </h4>
                                        <h4>
                                            (8:00am - 8:00pm)
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-5 photoSide">
                            <container>
                                <img className="aboutPic" src={require('../tonie-wkids2.jpg')} alt='tonie picture'>
                                </img>
                            </container>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMeSlide;