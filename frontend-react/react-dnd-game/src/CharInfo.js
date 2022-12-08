import React from 'react'

export default function CharInfo({char, health}) {
    return(
<div className="char-info-div">
        <h1>CHARACTER</h1>
        <p>{char.name}</p>
        <p>Age: {char.age}</p>
        <img src={char.image}/>
        <h1>SKILL STATS</h1>
        <p>Strength: {char.strength}</p>
        <p>Health: {char.health}</p>
        <p>Intelligence: {char.intelligence}</p>
        <p>Luck: {char.luck}</p>
        <p>Cunningness:{char.cunningness}</p>
        <p>Charisma: {char.charisma}</p>
        <h1>Inventory</h1>
        <p>{char.has_sword ? "Sword" : " "}</p>
        <p>{char.has_invisibility_cloak ? "Invisibility Cloak" : " "}</p>
        <p>{char.has_8_ball ? "Magic 8 Ball" : " "}</p>
        <p>{char.has_perfume ? "Perfume" : " "}</p>
        <p>{char.has_raven ? "Raven " : " "}</p>
        <p>{char.has_troll_army ? "Troll Friends " : " "}</p>

</div>

    )
}