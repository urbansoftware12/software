import React from 'react';
import './header.css'
import Whitelogo from '../../assets/urban_software_white.svg';
import {Navbar, Nav} from 'react-bootstrap';
import $ from 'jquery';
function Header() {
    return (
      <div className="App">
            <Navbar collapseOnSelect expand="lg" variant="dark" sticky='top'>
              <div className='container-fluid hdder'>
                <Navbar.Brand href="#home">
                  <img src={Whitelogo} width="90"height="42"className="d-inline-block align-top"alt="React Bootstrap logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href='./' className='navlinq'>Home</Nav.Link>
                    <Nav.Link href="./branding" className='navlinq'>Branding</Nav.Link>
                    <Nav.Link href="./marketing" className='navlinq'>Marketing</Nav.Link>
                    <Nav.Link href="./service" className='navlinq'>Services</Nav.Link>
                    <Nav.Link href="./insight" className='navlinq'>Insights</Nav.Link>
                    <Nav.Link href="./whychooseus" className='navlinq'>Why Choose Us</Nav.Link>
                    <Nav.Link href="./contactus" className='navlinq'>Contact Us</Nav.Link>
                  </Nav>
                  <Nav>
                    <Nav.Link href="./contactus">
                      <button className='btn' style={{fontFamily: 'Urbanist-medium',fontSize: '14px', backgroundColor: '#65E4A1', color: 'black', padding: '8px 20px', borderRadius: '3px'}}>Book a Free Consultation</button>
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </div>
            </Navbar>
      </div>
    );
  }
  export default Header;

  $(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".hdder").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".hdder").removeClass("active");
    }
});