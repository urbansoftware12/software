import React from "react";
import { Row, Card } from "react-bootstrap";
function Thirdscc(){
    return(
        <div className="thrdscc">
            <div className="container-fluid" style={{paddingTop: '10%'}}>
                <div style={{textAlign: 'center'}}>
                    <div style={{color: '#34A9FF'}}>
                        <p style={{fontSize: '20px'}}>Ui/UX Design</p>
                    </div>
                    <h1 style={{fontSize: 'clamp(1.1rem, 0.5143rem + 2.9286vw, 5.2rem)', fontFamily: 'Urbanist-medium'}}>Benefits of Our UI and UX Services</h1>
                </div>
            </div>
            <div className="container-fluid" style={{maxWidth: '1280px'}}>
                <Row style={{paddingTop: '3%', paddingBottom: '3%'}}>
                    <div className="col-lg-4 col-md-4 mt-2">
                        <Card className="box">
                            <Card.Body className="crdbody">
                                <Card.Title className="crdtitle">
                                    <h2 style={{fontFamily: 'Urbanist-medium', fontSize: '24px'}}>Decade in Design</h2>
                                </Card.Title>
                                <Card.Text style={{fontSize: '16px'}}>
                                From basic event apps to scalable enterprise software for Fortune 500 companies, our long-standing design team can help your any idea come into being with the latest tools and tech. Our well-established process and standardised approach to design will ensure the final product looks and works as you required.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-4 mt-2">
                        <Card className="box">
                            <Card.Body className="crdbody">
                                <Card.Title className="crdtitle">
                                    <h2 style={{fontFamily: 'Urbanist-medium', fontSize: '24px'}}>Established in-house Standards</h2>
                                </Card.Title>
                                <Card.Text style={{fontSize: '16px'}}>
                                To ensure high quality and timely delivery of your product, we created a set of standards for our every designer to follow. We use design systems, perform comprehensive design reviews, re-use the most impactful practices and tools, and constantly mentor our designers. As a result, you get a skillful and organized team that knows what to do.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-4 mt-2">
                        <Card className="box">
                            <Card.Body className="crdbody">
                                <Card.Title className="crdtitle">
                                    <h2 style={{fontFamily: 'Urbanist-medium', fontSize: '24px'}}>Broad Ranging Expertise</h2>
                                </Card.Title>
                                <Card.Text style={{fontSize: '16px'}}>
                                Our design team has created different types of apps and websites for all major industries. You can count on their careful root cause analysis, interface architecture and animation design experience, in-depth post-analysis, and more. You will get a polished final product that is equally beautiful and easy-to-use across all platforms.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
            </div>
        </div>
    )
}
export default Thirdscc;