import React from "react";
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { CarouselProvider, Slider, Slide} from 'pure-react-carousel';
// import  CardArrow  from '../../assets/slack.png';
import 'pure-react-carousel/dist/react-carousel.es.css';
// import Gitlab from '../../assets/gitlab.png';
// import Slack from '../../assets/slack.png';
// import Netflix from '../../assets/netflix.png';
// import Paypal from '../../assets/paypal.png';
import Bitma1 from '../../assets/Bitma1.png';
import Bitma2 from '../../assets/Bitma2.png';
import Bitma3 from '../../assets/Bitma3.png';
import Bitma4 from '../../assets/Bitma4.png';
import './slieder.css';

function RoadmapSlider()
{

    return(
        <div className="slider">
            <div className="container-fluid">
                <CarouselProvider
                    className="desktop-slider"
                    visibleSlides={4}
                    totalSlides={8}
                    step={1}
                    naturalSlideWidth={400}
                    naturalSlideHeight={500}
                    isPlaying={true}
                    interval={3000}
                    orientation="horizontal"
                    infinite
                    playDirection="forward"
                    >


                    <Slider className="road_slider" style={{justifycontet:'space-between'}}>
                        <Slide>
                        <div>
                                    <div className="text-center los" >
                                        <img src={Bitma1} alt="Los Angeles" height='233' style={{width:'100%'}} className="mt-4"/>
                                    </div>
                                    <div>
                                        <h2 className="azah">Azah Anyeni</h2>
                                        <h2 className="any">Designer</h2>
                                    </div>
                                </div>
                        </Slide>
                        <Slide>
                        <div>
                                    <div className="text-center los">
                                        <img src={Bitma2} alt="Los Angeles" height='233' style={{width:'100%'}} className="mt-4"/>
                                    </div>
                                    <div>
                                        <h2 className="azah">Azah Anyeni</h2>
                                        <h2 className="any">Designer</h2>
                                    </div>
                                </div>
                        </Slide>
                        <Slide>
                        <div>
                                    <div className="text-center los">
                                        <img src={Bitma3} alt="Los Angeles" height='233' style={{width:'100%'}} className="mt-4"/>
                                    </div>
                                    <div>
                                        <h2 className="azah">Azah Anyeni</h2>
                                        <h2 className="any">Designer</h2>
                                    </div>
                                </div>
                        </Slide>
                        <Slide>
                        <div className="">
                                    <div className="text-center los">
                                        <img src={Bitma4} alt="Los Angeles" height='233' style={{width:'100%'}} className="mt-4"/>
                                    </div>
                                    <div>
                                        <h2 className="azah">Azah Anyeni</h2>
                                        <h2 className="any">Designer</h2>
                                    </div>
                                </div>
                        </Slide>
                        <Slide>
                        <div>
                                    <div className="text-center los" >
                                        <img src={Bitma1} alt="Los Angeles" height='233' style={{width:'100%'}} className="mt-4"/>
                                    </div>
                                    <div>
                                        <h2 className="azah">Azah Anyeni</h2>
                                        <h2 className="any">Designer</h2>
                                    </div>
                                </div>
                        </Slide>
                        <Slide>
                        <div >
                                    <div className="text-center los">
                                        <img src={Bitma2} alt="Los Angeles" height='233' style={{width:'100%'}} className="mt-4"/>
                                    </div>
                                    <div>
                                        <h2 className="azah">Azah Anyeni</h2>
                                        <h2 className="any">Designer</h2>
                                    </div>
                                </div>
                        </Slide>
                        <Slide>
                        <div>
                                    <div className="text-center los">
                                        <img src={Bitma3} alt="Los Angeles" height='233' style={{width:'100%'}} className="mt-4"/>
                                    </div>
                                    <div>
                                        <h2 className="azah">Azah Anyeni</h2>
                                        <h2 className="any">Designer</h2>
                                    </div>
                                </div>
                        </Slide>
                        <Slide>
                        <div>
                                    <div className="text-center los">
                                        <img src={Bitma4} alt="Los Angeles" height='233' style={{width:'100%'}} className="mt-4"/>
                                    </div>
                                    <div>
                                        <h2 className="azah">Azah Anyeni</h2>
                                        <h2 className="any">Designer</h2>
                                    </div>
                                </div>
                        </Slide>
                    </Slider>
                    {/* <ButtonBack className="tokenback">
                    <img src={CardArrow} alt="imae" />
                      </ButtonBack>
                    <ButtonNext className="tokennext"><img src={CardArrow} alt="imae" /></ButtonNext> */}
                </CarouselProvider>
            </div>
        </div>
    )
}
export default RoadmapSlider;