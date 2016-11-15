/**
 * Created by LloydFinch on 09/11/2016.
 */
import React, {Component, StyleSheet} from 'react';
export default class LoginRender extends Component {
    constructor(props) {
        super(props);
        this.init();
    }

    init() {
        const {loginInit} = this.props.actions;
        loginInit();
    }

    render() {
        const {doLogin} = this.props.actions;
        const {username, message} = this.props.state;
        return (<div>
            <form>
                <input id="username" type="input" ref="username" placeholder="please input username"/><br/>
                <input style={styles.txt} id="password" type="password" ref="password"
                       placeholder="please input password"/><br/>
            </form>
            <br/>

            <button onClick={()=> {
                let username = this.refs.username.value;
                let password = this.refs.password.value;
                doLogin(username, password)
            }}>Login
            </button>

            <div>username:{username}</div>
            <div>response:{message}</div>
        </div>);
    }
}
const txt = {
    margin: 20,
};
const styles = {txt};