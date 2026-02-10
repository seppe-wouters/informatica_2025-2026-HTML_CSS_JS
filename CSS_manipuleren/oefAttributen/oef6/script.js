const buttonEl = document.querySelector("button")
const pEl = document.querySelector("p")

buttonEl.addEventListener("click", () => {
    if (!pEl.hasAttribute("hidden")) {
        pEl.setAttribute("hidden", true)
    } else {
        pEl.removeAttribute("hidden")
    }
})