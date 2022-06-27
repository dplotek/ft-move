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
    "z-[100]",
    "p-10"
  )
  body.appendChild(popup)

  //wrapper
  const wrapper = document.createElement("div")
  wrapper.classList.add("h-5/6", "relative")
  popup.appendChild(wrapper)

  //container
  const container = document.createElement("div")
  container.classList.add("relative", "h-full", "flex", "justify-center", "flex-col", "flex-end")
  wrapper.appendChild(container)

  const closeButtonContainer = document.createElement("div")
  closeButtonContainer.classList.add("text-end", "-mr-4")
  container.appendChild(closeButtonContainer) // tutaj wrapper

  //closeButton
  const closeButton = document.createElement("button")
  closeButton.classList.add("text-white")
  closeButton.textContent = "X"
  closeButtonContainer.appendChild(closeButton) // tutaj wrapper
  closeButton.addEventListener("click", () => {
    body.removeChild(popup)
  })

  //image
  const image = document.createElement("img")
  image.setAttribute("src", currentImg)
  image.classList.add("md:h-full")
  container.appendChild(image) // tutaj wrapper

  //descriptionBox
  const descriptionBox = document.createElement("div")
  descriptionBox.classList.add("bg-main-blue", "w-full")
  container.appendChild(descriptionBox) //tutaj wrapper

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
  nextArrow.classList.add("absolute", "top-1/2", "translate-y-1/2", "-right-8", "text-3xl", "text-white")
  container.appendChild(nextArrow) // tutaj wrapper

  //prevArrow
  const prevArrow = document.createElement("button")
  prevArrow.textContent = "<"
  prevArrow.classList.add("absolute", "top-1/2", "translate-y-1/2", "-left-8", "text-3xl", "text-white")
  container.appendChild(prevArrow) //tutaj wrapper
}

const setCurrentImage = () => {

}

testPoster.addEventListener("click", (e) => {
  createPopup()
  console.log(currentImg)
})