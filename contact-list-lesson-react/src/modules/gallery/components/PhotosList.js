import React from 'react';
import PhotosListItem from "./PhotosListItem";

function PhotosList({list}) {

    return list.map((item) => (
                <PhotosListItem key={item.id} photo={item}/>
            ))
}

export default PhotosList;