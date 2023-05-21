import React from "react";
import box from "./box";
export default function Box(props) {
  let style = {
    backgroundColor: props.on ? "#222222" : "white",
  };

  return (
    <div>
      <div
        onClick={() => {
          props.toogle(props.id);
        }}
        className="box12"
        style={style}
      ></div>
    </div>
  );
}
