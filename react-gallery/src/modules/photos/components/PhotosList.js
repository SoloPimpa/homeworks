import React from 'react'
import PhotosItem from './PhotosItem'

function PhotosList({ photo }) {
    console.log({photo})
    return (
        <div>
            {photo.map((item) => (
                <PhotosItem key={item.id} photos={item} />
            ))}

        </div>
    )
}

export default PhotosList