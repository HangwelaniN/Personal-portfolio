import './App.css';
import {Container} from 'react-bootstrap';
import About  from './About';
import Projects from './Projects';
import Home from './Home';
import Contacts from './Contacts';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faPhone } from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    
  <div className="App" >
    <h1 className='p-3 fs-3'>HangwelaniN</h1>
    <Home />
     <About />
     <Projects />
     <Contacts />
  <Container fluid>
       <Row className=" footer sjustify-content-md-center">
       <Col className='name'>HangwelaniN</Col>
       <Col md="auto"><a href="mailto:hngwekhulu@gmail.com"> <FontAwesomeIcon icon={faEnvelope} className="icons"/></a>
             <p className="no"> hngwekhulu@gmail.com</p></Col>
        <Col xs lg="2">
        < a href="tel:+27624328241"><FontAwesomeIcon icon={faPhone} className="icons" /></a>
              <br />
               <p1 className="no"> +2762 057 0579 </p1>
        </Col>
       </Row>
     </Container>
     
    
  </div>
    
  );
}

export default App;
