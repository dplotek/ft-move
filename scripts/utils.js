const navbar = document.querySelector("nav")

window.addEventListener("scroll", () => {
  const yOffset = window.pageYOffset
  if (yOffset > 10) {
    navbar.classList.add("bg-main-red")
  } else {
    navbar.classList.remove("bg-main-red")
  }
})