import React from "react";
import Hader from "../components/hader/hader";
import Footer from "../components/footer/footer";
import Privacypolicy from "../components/privacy/privacypolicy";

function Privacypolic(){
    return(
        <div className="prevacy">
            <Hader/>
            <Privacypolicy/>
            <Footer/>
        </div>
    )
}
export default Privacypolic;