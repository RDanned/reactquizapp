import {ADD_ANSWER, CHANGE_ANSWER, DELETE_ANSWER} from "./actionsTypes";

let nextId:number = 0;

export const addAnswer = (questionId:number, content:string, isRight:boolean) => {
    return {
        type: ADD_ANSWER,
        payload: {
            content: content,
            questionId: questionId,
            isRight: isRight
        }
    }
}
