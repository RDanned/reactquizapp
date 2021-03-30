import {useState} from 'react';

const QuizQuestion = (props:any) => {
    const [isNewAnswer, setIsNewAnswer] = useState<boolean>(false);

    const handleCreateNewAnswer = () => {
        setIsNewAnswer(true);
    }

    let question = props.question;
    return (
        <>
        <span>{question.content}</span>
        <button className="btn btn-secondary m-2">
            <i className="bi bi-plus-circle-fill"></i>
        </button>
        <div>
            no answers
        </div>
        </>
    );
};

export default QuizQuestion;
