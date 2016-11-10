/**
 * Created by LloydFinch on 09/11/2016.
 */
import * as types from '../constants/ActionTypes';
import API from '../constants/API';
import RSAKey from '../utils/rsa/rsa';

const [username,password] = ['admin', '123456'];

//登陆页面初始化
export function loginInit() {
    return {type: types.LOGIN_INIT};
}

//登陆
export function doLogin(username = username, password = password) {
    return dispatch=> {

        dispatch(loading());

        getPubKey(username, password, dispatch);
        //网络返回就dispatch()
        //dispatch(loaded({username: username, message: 'success'}));
    }
}

//获取公钥
function getPubKey(username, password, dispatch) {
    let url = API.GET_PUBKEY;
    fetch(url).then((response)=>
        response.json()
    ).then((json)=> {
        console.log('pubkey:' + JSON.stringify(json));
        let publicKeyModulus = json.publicKeyModulus;
        let publicKeyExponent = json.publicKeyExponent;
        let rsa = new RSAKey();
        rsa.setPublic(publicKeyModulus, publicKeyExponent);
        let encryptPsw = rsa.encrypt(password);
        loginByPut(username, encryptPsw, dispatch);
    }).catch((error)=> {
        dispatch(loaded({message: ' get pubKey failure'}));
        console.log('KEY_ERROR:' + error.toString());
    });
}

//请求登陆
function loginByPut(username, password, dispatch) {
    let url = API.LOGIN_URL;
    let jsonParams = JSON.stringify({'Uid': username, 'Password': password});
    fetch(url, {
        method: 'POST', body: jsonParams
    }).then((response)=>response.json()).then((json)=> {
        dispatch(loaded({username: username, message: JSON.stringify(json)}));
    }).catch((error)=> {
        dispatch(loaded({message: 'login failure'}));
        console.log('LOGIN_ERROR:', +error.toString());
    });
}

//加载中
function loading() {
    return {type: types.LOGIN_ING};
}

//加载结束
function loaded(result) {
    return Object.assign({}, {type: types.LOGIN_ED}, result);
}