import { QUIZ_SUBMITTING, QUIZ_SUBMIT_SUCCESS, QUIZ_SUBMIT_ERROR } from './constants';

const initialState = {
    data: [],
}

const reducer = function quizReducer(state = initialState, action) {
    switch (action.type) {
        case QUIZ_SUBMITTING:
            return {
                ...state,
                submitting: true,
                successful: false
            }
        case QUIZ_SUBMIT_SUCCESS:
            return {
                data: action.data,
                requesting: false,
                successful: true
            }
        case QUIZ_SUBMIT_ERROR:
            return {
                ...state,
                requesting: false,
                successful: false,
                errors: state.errors
            }
        default:
            return state;
    }
}

export default reducer;