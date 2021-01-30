import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import NavArrows from './Components/NavArrows';

import AboutMeSlide from './Slides/AboutMeSlide';
import AdSlide from './Slides/AdSlide';
import MessageMeSlide from './Slides/MessageMeSlide';
import TitleSlide from './Slides/TitleSlide';



function App() {
  return (
    <div className="appPage">
      <Navbar />
      <NavArrows />

      <TitleSlide />
      <AboutMeSlide />
      <MessageMeSlide />
      <AdSlide />

    </div>
  );
}

export default App;
