import React from "react";
import Paison from "../../assets/pasion.jpg";
import Outsource from "../../assets/outsourced.jpg";
import Communication from "../../assets/communication.jpg";
import Pen from "../../assets/pen.svg";
import Blb from "../../assets/blb.svg";
import Rta from "../../assets/rta.svg";
function Secondsecs(){
    return(
        <div className="scndsecs">
            <div className="container-fluid" >
                <div className="row flxrevrse" style={{padding: '0px'}}>
                    <div className="col-lg-6" style={{padding: '0px'}}>
                        <div>
                            <img src={Paison} className="pasoimg" height='500' alt=''/>
                        </div>
                    </div>
                    <div className="offset-lg-1 col-lg-4 comuni">
                        <div className="text-center" style={{marginBottom: '20px'}}>
                            <img src={Pen} width='52.42' height='52.42' alt=''/>
                        </div>
                        <div className="text-center" style={{marginBottom: '20px'}}>
                            <h2 className="stratgy">Marketing Strategy</h2>
                        </div>
                        <div className="text-center">
                            <p className="stratgypara">
                                Your marketing strategy, while only one part of your overall business planning, is arguably the most important. Without clear intent and fluid collaboration between the marketing team and the organization as a whole, meeting your goals can seem impossible. When you partner with Urban Thinkers we provide your team with impartial clarity in purpose by thinking constructively, challenging strategies and creating customized marketing strategies that push your budget to work harder and give you return on investment.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row" style={{padding: '0px'}}>
                <div className="offset-lg-1 col-lg-4 comuni">
                        <div className="text-center" style={{marginBottom: '20px'}}>
                            <img src={Blb} width='52.42' height='52.42' alt=''/>
                        </div>
                        <div className="text-center" style={{marginBottom: '20px'}}>
                            <h2 className="stratgy">Outsourced Marketing</h2>
                        </div>
                        <div className="text-center">
                            <p className="stratgypara">
                            Whether you need backup for your existing marketing team or high-end, solutions-based marketing consulting, Urban Thinkers is the right choice for you. With our team of experienced strategists, content writers, graphic designers, website and SEO experts we can function as your entire marketing department or as a consulting partner to businesses of any size and stage.
                            </p>
                        </div>
                    </div>
                    <div className="offset-lg-1 col-lg-6" style={{padding: '0px'}}>
                        <div>
                            <img src={Outsource} className="pasoimg" height='500' alt=''/>
                        </div>
                    </div>
                    
                </div>
                <div className="row flxrevrse" style={{padding: '0px'}}>
                    <div className="col-lg-6" style={{padding: '0px'}}>
                        <div>
                            <img src={Communication} className="pasoimg" height='500' alt=''/>
                        </div>
                    </div>
                    <div className="offset-lg-1 col-lg-4 comuni">
                        <div className="text-center" style={{marginBottom: '20px'}}>
                            <img src={Rta} width='52.42' height='52.42'  alt=''/>
                        </div>
                        <div className="text-center" style={{marginBottom: '20px'}}>
                            <h2 className="stratgy">Marketing Communication</h2>
                        </div>
                        <div className="text-center ">
                            <p className="stratgypara">
                                Your marketing strategy, while only one part of your overall business planning, is arguably the most important. Without clear intent and fluid collaboration between the marketing team and the organization as a whole, meeting your goals can seem impossible. When you partner with Urban Thinkers we provide your team with impartial clarity in purpose by thinking constructively, challenging strategies and creating customized marketing strategies that push your budget to work harder and give you return on investment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Secondsecs;