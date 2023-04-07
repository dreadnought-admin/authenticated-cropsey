import React from 'react'
import { Link } from 'react-router-dom'

const ReleaseCard = ({ release }) => {
  
  const { id, album_cover, title, record_label, release_date } = release

  return (
    <div className="row">
    <div className="release">
      <div className="release-cover">
        <img src={album_cover}/>
      </div>
        <div className="release-info">
          <h1>{title}</h1>
          <h2>{record_label}</h2>
          <p>{release_date}</p>
          <div className="discover-button-container">
          <Link to={`/releases/${id}`}><button className="discover-button">Discover</button></Link>
        </div>
      </div>
      <br/>
    </div>
    </div>
  )
}

export default ReleaseCard