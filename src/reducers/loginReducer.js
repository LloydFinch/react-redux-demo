/**
 * Created by LloydFinch on 09/11/2016.
 */
import * as types from '../constants/ActionTypes';

const initialState = {loading: false, username: 'admin', message: 'failure'};

export default function loginState(state = initialState, action = {}) {
    switch (action.type) {
        case types.LOGIN_INIT:
            return Object.assign({}, state);
        case types.LOGIN_ING:
            return Object.assign({}, state, {loading: true});
        case types.LOGIN_ED:
            return Object.assign({}, state, {loading: false}, action);
        default:
            return state;
    }
}