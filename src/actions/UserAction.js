import {SAVE_NAME} from './types';
export const onSave = (name)=>{
    return{
        type:SAVE_NAME,
        payload:name
    }
}
