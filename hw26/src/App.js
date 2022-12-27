import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Contacts from "./component/pages/Contacts";
import Navbar from "./component/layout/Navbar";
import PageNotFound from "./component/pages/PageNotFound";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import AddUser from "./component/users/AddUser";
import EditUser from "./component/users/EditUser";
import User from "./component/users/User";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Navigate to="Home"/>}/>
                    <Route exact path="/home" element={<Home/>}/>
                    <Route exact path="/about" element={<About/>}/>
                    <Route exact path="/contacts" element={<Contacts/>}/>
                    <Route exact path="/user/add" element={<AddUser/>}/>
                    <Route exact path="/user/edit" element={<EditUser/>}/>
                    <Route exact path="/user" element={<User/>}/>
                    <Route exact path="*" element={<PageNotFound/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
