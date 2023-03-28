import React from "react";
import Pic from "../../assets/graphic.png";
import Gitlab from '../../assets/gitlab.png';
import Slack from '../../assets/slack.png';
import Netflix from '../../assets/netflix.png';
import Paypal from '../../assets/paypal.png';
import { Button } from "react-bootstrap";
function Firstcec(){
    return(
        <div className="frstcec">
            <div className="container-fluid cec" style={{maxWidth: '1280px',marginTop:'-16px'}}>
                <div className="row">
                    <div className="col-lg-6">
                        <div>
                            <h2 className="mdrn">MODERN COMPNAY</h2>
                            <h2 className="hlp">Your Supercharged <br /> Design Workflow.</h2>
                            <p className="pfull">We’ve been told it is not possible to overachieve our customers’ <br /> expectations. We have not reinvented the wheel, we decided to build upon it.</p>
                            <div style={{marginBottom: '40px'}}>
                                <a href="/" className="consltonee" role={Button}>Get Started</a>
                            </div>
                            <div>
                                <h2 className="us">Who supports us</h2>
                            </div>
                            <div style={{display:'flex',gap:'30px',flexWrap:'wrap'}}>
                                <div>
                                    <img src={Gitlab} alt="" />
                                </div>
                                <div>
                                    <img src={Slack} alt="" />
                                </div>
                                <div>
                                    <img src={Netflix} alt="" />
                                </div>
                                <div>
                                    <img src={Paypal} alt="" />
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="offset-lg-1 col-lg-5">
                        <div className="">
                            <img src={Pic} alt="" className="pict" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Firstcec;