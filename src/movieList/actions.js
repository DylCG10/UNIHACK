import { QUIZ_SUBMITTING, QUIZ_SUBMIT_SUCCESS, QUIZ_SUBMIT_ERROR } from './constants';

export const quizSubmit = function quizSubmit(client, data) {
    return {
        type: QUIZ_SUBMITTING,
        client,
        data
    }
}

export const quizSubmitSuccess = function quizSubmitSuccess(data) {
    return {
        type: QUIZ_SUBMIT_SUCCESS,
        data
    }
}

export const quizSubmitError = function quizSubmitError(error) {
    return {
        type: QUIZ_SUBMIT_ERROR,
        error
    }
}