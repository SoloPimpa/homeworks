import { useEffect, useState } from 'react';

import api from '../../../../api';

export default function useCategoriesProvider() {
    const [list, setList] = useState([]);

    function fetchCategories() {
        return api.get('categories',{
            headers: {'Authorization': `Bearer`},
        }).then(({ data }) => setList(data));
    }

    function removeCategory(id) {
        return api.delete('categories/' + id, {
            headers: {'Authorization': `Bearer`},
        }).then(fetchCategories);
    }

    function createCategory(newCategory) {
        return api.post('categories', newCategory, {
            headers: {'Authorization': `Bearer`},
        }).then(fetchCategories);
    }

    function updateCategory(updatedCategory) {
        return api.put('categories/' + updatedCategory.id, updatedCategory, {
                headers: {'Authorization': `Bearer`},
            })
            .then(fetchCategories);
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    return {
        list,
        removeCategory,
        createCategory,
        updateCategory,
    };
}
