import React from "react";

export default function Travel(props) {
  return (
    <div className="travels-container">
      <div>
        {" "}
        <img src={props.item.img} alt={props.item.location} />
      </div>
      <div className="travel-container">
        <div className="title">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-location-3079544-2561454.png?f=webp&w=256"
            alt="location icon"
          />
          {props.item.title}

          <a href={props.item.googleMapLink}>View on Google maps</a>
        </div>
        <h1>{props.item.location}</h1>
        <div>
          {props.item.startDate}-{props.item.endDate}.
        </div>
        <br></br>
        <div>{props.item.descripttion}</div>
      </div>
    </div>
  );
}
