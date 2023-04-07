import React from 'react'
import videoBg from '../assets/cropseybg.mp4'

const MusicVideo = () => {
  return (
    <div className="large-video">
      <video src={videoBg} autoPlay loop muted/>
      <div className="content">
        <h1>MALFEASANCE </h1>
        <h2>THE TEASER</h2>
        <a target="_blank" href="https://www.youtube.com/watch?v=W27e5hQ9GU4"><button className="name noselect">LISTEN NOW</button></a>
      </div>
    </div>
  )
}

export default MusicVideo