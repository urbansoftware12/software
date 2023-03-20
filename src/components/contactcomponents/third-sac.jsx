import React from "react";
import {ReactComponent as Mbbl} from '../../assets/mbbl.svg';
function Thirdsac(){
    return(
        <div className="thrdsac">
            <div className="container-fluid letpad" style={{maxWidth: '1280px'}}>
                <div className="row">
                    <div className="col-lg-3 col-md-4 botn">
                        <div className="" style={{marginTop: '230px'}}>
                            <div className="" style={{fontFamily: 'Urbanist', padding: '15px 24px', color: '#fff', border:'1px solid rgba(255,255,255,.12)', fontsize: '24px'}}><Mbbl/> &nbsp; <a href="tel:+1%20559%20554%200082" style={{opacity: '0.72', color: '#fff', textDecoration: 'none'}}>+1 (559) 554-0082</a>   </div>
                        </div>
                    </div>
                    <div className="offset-lg-1 col-lg-8 col-md-8">
                            <div>
                                <h2 className="developweb" style={{color: '#FFFFFF', marginBottom: '10px'}}>Let's Chat</h2>
                                <h2 className="filfom">Fill in the Form below...</h2>
                            </div>
                            <div style={{marginTop: '50px'}}>
                                <form>
                                    <div className="row" >
                                        <div className="col-lg-6" style={{marginBottom: '40px'}}>
                                            <input type="text" placeholder="First Name*" required class="form-control form-control-lg foam"/>
                                        </div>
                                        <div className="col-lg-6" style={{marginBottom: '40px'}}>
                                            <input type="text" placeholder="Last Name" required class="form-control form-control-lg foam"/>
                                        </div>
                                    </div>
                                    <div style={{marginBottom: '40px'}}>
                                        <input type="email" placeholder="Email*" required class="form-control form-control-lg foam"/>
                                    </div>
                                    <div style={{marginBottom: '40px'}}>
                                        <input type="text" placeholder="Phone Number*" required class="form-control form-control-lg foam"/>
                                    </div>
                                    <div style={{marginBottom: '40px',float: 'right', width: '50%'}}>
                                        <button className="fombtn" type="submit">Submit</button>
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