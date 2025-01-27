import React from 'react';
import './landing.css';

function Landing({bgClass, bgImg, logoClass, logoURL, titleClass, brideName, groomName}) {
  return (
    <div id="landing-page">
      {bgImg && <img id="background-photo" className={`${bgClass || defaultProps.bgClass}`} src={bgImg} alt="Cover"/> }
      {logoURL && <img id="logo" src={logoURL || defaultProps.logoURL} alt="logo" className={`${logoClass}` || defaultProps.logoClass}/>}
      <div className={`landing-title ${titleClass}` || defaultProps.titleClass}>
        <p className="">{brideName || defaultProps.brideName} & {groomName || defaultProps.groomName}</p>
      </div>
    </div>
  );
}

Landing.defaultProps = {
  brideName: "Bride's Name",
  groomName: "Groom's Name",
  logoURL: "logoURL",
  titleClass: "landing-name",
  logoClass: "landing-logo",
  bgImg: "https://images.unsplash.com/photo-1513278974582-3e1b4a4fa21e?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,
  bgClass: "background-photo"
}

export default Landing;
