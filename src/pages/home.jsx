import Navber from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import Firstsec from '../components/homecomponents/first-sec';
import Secondsec from '../components/homecomponents/second-sec';
import Thirdsec from '../components/homecomponents/third-sec';
import Foursec from '../components/homecomponents/four-sec';
import React from 'react';
import './home.css';
function Homepage()
{
    return(
        <div className="homepage">
            <Navber />
            <Firstsec/>
            <Secondsec/>
            <Thirdsec/>
            
            <Foursec/>
            <Footer/>
        </div>
    )
}
export default Homepage;