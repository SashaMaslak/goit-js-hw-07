import { galleryItems } from './gallery-items.js';

const galeryContainer = document.querySelector('.gallery');
const imagesMarkUp = createGalleryMarkup(galleryItems);
galeryContainer.insertAdjacentHTML('beforeend', imagesMarkUp);

function createGalleryMarkup(galleryItems) {
   return galleryItems
      .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
         <a class="gallery__link" href="large-image.jpg">
            <img
               class="gallery__image"
               src="${preview}"
               data-source="${original}"
               alt="${description}"
            />
            </a>
      </div>
      `;
      })
      .join('');
}

galeryContainer.addEventListener('click', onGalleryClick);

function onEscPress(instance) {
   return function (e) {
      if (e.key === "Escape") {
         instance.close();
      }
   }
}

function onGalleryClick(e) {
   e.preventDefault();
   const hasImageClass = e.target.classList.contains('gallery__image');
   if (!hasImageClass) {
      return;
   }
   const instance = basicLightbox.create(
      `
      <img src="${e.target.dataset.source}" width="800" height="600">
      `,
      {
         onShow: instance => {
            document.addEventListener("keydown", f);
         },
         onClose: instance => {
            document.removeEventListener("keydown", f);
         },
      },
   );
   const f = onEscPress(instance);
   instance.show();
};




