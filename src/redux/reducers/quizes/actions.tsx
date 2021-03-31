import {ADD_QUIZ, CHANGE_QUIZ, DELETE_QUIZ} from "./actionsTypes";
import {deleteQuestionsByQuizId} from "../questions/actions";

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

export const deleteQuizWithQuestions = (id:number) => {
    return function (dispatch:any) {
        dispatch(deleteQuestionsByQuizId(id));
        return dispatch(deleteQuiz(id));
    }
};

export const changeQuiz = (id:number, name:string) => ({
    type: CHANGE_QUIZ,
    payload: {
        id: id,
        name: name
    }
});
