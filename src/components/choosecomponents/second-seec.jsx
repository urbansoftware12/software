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
export default Secondseec;