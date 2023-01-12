import {Button, Paper, TextField} from "@mui/material";
import useUser from "../hooks/useUser";
import {NavLink, useParams, useNavigate} from "react-router-dom";
// import {useEffect, useState} from "react";
// import useForm from "../../common/hooks/useForm";
import {Field, Form, Formik} from "formik";
import MyTextField from "../../common/components/form/MyTextField";

const EMAIL_REGEXP =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function UserForm() {
    const {id} = useParams();
    const navigate = useNavigate();
    const {user, saveUser} = useUser(id);


    function onFormSubmit(values) {
      saveUser(values).then(() => navigate('..'));

    }

    function validate(values) {
        const errors = {};
        if (!values.name) {
            errors.name = 'Name is Required';
        }
        if (!values.surname) {
            errors.surname = 'Surname is Required';
        }
        if (!values.email.toLowerCase().match(EMAIL_REGEXP)) {
            errors.email = 'Email is Invalid';
        }
        if (!values.email) {
            errors.email = 'Email is Required';
        }

        return errors;

    }

//==
    return (
        <Paper sx={{marginTop: '20px'}}>
            <Formik initialValues={user} enableReinitialize={true} onSubmit={onFormSubmit} validate={validate}
                    validateOnMount={true}>
                {({isValid}) => (
                    <Form>
                        <MyTextField name="name" label="Name" fullWidth/>
                        <MyTextField name="surname" label="Surname" fullWidth/>
                        <MyTextField name="email" type="email" label="Email" fullWidth/>
                        <Button type="submit" color='primary' variant="contained" disabled={!isValid}>Save</Button>
                        <Button to=".." component={NavLink}>Cancel</Button>
                    </Form>
                )}
            </Formik>
        </Paper>
    );
}

export default UserForm;


// <TextField error={touched.name && !!errors.name}
//                    helperText={touched.name ? errors.name : null} name="name" label="Name" variant="outlined"
//                    fullWidth value={values.name}
//                    onChange={handleChange} onBlur={handleBlur}></TextField>
//         <TextField error={touched.name && !!errors.surname}
//         helperText={touched.surname ? errors.surname : null} name="surname" label="Surname"
//         variant="outlined" fullWidth value={values.surname}
//         onChange={handleChange} onBlur={handleBlur}></TextField>
//         <TextField error={touched.name && !!errors.email}
//         helperText={touched.email ? errors.email : null} name="email" label="Email" type="email"
//         variant="outlined" fullWidth value={values.email}
//         onChange={handleChange} onBlur={handleBlur}></TextField>
