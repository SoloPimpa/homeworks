import AlbumsList from "./AlbumsList";
import PhotosList from "./PhotosList";
import useGallery from "../hooks/useGallery";

function Gallery() {
const {photos, albums, getAlbumPhotos} = useGallery();

    return (
        <div className="row">
        <AlbumsList list={albums} onNavigate={getAlbumPhotos}/>
            <PhotosList list={photos}/>
        </div>
    )
}

export default Gallery;