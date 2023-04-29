import React from "react";
import { Button } from "react-bootstrap";
import Homw from '../../assets/homw.png';
function Sevencec(){
    return(
        <div className="svencec">
            <div className="container-fluid extnson">
                <div className="row">
                    <div className="col-lg-6">
                        <div>
                            <h2 className="mdrn">Features</h2>
                        </div>
                        <div>
                            <p className="busi" style={{color: 'rgba(0, 0, 0, 0.64)'}}>Long run, and work as an extension <br /> of the merchant's team.</p>
                        </div>
                        <div style={{marginBottom: '20px'}}>
                            <a href="/" style={{color:'#34A9FF', textDecoration:'none'}} role={Button}>Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="" style={{display:'flex',alignItems:'end',flexWrap:'wrap'}}>
                            <div className=" crds">
                                        <div style={{marginBottom:'20px'}}>
                                            <img src={Homw} alt="" srcset="" />
                                        </div>
                                        <div>
                                            <h2 className="prof">Professional</h2>
                                        </div>
                                        <div>
                                            <p className="busi" style={{color: 'rgba(0, 0, 0, 0.64)'}}>Full service range including <br /> technical skills, design.</p>
                                        </div>
                            </div>
                            <div className=" crdss">
                                        <div style={{marginTop:'50px'}}>
                                            <h2 className="prof">Accessibility</h2>
                                        </div>
                                        <div>
                                            <p className="busi" style={{color: 'rgba(0, 0, 0, 0.64)'}}>Business understanding, <br /> ability to put themselves.</p>
                                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Sevencec;