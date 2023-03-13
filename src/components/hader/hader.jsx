import React from 'react';
import './hader.css'
import Whitelogo from '../../assets/urban_software_white.svg';
import {Navbar, Nav} from 'react-bootstrap';
function Hader() {
    return (
      <div className="App">
            <Navbar collapseOnSelect expand="lg" style={{backgroundColor: 'white'}} variant="dark" sticky='top'>
              <div className='container-fluid'>
                <Navbar.Brand href="#home">
                  <img src={Whitelogo} width="90"height="42"className="d-inline-block align-top"alt="React Bootstrap logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href='./' className='navlinqs'>Home</Nav.Link>
                    <Nav.Link href="./branding" className='navlinqs'>Branding</Nav.Link>
                    <Nav.Link href="./marketing" className='navlinqs'>Marketing</Nav.Link>
                    <Nav.Link href="./service" className='navlinqs'>Services</Nav.Link>
                    <Nav.Link href="./insight" className='navlinqs'>Insights</Nav.Link>
                    <Nav.Link href="./whychooseus" className='navlinqs'>Why Choose Us</Nav.Link>
                    <Nav.Link href="./contactus" className='navlinqs'>Contact Us</Nav.Link>
                  </Nav>
                  <Nav>
                    <Nav.Link href="./contactus">
                      <button className='btn btn-success' style={{fontFamily: 'Urbanist-medium',fontSize: '14px', backgroundColor: '#65E4A1', color: 'black'}}>Book a Free Consultation</button>
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </div>
            </Navbar>
      </div>
    );
  }
  export default Hader;