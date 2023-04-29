import React from "react";
import Accordianhoome from "./accordianhoome";
import { Button } from "react-bootstrap";
function Seventeencec(){
    return(
        <div className="sventeen">
            <div className="container-fluid agencyquestion" >
                <div className="row">
                    <div className="col-lg-5 col-md-4 col-sm-6">
                        <div>
                            <h2 className="mdrn">FAQ</h2>
                            <h1 className="assk">Frequently Asked <br /> Question</h1>
                            <h2 className="hrie">A digital agency is a business you hire to outsource your <br /> digital marketing efforts, instead of handling in-house.</h2>
                            <div className="botn" style={{marginTop: '20px'}}>
                                <a href="/" className="z" style={{color:'#34A9FF',textDecoration:'none'}} role={Button} >Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <div className="offset-lg-1 col-lg-6 col-md-8 col-sm-6">
                        <Accordianhoome/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Seventeencec;