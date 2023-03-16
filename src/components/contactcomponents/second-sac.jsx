import React from "react";
import {ReactComponent as Are} from '../../assets/are.svg';
function Secondsac(){
    return(
        <div className="scndsac">
            <div className="container-fluid" style={{maxWidth: '1280px', paddingTop: '7%', paddingBottom: '7%'}}>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="mt-4">
                            <h2 style={{fontSize: '32px', fontFamily: 'Urbanist-regular', fontWeight: '400', lineHeight: '43px', color: '#000000'}}>Urban Software &amp; Web Development<br/>500 4th St NW<br/>Suite 102 PMB 1958<br/>Albuquerque, NM 87102</h2>
                        </div>
                        <div className="mt-4">
                            <h2 style={{fontSize: '24px', fontFamily: 'Urbanist-regular', fontWeight: '400',color: 'black'}}><a href="mailto:admin@urbansoftware.tech" style={{color: 'black', textDecorationLine: 'none'}}>admin@urbansoftware.tech</a></h2>
                        </div>
                        <div className="mt-4">
                            <Are/>
                        </div>
                        <div className="mt-4">
			                <h2 style={{fontSize: '24px', fontFamily: 'Urbanist-regular', fontWeight: '400',color: 'black'}}>+1 (559) 554-0082</h2>
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