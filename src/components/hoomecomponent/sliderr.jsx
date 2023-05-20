import React from "react";
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { CarouselProvider, Slider, Slide} from 'pure-react-carousel';
// import  CardArrow  from '../../assets/slack.png';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Gitlab from '../../assets/gitlab.png';
import Slack from '../../assets/slack.png';
import Netflix from '../../assets/netflix.png';
import Paypal from '../../assets/paypal.png';

function RoadmapSlider()
{

    return(
        <div className="slider">
            <div className="container">
                <CarouselProvider
                    className="desktop-slider"
                    visibleSlides={4}
                    totalSlides={8}
                    step={1}
                    naturalSlideWidth={300}
                    naturalSlideHeight={200}
                    isPlaying={true}
                    interval={3000}
                    orientation="horizontal"
                    infinite
                    playDirection="forward"
                    >


                    <Slider className="road_slider">
                        <Slide>
                          <img src={Gitlab} alt="Los Angeles" className="d-block"/>
                        </Slide>
                        <Slide>
                          <img src={Slack} alt="Los Angeles" className="d-block"/>
                        </Slide>
                        <Slide>
                          <img src={Netflix} alt="Los Angeles" className="d-block"/>
                        </Slide>
                        <Slide>
                          <img src={Paypal} alt="Los Angeles" className="d-block"/>
                        </Slide>
                        <Slide>
                          <img src={Gitlab} alt="Los Angeles" className="d-block"/>
                        </Slide>
                        <Slide>
                          <img src={Slack} alt="Los Angeles" className="d-block"/>
                        </Slide>
                        <Slide>
                          <img src={Netflix} alt="Los Angeles" className="d-block"/>
                        </Slide>
                        <Slide>
                          <img src={Paypal} alt="Los Angeles" className="d-block"/>
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