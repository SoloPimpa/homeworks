import {applyMiddleware, createStore} from "redux";
import todosReducer from "./reducers/todosReducer";
import reduxLogger from "redux-logger";
import thunk from "redux-thunk";

const myLogger = (store) => {
        return (next) => (action) => {
            console.log('ACTION FIRED: ', action);
            next(action);
        };
    };

const middlewares = applyMiddleware(myLogger, thunk, reduxLogger);


const store = createStore(todosReducer, middlewares);

export default store;