const testPoster = document.getElementById("naomi_osaka")
const body = document.querySelector("body")

const allImages = [...document.querySelectorAll("img")]
console.log(allImages)

let currentImg = "images/posters/Poster-Naomi_Osaka.webp"
const behance = true

const createPopup = () => {
  //popup
  const popup = document.createElement("div")
  popup.classList.add(
    "fixed",
    "top-0",
    "left-0",
    "w-screen",
    "h-screen",
    "bg-black/[0.6]",
    "flex",
    "items-center",
    "justify-center",
    "z-[100]"
  )
  body.appendChild(popup)

  //wrapper
  const wrapper = document.createElement("div")
  wrapper.classList.add("flex", "flex-col", "h-5/6", "relative")
  popup.appendChild(wrapper)

  //image
  const image = document.createElement("img")
  image.setAttribute("src", currentImg)
  image.classList.add("h-5/6")
  wrapper.appendChild(image)


  //closeButton
  const closeButton = document.createElement("button")
  closeButton.classList.add("absolute", "-top-6", "-right-6", "text-white")
  closeButton.textContent = "X"
  wrapper.appendChild(closeButton)
  closeButton.addEventListener("click", () => {
    body.removeChild(popup)
  })

  //descriptionBox
  const descriptionBox = document.createElement("div")
  descriptionBox.classList.add("bg-main-blue", "w-full")
  wrapper.appendChild(descriptionBox)

  //descriptionHeader
  const descriptionHeader = document.createElement("p")
  descriptionHeader.textContent = "Naomi Osaka"
  descriptionHeader.classList.add("text-white", "text-xl", "font-bold", "p-4")
  descriptionBox.appendChild(descriptionHeader)

  //behanceHref
  const behanceHref = document.createElement("a")
  const behanceIcon = document.createElement("img")
  behanceIcon.setAttribute("src", "images/social icons/behance-logo.png")
  behanceHref.setAttribute("href", "google.pl")
  behanceHref.appendChild(behanceIcon)
  behance && descriptionBox.appendChild(behanceHref)

  //nextArrow
  const nextArrow = document.createElement("button")
  nextArrow.textContent = ">"
  nextArrow.classList.add("absolute", "top-1/2", "translate-y-1/2", "-right-10", "text-3xl", "text-white")
  wrapper.appendChild(nextArrow)

  //prevArrow
  const prevArrow = document.createElement("button")
  prevArrow.textContent = "<"
  prevArrow.classList.add("absolute", "top-1/2", "translate-y-1/2", "-left-10", "text-3xl", "text-white")
  wrapper.appendChild(prevArrow)
}

const setCurrentImage = () => {

}

testPoster.addEventListener("click", (e) => {
  createPopup()
  console.log(currentImg)
})