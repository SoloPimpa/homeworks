import React, {useEffect, useState} from 'react';
import UsersService from "../services/UsersService";

export default function useUsers(){
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        UsersService.getList().then(setUsers).finally(()=> setIsLoading(false));
    },[]);

    function deleteUser(id){
        setIsLoading(true);
        UsersService.delete(id).then(()=>{
            setUsers(users.filter((item) => item.id !==id));
        }).finally(()=> setIsLoading(false));
    }

    function saveUser(user){
        if(user.id){
            updateUser(user)
        }else {
            createUser(user)
        }
    }

    function updateUser(user){
        setIsLoading(true);
        UsersService.update(user).then((data) =>{
            setUsers(users.map((item)=>(item.id === data.id ? data: item)));
        }).finally(()=> setIsLoading(false));
    }

    function createUser (user){
        setIsLoading(true);
        UsersService.create(user).then((data) =>{
            setUsers([...users, data]);
        }).finally(()=> setIsLoading(false));
    }

    return{
        users,
        deleteUser,
        saveUser,
        isLoading,
    }
}