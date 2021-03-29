import {ADD_QUESTION} from "./actionsTypes";

let initialState = {
    allIds: [],
    byIds: {}
};

export default function(state:any = initialState, action:any){
    switch (action.type){
        case ADD_QUESTION: {
            const payload:any = action.payload;
            return {
                ...state,
                allIds: [...state.allIds, payload.id],
                byIds: {
                    ...state.byIds,
                    [payload.id]: {
                        ...payload
                    }
                }

            }

        }
        default:
            return state;
    }
}
