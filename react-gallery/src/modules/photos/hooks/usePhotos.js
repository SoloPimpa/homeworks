import { useEffect, useState } from 'react';

import photoService from '../services/photoService';

export default function usePhotos() {

    const [photo, setPhotos] = useState([]);
    useEffect(() => {
        photoService
            .getList()
            .then(setPhotos)

    }, []);

    return { photo};
}