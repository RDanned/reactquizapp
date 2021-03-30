import React from 'react';
import {ChangeEvent, useState} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {addQuiz, deleteQuiz} from "../../redux/reducers/quizes/actions";
import {getQuizes} from "../../redux/reducers/quizes/selectors";
import Quize from "./Quize";
import AddQuize from "./AddQuize";

const Quizes = (props:any) => {
    return(
        <div className="row">
            <AddQuize/>
            <ul className="col-6 list-group mt-3">
                {
                    props.quizes && props.quizes.length
                    ? props.quizes.map((quize:any, index:number) => {
                        return (
                            <Quize quize={quize}/>
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

export default connect(mapStateProps)(Quizes);
