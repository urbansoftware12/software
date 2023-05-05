import React from "react";
import Bitman from '../../assets/Bitman.png';
import Comma from '../../assets/comma.png';
function Fourteencec(){
    return(
        <div className="forteen" style={{backgroundColor:'#3A3C56'}}>
            <div className="container-fluid wordfinder" >
                <div className="row">
                    <div className="col-lg-6">
                        <div>
                            <img src={Bitman} style={{width:'100%'}} alt="" />
                        </div>
                    </div>
                    <div className="offset-lg-1 col-lg-5">
                        <div style={{position:'relative'}}>
                        <img src={Comma} className="foundr"alt="" />
                            <div style={{position:'absolute',top:'50px'}}>
                                <div style={{marginBottom:'20px'}}>
                                <h2 className="mdrn">Founder Words</h2>
                                </div>
                                <h2 className="txt">Digital agency is a <br /> business you hire to outsource your digital marketing efforts</h2>
                            </div>
                        </div>
                        <div>
                        <div style={{marginTop:'170px'}}>
                                <h2 className="mdrnn">Ren Delan</h2>
                                </div>
                                <h2 className="mdron">Founder</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Fourteencec;