import React from "react";
import './Project.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default function Projects () {
    return (
         <div>
            <h2>SOME OF MY WORK</h2>
        <Container>
            <Row>
              <Col className="weather">
                <a href="https://comfy-macaron-99cf13.netlify.app/" target="blank">
                <img src={require('./imgs/weather-app.png')} alt="lady coding" className="imgs"/>
                </a>
                <br />
                <p>Click on the image for the results  of the project and <a href="https://github.com/HangwelaniN/react-weather-project" target="blank"  className="click">CLICK HERE</a> for the code </p>
                
              </Col>
              <Col className="nailtech">
                <a href="https://sprightly-horse-b4d651.netlify.app/" target="blank">
                <img src={require('./imgs/nailtech.png')} alt="nail tech's portfolio" className="imgs"/>
                </a>
                <br />
                <p>Click on the image for the results of the project and <a href="https://github.com/HangwelaniN/portfolio-project"  target="blank"   className="click">CLICK HERE</a> for the code </p>
                
              </Col>
              <Col className="cal">
                <a href="https://precious-granita-08d2e8.netlify.app/" target="blank">
                <img src={require('./imgs/blog.png')} alt="weather application using reactjs" className="imgs"/>
                </a>
                <br />
                <p>Click on the image for the results  of the project and <a href="https://github.com/HangwelaniN/H.-Block" target="blank" className="click">CLICK HERE</a> for the code </p>
                
              </Col>
           </Row>
        </Container>
         </div>


    
    )
}