import React from "react";
import './hom.css';
import Hader from '../components/hader/hader';
import Footer from '../components/footer/footer';
import Firstcex from "../components/hom/first-cex";
import Secondcex from "../components/hom/second-cex";
import Fivecex from "../components/hom/five-cex";
function Hom(){
    return(
        <div className="hone">
<Hader/>
<Firstcex/>
<Secondcex/>
<Fivecex/>
<Footer/>
        </div>
    )
}
export default Hom;