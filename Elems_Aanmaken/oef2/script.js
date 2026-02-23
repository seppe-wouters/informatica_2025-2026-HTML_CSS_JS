const ulEl = document.querySelector("#ulList")
const input = document.querySelector("#input")
const btnVoegToe = document.querySelector("#VoegToe")
const btnVerwijder = document.querySelector("#Verwijder")

input.addEventListener("input", () => {
    let newLi = document.createElement("li")
    newLi.innerHTML = input.value

    ulEl.appendChild(newLi)
})

btnVerwijder.addEventListener("click", () => {
    let liElems = document.querySelectorAll("li")
    console.log(liElems[liElems.length - 1])
    ulEl.removeChild(liElems[liElems.length-1])
})

