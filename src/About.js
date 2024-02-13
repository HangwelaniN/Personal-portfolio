import React from "react";
import './About.css';
import Button from "react-bootstrap/Button"


export default function About () {
    return(
        <div className="about">
            <div className="container">
            <h1>Who I am</h1>
            <br />
            <p>I'am a front-end developer.
            I create responsive and fully functioning websites and strive to create user friendly web.
            Not for it to only look visually appealing but also provide smooth and enjoyable interaction for the visitors.
            </p>
            <br />
            <a href="Hangwelani-CV.pdf" download="Hangwelani-CV.pdf"><Button variant="outline-info">Download CV</Button></a>
            </div>
        </div>
    )
}