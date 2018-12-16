import {SAVE_NAME,EMAIL_INPUT, PASS_CHANGE, ONLOADSTART, LOGIN_SUCCESS, LOGIN_FAILURE} from './types';
import {fire} from '../config/Global';
export const onEmailInput=(email)=>{
    return{
        type:EMAIL_INPUT,
        payload:email
    }
}
export const onPassChange=(pass)=>{
    return{
        type:PASS_CHANGE,
        payload:pass
    }
}
export const onLogin=(email,password)=>{
    return(dispatch)=>{
        dispatch({type: ONLOADSTART});
        setTimeout(()=>{
        fire.auth().signInWithEmailAndPassword(email, password)
        .then(function(firebaseUser) {
            successLogin(dispatch,firebaseUser)
        })
        .catch(function(error) {
            failLogin(dispatch,error)
        })},3000);
        }
}
export const successLogin=(dispatch,firebaseUser)=>{
    dispatch({
        type: LOGIN_SUCCESS,
        payload: firebaseUser.user
    })

}
export const failLogin=(dispatch,error)=>{
    dispatch({
        type: LOGIN_FAILURE,
        payload: error
    })

}



