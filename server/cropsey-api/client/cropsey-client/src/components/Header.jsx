import React from 'react'
import { NavLink } from 'react-router-dom'



const Header = ({ user }) => {

   const logOutUser = () => {
		this.props.logOutUser();
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		window.history.back();
	};

  return (
    <div className="header">
      <div className="header-link-container">
        <NavLink className="header-link" to="/">HOME</NavLink>
        <NavLink className="header-link" to="/releases">RELEASES</NavLink>
        <NavLink className="header-link" to="/tour">TOUR</NavLink>
        <NavLink className="header-link" to ="/news">NEWS</NavLink>
        {user.password_digest &&(
          <NavLink className="header-link" onClick={logOutUser} to="/">LOGOUT ☠</NavLink>
        )}
      </div>
      <br/>
    </div>
  )
}

export default Header