import React from 'react';
import './footer.css';
import {ReactComponent as Linnk} from '../../assets/linnk.svg';
import {ReactComponent as Insta} from '../../assets/inst.svg';
import {ReactComponent as Fbb} from '../../assets/fbb.svg';
import {ReactComponent as Whatss} from '../../assets/whatss.svg';
import {Row} from 'react-bootstrap';
function Footer() {
    return (
      <div className="App">
        <div style={{backgroundColor: '#141414'}}>
        <div className='container-fluid' style={{maxWidth: '1280px'}}>
                <div style={{paddingTop: '5%',paddingBottom: '3%',color: 'white',textAlign: 'left'}}>
                    <h1 className='design'>Design.Built.Launch</h1>
                </div>
              <Row>
                <div className='col-lg-3 col-md-3 col-sm-4' style={{textAlign: 'left'}}>
                  <h1 className='fotrheading'>General</h1>
                  <div className='ftrparagraph mt-4'>
                    <p>Home</p>
                    <p>Services</p>
                    <p>why Choose Us</p>
                  </div>
                  
                </div>
                <div className='col-lg-3 col-md-3 col-sm-4' style={{textAlign: 'left'}}>
                  <h1 className='fotrheading'>Services</h1>
                  <div className='ftrparagraph mt-4'>
                    <p>Web Development</p>
                    <p>UI/UX Design</p>
                    <p>Digital Marketing</p>
                    <p>Branding</p>
                    <p>Mobile App Development</p>
                  </div>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-4' style={{textAlign: 'left'}}>
                  <h1 className='fotrheading'>Location</h1>
                  <div className='ftrparagraph mt-4'>
                    <p>Urban Software & Web Development</p>
                    <p>500 4th St NW</p>
                    <p>Suite 102 PMB 1958</p>
                    <p>Albuquerque. NM 87102</p>
                  </div>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-4' style={{textAlign: 'left'}}>
                  <h1 className='fotrheading'>Connect</h1>
                  <div className='ftrparagraph mt-4'>
                  <div style={{display: 'flex', justifyContent: 'space-between', width: '45%', marginBottom: '5%'}}>
                    <div><Linnk/></div>
                    <div><Insta/></div>
                    <div><Fbb/></div>
                    <div><Whatss/></div>
                  </div>
                  <p>+1 (559) 554-0082</p>
                  <p>admin@urbansoftware.tech</p>
                  <p>www.urbansoftware.tech</p>
                  </div>
                  
                  
                </div>
              </Row>
              <div className='container' style={{paddingTop: '5%',paddingBottom: '1%'}}>
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