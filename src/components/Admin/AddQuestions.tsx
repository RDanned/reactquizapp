import {useState} from 'react';
import {connect} from 'react-redux';
import {addQuestion} from '../../redux/reducers/questions/actions';

const AddQuestion = (props:any) => {

    let [content, setContent] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.currentTarget.value);
    }

    const handleSave = (e: React.MouseEvent<HTMLButtonElement>) => {
        props.addQuestion(content, props.quizId, false);
    }

    return(
        <>
            <input type="text" onChange={handleChange}/>
            <button className="btn btn-success" onClick={handleSave}>
                Add question
            </button>
        </>
    )
}

export default connect(null, {addQuestion})(AddQuestion);
