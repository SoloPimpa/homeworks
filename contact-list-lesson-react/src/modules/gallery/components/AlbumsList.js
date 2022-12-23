import React from 'react';
import AlbumsListItem from "./AlbumsListItem";

function AlbumsList({list, onNavigate}) {

    return (
        <div className="three columns">
            <ul>
                {list.map((item)=>(
                    <AlbumsListItem key={item.id} album = {item} onNavigate={onNavigate}/>
                ))}
            </ul>
        </div>
    )
}

export default AlbumsList;