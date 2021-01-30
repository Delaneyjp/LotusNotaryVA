import React, { Component, useState, useEffect } from 'react';
import { FaArrowCircleDown } from "react-icons/fa"
import { FaArrowCircleUp } from "react-icons/fa"



const NavArrows = () => {


    let links = ["#TitleAd", "#AboutMeSlide", "#MessageMeSlide", "#AdSlide"];
    const [currentPage, setCurrentPage] = useState(1);
    const [nextPage, setNextPage] = useState(currentPage + 1);
    const [prevPage, setPrevPage] = useState(currentPage - 1);


    // const nextPage = currentPage + 1
    // const prevPage = currentPage - 1

    const pageInc = () => {
        if (currentPage === 4) {
            return;
        } else {
            setCurrentPage(currentPage + 1)
            setNextPage(nextPage + 1)
            setPrevPage(prevPage + 1)
        }
        console.log(`Current Page is: ${nextPage}`)
        console.log(`Next Page is: ${nextPage + 1}`)
        console.log(`Previous Page is: ${currentPage}`)
    };
    const pageDec = () => {
        if (currentPage === 1) {
            return;
        } else {
            setCurrentPage(currentPage - 1)
            setNextPage(nextPage - 1)
            setPrevPage(prevPage - 1)
        }
        console.log(`Current Page is: ${prevPage}`)
        console.log(`Next Page is: ${currentPage}`)
        console.log(`Previous Page is: ${prevPage - 1}`)
    };



    return (
        <nav className="navArrowsBar navbar-expand-sm container-fluid" style={{ height: "5vmin", zIndex: "7" }}>
            <div className="row justify-content-center">
                <div className="navRowArrows navbar-nav col-12 justify-content-center">
                    <a className="pageArrowDown" onClick={pageInc} href={links[currentPage]} ><FaArrowCircleDown size="3em" className="nav-arrow" /></a>
                    <h1>{currentPage}</h1>
                    <a className="pageArrowUp" onClick={pageDec} ><FaArrowCircleUp size="3em" className="nav-arrow" href={links[currentPage]} /></a>
                </div>
            </div>
        </nav >

    );
}




export default NavArrows;