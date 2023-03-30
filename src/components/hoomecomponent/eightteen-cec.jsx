import React from "react";
import { Button } from "react-bootstrap";
import Bitm1 from '../../assets/Bitm1.png';
import Bitm2 from '../../assets/Bitm2.png';
import Bitm3 from '../../assets/Bitm3.png';
function Eightteencec(){
    return(
        <div className="eghtteen">
            <div className="container-fluid" style={{maxWidth:'1280px',paddingTop:'120px',paddingBottom:'120px'}}>
                <div>
                    <h2 className="mdrn">OUR BLOG</h2>
                            
                </div>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'end',marginBottom:'30px'}}>
                    <div>
                        <h2 className="clent" style={{textAlign:'left',marginBottom:'0px'}}>Latest Blog <br /> Articles</h2>
                    </div>
                    <div>
                        <a href="/" className="frecntct btn" style={{padding:'11px 27px'}} role={Button}>Discover All</a>
                    </div>
                </div>
                <div className="row" style={{marginBottom:'20px'}}>
                    <div className="col-lg-4">
                        <div style={{marginBottom:'20px'}}>
                            <img src={Bitm1} height='224px' style={{width:'100%'}} alt="" />
                        </div>
                        <div>
                            <h2 className="stry">Stories</h2>
                            <h2 className="sorce">Agency is a business you <br /> hire to outsource</h2>
                            <h2 className="tme">5 Nov, 2021</h2>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div style={{marginBottom:'20px'}}>
                            <img src={Bitm2} height='224px' style={{width:'100%'}} alt="" />
                        </div>
                        <div>
                            <h2 className="stry">Design</h2>
                            <h2 className="sorce">Outsource your digital <br /> marketing efforts</h2>
                            <h2 className="tme">29 Oct, 2021</h2>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div style={{marginBottom:'20px'}}>
                            <img src={Bitm3} height='224px' style={{width:'100%'}} alt="" />
                        </div>
                        <div>
                            <h2 className="stry">Marketing</h2>
                            <h2 className="sorce">Your business with a <br /> variety of digital</h2>
                            <h2 className="tme">21 Oct, 2021</h2>
                        </div>
                    </div>
                </div>
                <hr style={{borderTop:'1px solid #34A9FF',opacity:'5',marginTop:'50px',marginBottom:'20px'}}/>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:'60px'}}>
                    <div>
                        <h2 className="assk">Newsletter</h2>
                    </div>
                    <div>
                        <div style={{display:'flex',gap:'10px'}}>
                            <div>
                                <input type="text" className="form-control-lg" style={{border:'1px solid #34A9FF',fontFamily:'Urbanist-regular'}} placeholder="Your email"/>
                            </div>
                            <div>
                                <button className="btn btn-primary" style={{padding:'11px 30px',background:'#34A9FF',border:'1px solid #34A9FF'}}>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Eightteencec;