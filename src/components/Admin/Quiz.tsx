import {Redirect, useParams} from "react-router";
import {connect} from "react-redux";
import {getQuizById} from "../../redux/reducers/quizes/selectors";
import {getQuestionsByQuizId} from "../../redux/reducers/questions/selectors";
import AddQuestion from "./AddQuestions";
import React from "react";
import QuizQuestions from "./QuizQuestions";

const Quiz = (props:any) => {
    let {id}:any = useParams();

    const quiz = getQuizById(props.state, id);
    const questions = getQuestionsByQuizId(props.state, id);

    return(
        <>
        {!quiz && (<Redirect to="/404"/>)}
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h1>{quiz.name}</h1>
                </div>
            </div>
            <div className="row">
                <AddQuestion quizId={quiz.id}/>
            </div>
            <div className="row">
                <QuizQuestions questions={questions}/>
            </div>
        </div>
        </>
    );
};


const mapToStateProps = (state:any) => {
    return {state};
}

export default connect(mapToStateProps)(Quiz);
