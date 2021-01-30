import React, { Component } from 'react';

class Footer extends Component {
    render() {

        const footerStyle = {
            position: "absolute",
            bottom: "0",
        }
        return (
            <footer className="text-center footer container-fluid" style={{ footerStyle }}>
                <h6>Lotus Notary VA</h6>
                <h6>Copyright 2020</h6>
            </footer>
        );
    }
}

export default Footer;