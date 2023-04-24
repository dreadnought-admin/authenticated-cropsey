import axios from 'axios';
import React from 'react'
import Loading from './Loading';
import bcLogo from '../assets/bandcamp.png'
import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

const ReleaseDetail = ({ }) => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [releaseDetail, setReleaseDetail] = useState([]);

    useEffect(() => {
        axios.get(`https://theblackmarket.herokuapp.com/music_posts/${id}`)
        .then((r) => {
            setReleaseDetail(r.data)
        })
    }, [])

    const { album_cover, description, record_label, release_date, spotify_link, title, bandcamp_link } = releaseDetail;

    if (!releaseDetail) return <Loading />

  return (
    <div className="release-detail-container flex-direction">
        <div className="release-detail-img">
            <img src={album_cover}/>
        </div>
        <div className="release-detail-info">
            <h1>{title}</h1>
            <h2>{record_label}</h2>
            <h3>{release_date}</h3>
            <br/>
            <br/>
            <p>{description}</p>
            <br/>
            <div className="release-buttons">
            {spotify_link? <a href={spotify_link}><button>Listen on SPOTIFY</button></a> : null}
            {bandcamp_link? <a href={bandcamp_link}><button>Buy it on BANDCAMP</button></a> : null}
            </div>
        </div>

        <div>

        </div>
    </div>
  )
}

export default ReleaseDetail