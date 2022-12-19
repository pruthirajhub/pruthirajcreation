import { combineReducers } from "redux";
import article from './articleReducer';
import gallery from './gallerReducer';

const rootReducer = combineReducers({
    article,
    gallery
})

export default rootReducer;