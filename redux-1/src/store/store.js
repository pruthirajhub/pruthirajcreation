import {createStore} from 'redux';
import reducer from '../reducers/mainReducer';

// We are connecting store to reducers;
let store = createStore(reducer);

export default store;