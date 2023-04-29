import React from "react";
import { Button } from "react-bootstrap";
function Nineteencec(){
    return(
        <div className="nneteen">
            <div className="container-fluid touch" >
                <div className="row">
                <div className="col-lg-6 col-md-6">
                            <div className="crdtouch" >
                            <div>
                                <h2 className="developweb" style={{color: '#000000', marginBottom: '10px'}}>Get In Touch</h2>
                            </div>
                            <div style={{marginTop: '20px'}}>
                                <form>
                                    <div className="row" >
                                        <div className="col-lg-6" style={{marginBottom: '20px'}}>
                                            <input type="text" placeholder="First Name*" required class="form-control form-control-lg foamz"/>
                                        </div>
                                        <div className="col-lg-6" style={{marginBottom: '20px'}}>
                                            <input type="text" placeholder="Last Name" required class="form-control form-control-lg foamz"/>
                                        </div>
                                    </div>
                                    <div style={{marginBottom: '20px'}}>
                                        <input type="email" placeholder="Email*" required class="form-control form-control-lg foamz"/>
                                    </div>
                                    <div style={{marginBottom: '20px'}}>
                                        <input type="text" placeholder="Phone Number*" required class="form-control form-control-lg foamz"/>
                                    </div>
                                    <div style={{marginBottom: '40px',float: 'right'}}>
                                        <button className="fombtnz btn btn-primary" type="submit" style={{padding:'12px 18px',color:'#FFFFFF'}} role={Button}>Submit</button>
                                    </div>
                                </form>
                                
                            </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default Nineteencec;