import React from "react";
import Pitc from '../../assets/petc.png';
import Bitmap from '../../assets/Bitmap.png';
import { Button } from "react-bootstrap";
function Eightcec(){
    return(
        <div className="eghtcec">
        <div className="container-fluid mkncmplx" >
            <div className="row">
                <div className="col-lg-5 col-md-5">
                    <div>
                        <img src={Pitc} style={{width:'100%'}} alt="" srcset="" />
                    </div>
                </div>
                    <div className="offset-lg-1 col-lg-6 0ffset-md-1 col-md-6">
                    <div className="mt-5">
                            <h2 className="mdrn">Service</h2>
                        </div>
                        <div>
                            <h2 className="web">Making Complex <br />Digital Products</h2>
                        </div>
                        <div>
                            <p className="tch">Urban Software provides a full service range <br /> including technical skills, design, business.</p>
                        </div>
                        <div style={{display:'flex',gap:'20px'}}>
                            <div>
                                <img src={Bitmap} alt="" />
                            </div>
                            <div>
                                <div>
                                <p className="undr">"Understanding, ability to put themselves in the Urban <br /> Software. It is meant to partner."</p>
                                </div>
                                <div>
                                    <h2 className="busi" style={{color:'black'}}>Jenny Murtaugh</h2>
                                </div>
                            
                            
                            </div>
                        </div>
                        <div style={{marginTop:'20px'}}>
                            <a href="/" className="consltonie" role={Button}>Explore</a>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    )
}
export default Eightcec;