import React from "react";
import Experience from '../../assets/Experience.svg';
import Customer from '../../assets/Customers.svg';
import Resources from '../../assets/Resources.svg';
import Level from '../../assets/Level.svg';
import Transparent from '../../assets/Transparent.svg';
import Art from '../../assets/art.svg';
import Delivery from '../../assets/delivery.svg';
import Team from '../../assets/team.svg';
function Secondseec(){
    return(
        <div className="scndseec">
            <div className="container" style={{paddingTop: '7%',paddingBottom: '7%'}}>
                <div style={{textAlign: 'center'}}>
                    <div style={{color: '#34A9FF'}}>
                        <p style={{fontSize: '20px'}}>Skills & Expertise</p>
                    </div>
                    <h1 style={{fontSize: 'clamp(1.1rem, 0.8286rem + 1.3571vw, 3rem)', fontFamily: 'Urbanist-medium', lineHeight: '58px', fontWeight: '500', color: '#000000'}}>How UrbanSoft can help you save <br/>
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
export default Secondseec;