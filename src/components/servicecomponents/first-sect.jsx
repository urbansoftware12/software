import React from "react";
import Whitelogo from '../../assets/s-cion.svg';
function Firstsect() {
    return(
        <div className="frstsec">
            <div className="container-fluid conn" style={{maxWidth:'1280px',marginTop:'-85px'}}>
                <div>
                    <img src={Whitelogo} width="40"height="30"alt="React logo"/>
                </div>
                <h1 className="delop">Premier Software <br/> Development Services </h1>
            </div>
        </div>
    )
}
export default Firstsect;