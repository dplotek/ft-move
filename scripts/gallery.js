const testPoster = document.getElementById("naomi_osaka")
const body = document.querySelector("body")

const allImages = [...document.querySelectorAll("img")]
console.log(allImages)

let currentImg = "http://127.0.0.1:5500/images/posters/Poster-Naomi_Osaka.webp"
const behance = true

const createPopup = () => {
  //popup
  const popup = document.createElement("div")
  popup.classList.add("fixed", "top-0", "left-0", "w-screen", "h-screen", "bg-black/[0.6]", "p-12")
  body.appendChild(popup)

  //wrapper
  const wrapper = document.createElement("div")
  wrapper.classList.add("relative", "h-full", "w-fit", "mx-auto", "flex", "items-center", "justify-center")
  popup.appendChild(wrapper)

  //container
  const container = document.createElement("div")
  wrapper.appendChild(container)

  //image
  const image = document.createElement("img")
  container.classList.add("relative")
  container.appendChild(image)
  image.setAttribute("src", currentImg)

  //closeButton
  const closeButton = document.createElement("button")
  closeButton.classList.add("absolute", "-top-6", "-right-6", "text-white")
  closeButton.textContent = "X"
  container.appendChild(closeButton)
  closeButton.addEventListener("click", () => {
    body.removeChild(popup)
  })

  //descriptionBox
  const descriptionBox = document.createElement("div")
  descriptionBox.classList.add("bg-main-blue", "w-full")
  container.appendChild(descriptionBox)

  //descriptionHeader
  const descriptionHeader = document.createElement("p")
  descriptionHeader.textContent = "Naomi Osaka"
  descriptionHeader.classList.add("text-white", "text-xl", "font-bold", "p-4")
  descriptionBox.appendChild(descriptionHeader)

  //behanceHref
  const behanceHref = document.createElement("a")
  const behanceIcon = document.createElement("img")
  behanceIcon.setAttribute("src", "../images/social icons/behance-logo.png")
  behanceHref.setAttribute("href", "google.pl")
  behanceHref.appendChild(behanceIcon)
  behance && descriptionBox.appendChild(behanceHref)

  //nextArrow
  const nextArrow = document.createElement("button")
  nextArrow.textContent = ">"
  nextArrow.classList.add("absolute", "top-1/2", "translate-y-1/2", "-right-10", "text-3xl", "text-white")
  container.appendChild(nextArrow)

  //prevArrow
  const prevArrow = document.createElement("button")
  prevArrow.textContent = "<"
  prevArrow.classList.add("absolute", "top-1/2", "translate-y-1/2", "-left-10", "text-3xl", "text-white")
  container.appendChild(prevArrow)
}

const setCurrentImage = () => {

}

testPoster.addEventListener("click", (e) => {
  createPopup()
  console.log(currentImg)
})