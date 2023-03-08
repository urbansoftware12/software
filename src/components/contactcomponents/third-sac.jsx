import React from "react";
import {ReactComponent as Mbbl} from '../../assets/mbbl.svg';
function Thirdsac(){
    return(
        <div className="thrdsac">
            <div className="container-fluid" style={{maxWidth: '1280px', padding: '8% 0%'}}>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="" style={{marginTop: '220px'}}>
                            <div className="" style={{fontFamily: 'Urbanist', padding: '12px 24px', color: 'white', border:'1px solid rgba(255,255,255,.12)', fontsize: '24px'}}><Mbbl/> &nbsp; +1 (559) 554-0082   </div>
                        </div>
                    </div>
                    <div className="offset-lg-1 col-lg-8">
                            <div>
                                <h2 style={{fontFamily: 'Urbanist-regular', fontSize: '48px', fontWeight: '400', lineHeight: '68px', color: '#FFFFFF'}}>Let's Chat</h2>
                                <h2 style={{fontFamily: 'Urbanist-regular', fontSize: '18px', fontWeight: '400', lineHeight: '20px', color: '#FFFFFF'}}>Fill in the Form below...</h2>
                            </div>
                            <div className="mt-5">
                                <form>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <input type="text" placeholder="First Name*" class="form-control form-control-lg foam"/>
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="text" placeholder="Last Name" class="form-control form-control-lg foam"/>
                                        </div>
                                    </div> <br/>
                                    <input type="email" placeholder="Email*" class="form-control form-control-lg foam"/> <br/>
                                    <input type="text" placeholder="Phone Number*" class="form-control form-control-lg foam"/> <br/> <br/>
                                    <div style={{paddingBottom: '3%', float: 'right', width: '50%'}}>
                                        <button className="btn btn-success" style={{fontFamily: 'Urbanist', padding: '12px 24px', backgroundColor: '#65E4A1', color: 'black', border: 'none', width: '100%', borderRadius: '0px'}}>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default Thirdsac;