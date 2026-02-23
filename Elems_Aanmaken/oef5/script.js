const divEl = document.querySelector("div")
const statusEl = document.querySelector("#status")
const btn = document.querySelector("button")

btn.addEventListener("click", () => {
    let newStatus = document.createElement("p")
    newStatus.innerHTML = "Status: idk 2"

    divEl.replaceChild(newStatus, statusEl)
})