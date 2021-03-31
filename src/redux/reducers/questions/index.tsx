import {ADD_QUESTION, CHANGE_QUESTION, DELETE_QUESTION, DELETE_QUESTIONS_BY_QUIZ_ID} from "./actionsTypes";
import {getQuestions} from './selectors';

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
        case CHANGE_QUESTION: {
            return;
        }
        case DELETE_QUESTION: {
            return;
        }
        case DELETE_QUESTIONS_BY_QUIZ_ID: {
            const {quizId} = action.payload;

            let newIds:Array<any> = [];

            const newState = state;

            getQuestions({questions: state}).forEach((question:any) => {
                if(question.quizId === quizId){
                    delete newState.byIds[question.id];
                } else {
                    newIds.push(question.id);
                }
            });

            return {
                ...state,
                allIds: [...newIds],
                byIds: newState.byIds
            };
        }
        default:
            return state;
    }
}
