import React from "react";
function Fivecec(){
    return(
        <div className="fivcec">
            <div className="container-fluid" style={{maxWidth:'1280px',paddingTop: '120px', paddingBottom: '60px'}}>
            <div className="row">
                <div className="col-lg-5">
                    <div>
                    <video
                            autoPlay={true}
                            muted={true}
                            loop={true}
                            playsInline={true}
                            preload="auto"
                            poster="https://ncx.cx/images/ncx_mainvideo_poster.png"
                            width="320"
                        >
                            <source src={require('../../assets/vid.mp4')} type="video/mp4" />
                        </video>
                        {/* <video>
                            <source src={Video} type="video/mp4" />
                        </video> */}
                    </div>
                </div>
                    <div className="offset-lg-1 col-lg-6">
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