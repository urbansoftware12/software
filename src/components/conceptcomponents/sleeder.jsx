import React from "react";
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { CarouselProvider, Slider, Slide} from 'pure-react-carousel';
// import  CardArrow  from '../../assets/slack.png';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Bitma from '../../assets/a.webp';
import Bitmb from '../../assets/b.png';
import Bitmc from '../../assets/c.webp';
import Bitmd from '../../assets/d.webp';
import Bitme from '../../assets/e.jpg';

function RoodmapSlider()
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
                                        <img src={Bitma} alt="Los Angeles" height='233' style={{width:'100%',borderRadius:'20px'}} className="mt-4"/>
                                    </div>
                                    <div className="text-center">
                                        <p className="azaah">Mobile Marketing Solution</p>
                                    </div>
                                </div>
                        </Slide>
                        <Slide>
                        <div>
                                    <div className="text-center los">
                                        <img src={Bitmb} alt="Los Angeles" height='233' style={{width:'100%',borderRadius:'20px'}} className="mt-4"/>
                                    </div>
                                    <div className="text-center">
                                        <p className="azaah">Mobile Marketing Solution</p>
                                    </div>
                                </div>
                        </Slide>
                        <Slide>
                        <div>
                                    <div className="text-center los">
                                        <img src={Bitmc} alt="Los Angeles" height='233' style={{width:'100%',borderRadius:'20px'}} className="mt-4"/>
                                    </div>
                                    <div className="text-center">
                                        <p className="azaah">Mobile Marketing Solution</p>
                                    </div>
                                </div>
                        </Slide>
                        <Slide>
                        <div className="">
                                    <div className="text-center los">
                                        <img src={Bitmd} alt="Los Angeles" height='233' style={{width:'100%',borderRadius:'20px'}} className="mt-4"/>
                                    </div>
                                    <div className="text-center">
                                        <p className="azaah">Mobile Marketing Solution</p>
                                    </div>
                                </div>
                        </Slide>
                        <Slide>
                        <div>
                                    <div className="text-center los" >
                                        <img src={Bitme} alt="Los Angeles" height='233' style={{width:'100%',borderRadius:'20px'}} className="mt-4"/>
                                    </div>
                                    <div className="text-center">
                                        <p className="azaah">Mobile Marketing Solution</p>
                                    </div>
                                </div>
                        </Slide>
                        <Slide>
                        <div >
                                    <div className="text-center los">
                                        <img src={Bitma} alt="Los Angeles" height='233' style={{width:'100%',borderRadius:'20px'}} className="mt-4"/>
                                    </div>
                                    <div className="text-center">
                                        <p className="azaah">Mobile Marketing Solution</p>
                                    </div>
                                </div>
                        </Slide>
                        <Slide>
                        <div>
                                    <div className="text-center los">
                                        <img src={Bitmb} alt="Los Angeles" height='233' style={{width:'100%',borderRadius:'20px'}} className="mt-4"/>
                                    </div>
                                    <div className="text-center">
                                        <p className="azaah">Mobile Marketing Solution</p>
                                    </div>
                                </div>
                        </Slide>
                        <Slide>
                        <div>
                                    <div className="text-center los">
                                        <img src={Bitmc} alt="Los Angeles" height='233' style={{width:'100%',borderRadius:'20px'}} className="mt-4"/>
                                    </div>
                                    <div className="text-center">
                                        <p className="azaah">Mobile Marketing Solution</p>
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
export default RoodmapSlider;