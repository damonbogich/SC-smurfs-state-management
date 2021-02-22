import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchSmurf} from '../store/actions';
import Loader from "react-loader-spinner";
import Smurf from './Smurf';


const Smurfs = (props) => {
    useEffect(() => {
        props.fetchSmurf();
    }, [])

    return (
        <>
        {(props.smurfs.length === 0 && !props.isFetching) && <h2>No smurfs yet</h2>}
        {props.isFetching && <Loader/>}
        {props.smurfs.map((item) => {
            return <Smurf key={item.id} smurf={item}/>
        })}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfReducer.smurfs,
        isFetching: state.smurfReducer.isFetching,
        newSmurf: state.smurfReducer.newSmurf,
        error: state.smurfReducer.error

    }
};

export default connect(mapStateToProps, {fetchSmurf})(Smurfs);
