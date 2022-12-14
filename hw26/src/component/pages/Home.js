import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const Home = () => {
const [users, setUsers] = useState([]);
useEffect(()=>{
    loadUser();
},[]);
const loadUser = async ()=>{
    const result = await axios.get("http://localhost:3001/users");
    setUsers(result.data);
};
const onDelete = async id =>{
    await axios.delete(`http://localhost:3001/users/${id}`);
    loadUser();
};

    return (
        <div className="container-md">
        <h1>Home page</h1>
        <table className="table">
            <thead>
            <tr className="bg-light">
                <th scope="col"></th>
                <th scope="col">Name</th>
                <th scope="col">Surname</th>
                <th scope="col">Email</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user, index)=>(
                <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                        <Link className="btn" to="/user"><i className="fa-solid fa-eye m-2"></i></Link>
                        <Link className="btn btn-outline-dark m-2" to="/user/edit">Edit</Link>
                        <Link className="btn btn-danger m-2" onClick={()=> onDelete(user.id)}>Delete</Link>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );

}

export default Home;