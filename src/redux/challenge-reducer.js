import {verbsAPI} from "../api/verbs-api";

const FETCHING_START = 'FETCHING_START'
const FETCHING_COMPLETE = 'FETCHING_COMPLETE'
const GET_VERBS_SUCCESS = 'GET_VERBS_SUCCESS'
const GET_VERBS_FAIL = 'GET_VERBS_SUCCESS'
const UPDATE_VERBS = 'UPDATE_VERBS'

const initialState = {
    verbs: [],
    isFetching: false,
    error: false
}

export const challengeReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case FETCHING_START: {
            return {...state, isFetching: true}
        }
        case FETCHING_COMPLETE: {
            return {...state, isFetching: false}
        }
        case GET_VERBS_SUCCESS: {
            return {...state, verbs: [...payload], error: false}
        }
        case GET_VERBS_FAIL: {
            return {...state, error: true}
        }
        case UPDATE_VERBS: {
            return {...state, verbs: [...payload]}
        }
        default: {
            return state
        }
    }
}

export const updateVerbs = (payload) => {
    return {
        type: UPDATE_VERBS,
        payload
    }
}

const startFetching = () => {
    return {
        type: FETCHING_START
    }
}
const completeFetching = () => {
    return {
        type: FETCHING_COMPLETE
    }
}
const getVerbsSuccess = (payload) => {
    return {
        type: GET_VERBS_SUCCESS,
        payload
    }
}
const getVerbsFail = () => {
    return {
        type: GET_VERBS_FAIL
    }
}

export const getVerbs = () => async (dispatch) => {
    try {
        dispatch(startFetching())
        const response = await verbsAPI.getVerbs()
        localStorage.setItem('verbs', JSON.stringify(response))
        dispatch(getVerbsSuccess(response))
        dispatch(completeFetching())
    } catch (err) {
        console.log(err)
        dispatch(getVerbsFail())
        dispatch(completeFetching())
    }
}