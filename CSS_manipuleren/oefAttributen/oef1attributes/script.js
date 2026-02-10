const buttonEl = document.querySelector("button")
const imgEl = document.querySelector("img")


buttonEl.addEventListener("click", () => {
    if (!imgEl.hasAttribute("hidden")) {
        imgEl.setAttribute("hidden", true)
    } else {
        imgEl.removeAttribute("hidden")
    }
})