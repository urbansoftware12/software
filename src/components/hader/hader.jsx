import React from 'react';
import './hader.css'
import Whitelogo from '../../assets/urbanblack.svg';
import {Navbar, Nav} from 'react-bootstrap';
import $ from 'jquery';
function Hader() {
    return (
      <div className="App">
            <Navbar collapseOnSelect expand="lg"  style={{backgroundColor: 'white'}} variant="dark">
              <div className='container-fluid hadder' >
                <Navbar.Brand href="./hom">
                  <img src={Whitelogo} width="90" height="42" className="d-inline-block align-top" alt="React Bootstrap logo"/>
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
                      <button className='btn' style={{fontFamily: 'Urbanist-medium',fontSize: '14px', backgroundColor: '#65E4A1', color: 'black',border: 'none',padding: '8px 20px', borderRadius: '3px'}}>Book a Free Consultation</button>
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </div>
            </Navbar>
      </div>
    );
  }
  export default Hader;

  $(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".hadder").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".hadder").removeClass("active");
    }
});