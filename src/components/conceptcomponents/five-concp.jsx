import React from "react";
import Next from "../../assets/next.svg";
function Fiveconcp(){
    return(
        <div className="fivconcp" style={{backgroundColor:'#34A9FF'}}>
            <div className="container-fluid fullpre" style={{maxWidth:'1280px'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <div>
                        <h1 className="prepymnt">Full Prepayment</h1>
                    </div>
                    <div>
                        <img src={Next} alt="" className="iter"  srcset="" />
                    </div>
                </div>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:'60px'}}>
                    <div>
                        <h1 className="prepymnt">One Week</h1>
                    </div>
                    <div>
                        <img src={Next} alt="" className="iter" srcset="" />
                    </div>
                </div>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:'60px'}}>
                    <div>
                        <h1 className="prepymnt">One Iteration</h1>
                    </div>
                    <div>
                        <img src={Next} alt="" className="iter" srcset="" />
                    </div>
                </div>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:'60px'}}>
                    <div>
                        <h1 className="prepymnt">Best for Startups</h1>
                    </div>
                    <div>
                        <img src={Next} alt="" className="iter" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Fiveconcp;