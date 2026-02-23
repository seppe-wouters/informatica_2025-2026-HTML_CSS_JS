const ulEl = document.querySelector("#ulList")
const input = document.querySelector("#input")
const btn = document.querySelector("#voegtoe")
const btnVerwijder = document.querySelector("#verwijder")

btn.addEventListener("click", () => {
    let newLi = document.createElement("li")
    newLi.innerHTML = input.value

    ulEl.appendChild(newLi)
})

btnVerwijder.addEventListener("click", () => {
    let elems = document.querySelectorAll("li")
    elems.forEach(elem => {
        ulEl.removeChild(elem)
    });
})

