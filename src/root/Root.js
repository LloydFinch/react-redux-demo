/**
 * Created by LloydFinch on 09/11/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from '../store/store';
import LoginContainer from '../components/container/LoginContainer';

const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <LoginContainer/>
    </Provider>,
    document.getElementById('root')
);