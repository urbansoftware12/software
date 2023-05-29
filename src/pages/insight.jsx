import React from "react";
import Navber from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Firstsaac from "../../src/components/insightcomponents/first-saac";
import Secondsaac from "../components/insightcomponents/second-saac";
function Insight(){
    return(
        <div className="nsight">
            <Navber/>
            <Firstsaac/>
            <Secondsaac/>
            <Footer/>
        </div>
    )
}
export default Insight;