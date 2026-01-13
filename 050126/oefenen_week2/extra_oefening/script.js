const VoegToeEl = document.querySelector("#voegtoe")
const inputEl = document.querySelector("#input")
const btnNieuweDag = document.querySelector("#nieuweDag")
const totEl = document.querySelector("#totaal")
const feedbackEl = document.querySelector("#feedback")

let totaal = 0
updateView()

VoegToeEl.addEventListener("click", () => {
    totaal += parseInt(inputEl.value)
    updateView()
})

btnNieuweDag.addEventListener("click", () => {
    totaal = 0
    inputEl.value = 0
    updateView()
})

function updateView() {
    totEl.innerHTML = `${totaal}`
    if (totaal >= 3000) {
        feedbackEl.innerHTML = "tis goe vr vndg"
    } else if (totaal >= 2000) {
        feedbackEl.innerHTML = "let op je zit boven de 2000"
    } else {
        feedbackEl.innerHTML = ""
    }
}