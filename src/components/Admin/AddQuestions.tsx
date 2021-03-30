import {useState} from 'react';
import {connect} from 'react-redux';
import {addQuestion} from '../../redux/reducers/questions/actions';

const AddQuestion = (props:any) => {

    let [content, setContent] = useState<string>("");
    let [isError, setIsError] = useState<boolean>(false)
    let [error, setError] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.currentTarget.value);
    }

    const handleSave = (e: React.MouseEvent<HTMLButtonElement>) => {
        if(content.length === 0) {
            setIsError(true);
            setError("Fill question name!")
        } else {
            props.addQuestion(content, props.quizId);
            setIsError(false);
        }
    }

    return(
        <>
            <div className="col-6">
                {isError && (<div className="alert alert-danger">{error}</div>)}
                <input className="form-control col-3" type="text" onChange={handleChange}/>
                <button className="btn btn-success" onClick={handleSave}>
                    Add question
                </button>
            </div>
        </>
    )
}

export default connect(null, {addQuestion})(AddQuestion);
