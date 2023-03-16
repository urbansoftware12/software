import React from "react";
import Incline from "../../assets/incline.svg";
function Fourscc(){
    return(
        <div className="forscc">
            <div className="container-fluid contan" style={{color: 'black', paddingTop: '9%', paddingBottom: '9%'}}>
                <div className="text-center">
                    <h1 className="develop">UX Design Process</h1>
                </div>
                <div className="mt-5" style={{display: 'flex', justifyContent: 'space-around', alignItems: 'baseline'}}>
                    <div className="text-center" style={{display:'block'}}>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div className="round">1</div>
                        </div>
                        <div className="mt-2">
                            <h2 style={{fontSize: '16px', fontFamily: 'Urbanist-regular', lineHeight: '20px', fontWeight: '500'}}>Analysis</h2>
                        </div>
                    </div>
                    <div>
                        <img src={Incline} alt="" />
                    </div>
                    <div className="text-center" style={{display:'block'}}>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div className="round">2</div>
                        </div>
                        <div className="mt-2">
                        <h2 style={{fontSize: '16px', fontFamily: 'Urbanist-regular', lineHeight: '20px', fontWeight: '500'}}>Interface <br/> Architecture</h2>
                        </div>
                    </div>
                    <div>
                        <img src={Incline} alt="" />
                    </div>
                    <div className="text-center" style={{display:'block'}}>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div className="round">3</div>
                        </div>
                        <div className="mt-2">
                        <h2 style={{fontSize: '16px', fontFamily: 'Urbanist-regular', lineHeight: '20px', fontWeight: '500'}}>Sketching & <br/> Wireframes</h2>
                        </div>
                    </div>
                    <div>
                        <img src={Incline} alt="" />
                    </div>
                    <div className="text-center" style={{display:'block'}}>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div className="round">4</div>
                        </div>
                        <div className="mt-2">
                        <h2 style={{fontSize: '16px', fontFamily: 'Urbanist-regular', lineHeight: '20px', fontWeight: '500'}}>Dynamic <br/> Prototype</h2>
                        </div>
                    </div>
                    <div>
                        <img src={Incline} alt="" />
                    </div>
                    <div className="text-center" style={{display:'block'}}>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div className="round">5</div>
                        </div>
                       <div className="mt-2"> <h2 style={{fontSize: '16px', fontFamily: 'Urbanist-regular', lineHeight: '20px', fontWeight: '500'}}>Editing</h2></div>
                    </div>
                </div>
                <div className="text-center mt-5">
                    <h1 className="develop">UI Design Process</h1>
                </div>
                <div className="mt-5" style={{display: 'flex', justifyContent: 'space-around', alignItems: 'baseline'}}>
                    <div className="text-center" style={{display:'block'}}>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div className="round">1</div>
                        </div>
                        <div className="mt-2">
                            <h2 style={{fontSize: '16px', fontFamily: 'Urbanist-regular', lineHeight: '20px', fontWeight: '500'}}>Design <br /> References</h2>
                        </div>
                    </div>
                    <div>
                        <img src={Incline} alt="" />
                    </div>
                    <div className="text-center" style={{display:'block'}}>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div className="round">2</div>
                        </div>
                        <div className="mt-2">
                        <h2 style={{fontSize: '16px', fontFamily: 'Urbanist-regular', lineHeight: '20px', fontWeight: '500'}}>Graphics</h2>
                        </div>
                    </div>
                    <div>
                        <img src={Incline} alt="" />
                    </div>
                    <div className="text-center" style={{display:'block'}}>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div className="round">3</div>
                        </div>
                        <div className="mt-2">
                        <h2 style={{fontSize: '16px', fontFamily: 'Urbanist-regular', lineHeight: '20px', fontWeight: '500'}}>Animate <br /> Prototypes</h2>
                        </div>
                    </div>
                    <div>
                        <img src={Incline} alt="" />
                    </div>
                    <div className="text-center" style={{display:'block'}}>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div className="round">4</div>
                        </div>
                        <div className="mt-2">
                        <h2 style={{fontSize: '16px', fontFamily: 'Urbanist-regular', lineHeight: '20px', fontWeight: '500'}}>UI Guidelines</h2>
                        </div>
                    </div>
                    <div>
                        <img src={Incline} alt="" />
                    </div>
                    <div className="text-center" style={{display:'block'}}>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div className="round">5</div>
                        </div>
                       <div className="mt-2"> <h2 style={{fontSize: '16px', fontFamily: 'Urbanist-regular', lineHeight: '20px', fontWeight: '500'}}>Design Review</h2></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Fourscc;