import React from "react";
// import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Firstsecc from "../components/brandingcomponents/first-secc";
import './branding.css';
import Secondsecc from "../components/brandingcomponents/second-secc";
import Thirdsecc from "../components/brandingcomponents/third-secc";
import Navber from "../components/navbar/navbar";

function Brandingpage(){
    return(
        <div className="brndingpage">
            {/* <Header/> */}
            <Navber/>
            <Firstsecc/>
            <Secondsecc/>
            <Thirdsecc/>
            <Footer/>
        </div>
    )
}

export default Brandingpage;