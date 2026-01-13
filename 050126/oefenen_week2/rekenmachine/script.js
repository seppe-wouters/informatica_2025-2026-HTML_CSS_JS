const inputGetal1 = document.querySelector("#getal1")
const inputGetal2 = document.querySelector("#getal2")
const bereken = document.querySelector("#bereken")
const optiesEl = document.querySelector("#bewerking")
const res = document.querySelector("#res")

optiesEl.addEventListener("change", uitrekenen)
inputGetal1.addEventListener("change", uitrekenen)
inputGetal2.addEventListener("change", uitrekenen)

function uitrekenen() {
    let getal1 = parseFloat(inputGetal1.value)
    let getal2 = parseFloat(inputGetal2.value)
    let uitkomst = 0
    switch (optiesEl.value) {
        case "+":
            uitkomst = getal1 + getal2
            break
        case "-":
            uitkomst = getal1 - getal2
            break
        case "*":
            uitkomst = getal1 * getal2
            break
        case "/":
            uitkomst = getal1 / getal2
            break
    }
    res.innerHTML = uitkomst
}
