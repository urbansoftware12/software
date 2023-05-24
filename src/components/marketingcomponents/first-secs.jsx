import React from "react";
import { Button } from "bootstrap";
import Socialmarket from "../../assets/socialmarket.png";
import {ReactComponent as Are} from '../../assets/axa.svg';
function Firstsecs(){
    return(
        <div className="frstsecs">
            <div className="container-fluid inovatbrand" style={{maxWidth: '1280px',marginTop:'-85px'}}>
                <div className="row">
                    <div className="col-lg-6">
                        <div>
                            <h2 className="innovat" style={{color: 'black'}}>Entire Social Media <br/>Marketing Agency<br/> in Unite States</h2>
                        </div>
                        <div>
                            <p className="mrktfct">
                                So many factors weigh on company leadership when deciding how, when and where to spend money on marketing initiatives that drive real results. There are so many options, platforms and service providers that without a clear marketing strategy, your investment just won’t go very far. Now is the time for strategic partnerships and true collaboration and this is our sweet spot. Let us take the worry of strategic marketing off your plate so you can do what you do best
                            </p>
                        </div>
                        <div style={{marginBottom: '20px'}}>
                            <a href="/" className="conslt" role={Button}>Free Consultation &nbsp;<Are/>  </a>
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