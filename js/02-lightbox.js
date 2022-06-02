import { galleryItems } from './gallery-items.js';

const galeryContainer = document.querySelector('.gallery');
const imagesMarkUp = createGalleryMarkup(galleryItems);
galeryContainer.insertAdjacentHTML('beforeend', imagesMarkUp);


const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: '250'});

function createGalleryMarkup(galleryItems) {
   return galleryItems
      .map(({ preview, original, description }) => {
      return `
         <a class="gallery__item" href="${original}">
            <img 
            class="gallery__image" 
            src="${preview}" 
            alt="${description}" />
         </a>
      `;
      })
      .join('');
};
