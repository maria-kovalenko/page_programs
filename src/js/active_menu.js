let arrayItems = document.querySelectorAll(".navigation__item");

arrayItems.forEach((el) => {
  el.addEventListener("click", handlerItemMenu);
});

function handlerItemMenu(event) {
  for (elem of arrayItems) {
    elem.classList.remove("navigation__item--active");
    elem.style.cssText = `color: rgba(62, 62, 62, 0.7); font-weight: 400;`;
  }
  if (event.target.tagName === "LI") {
    event.target.classList.add("navigation__item--active");
  } else {
    event.target.parentNode.classList.add("navigation__item--active");
  }

  event.target.style.cssText = `color: #2A5FCB; font-weight: 600;`;
}
