import {useEffect, useState} from "react";
import api from '../../../api';

export default function useUsersList() {
    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    function fetchUsers() {
        setIsLoading(true);
        api.get('users').then(({data}) => setList(data)).finally(()=> setIsLoading(false));
    }

    function deleteUser(id) {
        setIsLoading(true);
        api.delete('users/' + id).then(() => {
            fetchUsers();
        }).finally(()=> setIsLoading(false));
    }

    return {list, deleteUser, fetchUsers, isLoading};
}
