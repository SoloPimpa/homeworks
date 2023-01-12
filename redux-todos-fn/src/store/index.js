import {applyMiddleware, createStore} from "redux";
import todosReducer from "./reducers/todosReducer";
import reduxLogger from "redux-logger";

const myLogger = (store) => {
        return (next) => (action) => {
            console.log('ACTION FIRED: ', action);
            next(action);
        };
    };

const middlewares = applyMiddleware(myLogger, reduxLogger);


const store = createStore(todosReducer, middlewares);

export default store;