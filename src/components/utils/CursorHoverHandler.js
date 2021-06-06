function cursorHoverBig() {
  const cursor = document.querySelector(".cursor--ring");
  const cursorCenter = document.querySelector(".cursor--center");
  cursor.style.height = "5rem";
  cursor.style.width = "5rem";
  cursor.style.border = "3px dotted white";
  cursor.style.animationDuration = "6s";
  cursorCenter.style.display = "none";
}

function cursorHoverSmall() {
  const cursor = document.querySelector(".cursor--ring");
  const cursorCenter = document.querySelector(".cursor--center");

  cursor.style.height = "3rem";
  cursor.style.width = "3rem";
  cursor.style.border = "1px dashed white";
  cursor.style.animationDuration = "10s";
  cursorCenter.style.display = "block";
}

export { cursorHoverBig, cursorHoverSmall };
