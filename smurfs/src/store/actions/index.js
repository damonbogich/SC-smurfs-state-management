import axios from 'axios';
import { bindActionCreators } from 'redux';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';

export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';

export const DELETE_SMURF_START = 'DELETE_SMURF_START';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';


export const fetchSmurf = () => {
    return(dispatch) => {
        dispatch({type: FETCH_SMURF_START});
        axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                dispatch({type: FETCH_SMURF_SUCCESS, payload: res.data})
                
            })
            .catch(err => {
                console.log(err)
            })
    }
};

export const addSmurf = (smurf) => {
    return (dispatch) => {
        dispatch({type: ADD_SMURF_START});
        axios.post('http://localhost:3333/smurfs', smurf)
        .then(res => {
            console.log(res, 'response from add smurf')
            dispatch({type: ADD_SMURF_SUCCESS, payload: res.data})
        })
    }
};

export const deleteSmurf = smurf => {
    return (dispatch) => {
        dispatch({type: DELETE_SMURF_START});
        axios.delete(`http://localhost:3333/smurfs/${smurf.id}`)
        .then(res => {
            console.log(res)
            dispatch({type: DELETE_SMURF_SUCCESS, payload: res.data})
        })
    }
}