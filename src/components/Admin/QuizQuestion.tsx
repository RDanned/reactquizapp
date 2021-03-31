import {useState} from 'react';
import AddAnswer from "./AddAnswer";

const QuizQuestion = (props:any) => {
    const [isNewAnswer, setIsNewAnswer] = useState<boolean>(false);

    const handleCreateNewAnswer = () => {
        setIsNewAnswer(true);
    }

    let question = props.question;
    return (
        <>
        <span>{question.content}</span>
        <AddAnswer questionId={question.id}/>
        <div>
            no answers
        </div>
        </>
    );
};

export default QuizQuestion;
