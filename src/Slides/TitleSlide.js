import React, { Component } from 'react';
import Logo from '../Logo';

class TitleSlide extends Component {
    render() {
        return (

            <header className="Slide" id="TitleSlide">
                <Logo style={{ marginTop: "-60px" }} />
                <p>Owned & Operated by <span style={{ fontWeight: "bold" }}>TANYA D. MARTIN</span></p>
                <p className="headerLocation">Richmond, VA</p>
            </header>

        );
    }
}


export default TitleSlide;