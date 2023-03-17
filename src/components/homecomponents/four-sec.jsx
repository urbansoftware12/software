import React from "react";
import { Row, Card } from "react-bootstrap";
function Foursec ()
{
    return(
        <div className="fursec">
            <div className="container-fluid" style={{paddingTop: '80px'}}>
                <div style={{textAlign: 'center'}}>
                    <div style={{marginBottom: '20px'}}>
                        <p className="urbnweb">Why UrbanSoft's</p>
                    </div>
                    <h1 className="urbnwb" style={{marginBottom: '20px'}}>Grow your Business & Company with Urban Software</h1>
                </div>
            </div>
            <div className="container-fluid" style={{maxWidth: '1280px'}}>
                <Row style={{paddingTop: '3%', paddingBottom: '3%'}}>
                    <div className="col-lg-4 col-md-4 mt-2 mnhght">
                        <Card className="box">
                            <Card.Body className="cordbdy">
                                <div className="cordtitle">
                                    <h2 className="wbapp">Optimize Page Experience</h2>
                                </div>
                                <div>
                                    <p className="crdtxt">
                                        Six out of 10 shoppers indicate that a website’s mobile shopping capability is critical in brand selection. With 30 per cent of Google searches conducted from mobile phones, having a responsive website design is imperative to achieving online success. UrbanSoft’s web design services are built to provide your page visitors with a positive, engaging mobile experience.
                                    </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-4 mt-2">
                        <Card className="box">
                            <Card.Body className="cordbdy">
                                <div className="cordtitle">
                                    <h2 className="wbapp">Reduce Maintenance Cost</h2>
                                </div>
                                <div>
                                <p className="crdtxt">
                                    With responsive website design, you only need one version of your website that is optimized for all devices. It eliminates the time-consuming process of coding for various systems and streamlines your site development and management. More importantly, mobile responsive web page design reduces your web development and maintenance costs.
                                </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-4 mt-2">
                        <Card className="box">
                            <Card.Body className="cordbdy">
                                <div className="cordtitle">
                                    <h2 className="wbapp">Acquire Leads and Traffic</h2>
                                </div>
                                <div>
                                <p className="crdtxt">
                                    An eMarketer report revealed that 69 per cent of consumers utilize their smartphones to perform product research. This population accounts for 52.6 per cent of global web traffic that comes from mobile devices. Our web design company places trust signals on your website and optimizes it for mobile and browser compatibility to transform it into a lead generation machine.
                                </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
            </div>
        </div>
    )
}
export default Foursec;