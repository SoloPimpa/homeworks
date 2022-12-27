import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";

const User =()=>{
    const [user, setUser] = useState({
        name:"",
        username:"",
        email:"",
    });

    const {id} = useParams();
    useEffect(()=>{
        loadUser();
    }, []);

    const loadUser = async () =>{
        const res = await axios.get(`http://localhost:3001/users/${id}`);
        setUser(res.data);
    }

    return(
<div className="container py-4">
    <Link className="btn btn-dark" to="/home">Back to home page</Link>
    <h1 className="display-4">User</h1>
    <hr/>
    <ul className="list-group w-50">
        <li className="list-group-item">name:{user.name}</li>
        <li className="list-group-item">surname:{user.username}</li>
        <li className="list-group-item">email:{user.email}</li>
    </ul>

</div>
    );
}
export default User;