import React from "react";
import Accordianservice from "./accordianservice";
import { Button } from "bootstrap";
function Thirdsect ()
{
    return(
        <div className="thrdsec" >
            <div className="container-fluid contan" style={{paddingTop: '7%', paddingBottom: '7%', color: 'white', maxWidth: '1280px'}}>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div>
                            <h2 className="got">Got a Question?</h2>
                            <h1 className="ask">Frequently Asked Question</h1>
                            <div className="botn" style={{marginTop: '20px'}}>
                                <a href="/" className="bton" role={Button} >Get a Free Consultation</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-6">
                        <Accordianservice/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Thirdsect;