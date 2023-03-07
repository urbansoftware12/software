import React from 'react';
// import { Link } from 'react-router-dom';
import './header.css'
import Whitelogo from '../../assets/urban_software_white.svg';
import {Navbar, Nav} from 'react-bootstrap';
function Header() {
    return (
      <div className="App">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
              <div className='container-fluid'>
                <Navbar.Brand href="#home">
                  <img src={Whitelogo} width="90"height="42"className="d-inline-block align-top"alt="React Bootstrap logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href='./' className='navlinq'>Home</Nav.Link>
                    <Nav.Link href="./branding" className='navlinq'>Branding</Nav.Link>
                    <Nav.Link href="#marketing" className='navlinq'>Marketing</Nav.Link>
                    <Nav.Link href="./service" className='navlinq'>Services</Nav.Link>
                    <Nav.Link href="#faqs" className='navlinq'>FAQs</Nav.Link>
                    <Nav.Link href="#whychooseus" className='navlinq'>Why Choose Us</Nav.Link>
                    <Nav.Link href="#contactus" className='navlinq'>Contact Us</Nav.Link>
                  </Nav>
                  <Nav>
                    <Nav.Link href="#conultation">
                      <button className='btn btn-success' style={{fontFamily: 'Urbanist-medium',fontSize: '14px', backgroundColor: '#65E4A1', color: 'black'}}>Book a Free Consultation</button>
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </div>
            </Navbar>
      </div>
    );
  }
  export default Header;