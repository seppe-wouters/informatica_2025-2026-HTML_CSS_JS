const check = document.querySelector("#check")
const body = document.querySelector("body")

check.addEventListener("change", () => {
    body.classList.toggle("darkmode")
})