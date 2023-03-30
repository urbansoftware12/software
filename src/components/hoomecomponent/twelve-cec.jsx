import React from "react";
import Watch from '../../assets/watch.png';
import { Button } from "react-bootstrap";
function Twelvecec (){
    return(
        <div className="tvlecec" style={{backgroundColor:'#3A3C56'}}>
            <div className="container-fluid" style={{maxWidth:'1280px',paddingTop:'120px',paddingBottom:'40px'}}>
                <div className="text-center">
                    <h2 className="mdrn">Events</h2>
                </div>
                <div className="text-center">
                    <h2 className="web" style={{color:'#FFFFFF'}}>Explore Future <br /> Conferences</h2>
                </div>
                <div className="row" style={{marginBottom:'40px'}}>
                    <div className="col-lg-4">
                        <div style={{padding:'30px',border:'1px solid #FFFFFF'}}>
                            <div style={{display:'flex',alignItems:'center',gap:'20px'}}>
                            <div>
                                <h2 className="one" style={{color:'#FFFFFF'}}>3</h2>
                            </div>
                            <div>
                                <h2 className="two" style={{color:'#FFFFFF'}}>November <br /> 2023</h2>
                            </div>
                            </div>
                            <div style={{display:'flex',alignItems:'center',gap:'20px'}}>
                            <div>
                                <img src={Watch} alt="" />
                            </div>
                            <div>
                                <h2 className="two" style={{color:'#FFFFFF',fontWeight:'400',fontSize:'16px',marginBottom:'0rem'}}>9:00 am – 3:00 pm</h2>
                            </div>
                            </div>
                            <br />
                            <hr />
                            <br />
                            <div>
                                            <h2 className="prof" style={{color:'#FFFFFF'}}>Design Weeks</h2>
                                        </div>
                                        <div>
                                            <p className="busi" style={{color: 'rgba(255, 255, 255, 0.64)'}}>Digital Company is a business you hire to outsource your digital.</p>
                                        </div>
                                        <div style={{marginBottom: '20px'}}>
                            <a href="/" style={{textDecoration:'none',lineHeight:'32px',fontWeight:'400',color:'#FFFFFF'}} role={Button}>Explore More</a>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div style={{padding:'30px',border:'1px solid #FFFFFF'}}>
                            <div style={{display:'flex',alignItems:'center',gap:'20px'}}>
                            <div>
                                <h2 className="one" style={{color:'#FFFFFF'}}>15</h2>
                            </div>
                            <div>
                                <h2 className="two" style={{color:'#FFFFFF'}}>November <br /> 2023</h2>
                            </div>
                            </div>
                            <div style={{display:'flex',alignItems:'center',gap:'20px'}}>
                            <div>
                                <img src={Watch} alt="" />
                            </div>
                            <div>
                                <h2 className="two" style={{color:'#FFFFFF',fontWeight:'400',fontSize:'16px',marginBottom:'0rem'}}>9:00 am – 3:00 pm</h2>
                            </div>
                            </div>
                            <br />
                            <hr />
                            <br />
                            <div>
                                            <h2 className="prof" style={{color:'#FFFFFF'}}>Interior Design</h2>
                                        </div>
                                        <div>
                                            <p className="busi" style={{color: 'rgba(255, 255, 255, 0.64)'}}>Marketing efforts, instead of handling <br /> in-house.</p>
                                        </div>
                                        <div style={{marginBottom: '20px'}}>
                            <a href="/" style={{textDecoration:'none',lineHeight:'32px',fontWeight:'400',color:'#FFFFFF'}} role={Button}>Explore More</a>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div style={{padding:'30px',border:'1px solid #FFFFFF'}}>
                            <div style={{display:'flex',alignItems:'center',gap:'20px'}}>
                            <div>
                                <h2 className="one" style={{color:'#FFFFFF'}}>30</h2>
                            </div>
                            <div>
                                <h2 className="two" style={{color:'#FFFFFF'}}>November <br /> 2023</h2>
                            </div>
                            </div>
                            <div style={{display:'flex',alignItems:'center',gap:'20px'}}>
                            <div>
                                <img src={Watch} alt="" />
                            </div>
                            <div>
                                <h2 className="two" style={{color:'#FFFFFF',fontWeight:'400',fontSize:'16px',marginBottom:'0rem'}}>9:00 am – 3:00 pm</h2>
                            </div>
                            </div>
                            <br />
                            <hr />
                            <br />
                            <div>
                                            <h2 className="prof" style={{color:'#FFFFFF'}}>The F design events</h2>
                                        </div>
                                        <div>
                                            <p className="busi" style={{color: 'rgba(255, 255, 255, 0.64)'}}>Provide your business with a variety of digital solutions to promote.</p>
                                        </div>
                                        <div style={{marginBottom: '20px'}}>
                            <a href="/" style={{textDecoration:'none',lineHeight:'32px',fontWeight:'400',color:'#FFFFFF'}} role={Button}>Explore More</a>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                <a href="/" className="consltoniet" style={{backgroundColor:'transparent',color:'#FFFFFF',border:'1px solid #FFFFFF',borderRadius:'3px'}} role={Button}>Explore More</a>
                </div>
            </div>    
        </div>
    )
}
export default Twelvecec;