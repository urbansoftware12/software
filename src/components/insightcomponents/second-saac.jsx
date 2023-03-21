import React from "react";
import Urbanblack from "../../assets/urbanblack.svg";
import Investor from "../../assets/investor.png";
import {ReactComponent as Srchh} from '../../assets/srchh.svg';
function Secondsaac(){
    return(
        <div className="scndsaac">
            <div className="container-fluid" style={{maxWidth: '1280px', paddingTop: '50px', paddingBottom:'50px'}}>
                <div className="row">
                    <div className="col-lg-3 col-md-4">
                        <div className="display-flex" style={{display: 'flex', alignItems: 'center',marginBottom:'20px'}}>
                            <div>
                                <img src= {Urbanblack} width="90" height="42" alt="logo"/>
                            </div> &nbsp;&nbsp;&nbsp;&nbsp;
                            <div style={{fontSize: '33px', lineHeight: '36px', borderLeft: '2px solid #000000', paddingLeft: '15px', fontFamily: 'Urbanist-regular'}}>
                                <h2>Insights</h2>
                            </div>
                        </div>
                        <div className="botn">
                        <div style={{marginBottom: '20px'}}>
                            <div className="input-group" style={{maxWidth: '76%'}}>
                                <div className="input-group-prepend">
                                    <div className="input-group-text txxt">
                                        <Srchh/>
                                    </div>
                                </div>
                                <input type="text" className="form-control txat" placeholder="Search"/>
                            </div>
                        </div>
                        <div style={{marginBottom: '20px'}}>
                            <h2 style={{fontFamily: 'Urbanist-regular', fontSize: '16px'}}>
                                <a href="./" style={{color: 'black', textDecorationLine: 'none'}}>Web Development</a>
                            </h2>
                        </div>
                        <div style={{marginBottom: '20px'}}>
                            <h2 style={{fontFamily: 'Urbanist-regular', fontSize: '16px'}}>
                                <a href="./" style={{color: 'black', textDecorationLine: 'none'}}>Web Design</a>
                            </h2>
                        </div>
                        <div style={{marginBottom: '20px'}}>
                            <h2 style={{fontFamily: 'Urbanist-regular', fontSize: '16px'}}>
                                <a href="./" style={{color: 'black', textDecorationLine: 'none'}}>Mobile App Development</a>
                            </h2>
                        </div>
                        <div style={{marginBottom: '20px'}}>
                            <h2 style={{fontFamily: 'Urbanist-regular', fontSize: '16px'}}>
                                <a href="./" style={{color: 'black', textDecorationLine: 'none'}}>UI / UX Design</a>
                            </h2>
                        </div>
                        <div style={{marginBottom: '20px'}}>
                            <h2 style={{fontFamily: 'Urbanist-regular', fontSize: '16px'}}>
                                <a href="./" style={{color: 'black', textDecorationLine: 'none'}}>Creative Branding</a>
                            </h2>
                        </div>
                        <div style={{marginBottom: '20px'}}>
                            <h2 style={{fontFamily: 'Urbanist-regular', fontSize: '16px'}}>
                                <a href="./" style={{color: 'black', textDecorationLine: 'none'}}>Social Media Marketing</a>
                            </h2>
                        </div>
                        <div style={{marginBottom: '20px'}}>
                            <h2 style={{fontFamily: 'Urbanist-regular', fontSize: '16px'}}>
                                <a href="./" style={{color: 'black', textDecorationLine: 'none'}}>Content Marketing</a>
                            </h2>
                        </div>
                        <div style={{marginBottom: '20px'}}>
                            <h2 style={{fontFamily: 'Urbanist-regular', fontSize: '16px'}}>
                                <a href="./" style={{color: 'black', textDecorationLine: 'none'}}>Hosting Services</a>
                            </h2>
                        </div>
                        <div style={{marginBottom: '20px'}}>
                            <h2 style={{fontFamily: 'Urbanist-regular', fontSize: '16px'}}>
                                <a href="./" style={{color: 'black', textDecorationLine: 'none'}}>Search Engine Optimization</a>
                            </h2>
                        </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-9 col-md-8">
                        <div className="row">
                            <div className="col-lg-4">
                                <div style={{marginBottom: '20px'}}>
                                    <img src={Investor} className="vctor" alt="investor" />
                                </div>
                            </div>
                            <div className="col-lg-8">
                            <div className="">
                                <h2 className="dose">Does My App need Investors? Pros And cons of getting funded</h2>
                            </div>
                            <div className="botn">
                                <p className="sevral">
                                    Whether or not your app investors depends on several factors. If your app has the potential to reach a large market and requires a significant amount of funding to develop and market, investors may be necessary. Investors can provide financial...
                                </p>
                                <div>
                                    <h2><a href="/" className="moore">Learn More</a></h2>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div style={{marginBottom: '20px'}}>
                                    <img src={Investor} className="vctor" alt="investor" />
                                </div>
                            </div>
                            <div className="col-lg-8">
                            <div className="">
                                <h2 className="dose">Does My App need Investors? Pros And cons of getting funded</h2>
                            </div>
                            <div className="botn">
                                <p className="sevral">
                                Whether or not your app investors depends on several factors. If your app has the potential to reach a large market and requires a significant amount of funding to develop and market, investors may be necessary. Investors can provide financial...
                                </p>
                                <div>
                                <h2>
                                    <a href="/" className="moore">Learn More</a>
                                </h2>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div style={{marginBottom: '20px'}}>
                                    <img src={Investor} className="vctor" alt="investor" />
                                </div>
                            </div>
                            <div className="col-lg-8">
                            <div className="">
                                <h2 className="dose">Does My App need Investors? Pros And cons of getting funded</h2>
                            </div>
                            <div className="botn">
                                <p className="sevral">
                                Whether or not your app investors depends on several factors. If your app has the potential to reach a large market and requires a significant amount of funding to develop and market, investors may be necessary. Investors can provide financial...
                                </p>
                                <div>
                                <h2>
                                    <a href="/" className="moore">Learn More</a>
                                </h2>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div style={{marginBottom: '20px'}}>
                                    <img src={Investor} className="vctor" alt="investor" />
                                </div>
                            </div>
                            <div className="col-lg-8">
                            <div className="">
                                <h2 className="dose">Does My App need Investors? Pros And cons of getting funded</h2>
                            </div>
                            <div className="botn">
                                <p className="sevral">
                                Whether or not your app investors depends on several factors. If your app has the potential to reach a large market and requires a significant amount of funding to develop and market, investors may be necessary. Investors can provide financial...
                                </p>
                                <div>
                                <h2>
                                    <a href="/" className="moore">Learn More</a>
                                </h2>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div style={{marginBottom: '20px'}}>
                                    <img src={Investor} className="vctor" alt="investor" />
                                </div>
                            </div>
                            <div className="col-lg-8">
                            <div className="">
                                <h2 className="dose">Does My App need Investors? Pros And cons of getting funded</h2>
                            </div>
                            <div className="botn">
                                <p className="sevral">
                                Whether or not your app investors depends on several factors. If your app has the potential to reach a large market and requires a significant amount of funding to develop and market, investors may be necessary. Investors can provide financial...
                                </p>
                                <div>
                                <h2>
                                    <a href="/" className="moore">Learn More</a>
                                </h2>
                            </div>
                            </div>
                            
                        </div>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="text-center mt-4">
                    <h2><a href="blank" className="moore">Load More</a></h2>
                </div>
            </div>
        </div>
    )
}
export default Secondsaac;