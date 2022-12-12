import React from 'react';

export default function Intro({intro}){
    console.log(intro)
    return(
        <div className={intro ? "show" : "hide"}>
            <div className="text-cont">
                <p className="intro-para">{intro}</p>
            </div>
        </div>
    )
}