import React, {useState} from 'react';
import UsersList from "./UsersList";
import UsersForm from "./UsersForm";
import useUsers from "../hooks/useUsers";
import {useNavigate} from "react-router-dom";

function Users () {
    const navigate = useNavigate();
const  {users, isLoading, deleteUser, saveUser} =useUsers();
const [currentUser, setCurrentUser] = useState({});

function editUser(id){
    navigate('/form');
setCurrentUser(users.find((item) => item.id === id));
}

function onSave(newUser){
    saveUser(newUser);
    setCurrentUser({});
}
        return (
            <div>
                {isLoading?'Loading...':
                    <>
            <UsersList users={users} onDelete={deleteUser} onEdit={editUser}/>
            <UsersForm onSave={onSave} currentUser={currentUser}/>
                    </>}
            </div>
        );

}

export default Users;