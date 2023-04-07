import React from 'react'
import fbLogo from '../assets/facebook.png'
import instaLogo from '../assets/instagram.png'
import bcLogo from '../assets/bandcamp.png'

const SocialBar = () => {
  return (
    <div className="social-container">
    <div className="social-icon-container">
      <a href="https://www.facebook.com/CropseyNYHC"><img src={fbLogo}/></a>
      <a href="https://www.instagram.com/cropseyny/?hl=en"><img  src={instaLogo}/></a>
      <a href="https://1054records.bandcamp.com/album/cropsey-1054-redux"><img  src={bcLogo}/></a>
    </div>
    </div>
  )
}

export default SocialBar