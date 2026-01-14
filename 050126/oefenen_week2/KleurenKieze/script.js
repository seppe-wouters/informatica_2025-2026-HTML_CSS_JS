const getal1 = document.querySelector("#getal1")
const getal2 = document.querySelector("#getal2")
const getal3 = document.querySelector("#getal3")
const body = document.querySelector("body")

function stelGrenzenIn(inputEl) {
    if (inputEl.value > 255) {
        inputEl.value = 255
    } else if (inputEl.value < 0) {
        inputEl.value = 0
    }
}

function changeColor() {
    body.style.backgroundColor = `rgb(${getal1.value},${getal2.value},${getal3.value})`
}

getal1.addEventListener("input", ()=>{
    stelGrenzenIn(getal1)
    changeColor()
})
getal2.addEventListener("input", ()=>{
    stelGrenzenIn(getal2)
    changeColor()
})
getal3.addEventListener("input", ()=>{
    stelGrenzenIn(getal3)
    changeColor()
})

