import React, { Component } from 'react';
import { FaArrowCircleDown } from "react-icons/fa"
import { FaArrowCircleUp } from "react-icons/fa"



export class NavArrows extends Component {



    render() {

        // state = {
        //     currentPage: 1,
        //     newPage: ""
        // }

        // pageDirect = () => {
        //     if (currentPage = 1) {
        //         newPage = "#TitleSlide"
        //     }
        //     if (currentPage = 2) {
        //         newPage = "#AboutMeSlide"
        //     }
        //     if (currentPage = 3) {
        //         newPage = "#MessageSlide"
        //     }
        //     if (currentPage = 4) {
        //         newPage = "#AdSlide"
        //     }
        // };


        // pageInc = () => {
        //     const { currentPage } = this.state;
        //     this.setState({
        //         currentPage: currentPage + 1
        //     });

        //     if (currentPage >= 1) {
        //         currentPage++
        //     };
        //     if (currentPage === 4) {
        //         // { pageArrowUp.disabled = true }
        //     };
        // };

        // pageDec = () => {
        //     const { currentPage } = this.state;
        //     this.setState({
        //         currentPage: currentPage - 1
        //     });

        //     if (currentPage >= 2) {
        //         currentPage--
        //     }
        // if (currentPage === 1) { pageArrowDown.disabled = true }
        // };





        return (
            <nav className="navArrowsBar navbar-expand-sm container-fluid" style={{ height: "5vmin", zIndex: "7" }}>
                <div className="row justify-content-center">
                    <div className="navRowArrows navbar-nav col-12 justify-content-center">
                        <a className="pageArrowDown" /*href={newPage}*/><FaArrowCircleDown size="3em" className="nav-arrow" /*onClick={pageInc}*/ /></a>
                        <a className="pageArrowUp" /*href={newPage}*/><FaArrowCircleUp size="3em" className="nav-arrow" /*onClick={pageDec}*/ /></a>
                    </div>
                </div>
            </nav >

        );
    }

}



export default NavArrows;