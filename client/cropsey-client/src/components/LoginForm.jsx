import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function LoginForm({handleLogin}){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const handleUsernameChange = (evt) => {
        setUsername(evt.target.value)
    }

    const handlePasswordChange = (evt) => {
        setPassword(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        fetch(`https://theblackmarket.herokuapp.com/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        .then(resp => resp.json())
        .then(data => {
            localStorage.setItem("token", data.jwt)
            handleLogin(data.user)
        })
        setUsername("")
        setPassword("")
        navigate("/")
    }
    const formDivStyle = {
        margin: "auto",
        padding: "20px",
        width: "80%"
    }
    return(
        <div>
            <div className="login-container">
            <h1>LOG IN</h1>
            <form class="ui form" onSubmit={handleSubmit}>
                <div class="field">
                    <label htmlFor='username'>Username</label>
                    <input value={username} onChange={handleUsernameChange} type="text" placeholder="username"/>
                </div>
                <div class="field">
                    <label htmlFor='password'>Password</label>
                    <input value={password} onChange={handlePasswordChange} type="password" placeholder="password"/>
                </div>
                
                <button className="login-button" type="submit">Submit</button>
            </form>
        </div>
        </div>
    )
} 

export default LoginForm