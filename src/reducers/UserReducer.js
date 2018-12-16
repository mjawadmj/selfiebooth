import {SAVE_NAME, EMAIL_INPUT, PASS_CHANGE, ONLOADSTART, ON_LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions/types';

const Initial_State ={
    name: null,
    email:null,
    password:null,
    loading:false,
    user:null,
    error:null
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
            return{...state,loading:true}
        case LOGIN_SUCCESS:
            return{...state,loading:false,user:action.payload}
        case LOGIN_FAILURE:
            return{...state,loading:false,error:action.payload}
        default:
            return state;
    }
}