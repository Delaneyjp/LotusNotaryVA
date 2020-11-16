import React, { Component } from 'react';
import Logo from '../Logo';
import RequestButton from '.././Components/RequestButton';

class TitleSlide extends Component {
    render() {
        return (

            <header className="Slide" id="TitleSlide">
                <div className="mainTitleArea">
                    <Logo style={{ marginTop: "-60px" }} />
                    <a><RequestButton /></a>

                </div>
                <p>Owned & Operated by <span style={{ fontWeight: "bold" }}>TANYA D. MARTIN</span></p>
                <p className="headerLocation">Richmond, VA</p>
            </header>

        );
    }
}


export default TitleSlide;