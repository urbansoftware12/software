import React from "react";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import Firstsecs from "../components/marketingcomponents/first-secs";
import Secondsecs from "../components/marketingcomponents/second-secs";
import Thirdsecs from "../components/marketingcomponents/third-secs";
function Marketingpage (){
    return(
        <div className="mrket">
<Navbar/>
<Firstsecs/>
<Secondsecs/>
<Thirdsecs/>
<Footer/>
        </div>
    )
}
export default Marketingpage;