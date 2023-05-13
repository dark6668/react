import React from "react";

export default function Number(props) {


    return (
        <h1 style={props.number >= 0 ? { color: 'green' } : { color: 'red' }}>{props.number}</h1>

    )

}