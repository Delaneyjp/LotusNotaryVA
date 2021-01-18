import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui/List';




const styles = theme => ({
    multilineColor: {
        color: 'red'
    }
});

class MessageMeSlide extends Component {


    render() {
        return (
            <div className="Slide" id="MessageMeSlide">
                <div className="container msgMeContent slideContainer">
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
                            <div className="container messageForm">
                                <h2>
                                    Send Me a Message
                            </h2>
                                <form>
                                    <div className="form-group">
                                        <label for="firstName" className="msgformlabel">First Name</label>
                                        <input type="text" class="form-control" placeholder="Enter Full Name" />

                                        <label for="email" className="msgformlabel"> Email</label>
                                        <input type="text" class="form-control" placeholder="Enter Email" />

                                        <label for="message" className="msgformlabel">Message</label>
                                        <textarea type="textarea" class="form-control" placeholder="Enter Message" rows="5">
                                        </textarea>
                                    </div>

                                    <button type="submit" class="btn btn-primary">
                                        Submit
                                        </button>

                                </form>
                            </div>



                        </div>
                    </div>
                </div>


            </div >
        );
    }
}

export default MessageMeSlide;