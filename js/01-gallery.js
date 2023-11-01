import { galleryItems } from "./gallery-items.js";

// Change code below this line

console.log(galleryItems);

const galleryUl = document.querySelector(".gallery");
let instance;

function createMarkup() {
  return galleryItems
    .map(
      (item) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
            />
        </a>
    </li>`
    )
    .join("");
}

galleryUl.insertAdjacentHTML("beforeend", createMarkup());

function createModal(event) {
  event.preventDefault();
  if (event.currentTarget === event.target) {
    return;
  }
  const modal = event.target;
  instance = basicLightbox.create(
    `<div class="modal">
      <img
        src="${modal.dataset.source}"
        alt="${modal.alt}"
        width="800"
        height="600"
      />
    </div>`,
    {
      onShow: () => {
        window.addEventListener("keydown", onEscPress);
      },

      onClose: () => {
        window.removeEventListener("keydown", onEscPress);
      },
    }
  );
  instance.show();
}

function onEscPress(evt) {
  if (evt.key === "Escape") {
    instance.close();
  }
}

galleryUl.addEventListener("click", createModal);
