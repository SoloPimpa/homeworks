import React from 'react';
import PhotosListItem from "./PhotosListItem";

function PhotosList({list}) {

    return (
        <div className="nine columns">
            {list.map((item) => (
                <PhotosListItem key={item.id} photo={item}/>
            ))}
        </div>
    )
}

export default PhotosList;