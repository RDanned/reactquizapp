import {ADD_QUIZ, CHANGE_QUIZ, DELETE_QUIZ} from "./actionsTypes";

let nextId:number = 0;

export const addQuiz = (name: any) => ({
    type: ADD_QUIZ,
    payload: {
        id: nextId++,
        name
    }
});
