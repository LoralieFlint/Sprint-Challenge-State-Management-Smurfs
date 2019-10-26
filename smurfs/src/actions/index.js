import axios from 'axios';


export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';

export const FETCH_SUCCESSFUL = 'FETCH_SUCCESSFUL';

export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';

export const ADD_SMURF = 'ADD_SMURF';

export const ADDING_SMURF = 'ADDING_SMURF';

export const ADD_SUCCESSFUL = 'ADD_SUCCESSFUL';

export const getSmurfs = () => {
    return dispatch => {
        dispatch({ type: FETCH_SMURFS_START });
        axios.get('http://localhost:3333/smurfs')
            .then(res => {
                dispatch({ type: FETCH_SUCCESSFUL, payload: res.data })
            })
            .catch(error => {
                dispatch({ type: FETCH_SMURFS_FAILURE, payload: error })
            })
    }
}

export const addSmurfs = smurf => {
    return dispatch => {
        dispatch({ type: ADDING_SMURF });
        axios.post('http://localhost:3333/smurfs', smurf)
            .then(res => {
                dispatch({ type: ADD_SMURF, payload: res.data})
            })
            .catch(error => {
                console.log(error)
            })
    }
}