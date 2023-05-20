import React from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Firstseec from "../components/choosecomponents/first-seec";
import './choose.css';
import Secondseec from "../components/choosecomponents/second-seec";
import Thirdseec from "../components/choosecomponents/third-seec";
import Fourseec from "../components/choosecomponents/four-seec";

function Choosepage(){
    return(
        <div className="chosepage">
            <Navbar/>
            <Firstseec/>
            <Secondseec/>
            <Thirdseec/>
            <Fourseec/>
            <Footer/>
        </div>
    )
}
export default Choosepage;