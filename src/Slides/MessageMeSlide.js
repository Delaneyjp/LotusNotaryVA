import React, { Component } from 'react';

class MessageMeSlide extends Component {
    render() {
        return (
            <div className="Slide" id="MessageMeSlide">
                <div className="container msgMeContent">
                    <div className="row">
                        <div className="col-6 infoCol">
                            <h1>
                                TANYA D. MARTIN
                            </h1>
                            <h3>
                                Notary Public
                            </h3>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <h3>
                                (804) 690-8985
                            </h3>
                            <h3>
                                tdmartin.notarypublic@gmail.com
                            </h3>
                        </div>
                        <div className="col-6 messageCol">
                            <div className="container messageForm"></div>
                            <h2>
                                Send Me a Message
                            </h2>


                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default MessageMeSlide;