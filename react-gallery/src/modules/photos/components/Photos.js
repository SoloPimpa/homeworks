import usePhotos from '../hooks/usePhotos'
import PhotosList from './PhotosList';

function Photos() {
    const { photo } = usePhotos();

    return (
        <div>
            <PhotosList photo={photo} />
        </div>
    )
}

export default Photos