import React from 'react';

function PhotosListItem ({photo:{title, thumbnailUrl}}) {

    return (
        <img src={thumbnailUrl} className="three columns" alt={title}/>
    )
}

export default PhotosListItem;