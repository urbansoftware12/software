import React from "react";
import Navber from "../../src/components/navber/navber";
import Footer from "../../src/components/footer/footer";
import Firstsac from "../../src/components/contactcomponents/first-sac";
import Secondsac from "../components/contactcomponents/second-sac";
import Thirdsac from "../components/contactcomponents/third-sac";
function Contact () {
    return(
        <div className="cntact">
<Navber/>
<Firstsac/>
<Secondsac/>
<Thirdsac/>
<Footer/>
        </div>
    )
}
export default Contact;