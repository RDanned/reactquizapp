import {ADD_QUIZ, CHANGE_QUIZ, DELETE_QUIZ} from "./actionsTypes";

type QuizState = {
    allIds: Array<number>,
    byIds: {
        [id:number]: {
            id?: number,
            name?: string
        }
    }
};

type QuizAction = {
    type: string,
    payload: {
        id: number,
        name: string
    }
};

const initialState:QuizState = {
    allIds: [],
    byIds: {}
};

export default function (state = initialState, action: QuizAction) {
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
        case CHANGE_QUIZ: {
            const {id, name} = action.payload;
            let newState = state;
            newState.byIds[id].name = name;
            return{
                ...state,
                allIds: [...state.allIds],
                byIds: {
                    ...newState.byIds
                }
            };
        }
        case DELETE_QUIZ: {
            const {id} = action.payload;
            let {[id]:deleted, ...newState} = state.byIds;
            return {
                ...state,
                allIds: [...state.allIds.filter((item:number) => item !== id)],
                byIds: {
                    ...newState
                }
            };
        }
        default:
            return state;
    }
}
