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
            <div className="container pdding" style={{paddingTop: '80px',paddingBottom: '80px'}}>
                <div className="text-center">
                    <h2 className="hto">Want to build your product with a team that establishes a clear design process, meets deadlines, and delivers a spot-on end result? Turn to UrbanSoft's UI and UX services. Our design team is a small design studio within a large software company that will help you build an engaging product easily and quickly.</h2>
                </div>
            </div>
            <div className="container-fluid" style={{maxWidth: '1280px'}}>
                <div style={{textAlign: 'center'}}>
                    <h1 className="fusion">Our UI and UX Design Services and Capabilities</h1>
                </div>
                <div className="row">
                    <div className="col-lg-2 desply">
                        <div className="text-center">
                            <img src={Experience} width='50' height='60' style={{marginBottom: '20px'}} alt="" />
                            <p className="mbldsign">AR experience <br/> design</p>
                        </div>
                    </div>
                    <div className="col-lg-2 desply">
                        <div className="text-center">
                            <img src={Mobileapp} width='50' height='60' style={{marginBottom: '20px'}} alt="" />
                            <p className="mbldsign">Mobile app UX and <br/> UI design services</p>
                        </div>
                    </div>
                    <div className="col-lg-2 desply">
                        <div className="text-center">
                            <img src={Platform} width='50' height='60' style={{marginBottom: '20px'}} alt="" />
                            <p className="mbldsign">Cross-platform <br/> experiences design</p>
                        </div>
                    </div>
                    <div className="col-lg-2 desply">
                        <div className="text-center">
                            <img src={Consult} width='50' height='60' style={{marginBottom: '20px'}} alt="" />
                            <p className="mbldsign">UI and UX <br/> consulting</p>
                        </div>
                    </div>
                    <div className="col-lg-2 desply">
                        <div className="text-center">
                            <img src={Workshop} width='50' height='60' style={{marginBottom: '20px'}} alt="" />
                            <p className="mbldsign">Design workshops</p>
                        </div>
                    </div>
                    <div className="col-lg-2 desply">
                        <div className="text-center">
                            <img src={Design}  width='50' height='60' style={{marginBottom: '20px'}} alt="" />
                            <p className="mbldsign">Web design <br/> services</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Secondscc;