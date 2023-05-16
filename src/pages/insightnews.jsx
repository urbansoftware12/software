import React from "react";
import Hader from "../components/header/header";
import Footer from "../components/footer/footer";
import Firstnews from "../components/insightnews/firstnews";
import { useLocation } from 'react-router-dom';
import SecondNews from "../components/insightnews/secondnews";
import ThirdNews from "../components/insightnews/thirdnews";

function Insightnewss(){
    const location = useLocation();
  const index = new URLSearchParams(location.search).get('index');
    return(
        <div className="insieght">
            <Hader/>
            {index==1?<Firstnews/>:index==2?<SecondNews/>:index==3?<ThirdNews/>:null}
            <Footer/>
        </div>

    )
}
export default Insightnewss;