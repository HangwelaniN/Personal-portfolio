import './App.css';
import {Container,Nav,Navbar} from 'react-bootstrap';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
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
    <BrowserRouter>
  <div className="App" >
     <Navbar expand="lg" >
      <Container fluid>
        <Navbar.Brand href="#">HangwelaniN</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=" left me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link  as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/About">About</Nav.Link>
            <Nav.Link  as={Link} to="/Projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/Contacts">Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Contacts" element={<Contacts/>} />
      </Routes>
      
    </div>
 
  </div>
  <Container fluid>
       <Row className=" footer sjustify-content-md-center">
       <Col className='name'>HangwelaniN</Col>
       <Col md="auto"><a href="mailto:hngwekhulu@gmail.com"> <FontAwesomeIcon icon={faEnvelope} className="icons"/></a>
             <p className="no"> hngwekhulu@gmail.com</p></Col>
        <Col xs lg="2">
        < a href="tel:+27624328241"><FontAwesomeIcon icon={faPhone} className="icons" /></a>
              <br />
               <p1 className="no"> +27624328241 </p1>
        </Col>
       </Row>
     </Container>
  </BrowserRouter>
  
    
  );
}

export default App;
