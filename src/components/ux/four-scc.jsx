import React from "react";
import Incline from "../../assets/incline.svg";
import Dotleft from "../../assets/dotleft.svg";
import Dotright from "../../assets/dotright.svg";
function Fourscc(){
    return(
        <div className="forscc">
            <div className="container-fluid" style={{color: 'black'}}>
                <div style={{paddingTop:'80px',paddingBottom:'80px'}}>
                    <div className="text-center">
                        <h1 className="urbnwb" style={{marginBottom:'20px'}}>UX Design Process</h1>
                    </div>
                    <div className="botn" style={{display: 'flex', justifyContent: 'space-around', alignItems: 'baseline', flexWrap: 'wrap'}}>
                        <div className="text-center" style={{display:'block',paddingTop: '20px'}}>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <div className="round">1</div>
                            </div>
                            <div style={{paddingTop:'10px'}}>
                                <h2 style={{fontSize: '16px', fontFamily: 'Urbanist-regular', lineHeight: '20px', fontWeight: '500'}}>Analysis</h2>
                            </div>
                        </div>
                        <div>
                            <img src={Incline} alt="" />
                        </div>
                        <div className="text-center" style={{display:'block',paddingTop: '20px'}}>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <div className="round">2</div>
                            </div>
                            <div style={{paddingTop:'10px'}}>
                                <h2 style={{fontSize: '16px', fontFamily: 'Urbanist-regular', lineHeight: '20px', fontWeight: '500'}}>Interface <br/> Architecture</h2>
                            </div>
                        </div>
                        <div>
                            <img src={Incline} alt="" />
                        </div>
                        <div className="text-center" style={{display:'block',paddingTop: '20px'}}>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <div className="round">3</div>
                            </div>
                            <div style={{paddingTop:'10px'}}>
                                <h2 style={{fontSize: '16px', fontFamily: 'Urbanist-regular', lineHeight: '20px', fontWeight: '500'}}>Sketching & <br/> Wireframes</h2>
                            </div>
                        </div>
                        <div>
                            <img src={Incline} alt="" />
                        </div>
                        <div className="text-center" style={{display:'block',paddingTop: '20px'}}>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <div className="round">4</div>
                            </div>
                            <div style={{paddingTop:'10px'}}>
                                <h2 style={{fontSize: '16px', fontFamily: 'Urbanist-regular', lineHeight: '20px', fontWeight: '500'}}>Dynamic <br/> Prototype</h2>
                            </div>
                        </div>
                        <div>
                            <img src={Incline} alt="" />
                        </div>
                        <div className="text-center" style={{display:'block',paddingTop: '20px'}}>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <div className="round">5</div>
                            </div>
                            <div style={{paddingTop:'10px'}}> <h2 style={{fontSize: '16px', fontFamily: 'Urbanist-regular', lineHeight: '20px', fontWeight: '500'}}>Editing</h2></div>
                        </div>
                    </div>
                    {/* mobile */}
                <div className="row dnon">
                    <div className="offset-sm-4 col-sm-4">
                        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap:'wrap'}}>
                            <div className="text-center" style={{display:'block',width:'50%'}}>
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <div className="round">1</div>
                                </div>
                                <div style={{paddingTop:'10px'}}>
                                    <h2 style={{fontSize: '16px', fontFamily: 'Urbanist-regular', lineHeight: '20px', fontWeight: '500'}}>Design <br /> References</h2>
                                </div>
                            </div>
                            <div style={{paddingTop:'20px',width:'50%',display:'flex',justifyContent:'flex-start'}}>
                                <img src={Dotright} alt="" />
                            </div>
                            <div style={{paddingTop:'20px',width:'50%',display:'flex',justifyContent:'flex-end'}}>
                                <img src={Dotleft} alt="" />
                            </div>
                            <div className="text-center" style={{display:'block',width:'50%'}}>
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <div className="round">2</div>
                                </div>
                                <div style={{paddingTop:'10px'}}>
                                    <h2 style={{fontSize: '16px', fontFamily: 'Urbanist-regular', lineHeight: '20px', fontWeight: '500'}}>Graphics</h2>
                                </div>
                            </div>
                    
                            <div className="text-center" style={{display:'block',width:'50%'}}>
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <div className="round">3</div>
                                </div>
                                <div style={{paddingTop:'10px'}}>
                                    <h2 style={{fontSize: '16px', fontFamily: 'Urbanist-regular', lineHeight: '20px', fontWeight: '500'}}>Animate <br /> Prototypes</h2>
                                </div>
                            </div>
                            <div style={{paddingTop:'20px',width:'50%',display:'flex',justifyContent:'flex-start'}}>
                                <img src={Dotright} alt="" />
                            </div>
                            <div style={{paddingTop:'20px',width:'50%',display:'flex',justifyContent:'flex-end'}}>
                                <img src={Dotleft} alt="" />
                            </div>
                            <div className="text-center" style={{display:'block',width:'50%'}}>
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <div className="round">4</div>
                                </div>
                                <div style={{paddingTop:'10px'}}>
                                    <h2 style={{fontSize: '16px', fontFamily: 'Urbanist-regular', lineHeight: '20px', fontWeight: '500'}}>UI Guidelines</h2>
                                </div>
                            </div>
                    
                            <div style={{display:'flex',justifyContent:'flex-start', width:'100%'}}>
                            <div className="text-center" style={{display:'block',width:'50%'}}>
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <div className="round">5</div>
                                </div>
                                <div style={{paddingTop:'10px'}}> 
                                <h2 style={{fontSize: '16px', fontFamily: 'Urbanist-regular', lineHeight: '20px', fontWeight: '500'}}>Design Review</h2></div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* mobile */}
                </div>
                <div style={{paddingBottom:'80px'}}>
                <div className="text-center">
                    <h1 className="urbnwb" style={{marginBottom:'20px'}}>UI Design Process</h1>
                </div>
                <div className="botn" style={{display: 'flex', justifyContent: 'space-around', alignItems: 'baseline', flexWrap:'wrap'}}>
                    <div className="text-center" style={{display:'block',paddingTop: '20px'}}>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div className="round">1</div>
                        </div>
                        <div style={{paddingTop:'10px'}}>
                            <h2 style={{fontSize: '16px', fontFamily: 'Urbanist-regular', lineHeight: '20px', fontWeight: '500'}}>Design <br /> References</h2>
                        </div>
                    </div>
                    <div>
                        <img src={Incline} alt="" />
                    </div>
                    <div className="text-center" style={{display:'block',paddingTop: '20px'}}>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div className="round">2</div>
                        </div>
                        <div style={{paddingTop:'10px'}}>
                        <h2 style={{fontSize: '16px', fontFamily: 'Urbanist-regular', lineHeight: '20px', fontWeight: '500'}}>Graphics</h2>
                        </div>
                    </div>
                    <div>
                        <img src={Incline} alt="" />
                    </div>
                    <div className="text-center" style={{display:'block',paddingTop: '20px'}}>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div className="round">3</div>
                        </div>
                        <div style={{paddingTop:'10px'}}>
                        <h2 style={{fontSize: '16px', fontFamily: 'Urbanist-regular', lineHeight: '20px', fontWeight: '500'}}>Animate <br /> Prototypes</h2>
                        </div>
                    </div>
                    <div>
                        <img src={Incline} alt="" />
                    </div>
                    <div className="text-center" style={{display:'block',paddingTop: '20px'}}>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div className="round">4</div>
                        </div>
                        <div style={{paddingTop:'10px'}}>
                        <h2 style={{fontSize: '16px', fontFamily: 'Urbanist-regular', lineHeight: '20px', fontWeight: '500'}}>UI Guidelines</h2>
                        </div>
                    </div>
                    <div>
                        <img src={Incline} alt="" />
                    </div>
                    <div className="text-center" style={{display:'block',paddingTop: '20px'}}>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div className="round">5</div>
                        </div>
                       <div style={{paddingTop:'10px'}}> 
                       <h2 style={{fontSize: '16px', fontFamily: 'Urbanist-regular', lineHeight: '20px', fontWeight: '500'}}>Design Review</h2></div>
                    </div>
                </div>
                {/* mobile */}
                <div className="row dnon">
                    <div className="offset-sm-4 col-sm-4">
                        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap:'wrap'}}>
                            <div className="text-center" style={{display:'block',width:'50%'}}>
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <div className="round">1</div>
                                </div>
                                <div style={{paddingTop:'10px'}}>
                                    <h2 style={{fontSize: '16px', fontFamily: 'Urbanist-regular', lineHeight: '20px', fontWeight: '500'}}>Design <br /> References</h2>
                                </div>
                            </div>
                            <div style={{paddingTop:'20px',width:'50%',display:'flex',justifyContent:'flex-start'}}>
                                <img src={Dotright} alt="" />
                            </div>
                            <div style={{paddingTop:'20px',width:'50%',display:'flex',justifyContent:'flex-end'}}>
                                <img src={Dotleft} alt="" />
                            </div>
                            <div className="text-center" style={{display:'block',width:'50%'}}>
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <div className="round">2</div>
                                </div>
                                <div style={{paddingTop:'10px'}}>
                                    <h2 style={{fontSize: '16px', fontFamily: 'Urbanist-regular', lineHeight: '20px', fontWeight: '500'}}>Graphics</h2>
                                </div>
                            </div>
                    
                            <div className="text-center" style={{display:'block',width:'50%'}}>
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <div className="round">3</div>
                                </div>
                                <div style={{paddingTop:'10px'}}>
                                    <h2 style={{fontSize: '16px', fontFamily: 'Urbanist-regular', lineHeight: '20px', fontWeight: '500'}}>Animate <br /> Prototypes</h2>
                                </div>
                            </div>
                            <div style={{paddingTop:'20px',width:'50%',display:'flex',justifyContent:'flex-start'}}>
                                <img src={Dotright} alt="" />
                            </div>
                            <div style={{paddingTop:'20px',width:'50%',display:'flex',justifyContent:'flex-end'}}>
                                <img src={Dotleft} alt="" />
                            </div>
                            <div className="text-center" style={{display:'block',width:'50%'}}>
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <div className="round">4</div>
                                </div>
                                <div style={{paddingTop:'10px'}}>
                                    <h2 style={{fontSize: '16px', fontFamily: 'Urbanist-regular', lineHeight: '20px', fontWeight: '500'}}>UI Guidelines</h2>
                                </div>
                            </div>
                    
                            <div style={{display:'flex',justifyContent:'flex-start', width:'100%'}}>
                            <div className="text-center" style={{display:'block',width:'50%'}}>
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <div className="round">5</div>
                                </div>
                                <div style={{paddingTop:'10px'}}> 
                                <h2 style={{fontSize: '16px', fontFamily: 'Urbanist-regular', lineHeight: '20px', fontWeight: '500'}}>Design Review</h2></div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* mobile */}

                </div>
            </div>
        </div>
    )
}
export default Fourscc;