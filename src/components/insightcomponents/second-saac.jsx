import React from "react";
import Urbanblack from "../../assets/urbanblack.svg";
import { data } from "./second-saac-data";
import SecondSaacCard from "./second-saac-card";


function Secondsaac(){
    return(
        <div className="scndsaac">
            <div className="container-fluid" style={{maxWidth: '1280px', paddingTop: '50px', paddingBottom:'50px'}}>
                <div className="display-flex" style={{display: 'flex', alignItems: 'center',marginBottom:'20px'}}>
                    <div>
                        <img src= {Urbanblack} width="90" height="42" alt="logo"/>
                    </div>&nbsp;&nbsp;&nbsp;
                    <div style={{fontSize: '33px', lineHeight: '36px',fontFamily: 'Urbanist-regular',borderLeft: '2px solid #000000', paddingLeft: '15px',}}>
                        <h2>Insights</h2>
                    </div>
                </div>
                    <div className="row">
                        {
                            data.map(item=>{
                                return <SecondSaacCard img={item.img} title={item.title} link={item.link}/>
                            })
                        }
                    </div>
                
                <div className="text-center mt-4">
                    <h2><a href="blank" style={{color:'#349AFF'}} className="moore">Load More</a></h2>
                </div>
            </div>
        </div>
    )
}
export default Secondsaac;