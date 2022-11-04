let modal = document.querySelector(".modal");
let closeModal = document.querySelector(".modal-close");
let layout = document.querySelector(".layout-bg");

function handlerButtonModalClose(evt) {
  closeModal.addEventListener("click", function (evt) {
    modal.classList.remove("modal-show");
    layout.style.display = "none";
    document.body.style.overflow = "";
  });
}

function handlerButtonModalOpen(evt) {
  modal.classList.add("modal-show");
  layout.style.display = "block";
  document.body.style.overflow = "hidden";
}

export { handlerButtonModalOpen, handlerButtonModalClose };
