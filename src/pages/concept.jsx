import React from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Firstconcp from "../components/conceptcomponents/first-concp";
import Secondconcp from "../components/conceptcomponents/second-concp";
import './concept.css';
import Thirdconcp from "../components/conceptcomponents/third-concp";
function Concept (){
    return(
        <div className="Cncept">
            <Navbar/>
            <Firstconcp/>
            <Secondconcp/>
            <Thirdconcp/>
            <Footer/>

        </div>
    )
}
export default Concept;