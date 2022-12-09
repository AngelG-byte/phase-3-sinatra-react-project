import {useState, useEffect} from "react"
import CharInfo from "./CharInfo"
import Intro from "./Intro"
import Story from "./Story"
import CharCont from "./CharCont"


function App() {
// char gets character information
const [char, setChar] = useState([])
// intro displays introduction text
const [intro, setIntro] = useState('')
// page displays the next page
const [pageId, setPageId] = useState(0)
// setId reperesents situation id
const [sitId, setSitId]= useState(0)
// situation will display the current story portion
const [situation, setSituation] = useState({})
// outcome displays outcome of the situation
const [outcome, setOutcome] = useState('')
// represents health of character
const [health, setHealth] = useState(30)

useEffect(() => {
    fetch(`http://localhost:9292/intro`)
    .then(r => r.json())
    .then(data => setIntro(data))

    fetch(`http://localhost:9292/all`)
    .then(resp => resp.json())
    .then(charData => {
        setChar(charData)
    })

    setSitId(sitId + 1)
    fetch(`http://localhost:9292/situation/1`)
    .then(r => r.json())
    .then(data => setSituation(data))
}, [])

function handleStory(){
    setSitId(sitId + 1)
    fetch(`http://localhost:9292/situation/${sitId + 1}`)
    .then(r => r.json())
    .then(data => setSituation(data))
    // console.log(situation)
}

function handleScreen(){
    setIntro(false)
    setPageId(pageId + 1)
}

function filterChars(id){
 const newArr = char.filter(elem => {
    return elem.id === id
    })
    setChar(newArr)
}

const character = char.map(elem => {
    return(
        <section>
            <CharCont elem={elem} key={elem.id} filterChars={filterChars} changeButtonText={changeButtonText}/>
        </section>
    )
})

function handleFight(e) {
    fetch(`http://localhost:9292/battles/${e.target.value}/${char[0].id}/${sitId}`)
    .then(resp => resp.json())
    .then(data => setOutcome(data))

    fetch(`http://localhost:9292/battle/${char.id}`)
    .then(r => r.json())
    .then(data => setChar(data))
}

const [charItem, setCharItem] = useState({})
function changeButtonText(elem){
    setCharItem(elem)
}

return(
    <div>
    
    <div id="char-button-section">
    {character}
    </div>
    {/* <CharInfo char = {char}  health={health}/> */}

    <Intro situation={situation} setSituation={setSituation} />
    <Story outcome={outcome} situation={situation}/>

    <button className="fight-btn" onClick = {(e) => handleFight(e)} value="strength">{charItem.has_sword ? "Use Sword" : "Use Strength"}</button>
    <button className="fight-btn" onClick = {(e) => handleFight(e)} value="intelligence">{charItem.has_8_ball ? "Use 8 Ball" : "Use Inteligence"}</button>
    <button className="fight-btn" onClick = {(e) => handleFight(e)} value="charisma">{charItem.has_perfume ? "Use Perfume" : "Use Charisma"}</button>
    <button className="fight-btn" onClick = {(e) => handleFight(e)} value="luck">{charItem.has_invisibility_cloak ? "Use Invisibility Cloak" : "Use Luck"}</button>
    <button className="fight-btn" onClick = {(e) => handleFight(e)} value="cunningness">{charItem.has_raven ? "Use Raven" : "Use Cunningness"}</button>
    <div id="next-btn">
        <button className="next-btn" onClick={() => {handleScreen(); handleStory();}}>Next</button>
    </div>
</div>
 )
}

export default App;
