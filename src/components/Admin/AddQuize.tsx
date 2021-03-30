import React, {useState} from "react";
import {connect} from "react-redux";
import {addQuiz} from "../../redux/reducers/quizes/actions";

const AddQuize = (props:any) => {
    const [isNewQuiz, setIsNewQuiz] = useState(false);
    const [quizName, setQuizName] = useState("");


    const handleAdd = () => {
        setIsNewQuiz(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuizName(e.target.value);
    };

    const handleSave = () => {
        setIsNewQuiz(false);
        props.addQuiz(quizName);
    };

    return(
        <div className="col-12">
            {
                isNewQuiz
                ?
                (
                    <>
                        <input type="text" onChange={handleChange}/>
                        <button className="btn btn-primary" onClick={handleSave}>save</button>
                    </>
                )
                :<button className="btn btn-success" onClick={handleAdd}>add</button>
            }
        </div>
    )
}

export default connect(null, {addQuiz})(AddQuize);
