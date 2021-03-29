import {ADD_QUIZ, CHANGE_QUIZ, DELETE_QUIZ} from "./actionsTypes";

const initialState = {
    allIds: [],
    byIds: {}
};

export default function (state = initialState, action: any) {
    switch (action.type) {
        case ADD_QUIZ: {
            const {id, name} = action.payload;
            return {
                ...state,
                allIds: [...state.allIds, id],
                byIds: {
                    ...state.byIds,
                    [id]: {
                        name
                    }
                }
            };
        }
        default:
            return state;
    }
}
