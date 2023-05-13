import React from "react";
export default function Star (props){
    let starICon = props.isFilled ? "https://cdn-icons-png.flaticon.com/512/541/541415.png" : "https://cdn3.iconfinder.com/data/icons/sympletts-free-sampler/128/star-512.png"
   
    
    
    return(
    <div>

    <img onClick={props.button} src= { starICon}></img>

</div>
)}