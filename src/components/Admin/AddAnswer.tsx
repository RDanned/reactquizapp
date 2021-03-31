import {useState} from 'react';
import {addAnswer} from "../../redux/reducers/answers/actions";

type AddAnswerProps = {
    quizId: number
};

const AddAnswer = (props:any) => {
    const [isNewAnswer, setIsNewAnswer] = useState<boolean>(false);
    const [answerText, setAnswerText] = useState<string>("");
    const [isRightAnswer, setIsRightAnswer] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const reset = () => {

    };

    const handleOpen = () => {
        setIsNewAnswer(true);
    };

    const handleSave = () => {
        props.addAnswer(props.questionId, answerText, isRightAnswer);
    };

    const handleTextChange = () => {

    };

    const handleCheckChange = () => {

    };

    if(isNewAnswer)
        return(
            <>
                <input type="text" value={answerText}/>
                <input type="checkbox" checked={isNewAnswer}/>
                <button className="btn btn-success m-2">
                    Save
                </button>
            </>
        );

    return (
        <button className="btn btn-secondary m-2">
            <i className="bi bi-plus-circle-fill"></i>
        </button>
    );
};

export default AddAnswer;
