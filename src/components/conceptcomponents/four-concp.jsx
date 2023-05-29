import React from "react";
import Hood from "../../assets/hood.png"
import Progrs from "../../assets/progras.webp";
function Fourconcp(){
    return(
        <div className="forconcp">
            <div className="container-fluid partial" style={{maxWidth:'1280px'}}>
                <div>
                    <h1 className="redycncpt">Partial Cases</h1>
                </div>
                <div className="row" style={{marginTop:'50px'}}>
                    <div className="col-lg-5">
                        <div>
                            <h3 className="prsentable">One-stop Online Solution For Designer Apparel Store</h3>
                        </div>
                        <div className="mt-4">
                            <img src={Hood} alt="" style={{width:'100%'}} srcset="" />
                        </div>
                        <div className="mt-3">
                            <p className="prodctinterface">Create a concept of a mobile app for a startup in the exceptional Fashion brand.</p>
                        </div>
                        <div>
                            <h4 style={{color:'#1f1f2f'}}>Results</h4>
                        </div>
                        <div className="mt-4">
                            <p className="prodctinterface">4 presentation screens designed with detailed dashboard states.</p>
                        </div>
                        <div>
                            <ul style={{paddingLeft:'0rem'}}>
                                <li className="listpra">→ Animated presentation-ready asset</li>
                                <li className="listpra">→ Design of 4 main screens</li>
                                <li className="listpra">→ Ready for MVP implementation</li>
                                <li className="listpra">→ Figma files with all the assets</li>
                            </ul>
                        </div>
                    </div>
                    <div className="offset-lg-1 col-lg-6">
                        <div>
                            <h3 className="prsentable">Smart Home App Promo Page</h3>
                        </div>
                        <div className="mt-4">
                        <video
                            autoPlay={true} muted={true} loop={true} playsInline={true} preload="auto" poster="https://ncx.cx/images/ncx_mainvideo_poster.png" style={{width:'100%'}}>
                            <source src={require('../../assets/animation.webm')} type="video/webm" />
                        </video>
                        </div>
                        <div className="mt-3">
                            <p className="prodctinterface">The elements we design can be easily translated into a real product MVP.</p>
                        </div>
                        <div>
                            <h4 style={{color:'#1f1f2f'}}>Results</h4>
                        </div>
                        <div className="mt-4">
                            <p className="prodctinterface">Created a five-slide flow displaying the product. Designed animated transitions for further use.</p>
                        </div>
                        <div>
                            <ul style={{paddingLeft:'0rem'}}>
                                <li className="listpra">→ Animated presentation-ready asset</li>
                                <li className="listpra">→ Design of 4 block of the landing page</li>
                                <li className="listpra">→ Figma files with all the assets</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row" style={{marginTop:'50px'}}>
                    <div className="col-lg-6">
                        <div>
                            <h3 className="prsentable">Mobile app development for healthcare</h3>
                        </div>
                        <div className="mt-4">
                        <video
                            autoPlay={true} muted={true} loop={true} playsInline={true} preload="auto" poster="https://ncx.cx/images/ncx_mainvideo_poster.png" style={{width:'100%'}}>
                            <source src={require('../../assets/animation-1.webm')} type="video/webm" />
                        </video>
                        </div>
                        <div className="mt-3">
                            <p className="prodctinterface">Design a concept of a mobile healthcare app following the provided Brand Style Guide.</p>
                        </div>
                        <div>
                            <h4 style={{color:'#1f1f2f'}}>Results</h4>
                        </div>
                        <div className="mt-4">
                            <p className="prodctinterface">Designed a 4-screen concept readily available for further development.</p>
                        </div>
                        <div>
                            <ul style={{paddingLeft:'0rem'}}>
                                <li className="listpra">→ Design of 4 main screens</li>
                                <li className="listpra">→ Presentation ready asset</li>
                                <li className="listpra">→ Figma files with all the assets</li>
                            </ul>
                        </div>
                    </div>
                    <div className="offset-lg-1 col-lg-5">
                        <div>
                            <h3 className="prsentable">Mobile marketing solution</h3>
                        </div>
                        <div className="mt-4">
                            <img src={Progrs} alt="" style={{width:'100%'}} srcset="" />
                        </div>
                        <div className="mt-3">
                            <p className="prodctinterface">Design a concept of a task tracker dashboard</p>
                        </div>
                        <div>
                            <h4 style={{color:'#1f1f2f'}}>Results</h4>
                        </div>
                        <div className="mt-4">
                            <p className="prodctinterface">4 presentation screens designed with detailed dashboard states.</p>
                        </div>
                        <div>
                            <ul style={{paddingLeft:'0rem'}}>
                                <li className="listpra">→ Dashboard main screen design</li>
                                <li className="listpra">→ Presentation-ready visuals</li>
                                <li className="listpra">→ UI components for further use</li>
                                <li className="listpra">→ Figma files with all the assets</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Fourconcp;