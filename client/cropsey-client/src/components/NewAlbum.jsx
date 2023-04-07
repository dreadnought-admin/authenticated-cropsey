import React from 'react'
import albumimg from '../assets/malef.jpg'

const NewAlbum = () => {
  return (
    <div className="new-album-container">
    <div className="new-album">
        <img src={albumimg}/>
    </div>
    <div className="new-album-text">
        <h1>MALFEASANCE</h1>
        <h2>FULL ALBUM DROPS APRIL 21ST</h2>
        <a target="_blank" href="https://open.spotify.com/track/09PEJ12EumieKJZZrYEACL?si=f235856f6fdd4416"><button>LISTEN ON SPOTIFY</button></a>
    </div>
    {/* <div className="clear"></div> */}
    </div>
  )
}

export default NewAlbum