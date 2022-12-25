import './App.css';
import {useState} from "react";
import Users from "./modules/users/components/Users";
import Navigation from "./modules/common/components/Navigation";
import Posts from "./modules/posts/components/Posts";
import Gallery from "./modules/gallery/components/Gallery";
import ContactForm from "./modules/form/components/ContactForm";

import {Routes, Route, Navigate} from 'react-router-dom';
import GalleryAlbum from "./modules/gallery/components/GalleryAlbum";

function App() {
    const [page, setPage] = useState('posts')
    return (
        <div className="container">
            <Navigation page={page} navigate={setPage}/>
            <Routes>
                <Route path="/" element={<Navigate to="Contacts"/>}/>
                <Route path="/form" element={<ContactForm/>}/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/posts" element={<Posts/>}/>
                <Route path="/gallery" element={<Gallery/>}>
                    <Route path=":albumId" element={<GalleryAlbum/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
