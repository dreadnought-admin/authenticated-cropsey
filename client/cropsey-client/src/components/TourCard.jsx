import Loading from "./Loading"
import admin from '../assets/administrator.png'
import trash from '../assets/trash.png'
import add from '../assets/add.png'
import {Link , useNavigate } from 'react-router-dom'

const TourCard = ({ user, tour, handleDeleteTour, enterTourEdit }) => {

  const { id, venue, city, state, country, time, date, ticket_link, rsvp_link } = tour

  if (!tour) return <Loading />

  const handleDelete = () => {
    fetch(`https://cropsey.herokuapp.com/tour_dates/${id}`, {
      method: "DELETE",
    })
    handleDeleteTour(id)
    navigate("/")
  }

  const handleEditClick = () => {
    enterTourEdit(id)
  }

  const navigate = useNavigate();

  const str = date
  let formattedDate = (str.slice(5))
  
  return (
    <div className="tour-container">
      <hr></hr>
      <div className="row1 no-gutters d-flex align-items-center">
        <br/>
        <div className="tour-container-location">
        <h1>{venue}</h1><p>{city}, {state}, {country? country : null}</p>
        </div>
        <div className="tour-date">
        <h2>{formattedDate}</h2>
        </div>
      </div>
      <div className="tour-buttons">
          <a href={rsvp_link}><button>RSVP</button></a>
          {ticket_link? <a href={ticket_link}><button>Buy Tickets</button></a> : null}
      </div>
      <div className="admin-buttons">
      {user.password_digest &&(
          <Link to={`/newtour`}><img width="30px" height="30px" src={add}/></Link>
          )}
          {user.password_digest &&(
          <Link  to={`/tour/${id}/edit`}>
          <button  style={{background: "none", border: "none"}} onClick={handleEditClick}><img width="30px" height="30px" src={admin}/></button>
          </Link>
          )}
          {user.password_digest && (
            <button id={id} onClick={handleDelete} style={{background: "none", border: "none"}}><img width="30px" height="30px" src={trash}/></button>
          )}
      </div>
      <br/>
      <br/>
    </div>
  )
}

export default TourCard