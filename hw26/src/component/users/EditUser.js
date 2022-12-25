import React from 'react';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {useState, useEffect} from "react";


const EditUser=()=>{

    const navigate = useNavigate();
    const {id} = useParams();
    const [user, setUser] = useState({
        name:"",
        username:"",
        email:"",
    });

    const {name, username, email} = user;
    const onInputChange = e =>{
        setUser({...user, [e.target.name] : e.target.value});
    };
    const onSubmit = async e =>{
        e.preventDefault();
        await axios.put(`http://localhost:3001/users/${id}`, user);
        navigate.push("/");
    }
    const loadUser = async e =>{
        const result = await axios.get(`http://localhost:3001/users/${id}`);
        setUser(result.data);
    }
    useEffect(()=>{
        loadUser();
    }, []);

    return(
        <div className="container-md">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit User</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg"
                               placeholder="Name" name="name" value={name} onChange={(e) => onInputChange(e)}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg"
                               placeholder="Surname" name="username" value={username} onChange={(e) => onInputChange(e)}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control form-control-lg"
                               placeholder="Email" name="email" value={email} onChange={(e) => onInputChange(e)}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        </div>
    );
}
export default EditUser;