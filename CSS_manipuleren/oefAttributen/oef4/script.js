const buttonEL = document.querySelector("button")
const statusEl = document.querySelector("p")

buttonEL.addEventListener("click", () => {
    if (!statusEl.hasAttribute("data-unlocked")) {
        statusEl.setAttribute("data-unlocked", "true")
        statusEl.innerHTML = "next level: unlocked"
    } else {
        statusEl.innerHTML = "next level: tis goe bro"
    }
})