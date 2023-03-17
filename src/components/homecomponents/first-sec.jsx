import React from "react";
import Whitelogo from '../../assets/s-cion.svg';
function Firstsec ()
{
    return(
        <div className="frstsec" >
            <div className="container-fluid contan">
                <div style={{marginBottom: '10px'}}>
                <img src={Whitelogo} width="40"height="30"alt="React logo"/>
                </div>
                <h1 className="developweb">Web Development</h1>
            </div>
        </div>
    )
}
export default Firstsec;