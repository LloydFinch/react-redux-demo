/**
 * Created by LloydFinch on 09/11/2016.
 */
import {combineReducers} from 'redux';
import loginState from '../reducers/loginReducer';

const rootReducer = combineReducers({
    loginState
});

export default rootReducer;