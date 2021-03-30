import {ADD_QUIZ, CHANGE_QUIZ, DELETE_QUIZ} from "./actionsTypes";

let nextId:number = 0

export const addQuiz = (name: string) => ({
    type: ADD_QUIZ,
    payload: {
        id: nextId++,
        name
    }
});

export const deleteQuiz = (id:number) => ({
   type: DELETE_QUIZ,
   payload: {
       id: id
   }
});

export const changeQuiz = (id:number, name:string) => ({
    type: CHANGE_QUIZ,
    payload: {
        id: id,
        name: name
    }
});
