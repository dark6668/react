import React from "react"
import memesData from "./memesData"


export default function Main() {

    let [allMeme, setAllMeme] = React.useState(memesData)

    let [randomImg, setRandomImg] = React.useState(

        {
            topText: "",
            botoomText: "",
            url: "https://www.shutterstock.com/image-vector/internet-meme-isolated-on-white-260nw-1311774755.jpg",
            color: ""


        }

    )
   let changeHandler =(event) =>{
    let {name,value} = event.target
    setRandomImg(prevRandomImg => {


return{
...prevRandomImg,
[name]:value

}
    })


   }
console.log(randomImg)
    let button = () => {

        let meme = allMeme.data.memes

        let randomNumber = Math.floor(Math.random(meme) * meme.length)
        let randomMeme = meme[randomNumber]

        setRandomImg(prevRandomImg => ({
            ...prevRandomImg,
            url: randomMeme.url,
            name: randomMeme.name
        }))

    }

    return (
        <main>

            <form className="form">
                <input
                onChange={changeHandler}
                    type="text"
                    placeholder="Top text"
                    name="topText"
                />
                <input
                onChange={changeHandler}
                    type="text"
                    placeholder="Bottom text"
                    name="botoomText"
                />
                    <input
                onChange={changeHandler}
                    type="text"
                    placeholder="font color"
                    name="color"
                />
            </form>
            <div className="img-container">
                <button onClick={button}
                    className="form--button"
                >
                    Get a new meme image 🖼
                </button>
                <div className="memeImg">
                <img  src={randomImg.url} alt={randomImg.name} ></img>
                <h1 style={{ color: randomImg.color ? randomImg.color : "black" }}  className= "upper-text">{randomImg.topText}</h1>
                <h1  style={{ color: randomImg.color ? randomImg.color : "black" }} className="lower-text">{randomImg.botoomText}</h1>
                </div>
            </div>

        </main >
    )
}