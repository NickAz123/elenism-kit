import React, {useEffect, useState} from 'react';
import './landing.css';
import { fetchImage } from '../../js/firebase/firebaseHelpers';

const Landing = ({bgClass, bgImg, logoClass, logoURL, titleClass, brideName, groomName}) => {
  
  const[imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    fetchImage(bgImg).then((url) => setImageUrl(url));
  }, [])
  
  return (
    <div id="landing-page">
      {bgImg && <img id="background-photo" className={`${bgClass}`} src={imageUrl} alt="Cover"/> }
      {logoURL && <img id="logo" src={logoURL} alt="logo" className={`${logoClass}`}/>}
      <div className={`landing-title ${titleClass}`}>
        { brideName && groomName && <p className="">{brideName} & {groomName}</p> }
      </div>
    </div>
  );
}

export default Landing;
