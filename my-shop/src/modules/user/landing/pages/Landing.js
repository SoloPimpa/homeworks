import React from 'react';
import {NavLink} from "react-router-dom";
import useUser from "../../../common/auth/hooks/useUser";
import {Box, Button} from "@mui/material";

function Landing() {
    const user = useUser();
    return (
        <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
          {/*{JSON.stringify(user)}*/}
            <Button component={NavLink} to="/auth">Login</Button>
            <Button component={NavLink} to="/admin">Admin Panel</Button>
        </Box>
    );
}

export default Landing;
