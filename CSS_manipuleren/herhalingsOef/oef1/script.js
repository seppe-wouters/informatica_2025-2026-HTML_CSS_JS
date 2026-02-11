const buttons = document.querySelectorAll(".artist")
const alertEl = document.querySelector("#alert")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        checkAndAddClasses(button)
    })

    button.addEventListener("mouseenter", () => {
        button.classList.add("highlight")
    })

    button.addEventListener("mouseleave", () => {
        button.classList.remove("highlight")
    })
});

let aantalSelected = 0

function checkAndAddClasses(knop) {
    if (knop.classList.contains("selected")) {
        knop.classList.remove("selected")
        aantalSelected--
        alertEl.innerHTML = `aantal geselecteerd: ${aantalSelected}`
    } else {
        if (aantalSelected >= 3) {
            alertEl.innerHTML = "Fout je kan er niet meer dan 3 selecteren"
        } else {
            aantalSelected++
            knop.classList.add("selected")
            alertEl.innerHTML = `aantal geselecteerd: ${aantalSelected}`
        }
    }
}