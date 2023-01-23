import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
} from '@mui/material';
import { Form, Formik } from 'formik';

import MyTextField from '../../../common/form/MyTextField';
import React from 'react';
import useCategories from '../../../common/categories/hooks/useCategories';
import { useNavigate } from 'react-router-dom';
import editCategoryValidationSchema from "../validation/editCategoryValidationSchema";

const initialValues = {
    title:'',
    id:'',
};

function EditCategory() {
    const navigate = useNavigate();
    const { updateCategory } = useCategories();

    function handleClose() {
        navigate('..');
    }

    function handleSubmit(value) {
        updateCategory(value).then(handleClose);
    }
    return (
        <Dialog open={true} onClose={handleClose}>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={editCategoryValidationSchema}
            >
                <Form>
                    <DialogTitle>Edit Category</DialogTitle>
                    <DialogContent>
                        <MyTextField
                            autoFocus
                            margin="dense"
                            name="title"
                            label="Edit Category Name"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="submit">Save</Button>
                    </DialogActions>
                </Form>
            </Formik>
        </Dialog>
    );
}

export default EditCategory;