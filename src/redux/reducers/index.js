import { combineReducers } from 'redux';
import globalReducer from './globalReducer';

const rootReducer = combineReducers({ globalReducer });

export default rootReducer;
