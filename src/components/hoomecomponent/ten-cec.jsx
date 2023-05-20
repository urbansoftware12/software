import React from "react";
// import Bitmapon from '../../assets/Bitmap1.png';
// import Bitmap2 from '../../assets/Bitmap2.png';
// import Bitmap3 from '../../assets/Bitmap3.png';
// import Bitmap4 from '../../assets/Bitmap4.png';
import { Button } from "react-bootstrap";
import Tabhoome from "./tabhoome";
function Tencec(){
    return(
        <div className="tncec" style={{backgroundColor:'#3A3C56'}}>
            <div className="container-fluid srvceltst">
                <div className="text-center">
                    <h2 className="mdrn">Service</h2>
                </div>
                <div className="text-center">
                    <h2 className="web" style={{color:'#FFFFFF'}}>Latest Work</h2>
                </div>

                {/* tab Start */}
                <div className="">
                    <Tabhoome/>
                </div>
                {/* tab Close */}
                <div className="text-center">
                <a href="/" className="consltoniet" style={{backgroundColor:'transparent',color:'#FFFFFF',border:'1px solid #FFFFFF',borderRadius:'3px'}} role={Button}>Explore More</a>
                </div>
            </div>
        </div>
    )
}
export default Tencec;