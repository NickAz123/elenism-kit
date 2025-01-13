import './landing.css';
import React from 'react';

function Landing({bgClass, bgImg, logoClass, logoURL, titleClass, brideName, groomName}) {
  return (
    <div id="landing-page">
      {bgImg && <img id="background-photo" className={`${bgClass}`} src={bgImg} alt="Cover"/> }
      {logoURL && <img id="logo" src={logoURL} alt="logo" className={`${logoClass}`}/>}
      <div className={`landing-title ${titleClass}`}>
        { brideName && groomName && <p className="">{brideName} & {groomName}</p> }
      </div>
    </div>
  );
}

export default Landing;
