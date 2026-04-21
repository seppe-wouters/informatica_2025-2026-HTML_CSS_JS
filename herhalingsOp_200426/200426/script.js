const formEl = document.querySelector("#formulier")
const inputNaam = document.querySelector("#inputNaam")
const inputGenre = document.querySelector("#inputGenre")
const inputOmschrijving = document.querySelector("#inputOmschrijving")
const showArrayEl = document.querySelector("#showArray")

let objArray = []

//sumbit functie uitschakelen
formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    if (inputNaam.value != "" || inputGenre.value != "" || inputOmschrijving.value != "") {
        let obj = { naam: inputNaam.value, genre: inputGenre.value, omschrijving: inputOmschrijving.value }
        objArray.push(obj)
    }

    inputNaam.value = ""
    inputGenre.value = ""
    inputOmschrijving.value = ""

    showArrayEl.innerHTML = ""
    showArrayEl.innerHTML += "<br><h3>Inhoud:</h3>"
    showArrayEl.innerHTML += `<div class="card"><ul class="list-group list-group-flush">`
    objArray.forEach(obj => {
        showArrayEl.innerHTML += `
        <li class="list-group-item">naam: ${obj.naam}, genre: ${obj.genre}, omschrijving: ${obj.omschrijving}</li>
        `
    });
    showArrayEl.innerHTML += "</ul></div>"

})