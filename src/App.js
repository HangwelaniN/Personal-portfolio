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
            <Nav.Link  as={Link} to="/Home">Home</Nav.Link>
            <Nav.Link as={Link} to="/About">About</Nav.Link>
            <Nav.Link  as={Link} to="/Projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/Contacts">Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     
    <div>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Contacts" element={<Contacts/>} />
      </Routes>
      
    </div>
 
  </div>
  </BrowserRouter>
  
    
  );
}

export default App;
