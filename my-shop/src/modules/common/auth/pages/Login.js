import React, {useContext} from 'react';
import {Formik, Form, Field} from "formik";
import {Navigate} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import loginValidationSchema from "../validation/loginValidationSchema";
import {Box, Button, Container, TextField} from "@mui/material";


const initialValues = {username:'', password:'', role:'admin'};



function Login() {
    const auth = useAuth();
    function onSubmit(values){
        auth.login(values.username, values.password, values.role);
    }

    return (
        <Container component="main" maxWidth="xs">
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={loginValidationSchema}>
            {(props)=> console.log(props)||(
            <Box sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Form>
                {auth.isAuthorized && <Navigate to="/"/>}
                {/*{JSON.stringify(auth.user)}*/}
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Name"
                    autoComplete="Name"
                    autoFocus
                    name="username"
                    />

                <TextField margin="normal"
                       required
                       fullWidth
                       name="password"
                       label="Password"
                       type="password"
                       id="password"
                       autoComplete="current-password"
                />


                <Field name="role" placeholder="Role"/>

                <Button type="submit"  fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}>Login</Button>
            </Form>
            </Box>
            )}
        </Formik>
        </Container>
    );
}

export default Login;