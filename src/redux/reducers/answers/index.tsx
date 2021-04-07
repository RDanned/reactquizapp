import {ADD_ANSWER} from './actionsTypes';

const initialState:any = [];


export default function(state:any = initialState, action:any) {
    switch (action.type){
        case ADD_ANSWER: {
            let data = action.payload;

            console.log(state);

            return [...state, data];
        }
        default:
            return state;
    }
}
