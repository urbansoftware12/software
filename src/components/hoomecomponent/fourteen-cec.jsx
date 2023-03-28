import React from "react";
import Bitman from '../../assets/Bitman.png';
import Comma from '../../assets/comma.png';
function Fourteencec(){
    return(
        <div className="forteen" style={{backgroundColor:'#3A3C56'}}>
            <div className="container-fluid" style={{maxWidth:'1280px',paddingTop:'120px',paddingBottom:'120px'}}>
                <div className="row">
                    <div className="col-lg-6">
                        <div>
                            <img src={Bitman} style={{width:'100%'}} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="comm">
                            <img src={{Comma}} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Fourteencec;