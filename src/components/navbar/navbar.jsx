import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import $ from 'jquery';
import Whitelogo from '../../assets/urbanblack.svg'; 
// import Whitelogo from '../../assets/urban_software_white.svg';
import "./navbar.css";

function OffcanvasExample() {
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} bg='transparent' expand={expand} className="mb" fixed='top' style={{top:'0'}}>
          <Container fluid className='hdder'>
            {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
            <Navbar.Brand href="./hoome">
                  <img src={Whitelogo} width="90"height="42"className="d-inline-block align-top"alt="React Bootstrap logo"/>
                </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1">
                  <Nav.Link href="./branding" className='navlinc'>Branding</Nav.Link>
                  <Nav.Link href="./marketing" className='navlinc'>Marketing</Nav.Link>
                  <Nav.Link href="./service" className='navlinc'>Services</Nav.Link>
                  <Nav.Link href="#action4" className='navlinc'>Conceptzilla</Nav.Link>
                  <Nav.Link href="./whychooseus" className='navlinc'>Why Choose Us</Nav.Link>
                  <Nav.Link href="./insight" className='navlinc'>Insights</Nav.Link>
                  <Nav.Link href="./contactus" className='navlince'>Get in Touch</Nav.Link>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;

$(window).on("scroll", function() {
  if($(window).scrollTop() > 50) {
      $(".hdder").addClass("active");
  } else {
      //remove the background property so it comes transparent again (defined in your css)
     $(".hdder").removeClass("active");
  }
});