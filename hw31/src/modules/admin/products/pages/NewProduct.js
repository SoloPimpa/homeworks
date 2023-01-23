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
import { useNavigate } from 'react-router-dom';
import useProducts from "../../../common/products/hooks/useProducts";
import newProductValidationSchema from "../validation/newProductValidationSchema";

const initialValues = {
    title: '',
    description: '',
    price: '',
    categoryId: '',
};

function NewProduct() {
    const navigate = useNavigate();
    const { createProduct } = useProducts();

    function handleClose() {
        navigate('..');
    }

    function handleSubmit(values) {
        createProduct(values).then(handleClose);
    }
    return (
        <Dialog open={true} onClose={handleClose}>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={newProductValidationSchema}
            >
                <Form>
                    <DialogTitle>New Product</DialogTitle>
                    <DialogContent>
                        <MyTextField
                            margin="dense"
                            name="categoryId"
                            label="Product CategoryId"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                        <MyTextField
                            autoFocus
                            margin="dense"
                            name="title"
                            label="Product Name"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                        <MyTextField
                            margin="dense"
                            name="description"
                            label="Product Description"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                        <MyTextField
                            margin="dense"
                            name="price"
                            label="Product Price"
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

export default NewProduct;