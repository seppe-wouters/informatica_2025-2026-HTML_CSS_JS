let div = document.getElementById("invoegen")

for (let index = 0; index < 24; index++) {
    let element = document.createElement("div")
    element.classList.add("addedDiv")
    div.appendChild(element)
}