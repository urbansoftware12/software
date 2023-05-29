import React from "react";
import Sftwr from "../../assets/sftwr.png"
function Firstseec() {
    return(
        <div className="frstseec">
            <div className="container-fluid inovatbrnd" style={{maxWidth: '1280px',marginTop:'-85px'}}>
                <div className="row">
                    <div className="col-lg-5">
                        <div className="mt-2">
                        <h2 className="whowe">Who we are</h2>
                        <p className="whopara">
                            Urban Software, the home of creative design solutions. We offer smart web design for smarter businesses, so whatever your needs get in touch today. We are serving across the globe and we help business to accelerate their sales, We create custom strategies for each of our clients based on their needs and goals, Our focus is to make people aware the vast and growing power of today's new digital capabilities and provide them high quality products and services.
                        </p>
                        </div>
                    </div>
                    <div className="offset-lg-1 col-lg-6">
                        <img src={Sftwr} style={{width: '100%', maxWidth: '900px'}} alt="imag"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Firstseec;