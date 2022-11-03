let button = document.querySelector(".request-code");
let modal = document.querySelector(".modal");
let closeModal = document.querySelector(".modal-close");
let layout = document.querySelector(".layout-bg");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
  layout.style.display = "block";
  document.body.style.overflow = "hidden";
});

closeModal.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
  layout.style.display = "none";
  document.body.style.overflow = "";
});
