import React from "react";
import './concept.css';
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Firstconcp from "../components/conceptcomponents/first-concp";
import Secondconcp from "../components/conceptcomponents/second-concp";
import Thirdconcp from "../components/conceptcomponents/third-concp";
import Fourconcp from "../components/conceptcomponents/four-concp";
import Fiveconcp from "../components/conceptcomponents/five-concp";
import Sixconcp from "../components/conceptcomponents/six-concp";
import Sevenconcp from "../components/conceptcomponents/seven-concp";
import Eightconcp from "../components/conceptcomponents/eight-concp";
function Concept (){
    return(
        <div className="Cncept">
            <Navbar/>
            <Firstconcp/>
            <Secondconcp/>
            <Thirdconcp/>
            <Fourconcp/>
            <Fiveconcp/>
            <Sixconcp/>
            <Sevenconcp/>
            <Eightconcp/>
            <Footer/>

        </div>
    )
}
export default Concept;