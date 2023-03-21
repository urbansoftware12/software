import React from "react";
import { Card } from "react-bootstrap";
function Secondsecc () {
    return(
        <div className="scndsecc">
            <div className="container-fluid" style={{color: 'white', maxWidth: '1280px'}}>
                <div className="row" style={{paddingTop: '80px', paddingBottom: '80px'}}>
                    <div className="col-lg-6">
                        <div>
                            <h2 style={{fontFamily: 'Urbanist-medium',fontSize: '16px',color: '#104FF5',fontWeight: '400', marginBottom: '20px'}}>Branding</h2>
                            <h1 className="creativ">Creative Branding <br/> Company in United States</h1>
                            <p className="cretepara">
                                While everyone is trying to make it big in today’s competitive world, why only a notable few make it to the Forbes list? What makes them stand out in the corporate arena? It is most certainly their never-ending passion to make their brand stand out. Branding is the USP of any business and without it one cannot make their mark in the global market. We at Urban Media Tech take great pride in being the most skilled branding agency in United States. With our 5+ years of experience in branding we have been able to help out more than 200 members (customers) of our Urban Media Tech family reach out to their desired audience and convert their dreams into reality. The sole purpose of any organization is to reach out to the consumers and entice them to not just invest in the product but to also retain them as a loyal customer.
                            </p>
                        </div>
                    </div>
                    <div className="offset-lg-1 col-lg-4">
                        <Card style={{border: 'none'}}>
                            <Card.Body style={{padding: '48px', boxShadow: '0 20px 48px 0 rgb(153 161 170 / 25%)', borderRadius: '30px', backgroundColor: '#FFFFFF' }}>
                                <form>
                                    <input type="text" placeholder="Name" class="form-control form-control-lg frm"/> <br/>
                                    <input type="email" placeholder="Email" class="form-control form-control-lg frm"/> <br/>
                                    <input type="text" placeholder="Number" class="form-control form-control-lg frm"/> <br/>
                                    <div class="form-group">
                                        <select class="form-control frm" id="">
                                            <option>Select Services</option>
                                            <option>Branding</option>
                                            <option>Website Design</option>
                                            <option>Website Development</option>
                                            <option>Mobile App Development</option>
                                            <option>Digital Marketing</option>
                                            <option>Hosting Services</option>
                                            <option>Marketing & Content</option>
                                        </select>
                                    </div><br/>
                                    <div style={{paddingBottom: '3%'}}>
                                        <button className="btn btn-success" style={{fontFamily: 'Urbanist', padding: '12px 24px', backgroundColor: '#65E4A1', color: 'black', width:'100%', border: 'none'}}>Request a Quote</button>
                                    </div>
                                </form>
                            </Card.Body>
                        </Card>
                    </div>
                    
                </div>
                <div >
                    <h2 className="serve">Our Services</h2>
                    <p className="servepara">The services that we provide to elevate the brand quotient involve brand identity, below the line advertising, above the line advertising, online communication strategy, visual media and others</p>
                </div>
                <div style={{paddingBottom: '50px'}}>
                    <ul style={{marginTop: '20px',paddingLeft: '20px'}}>
                        <li className="serveli">Logo Design, Brand Image, Brand Positioning, Visual Identity</li>
                        <li className="serveli">Brand Presentations, Visual Ads/Videos</li>
                        <li className="serveli">Landing Page, Print Media Management</li>
                        <li className="serveli">Digital Ads, Social Media Strategy, SEO </li>
                        <li className="serveli">Graphic Design, Packaging, Launch Videos</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Secondsecc;