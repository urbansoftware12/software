import React from "react";
import Whitelogo from '../../assets/branding.png';
import {ReactComponent as Are} from '../../assets/axa.svg';
import { Button } from "bootstrap";
function Firstsecc() {
    return(
        <div className="frrstsec">
            <div className="container-fluid contan inovatbrand" style={{ color: 'white', maxWidth: '1280px'}}>
                <div className="row">
                    <div className="col-lg-6">
                        <div>
                            <h1 className="innovat">Innovative Branding Agency <br/> in United States</h1>
                            <h2 className="innovatpara" style={{fontFamily: 'Urbanist-medium', lineHeight: '28px', fontSize: '18px', fontWeight: '300'}}>
                                With over 5+ years of experience in building iconic brands, <br/> we are experts in designing logos, corporate letterhead,<br/> brochures and other branding services. We are a creative <br/> branding agency in United States that offers the most <br/> remarkable branding services to our clients.
                            </h2>
                        </div>
                        <div style={{marginBottom: '20px'}}>
                            <a href="/" className="conslt" role={Button}>Free Consultation &nbsp;<Are/>  </a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src={Whitelogo} style={{width: '100%', height: '82.87%', maxWidth: '759px'}} alt="React logo"/>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}
export default Firstsecc;