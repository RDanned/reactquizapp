import {useState} from 'react';
import {addAnswer} from "../../redux/reducers/answers/actions";
import {connect} from "react-redux";

type AddAnswerProps = {
    quizId: number
};

const AddAnswer = (props:any) => {
    const [isNewAnswer, setIsNewAnswer] = useState<boolean>(false);
    //const [answerText, setAnswerText] = useState<string>("");
    //const [isRightAnswer, setIsRightAnswer] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    let answerText = "";
    let isRightAnswer = false;


    const reset = () => {

    };

    const handleOpen = () => {
        setIsNewAnswer(true);
    };

    const handleSave = () => {
        props.addAnswer(props.questionId, answerText, isRightAnswer);
        setIsNewAnswer(false);
    };

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //setAnswerText(e.currentTarget.value);
        answerText = e.currentTarget.value;
    };

    const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //setIsRightAnswer(e.currentTarget.checked);
        isRightAnswer = e.currentTarget.checked;
    };

    if(isNewAnswer)
        return(
            <>
                <input type="text" onChange={handleTextChange}/>
                <input type="checkbox" onChange={handleCheckChange}/>
                <button className="btn btn-success m-2" onClick={handleSave}>
                    Save
                </button>
            </>
        );

    return (
        <button className="btn btn-secondary m-2" onClick={handleOpen}>
            <i className="bi bi-plus-circle-fill"> </i>
        </button>
    );
};

export default connect(null, {addAnswer})(AddAnswer);
