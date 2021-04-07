import React from "react";
import QuizQuestion from "./QuizQuestion";
import {v4 as uuid} from 'uuid';

const QuizQuestions = (props:any) => {
    let questions = props.questions;
    return(
        <>
            {
                questions
                    ?
                    (
                        <ul className="list-group mt-3 col-6">
                        {questions.map((question:any)=>(
                            <li className="list-group-item" key={uuid()}>
                                <QuizQuestion question={question}/>
                            </li>
                        ))}
                        </ul>
                    )
                    :
                    (<div>no questions</div>)
            }
        </>
    );
}

export default QuizQuestions;
