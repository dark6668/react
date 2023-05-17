import React from "react";
import Header2 from "../2/Header2";
import Number from "./Number";

import box from "./box";
import Box from "./boxOnPage5";
export default function Page5(props) {

    let [arrayList, setArrayLIst] = React.useState([])
    let [text, setText] = React.useState("true")
    let [boxs,SetBoxs] = React.useState(box)

    let toogle =(id) =>{
     
         SetBoxs( prevBoxs => {
        
      
         let newArraybox =[]

for (let i= 0; i<prevBoxs.length; i++)
{
    let currantBox = prevBoxs[i];

if (currantBox.id ===  id){
let updateBox ={
...currantBox,
on: !currantBox.on
}
    newArraybox.push(updateBox)

}
else{

    newArraybox.push(currantBox)
}
}
return newArraybox
})

    }
    const listBox =  boxs.map(item =>{


        return(     <Box toogle={toogle} on={item.on} className="box12" key={item.id} id={item.id }></Box>)})   


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
                <Number number={count}  />
                <button onClick={add}>+</button>
                <button onClick={restart}>restart</button>
       
         
 
          {listBox}
            </div>
        </div >
    )
}

