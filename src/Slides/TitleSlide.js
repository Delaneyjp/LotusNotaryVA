import React, { Component } from 'react';
import Logo from '../Logo';
import RequestButton from '.././Components/RequestButton';

const TitleSlide = () => {

    return (

        <header className="Slide" id="TitleSlide">
            <div className="mainTitleArea">
                <div ClassName="row">
                    <div className="col-12">
                        <a><RequestButton /></a>
                    </div>
                </div>
                <Logo style={{ marginTop: "-60px" }} />
            </div>
            <p>Owned & Operated by <span style={{ fontWeight: "bold" }}>TANYA D. MARTIN</span></p>
            <p className="headerLocation">Richmond, VA</p>
        </header>

    );
}


export default TitleSlide;