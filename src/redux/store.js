
import {createStore} from 'redux';
import reducers from '../redux/reducers/combineReducers';

const store =  createStore(reducers,{})
export default store