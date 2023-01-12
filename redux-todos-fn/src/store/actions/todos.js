export const DELETE_TODO = 'DELETE_TODO';
export function deleteTodo(payload){
    return {type: DELETE_TODO, payload};
}

export const TOGGLE_TODO = 'TOGGLE_TODO';
export function toggleTodo(payload){
    return {type: TOGGLE_TODO, payload};
}

export const ADD_TODO = 'ADD_TODO';
export function addTodo(payload){
    return {type: ADD_TODO, payload}
}

export const SET_TODOS = 'SET_TODOS';
export function setTodos(payload){
    return {type: SET_TODOS, payload}
}
