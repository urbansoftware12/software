import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Firstsecc from "../components/brandingcomponents/first-secc";
import './branding.css';
import Secondsecc from "../components/brandingcomponents/second-secc";
import Thirdsecc from "../components/brandingcomponents/third-secc";

function Brandingpage(){
    return(
        <div className="brndingpage">
            <Header/>
            <Firstsecc/>
            <Secondsecc/>
            <Thirdsecc/>
            <Footer/>
        </div>
    )
}

export default Brandingpage;