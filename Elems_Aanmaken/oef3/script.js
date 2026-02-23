const ulEl1 = document.querySelector("#ulList1")
const ulEl2 = document.querySelector("#ulList2")
const input = document.querySelector("#input")
const btnVoegToe = document.querySelector("#VoegToe")
const btnVerwijder = document.querySelector("#Verwijder")

btnVoegToe.addEventListener("click", () => {
    let newLi = document.createElement("li")
    newLi.innerHTML = input.value

    if (Math.floor(Math.random() * 2) == 0) {
        ulEl1.appendChild(newLi)
    } else {
        ulEl2.appendChild(newLi)
    }
})

