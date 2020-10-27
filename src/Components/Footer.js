import React, { Component } from 'react';

class Footer extends Component {
    render() {

        const footerStyle = {
            position: "absolute",
            bottom: "0",
        }
        return (
            <footer className="text-center footer" style={{ footerStyle }}>
                <h5>Lotus Notary VA</h5>
                <h5>Copyright 2020</h5>
            </footer>
        );
    }
}

export default Footer;