const getal1 = document.querySelector("#getal1")
const getal2 = document.querySelector("#getal2")
const getal3 = document.querySelector("#getal3")
const body = document.querySelector("body")

function changeColor() {
    if (getal1.value >= 0 && getal1.value <= 255 && getal2.value >= 0 && getal2.value <= 255 && getal3.value >= 0 && getal3.value <= 255) {
        body.style.backgroundColor = `rgb(${getal1.value},${getal2.value},${getal3.value})`
    } else {
        document.querySelector("#foutmelding").innerHTML = "Geen juist getal"
    }
}

getal1.addEventListener("change", changeColor)
getal2.addEventListener("change", changeColor)
getal3.addEventListener("change", changeColor)