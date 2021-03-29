export const getQuestionsByQuizId = (store:any, quizId:number) => {

    console.log(store.questions.byIds);
    console.log(Object.keys(store.questions.byIds).length);
    if(
        store.quizes
        && store.quizes.byIds[quizId]
        && Object.keys(store.questions.byIds).length > 0
    ) {
        return store.questions.byIds.map((question:any) => {
            if(question.quizId == quizId)
                return question;
        });
    } else {
        return false;
    }
};
