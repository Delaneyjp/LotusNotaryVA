import React, { Component } from 'react';
import logo1 from "./Logov3.png";


export default class Logo extends Component {
    render() {
        return (
            <div>
                <img src={logo1} className="App-logo" alt="logo" style={{ position: "relative" }} />
            </div>
        )
    }
}
