import React from 'react';
import {Button, Paper} from "@mui/material";
import {NavLink} from "react-router-dom";

function UsersNavigation () {

    return <Paper>
        <Button to="" component={NavLink}>List</Button>
        <Button to="new" component={NavLink}>Add</Button>
        <Button to="/" component={NavLink}>Home</Button>
    </Paper>
}

export default UsersNavigation;