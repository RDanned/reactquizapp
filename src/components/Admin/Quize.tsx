import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {changeQuiz, deleteQuizWithQuestions} from '../../redux/reducers/quizes/actions';

const Quize = (props:any) => {
    let quize = props.quize;

    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [name, setName] = useState<string>("");

    useEffect(() => {
        setName(quize.name);
    }, []);

    const handleDelete = (e: React.MouseEvent<HTMLSpanElement>) => {
        props.deleteQuizWithQuestions(quize.id);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    };

    const handleEdit = (e: React.MouseEvent<HTMLSpanElement>) => {
        setIsEditing(true);
    };

    const handleSave = (e: React.MouseEvent<HTMLSpanElement>) => {
        props.changeQuiz(quize.id, name);
        setIsEditing(false);
    };

    if(isEditing){
        return(
            <li className="list-group-item list-group-item-action" key={quize.id}>
                <input type="text" onChange={handleChange} value={name}/>
                <span className="m-3 btn btn-danger" onClick={handleSave}>
                    <i className="bi bi-check-square-fill"> </i>
                </span>
            </li>
        );
    } else {
        return(
            <li className="list-group-item list-group-item-action" key={quize.id}>
                <Link to={`/admin/quiz/${quize.id}`}>
                    {quize.name}
                </Link>
                <span className="m-3 btn btn-secondary" onClick={handleEdit}>
                    <i className="bi bi-pen-fill"> </i>
                </span>
                <span className="m-3 btn btn-danger" onClick={handleDelete}>
                    <i className="bi bi-trash-fill"> </i>
                </span>
            </li>
        );
    }
}

export default connect(null, {deleteQuizWithQuestions, changeQuiz})(Quize);
