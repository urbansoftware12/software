import React from "react";
import SevenConcpCard from "./seven-concp-card";
import {data} from "./seven-concp-data";
function Sevenconcp(){
    return(
        <div className="svenconcp">
            <div className="container-fluid" style={{maxWidth:'1280px',paddingTop:'50px',paddingBottom:'100px'}}>
                <div className="">
                    <h1 className="redycncpt">Design add-ons</h1>
                </div>
                <div className="row">
                    {
                        data.map(item=>{
                            return <SevenConcpCard had={item.had} title={item.title} paraa={item.paraa} parab={item.parab} parac={item.parac} parad={item.parad}/>
                        })
                    }
                    {/* <div className="col-lg-6 mt-4">
                        <div class="design__addson">
                            <div class="inner_div">
                                <h3>Webflow implementation</h3>
                                <p class="txxxt">The concept will be developed by our team on Webflow.</p>
                                <div class="valuess_dd">
                                    <div class="time_price">
                                        <p className="esti">Estimated Time</p>
                                        <p className="esti"><strong>2-3 weeks</strong></p>
                                    </div>
                                    <div class="time_price">
                                        <p className="esti">Price</p>
                                        <p className="esti"><strong>$3,000</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-4">
                        <div class="design__addson">
                            <div class="inner_div">
                                <h3>Branding</h3>
                                <p>We will create a lower-end branding package including a logo, a typographic pair, and a set of brand colors.</p>
                                <div class="valuess_dd">
                                    <div class="time_price">
                                        <p className="esti">Estimated Time</p>
                                        <p className="esti"><strong>3-5 days</strong></p>
                                    </div>
                                    <div class="time_price">
                                        <p className="esti">Price</p>
                                        <p className="esti"><strong>$2,000</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                {/* <div className="row">
                    <div className="col-lg-6 mt-4">
                        <div class="design__addson">
                            <div class="inner_div">
                                <h3>Extended Concept</h3>
                                <p class="txxxt">We will increase the number of screens to cover more features. Works for larger scale-up concepts</p>
                                <div class="valuess_dd">
                                    <div class="time_price">
                                        <p className="esti">Estimated Time</p>
                                        <p className="esti"><strong>2 days</strong></p>
                                    </div>
                                    <div class="time_price">
                                        <p className="esti">Price</p>
                                        <p className="esti"><strong>$1,500</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-4">
                        <div class="design__addson">
                            <div class="inner_div">
                                <h3>Hero Illustration</h3>
                                <p>We will create a custom 2D or 3D illustration capturing the essence of the concept or a specific feature.</p>
                                <div class="valuess_dd">
                                    <div class="time_price">
                                        <p className="esti">Estimated Time</p>
                                        <p className="esti"><strong>1-2 days</strong></p>
                                    </div>
                                    <div class="time_price">
                                        <p className="esti">Price</p>
                                        <p className="esti"><strong>$1,500</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 mt-4">
                        <div class="design__addson">
                            <div class="inner_div">
                                <h3>Graphics</h3>
                                <p class="txxxt">We will create custom smaller-scale illustrations or icons to support the design assets across the page.</p>
                                <div class="valuess_dd">
                                    <div class="time_price">
                                        <p className="esti">Estimated Time</p>
                                        <p className="esti"><strong>1 day</strong></p>
                                    </div>
                                    <div class="time_price">
                                        <p className="esti">Price</p>
                                        <p className="esti"><strong>$500</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-4">
                        <div class="design__addson">
                            <div class="inner_div">
                                <h3>Dark/Light theme</h3>
                                <p>We will design a contrasting dark or light extra theme for the initial set of screens.</p>
                                <div class="valuess_dd">
                                    <div class="time_price">
                                        <p className="esti">Estimated Time</p>
                                        <p className="esti"><strong>1 day</strong></p>
                                    </div>
                                    <div class="time_price">
                                        <p className="esti">Price</p>
                                        <p className="esti"><strong>$500</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 mt-4">
                        <div class="design__addson">
                            <div class="inner_div">
                                <h3>Revision</h3>
                                <p class="txxxt">We will introduce an intermediary design hand-off for you to suggest specific changes if required.</p>
                                <div class="valuess_dd">
                                    <div class="time_price">
                                        <p className="esti">Estimated Time</p>
                                        <p className="esti"><strong>1 day</strong></p>
                                    </div>
                                    <div class="time_price">
                                        <p className="esti">Price</p>
                                        <p className="esti"><strong>$500</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-4">
                        <div class="design__addson">
                            <div class="inner_div">
                                <h3>Responsive</h3>
                                <p>We will create versions of the concept for different screen sizes. Included by default in the Webflow implementation add-on.</p>
                                <div class="valuess_dd">
                                    <div class="time_price">
                                        <p className="esti">Estimated Time</p>
                                        <p className="esti"><strong>1 day</strong></p>
                                    </div>
                                    <div class="time_price">
                                        <p className="esti">Price</p>
                                        <p className="esti"><strong>$500</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
export default Sevenconcp;