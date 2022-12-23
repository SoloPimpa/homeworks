import React from 'react';
import usePhotos from "../hooks/usePhotos";
import PhotosList from "./PhotosList";
import {useParams} from "react-router-dom";

function GalleryAlbum() {
const {albumId} = useParams();

    const photos = usePhotos(albumId);
    return <PhotosList list={photos}/>;
}

export default GalleryAlbum;