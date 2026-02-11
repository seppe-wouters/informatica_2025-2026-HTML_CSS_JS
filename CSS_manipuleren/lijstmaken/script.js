const btnAdd = document.querySelector("#add")
const btnRemove = document.querySelector("#remove")
const divEl = document.querySelector("#container")

let teller = 0
let ulEl = document.createElement("ul")
divEl.appendChild(ulEl)

btnAdd.addEventListener("click", () => {
    let liEl = document.createElement("li")
    liEl.innerHTML = `item ${teller}`
    teller++
    ulEl.appendChild(liEl)
})

btnRemove.addEventListener("click", () => {
    
})