import {FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAILURE, ADD_SMURF_START, ADD_SMURF_SUCCESS, DELETE_SMURF_START, DELETE_SMURF_SUCCESS} from '../actions';

const initialState = {
    smurfs: [],
    isFetching: false,
    isAdding: false,
    newSmurf: {},
    error: ""
};

export const smurfReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_SMURF_START: 
            return {
                ...state,
                isFetching: true,
            };
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurfs: action.payload
            }
        case ADD_SMURF_START:
            return {
                ...state,
                isFetching: true
            }
        case ADD_SMURF_SUCCESS: 
            return {
                ...state,
                isFetching: false, 
                smurfs: action.payload
            }
        case DELETE_SMURF_START:
            return {
                ...state,
                isFetching: true
            }
        case DELETE_SMURF_SUCCESS: 
            return {
                ...state,
                isFetching: false,
                smurfs: action.payload
            }
        default: 
        return state
    }
};