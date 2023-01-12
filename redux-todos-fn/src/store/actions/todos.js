import api from '../../api';

export const SET_IS_LOADING = 'SET_IS_LOADING';

export function setIsLoading(payload) {
    return {type: SET_IS_LOADING, payload};
}

export const DELETE_TODO = 'DELETE_TODO';

export function deleteTodo(id) {
    return (dispatch)=>{
        api.delete('todos/' + id). then(() => dispatch({type: DELETE_TODO, payload: id}));
    };
}

export const UPDATE_TODO = 'UPDATE_TODO';
function updateTodo(payload){
    return {type: UPDATE_TODO, payload}
}
export function toggleTodo(id) {
    return (dispatch, getState)=>{
        const todo = getState().list.find((item)=> id === item.id);

        api.put('todos/' + id, {
            ...todo,
            isDone: !todo.isDone,
        }).then(({data})=> dispatch(updateTodo(data)))
    }

}

export const ADD_TODO = 'ADD_TODO';

export function addTodo(newTodo) {
    return (dispatch)=>{
        api.post('todos', {
            ...newTodo,
            isDone: false,
        }).then(({data}) => dispatch({type: ADD_TODO, payload: data}))
    }

}

export const SET_TODOS = 'SET_TODOS';

export function setTodos(payload) {
    return {type: SET_TODOS, payload}
}


export function getTodos() {
    return (dispatch) => {
        dispatch(setIsLoading(true));
        api.get('todos').then(({data}) => {
            dispatch(setTodos(data));
            dispatch(setIsLoading(false));
        });
    };
}
