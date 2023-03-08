import React from "react";
import { Row, Card } from "react-bootstrap";
import Qualified from '../../assets/Qualified.svg';
import Inhouse from '../../assets/inhouse.svg';
import Infrastructure from '../../assets/Infrastructure.svg';
import Freedom from '../../assets/Freedom.svg';
import Cost from '../../assets/Cost.svg';
import Timezone from '../../assets/Timezone.svg';
function Fourseec(){
    return(
<div className="forseec">
    <div className="container" style={{paddingTop: '7%',paddingBottom: '2%'}}>
        <div style={{textAlign: 'center'}}>
            <div style={{color: '#34A9FF'}}>
                <p style={{fontSize: '20px'}}>Skills & Expertise</p>
            </div>
            <h1 style={{fontSize: 'clamp(1.1rem, 0.8286rem + 1.3571vw, 3rem)', fontFamily: 'Urbanist-medium', lineHeight: '58px', fontWeight: '500', color: '#000000'}}>Why is UrbanSoft your Partner?</h1>
        </div>
    </div>
    <div className="container-fluid" style={{maxWidth: '1280px',paddingBottom: '5%'}}>
                <Row style={{paddingTop: '1%', paddingBottom: '1%'}}>
                    <div className="col-lg-4 col-md-4 col-sm-12 mt-2">
                        <Card className="box">
                            <Card.Body className="coordbdy">
                                <Card.Img variant="top" style={{width: 'auto'}} src={Qualified} width="50"height="50"alt="React logo" />
                                <Card.Title className="cordtitle">
                                    <h2 style={{fontFamily: 'Urbanist-medium', fontSize: '24px'}}>Qualified professionals for quality and quick delivery</h2>
                                </Card.Title>
                                <Card.Text style={{fontSize: '16px', fontWeight: '400', lineHeight: '24px', fontFamily: 'Urbanist-regular'}}>
                                With the bandwidth of more than 50+ professionals, we try to deliver maximum IT support and have a hiring system that only recruits 3-4 years experienced professionals for client projects.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 mt-2">
                        <Card className="box">
                            <Card.Body className="coordbdy">
                                <Card.Img variant="top" style={{width: 'auto'}} src={Infrastructure} width="50"height="50"alt="React logo" />
                                <Card.Title className="cordtitle">
                                    <h2 style={{fontFamily: 'Urbanist-medium', fontSize: '24px'}}>Infrastructure for improved efficiency</h2>
                                </Card.Title>
                                <Card.Text style={{fontSize: '16px', fontWeight: '400', lineHeight: '24px', fontFamily: 'Urbanist-regular'}}>
                                We equipped with all the necessary amenities which a dedicated development team would need to deliver the project. Each team member has a dedicated desk and VOIP facility for seamless communication of project developments and increased efficiency. Our premises are also equipped with a centralized fire safety mechanism which ensures complete safety.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 mt-2">
                        <Card className="box">
                            <Card.Body className="coordbdy">
                                <Card.Img variant="top" style={{width: 'auto'}} src={Freedom} width="50"height="50"alt="React logo" />
                                <Card.Title className="cordtitle">
                                    <h2 style={{fontFamily: 'Urbanist-medium', fontSize: '24px'}}>Freedom & ownership of recruitment</h2>
                                </Card.Title>
                                <Card.Text style={{fontSize: '16px', fontWeight: '400', lineHeight: '24px', fontFamily: 'Urbanist-regular'}}>
                                Urban handles all the recruitment and selection process by itself, freeing you from the responsibilities of approaching the resources, screening, recruiting and training them for the project. Everything is taken care of by the team of Urban Software. We also provide complete ownership of the team which gives you authority to set the hierarchy or scale up and down the team.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
                <Row style={{paddingTop: '1%', paddingBottom: '1%'}}>
                    <div className="col-lg-4 col-md-4 col-sm-12 mt-2">
                        <Card className="box">
                            <Card.Body className="coordbdy">
                                <Card.Img variant="top" style={{width: 'auto'}} src={Cost} width="50"height="50"alt="React logo" />
                                <Card.Title className="cordtitle">
                                    <h2 style={{fontFamily: 'Urbanist-medium', fontSize: '24px'}}>Cost that fits your budget</h2>
                                </Card.Title>
                                <Card.Text style={{fontSize: '16px', fontWeight: '400', lineHeight: '24px', fontFamily: 'Urbanist-regular'}}>
                                We provide software services at 50% lower cost than the market. Our highly-qualified professionals bring their experience and clarity of objectives to the project which ensures quick delivery and perfect solution in the first time which justifies the cost structure. Moreover, we don’t believe in any hidden cost. Our cost structure is transparent and we take only what we claim.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 mt-2">
                        <Card className="box">
                            <Card.Body className="coordbdy">
                                <Card.Img variant="top" style={{width: 'auto'}} src={Timezone} width="50"height="50"alt="React logo" />
                                <Card.Title className="cordtitle">
                                    <h2 style={{fontFamily: 'Urbanist-medium', fontSize: '24px'}}>Time zone aligned resources</h2>
                                </Card.Title>
                                <Card.Text style={{fontSize: '16px', fontWeight: '400', lineHeight: '24px', fontFamily: 'Urbanist-regular'}}>
                                Clients can easily leverage our 24*7 IT support facility to eliminate the difference of time zones. You can conduct meetings or hold virtual conferences at the time that suits you the best.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 mt-2">
                        <Card className="box">
                            <Card.Body className="coordbdy">
                                <Card.Img variant="top" style={{width: 'auto'}} src={Inhouse} width="50"height="50"alt="React logo" />
                                <Card.Title className="cordtitle">
                                    <h2 style={{fontFamily: 'Urbanist-medium', fontSize: '24px'}}>In-house team formation</h2>
                                </Card.Title>
                                <Card.Text style={{fontSize: '16px', fontWeight: '400', lineHeight: '24px', fontFamily: 'Urbanist-regular'}}>
                                We have our in-house recruitment as well as development team which makes it easier to start any project within 2-3 weeks of time. We also ensure that our pool of resources are qualified and hold good experience in the product development.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
    </div>
</div>
    )
}
export default Fourseec;