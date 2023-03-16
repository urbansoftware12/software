import React from "react";
import Accordian from "./accordian";
function Thirdsec ()
{
    return(
        <div className="thrdsec" >
            <div className="container-fluid contan" style={{paddingTop: '7%', paddingBottom: '7%', color: 'white', maxWidth: '1280px'}}>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div>
                            <p>Got a Question?</p>
                            <h1 className="develop">Frequently Asked Question</h1>
                            <div style={{paddingTop: '3%', paddingBottom: '3%'}}>
                                <button className="btn" style={{fontFamily: 'Urbanist', paddingTop: '2.5%', paddingBottom: '2.5%', paddingLeft: '5%', paddingRight: "5%", backgroundColor: '#65E4A1',borderRadius: '3px'}}>Get a Free Consultation</button>
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
export default Thirdsec;