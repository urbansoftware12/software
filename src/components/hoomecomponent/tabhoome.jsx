import { React, useState } from "react";
import Bitmapon from '../../assets/Bitmap1.png';
import Bitmap2 from '../../assets/Bitmap2.png';
import Bitmap3 from '../../assets/Bitmap3.png';
import Bitmap4 from '../../assets/Bitmap4.png';
import { Button } from "react-bootstrap";

function TabsSection()
{
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    return(
        <div className="tab_div">
            <div className="container" style={{marginBottom:'20px'}}>
                <div className="buttons row">
                    <div className="offset-md-3 col-md-6">
                        <div className="scroal">
                        <a style={{textDecoration:'none'}}
                        className={toggleState === 1 ? "tab_btn active" : "tab_btn"}
                        onClick={() => toggleTab(1)}
                    >
                    <span className="al">Show All &nbsp;<sup>14</sup></span>
                    </a>
                    <a style={{textDecoration:'none'}}
                        className={toggleState === 2 ? "tab_btn active" : "tab_btn"}
                        onClick={() => toggleTab(2)}
                    >
                    <span className="all">Design &nbsp;<sup>6</sup></span>
                    </a>
                    <a style={{textDecoration:'none'}}
                        className={toggleState === 3 ? "tab_btn active" : "tab_btn"}
                        onClick={() => toggleTab(3)}
                    >
                    <span className="all">Branding &nbsp;<sup>4</sup></span>
                    </a>
                    <a style={{textDecoration:'none'}}
                        className={toggleState === 4 ? "tab_btn active" : "tab_btn"}
                        onClick={() => toggleTab(4)}
                    >
                    <span className="all">Illustration &nbsp;<sup>3</sup></span>
                    </a>
                    <a style={{textDecoration:'none'}}
                        className={toggleState === 5 ? "tab_btn active" : "tab_btn"}
                        onClick={() => toggleTab(5)}
                    >
                    <span className="all">Motion &nbsp;<sup>1</sup></span>
                    </a>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <div className="ind__cont_tabs container-fluid" style={{maxWidth: '1280px'}}>
                    <div className={toggleState === 1 ? "tab__cont  active" : "tab__cont"}>
                    <div className="row haze">
                    <div className="col-lg-5 col-md-6 mt-2">
                        <div style={{position:"relative"}}>
                            <img src={Bitmapon} style={{width:'100%'}} alt="" />
                            <div style={{position:'absolute',bottom:'50px',left:'40px'}}>
                                <div style={{marginBottom:'20px'}}>
                                    <a href="/" className="consltoniet" style={{color:'#34A9FF',backgroundColor:'white',borderRadius:'100px'}} role={Button}>Design</a>
                                </div>
                                <h2 className="txt">Text</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6 mt-2">
                        <div style={{position:"relative"}}>
                            <img src={Bitmap2} style={{width:'100%'}} alt="" />
                            <div style={{position:'absolute',bottom:'50px',left:'40px'}}>
                                <div style={{marginBottom:'20px'}}>
                                    <a href="/" className="consltoniet" style={{color:'#34A9FF',backgroundColor:'white',borderRadius:'100px'}} role={Button}>Branding</a>
                                </div>
                                <h2 className="txt">Text</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{marginBottom:'40px'}}>
                    <div className="col-lg-7 col-md-7 mt-2">
                        <div style={{position:"relative"}}>
                            <img src={Bitmap3} style={{width:'100%'}} alt="" />
                            <div style={{position:'absolute',bottom:'50px',left:'40px'}}>
                                <div style={{marginBottom:'20px'}}>
                                    <a href="/" className="consltoniet" style={{color:'#34A9FF',backgroundColor:'white',borderRadius:'100px'}} role={Button}>Illustration</a>
                                </div>
                                <h2 className="txt">Text</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 mt-2">
                        <div style={{position:"relative"}}>
                            <img src={Bitmap4} style={{width:'100%'}} alt="" />
                            <div style={{position:'absolute',bottom:'50px',left:'40px'}}>
                                <div style={{marginBottom:'20px'}}>
                                    <a href="/" className="consltoniet" style={{color:'#34A9FF',backgroundColor:'white',borderRadius:'100px'}} role={Button}>Motion</a>
                                </div>
                                <h2 className="txt">Text</h2>
                            </div>
                        </div>
                    </div>
                    
                </div>
                       {/* <h1>Tab 1</h1> */}
                    </div>
                    <div className={toggleState === 2 ? "tab__cont  active" : "tab__cont"}>
                    <div className="row haze">
                    <div className="col-lg-5 col-md-6 mt-2">
                        <div style={{position:"relative"}}>
                            <img src={Bitmapon} style={{width:'100%'}} alt="" />
                            <div style={{position:'absolute',bottom:'50px',left:'40px'}}>
                                <div style={{marginBottom:'20px'}}>
                                    <a href="/" className="consltoniet" style={{color:'#34A9FF',backgroundColor:'white',borderRadius:'100px'}} role={Button}>Design</a>
                                </div>
                                <h2 className="txt">Text</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6 mt-2">
                        <div style={{position:"relative"}}>
                            <img src={Bitmap2} style={{width:'100%'}} alt="" />
                            <div style={{position:'absolute',bottom:'50px',left:'40px'}}>
                                <div style={{marginBottom:'20px'}}>
                                    <a href="/" className="consltoniet" style={{color:'#34A9FF',backgroundColor:'white',borderRadius:'100px'}} role={Button}>Branding</a>
                                </div>
                                <h2 className="txt">Text</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{marginBottom:'40px'}}>
                    <div className="col-lg-7 col-md-7 mt-2">
                        <div style={{position:"relative"}}>
                            <img src={Bitmap3} style={{width:'100%'}} alt="" />
                            <div style={{position:'absolute',bottom:'50px',left:'40px'}}>
                                <div style={{marginBottom:'20px'}}>
                                    <a href="/" className="consltoniet" style={{color:'#34A9FF',backgroundColor:'white',borderRadius:'100px'}} role={Button}>Illustration</a>
                                </div>
                                <h2 className="txt">Text</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 mt-2">
                        <div style={{position:"relative"}}>
                            <img src={Bitmap4} style={{width:'100%'}} alt="" />
                            <div style={{position:'absolute',bottom:'50px',left:'40px'}}>
                                <div style={{marginBottom:'20px'}}>
                                    <a href="/" className="consltoniet" style={{color:'#34A9FF',backgroundColor:'white',borderRadius:'100px'}} role={Button}>Motion</a>
                                </div>
                                <h2 className="txt">Text2</h2>
                            </div>
                        </div>
                    </div>
                    
                </div>
                        {/* <h1>Tab 2</h1> */}
                    </div>
                    <div className={toggleState === 3 ? "tab__cont  active" : "tab__cont"}>
                    <div className="row haze">
                    <div className="col-lg-5 col-md-6 mt-2">
                        <div style={{position:"relative"}}>
                            <img src={Bitmapon} style={{width:'100%'}} alt="" />
                            <div style={{position:'absolute',bottom:'50px',left:'40px'}}>
                                <div style={{marginBottom:'20px'}}>
                                    <a href="/" className="consltoniet" style={{color:'#34A9FF',backgroundColor:'white',borderRadius:'100px'}} role={Button}>Design</a>
                                </div>
                                <h2 className="txt">Text</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6 mt-2">
                        <div style={{position:"relative"}}>
                            <img src={Bitmap2} style={{width:'100%'}} alt="" />
                            <div style={{position:'absolute',bottom:'50px',left:'40px'}}>
                                <div style={{marginBottom:'20px'}}>
                                    <a href="/" className="consltoniet" style={{color:'#34A9FF',backgroundColor:'white',borderRadius:'100px'}} role={Button}>Branding</a>
                                </div>
                                <h2 className="txt">Text</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{marginBottom:'40px'}}>
                    <div className="col-lg-7 col-md-7 mt-2">
                        <div style={{position:"relative"}}>
                            <img src={Bitmap3} style={{width:'100%'}} alt="" />
                            <div style={{position:'absolute',bottom:'50px',left:'40px'}}>
                                <div style={{marginBottom:'20px'}}>
                                    <a href="/" className="consltoniet" style={{color:'#34A9FF',backgroundColor:'white',borderRadius:'100px'}} role={Button}>Illustration</a>
                                </div>
                                <h2 className="txt">Text</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 mt-2">
                        <div style={{position:"relative"}}>
                            <img src={Bitmap4} style={{width:'100%'}} alt="" />
                            <div style={{position:'absolute',bottom:'50px',left:'40px'}}>
                                <div style={{marginBottom:'20px'}}>
                                    <a href="/" className="consltoniet" style={{color:'#34A9FF',backgroundColor:'white',borderRadius:'100px'}} role={Button}>Motion</a>
                                </div>
                                <h2 className="txt">Text3</h2>
                            </div>
                        </div>
                    </div>
                    
                </div>
                        {/* <h1>Tab 3</h1> */}
                    </div>
                    <div className={toggleState === 4 ? "tab__cont  active" : "tab__cont"}>
                    <div className="row haze">
                    <div className="col-lg-5 col-md-6 mt-2">
                        <div style={{position:"relative"}}>
                            <img src={Bitmapon} style={{width:'100%'}} alt="" />
                            <div style={{position:'absolute',bottom:'50px',left:'40px'}}>
                                <div style={{marginBottom:'20px'}}>
                                    <a href="/" className="consltoniet" style={{color:'#34A9FF',backgroundColor:'white',borderRadius:'100px'}} role={Button}>Design</a>
                                </div>
                                <h2 className="txt">Text</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6 mt-2">
                        <div style={{position:"relative"}}>
                            <img src={Bitmap2} style={{width:'100%'}} alt="" />
                            <div style={{position:'absolute',bottom:'50px',left:'40px'}}>
                                <div style={{marginBottom:'20px'}}>
                                    <a href="/" className="consltoniet" style={{color:'#34A9FF',backgroundColor:'white',borderRadius:'100px'}} role={Button}>Branding</a>
                                </div>
                                <h2 className="txt">Text</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{marginBottom:'40px'}}>
                    <div className="col-lg-7 col-md-7 mt-2">
                        <div style={{position:"relative"}}>
                            <img src={Bitmap3} style={{width:'100%'}} alt="" />
                            <div style={{position:'absolute',bottom:'50px',left:'40px'}}>
                                <div style={{marginBottom:'20px'}}>
                                    <a href="/" className="consltoniet" style={{color:'#34A9FF',backgroundColor:'white',borderRadius:'100px'}} role={Button}>Illustration</a>
                                </div>
                                <h2 className="txt">Text</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 mt-2">
                        <div style={{position:"relative"}}>
                            <img src={Bitmap4} style={{width:'100%'}} alt="" />
                            <div style={{position:'absolute',bottom:'50px',left:'40px'}}>
                                <div style={{marginBottom:'20px'}}>
                                    <a href="/" className="consltoniet" style={{color:'#34A9FF',backgroundColor:'white',borderRadius:'100px'}} role={Button}>Motion</a>
                                </div>
                                <h2 className="txt">Text4</h2>
                            </div>
                        </div>
                    </div>
                    
                </div>
                        {/* <h1>Tab 4</h1> */}
                    </div>
                    <div className={toggleState === 5 ? "tab__cont  active" : "tab__cont"}>
                    <div className="row haze">
                    <div className="col-lg-5 col-md-6 mt-2">
                        <div style={{position:"relative"}}>
                            <img src={Bitmapon} style={{width:'100%'}} alt="" />
                            <div style={{position:'absolute',bottom:'50px',left:'40px'}}>
                                <div style={{marginBottom:'20px'}}>
                                    <a href="/" className="consltoniet" style={{color:'#34A9FF',backgroundColor:'white',borderRadius:'100px'}} role={Button}>Design</a>
                                </div>
                                <h2 className="txt">Text</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6 mt-2">
                        <div style={{position:"relative"}}>
                            <img src={Bitmap2} style={{width:'100%'}} alt="" />
                            <div style={{position:'absolute',bottom:'50px',left:'40px'}}>
                                <div style={{marginBottom:'20px'}}>
                                    <a href="/" className="consltoniet" style={{color:'#34A9FF',backgroundColor:'white',borderRadius:'100px'}} role={Button}>Branding</a>
                                </div>
                                <h2 className="txt">Text</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{marginBottom:'40px'}}>
                    <div className="col-lg-7 col-md-7 mt-2">
                        <div style={{position:"relative"}}>
                            <img src={Bitmap3} style={{width:'100%'}} alt="" />
                            <div style={{position:'absolute',bottom:'50px',left:'40px'}}>
                                <div style={{marginBottom:'20px'}}>
                                    <a href="/" className="consltoniet" style={{color:'#34A9FF',backgroundColor:'white',borderRadius:'100px'}} role={Button}>Illustration</a>
                                </div>
                                <h2 className="txt">Text</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 mt-2">
                        <div style={{position:"relative"}}>
                            <img src={Bitmap4} style={{width:'100%'}} alt="" />
                            <div style={{position:'absolute',bottom:'50px',left:'40px'}}>
                                <div style={{marginBottom:'20px'}}>
                                    <a href="/" className="consltoniet" style={{color:'#34A9FF',backgroundColor:'white',borderRadius:'100px'}} role={Button}>Motion</a>
                                </div>
                                <h2 className="txt">Text5</h2>
                            </div>
                        </div>
                    </div>
                    
                </div>
                        {/* <h1>Tab 5</h1> */}
                    </div>
                </div>
        </div>
    )
}
export default TabsSection;

