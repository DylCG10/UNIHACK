import { all } from 'redux-saga/effects';
import LoginSaga from './login/sagas.js';

export default function* IndexSagas() {
    yield all([
        LoginSaga()
    ]);
}