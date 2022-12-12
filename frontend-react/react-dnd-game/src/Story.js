import React from "react";

export default function Story({ situation, outcome }){

    return(
        <div className="outcome-cont">
            <p>{situation.situation}</p>
        </div>
    )
    }