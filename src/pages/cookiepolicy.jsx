import React from "react";
import Hader from "../components/hader/hader";
import Footer from "../components/footer/footer";
import Cookiespolicy from "../components/cookie/cookiespolicy";
function Cookies(){
    return(
        <div className="cookes">
            <Hader/>
            <Cookiespolicy/>
            <Footer/>

        </div>
    )
}
export default Cookies;