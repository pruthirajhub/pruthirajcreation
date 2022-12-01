import {combineReducers} from 'redux';
import films from './movieReducers';

// declare all the reducers
const rootReducer = combineReducers({
    films
})

export default rootReducer;