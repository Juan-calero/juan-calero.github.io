function cursorHoverBig() {
  const { style } = document.querySelector(".cursor--ring")
  const center = document.querySelector(".cursor--center").style
  style.height = "5rem"
  style.width = "5rem"
  style.border = "3px dotted white"
  style.animationDuration = "6s"
  center.display = "none"
}

function cursorHoverSmall() {
  const { style } = document.querySelector(".cursor--ring")
  const center = document.querySelector(".cursor--center").style
  style.height = "3rem"
  style.width = "3rem"
  style.border = "1px dashed white"
  style.animationDuration = "10s"
  center.display = "block"
}

export { cursorHoverBig, cursorHoverSmall }
