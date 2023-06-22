import { LOAD_COMMENTS, LOAD_COMMENTS_ERROR, LOAD_COMMENTS_SUCCESS } from "./type";

const loadApiComments = () => {
    return {
        type: LOAD_COMMENTS
    }
}

const loadApiCommentsSuccess = comments => {
    return {
        type: LOAD_COMMENTS_SUCCESS,
        payload: comments
    }
}

const loadApiCommentsError = error => {
    return {
        type: LOAD_COMMENTS_ERROR,
        payload: error
    }
}

