import React from 'react';
import {ChangeEvent, useState} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {addQuiz} from "../../redux/reducers/quizes/actions";
import {getQuizes} from "../../redux/reducers/quizes/selectors";
import AddQuestion from './AddQuestions';

const Quizes = (props:any) => {

    const [isNewQuiz, setIsNewQuiz] = useState(false);
    const [quizName, setQuizName] = useState("");


    const handleAdd = () => {
        setIsNewQuiz(true);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQuizName(e.target.value);
    };

    const handleSave = () => {
        setIsNewQuiz(false);
        props.addQuiz(quizName);
    };

    return(
        <div className="row">
            <div className="col-12">
                {
                    isNewQuiz &&
                    (
                        <>
                        <input type="text" onChange={handleChange}/>
                        <button className="btn btn-primary" onClick={handleSave}>save</button>
                        </>
                    )
                }
                <button className="btn btn-success" onClick={handleAdd}>add</button>
            </div>
            <ul className="col-6">
                {
                    props.quizes && props.quizes.length
                    ? props.quizes.map((quize:any, index:number) => {
                        return (
                            <Link to={`/admin/quiz/${quize.id}`} key={index}>
                            <li>{quize.name}</li>
                            </Link>
                        )
                    })
                    : "No quizes"
                }
            </ul>
        </div>
    );
};

const mapStateProps = (state: any) => {
    const quizes =  getQuizes(state);
    return {quizes};
};

export default connect(mapStateProps, {addQuiz})(Quizes);
