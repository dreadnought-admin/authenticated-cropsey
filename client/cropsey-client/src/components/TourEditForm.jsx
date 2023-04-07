import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const initialState = {
    venue: "", 
    city: "", 
    state: "", 
    country: "", 
    time: "", 
    date: "", 
    ticket_link: "", 
    rsvp_link: ""
}

const TourEditForm = ({ onUpdateTour }) => {

    const [formData, setFormData] = useState(initialState)

    const { venue, city, state, country, time, date, ticket_link, rsvp_link } = formData;

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3000/tour_dates/${id}`)
        .then((r) => r.json())
        .then((tour) => setFormData(tour))
    }, [id])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(formData => ({... formData, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedTour = {
            venue: formData.venue,
            city: formData.city, 
            state: formData.state, 
            country: formData.country,
            time: formData.time, 
            date: formData.date, 
            ticket_link: formData.ticket_link, 
            rsvp_link: formData.rsvp_link
        }
        fetch(`http://localhost:3000/tour_dates/${id}`, 
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedTour)
        })
        .then((r) => r.json())
        .then((updatedTour) => {
            onUpdateTour(updatedTour)
            navigate("/tour")
        })
    }

  return (
    <div style={{color: "white"}}>
      <div>
        <form onSubmit={handleSubmit} autoComplete="off">
            <h3>EDIT TOUR DATE</h3>
            <div>
                <ul>
                    <li>
                        <label>VENUE</label>
                        <input
                        type="text"
                        id="venue"
                        name="venue"
                        value={venue}
                        onChange={handleChange}
                        />
                    </li>

                    <li>
                        <label>CITY</label>
                        <input
                        type="text"
                        id="city"
                        name="city"
                        value={city}
                        onChange={handleChange}
                        />
                    </li>

                    <li>
                        <label>STATE</label>
                        <input
                        type="text"
                        id="state"
                        name="state"
                        value={state}
                        onChange={handleChange}
                        />
                    </li>

                    <li>
                        <label>COUNTRY</label>
                        <input
                        type="text"
                        id="country"
                        name="country"
                        value={country}
                        onChange={handleChange}
                        />
                    </li>

                    <li>
                        <label>TIME</label>
                        <input
                        type="text"
                        id="time"
                        name="time"
                        value={time}
                        onChange={handleChange}
                        />
                    </li>

                    <li>
                        <label>DATE</label>
                        <input
                        type="text"
                        id="date"
                        name="date"
                        value={date}
                        onChange={handleChange}
                        />
                    </li>

                    <li>
                        <label>TICKET LINK</label>
                        <input
                        type="text"
                        id="ticket_link"
                        name="ticket_link"
                        value={ticket_link}
                        onChange={handleChange}
                        />
                    </li>

                    <li>
                        <label>RSVP LINK</label>
                        <input
                        type="text"
                        id="rsvp_link"
                        name="rsvp_link"
                        value={rsvp_link}
                        onChange={handleChange}
                        />
                    </li>
                </ul>
                <br/>
                <button style={{color: "white"}}>UPDATE</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default TourEditForm
