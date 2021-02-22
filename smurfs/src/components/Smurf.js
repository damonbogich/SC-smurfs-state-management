import React from 'react';
import {connect} from 'react-redux';
import {deleteSmurf} from '../store/actions';


const Smurf = (props) => {
    const smurf = props.smurf
    const deleteSmurf = (e) => {
        e.preventDefault();
        props.deleteSmurf(smurf);
    }

    return (
        <div style={{borderBottom: '1px solid black'}}>
            <h2>Name: {props.smurf.name}</h2>
            <h2>Age: {props.smurf.age}</h2>
            <h2>Height: {props.smurf.height} </h2>
            <button onClick={deleteSmurf}>Delete Smurf</button>
        </div>
    )
};

export default connect(null, {deleteSmurf})(Smurf)