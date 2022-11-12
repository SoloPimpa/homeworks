const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos?_limit=10/';
const $galleryList = $('.gallery');
const galleryItemTemplate = $('#gallery-item-template').html();

arrayGalleryList = getGalleryList();

init();

function init() {
    getGalleryList();
}

function getGalleryList() {
    return fetch(PHOTOS_URL)
        .then((res) => res.json())
        .then((data) => (arrayGalleryList = data.slice(0, 10)))
        .then(renderGallery);
}

function renderGallery() {
    arrayGalleryList.forEach((galleryItem) => renderContact(galleryItem));
}

function renderContact(galleryItem) {
    const html = galleryItemTemplate
        .replace("{{id}}", galleryItem.id)
        .replace("{{urlImage}}", galleryItem.url)
        .replace("{{thumbnailUrlImage}}", galleryItem.thumbnailUrl)
        .replace("{{titleImage}}", galleryItem.title);
    $(html).appendTo($galleryList);
}