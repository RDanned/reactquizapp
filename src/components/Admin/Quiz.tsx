import {Redirect, useParams} from "react-router";
import {connect} from "react-redux";
import {getQuizById} from "../../redux/reducers/quizes/selectors";
import {getQuestionsByQuizId} from "../../redux/reducers/questions/selectors";
import AddQuestion from "./AddQuestions";
import React from "react";

const Quiz = (props:any) => {
    let {id}:any = useParams();

    const quiz = getQuizById(props.state, id);
    const questions = getQuestionsByQuizId(props.state, id);

    console.log(questions);
    return(
        <>
        {!quiz && (<Redirect to="/404"/>)}
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h1>{quiz.name}</h1>
                </div>
            </div>
            <div className="row justify-content-center">
                {
                    questions
                    ? (<>
                            {questions.map((question:any)=>(<div className="alert alert-light">{question.content}</div>))}
                        </>)
                    : (<div>no questions</div>)
                }
            </div>
            <AddQuestion quizId={quiz.id}/>
        </div>
        </>
    );
};


const mapToStateProps = (state:any) => {
    return {state};
}

export default connect(mapToStateProps)(Quiz);
