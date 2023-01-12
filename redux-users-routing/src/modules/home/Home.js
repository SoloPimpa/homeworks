import React from 'react';
import {Button, Paper} from "@mui/material";
import {NavLink} from "react-router-dom";

function Home() {

    return <Paper>My contacts app is a handy and easy to use app with which you can create your own address book. When viewing the list of contacts, the user sees all information about contacts (name, surname, e-mail). The user can add, edit and delete contacts. <Button to="users" component={NavLink}>Enjoy this app.</Button></Paper>;
}

export default Home;