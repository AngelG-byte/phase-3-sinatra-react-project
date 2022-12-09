import React from "react";

export default function Story({ situation, outcome }){

    return(
        <div className="text-cont">
            <p>{situation.situation}</p>
            <p> {outcome}</p>
        </div>
    )
    }