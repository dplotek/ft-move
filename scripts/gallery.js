const testPoster = document.getElementById("naomi_osaka")
const body = document.querySelector("body")

const popup = document.createElement("div")
popup.classList.add(
  "fixed",
  "top-0",
  "left-0",
  "w-screen",
  "h-screen",
  "bg-main-blue",
  "flex"
)

const closeButton = document.createElement("button")
closeButton.textContent = "X"
closeButton.classList.add(
  "fixed",
  "top-32",
  "right-32",
  "text-white"
)
popup.appendChild(closeButton)

const image = document.createElement("img")
image.classList.add("mx-auto", "my-auto", "py-24", "px-24")
popup.appendChild(image)

testPoster.addEventListener("click", () => {
  body.appendChild(popup)
  image.setAttribute("src", testPoster.src)
})