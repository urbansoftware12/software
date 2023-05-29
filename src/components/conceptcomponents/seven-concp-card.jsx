import React from "react";
export default function SevenConcpCard(
    {
        had,title,paraa,parab,parac,parad
    }
)
{
    return(
        <div className="col-lg-6 mt-4">
                        <div class="design__addson">
                            <div class="inner_div">
                                <h3>{had}</h3>
                                <p class="txxxt">{title}</p>
                                <div class="valuess_dd">
                                    <div class="time_price">
                                        <p className="esti">{paraa}</p>
                                        <p className="esti"><strong>{parab}</strong></p>
                                    </div>
                                    <div class="time_price">
                                        <p className="esti">{parac}</p>
                                        <p className="esti"><strong>{parad}</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}