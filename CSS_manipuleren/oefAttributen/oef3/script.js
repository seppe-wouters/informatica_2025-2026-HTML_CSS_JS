const buttonEL = document.querySelector("button")
const statusMute = document.querySelector("#statusMute")

buttonEL.addEventListener("click", () => {
    if (statusMute.getAttribute("data-muted") == "true") {
        statusMute.setAttribute("data-muted", "false")
        statusMute.innerHTML = "not muted"
    } else {
        statusMute.setAttribute("data-muted", "true")
        statusMute.innerHTML = "muted"
    }
})