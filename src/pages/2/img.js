import React from "react";

export default function ContainerContact(props) {

    let freePlaces

    if (props.openSpots === 0) {


    }
    else {
        freePlaces = `Remaining ${props.item.openSpots} Places`

    }
    if (props.openSpots === 1) {
        freePlaces = `Remaining ${props.item.openSpots} Place`

    }

    let [imgStar, setImgStar] = React.useState(props.item.star)

    let star = () => {

        setImgStar(prevImgStar => prevImgStar = !prevImgStar)
    }

    let imageStar = imgStar ? "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1024px-Gold_Star.svg.png" : "https://cdn3.iconfinder.com/data/icons/sympletts-free-sampler/128/star-512.png"
   let styles = props.item.openSpots <5 ? { color: 'red' }  : { color: 'black' }
    return (
<div>
<div className="button">press me</div>
        <div className="containerContact">

            <img  src={props.item.img} alt='Img' />
            {freePlaces && < div className="soldOut" style={styles}>{freePlaces}</div>}

            <section>

                <div className='containerContactImg'>
                    <img onClick={star} src={imageStar} alt='Img'></img>

                    <span > {props.item.rating}  </span>
                    <span> {props.item.name} </span>
                </div>

                <div className="containerContactInfo">
                    <div> {props.item.data} </div>
                    <div> {props.item.cost}   </div>
                </div>

            </section >
        </div >
        </div>

    )
}

