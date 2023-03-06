import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Firstsect from "../components/servicecomponents/first-sect";
import Secondsect from "../components/servicecomponents/second-sect";
import './service.css';
import Thirdsect from "../components/servicecomponents/third-sect";

function Servicepage(){
    return(
        <div className="servisepage">
            <Header/>
            <Firstsect/>
            <Secondsect/>
            <Thirdsect/>
            <Footer/>
        </div>
    )
}

export default Servicepage;