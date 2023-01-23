import { Outlet } from 'react-router-dom';
import React from 'react';

import ProductsTable from "../components/ProductsTable";

function ProductsList() {
    return (
        <>
            <ProductsTable />
            <Outlet />
        </>
    );
}

export default ProductsList;
