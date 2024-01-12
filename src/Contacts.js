import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faPhone } from '@fortawesome/free-solid-svg-icons'

import './Contact.css';

export default function Contacts() {
    return(
        <div className="contacts">
            <h2>CONTACT ME</h2>
            <div className="it">
            <img src={require('./imgs/coding1.jpg')} alt="lady coding" />
            <div className="contain">
             <a href="mailto:hngwekhulu@gmail.com"> <FontAwesomeIcon icon={faEnvelope} className="icon"/></a>
             <p> hngwekhulu@gmail.com</p>
              < a href="tel:+27624328241"><FontAwesomeIcon icon={faPhone} className="icon" /></a>
              <br />
               <p1> +27624328241 </p1>
               
               </div>
                <br />
                <br />
                <br />
             </div>
        </div>
    )
}