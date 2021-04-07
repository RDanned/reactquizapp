import {combineReducers} from 'redux';

import quizes from './quizes';
import questions from './questions';
import answers from './answers';

export default combineReducers({quizes, questions, answers});
