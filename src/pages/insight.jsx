import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Firstsaac from "../../src/components/insightcomponents/first-saac";
import Secondsaac from "../components/insightcomponents/second-saac";
function Insight(){
    return(
        <div className="nsight">
            <Header/>
            <Firstsaac/>
            <Secondsaac/>
            <Footer/>
        </div>
    )
}
export default Insight;