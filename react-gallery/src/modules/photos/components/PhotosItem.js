import React from 'react'

function PhotosItem({ photos: {title, url, thumbnailUrl } }) {
    return (
        <div>
            <div className=''>{title}</div>
            {/* <img src={url} alt="portlandlogo" /> */}
            <img src={thumbnailUrl } alt="portlandlogo"/>
        </div>
    )
}

export default PhotosItem