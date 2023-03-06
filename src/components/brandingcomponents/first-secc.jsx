import React from "react";
import Whitelogo from '../../assets/branding.png';
// import Are from '../../assets/are.svg';
function Firstsecc() {
    return(
        <div className="frrstsec">
            <div className="container-fluid contan" style={{paddingTop: '10%', paddingBottom: '10%', color: 'white', maxWidth: '1280px'}}>
                <div className="row">
                    <div className="col-lg-6">
                        <div>
                            <h1 className="develop" style={{fontSize: 'clamp(1.125rem, 0.8571rem + 1.3393vw, 3rem)',fontWeight: '400', lineHeight: '48px'}}>Innovative Branding Agency <br/> in United States</h1>
                            <p style={{fontFamily: 'Urbanist-medium', lineHeight: '28px', fontSize: '18px', fontWeight: '300'}}>
                                With over 5+ years of experience in building iconic brands, <br/> we are experts in designing logos, corporate letterhead,<br/> brochures and other branding services. We are a creative <br/> branding agency in United States that offers the most <br/> remarkable branding services to our clients.
                            </p>
                        </div>
                        <div style={{paddingTop: '3%', paddingBottom: '3%'}}>
                            <button className="btn btn-success" style={{fontFamily: 'Urbanist', padding: '12px 24px', backgroundColor: '#65E4A1', color: 'black'}}>Free Consultation  </button>
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