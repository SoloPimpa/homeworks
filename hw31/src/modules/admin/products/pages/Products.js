import { NavLink, Outlet } from 'react-router-dom';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { IconButton } from '@mui/material';
import React from 'react';
import ProductsProvider from "../../../common/products/providers/ProductsProvider";

function Products() {
    return (
        <ProductsProvider>
            <Outlet />
            <IconButton component={NavLink} to="new">
                <AddCircleOutlineIcon />
            </IconButton>
        </ProductsProvider>
    );
}

export default Products;