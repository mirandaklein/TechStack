import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer.js';

export default combineReducers({
    libraries: LibraryReducer
});