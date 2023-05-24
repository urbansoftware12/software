import React from "react";
import conceptone from '../../assets/concept-1.svg';
import concepttwo from '../../assets/concept-2.svg';
import conceptthree from '../../assets/concept-3.svg';
import conceptfour from '../../assets/concept-4.svg';
function Thirdconcp(){
    return(
        <div className="thrdconcp">
            <div className="container-fluid" style={{maxWidth:'1280px',paddingTop:'120px',paddingBottom:'120px'}}>
                <div className="row">
                    <div className="col-lg-4">
                        <div>
                        <h1 className="redycncpt">What you'll <br/>get as a result</h1>
                        </div>
                        <div className="mt-4">
                            <button className="btn btn-primary cnpct">Order a Concept</button>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-6">
                                <div>
                                    <img src={conceptone} alt="" srcset="" />
                                </div>
                                <div className="mt-3">
                                    <h4 className="prsentable">Main Screen Design</h4>
                                </div>
                                <div className="mt-3">
                                    <p className="prodctinterface">Beautifully designed sections of your digital product interface, which can be demoed to shareholders and investors before production.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div>
                                    <img src={concepttwo} alt="" srcset="" />
                                </div>
                                <div className="mt-3">
                                    <h4 className="prsentable">Presentable content</h4>
                                </div>
                                <div className="mt-3">
                                    <p className="prodctinterface">The assets we design are ready for public display, can be included in your pitch decks, whitepapers, etc.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{marginTop:'50px'}}>
                            <div className="col-lg-6">
                                <div>
                                    <img src={conceptthree} alt="" srcset="" />
                                </div>
                                <div className="mt-3">
                                    <h4 className="prsentable">Pre-MVP Package</h4>
                                </div>
                                <div className="mt-3">
                                    <p className="prodctinterface">The elements we design can be easily translated into a real product MVP.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div>
                                    <img src={conceptfour} alt="" srcset="" />
                                </div>
                                <div className="mt-3">
                                    <h4 className="prsentable">Development-ready files</h4>
                                </div>
                                <div className="mt-3">
                                    <p className="prodctinterface">We equip the concept with simple a UI kit that allows you to experiment with colors and typography during the production phase.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Thirdconcp