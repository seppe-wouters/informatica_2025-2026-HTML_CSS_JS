const buttonEL = document.querySelector("button")
const body = document.querySelector("body")

buttonEL.addEventListener("click", () => {
    if (!buttonEL.hasAttribute("data-darkmode")) {
        buttonEL.setAttribute("data-darkmode", true)
        body.classList.add("darkmode")
    } else {
        buttonEL.removeAttribute("data-darkmode")
        body.classList.remove("darkmode")
    }
})