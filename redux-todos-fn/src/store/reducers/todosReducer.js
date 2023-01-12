import {ADD_TODO, DELETE_TODO, UPDATE_TODO, SET_TODOS, SET_IS_LOADING} from "../actions/todos";

const INITIAL_STATE = {
    isLoading: false,
    list: [
        {id: 1, title: 'Item 1', isDone: true},
        {id: 2, title: 'Item 2', isDone: false},
        {id: 3, title: 'Item 3', isDone: true},
        {id: 4, title: 'Item 4', isDone: false},
        {id: 5, title: 'Item 5', isDone: false},
    ],
};

export default function (state = INITIAL_STATE, {type, payload}) {
    switch (type) {
        case SET_IS_LOADING: return {...state, isLoading: payload};
        case DELETE_TODO:
            return {...state, list: state.list.filter((item) => payload !== item.id)};

        case UPDATE_TODO: return {
            ...state,
            list: state.list.map((item)=>
            item.id === payload.id ? payload : item),
        }

        case ADD_TODO:
            return {
                ...state, list: [
                    ...state.list,
                    payload
                ],
            };
        case SET_TODOS:
            return {
                ...state,
                list: payload,
            }

        default:
            return state;
    }
}