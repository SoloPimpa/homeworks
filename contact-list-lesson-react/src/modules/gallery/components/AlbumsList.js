import React from 'react';
import AlbumsListItem from "./AlbumsListItem";
import useAlbums from "../hooks/useAlbums";

function AlbumsList() {

    const albums = useAlbums();

    return (

            <ul>
                {albums.map((item)=>(
                    <AlbumsListItem key={item.id} album = {item} onNavigate={()=>{}}/>
                ))}
            </ul>
    )
}

export default AlbumsList;