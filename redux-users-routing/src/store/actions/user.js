import api from "../../api";

export const DELETE_USER = 'DELETE_USER';
export const deleteUser = (id) => (dispatch) => {
    api.delete('users/' + id).then(() =>
        dispatch({ type: DELETE_USER, payload: id })
    );
}
export const EDIT_USER = 'EDIT_USER';
export const editUser = (id) => (dispatch) => {
        api.put('users/' + id).then(() =>
            dispatch({ type: EDIT_USER, payload:id})
        );
}

export const ADD_USER = 'ADD_USER';
export const addUser = (newUser) => (dispatch) => {
    api.post('users', {
        ...newUser,
    }).then(({ data }) => dispatch({ type: ADD_USER, payload: data }));
}

export const SET_USER = 'SET_USER';
export function setUser(payload){
    return {
        type: SET_USER, payload
    };
}



export const getUsers = () => (dispatch) => {
    api.get('users').then(({data}) => {
        dispatch(setUser(data));
    });
}