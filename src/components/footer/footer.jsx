import React from 'react';
import './footer.css';
import {ReactComponent as Linnk} from '../../assets/linnk.svg';
import {ReactComponent as Insta} from '../../assets/inst.svg';
import {ReactComponent as Fbb} from '../../assets/fbb.svg';
import {ReactComponent as Whatss} from '../../assets/whatss.svg';
import Designrush from '../../assets/designrush-logo.svg';
import {Row} from 'react-bootstrap';
function Footer()
{
  return (
    <div className="App">
      <div style={{backgroundColor: '#141414'}}>
        <div className='container-fluid' style={{maxWidth: '1280px',paddingBottom: '15px',paddingTop: '50px'}}>
          {/* <div className='botn' style={{color: 'white',textAlign: 'left',paddingBottom: '30px'}}>
            <h1 className='design in-left'>Design.Built.Launch</h1>
          </div> */}
          {/* <div style={{display:'flex',justifyContent:'space-around'}}>
          <div className='botn' style={{color: 'white',textAlign: 'left',paddingBottom: '30px'}}>
            <h1 className='design in-left'>Design.Built.Launch</h1>
          </div>
            <div>
              <a href='https://www.designrush.com/agency/profile/urban-software-web-development' target='blank'>
                <img src={Designrush} style={{width:'100%'}} alt="" srcset="" />
              </a>
            </div>
          </div> */}
          <div className='row'>
            <div className='col-lg-8'>
            <div className='botn' style={{color: 'white',textAlign: 'left',paddingBottom: '30px'}}>
            <h1 className='design in-left'>Design.Built.Launch</h1>
          </div>
            </div>
            <div className='col-lg-3'>
            <div className='botn text-center'>
              <a href='https://www.designrush.com/agency/profile/urban-software-web-development' target='blank'>
                <img src={Designrush} style={{width:'100%'}} alt="" srcset="" />
              </a>
            </div>
            </div>
          </div>
          <Row>
            <div className='col-lg-3 col-md-3 col-sm-4' style={{textAlign: 'left'}}>
              <div style={{marginBottom: '25px'}}>
                <h1 className='fotrheading'>General</h1>
              </div>
              <div className='ftrmenu'>
                <a className='ftrparagraph' href="/">Home</a>
              </div>
              <div className='ftrmenu'>
                <a href="/" className='ftrparagraph'>Services</a>
              </div>
              <div className='ftrmenu'>
                <a className='ftrparagraph' href="/">why Choose Us</a>
              </div>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-4' style={{textAlign: 'left'}}>
              <div style={{marginBottom: '25px'}}>
                <h1 className='fotrheading'>Services</h1>
              </div>
                  
              <div className='ftrmenu'>
                <a className='ftrparagraph' href="/">Web Development</a>
            </div>
            <div className='ftrmenu'>
                <a href="/" className='ftrparagraph'>UI/UX Design</a>
            </div>
            <div className='ftrmenu'>
                <a className='ftrparagraph' href="/">Digital Marketing</a>
            </div>
            <div className='ftrmenu'>
                <a className='ftrparagraph' href="/">Branding</a>
            </div>
            <div className='ftrmenu'>
                <a href="/" className='ftrparagraph'>Mobile App Development</a>
            </div>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-4' style={{textAlign: 'left'}}>
                <div style={{marginBottom: '25px'}}>
                  <h1 className='fotrheading'>Location</h1>
                </div>
                  <div >
                    <h2 className='fotrparagraph'>Urban Software & Web Development <br /> 500 4th St NW <br /> Suite 102 PMB 1958 <br /> Albuquerque. NM 87102</h2>
                  </div>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-4' style={{textAlign: 'left'}}>
                <div style={{marginBottom: '25px'}}>
                <h1 className='fotrheading'>Connect</h1>
                </div>
                  
                  <div className='ftrmenu' style={{display: 'flex', justifyContent: 'space-between', width: '45%'}}>
                    <div>
                      <a href="/" className='ftrparagraph'><Linnk/></a>
                    </div>
                    <div>
                      <a href="/" className='ftrparagraph'><Insta/></a>
                    </div>
                    <div>
                      <a href="/" className='ftrparagraph'><Fbb/></a>
                    </div>
                    <div>
                      <a href="/" className='ftrparagraph'><Whatss/></a>
                    </div>
                  </div>
                  <div className='ftrmenu'>
                    <a href="/" className='ftrparagraph'>+1 (559) 554-0082</a>
                  </div>
                  <div className='ftrmenu'>
                    <a href="/" className='ftrparagraph'>admin@urbansoftware.tech</a>
                  </div>
                  <div className='ftrmenu'>
                    <a href="/" className='ftrparagraph'>www.urbansoftware.tech</a>
                  </div>
                  
                  
                </div>
              </Row>
              <div className='container' style={{paddingTop: '40px'}}>
                <div className='row offset-lg-2 offset-md-2 col-lg-8 col-md-8'>
                  <p className='ftrparagraph1'>Urban Software & Web Development LLC, State ID: 7053037, Registered Office Address - 500 4th St NW Suite 102 PMB 1958 Albuquerque, NM 87102 Urban Software & Web Development LLC 2023-2024 All rights reserved.</p>
                </div>
              </div>
            </div>
        </div>
            
      </div>
    );
  }
export default Footer;