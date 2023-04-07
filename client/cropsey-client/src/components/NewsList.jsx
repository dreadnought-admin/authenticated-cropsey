import React from 'react'
import InstagramFeed from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'

const NewsList = ({ news }) => {

  if (!news) return <Loading />

  return (
    <div className="news-container">
      <div>
        <h1>News</h1>
      </div>
      <InstagramFeed token="IGQVJXNHR1eGdTQnJ2MXZAxVjFyV29IWDlxRmlmRTZALZAGdwSGpvVG1MY2ZAzeHRublFFR1dsZA0FjS011eVZAsbG5PajBBWkM5YmdhcGM2VVg5cXpOVW9hNUlJRDRqQVI1U0NiSWFZASlZAWY2FXOFV6MU9jWAZDZD"
      counter="25"/>
    </div>
  )
}

export default NewsList