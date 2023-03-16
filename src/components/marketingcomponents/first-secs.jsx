import React from "react";
import Socialmarket from "../../assets/socialmarket.png";
import {ReactComponent as Are} from '../../assets/are.svg';
function Firstsecs(){
    return(
        <div className="frstsecs">
            <div className="container-fluid" style={{maxWidth: '1280px', padding: '10% 0%'}}>
                <div className="row">
                    <div className="col-lg-6">
                        <div>
                            <h2 className="" style={{fontSize: '48px', lineHeight: '68px', fontWeight: '400', fontFamily: 'Urbanist-medium'}}>Entire Social Media <br/>Marketing Agency<br/> in Unite States</h2>
                        </div>
                        <div>
                            <p style={{fontSize: '16px', fontFamily: 'Urbanist-regular'}}>
                            So many factors weigh on company leadership when deciding how, when and where to spend money on marketing initiatives that drive real results. There are so many options, platforms and service providers that without a clear marketing strategy, your investment just won’t go very far. Now is the time for strategic partnerships and true collaboration and this is our sweet spot. Let us take the worry of strategic marketing off your plate so you can do what you do best
                            </p>
                        </div>
                        <div style={{paddingTop: '3%', paddingBottom: '3%'}}>
                            <button className="btn btn-success" style={{fontFamily: 'Urbanist', padding: '12px 24px', backgroundColor: '#65E4A1', color: 'black', border: 'none'}}>Free Consultation &nbsp;<Are/>  </button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div>
                            <img src={Socialmarket} style={{width: '100%'}} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Firstsecs;