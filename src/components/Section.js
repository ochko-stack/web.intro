import React from 'react';
import '../App.css';
import video1 from '../videos/video-1.mp4';
import { Button } from './Button';
import './Section.css';
function HeroSection() {
  return (
    <div className="hero-container">
      <video src={video1} autoPlay loop muted />
      <h1>Санжаажав Оч-Эрдэнэ</h1>
      <p>Танилцуулга веб хуудсанд тавтай морил</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Товч Танилцуулга
        </Button>
        {/* <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
