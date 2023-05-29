import React from "react";
import Grp from '../../assets/Grp.png';
import Grpp from '../../assets/grpp.png';
// import Bitma1 from '../../assets/Bitma1.png';
// import Bitma2 from '../../assets/Bitma2.png';
// import Bitma3 from '../../assets/Bitma3.png';
// import Bitma4 from '../../assets/Bitma4.png';
import Slieder from './slieder';
function Thirteencec(){
    return(
        <div className="thrteen" style={{backgroundColor:'#3A3C56'}}>
            <div className="container-fluid dsignrteam" >
                <div style={{marginBottom:'20px'}}>
                    <h2 className="mdrn">Our Team</h2>
                </div>
                <div className="dzinr" >
                    <div>
                        <h2 className="teem">Team of Designers <br /> and Developers</h2>
                    </div>
                    <div>
                        <div style={{display:'flex',gap:'15px'}}>
                        <div>
                            <img src={Grp} width='48' height='48' alt="" />
                        </div>
                        <div>
                        <img src={Grpp} width='48' height='48' alt="" />
                        </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Slieder/>
                </div>
                {/* <div id="demone" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
    <button type="button" data-bs-target="#demone" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#demone" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demone" data-bs-slide-to="2"></button>
  </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-lg-3 col-md-3">
                                    <div className="text-center los" >
                                        <img src={Bitma1} alt="Los Angeles" height='233' style={{width:'100%'}} className="mt-4"/>
                                    </div>
                                    <div>
                                        <h2 className="azah">Azah Anyeni</h2>
                                        <h2 className="any">Designer</h2>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 botn">
                                    <div className="text-center los">
                                        <img src={Bitma2} alt="Los Angeles" height='233' style={{width:'100%'}} className="mt-4"/>
                                    </div>
                                    <div>
                                        <h2 className="azah">Azah Anyeni</h2>
                                        <h2 className="any">Designer</h2>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 botn">
                                    <div className="text-center los">
                                        <img src={Bitma3} alt="Los Angeles" height='233' style={{width:'100%'}} className="mt-4"/>
                                    </div>
                                    <div>
                                        <h2 className="azah">Azah Anyeni</h2>
                                        <h2 className="any">Designer</h2>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 botn">
                                    <div className="text-center los">
                                        <img src={Bitma4} alt="Los Angeles" height='233' style={{width:'100%'}} className="mt-4"/>
                                    </div>
                                    <div>
                                        <h2 className="azah">Azah Anyeni</h2>
                                        <h2 className="any">Designer</h2>
                                    </div>
                                </div>
                                
                            </div>    
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-lg-3 col-md-3">
                                    <div className="text-center los">
                                        <img src={Bitma2} alt="Los Angeles" height='233' style={{width:'100%'}} className="mt-4"/>
                                    </div>
                                    <div>
                                        <h2 className="azah">Azah Anyeni</h2>
                                        <h2 className="any">Designer</h2>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 botn">
                                    <div className="text-center los">
                                        <img src={Bitma3} alt="Los Angeles" height='233' style={{width:'100%'}} className="mt-4"/>
                                    </div>
                                    <div>
                                        <h2 className="azah">Azah Anyeni</h2>
                                        <h2 className="any">Designer</h2>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 botn">
                                    <div className="text-center los">
                                        <img src={Bitma4} alt="Los Angeles" height='233' style={{width:'100%'}} className="mt-4"/>
                                    </div>
                                    <div>
                                        <h2 className="azah">Azah Anyeni</h2>
                                        <h2 className="any">Designer</h2>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 botn">
                                    <div className="text-center los">
                                        <img src={Bitma1} alt="Los Angeles" height='233' style={{width:'100%'}} className="mt-4"/>
                                    </div>
                                    <div>
                                        <h2 className="azah">Azah Anyeni</h2>
                                        <h2 className="any">Designer</h2>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-lg-3 col-md-3">
                                    <div className="text-center los">
                                        <img src={Bitma3} alt="Los Angeles" height='233' style={{width:'100%'}} className="mt-4"/>
                                    </div>
                                    <div>
                                        <h2 className="azah">Azah Anyeni</h2>
                                        <h2 className="any">Designer</h2>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 botn">
                                    <div className="text-center los">
                                        <img src={Bitma4} alt="Los Angeles" height='233' style={{width:'100%'}} className="mt-4"/>
                                    </div>
                                    <div>
                                        <h2 className="azah">Azah Anyeni</h2>
                                        <h2 className="any">Designer</h2>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 botn">
                                    <div className="text-center los">
                                        <img src={Bitma1} alt="Los Angeles" height='233' style={{width:'100%'}} className="mt-4"/>
                                    </div>
                                    <div>
                                        <h2 className="azah">Azah Anyeni</h2>
                                        <h2 className="any">Designer</h2>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 botn">
                                    <div className="text-center los">
                                        <img src={Bitma2} alt="Los Angeles" height='233' style={{width:'100%'}} className="mt-4"/>
                                    </div>
                                    <div>
                                        <h2 className="azah">Azah Anyeni</h2>
                                        <h2 className="any">Designer</h2>
                                    </div>
                                </div>
                                
                            </div> 
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
export default Thirteencec;