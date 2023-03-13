import React from "react";
import Paison from "../../assets/pasion.jpg";
import Outsource from "../../assets/outsourced.jpg";
import Communication from "../../assets/communication.jpg";
import Light from "../../assets/light.svg";
function Secondsecs(){
    return(
        <div className="scndsecs">
            <div className="container-fluid" >
                <div className="row" style={{padding: '0px'}}>
                    <div className="col-lg-6" style={{padding: '0px'}}>
                        <div>
                            <img src={Paison} style={{width: '100%'}} height='500' alt=''/>
                        </div>
                    </div>
                    <div className="offset-lg-1 col-lg-4">
                        <div className="text-center mt-5 mb-5">
                            <img src={Light} alt=''/>
                        </div>
                        <div className="text-center">
                            <h2 style={{fontFamily: 'Urbanist-medium', fontSize: '20px', fontWeight: '500'}}>Marketing Strategy</h2>
                        </div>
                        <div className="text-center mt-3">
                            <p style={{fontSize: '16px', lineHeight: '24px', fontWeight: '400', color: '#000000', fontFamily: 'Urbanist-regular'}}>
                                Your marketing strategy, while only one part of your overall business planning, is arguably the most important. Without clear intent and fluid collaboration between the marketing team and the organization as a whole, meeting your goals can seem impossible. When you partner with Urban Thinkers we provide your team with impartial clarity in purpose by thinking constructively, challenging strategies and creating customized marketing strategies that push your budget to work harder and give you return on investment.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row" style={{padding: '0px'}}>
                <div className="offset-lg-1 col-lg-4">
                        <div className="text-center mt-5 mb-5">
                            <img src={Light} alt=''/>
                        </div>
                        <div className="text-center">
                            <h2 style={{fontFamily: 'Urbanist-medium', fontSize: '20px', fontWeight: '500'}}>Outsourced Marketing</h2>
                        </div>
                        <div className="text-center mt-3">
                            <p style={{fontSize: '16px', lineHeight: '24px', fontWeight: '400', color: '#000000', fontFamily: 'Urbanist-regular'}}>
                            Whether you need backup for your existing marketing team or high-end, solutions-based marketing consulting, Urban Thinkers is the right choice for you. With our team of experienced strategists, content writers, graphic designers, website and SEO experts we can function as your entire marketing department or as a consulting partner to businesses of any size and stage.
                            </p>
                        </div>
                    </div>
                    <div className="offset-lg-1 col-lg-6" style={{padding: '0px'}}>
                        <div>
                            <img src={Outsource} style={{width: '100%'}} height='500' alt=''/>
                        </div>
                    </div>
                    
                </div>
                <div className="row" style={{padding: '0px'}}>
                    <div className="col-lg-6" style={{padding: '0px'}}>
                        <div>
                            <img src={Communication} style={{width: '100%'}} height='500' alt=''/>
                        </div>
                    </div>
                    <div className="offset-lg-1 col-lg-4">
                        <div className="text-center mt-5 mb-5">
                            <img src={Light} alt=''/>
                        </div>
                        <div className="text-center">
                            <h2 style={{fontFamily: 'Urbanist-medium', fontSize: '20px', fontWeight: '500'}}>Marketing Communication</h2>
                        </div>
                        <div className="text-center mt-3">
                            <p style={{fontSize: '16px', lineHeight: '24px', fontWeight: '400', color: '#000000', fontFamily: 'Urbanist-regular'}}>
                            Your marketing strategy, while only one part of your overall business planning, is arguably the most important. Without clear intent and fluid collaboration between the marketing team and the organization as a whole, meeting your goals can seem impossible. When you partner with Urban Thinkers we provide your team with impartial clarity in purpose by thinking constructively, challenging strategies and creating customized marketing strategies that push your budget to work harder and give you return on investment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Secondsecs;