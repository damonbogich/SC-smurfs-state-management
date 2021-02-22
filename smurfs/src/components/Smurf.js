import React from 'react';
export default function Smurf(props) {
    return (
        <div style={{borderBottom: '1px solid black'}}>
            <h2>Name: {props.smurf.name}</h2>
            <h2>Age: {props.smurf.age}</h2>
            <h2>Height: {props.smurf.height} </h2>
        </div>
    )
};