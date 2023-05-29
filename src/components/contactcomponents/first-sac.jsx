import React from "react";

import Whitelogo from '../../assets/s-cion.svg';
function Firstsac(){
    return(
        <div className="frstsac" >
            <div className="container-fluid inovatbrandz" style={{color: 'white', maxWidth: '1280px',marginTop:'-85px'}}>
                <div>
                    <img src={Whitelogo} width="40"height="30"alt="React logo"/>
                </div>
                <h1 className="developweb" style={{fontWeight: '500'}}>Contact Us</h1>
            </div>
        </div>
    )
}
export default Firstsac;