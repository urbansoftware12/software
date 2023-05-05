import React from "react";
import Star from '../../assets/star.png';
import Oval from '../../assets/Oval.png';
import { Button } from "react-bootstrap";
function Fifteencec(){
    return(
        <div className="fefteen">
            <div className="container-fluid clientest" >
                <div className="text-center">
                    <h2 className="mdrn">Testimonials</h2>
                    <h2 className="clent">What Our <br /> Clients Saying</h2>
                </div>
                <div style={{display:'flex',flexWrap:'wrap',marginTop:'30px',marginBottom:'40px'}}>
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <div>
                            <div className="str">
                                <div style={{marginBottom:'20px'}}>
                                    <img src={Star} alt="" />
                                </div>
                                <div>
                                    <h2 className="agncy">A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.</h2>
                                </div>
                                <div style={{display:'flex',alignItems:'center',gap:'20px'}}>
                                    <div>
                                        <img src={Oval} alt="" />
                                    </div>
                                    <div>
                                        <h2 className="alan">Alan Martí</h2>
                                        <h2 className="meta">Meta Inc.</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="stri">
                                <div style={{marginBottom:'20px'}}>
                                    <img src={Star} alt="" />
                                </div>
                                <div>
                                    <h2 className="agncy">Provide your business with a variety of digital solutions to promote your product or service online.</h2>
                                </div>
                                <div style={{display:'flex',alignItems:'center',gap:'20px'}}>
                                    <div>
                                        <img src={Oval} alt="" />
                                    </div>
                                    <div>
                                        <h2 className="alan">Alan Martí</h2>
                                        <h2 className="meta">Meta Inc.</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <div>
                            <div className="strie">
                                <div style={{marginBottom:'20px'}}>
                                    <img src={Star} alt="" />
                                </div>
                                <div>
                                    <h2 className="agncy">Provide your business with a variety of digital solutions to promote your product or service online.</h2>
                                </div>
                                <div style={{display:'flex',alignItems:'center',gap:'20px'}}>
                                    <div>
                                        <img src={Oval} alt="" />
                                    </div>
                                    <div>
                                        <h2 className="alan">Alan Martí</h2>
                                        <h2 className="meta">Meta Inc.</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div>
                    <div className="stria">
                            <div style={{marginBottom:'20px'}}>
                                <img src={Star} alt="" />
                            </div>
                            <div>
                                <h2 className="agncy">Provide your business with a variety of digital solutions to promote your product or service online.</h2>
                            </div>
                            <div style={{display:'flex',alignItems:'center',gap:'20px'}}>
                                <div>
                                    <img src={Oval} alt="" />
                                </div>
                                <div>
                                    <h2 className="alan">Alan Martí</h2>
                                    <h2 className="meta">Meta Inc.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="text-center" style={{marginTop: '20px',display:'flex',justifyContent:'center'}}>
                            <a href="/" className="consltonie" role={Button}>ABOUT US</a>
                        </div>
            </div>
        </div>
    )
}
export default Fifteencec;