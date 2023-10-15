import { galleryItems } from './gallery-items.js';

const galleryImage = document.querySelector('.gallery');
const itemsMarkup = createGalleryImageMarkup(galleryItems);
galleryImage.insertAdjacentHTML('beforeend', itemsMarkup);
galleryImage.addEventListener('click', onImgClick);

function createGalleryImageMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}

const instance = basicLightbox.create(
  `<img width="800" height="600" src="">`,
  {
    onShow: (instance) => {
      window.addEventListener('keydown', onEscKeyPress);
    },
    onClose: (instance) => {
      window.removeEventListener('keydown', onEscKeyPress);
    },
  }
);

function onImgClick(element) {
  element.preventDefault();
  const datasetSource = element.target.dataset.source;
  if (!datasetSource) return;
  instance.element().querySelector('img').src = datasetSource;
  instance.show();
}

function onEscKeyPress(e) {
  if (element.code !== 'Escape') return;
  instance.close();
}

console.log(galleryItems);
