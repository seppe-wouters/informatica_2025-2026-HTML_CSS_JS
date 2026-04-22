const formEl = document.querySelector("#form")
const inputNaam = document.querySelector("#inputNaam")
const inputLocatie = document.querySelector("#inputLocatie")
const inputDatum = document.querySelector("#inputDatum")
const selectType = document.querySelector("#selectType")
const checkBinnen = document.querySelector("#checkBinnen")
const divEl = document.querySelector("#divEl")

let events = JSON.parse(localStorage.getItem("mijnEvents")) || []
toonEvents()
let id = JSON.parse(localStorage.getItem("eventId")) || 0

formEl.addEventListener("submit", function (e) {
    e.preventDefault()
    id += 1

    let obj = { id: id, naam: inputNaam.value, locatie: inputLocatie.value, datum: inputDatum.value, type: selectType.value, binnen: checkBinnen.checked }

    events.push(obj)
    localStorage.setItem("mijnEvents", JSON.stringify(events))
    localStorage.setItem("eventId", JSON.stringify(id))

    toonEvents()

    inputNaam.value = ""
    inputLocatie.value = ""
    inputDatum.value = ""
    selectType.value = "Concert"
    checkBinnen.checked = false
})

divEl.addEventListener("click", function (e) {
    if (e.target.classList.contains("verwijderen")) {
        let id = e.target.dataset.id

        events = events.filter(event => event.id != id)

        localStorage.setItem("mijnEvents", JSON.stringify(events))
        toonEvents()
    }
})

function toonEvents() {
    divEl.innerHTML = ""
    events.forEach(event => {
        divEl.innerHTML += `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${event.naam}</h5>
                    <p class="card-text mb-0">Locatie: ${event.locatie}</p>
                    <p class="card-text mb-0">Datum: ${event.datum}</p>
                    <p class="card-text mb-0">Type: ${event.type}</p>
                    <p class="card-text mt-0">Binnen: <input type="checkbox" onclick="return false;" ${event.binnen ? 'checked' : ''}></p>
                    <button class="btn btn-primary verwijderen" data-id="${event.id}">Verwijderen</button>
                </div>
            </div>
        `
    })
    btns = document.querySelectorAll(".verwijderen")
}