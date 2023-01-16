import React, {useEffect, useState} from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import Landing from "./modules/user/landing/pages/Landing";
import Products from "./modules/user/products/pages/Products";
import Login from "./modules/common/auth/pages/Login";
import Logout from "./modules/common/auth/pages/Logout";
import Signup from "./modules/common/auth/pages/Signup";
import Auth from "./modules/common/auth/pages/Auth";
import AdminApp from "./modules/admin/AdminApp";
import Dashboard from "./modules/admin/dashboard/pages/Dashboard";
import AuthProvider from "./modules/common/auth/providers/AuthProvider";

function App() {
    // const [name, setName] = useState('Alex');
    // const [contextValue, setContextValue]= useState({
    //     user:{username},
    //     role:'admin'
    //     isAuthorized: true,
    //     login:()=>,
    // logout:()=>,
    // });
    // useEffect(()=>{
    //     const intervalId = setInterval(()=>
    //     setContextValue({
    //         name: name,
    //         time: Date.now(),
    //         setName: setName,
    //     }),
    //         1000
    //     );
    //     return()=> clearInterval(intervalId);
    // },[name]);


  return (
      <AuthProvider>
   <Routes>
       <Route path="/" exact element ={<Landing/>}/>
       <Route path="/shop" element ={<Products/>}/>
       <Route path="/auth" element ={<Auth/>}>
           <Route path="" element={<Navigate to="login"/>}/>
           <Route path="login" element ={<Login/>}/>
           <Route path="logout" element ={<Logout/>}/>
           <Route path="signup" element ={<Signup/>}/>
       </Route>
       <Route path="admin" element={<AdminApp/>}>
           <Route path="" element ={<Navigate to="dashboard"/>}/>
           <Route path="dashboard" element ={<Dashboard/>}/>
       </Route>
   </Routes>
      </AuthProvider>
  );
}

export default App;
