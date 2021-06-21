
const UPDATE_RESULT = 'UPDATE_RESULT'

const initialState = {
    totalScore: localStorage.getItem('totalScore'),
    score: 0,
    mistakesList: []
}

export const resultReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case UPDATE_RESULT: {
            let totalScore
            if (localStorage.getItem('totalScore')) {
                totalScore = parseFloat(localStorage.getItem('totalScore'))
                totalScore = totalScore < payload.score ? payload.score : totalScore
            } else {
                localStorage.setItem('totalScore', payload.score)
                totalScore = payload.score
            }
            return {
                ...state, mistakesList: {...payload.mistakesList}, score: payload.score, totalScore: totalScore
            }
        }
        default: {
            return state
        }
    }
}

export const updateResult = (payload) => {
    return {
        type: UPDATE_RESULT,
        payload
    }
}