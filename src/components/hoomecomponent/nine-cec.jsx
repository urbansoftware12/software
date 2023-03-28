import React from "react";
import Gr from '../../assets/Gr.png';
import Gro from '../../assets/Gro.png';
import Grou from '../../assets/Grou.png';
import { Button } from "react-bootstrap";
function Ninecec(){
    return(
        <div className="nincec">
            <div className="container-fluid" style={{maxWidth:'1280px',paddingTop:'120px',paddingBottom:'120px'}}>
            <div className="">
                            <h2 className="mdrn">Service</h2>
                        </div>
                        <div>
                            <h2 className="web">How We <br /> Can Help...</h2>
                        </div>
            <div className="" style={{display:'flex',flexWrap:'wrap'}}>
                            <div className=" crids">
                                        <div style={{marginBottom:'20px'}}>
                                            <img src={Gr} alt="" srcset="" />
                                        </div>
                                        <div>
                                            <h2 className="prof">Design</h2>
                                        </div>
                                        <div>
                                            <p className="busi" style={{color: 'rgba(0, 0, 0, 0.64)'}}>Urban Software provides a full service range including technical  skills, design.</p>
                                        </div>
                                        <div style={{marginBottom: '20px'}}>
                            <a href="/" style={{color:'#34A9FF', textDecoration:'none',lineHeight:'32px',fontWeight:'400'}} role={Button}>Learn More</a>
                        </div>
                            </div>
                            <div className=" crids">
                                        <div style={{marginBottom:'20px'}}>
                                            <img src={Gro} alt="" srcset="" />
                                        </div>
                                        <div>
                                            <h2 className="prof">Development</h2>
                                        </div>
                                        <div>
                                            <p className="busi" style={{color: 'rgba(0, 0, 0, 0.64)'}}>Full service range including technical skills, design, business.</p>
                                        </div>
                                        <div style={{marginBottom: '20px'}}>
                            <a href="/" style={{color:'#34A9FF', textDecoration:'none',lineHeight:'32px',fontWeight:'400'}} role={Button}>Discover More</a>
                        </div>
                            </div>
                            <div className=" crids">
                            <div style={{marginBottom:'20px'}}>
                                            <img src={Grou} alt="" srcset="" />
                                        </div>
                                        <div>
                                            <h2 className="prof">Marketing</h2>
                                        </div>
                                        <div>
                                            <p className="busi" style={{color: 'rgba(0, 0, 0, 0.64)'}}>Technical skills, design, business understanding, ability.</p>
                                        </div>
                                        <div style={{marginBottom: '20px'}}>
                            <a href="/" style={{color:'#34A9FF', textDecoration:'none',lineHeight:'32px',fontWeight:'400'}} role={Button}>Explore More</a>
                        </div>
                            </div>
                        </div>
            </div>
        </div>
    )
}
export default Ninecec;