import React from 'react';
export default function Smurf(props) {
    console.log(props, 'props from smurf componenet');
    return (
        <div style={{borderBottom: '1px solid black'}}>
            <h2>Name: {props.smurf.name}</h2>
            <h2>Age: {props.smurf.age}</h2>
            <h2>Height: {props.smurf.height} </h2>
        </div>
    )
};