import {useState, useEffect, useRef} from "react"
import CharInfo from "./CharInfo"
import Intro from "./Intro"
import Story from "./Story"
import CharCont from "./CharCont"


function App() {
// char gets character information
const [char, setChar] = useState([1])
// setId represents situation id
const [sitId, setSitId]= useState(1)
// situation will display the current story portion
const [situation, setSituation] = useState('')
// outcome displays outcome of the situation
const [outcome, setOutcome] = useState('')
// changes state when we click char button
const [charId, setCharId] = useState(null)
const [display, setDisplay] = useState(true);

useEffect(() => {
    fetch(`http://localhost:9292/full_story/${sitId}`)
    .then(res => res.json())
    .then((data) => {
        setChar(() => {
            setSituation(data.sit.situation)
            return data.char
        })
    })
}, [sitId])

function filterChars(id){
 const newArr = char.filter(elem => {
    return elem.id === id
    })
    setChar(newArr)
}

const character = char.map(elem => {
    return(
        <section>
            <CharCont 
                elem={elem} 
                key={elem.id} 
                filterChars={filterChars} 
                changeButtonText={changeButtonText} 
                setCharId={setCharId}
                display={display}
                setDisplay={setDisplay}
            /> 
        </section>
    )
})

function handleFight(e) {
    setSitId(prev => prev + 1)
    fetch(`http://localhost:9292/battles/${e.target.value}/${charId}/${sitId}`)
    .then(resp => resp.json())
    .then(data => setOutcome(data))
}

const [charItem, setCharItem] = useState({})
function changeButtonText(elem){
    setCharItem(elem)
}

return(
    <div>
        <h1 className={display ? "choose-char" : "hide" }>Choose your Character</h1>
    <div className={display ? "char-button-section" : "hide"}>
    {character}
    </div>

    <div className={display ? "hide" : "show"}>
      <CharInfo char={char}/>
    </div>

    <Intro 
        situation={situation} 
        setSituation={setSituation} 
        outcome={outcome} 
    />

    <Story 
        outcome={outcome} 
        situation={situation}
    />
    
    <div className="btn-cont">
    <button className="fight-btn" onClick = {(e) => handleFight(e)} value="strength">{charItem.has_sword ? "Use Sword" : "Use Strength"}</button>
    <button className="fight-btn" onClick = {(e) => handleFight(e)} value="intelligence">{charItem.has_8_ball ? "Use 8 Ball" : "Use Intelligence"}</button>
    <button className="fight-btn" onClick = {(e) => handleFight(e)} value="charisma">{charItem.has_perfume ? "Use Perfume" : "Use Charisma"}</button>
    <button className="fight-btn" onClick = {(e) => handleFight(e)} value="luck">{charItem.has_invisibility_cloak ? "Use Invisibility Cloak" : "Use Luck"}</button>
    <button className="fight-btn" onClick = {(e) => handleFight(e)} value="cunningness">{charItem.has_raven ? "Use Raven" : "Use Cunningness"}</button>
    </div>
    <div id="next-btn">
        <button className="next-btn" onClick={() => setSitId(p => p + 1)}>Next</button>
    </div>
</div>
 )
}

export default App;
