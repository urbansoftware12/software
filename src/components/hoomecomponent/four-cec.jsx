import React from "react";
import { Button } from "react-bootstrap";
function Fourcec(){
    return(
        <div className="forcec" style={{}}>
            <div className="container-fluid" style={{maxWidth:'1280px',paddingTop: '100px', paddingBottom: '100px',borderBottom:'1px solid #349AFF'}}>
                <div className="row">
                    <div className="col-lg-6">
                    <div>
                            <h2 className="mdrn">HOW WE WORK</h2>
                        </div>
                        <div>
                            <h2 className="web">Making Your Projects <br /> Look Awesome</h2>
                        </div>
                        <div>
                            <p className="busi" style={{color: 'rgba(0, 0, 0, 0.64)'}}>Technical skills, design, business understanding, ability to <br /> put themselves in the merchant's shoes.</p>
                        </div>
                        <div style={{marginBottom: '20px'}}>
                            <a href="/" style={{color:'#34A9FF', textDecoration:'none'}} role={Button}>Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div style={{display: 'flex',alignItems:'center',gap:'30px',marginBottom:'20px'}}>
                            <div style={{width:'50px'}}>
                                <h2 className="one">1</h2>
                            </div>
                            <div>
                                <h2 className="two">Full service range including</h2>
                            </div>
                        </div>
                        <div style={{display: 'flex',alignItems:'center',gap:'30px',marginBottom:'20px'}}>
                            <div style={{width:'50px'}}>
                                <h2 className="one">2</h2>
                            </div>
                            <div>
                                <h2 className="two">Technical skills, design, business</h2>
                            </div>
                        </div>
                        <div style={{display: 'flex',alignItems:'center',gap:'30px',marginBottom:'20px'}}>
                            <div style={{width:'50px'}}>
                                <h2 className="one">3</h2>
                            </div>
                            <div>
                                <h2 className="two"> Themselves in the merchant's</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Fourcec;