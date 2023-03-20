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
    <div className="container" style={{paddingTop: '80px'}}>
        <div style={{textAlign: 'center'}}>
            <div>
                <p className="skilparagrph">Skills & Expertise</p>
            </div>
            <h1 className="cost">Why is UrbanSoft your Partner?</h1>
        </div>
    </div>
    <div className="container-fluid" style={{maxWidth: '1280px',paddingBottom: '80px'}}>
                <Row>
                    <div className="col-lg-4 col-md-6 ycrd whyccrd">
                        <Card className="box ycard">
                            <Card.Body style={{padding: '10px'}}>
                                <div style={{marginBottom: '20px'}}>
                                    <img src={Qualified} className="imgskil" alt="" srcset="" />
                                </div>
                                <Card.Title className="">
                                    <h2 className="qualify">Qualified professionals for quality and quick delivery</h2>
                                </Card.Title>
                                <Card.Text className="qualifypara">
                                    With the bandwidth of more than 50+ professionals, we try to deliver maximum IT support and have a hiring system that only recruits 3-4 years experienced professionals for client projects.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-6 ycrd whyccrd">
                        <Card className="box ycard">
                            <Card.Body style={{padding: '10px'}}>
                                <div style={{marginBottom: '20px'}}>
                                    <img src={Infrastructure} className="imgskil" alt="" srcset="" />
                                </div>
                                <Card.Title className="">
                                    <h2 className="qualify">Infrastructure for improved efficiency</h2>
                                </Card.Title>
                                <Card.Text className="qualifypara">
                                We equipped with all the necessary amenities which a dedicated development team would need to deliver the project. Each team member has a dedicated desk and VOIP facility for seamless communication of project developments and increased efficiency. Our premises are also equipped with a centralized fire safety mechanism which ensures complete safety.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-6 ycrd whyccrd">
                        <Card className="box ycard">
                            <Card.Body style={{padding: '10px'}}>
                            <div style={{marginBottom: '20px'}}>
                                    <img src={Freedom} className="imgskil" alt="" srcset="" />
                                </div>
                                <Card.Title className="">
                                    <h2 className="qualify">Freedom & ownership of recruitment</h2>
                                </Card.Title>
                                <Card.Text className="qualifypara">
                                Urban handles all the recruitment and selection process by itself, freeing you from the responsibilities of approaching the resources, screening, recruiting and training them for the project. Everything is taken care of by the team of Urban Software. We also provide complete ownership of the team which gives you authority to set the hierarchy or scale up and down the team.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
                <Row>
                    <div className="col-lg-4 col-md-6 ycrd whyccrd">
                        <Card className="box ycard">
                            <Card.Body style={{padding: '10px'}}>
                            <div style={{marginBottom: '20px'}}>
                                    <img src={Cost} className="imgskil" alt="" srcset="" />
                                </div>
                                <Card.Title className="">
                                    <h2 className="qualify">Cost that fits your budget</h2>
                                </Card.Title>
                                <Card.Text className="qualifypara">
                                We provide software services at 50% lower cost than the market. Our highly-qualified professionals bring their experience and clarity of objectives to the project which ensures quick delivery and perfect solution in the first time which justifies the cost structure. Moreover, we don’t believe in any hidden cost. Our cost structure is transparent and we take only what we claim.
                                </Card.Text>
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
                                    <h2 className="qualify">Time zone aligned resources</h2>
                                </Card.Title>
                                <Card.Text className="qualifypara">
                                Clients can easily leverage our 24*7 IT support facility to eliminate the difference of time zones. You can conduct meetings or hold virtual conferences at the time that suits you the best.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-md-6 ycrd whyccrd">
                        <Card className="box ycard">
                            <Card.Body style={{padding: '10px'}}>
                            <div style={{marginBottom: '20px'}}>
                                    <img src={Inhouse} className="imgskil" alt="" srcset="" />
                                </div>
                                <Card.Title className="">
                                    <h2 className="qualify">In-house team formation</h2>
                                </Card.Title>
                                <Card.Text className="qualifypara">
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