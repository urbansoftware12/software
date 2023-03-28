import React from "react";
import Video from "../../assets/video.png"
function Fivecec(){
    return(
        <div className="fivcec">
            <div className="container-fluid" style={{maxWidth:'1280px',paddingTop: '120px', paddingBottom: '120px'}}>
            <div className="row">
                <div className="col-lg-6">
                    <div>
                        <img src={Video} alt="" style={{width:'100%'}} srcset="" />
                    </div>
                </div>
                    <div className="col-lg-6">
                    <div className="mt-5">
                            <h2 className="mdrn">VIDEO REEL</h2>
                        </div>
                        <div>
                            <h2 className="web">Unlock The Greatest <br /> Value Possible</h2>
                        </div>
                        <div>
                            <p className="busi" style={{color: 'rgba(0, 0, 0, 0.64)'}}>Design, business understanding, ability to put themselves <br /> in the merchant's shoes meant to partner.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Fivecec;