import React from "react"

export default function Joke(props) {
    let [jokecontainer, setJokecontainer] = React.useState(false)

let jokeButton = () =>{

setJokecontainer(prevJokecontainer => !prevJokecontainer)

}

    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
           {jokecontainer && <p>{props.punchline}</p> }
<button onClick={jokeButton }> {!jokecontainer ? "Press me" :"Hide" }</button>

            <hr />
        </div>
    )
}