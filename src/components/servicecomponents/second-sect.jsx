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
            <div className="container" style={{paddingTop: '80px'}}>
                <div style={{textAlign: 'center'}}>
                    <div>
                        <p className="skilparagrph">Our Services</p>
                    </div>
                    <h1 className="cost">Urban Software Development Services <br/> Driven by the Top 1% of Tech Talent</h1>
                </div>
            </div>
            <div className="container-fluid" style={{maxWidth: '1280px'}}>
                <Row>
                    <div className="col-lg-4 col-md-6 ycrd whyccrd">
                        <Card className="box ycard">
                            <Card.Body style={{padding: '10px'}}>
                                <div style={{marginBottom: '20px'}}>
                                    <img src={Qualified} className="imgskil" alt="" srcset="" />
                                </div>
                                <Card.Title>
                                    <h2 className="qualify">Web Development</h2>
                                </Card.Title>
                                <Card.Text className="contnt contont">
                                Websites are often a user’s first point of contact with your business, therefore it is essential for it to leave a lasting impression. Our combined years of experience has equipped our team with the tools and knowledge to take your website to the next level
                                </Card.Text>
                                <div className="float-end">
                                    <a href="/" className="sublink">Learn More</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-6 ycrd whyccrd">
                        <Card className="box ycard">
                            <Card.Body style={{padding: '10px'}}>
                                <div style={{marginBottom: '20px'}}>
                                    <img src={Inhouse} className="imgskil" alt="" srcset="" />
                                </div>
                                <Card.Title>
                                    <h2 className="qualify">Web Designs</h2>
                                </Card.Title>
                                <Card.Text className="contnt contont">
                                We are web designers. Our job is to add value to your brand with professional web design services. Through quality design, we will transform your website into an elegant sales machine that communicates your message and converts visitors into customers.
                                </Card.Text>
                                <div className="float-end">
                                    <a href="/" className="sublink">Learn More</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-6 ycrd whyccrd">
                        <Card className="box ycard">
                            <Card.Body style={{padding: '10px'}}>
                                <div style={{marginBottom: '20px'}}>
                                    <img src={Infrastructure} className="imgskil" alt="" srcset="" />
                                </div>
                                <Card.Title>
                                    <h2 className="qualify">UI/UX Designs</h2>
                                </Card.Title>
                                <Card.Text className="contnt contont">
                                User interaction design and user experience services ensure that your project is easy to use and aligns to the needs of your users.

<p>At Urban Software, our highly skilled team of UX and UI specialists are trained to find efficient and user-focused design solutions to ensure that your audience continues to return time and time again.</p>
                                </Card.Text>
                                <div className="float-end">
                                    <a href="/uxx" className="sublink">Learn More</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
                <Row>
                    <div className="col-lg-4 col-md-6 ycrd whyccrd">
                        <Card className="box ycard">
                            <Card.Body style={{padding: '10px'}}>
                                <div style={{marginBottom: '20px'}}>
                                    <img src={Freedom} className="imgskil" alt="" srcset="" />
                                </div>
                                <Card.Title>
                                    <h2 className="qualify">Native App Development</h2>
                                </Card.Title>
                                <Card.Text className="contnt contont">
                                Native apps offer a more exclusive user experience that takes advantage of the device’s specific internal features delivering seamless results every time.

<p>We provide a mapped-out user journey, UI/UX services, a high-fidelity prototype and an exclusive 1-2 year development plan</p>
                                </Card.Text>
                                <div className="float-end">
                                    <a href="/" className="sublink">Learn More</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-6 ycrd whyccrd">
                        <Card className="box ycard">
                            <Card.Body style={{padding: '10px'}}>
                                <div style={{marginBottom: '20px'}}>
                                    <img src={Cost} className="imgskil" alt="" srcset="" />
                                </div>
                                <Card.Title>
                                    <h2 className="qualify">Digital Marketing</h2>
                                </Card.Title>
                                <Card.Text className="contnt contont">
                                Go with a digital-first marketing strategy to engage your target audience with creative content that generates leads, drives traffic and builds brand awareness through the right channels.

<p>Reach your tribe of influencers, decision makers and today’s leaders with a solid marketing strategy to drive your business goals.</p>
                                </Card.Text>
                                <div className="float-end">
                                    <a href="/" className="sublink">Learn More</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-6 ycrd whyccrd">
                        <Card className="box ycard">
                            <Card.Body style={{padding: '10px'}}>
                                <div style={{marginBottom: '20px'}}>
                                    <img src={Timezone} className="imgskil" alt="" srcset="" />
                                </div>
                                <Card.Title className="">
                                    <h2 className="qualify">Creative Branding</h2>
                                </Card.Title>
                                <Card.Text className="contnt contont">
                                Branding is the USP of any business and without it one cannot make their mark in the global market. We at UrbanMedia take great pride in being the most skilled branding agency in United States. With our 5+ years of experience in branding we have been able to help out more than 100 members (Customers).
                                </Card.Text>
                                <div className="float-end">
                                    <a href="/" className="sublink">Learn More</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
                <Row>
                    <div className="col-lg-4 col-md-6 ycrd whyccrd">
                        <Card className="box ycard">
                            <Card.Body style={{padding: '10px'}}>
                                <div style={{marginBottom: '20px'}}>
                                    <img src={Freedom} className="imgskil" alt="" srcset="" />
                                </div>
                                <Card.Title className="">
                                    <h2 className="qualify">Email Marketing</h2>
                                </Card.Title>
                                <Card.Text className="contnt contont">
                                We design and distribute beautiful emails. Our email marketing campaigns solve real business problems, make your readers happy, and generate positive emotional responses from your audiences.
                                </Card.Text>
                                <div className="float-end">
                                    <a href="/" className="sublink">Learn More</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-6 ycrd whyccrd">
                        <Card className='box ycard'>
                            <Card.Body style={{padding: '10px'}}>
                                <div style={{marginBottom: '20px'}}>
                                    <img src={Cost} className="imgskil" alt="" srcset="" />
                                </div>
                                <Card.Title className="">
                                    <h2 className="qualify">Content Marketing</h2>
                                </Card.Title>
                                <Card.Text className="contnt contont">
                                We will help you address the questions and concerns that your audience has related your products or services with unique, informative, and entertaining content. At the same time, we apply the science of on-page SEO to ensure your content ranks well on search engines.
                                </Card.Text>
                                <div className="float-end">
                                    <a href="/" className="sublink">Learn More</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-6 ycrd whyccrd">
                        <Card className="box ycard">
                            <Card.Body style={{padding: '10px'}}>
                                <div style={{marginBottom: '20px'}}>
                                    <img src={Timezone} className="imgskil" alt="" srcset="" />
                                </div>
                                <Card.Title className="">
                                    <h2 className="qualify">SEO</h2>
                                </Card.Title>
                                <Card.Text className="contnt contont">
                                At UrbanSoft, we’re here to put your St. Pete brand directly in front of internet searchers. Our team provides transparent search engine optimization services – we’ll direct your ideal customers straight to your website.
                                </Card.Text>
                                <div className="float-end">
                                    <a href="/" className="sublink">Learn More</a>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
            </div>
            <div className="container" style={{paddingTop: '50px', paddingBottom: '80px'}}>
                <div style={{textAlign: 'center'}}>
                    <div>
                        <p className="skilparagrph">Skills & Expertise</p>
                    </div>
                    <h1 className="cost">How UrbanSoft can help you save <br/> time and cost?</h1>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-3 skil">
                        <div className="text-center" style={{marginBottom: '20px'}}>
                          <img src={Experience} className="imgskil" alt="React logo"/>
                        </div>
                        <div className="text-center">
                            <h2 className="exprnce">7+ Years <br/>of Experience</h2>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 skil">
                        <div className="text-center" style={{marginBottom: '20px'}}>
                          <img src={Customer} className="imgskil"alt="React logo"/>
                        </div>
                        <div className="text-center">
                            <h2 className="exprnce">100+ <br/> Customers</h2>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 skil">
                        <div className="text-center" style={{marginBottom: '20px'}}>
                          <img src={Resources} className="imgskil"alt="React logo"/>
                        </div>
                        <div className="text-center">
                            <h2 className="exprnce">150+ Years <br/> Qualified Resources</h2>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 skil">
                        <div className="text-center" style={{marginBottom: '20px'}}>
                          <img src={Level} className="imgskil" alt="React logo"/>
                        </div>
                        <div className="text-center">
                            <h2 className="exprnce">Level 2 <br/> Company</h2>
                        </div>
                    </div>
                    
                </div>
                <div className="row">
                <div className="col-lg-3 col-md-3 skil">
                        <div className="text-center" style={{marginBottom: '20px'}}>
                          <img src={Transparent} className="imgskil" alt="React logo"/>
                        </div>
                        <div className="text-center">
                            <h2 className="exprnce">Transparent <br/> Cost</h2>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 skil">
                        <div className="text-center" style={{marginBottom: '20px'}}>
                          <img src={Art} className="imgskil" alt="React logo"/>
                        </div>
                        <div className="text-center">
                            <h2 className="exprnce">State of the<br/> Art Facilities</h2>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 skil">
                        <div className="text-center" style={{marginBottom: '20px'}}>
                          <img src={Delivery} className="imgskil" alt="React logo"/>
                        </div>
                        <div className="text-center">
                            <h2 className="exprnce">Quick Product<br/>Delivery</h2>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 skil">
                        <div className="text-center" style={{marginBottom: '20px'}}>
                          <img src={Team} className="imgskil" alt="React logo"/>
                        </div>
                        <div className="text-center">
                            <h2 className="exprnce">Team<br/>Ownership</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Secondsect;