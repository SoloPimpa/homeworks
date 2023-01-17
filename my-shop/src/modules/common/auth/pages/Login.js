import React from 'react';
import {Formik, Form} from "formik";
import {Navigate, NavLink} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import loginValidationSchema from "../validation/loginValidationSchema";
import {Box, Button, Checkbox, Container, FormControlLabel} from "@mui/material";
import MyTextField from "../components/form/MyTextField";

const initialValues = {username: '', password: '', role: ''};

function Login() {
    const auth = useAuth();

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
                            <MyTextField  margin="normal"
                                          fullWidth
                                          name="password"
                                          label="Password"
                                          type="password"
                                          autoComplete="current-password"/>
                            <MyTextField name="role" placeholder="Role" fullWidth margin="normal"></MyTextField>
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
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