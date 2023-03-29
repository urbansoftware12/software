import React from "react";
import Loc from '../../assets/loc.png';
import Fon from '../../assets/fon.png';
import Sms from '../../assets/sms.png';
function Twentycec(){
    return(
        <div className="tventy">
            <div className="container-fluid" style={{maxWidth:'1280px',paddingTop:'120px',paddingBottom:'120px'}}>
            
            <div className="" style={{display:'flex',flexWrap:'wrap'}}>
                            <div className=" crids">
                                        <div style={{display:'flex',marginBottom:'20px',alignItems:'center',gap:'20px',}}>
                                        <div style={{}}>
                                            <img src={Fon} alt="" srcset="" />
                                        </div>
                                        <div>
                                            <h2 className="stry" style={{marginBottom:'0rem'}}>Phone</h2>
                                        </div>
                                        </div>
                                        <div>
                                            <p className="luna">+1 (234) 567-89-00</p>
                                        </div>
                            </div>
                            <div className=" crides">
                            <div style={{display:'flex',marginBottom:'20px',alignItems:'center',gap:'20px',}}>
                                        <div style={{}}>
                                            <img src={Sms} alt="" srcset="" />
                                        </div>
                                        <div>
                                            <h2 className="stry" style={{marginBottom:'0rem'}}>Email</h2>
                                        </div>
                                        </div>
                                        <div>
                                            <p className="luna">info@agency.com</p>
                                        </div>
                            </div>
                            <div className=" cridz">
                            <div style={{display:'flex',marginBottom:'20px',alignItems:'center',gap:'20px',}}>
                                        <div style={{}}>
                                            <img src={Loc} alt="" srcset="" />
                                        </div>
                                        <div>
                                            <h2 className="stry" style={{marginBottom:'0rem'}}>Address</h2>
                                        </div>
                                        </div>
                                        <div>
                                            <p className="luna">2247 Lunetta Street, TX 76301</p>
                                        </div>
                            </div>
                        </div>
            </div>
        </div>
    )
}
export default Twentycec;