import React from "react";
import Picu from '../../assets/picu.png';
import Good from '../../assets/Good.png';
function Sixcec(){
    return(
        <div className="sxcec">
            <div className="container-fluid fetur" >
            <div className="row">
                
                    <div className="col-lg-6">
                    <div className="mt-5">
                            <h2 className="mdrn">Features</h2>
                        </div>
                        <div>
                            <h2 className="web">Give Your Site 
 <br /> A New Look</h2>
                        </div>
                        <div>
                            <p className="busi" style={{color: 'rgba(0, 0, 0, 0.64)'}}>Service range including technical skills, design,  <br /> business understanding.</p>
                        </div>
                        <div style={{display:'flex',alignItems:'center',gap:'30px',marginBottom:'10px'}}>
                            <div>
                                <img src={Good} alt="" srcset="" />
                            </div>
                            <div>
                                <p style={{marginBottom:'0rem'}}>Range including technical skills</p>
                            </div>
                        </div>
                        <div style={{display:'flex',alignItems:'center',gap:'30px',marginBottom:'10px'}}>
                            <div>
                                <img src={Good} alt="" srcset="" />
                            </div>
                            <div>
                                <p style={{marginBottom:'0rem'}}>Business understanding</p>
                            </div>
                        </div>
                        <div style={{display:'flex',alignItems:'center',gap:'30px',marginBottom:'10px'}}>
                            <div>
                                <img src={Good} alt="" srcset="" />
                            </div>
                            <div>
                                <p style={{marginBottom:'0rem'}}>Partner on the long run</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                    <div>
                        <img src={Picu} alt="" style={{width:'100%'}} srcset="" />
                    </div>
                </div>
                </div>

            </div>
        </div>
    )
}
export default Sixcec;