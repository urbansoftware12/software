import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Firstsecc from "../components/brandingcomponents/first-secc";
import './branding.css';

function Brandingpage(){
    return(
        <div className="brndingpage">
            <Header/>
            <Firstsecc/>
            <Footer/>
        </div>
    )
}

export default Brandingpage;