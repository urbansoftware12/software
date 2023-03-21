import React from "react";
import Contactarrow from '../../assets/contact-arrow.svg';
function Secondsac(){
    return(
        <div className="scndsac">
            <div className="container-fluid nwtown" style={{maxWidth: '1280px'}}>
                <div className="row">
                    <div className="col-lg-6">
                        <div style={{marginBottom: '20px'}}>
                            <h2 className="contctsftwr">Urban Software &amp; Web Development<br/>500 4th St NW<br/>Suite 102 PMB 1958<br/>Albuquerque, NM 87102</h2>
                        </div>
                        <div style={{marginBottom: '20px'}}>
                            <h2 className="contctlink">
                                <a href="mailto:admin@urbansoftware.tech" style={{color: '#000000',textDecorationLine: 'none'}}>admin@urbansoftware.tech</a>
                            </h2>
                        </div>
                        <div style={{marginBottom: '20px'}}>
                            <img src={Contactarrow} style={{width: '100%', height: '75%', maxWidth: '36px'}} alt="" srcset="" />
                        </div>
                        <div>
			                <h2 className="phone">
                                <a href="tel:+1%20559%20554%200082" style={{color: '#000000',textDecorationLine: 'none'}}>+1 (559) 554-0082</a>
                            </h2>
                        </div>
                    </div>
                    <div className="offset-lg-1 col-lg-6">
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Secondsac;