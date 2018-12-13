import {SAVE_NAME} from '../actions/types';

const Initial_State ={
    name: null
}
export default (state = Initial_State, action) => {
    console.log(action)
    switch(action.type){
        case SAVE_NAME:
            return {...state,name:action.payload};
        default:
            return state;
    }
}