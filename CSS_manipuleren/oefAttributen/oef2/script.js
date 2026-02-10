const videoEl = document.querySelector("#video")
const pEl = document.querySelector("p")
const buttonEL = document.querySelector("button")

buttonEL.addEventListener("click", () => { 
    if (!videoEl.hasAttribute("data-18plus")) {
        videoEl.setAttribute("data-18plus", true)
        pEl.innerHTML = "rating: 18+"
        pEl.style.color = "red"
    } else {
        videoEl.removeAttribute("data-18plus")
        pEl.innerHTML = "rating: 18-"
        pEl.style.color = "green"
    }
})