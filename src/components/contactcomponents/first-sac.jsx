import React from "react";

import Whitelogo from '../../assets/s-cion.svg';
function Firstsac(){
    return(
        <div className="frstsac" >
            <div className="container-fluid contan" style={{paddingTop: '12%', paddingBottom: '12%', color: 'white', maxWidth: '1280px'}}>
                <div>
                <img src={Whitelogo} width="40"height="30"alt="React logo"/>
                </div>
                <h1 className="develop" style={{fontSize: 'clamp(1.125rem, 0.8571rem + 1.3393vw, 3rem)',fontWeight: '400', lineHeight: '48px'}}>Contact Us</h1>
            </div>
        </div>
    )
}
export default Firstsac;