import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faPhone } from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Contact.css';

export default function Contacts() {
    return(
        <div className="contacts">
         <Container>
           <Row>
            <Col>
             <img src={require('./imgs/coding1.jpg')} alt="lady coding" />
            </Col>
            <Col>
              <h2>CONTACT ME</h2>
              <a href="mailto:hngwekhulu@gmail.com"> <FontAwesomeIcon icon={faEnvelope} className="icon"/></a>
              <p> hngwekhulu@gmail.com</p>
              < a href="tel:+27624328241"><FontAwesomeIcon icon={faPhone} className="icon" /></a>
              <br />
               <p1> +2762 057 0579 </p1>
            </Col>
           </Row>
         </Container>      
            
               </div>

    )
}