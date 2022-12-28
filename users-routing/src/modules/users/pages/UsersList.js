import React from 'react';
import useUsersList from "../hooks/useUsersList";
import {Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Button} from "@mui/material";
import {NavLink} from "react-router-dom";

function UsersList() {
    const {list, deleteUser, isLoading} = useUsersList();
    return (
        <TableContainer component={Paper} sx={{marginTop:'20px'}}>
            {isLoading ? ('Loading...') :(
                <>
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
                    {list.map(item => (
                        <TableRow key={item.id}>
                            <TableCell>{item.name}</TableCell>
                            <TableCell align="right">{item.surname}</TableCell>
                            <TableCell align="right">{item.email}</TableCell>
                            <TableCell align="right"><Button variant="outlined" to={item.id} component={NavLink}>Edit</Button><Button variant="outlined" color="error" onClick={()=>deleteUser(item.id)}>Delete</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
                </>
            )}
        </TableContainer>
    );
}

export default UsersList;