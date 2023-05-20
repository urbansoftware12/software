import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import $ from 'jquery';
import Whittelogo from '../../assets/urban_software_white.svg';
import "./navber.css";

function OffcanvasExamplee() {
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} bg='transparent' expand={expand} className="mb" fixed='top' style={{top:'0'}}>
          <Container fluid className='hder'>
            {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
            <Navbar.Brand href="./hoome">
                  <img src={Whittelogo} width="90"height="42"className="d-inline-block align-top"alt="React Bootstrap logo"/>
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
                  <Nav.Link href="./branding" className='navlin'>Branding</Nav.Link>
                  <Nav.Link href="./marketing" className='navlin'>Marketing</Nav.Link>
                  <Nav.Link href="./service" className='navlin'>Services</Nav.Link>
                  <Nav.Link href="#action4" className='navlin'>Conceptzilla</Nav.Link>
                  <Nav.Link href="./whychooseus" className='navlin'>Why Choose Us</Nav.Link>
                  <Nav.Link href="./insight" className='navlin'>Insights</Nav.Link>
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

export default OffcanvasExamplee;

$(window).on("scroll", function() {
  if($(window).scrollTop() > 50) {
      $(".hder").addClass("active");
  } else {
      //remove the background property so it comes transparent again (defined in your css)
     $(".hder").removeClass("active");
  }
});