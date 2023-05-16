import React from 'react'

export default function SecondSaacCard(
    {
        img,title,link
    }
) 
{
  return (
    <div className="col-lg-6 itchnge">
        <div className="mmble">
            <div style={{marginBottom: '20px'}}>
                <img src={img}  style={{width:'100%'}} alt="investor" />
            </div>
        </div>
        <div className="">
            <h2 className="dosse">{title}</h2>
        </div>
        <div>
            <h2 style={{float:'right'}}><a href={link} style={{color:'#349AFF'}} className="moore">Learn More</a></h2>
        </div>
    </div>
  )
}
