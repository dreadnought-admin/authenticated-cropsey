import TourCard from './TourCard'
import Loading from './Loading'
import { Link } from 'react-router-dom'

const TourList = ({ user, tours, handleDeleteTour, enterTourEdit }) => {
  
  const tourList = tours?.map((tour) => {
    return <TourCard
    key={tour.id}
    tour={tour}
    user={user}
    handleDeleteTour={handleDeleteTour}
    enterTourEdit={enterTourEdit}
    />
  }) 
  
if (!tours) return <Loading />

  return (
    <div className="tour-list">
      <div className="tour-list-tickets" style={{color: "white"}}>
        <h1>Tickets</h1>
      </div>
      <ul className="card">
        {tourList}
      </ul>
    </div>
  )
}

export default TourList