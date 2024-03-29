import { Navigate, Route, Routes } from 'react-router-dom';

import AdminApp from './modules/admin/AdminApp';
import Auth from './modules/common/auth/pages/Auth';
import Categories from './modules/admin/categories/pages/Categories';
import CategoriesList from './modules/admin/categories/pages/CategoriesList';
import { Container } from '@mui/system';
import { CssBaseline } from '@mui/material';
import Dashboard from './modules/admin/dashboard/pages/Dashboard';
import Landing from './modules/user/landing/pages/Landing';
import Login from './modules/common/auth/pages/Login';
import Logout from './modules/common/auth/pages/Logout';
import NewCategory from './modules/admin/categories/pages/NewCategory';
import Products from './modules/admin/products/pages/Products';
import Signup from './modules/common/auth/pages/Signup';
import ProductsList from "./modules/admin/products/pages/ProductsList";
import NewProduct from "./modules/admin/products/pages/NewProduct";
import EditCategory from "./modules/admin/categories/pages/EditCategory";
import EditProduct from "./modules/admin/products/pages/EditProduct";

function App() {
    return (
        <Container component="main" maxWidth="sm">
            <CssBaseline />

            <Routes>
                <Route path="/" exact element={<Landing />} />
                <Route path="/shop" element={<Products />} />
                <Route path="/auth" element={<Auth />}>
                    <Route
                        path=""
                        element={<Navigate replace={true} to="login" />}
                    />
                    <Route path="login" element={<Login />} />
                    <Route path="logout" element={<Logout />} />
                    <Route path="signup" element={<Signup />} />
                </Route>
                <Route path="admin" element={<AdminApp />}>
                    <Route path="" element={<Navigate replace={true} to="dashboard" />}/>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="categories" element={<Categories />}>
                        <Route path="" element={<CategoriesList/>}>
                            <Route path="new" element={<NewCategory/>}/>
                            <Route path="edit/:id" element={<EditCategory/>}/>
                        </Route>
                    </Route>
                    <Route path="products" element={<Products/>}>
                        <Route path="" element={<ProductsList/>}>
                            <Route path="new" element={<NewProduct/>}/>
                            <Route path="edit/:id" element={<EditProduct/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </Container>
    );
}

export default App;