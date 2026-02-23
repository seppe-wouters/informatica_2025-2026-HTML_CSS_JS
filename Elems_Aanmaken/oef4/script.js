const btnVoegToe = document.querySelector("#voegtoe")
const btnVerwijder = document.querySelector("#verwijder")
const input = document.querySelector("#input")
const ulEl = document.querySelector("#list")

btnVoegToe.addEventListener("click", () => {
    let newLi = document.createElement("li")
    newLi.innerHTML = input.value
    console.log(newLi)
    ulEl.appendChild(newLi)
})

btnVerwijder.addEventListener("click", () => {
    liElems = document.querySelectorAll("li")
    ulEl.removeChild(liElems[0])
})

