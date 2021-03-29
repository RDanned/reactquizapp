export const getQuizesState = (store:any) => store.quizes;

export const getQuizList = (store:any) =>
    getQuizesState(store) ? getQuizesState(store).allIds : [];

export const getQuizById = (store:any, id:number) => {
    return getQuizesState(store) && getQuizesState(store).byIds[id] ? { ...getQuizesState(store).byIds[id], id } : false;
}

export const getQuizes = (store:any) =>
    getQuizList(store).map((id:number) => getQuizById(store, id));
