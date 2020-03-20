import { FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAILURE,
    ADD_NAME,
    ADD_AGE,
    ADD_HEIGHT,
    POST_SMURF_START,
    POST_SMURF_SUCCESS,
    POST_SMURF_FAILURE
 } 
    from '../actions';

const initialState = {
    smurfs: [],
    error: '',
    isFetching: false,
    nameField: '',
    ageField: '',
    heightField: '',
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                error: '',
                isFetching: true,
            };
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                error: '',
                isFetching: false,
                smurfs: action.payload
            }
        case FETCH_SMURFS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false,
            }
        case ADD_NAME:
            return {
                ...state,
                nameField: action.payload.text
            }
        case ADD_AGE:
            return {
                ...state,
                ageField: action.payload.text
            }
        case ADD_HEIGHT:
            return {
                ...state,
                heightField: action.payload.text
            }
        // case POST_SMURF_START:
        //     return {
        //         ...state,
        //     }
        case POST_SMURF_SUCCESS:
            return {
                ...state,
            }
        case POST_SMURF_FAILURE:
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default reducer;