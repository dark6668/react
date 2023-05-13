import React from "react";
import Header2 from "../2/Header2";
import Number from "./Number";
import Star from "./star";
export default function Page5() {

    let [arrayList, setArrayLIst] = React.useState([])
    let [text, setText] = React.useState("true")
    let [contact, setContact] = React.useState({
        firstName: "david",
        lastName: "Haitin",
        phone: "052666519",
        email: "sus.sus123456@gmail.com",
        isFavorit: false

    })
     
    

    let button3 = () => {
        setContact(prevSetContact => {


            return {
                ...prevSetContact,
                isFavorit: !contact.isFavorit

            }


        })
    }

    let button = () => {
        setText(prevSetText => prevSetText ? false : true)

    }
    let button2 = () => {
        setArrayLIst(prevSetArrayList => [...arrayList, `Thing ${arrayList.length + 1} `])

    }
    let arrayElement = arrayList.map(thing => {

        return (<p key={thing}>{thing}</p>)

    })

    let [count, setCount] = React.useState(0)

    let subtract = () => {

        setCount(prevCount => prevCount - 1)
    }

    let add = () => {

        setCount(prevCount => prevCount + 1)
    }

    let restart = () => {

        setCount(prevCount => prevCount = 0)
    }


    return (

        <div>
            <Header2 />

            <button onClick={button}>{text ? "Yes" : "No"}</button>
            <button onClick={button2}>Add Array</button>

            {arrayElement}
         
            <div className="countNumber">

                <button onClick={subtract}>-</button>
                <Number number={count} />
                <button onClick={add}>+</button>
                <button onClick={restart}>restart</button>
                <Star isFilled ={contact.isFavorit} button = {button3} />
            
            </div>
        </div >
    )
}

