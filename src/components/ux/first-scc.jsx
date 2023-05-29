import React from "react";
import Whitelogo from '../../assets/s-cion.svg';
function Firstscc (){
    return(
        <div className="frstsec">
            <div className="container-fluid conn" style={{maxWidth:'1280px', marginTop:'-85px'}}>
                <div>
                    <img src={Whitelogo} width="40"height="30"alt="React logo"/>
                </div>
                <h1 className="developweb" style={{color: '#FFFFFF'}}>UI and UX Design Service</h1>
            </div>
        </div>
    )
}
export default Firstscc;