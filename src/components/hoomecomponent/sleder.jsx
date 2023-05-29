import React from "react";
import { CarouselProvider, Slider, Slide} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Phython from '../../assets/python.svg';
import Angular from '../../assets/angular.svg';
import Php from '../../assets/php.svg';
import Reecte from '../../assets/react.svg';
import Javascript from '../../assets/javascript.svg';
import Nodejs from '../../assets/node.svg';
import Jquery from '../../assets/jquery.svg';
import Wordpress from '../../assets/wordpress.svg';
import Shopify from '../../assets/shopify.svg';


function RoadmapSlider()
{

    return(
        <div className="slider">
            <div className="container">
                <CarouselProvider
                    className="desktop-slider"
                    visibleSlides={9}
                    totalSlides={18}
                    step={1}
                    naturalSlideWidth={300}
                    naturalSlideHeight={500}
                    isPlaying={true}
                    interval={3000}
                    orientation="horizontal"
                    infinite
                    playDirection="forward"
                    >


                    <Slider className="road_slider">
                        <Slide>
                                <div className="dsply">
                                    <div>
                                        <img src={Phython} width="70"height="50"alt="React logo" />
                                    </div>
                                    <div className="text-center mt-3">
                                        <p style={{fontSize: '16px',fontFamily: 'Urbanist-regular'}}>Python</p>
                                    </div>
                                </div>
                        </Slide>
                        <Slide>
                        <div className="dsply">
                                    <div>
                                        <img src={Angular} width="70"height="50"alt="React logo" />
                                    </div>
                                    <div className="text-center mt-3">
                                        <p style={{fontSize: '16px',fontFamily: 'Urbanist-regular'}}>Angular JS</p>
                                    </div>
                                </div>
                        </Slide>
                        <Slide>
                                <div className="dsply">
                                    <div>
                                        <img src={Php} width="70"height="50"alt="React logo" />
                                    </div>
                                    <div className="text-center mt-3">
                                        <p style={{fontSize: '16px',fontFamily: 'Urbanist-regular'}}>PHP</p>
                                    </div>
                                </div>
                        </Slide>
                        <Slide>
                                <div className="dsply">
                                    <div>
                                        <img src={Reecte} width="70"height="50"alt="React logo" />
                                    </div>
                                    <div className="text-center mt-3">
                                        <p style={{fontSize: '16px',fontFamily: 'Urbanist-regular'}}>React</p>
                                    </div>
                                </div>
                        </Slide>
                        <Slide>
                        <div className="dsply">
                                    <div>
                                        <img src={Javascript} width="70"height="50"alt="React logo" />
                                    </div>
                                    <div className="text-center mt-3">
                                        <p style={{fontSize: '16px',fontFamily: 'Urbanist-regular'}}>Javascript</p>
                                    </div>
                                </div>
                        </Slide>
                        <Slide>
                        <div className="dsply">
                                    <div>
                                        <img src={Nodejs} width="70"height="50"alt="React logo" />
                                    </div>
                                    <div className="text-center mt-3">
                                        <p style={{fontSize: '16px',fontFamily: 'Urbanist-regular'}}>Node JS</p>
                                    </div>
                                </div>
                        </Slide>
                        <Slide>
                        <div className="dsply">
                                    <div>
                                        <img src={Jquery} width="70"height="50"alt="React logo" />
                                    </div>
                                    <div className="text-center mt-3">
                                        <p style={{fontSize: '16px',fontFamily: 'Urbanist-regular'}}>JQuery</p>
                                    </div>
                                </div>
                        </Slide>
                        <Slide>
                        <div className="dsply">
                                    <div>
                                        <img src={Wordpress} width="70"height="50"alt="React logo" />
                                    </div>
                                    <div className="text-center mt-3">
                                        <p style={{fontSize: '16px',fontFamily: 'Urbanist-regular'}}>WordPress</p>
                                    </div>
                                </div>
                        </Slide>
                        <Slide>
                        <div className="dsply">
                                    <div>
                                        <img src={Shopify} width="70"height="50"alt="React logo" />
                                    </div>
                                    <div className="text-center mt-3">
                                        <p style={{fontSize: '16px',fontFamily: 'Urbanist-regular'}}>Shopify</p>
                                    </div>
                                </div>
                        </Slide>
                        <Slide>
                                <div className="dsply">
                                    <div>
                                        <img src={Phython} width="70"height="50"alt="React logo" />
                                    </div>
                                    <div className="text-center mt-3">
                                        <p style={{fontSize: '16px',fontFamily: 'Urbanist-regular'}}>Python</p>
                                    </div>
                                </div>
                        </Slide>
                        <Slide>
                        <div className="dsply">
                                    <div>
                                        <img src={Angular} width="70"height="50"alt="React logo" />
                                    </div>
                                    <div className="text-center mt-3">
                                        <p style={{fontSize: '16px',fontFamily: 'Urbanist-regular'}}>Angular JS</p>
                                    </div>
                                </div>
                        </Slide>
                        <Slide>
                                <div className="dsply">
                                    <div>
                                        <img src={Php} width="70"height="50"alt="React logo" />
                                    </div>
                                    <div className="text-center mt-3">
                                        <p style={{fontSize: '16px',fontFamily: 'Urbanist-regular'}}>PHP</p>
                                    </div>
                                </div>
                        </Slide>
                        <Slide>
                                <div className="dsply">
                                    <div>
                                        <img src={Reecte} width="70"height="50"alt="React logo" />
                                    </div>
                                    <div className="text-center mt-3">
                                        <p style={{fontSize: '16px',fontFamily: 'Urbanist-regular'}}>React</p>
                                    </div>
                                </div>
                        </Slide>
                        <Slide>
                        <div className="dsply">
                                    <div>
                                        <img src={Javascript} width="70"height="50"alt="React logo" />
                                    </div>
                                    <div className="text-center mt-3">
                                        <p style={{fontSize: '16px',fontFamily: 'Urbanist-regular'}}>Javascript</p>
                                    </div>
                                </div>
                        </Slide>
                        <Slide>
                        <div className="dsply">
                                    <div>
                                        <img src={Nodejs} width="70"height="50"alt="React logo" />
                                    </div>
                                    <div className="text-center mt-3">
                                        <p style={{fontSize: '16px',fontFamily: 'Urbanist-regular'}}>Node JS</p>
                                    </div>
                                </div>
                        </Slide>
                        <Slide>
                        <div className="dsply">
                                    <div>
                                        <img src={Jquery} width="70"height="50"alt="React logo" />
                                    </div>
                                    <div className="text-center mt-3">
                                        <p style={{fontSize: '16px',fontFamily: 'Urbanist-regular'}}>JQuery</p>
                                    </div>
                                </div>
                        </Slide>
                        <Slide>
                        <div className="dsply">
                                    <div>
                                        <img src={Wordpress} width="70"height="50"alt="React logo" />
                                    </div>
                                    <div className="text-center mt-3">
                                        <p style={{fontSize: '16px',fontFamily: 'Urbanist-regular'}}>WordPress</p>
                                    </div>
                                </div>
                        </Slide>
                        <Slide>
                        <div className="dsply">
                                    <div>
                                        <img src={Shopify} width="70"height="50"alt="React logo" />
                                    </div>
                                    <div className="text-center mt-3">
                                        <p style={{fontSize: '16px',fontFamily: 'Urbanist-regular'}}>Shopify</p>
                                    </div>
                                </div>
                        </Slide>
                    </Slider>
                </CarouselProvider>
            </div>
        </div>
    )
}
export default RoadmapSlider;