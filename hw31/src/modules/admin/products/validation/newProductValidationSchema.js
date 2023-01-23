import * as yup from 'yup';

export default yup.object().shape({
    title: yup.string().required().min(3).label('Product Name'),
    description: yup.string().required().min(3).label('Product Description'),
    price: yup.string().required().min(2).label('Product Price'),
    categoryId: yup.string().required().min(1).label('Product CategoryId'),
});
