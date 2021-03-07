import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import login from './login/reducer';
import client from './client/reducer';

const IndexReducer = combineReducers({
    login,
    client
});

export default IndexReducer;