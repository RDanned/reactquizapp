import {ADD_QUESTION, CHANGE_QUESTION, DELETE_QUESTION} from "./actionsTypes";

let nextId:number = 0;

export const addQuestion = (content:any, quizId:number) => ({
    type: ADD_QUESTION,
    payload: {
        id: ++nextId,
        quizId: quizId,
        content: content,
    }
});
