// Add imports above this line
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

const galleryConteiner = document.querySelector('.gallery');


function createGalleryMarkup(images) {
    return images.map(({ preview, original, description }) => 
        
        `<li class="gallery__item">
        <a class ="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
         </a>
         </li>
        `
    ).join("");
}


const galleryMarkup = createGalleryMarkup(galleryItems);


galleryConteiner.insertAdjacentHTML("afterbegin", galleryMarkup);

    new SimpleLightbox('.gallery a', { 
        captionsData: 'alt',
        captionDelay: 250,
    });  