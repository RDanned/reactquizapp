import React, {useState} from 'react';
import AddAnswer from "./AddAnswer";
import {deleteQuestion} from "../../redux/reducers/questions/actions";
import {connect} from "react-redux";

const QuizQuestion = (props:any) => {
    const handleDelete = (e: React.MouseEvent<HTMLSpanElement>) => {
        props.deleteQuestion(question.id);
    }

    let question = props.question;
    return (
        <>
        <span>{question.content}</span>
        <AddAnswer questionId={question.id}/>
        <span className="m-3 btn btn-danger" onClick={handleDelete}>
            <i className="bi bi-trash-fill"> </i>
        </span>
        <div>
            no answers
        </div>
        </>
    );
};

export default connect(null, {deleteQuestion})(QuizQuestion);
