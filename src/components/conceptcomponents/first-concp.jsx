import React from "react";
import Sleeder from "../conceptcomponents/sleeder";
function Firstconcp (){
return(
    <div className="frstconcept">
        <div className="container-fluid" style={{maxWidth:'1280px',marginTop:'-85px'}}>
            <div style={{paddingTop:'185px',paddingBottom:'140px'}}>
                <div className="text-center">
                    <h1 className="redycncpt">Presentation-ready concepts <br/>for $3000 within one week</h1>
                </div>
                <div className="text-center mt-3">
                    <p className="launchcncpt">Having launched our own startups and with 500+ successful projects on our resume, <br/>we know exactly how to make ideas shine.</p>
                </div>
                <div className="text-center mt-4">
                    <button className="btn btn-primary cnpct">Order a Concept</button>
                </div>
            </div>
        </div>
        <div>
            <Sleeder/>
        </div>
    </div>
)
}
export default Firstconcp;