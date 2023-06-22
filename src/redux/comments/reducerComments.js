import { LOAD_COMMENTS, LOAD_COMMENTS_ERROR, LOAD_COMMENTS_SUCCESS } from "./type";

const initialStateComments = {
    isLoading: false,
    comments: [],
    error: ''
}

const commentReducer = (state = initialStateComments, action) => {
    switch (action) {
        case LOAD_COMMENTS: 
            return {
                ...state,
                isLoading: true
            }
        case LOAD_COMMENTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                comments: action.payload,
                error: ''
            }
        case LOAD_COMMENTS_ERROR:
            return {
                ...state,
                isLoading: false,
                comments: [],
                error: action.payload
            }
        default: return state
    }
}

export default commentReducer;