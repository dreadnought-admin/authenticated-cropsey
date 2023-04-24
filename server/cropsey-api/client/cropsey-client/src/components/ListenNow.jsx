import React from 'react'
import spotifyLogo from '../assets/spotify-logo.png'
import amazonLogo from '../assets/amazontrans.png'
import appleLogo from '../assets/music.png'

const ListenNow = () => {
  return (
    <div className="listen-now-container">
        <div className="listen-now-icon-container">
        <a href="https://open.spotify.com/artist/3gJdhuULhfOJ8hSqoMr4yQ?dl_branch=1&si=tUQCdM2YTii1ag87QwsVKw&utm_medium=share&utm_source=linktree&nd=1"><img src={spotifyLogo}/></a>
        <a href="https://music.apple.com/us/artist/cropsey/1528066809"><img src={appleLogo}/></a>
        <a href="https://music.amazon.com/albums/B08S48GWJP?ref=dm_sh_lvqTXEJBzWlCPPxJxb9Vv7Box"><img src={amazonLogo}/></a>
        </div>
    </div>
  )
}

export default ListenNow