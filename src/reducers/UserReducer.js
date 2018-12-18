import {SAVE_NAME, EMAIL_INPUT, PASS_CHANGE, ONLOADSTART, ON_LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, SIGN_OUT, EMPTY_FORM, RETRIEVE_IMAGES} from '../actions/types';

const Initial_State ={
    name: null,
    email:'',
    password:'',
    loading:false,
    user:null,
    error:null,
    images:null
}
export default (state = Initial_State, action) => {
    switch(action.type){
        case SAVE_NAME:
            return {...state,name:action.payload};
        case EMAIL_INPUT:
            return{...state,email:action.payload};
        case PASS_CHANGE:
            return{...state,password:action.payload};
        case ONLOADSTART:
            return{...state,loading:true,error:null}
        case LOGIN_SUCCESS:
            return{...state,loading:false,user:action.payload}
        case LOGIN_FAILURE:
            return{...Initial_State,error:action.payload}
        case SIGN_OUT:
            return{...Initial_State}
        case EMPTY_FORM:
            return{...Initial_State}
        case RETRIEVE_IMAGES:
            return{...state,images:action.payload}
        default:
            return state;
    }
}