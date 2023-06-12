import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hook/Contexts/useAuth/useAuth';
import { Button, Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';

const Header = () => {
  const {user, logOut} = useAuth()

  const handleLogOut = () =>{
  
    logOut()
    .then( () => {})
    .catch(()=>{})
  }

    return (
        <React.Fragment>

<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand ><Link to="/">Dragon News</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link >Features</Nav.Link>
            <Nav.Link >Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <>
              {
              
                user?.uid
                ?
                <>
              <span>{user?.displayName}</span>
              <Button onClick={handleLogOut} variant="light">Sign Out</Button>
                </>
              :
                <>
              
               <Link to="/login">Sign In</Link>
               
                
              <span style={{marginLeft: '20px', marginRight: '20px'}}> <Link to="/register">Sign Up</Link></span>
                
                </>
              }
            </>
            <Link to="/profile">
           {user?.photoURL ?
          <Image roundedCircle
            src={user?.photoURL}
            style={{height:'40px'}}/>
          :
          <FaUser/>
          }
            </Link>
          </Nav>
          <div className='d-lg-none'>
            <LeftSideNav/>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </React.Fragment>
    );
};

export default Header;