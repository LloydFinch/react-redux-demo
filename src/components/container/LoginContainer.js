/**
 * Created by LloydFinch on 09/11/2016.
 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import actions from '../../actions/rootActions';
import LoginRender from '../pages/Login';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {state, actions} = this.props;
        return (<LoginRender
                state={state}
                actions={actions}
            />
        );
    }
}

export default connect((state)=>({state: state.loginState}),
    (dispatch)=>({actions: bindActionCreators(actions.loginAction, dispatch)}))(LoginContainer);