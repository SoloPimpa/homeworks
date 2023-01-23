import { useContext } from 'react';
import {ProductsContext} from "../providers/ProductsProvider";

export default function useProduct() {
    const value = useContext(ProductsContext);

    if (value === null) {
        throw new Error('You should wrap you react tree in ProductsProvider');
    }

    return value;
}