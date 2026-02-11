const buttons = document.querySelectorAll(".artist")
const alertEl = document.querySelector("#alert")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        checkAndAddClasses(button)
    })
});

let aantalSelected = 0

function checkAndAddClasses(knop) {
    if (knop.classList.contains("selected") && knop.classList.contains("highlight")) {
        knop.classList.remove("selected")
        knop.classList.remove("highlight")
        aantalSelected--
        alertEl.innerHTML = `aantal geselecteerd: ${aantalSelected}`
    } else {
        if (aantalSelected >= 3) {
            alertEl.innerHTML = "Fout je kan er niet meer dan 3 selecteren"
        } else {
            aantalSelected++
            knop.classList.add("selected")
            knop.classList.add("highlight")
            alertEl.innerHTML = `aantal geselecteerd: ${aantalSelected}`
        }
    }
}