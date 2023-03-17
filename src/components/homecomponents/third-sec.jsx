import { Button } from "bootstrap";
import React from "react";
import Accordian from "./accordian";
function Thirdsec ()
{
    return(
        <div className="thrdsec" >
            <div className="container-fluid contan const" style={{ color: 'white', maxWidth: '1280px'}}>
                <div className="row">
                    <div className="col-lg-4 col-md-12 mt-2">
                        <div>
                            <h2 className="got">Got a Question?</h2>
                            <h1 className="ask">Frequently Asked Question</h1>
                            <div className="botn" style={{marginTop: '20px'}}>
                                <a href="/" className="bton" role={Button} >Get a Free Consultation</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 mt-2">
                        <Accordian/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Thirdsec;