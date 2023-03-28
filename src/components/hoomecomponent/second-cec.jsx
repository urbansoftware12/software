import React from "react";
import Pix from '../../assets/pix.png';
import { Button } from "react-bootstrap";
function Secondcec(){
    return(
        <div className="scndcec">
            <div className="container-fluid pixo" style={{maxWidth:'1280px'}}>
                <div className="row">
                    <div className="col-lg-5">
                        <div>
                            <img src={Pix} className="picts" alt="" />
                        </div>
                    </div>
                    <div className="offset-lg-1 col-lg-6">
                        <div>
                            <h2 className="mdrn">ABOUT</h2>
                        </div>
                        <div>
                            <h2 className="web">An Experience <br /> Web Company</h2>
                        </div>
                        <div>
                            <h2 className="range">Provides a full service range</h2>
                        </div>
                        <div>
                            <p className="pfulll" style={{color: 'rgba(0, 0, 0, 0.64)'}}>Here’s how our journey has built the solid foundation we <br /> have today of helping so many businesses succeed.</p>
                        </div>
                        <div style={{marginBottom: '20px'}}>
                            <a href="/" className="consltone" role={Button}>ABOUT US</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Secondcec;