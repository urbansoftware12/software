import React from "react";
import Experience from "../../assets/arexperience-1.svg";
import Mobileapp from "../../assets/mobileapp-1.svg";
import Platform from "../../assets/platform-1.svg";
import Consult from "../../assets/conultancy-1.svg";
import Workshop from "../../assets/workshop-1.svg";
import Design from "../../assets/webdesign-1.svg";
function Secondscc(){
    return(
        <div className="secndscc">
            <div className="container" style={{paddingTop: '7%',paddingBottom: '7%'}}>
                <div className="text-center">
                    <h2 className="hto">Want to build your product with a team that establishes a clear design process, meets deadlines, and delivers a spot-on end result? Turn to UrbanSoft's UI and UX services. Our design team is a small design studio within a large software company that will help you build an engaging product easily and quickly.</h2>
                </div>
            </div>
            <div className="container">
                <div style={{textAlign: 'center'}}>
                    <h1 style={{fontSize: 'clamp(1.1rem, 0.5143rem + 2.9286vw, 5.2rem)', fontFamily:'Urbanist-medium'}}>Our UI and UX Design Services and Capabilities</h1>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-2">
                        <div className="text-center">
                            <img src={Experience} width='50' height='60' alt="" />
                            <p className="mt-4" style={{fontFamily: 'Urbanist-regular', color: 'black', lineHeight: '20px', fontWeight: '400'}}>AR experience <br/> design</p>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="text-center">
                            <img src={Mobileapp} width='50' height='60' alt="" />
                            <p className="mt-4" style={{fontFamily: 'Urbanist-regular', color: 'black', lineHeight: '20px', fontWeight: '400'}}>Mobile app UX and <br/> UI design services</p>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="text-center">
                            <img src={Platform} width='50' height='60' alt="" />
                            <p className="mt-4" style={{fontFamily: 'Urbanist-regular', color: 'black', lineHeight: '20px', fontWeight: '400'}}>Cross-platform <br/> experiences design</p>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="text-center">
                            <img src={Consult} width='50' height='60' alt="" />
                            <p className="mt-4" style={{fontFamily: 'Urbanist-regular', color: 'black', lineHeight: '20px', fontWeight: '400'}}>UI and UX <br/> consulting</p>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="text-center">
                            <img src={Workshop} width='50' height='60' alt="" />
                            <p className="mt-4" style={{fontFamily: 'Urbanist-regular', color: 'black', lineHeight: '20px', fontWeight: '400'}}>Design workshops</p>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="text-center">
                            <img src={Design}  width='50' height='60'alt="" />
                            <p className="mt-4" style={{fontFamily: 'Urbanist-regular', color: 'black', lineHeight: '20px', fontWeight: '400'}}>Web design <br/> services</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Secondscc;