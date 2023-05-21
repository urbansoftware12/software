import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Whitelogo from '../../assets/urbanblack.svg';
import Blacklogo from '../../assets/urban_software_white.svg';
import './navbar.css';
import { useLocation } from 'react-router';
import { darkNav, lightNav } from './navbar.data';

const NavbarComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const urlString = location.pathname.split('/')[1];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinkColor = lightNav.includes(urlString) ? 'black' : urlString == '' || darkNav.includes(urlString) ? 'white' : 'black';

  return (
    <>
      {['lg'].map((expand) => (
        <Navbar
          sticky="top"
          fixed='top'
          key={expand}
          expand={expand}
          bg={(urlString == '' || darkNav.includes(urlString)) ? 'dark': isScrolled ? 'light':'transparent'} 
          variant={'light'} 
          >
          <Container fluid >
            <Navbar.Brand href="./hoome">
              <img src={!urlString || darkNav.includes(urlString) ? Whitelogo : Blacklogo}  width="90" height="42" alt="React Bootstrap logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="ms-auto">
                  <Nav.Link style={{color: navLinkColor}} href="./branding">Branding</Nav.Link>
                  <Nav.Link style={{color: navLinkColor}} href="./marketing">Marketing</Nav.Link>
                  <Nav.Link style={{color: navLinkColor}} href="./service">Services</Nav.Link>
                  <Nav.Link style={{color: navLinkColor}} href="#action4">Conceptzilla</Nav.Link>
                  <Nav.Link style={{color: navLinkColor}} href="./whychooseus">Why Choose Us</Nav.Link>
                  <Nav.Link style={{color: navLinkColor}} href="./insight">Insights</Nav.Link>
                  <Nav.Link style={{color: navLinkColor}} href="./contactus">Get in Touch</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default NavbarComponent
