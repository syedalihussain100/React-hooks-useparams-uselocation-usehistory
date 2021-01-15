import React from 'react';
import {useLocation,useHistory} from 'react-router-dom';
import "./App.css";

function About() {
    const location = useLocation();
    const history = useHistory()
    console.log(history);
    const goback = () =>{
        history.goBack()
    }
    return (
        <div>
     <h1>Mern Stack Developer</h1>
     <h4>My Info: {location.state.name}</h4>
     <h3>My Url: {location.pathname}</h3>
     <button onClick={goback} className="back_btn">Go Back</button>            
        </div>
    )
}

export default About
