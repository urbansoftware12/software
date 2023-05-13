import React from "react";
import Hader from "../components/header/header";
import Footer from "../components/footer/footer";
import Firstnews from "../components/insightnews/firstnews";
function insightnewss(){
    return(
        <div className="insieght">
            <Hader/>
            <Firstnews/>
            <Footer/>
        </div>

    )
}
export default insightnewss;