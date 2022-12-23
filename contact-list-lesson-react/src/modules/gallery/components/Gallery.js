import AlbumsList from "./AlbumsList";
import PhotosList from "./PhotosList";
import useGallery from "../hooks/useGallery";
import React from "react";
import { Outlet } from 'react-router-dom';

function Gallery() {
    return (
        <div className="row">
            <div className="three columns">
                <AlbumsList/>
            </div>

            <div className="nine columns">
                <Outlet/>
            </div>

       </div>
    )
}

export default Gallery;