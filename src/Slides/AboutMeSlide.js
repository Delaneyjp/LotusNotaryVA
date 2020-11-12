import React, { Component } from 'react';

class AboutMeSlide extends Component {
    render() {
        return (
            <div className="Slide" id="AboutMeSlide">
                <div className="container">
                    <div className="row statementRow">
                        <div className="col-12">
                            <h2>
                                Providing excellent service, with a smile. <br></br>
                                Knowledgable, Clear, and Efficient. We are here for you.
                            </h2>
                            <hr></hr>
                        </div>
                    </div>
                    <div className="row aboutRow">
                        <div className="col-8 aboutSide">
                            <div className="container">
                                <div className="row credRow">
                                    <div>
                                        <h4>
                                            Certified member of the <br></br>
                                            National Association Notary Association
                                        </h4>
                                        <h4>
                                            Notary Public & Loan Signing Agent
                                        </h4>
                                    </div>
                                </div>
                                <div className="row locationsRow">
                                    <div>
                                        <h3>
                                            Locations Serviced:
                                            <br></br>
                                        </h3>
                                    </div>
                                </div>
                                <div className="row hoursRow">
                                    <div>
                                        <h4>
                                            Hours:
                                        </h4>
                                        <h3>
                                            Monday - Sunday (8:00am - 8:00pm)
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 photoSide">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMeSlide;