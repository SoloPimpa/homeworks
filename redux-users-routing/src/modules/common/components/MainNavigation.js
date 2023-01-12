import React from 'react';
import {AppBar, Button, Toolbar} from "@mui/material";
import {NavLink} from "react-router-dom";

function MainNavigation() {

    return (
        <AppBar position="static">
            <Toolbar>
                <Button variant="h6" size="large" sx={{flexGrow: 1}} to="users" component={NavLink}>My Contacts App</Button>
                <Button color="inherit" to="users" component={NavLink}>Users</Button>
            </Toolbar>
        </AppBar>
    );
}

export default MainNavigation;

