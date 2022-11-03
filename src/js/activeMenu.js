let arrayItems = document.querySelectorAll(".navigation__item");

arrayItems.forEach((el) => {
  el.addEventListener("click", handlerItemMenu);
  
});

function handlerItemMenu(event) {
  for (elem of arrayItems) {
    elem.classList.remove("navigation__item--active");
   
  }
  if (event.target.tagName === "LI") {
    event.target.classList.add("navigation__item--active");
  } else {
    event.target.parentNode.classList.add("navigation__item--active");
  }

  //  event.target.style.color = "#2A5FCB";
}
