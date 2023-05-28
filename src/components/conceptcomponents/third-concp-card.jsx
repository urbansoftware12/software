import React from "react";
export default function ThirdConcpCard(
    {
        img,title,paragrph
    }
)
{
    return(
        <div className="col-lg-6 mt-4">
            <div>
                <img src={img} alt="" srcset="" />
            </div>
            <div className="mt-3">
                <h4 className="prsentable">{title}</h4>
            </div>
            <div className="mt-3">
                <p className="prodctinterface">{paragrph}</p>
            </div>
        </div>
    )
}