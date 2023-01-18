import React from 'react';
import {Formik, Form} from "formik";
import {Navigate, NavLink} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import loginValidationSchema from "../validation/loginValidationSchema";
import {Box, Button, Checkbox, Container, FormControlLabel, Typography, MenuItem} from "@mui/material";
import MyTextField from "../components/form/MyTextField";

const initialValues = {username: '', password: '', role: ''};

function Login() {
    const auth = useAuth();
    const roles = [
        {
            role: 'admin',
            label: 'admin'
        },
        {
            role: 'manager',
            label: 'manager'
        },
        {
            role: 'user',
            label: 'user'
        },
        {
            role: 'accountant',
            label: 'accountant'
        },
    ]

    function onSubmit(values) {
        auth.login(values.username, values.password, values.role);
    }

    return (
        <Container component="main" maxWidth="xs">
            <Box sx={{
                marginTop: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={loginValidationSchema}>
                    {(props) => console.log(props) || (
                        <Form>
                            {auth.isAuthorized && <Navigate to="/"/>}
                            {/*{JSON.stringify(auth.user)}*/}
                            <MyTextField margin="normal"
                                         fullWidth
                                         label="Name"
                                         name="username"
                                         autoComplete="name"
                                         autoFocus/>
                            <MyTextField margin="normal"
                                         fullWidth
                                         name="password"
                                         label="Password"
                                         type="password"
                                         autoComplete="current-password"/>
                            <MyTextField name="role" margin="normal" select label="Role" fullWidth>
                                {roles.map((option) => (
                                    <MenuItem key={option.role} value={option.role}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </MyTextField>

                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary"/>}
                                label="Remember me"
                            />
                            <Button type="submit" fullWidth variant="contained" sx={{mt: 3, mb: 2}}>Login</Button>
                            <Button to="/" component={NavLink} fullWidth>Cancel</Button>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Container>
    );
}

export default Login;