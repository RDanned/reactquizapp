export const getQuestionsState = (store:any) => store.questions;

export const getQuestionsList = (store:any) =>
    getQuestionsState(store) ? getQuestionsState(store).allIds : [];

export const getQuestionById = (store:any, id:number) => {
    return getQuestionsState(store) && getQuestionsState(store).byIds[id] ? { ...getQuestionsState(store).byIds[id], id } : false;
}

export const getQuestions = (store:any) =>
    getQuestionsList(store).map((id:number) => getQuestionById(store, id));

export const getQuestionsByQuizId = (store:any, quizId:number) => {
    return getQuestions(store).filter((question:any) =>{
        if(question.quizId == quizId){
            return question;
        }
    });
};
