import React, {useState, useEffect} from 'react';
import LoginForm from './components/LoginForm'

import { Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import ReleaseList from './components/ReleaseList'
import NewsList from './components/NewsList'
import TourList from './components/TourList'
import TourEditForm from './components/TourEditForm';
import Logo from './components/Logo'
import axios from 'axios'
import SocialBar from './components/SocialBar'
import ReleaseDetail from './components/ReleaseDetail'
import NewTourDateForm from './components/NewTourDateForm';
import AdminPanel from './components/AdminPanel';

function App() {

  const [tours, setTours] = useState([]);
  const [news, setNews] = useState([]);
  const [releases, setRelease] = useState([]);
  const [releaseDetail, setReleaseDetail] = useState([]);
  const [likes, setLikes] = useState([]);

  const [tourId, setTourId] = useState(null);


  const navigate = useNavigate()

  useEffect(() => {
    fetchNews();
    fetchTours();
    fetchRelease();
  }, [])

  const fetchNews = () => {
    axios.get("https://cropsey.herokuapp.com/news_posts")
    .then((r) => {
      setNews(r.data)
    });
  }


  const fetchRelease = () => {
     axios.get("https://cropsey.herokuapp.com/music_posts")
    .then((r) => {
    setRelease(r.data)
    });
  }

  const fetchTours = () => {
    axios.get("https://cropsey.herokuapp.com/tour_dates")
    .then((r) => {
      setTours(r.data)
    });
  }

  // tour CRUD

  const handleDeleteTour = (id) => {
    fetch(`https://cropsey.herokuapp.com/tour_dates/${id}`, 
    {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => {
      setTours((tours) => tours.filter((tour) => tour.id !== id))
    })
  }

    const onUpdateTour = (updatedTour) => {
      const updatedTours = tours.map((ogTour) => {
        if (ogTour.id === updatedTour.id) {
          return updatedTour; 
        } else {
          return ogTour
        }
      })
      setTours(updatedTours)
    }

    const completeEditTour = () => {
      setTourId(null);
    }

    const enterTourEdit = (tourId) => {
      setTourId(tourId)
    }
        
  // end tour CRUD


  // user authentication 
  const [user, setUser] = useState({})
  const [form, setForm] = useState("")

  useEffect(() => {
    const token = localStorage.getItem("token")
    if(token){
      fetch(`https://cropsey.herokuapp.com/auto_login`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(data => {
        setUser(data)
      })
    }
  }, [])

  const handleLogin = (user) => {
    setUser(user)
  }


  const handleAuthClick = () => {
    const token = localStorage.getItem("token")
    fetch(`https://cropsey.herokuapp.com/user_is_authed`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  // end of user authentication

  
  return (
    <div className="App">
    <div className="app">
      <Header user={user}/>
      <Logo />
      <Routes>
        <Route exact path ="/" element={<Home/>}/>
        <Route exact path ="/releases" element={<ReleaseList releases={releases} setRelease={setRelease}/>}/>
        <Route exact path="/releases/:id" element={<ReleaseDetail releases={releaseDetail} setReleaseDetail={setReleaseDetail}/>}/>
        <Route exact path ="/news" element={<NewsList news={news} setNews={setNews} likes={likes} setLikes={setLikes}/>}/>
        <Route exact path ="/tour" element={<TourList handleDeleteTour={handleDeleteTour} user={user} tours={tours} setTours={setTours} enterTourEdit={enterTourEdit}/>}/>
        <Route exact path="/login" element={<LoginForm handleLogin={handleLogin}/>}/>
        <Route exact path="/tour/:id/edit" element={
        <TourEditForm 
        tourId={tourId}
        completeEditTour={completeEditTour}
        onUpdateTour={onUpdateTour}
        />}/>
        <Route exact path="/newtour/" element={<NewTourDateForm tours={tours} setTours={setTours} user={user}/>}/>
        <Route exact path="/admin" element={<AdminPanel user={user} />}/>
      </Routes>
      </div>
      <div className="footer">
        <SocialBar />
        <Footer />
      </div>
    </div>
  );
}

export default App;
