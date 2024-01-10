import React from "react";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {faGithub } from '@fortawesome/free-brands-svg-icons'
import {faCss3Alt}  from '@fortawesome/free-brands-svg-icons'
import {faHtml5 } from '@fortawesome/free-brands-svg-icons'
import {faJs } from '@fortawesome/free-brands-svg-icons'
import {faReact} from '@fortawesome/free-brands-svg-icons'


export default function Home(){
    return (
        <div className="home">
            <p>HI THERE! I'M </p>
            <h1>HANGWELANI NGWEKHULU</h1>
            <p1>A <span className="color">FRONT-END DEVELOPER</span>  currently based in Johannesburg. From being a nail technician and school assistant to learning how to code 🌸. </p1>
             <br />
             <div className="socials">
              <a href="https://www.linkedin.com/in/hangwelani-ngwekhulu-3b651a297/" target="blank"><FontAwesomeIcon icon={faLinkedin} className="in px-5" /></a>
             <a href="https://github.com/HangwelaniN" target="blank "><FontAwesomeIcon icon={faGithub} className="hub" /></a>
        </div>
        <br />
        <br />
        <br />
        <div >
            <span className="tech">Tech Stack |</span>
            <span className="stack">
            <FontAwesomeIcon icon={faHtml5} className="html mx-4"/>
            <FontAwesomeIcon icon={faCss3Alt} className="css mx-4"/>
            <FontAwesomeIcon icon={faJs} className="js mx-4"/>
            <FontAwesomeIcon icon={faReact} className="react mx-4"/>
            </span>
        </div>

        </div>
        
    )
}