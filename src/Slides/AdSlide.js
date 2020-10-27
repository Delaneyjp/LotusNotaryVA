import React, { Component } from 'react';
import Footer from '../Components/Footer';

class AdSlide extends Component {
    render() {
        return (
            <div className="Slide AdSlide">
                Ad Slide
                <div style={{ height: "90%" }}></div>
                <div className="bottom">
                    <Footer />
                </div>


            </div>
        );
    }
}

export default AdSlide;