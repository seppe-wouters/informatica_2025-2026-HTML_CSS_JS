const btnVerwijder = document.querySelector("#verwijderen")
const btnVervangen = document.querySelector("#vervangen")
const btnToggleStatus = document.querySelector("#toggleStatus")

const pEl = document.querySelector("#status")
const imgEl = document.querySelector("#avatar")

btnVerwijder.addEventListener("click", () => {
    if (imgEl.hasAttribute("src")) {
        imgEl.removeAttribute("src")
    } else {
        alert("Geen src atribuut gevonden")
    }
})

btnVervangen.addEventListener("click", () => {
    if (imgEl.getAttribute("src") == "img/Man.png") {
        imgEl.setAttribute("src", "img/Vrouw.png")
    } else {
        imgEl.setAttribute("src", "img/Man.png")
    }
})

btnToggleStatus.addEventListener("click", () => {
    pEl.classList.toggle("online")
    if (pEl.classList.contains("online")) {
        pEl.innerHTML = "Status: Online"
    } else {
        pEl.innerHTML = "Status: Offline"
    }
})