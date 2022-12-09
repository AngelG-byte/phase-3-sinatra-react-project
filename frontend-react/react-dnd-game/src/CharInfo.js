import React from 'react'

export default function CharInfo({char, display}) {
    return(
<div className={display ? "hide" : "show"}>
        <div className= "char-stats">
        <img className="char-image" src={char.image}/> 
        <p>{char.name}</p>
        <h1>SKILL STATS</h1>
        <p>Strength: {char.strength}</p>
        <p>Health: {char.health}</p>
        <p>Intelligence: {char.intelligence}</p>
        <p>Luck: {char.luck}</p>
        <p>Cunningness:{char.cunningness}</p>
        <p>Charisma: {char.charisma}</p>   
        <h1>Inventory</h1>
        <h1>{char.has_sword ? "Sword" : " "}</h1>
        <h1>{char.has_invisibility_cloak ? "Invisibility Cloak" : " "}</h1>
        <h1>{char.has_8_ball ? "Magic 8 Ball" : " "}</h1>
        <h1>{char.has_perfume ? "Perfume" : " "}</h1>
        <h1>{char.has_raven ? "Raven " : " "}</h1>
        <h1>{char.has_troll_army ? "Troll Friends " : " "}</h1>
        </div>
</div>
    )
}