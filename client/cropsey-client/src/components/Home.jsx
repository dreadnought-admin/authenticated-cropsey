import React from 'react'
import { useState, useEffect } from 'react'
import MusicVideo from './MusicVideo'
import NewAlbum from './NewAlbum'
import Logo from './Logo'
import ListenNow from './ListenNow'
import fullBand from '../assets/fullband.jpg'
import bandCollage from '../assets/bandcollage.png'

const Home = () => {
  return (
    <div>
      <MusicVideo />
      <NewAlbum />
      <br/>
      <img className="band-collage" src={bandCollage}/>
      <section>
        <div className="hero-container">
            <div className="environment">    
            </div>
            <h2 className="hero glitch layers" data-text="LISTEN NOW">
               <span>LISTEN NOW</span>
            </h2>
        </div>
        <ListenNow />
      </section>
      <img className="full-band-img" src={fullBand}/>
    </div>
  )
}

export default Home