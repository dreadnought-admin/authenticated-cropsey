import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const NewTourDateForm = ({tours, setTours, user}) => {


    const [formData, setFormData] = useState({
        venue: "", 
        city: "", 
        state: "", 
        country: "", 
        time: "", 
        date: "", 
        ticket_link: "", 
        rsvp_link: ""
    })

    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formDataBody = { ...formData, user_id: user.id }

        fetch(`https:/theblackmarket.herokuapp.com/tour_dates`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formDataBody)
        }).then((r) => {
            if (r.ok) {
                r.json()
                .then((newTour) => {
                    setTours([...tours, newTour])
                    navigate("/tour")
                })
            } else {
                r.json().then((json) => setErrors(Object.entries(json.errors)))
            }
        })
    }

    const handleChange = (e) => {
        let newInfo = {...formData}
        newInfo[e.target.id] = e.target.value 
        setFormData(newInfo)
    }



  return (
    <div>
      <div className="new-date-container">
        <form onSubmit={handleSubmit} autoComplete="off">
            <h3>ADD A TOUR DATE</h3>
            <div>
               
                        <label>VENUE</label>
                        <input
                        type="text"
                        id="venue"
                        name="venue"
                        placeholder="Venue Name"
                        value={formData.venue}
                        onChange={handleChange}
                        />
                    
                        <label>CITY</label>
                        <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                        />
                    
                        <label>STATE</label>
                        <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="State (Two Letters)"
                        value={formData.state}
                        onChange={handleChange}
                        />
                    
                        <label>COUNTRY</label>
                        <input
                        type="text"
                        id="country"
                        name="country"
                        placeholder="Country (Optional)"
                        value={formData.country}
                        onChange={handleChange}
                        />
                    
                        <label>TIME</label>
                        <input
                        type="text"
                        id="time"
                        name="time"
                        placeholder="Format As 00:00"
                        value={formData.time}
                        onChange={handleChange}
                        />
                    
                        <label>DATE</label>
                        <input
                        type="text"
                        id="date"
                        name="date"
                        placeholder="Format As YYYY-MM-DD"
                        value={formData.date}
                        onChange={handleChange}
                        />
                    
                        <label>TICKET LINK</label>
                        <input
                        type="text"
                        id="ticket_link"
                        name="ticket_link"
                        placeholder="Ticket Link URL"
                        value={formData.ticket_link}
                        onChange={handleChange}
                        />
                    
                        <label>RSVP LINK</label>
                        <input
                        type="text"
                        id="rsvp_link"
                        name="rsvp_link"
                        placeholder="RSVP Link URL"
                        value={formData.rsvp_link}
                        onChange={handleChange}
                        />
                    
                <button className="login-button" type="submit" onClick={handleSubmit}>ADD TOUR DATE</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default NewTourDateForm
