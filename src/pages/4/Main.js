import React from "react"
import memesData from "./memesData"


export default function Main() {

    let [allMeme, setAllMeme] = React.useState(memesData)

    let [randomImg, setRandomImg] = React.useState(

        {
            topText: "",
            botoomText: "",
            url: "https://www.shutterstock.com/image-vector/internet-meme-isolated-on-white-260nw-1311774755.jpg",
            name: "david"



        }

    )
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
                    type="text"
                    placeholder="Top text"
                    className="toptext"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="bottomtext"
                />
            </form>
            <div className="img-container">
                <button onClick={button}
                    className="form--button"
                >
                    Get a new meme image 🖼
                </button>
                <img className="memeImg" src={randomImg.url} alt={randomImg.name} ></img>

            </div>

        </main >
    )
}