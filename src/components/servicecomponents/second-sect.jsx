import React from "react";
import { Row, Card } from "react-bootstrap";
import Qualified from '../../assets/Qualified.svg';
import Inhouse from '../../assets/inhouse.svg';
import Infrastructure from '../../assets/Infrastructure.svg';
import Freedom from '../../assets/Freedom.svg';
import Cost from '../../assets/Cost.svg';
import Timezone from '../../assets/Timezone.svg';
import Experience from '../../assets/Experience.svg';
import Customer from '../../assets/Customers.svg';
import Resources from '../../assets/Resources.svg';
import Level from '../../assets/Level.svg';
import Transparent from '../../assets/Transparent.svg';
import Art from '../../assets/art.svg';
import Delivery from '../../assets/delivery.svg';
import Team from '../../assets/team.svg';

function Secondsect(){
    return(
        <div className="scndsect">
            <div className="container" style={{paddingTop: '7%',paddingBottom: '7%'}}>
                <div style={{textAlign: 'center'}}>
                    <div style={{color: '#34A9FF'}}>
                        <p style={{fontSize: '20px'}}>Our Services</p>
                    </div>
                    <h1 className="cost">Urban Software Development Services <br/>
Driven by the Top 1% of Tech Talent</h1>
                </div>
            </div>
            <div className="container-fluid" style={{maxWidth: '1280px'}}>
                <Row style={{paddingTop: '1%', paddingBottom: '1%'}}>
                    <div className="col-lg-4 col-md-4 col-sm-12 mt-2">
                        <Card className="box">
                            <Card.Body className="coordbdy">
                                <Card.Img variant="top" style={{width: 'auto'}} src={Qualified} width="50"height="50"alt="React logo" />
                                <Card.Title className="cordtitle">
                                    <h2 style={{fontFamily: 'Urbanist-medium', fontSize: '24px'}}>Web Development</h2>
                                </Card.Title>
                                <Card.Text className="contant" style={{fontSize: '16px', fontWeight: '400', lineHeight: '24px', fontFamily: 'Urbanist-regular'}}>
                                Websites are often a user’s first point of contact with your business, therefore it is essential for it to leave a lasting impression. Our combined years of experience has equipped our team with the tools and knowledge to take your website to the next level
                                </Card.Text>
                                <div className="float-end">
                                    <a href="/" style={{textDecorationLine: 'none', color: '#34A9FF', fontFamily: 'Urbanist-medium'}}>Learn More</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 mt-2">
                        <Card className="box">
                            <Card.Body className="coordbdy">
                                <Card.Img variant="top" style={{width: 'auto'}} src={Inhouse} width="50"height="50"alt="React logo" />
                                <Card.Title className="cordtitle">
                                    <h2 style={{fontFamily: 'Urbanist-medium', fontSize: '24px'}}>Web Designs</h2>
                                </Card.Title>
                                <Card.Text className="contant" style={{fontSize: '16px', fontWeight: '400', lineHeight: '24px', fontFamily: 'Urbanist-regular'}}>
                                We are web designers. Our job is to add value to your brand with professional web design services. Through quality design, we will transform your website into an elegant sales machine that communicates your message and converts visitors into customers.
                                </Card.Text>
                                <div className="float-end">
                                    <a href="/" style={{textDecorationLine: 'none',color: '#34A9FF', fontFamily: 'Urbanist-medium'}}>Learn More</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 mt-2">
                        <Card className="box">
                            <Card.Body className="coordbdy">
                                <Card.Img variant="top" style={{width: 'auto'}} src={Infrastructure} width="50"height="50"alt="React logo" />
                                <Card.Title className="cordtitle">
                                    <h2 style={{fontFamily: 'Urbanist-medium', fontSize: '24px'}}>UI/UX Designs</h2>
                                </Card.Title>
                                <Card.Text className="contant" style={{fontSize: '16px', fontWeight: '400', lineHeight: '24px', fontFamily: 'Urbanist-regular'}}>
                                User interaction design and user experience services ensure that your project is easy to use and aligns to the needs of your users.

<p>At Urban Software, our highly skilled team of UX and UI specialists are trained to find efficient and user-focused design solutions to ensure that your audience continues to return time and time again.</p>
                                </Card.Text>
                                <div className="float-end">
                                    <a href="/uxx" style={{textDecorationLine: 'none',color: '#34A9FF', fontFamily: 'Urbanist-medium'}}>Learn More</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
                <Row style={{paddingTop: '1%', paddingBottom: '1%'}}>
                    <div className="col-lg-4 col-md-4 col-sm-12 mt-2">
                        <Card className="box">
                            <Card.Body className="coordbdy">
                                <Card.Img variant="top" style={{width: 'auto'}} src={Freedom} width="50"height="50"alt="React logo" />
                                <Card.Title className="cordtitle">
                                    <h2 style={{fontFamily: 'Urbanist-medium', fontSize: '24px'}}>Native App Development</h2>
                                </Card.Title>
                                <Card.Text className="contant" style={{fontSize: '16px', fontWeight: '400', lineHeight: '24px', fontFamily: 'Urbanist-regular'}}>
                                Native apps offer a more exclusive user experience that takes advantage of the device’s specific internal features delivering seamless results every time.

<p>We provide a mapped-out user journey, UI/UX services, a high-fidelity prototype and an exclusive 1-2 year development plan</p>
                                </Card.Text>
                                <div className="float-end">
                                    <a href="/" style={{textDecorationLine: 'none',color: '#34A9FF', fontFamily: 'Urbanist-medium'}}>Learn More</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 mt-2">
                        <Card className="box">
                            <Card.Body className="coordbdy">
                                <Card.Img variant="top" style={{width: 'auto'}} src={Cost} width="50"height="50"alt="React logo" />
                                <Card.Title className="cordtitle">
                                    <h2 style={{fontFamily: 'Urbanist-medium', fontSize: '24px'}}>Digital Marketing</h2>
                                </Card.Title>
                                <Card.Text className="contant" style={{fontSize: '16px', fontWeight: '400', lineHeight: '24px', fontFamily: 'Urbanist-regular'}}>
                                Go with a digital-first marketing strategy to engage your target audience with creative content that generates leads, drives traffic and builds brand awareness through the right channels.

<p>Reach your tribe of influencers, decision makers and today’s leaders with a solid marketing strategy to drive your business goals.</p>
                                </Card.Text>
                                <div className="float-end">
                                    <a href="/" style={{textDecorationLine: 'none',color: '#34A9FF', fontFamily: 'Urbanist-medium'}}>Learn More</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 mt-2">
                        <Card className="box">
                            <Card.Body className="coordbdy">
                                <Card.Img variant="top" style={{width: 'auto'}} src={Timezone} width="50"height="50"alt="React logo" />
                                <Card.Title className="cordtitle">
                                    <h2 style={{fontFamily: 'Urbanist-medium', fontSize: '24px'}}>Creative Branding</h2>
                                </Card.Title>
                                <Card.Text className="contant" style={{fontSize: '16px', fontWeight: '400', lineHeight: '24px', fontFamily: 'Urbanist-regular'}}>
                                Branding is the USP of any business and without it one cannot make their mark in the global market. We at UrbanMedia take great pride in being the most skilled branding agency in United States. With our 5+ years of experience in branding we have been able to help out more than 100 members (Customers).
                                </Card.Text>
                                <div className="float-end">
                                    <a href="/" style={{textDecorationLine: 'none',color: '#34A9FF', fontFamily: 'Urbanist-medium'}}>Learn More</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
                <Row>
                    <div className="col-lg-4 col-md-4 col-sm-12 mt-2">
                        <Card className="box">
                            <Card.Body className="coordbdy">
                                <Card.Img variant="top" style={{width: 'auto'}} src={Freedom} width="50"height="50"alt="React logo" />
                                <Card.Title className="cordtitle">
                                    <h2 style={{fontFamily: 'Urbanist-medium', fontSize: '24px'}}>Email Marketing</h2>
                                </Card.Title>
                                <Card.Text className="contant" style={{fontSize: '16px', fontWeight: '400', lineHeight: '24px', fontFamily: 'Urbanist-regular'}}>
                                We design and distribute beautiful emails. Our email marketing campaigns solve real business problems, make your readers happy, and generate positive emotional responses from your audiences.
                                </Card.Text>
                                <div className="float-end">
                                    <a href="/" style={{textDecorationLine: 'none',color: '#34A9FF', fontFamily: 'Urbanist-medium'}}>Learn More</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 mt-2">
                        <Card className='box'>
                            <Card.Body className="coordbdy">
                                <Card.Img variant="top" style={{width: 'auto'}} src={Cost} width="50"height="50"alt="React logo" />
                                <Card.Title className="cordtitle">
                                    <h2 style={{fontFamily: 'Urbanist-medium', fontSize: '24px'}}>Content Marketing</h2>
                                </Card.Title>
                                <Card.Text className="contant" style={{fontSize: '16px', fontWeight: '400', lineHeight: '24px', fontFamily: 'Urbanist-regular'}}>
                                We will help you address the questions and concerns that your audience has related your products or services with unique, informative, and entertaining content. At the same time, we apply the science of on-page SEO to ensure your content ranks well on search engines.
                                </Card.Text>
                                <div className="float-end">
                                    <a href="/" style={{textDecorationLine: 'none',color: '#34A9FF', fontFamily: 'Urbanist-medium'}}>Learn More</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 mt-2">
                        <Card className="box">
                            <Card.Body className="coordbdy">
                                <Card.Img variant="top" style={{width: 'auto'}} src={Timezone} width="50"height="50"alt="React logo" />
                                <Card.Title className="cordtitle">
                                    <h2 style={{fontFamily: 'Urbanist-medium', fontSize: '24px'}}>SEO</h2>
                                </Card.Title>
                                <Card.Text className="contant" style={{fontSize: '16px', fontWeight: '400', lineHeight: '24px', fontFamily: 'Urbanist-regular'}}>
                                At UrbanSoft, we’re here to put your St. Pete brand directly in front of internet searchers. Our team provides transparent search engine optimization services – we’ll direct your ideal customers straight to your website.
                                </Card.Text>
                                <div className="float-end">
                                    <a href="/" style={{textDecorationLine: 'none',color: '#34A9FF', fontFamily: 'Urbanist-medium'}}>Learn More</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
            </div>
            <div className="container" style={{paddingTop: '7%',paddingBottom: '7%'}}>
                <div style={{textAlign: 'center'}}>
                    <div style={{color: '#34A9FF'}}>
                        <p style={{fontSize: '20px'}}>Skills & Expertise</p>
                    </div>
                    <h1 className="cost">How UrbanSoft can help you save <br/>
time and cost?</h1>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-3">
                        <div className="text-center mt-3 mb-3">
                          <img src={Experience} width="50"height="50"alt="React logo"/>
                        </div>
                        <div className="text-center">
                            <h2 style={{fontFamily: 'Urbanist-medium', fontSize: '22px', fontWeight: '500', lineHeight: '24px'}}>7+ Years <br/>
of Experience</h2>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="text-center mt-3 mb-3">
                          <img src={Customer} width="50"height="50"alt="React logo"/>
                        </div>
                        <div className="text-center">
                            <h2 style={{fontFamily: 'Urbanist-medium', fontSize: '22px', fontWeight: '500', lineHeight: '24px'}}>100+ <br/> Customers</h2>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="text-center mt-3 mb-3">
                          <img src={Resources} width="50"height="50"alt="React logo"/>
                        </div>
                        <div className="text-center">
                            <h2 style={{fontFamily: 'Urbanist-medium', fontSize: '22px', fontWeight: '500', lineHeight: '24px'}}>150+ Years <br/>
Qualified Resources</h2>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="text-center mt-3 mb-3">
                          <img src={Level} width="50"height="50"alt="React logo"/>
                        </div>
                        <div className="text-center">
                            <h2 style={{fontFamily: 'Urbanist-medium', fontSize: '22px', fontWeight: '500', lineHeight: '24px'}}>Level 2 <br/>
Company</h2>
                        </div>
                    </div>
                    
                </div>
                <div className="row mt-5">
                <div className="col-lg-3">
                        <div className="text-center mt-3 mb-3">
                          <img src={Transparent} width="50"height="50"alt="React logo"/>
                        </div>
                        <div className="text-center">
                            <h2 style={{fontFamily: 'Urbanist-medium', fontSize: '22px', fontWeight: '500', lineHeight: '24px'}}>Transparent <br/> Cost</h2>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="text-center mt-3 mb-3">
                          <img src={Art} width="50"height="50"alt="React logo"/>
                        </div>
                        <div className="text-center">
                            <h2 style={{fontFamily: 'Urbanist-medium', fontSize: '22px', fontWeight: '500', lineHeight: '24px'}}>State of the<br/> Art Facilities</h2>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="text-center mt-3 mb-3">
                          <img src={Delivery} width="50"height="50"alt="React logo"/>
                        </div>
                        <div className="text-center">
                            <h2 style={{fontFamily: 'Urbanist-medium', fontSize: '22px', fontWeight: '500', lineHeight: '24px'}}>Quick Product<br/>Delivery</h2>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="text-center mt-3 mb-3">
                          <img src={Team} width="50"height="50"alt="React logo"/>
                        </div>
                        <div className="text-center">
                            <h2 style={{fontFamily: 'Urbanist-medium', fontSize: '22px', fontWeight: '500', lineHeight: '24px'}}>Team<br/>Ownership</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Secondsect;