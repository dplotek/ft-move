const navbar = document.querySelector("nav")
let open = false
const menuItems = document.getElementById("menu-items")

window.addEventListener("scroll", () => {
  const url = window.location.pathname
  const yOffset = window.pageYOffset
  if (url !== "/contact.html") {
    if (yOffset > 10) {
      navbar.classList.add("bg-main-red")
      navbar.classList.remove("lg:bg-transparent")
    } else {
      navbar.classList.add("lg:bg-transparent")
    }
  }
})

window.addEventListener("resize", () => {
  const windowWidth = window.innerWidth
  if (windowWidth > 1024) {
    navbar.classList.add("bg-main-red")
  }
})

const hamburger = document.getElementById("hamburger")
const hamburger1 = document.getElementById("hamburger1")
const hamburger2 = document.getElementById("hamburger2")
const hamburger3 = document.getElementById("hamburger3")

const handleMenu = () => {
  if (!open) {
    hamburger1.classList.add("rotate-45", "translate-y-1.5")
    hamburger1.classList.remove("translate-y-1.5")
    hamburger2.classList.add("opacity-0")
    hamburger3.classList.add("-rotate-45", "-translate-y-1.5")
    hamburger3.classList.remove("-translate-y-1.5")
    menuItems.classList.remove("hidden")
    open = true
  } else {
    hamburger1.classList.remove("rotate-45", "-translate-y-1.5")
    hamburger1.classList.add("translate-y-1.5")
    hamburger2.classList.remove("opacity-0")
    hamburger3.classList.remove("-rotate-45", "translate-y-1.5")
    hamburger3.classList.add("-translate-y-1.5")
    menuItems.classList.add("hidden")
    open = false
  }
}

hamburger.addEventListener("click", handleMenu)