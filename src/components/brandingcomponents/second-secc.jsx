import React from "react";
import { Card } from "react-bootstrap";
function Secondsecc () {
    return(
        <div className="scndsecc">
            <div className="container-fluid contan" style={{paddingTop: '10%', paddingBottom: '10%', color: 'white', maxWidth: '1280px'}}>
                <div className="row">
                    <div className="col-lg-6">
                        <div>
                            <h1 className="develop" style={{fontSize: 'clamp(1.125rem, 0.8571rem + 1.3393vw, 3rem)',fontWeight: '400', lineHeight: '48px', color: 'black'}}>Creative Branding <br/> Company in United States</h1>
                            <p style={{fontFamily: 'Urbanist-medium', lineHeight: '28px', fontSize: '18px', fontWeight: '300', color: 'black', textAlign: 'justify'}}>
                            While everyone is trying to make it big in today’s competitive world, why only a notable few make it to the Forbes list? What makes them stand out in the corporate arena? It is most certainly their never-ending passion to make their brand stand out. Branding is the USP of any business and without it one cannot make their mark in the global market. We at Urban Media Tech take great pride in being the most skilled branding agency in United States. With our 5+ years of experience in branding we have been able to help out more than 200 members (customers) of our Urban Media Tech family reach out to their desired audience and convert their dreams into reality. The sole purpose of any organization is to reach out to the consumers and entice them to not just invest in the product but to also retain them as a loyal customer.
                            </p>
                        </div>
                    </div>
                    <div className="offset-lg-1 col-lg-4">
                    <Card style={{border: 'none'}}>
                            <Card.Body style={{padding: '48px', boxShadow: '0 20px 48px 0 rgb(153 161 170 / 25%)', borderRadius: '30px', backgroundColor: '#FFFFFF' }}>
                                <form>
                                    <input type="text" placeholder="Name" class="form-control form-control-lg"/> <br/>
                                    <input type="text" placeholder="Email" class="form-control form-control-lg"/> <br/>
                                    <input type="text" placeholder="Number" class="form-control form-control-lg"/> <br/>
                                    <div class="form-group">
                                        <select class="form-control" id="">
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
                
            </div>
        </div>
    )
}
export default Secondsecc;