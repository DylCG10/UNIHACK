import { useCallback } from "react";
import { call, takeEvery, put } from 'redux-saga/effects';

import { QUIZ_SUBMITTING } from './constants';
import { quizSubmitSuccess } from './actions';

function quizSubmitApi(action) {
    //return user profile
    
}

function* quizSubmitFlow(action) {
    try {
        const quiz = yield call(quizSubmitApi, action);

        console.log("quiz: ", quiz);

        yield put(quizSubmitSuccess(quiz));
    } catch (error) {
        console.log('error');
    }
}

function* quizWatcher() {
    yield takeEvery(QUIZ_SUBMITTING, quizSubmitFlow);
}

export default quizWatcher;