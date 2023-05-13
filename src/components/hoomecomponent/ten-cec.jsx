import React from "react";
import Bitmapon from '../../assets/Bitmap1.png';
import Bitmap2 from '../../assets/Bitmap2.png';
import Bitmap3 from '../../assets/Bitmap3.png';
import Bitmap4 from '../../assets/Bitmap4.png';
import { Button } from "react-bootstrap";
// import Tabhoome from "./tabhoome";
function Tencec(){
    return(
        <div className="tncec" style={{backgroundColor:'#3A3C56'}}>
            <div className="container-fluid srvceltst">
                <div className="text-center">
                    <h2 className="mdrn">Service</h2>
                </div>
                <div className="text-center">
                    <h2 className="web" style={{color:'#FFFFFF'}}>Latest Work</h2>
                </div>

                {/* tab Start */}
                {/* <div className="container">
                <Tabhoome/>
                </div> */}
                {/* tab Close */}

                <div className="row" style={{marginBottom:'20px'}}>
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="scroal" >
                            <div>
                                <h2 className="al">Show All &nbsp;<sup>14</sup></h2>
                            </div>
                            <div>
                                <h2 className="all">Design &nbsp;<sup>6</sup></h2>
                            </div>
                            <div>
                                <h2 className="all">Branding &nbsp;<sup>4</sup></h2>
                            </div>
                            <div>
                                <h2 className="all">Illustration &nbsp;<sup>3</sup></h2>
                            </div>
                            <div>
                                <h2 className="all">Motion &nbsp;<sup>1</sup></h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
                <div className="row" style={{marginBottom:'20px'}}>
                    <div className="col-lg-5">
                        <div style={{position:"relative"}}>
                            <img src={Bitmapon} style={{width:'100%'}} alt="" />
                            <div style={{position:'absolute',bottom:'50px',left:'40px'}}>
                                <div style={{marginBottom:'20px'}}>
                                    <a href="/" className="consltoniet" style={{color:'#34A9FF',backgroundColor:'white',borderRadius:'100px'}} role={Button}>Design</a>
                                </div>
                                <h2 className="txt">Text</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div style={{position:"relative"}}>
                            <img src={Bitmap2} style={{width:'100%'}} alt="" />
                            <div style={{position:'absolute',bottom:'50px',left:'40px'}}>
                                <div style={{marginBottom:'20px'}}>
                                    <a href="/" className="consltoniet" style={{color:'#34A9FF',backgroundColor:'white',borderRadius:'100px'}} role={Button}>Branding</a>
                                </div>
                                <h2 className="txt">Text</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{marginBottom:'40px'}}>
                    <div className="col-lg-7">
                        <div style={{position:"relative"}}>
                            <img src={Bitmap3} style={{width:'100%'}} alt="" />
                            <div style={{position:'absolute',bottom:'50px',left:'40px'}}>
                                <div style={{marginBottom:'20px'}}>
                                    <a href="/" className="consltoniet" style={{color:'#34A9FF',backgroundColor:'white',borderRadius:'100px'}} role={Button}>Illustration</a>
                                </div>
                                <h2 className="txt">Text</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div style={{position:"relative"}}>
                            <img src={Bitmap4} style={{width:'100%'}} alt="" />
                            <div style={{position:'absolute',bottom:'50px',left:'40px'}}>
                                <div style={{marginBottom:'20px'}}>
                                    <a href="/" className="consltoniet" style={{color:'#34A9FF',backgroundColor:'white',borderRadius:'100px'}} role={Button}>Motion</a>
                                </div>
                                <h2 className="txt">Text</h2>
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
export default Tencec;