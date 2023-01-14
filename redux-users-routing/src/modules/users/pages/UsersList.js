import React, {useEffect, useState} from 'react';
import {Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button} from "@mui/material";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import selectList from "../../../store/selectors/user";
import {deleteUser, editUser} from "../../../store/actions/user";

function UsersList() {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading]= useState(false);
    const users = useSelector(selectList);

    useEffect(()=>{
        setIsLoading(true);
        setTimeout(()=> {setIsLoading(false)})
    },[]);

    return (
        isLoading ? ('Loading...') :(
                <>
        <TableContainer component={Paper} sx={{marginTop:'20px'}}>
            <Table aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Surname</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map(item => (
                        <TableRow key={item.id}>
                            <TableCell>{item.name}</TableCell>
                            <TableCell align="right">{item.surname}</TableCell>
                            <TableCell align="right">{item.email}</TableCell>
                            <TableCell align="right"><Button variant="outlined" to={item.id} component={NavLink} onClick={()=>dispatch(editUser(item.id))}>Edit</Button>
                                <Button variant="outlined" color="error" onClick={()=>dispatch(deleteUser(item.id))}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
                </>
            )
    );
}

export default UsersList;