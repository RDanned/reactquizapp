import {ADD_QUESTION, CHANGE_QUESTION, DELETE_QUESTION, DELETE_QUESTIONS_BY_QUIZ_ID} from "./actionsTypes";
import {getQuestions} from './selectors';

type Question = {
    id: number,
    quizId: string,
    content: string
};

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
            const {id} = action.payload;

            let {[id]:deleted, ...newState} = state.byIds;

            return {
                ...state,
                allIds: [...state.allIds.filter((item:number) => item != id)],
                byIds: {
                    ...newState
                }
            };
        }
        case DELETE_QUESTIONS_BY_QUIZ_ID: {
            const {quizId} = action.payload;

            let newIds:Array<any> = [];

            let newItems:any = {};

            getQuestions({questions: state}).forEach((question:Question) => {
                if(question.quizId != quizId){
                    newItems[question.id] = question;
                    newIds.push(question.id);
                }
            });

            return {
                ...state,
                allIds: [...newIds],
                byIds: newItems
            };
        }
        default:
            return state;
    }
}
