import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const loadState = () => {
    try {
        const serialState = localStorage.getItem('reduxState');
        if(serialState === null) {
            return undefined;
        }

        return JSON.parse(serialState);
    } catch (err) {
        return undefined;
    }
}

export default createStore(rootReducer, loadState(), applyMiddleware(thunk));
