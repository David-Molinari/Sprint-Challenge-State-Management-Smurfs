import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';

// export const POST_SMURF_START = 'POST_SMURF_START';
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS';
export const POST_SMURF_FAILURE = 'POST_SMURF_FAILURE';

export const ADD_NAME = 'ADD_NAME';
export const ADD_AGE = 'ADD_AGE';
export const ADD_HEIGHT = 'ADD_HEIGHT'

export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURFS_START });    
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data})
        })
        .catch(err => {
             dispatch({ type: FETCH_SMURFS_FAILURE, payload: `${err.response.status} ${err.response.statusText}`})
        });
};

export const addSmurf = (name, age, height) => dispatch => {  
    axios
        .post('http://localhost:3333/smurfs', {name: name, age: age, height: height})
        .then(res => {
            console.log(res);
            dispatch({ type: POST_SMURF_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err);
        });
};

export const addName = (text) => dispatch => {
    dispatch({type: 'ADD_NAME', payload: text})
}

export const addAge = (text) => dispatch => {
    dispatch({type: 'ADD_AGE', payload: text})
}

export const addHeight = (text) => dispatch => {
    dispatch({type: 'ADD_HEIGHT', payload: text})
}
