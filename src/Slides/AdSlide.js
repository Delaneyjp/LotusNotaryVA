import React, { Component } from 'react';
import penphoto from "../photo-holdingpen.jpg";
import vaculogo from "../VACUlogo.png";
import Footer from '../Components/Footer';


const AdSlide = () => {

    return (
        <>
            <div className="Slide" id="AdSlide">
                <div className="photoSpan">
                    <img width="100%" src={penphoto} className="penPhoto" alt="person signing contract" />
                </div>
                <div className="slideContainer">

                    <div className="container adSection">
                        <div className="row">
                            <div className="col-9 adText text-center">
                                <h3>
                                    ARE YOU LOOKING TO PURCHASE OR SELL A PROPERTY?
                            </h3>
                                <h2>
                                    FOUND OUT HOW I CAN HELP,
                            </h2>
                                <div className="btn btn-danger btn-lg" style={{ border: "1px solid black", fontWeight: "bolder", color: "black" }}>
                                    HERE
                            </div>
                            </div>
                            <div className="col-3 adLogo">
                                <h4>
                                    <b>Tanya Martin</b>
                                    <br></br>
                                REALTOR
                            </h4>
                                <img height="150px" src={vaculogo} className="vaculogo" alt="VACU Logo" />

                            </div>
                        </div>
                    </div>

                </div>


            </div>
            <Footer />

        </>
    );
}

export default AdSlide;