const body = document.querySelector("body")

const modal = document.createElement('div')

modal.classList.add("fixed", "bottom-0", "left-0", "w-full", "p-12", "bg-main-blue", "text-white")

modal.innerHTML = `W naszym Serwisie używamy plików cookies. Korzystając dalej z Serwisu, wyrażasz zgodę na stosowanie plików cookies zgodnie z <a href="privacy-policy.html">Polityką prywatności</a> Wyrażenie zgody jest dobrowolne, w każdej chwili można ją cofnąć poprzez zmianę ustawień dotyczących plików „cookies” w używanej przeglądarce internetowej. Kliknij „Akceptuję”, aby ta informacja nie wyświetlała się więcej.`

const buttonsContainer = document.createElement("div")
buttonsContainer.classList.add("mt-4")
modal.appendChild(buttonsContainer)

const acceptButton = document.createElement("button")
acceptButton.classList.add("bg-main-red", "px-4", "py-2", "rounded-full")
acceptButton.textContent = "Akceptuję"
acceptButton.addEventListener("click", () => {
  document.cookie = "acceptedCookies=true"
  body.removeChild(modal)
})
buttonsContainer.appendChild(acceptButton)

const moreButton = document.createElement("button")
moreButton.classList.add("bg-white", "text-black", "px-4", "py-2", "rounded-full", "ml-4")
moreButton.textContent = "Dowiedz się więcej"
buttonsContainer.appendChild(moreButton)

moreButton.addEventListener("click", () => {
  window.location.assign("privacy-policy.html")
})

const cookies = document.cookie
const acceptedCookies = cookies === "acceptedCookies=true"

window.onload = () => {
  if (!acceptedCookies) {
    body.appendChild(modal)
  }
}