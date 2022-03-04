import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

const globalStore = createStore(rootReducer, composeWithDevTools());

export default globalStore;
