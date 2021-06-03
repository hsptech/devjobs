import { combineReducers } from 'redux';
import reducer from '../reducer';

const RootReducer = combineReducers({ jobs: reducer });

export default RootReducer;
