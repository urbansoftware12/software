import React from "react";
import Accordian from "./accordianux";
function Fivescc ()
{
    return(
        <div className="thrdsec" >
            <div className="container-fluid contan" style={{paddingTop: '15%', paddingBottom: '15%', color: 'white', maxWidth: '1280px'}}>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div>
                            <p>Got a Question?</p>
                            <h1 style={{fontFamily: 'Urbanist-medium',fontSize: 'clamp(1.1rem, 0.5143rem + 2.9286vw, 5.2rem)'}}>Frequently Asked Question</h1>
                            <div style={{paddingTop: '3%', paddingBottom: '3%'}}>
                                <button className="btn btn-success" style={{fontFamily: 'Urbanist', paddingTop: '2.5%', paddingBottom: '2.5%', paddingLeft: '5%', paddingRight: "5%"}}>Get a Free Consultation</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-6">
                        <Accordian/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Fivescc;