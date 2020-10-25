import React, { Component } from 'react';
import Logo from '../Logo';

class TitleSlide extends Component {
    render() {
        return (
            <header className="Slide TitleSlide">
                <Logo />
                <p>Owned & Operated by <span style={{ fontWeight: "bold" }}>TANYA D. MARTIN</span></p>
                <p className="headerLocation">Richmond, VA</p>
                <p className="headerEmail">Email: tdmartin.notarypublic@gmail.com</p>
                <p> </p>
            </header>
        );
    }
}


export default TitleSlide;