import React from "react";
import Header2 from "../2/Header2";
import Travel from "./travel";
import travelData from "./travelData";

export default function Page3() {
  let travels = travelData.map((contact) => {
    return <Travel item={contact} />;
  });

  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  let time = `${hours}:${minutes}`;
  if (minutes < 10) {
    time = `${hours}:0${minutes} `;
  }
  let timeofday;

  if (hours > 12 && hours < 18) {
    timeofday = "Its noon";
  } else {
    timeofday = " Its morning";
  }

  if (hours > 18) {
    timeofday = "Its after noon";
  }

  return (
    <div>
      <Header2 />

      <h1>
        {" "}
        {time} {timeofday}
      </h1>
      {travels}
    </div>
  );
}
