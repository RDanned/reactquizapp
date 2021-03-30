import React, {useState} from "react";
import {connect} from "react-redux";
import {addQuiz} from "../../redux/reducers/quizes/actions";

const AddQuize = (props:any) => {
    const [isNewQuiz, setIsNewQuiz] = useState(false);
    const [quizName, setQuizName] = useState("");
    let [isError, setIsError] = useState<boolean>(false)
    let [error, setError] = useState<string>("");

    const handleAdd = () => {
        setIsNewQuiz(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuizName(e.target.value);
    };

    const handleSave = () => {

        if(quizName.length === 0) {
            setIsError(true);
            setError("Fill quiz name!");
        } else {
            props.addQuiz(quizName);
            setIsNewQuiz(false);
            setIsError(false);
            setQuizName("");
        }

    };

    return(
        <div className="col-12">
            {
                isNewQuiz
                ?
                (
                    <>
                        {isError && (<div className="alert alert-danger">{error}</div>)}
                        <input type="text" onChange={handleChange} value={quizName}/>
                        <button className="btn btn-primary" onClick={handleSave}>save</button>
                    </>
                )
                :<button className="btn btn-success" onClick={handleAdd}>add</button>
            }
        </div>
    )
}

export default connect(null, {addQuiz})(AddQuize);
