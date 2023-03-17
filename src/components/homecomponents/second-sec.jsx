import React from "react";
import { Row, Card } from "react-bootstrap";
import Whitelogoone from '../../assets/web-1-1.svg';
import Whitelogotwo from '../../assets/web-2-1.svg';
import Whitelogothree from '../../assets/web-3-1.svg';
import Whitelogofour from '../../assets/web-4-2.svg';
import Whitelogofive from '../../assets/web-5-1.svg';
import Phython from '../../assets/python.svg';
import Angular from '../../assets/angular.svg';
import Php from '../../assets/php.svg';
import Reecte from '../../assets/react.svg';
import Javascript from '../../assets/javascript.svg';
import Nodejs from '../../assets/node.svg';
import Jquery from '../../assets/jquery.svg';
import Wordpress from '../../assets/wordpress.svg';
import Shopify from '../../assets/shopify.svg';
import Developone from '../../assets/development_process1.svg';
import Developtwo from '../../assets/development_process2.svg';
import Developthree from '../../assets/development_process3.svg';
import Developfour from '../../assets/development_process4.svg';
import Developfive from '../../assets/development_process5.svg';
function Secondsec ()
{
    return(
        <div className="scndsec" >
            <div className="container" style={{paddingTop: '80px',paddingBottom: '80px'}}>
                <div className="text-center">
                    <h2 className="hto">Websites are often a user’s first point of contact with your business, therefore it is essential for it to leave a lasting impression. Our combined years of experience has equipped our team with the tools and knowledge to take your website to the next level.</h2>
                </div>
            </div>
            <div className="container">
                <div style={{textAlign: 'center'}}>
                    <div style={{marginBottom:'20px'}}>
                        <h2 className="urbnweb">Urban Web Services</h2>
                    </div>
                    <div style={{marginBottom:'20px'}}>
                        <h1 className="urbnwb">Types of Web Development Services</h1>
                    </div>
                </div>
            </div>
            <div className="container-fluid" style={{maxWidth: '1280px'}}>
                <Row style={{marginTop: '18px'}}>
                    <div className="col-lg-4 col-md-4 col-sm-12 mt-2 mnhght">
                        <Card className="box">
                            <Card.Body className="cordbdy">
                                <div style={{marginBottom: '20px'}}>
                                    <img src={Whitelogoone} className="skillimg" alt="" srcset="" />
                                </div>
                                <div className="cordtitle">
                                    <h2 className="wbapp">Web Application Development Services</h2>
                                </div>
                                <div>
                                    <p className="cordtxt">From design to integration to maintenance, we offer full-cycle web application development services. We build apps that are secure, scalable, fast, and work well across all devices and platforms.</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 mt-2 mnhght">
                        <Card className="box">
                            <Card.Body className="cordbdy">
                                <div style={{marginBottom: '20px'}}>
                                    <img src={Whitelogotwo} className="skillimg" alt="" srcset="" />
                                </div>
                                <div className="cordtitle">
                                    <h2 className="wbapp">E-commerce Web Development Services</h2>
                                </div>
                                <div>
                                <p className="cordtxt">
                                    Build an online store with seamless and user-friendly experience, the right extensions, and reliable integration with your other processes. Our ecommerce web development services include building full-scale ecommerce platforms.
                                </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 mt-2 mnhght">
                        <Card className="box">
                            <Card.Body className="cordbdy">
                                <div style={{marginBottom: '20px'}}>
                                    <img src={Whitelogofive} className="skillimg" alt="" srcset="" />
                                </div>
                                <div className="cordtitle">
                                    <h2 className="wbapp">Custom Web Development for the Enterprise</h2>
                                </div>
                                <div>
                                <p className="cordtxt">
                                    Build a custom solution for your business from the ground-up. Our wide-ranging custom web development services allow you to create cross-platform solutions for any industry regardless of scale or complexity.
                                </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
                <Row style={{marginTop: '18px'}}>
                    <div className="col-lg-4 col-md-4 col-sm-12 mt-2 mnhght">
                        <Card className="box">
                            <Card.Body className="cordbdy">
                                <div style={{marginBottom: '20px'}}>
                                    <img src={Whitelogothree} className="skillimg" alt="" srcset="" />
                                </div>
                                <div className="cordtitle">
                                    <h2 style={{fontFamily: 'Urbanist-medium', fontSize: '24px'}}>Java Web Development Services</h2>
                                </div>
                                <div>
                                <p className="cordtxt">
                                    With over a decade in providing reliable Java web development services, you can trust us to build a comprehensive web solution on Java for your business.
                                </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 mt-2 mnhght">
                        <Card className='box'>
                            <Card.Body className="cordbdy">
                                <div style={{marginBottom: '20px'}}>
                                    <img src={Whitelogofour} className="skillimg" alt="" srcset="" />
                                </div>
                                <div className="cordtitle">
                                    <h2 style={{fontFamily: 'Urbanist-medium', fontSize: '24px'}}>WordPress Web Development Services</h2>
                                </div>
                                <div>
                                    <p className="cordtxt">
                                    Use our expertise to create and expand your online store on the WordPress platform. Our WordPress web development services can also help you transfer your existing store to the platform or add new extensions.
                                    </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 mt-2 mnhght">
                        <Card className="box">
                            <Card.Body className="cordbdy">
                                <div style={{marginBottom: '20px'}}>
                                    <img src={Whitelogofive} className="skillimg" alt="" srcset="" />
                                </div>
                                <div className="cordtitle">
                                    <h2 style={{fontFamily: 'Urbanist-medium', fontSize: '24px'}}>Shopify Web Development Services</h2>
                                </div>
                                <div>
                                <p className="cordtxt">
                                    From comprehensive module management to building a web solution from scratch, our Shopify development services will cover your every business need.
                                </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
            </div>
            <div className="container">
                <div style={{textAlign: 'center'}}>
                    <div className="urbnweb" style={{paddingTop: '80px', marginBottom: '20px'}}>
                        <p className="urbnweb">Urban Tech</p>
                    </div>
                    <h1 className="urbnwb" style={{marginBottom: '20px'}}>Our Technologies</h1>
                    <div className="row offset-md-2 col-md-8" style={{textAlign: 'center',marginBottom: '20px'}}>
                        <p className="sftw">
                            Our software engineers have expertise in all the technologies needed to deliver
                            comprehensive web developments services for companies across industries.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container-fluid" style={{maxWidth: '1280px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between',flexWrap: 'wrap'}}>
                    <div className="dsply">
                        <div>
                            <img src={Phython} width="70"height="50"alt="React logo" />
                        </div>
                        <div className="text-center mt-3">
                            <p style={{fontSize: '16px',fontFamily: 'Urbanist-regular'}}>Python</p>
                        </div>
                    </div>
                    <div className="dsply">
                        <div>
                            <img src={Angular} width="70"height="50"alt="React logo" />
                        </div>
                        <div className="text-center mt-3">
                            <p style={{fontSize: '16px',fontFamily: 'Urbanist-regular'}}>Angular JS</p>
                        </div>
                    </div>
                    <div className="dsply">
                        <div>
                            <img src={Php} width="70"height="50"alt="React logo" />
                        </div>
                        <div className="text-center mt-3">
                            <p style={{fontSize: '16px',fontFamily: 'Urbanist-regular'}}>PHP</p>
                        </div>
                    </div>
                    <div className="dsply">
                        <div>
                            <img src={Reecte} width="70"height="50"alt="React logo" />
                        </div>
                        <div className="text-center mt-3">
                            <p style={{fontSize: '16px',fontFamily: 'Urbanist-regular'}}>React</p>
                        </div>
                    </div>
                    <div className="dsply">
                        <div>
                            <img src={Javascript} width="70"height="50"alt="React logo" />
                        </div>
                        <div className="text-center mt-3">
                            <p style={{fontSize: '16px',fontFamily: 'Urbanist-regular'}}>Javascript</p>
                        </div>
                    </div>
                    <div className="dsply">
                        <div>
                            <img src={Nodejs} width="70"height="50"alt="React logo" />
                        </div>
                        <div className="text-center mt-3">
                            <p style={{fontSize: '16px',fontFamily: 'Urbanist-regular'}}>Node JS</p>
                        </div>
                    </div>
                    <div className="dsply">
                        <div>
                            <img src={Jquery} width="70"height="50"alt="React logo" />
                        </div>
                        <div className="text-center mt-3">
                            <p style={{fontSize: '16px',fontFamily: 'Urbanist-regular'}}>JQuery</p>
                        </div>
                    </div>
                    <div className="dsply">
                        <div>
                            <img src={Wordpress} width="70"height="50"alt="React logo" />
                        </div>
                        <div className="text-center mt-3">
                            <p style={{fontSize: '16px',fontFamily: 'Urbanist-regular'}}>WordPress</p>
                        </div>
                    </div>
                    <div className="dsply">
                        <div>
                            <img src={Shopify} width="70"height="50"alt="React logo" />
                        </div>
                        <div className="text-center mt-3">
                            <p style={{fontSize: '16px',fontFamily: 'Urbanist-regular'}}>Shopify</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid" style={{maxWidth: '1280px'}}>
                <div style={{textAlign: 'center'}}>
                    <div style={{marginBottom: '20px', paddingTop: '100px'}}>
                        <p className="urbnweb">Urban Process</p>
                    </div>
                    <h1 className="urbnwb" style={{marginBottom: '20px'}}>Our Web Development Process</h1>
                    <div style={{marginBottom: '20px', textAlign: 'center'}}>
                        <p className="poses">As we have been delivering web development services for over a decade, our process is clear,effective and enables timely delivery of your web solution. From comprehensive requirementgathering to ensuring continuous operation of your web solution after deployment,we have everything covered for you.</p>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', paddingBottom: '100px'}}>
                    <div className="monitor mt-2">
                        <Card className="boox">
                            <Card.Body>
                                <Card.Img style={{width: 'auto',marginBottom: '20px'}} variant="top" src={Developone} width="40"height="40"alt="React logo" />
                                <div>
                                    <h6 className="resrch">Research</h6>
                                </div>
                                <div>
                                    <p className="rquir">
                                        Research Consultation & Requirement Gathering,
                                    </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="monitor mt-2">
                        <Card className="boox">
                            <Card.Body className="cerdbody">
                                <Card.Img style={{width: 'auto', marginBottom: '20px'}} variant="top" src={Developtwo} width="40"height="40"alt="React logo" />
                                <div>
                                    <h2 className="resrch">Design</h2>
                                </div>
                                <div>
                                <p className="rquir">
                                    Product Architecture & Design, Prototype, MVP & Wireframes
                                </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="monitor mt-2">
                        <Card className="boox">
                            <Card.Body className="cerdbody">
                                <Card.Img style={{width: 'auto',marginBottom: '20px'}} variant="top" src={Developthree} width="40"height="40"alt="React logo" />
                                <div>
                                    <h2 className="resrch">Development</h2>
                                </div>
                                <div>
                                <p className="rquir">
                                    Functional Implementation, Software Coding, & Optimization
                                </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="monitor mt-2">
                        <Card className="boox">
                            <Card.Body className="cerdbody">
                                <Card.Img style={{width: 'auto',marginBottom: '20px'}} variant="top" src={Developfour} width="40"height="40"alt="React logo" />
                                <div>
                                    <h2 className="resrch">Testing</h2>
                                </div>
                                <div>
                                <p className="rquir">
                                    Quality Assurance, Trouble-Shooting, & Testing
                                </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="monitor mt-2">
                        <Card className="boox">
                            <Card.Body className="cerdbody">
                                <Card.Img style={{width: 'auto',marginBottom: '20px'}} variant="top" src={Developfive} width="40"height="40"alt="React logo" />
                                <div>
                                    <h2 className="resrch">Deployment</h2>
                                </div>
                                <div>
                                <p className="rquir">
                                    Launch, Beta Live, & Live
                                </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="monitor mt-2">
                        <Card className="boox">
                            <Card.Body className="cerdbody">
                                <Card.Img style={{width: 'auto',marginBottom: '20px'}} variant="top" src={Developfour} width="40"height="40"alt="React logo" />
                                <div>
                                    <h2 className="resrch">Evaluation</h2>
                                </div>
                                <div>
                                <p className="rquir">
                                    Performance Evaluation, & Analytics Implementation
                                </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="monitor mt-2">
                        <Card className="boox">
                            <Card.Body className="cerdbody">
                                <Card.Img style={{width: 'auto',marginBottom: '20px'}} variant="top" src={Developfour} width="40"height="40"alt="React logo" />
                                <div>
                                    <h2 className="resrch">Maintenance</h2>
                                </div>
                                <div>
                                <p className="rquir">
                                    Monitoring, Feedback, Analysis, & Complete Support
                                </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Secondsec;