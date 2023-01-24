import {
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
import React from 'react';
import useProducts from "../../../common/products/hooks/useProducts";

function ProductsTable() {
    const { list, removeProduct} = useProducts();
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="center">CategoryId</TableCell>
                        <TableCell align="center">Product Name</TableCell>
                        <TableCell align="center">Description</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list.map(({ id, title, description, price, categoryId }) => (
                        <TableRow
                            key={id}
                            sx={{
                                '&:last-child td, &:last-child th': {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {id}
                            </TableCell>
                            <TableCell align="center">{categoryId}</TableCell>
                            <TableCell align="center">{title}</TableCell>
                            <TableCell align="center">{description}</TableCell>
                            <TableCell align="center">{price}</TableCell>
                            <TableCell align="center" sx={{display:'flex'}}>
                                <IconButton
                                    color="error"
                                    onClick={() => removeProduct(id)}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ProductsTable;