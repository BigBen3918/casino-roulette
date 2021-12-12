import {combineReducers} from 'redux';
import sessionReducer from './session';

export default combineReducers({
    sessionData: sessionReducer
})