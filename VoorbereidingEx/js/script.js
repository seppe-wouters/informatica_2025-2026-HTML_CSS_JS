const inputNaam = document.querySelector("#inputNaam")
const inputLand = document.querySelector("#inputLand")
const selectType = document.querySelector("#selectType")
const inputDagen = document.querySelector("#inputDagen")
const inputBudget = document.querySelector("#inputBudget")
const selectPrioriteit = document.querySelector("#selectPrioriteit")
const form = document.querySelector("#form")
const divEl = document.querySelector("#divEl")
const winkelkar = document.querySelector("#winkelkar")

let winkelkarList = JSON.parse(localStorage.getItem("winkelkarList")) || []
let reizen = JSON.parse(localStorage.getItem("reizenList")) || []
let id = JSON.parse(localStorage.getItem("reizenId")) || 0

weergeven()
toonWinkelkar()

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let obj = {
        id: id,
        naam: inputNaam.value,
        land: inputLand.value,
        type: selectType.value,
        aantalDagen: inputDagen.value,
        budget: inputBudget.value,
        prioriteit: selectPrioriteit.value
    }

    reizen.push(obj)
    localStorage.setItem("reizenList", JSON.stringify(reizen))
    id += 1
    localStorage.setItem("reizenId", JSON.stringify(id))

    weergeven()
})

function weergeven() {
    divEl.innerHTML = ""
    reizen.forEach(reis => {
        let kleur = ""
        if (reis.prioriteit == "Hoog") kleur = "crimson"
        else kleur = ""
        divEl.innerHTML += `
            <div class="card" style="width: 18rem; background-color: ${kleur}">
                <div class="card-body">
                    <h5 class="card-title">${reis.naam}</h5>
                    <p class="card-text">land: ${reis.land}</p>
                    <p class="card-text">type: ${reis.type}</p>
                    <p class="card-text">aantal Dagen: ${reis.aantalDagen}</p>
                    <p class="card-text">budget: ${reis.budget}</p>
                    <p class="card-text">prioriteit: ${reis.prioriteit}</p>
                    <a href="#" class="btn btn-primary voegToe" data-id=${reis.id}>Voeg Toe</a>
                </div>
            </div>
        `
    });

    const btnsAdd = document.querySelectorAll(".voegToe")
    btnsAdd.forEach(btn => {
        btn.addEventListener("click", () => {
            let id = btn.dataset.id
            let selectie = {}
            reizen.forEach(reis => {
                if (reis.id == id) {
                    selectie = reis
                }
            })

            winkelkarList.push(selectie)
            localStorage.setItem("winkelkarList", JSON.stringify(winkelkarList))

            toonWinkelkar()

            const btnsRemove = document.querySelectorAll(".verwijder")
            btnsRemove.forEach(btn => {
                btn.addEventListener("click", () => {
                    let idRem = btn.dataset.id
                    let selectieRem = {}
                    winkelkarList.forEach(item => {
                        if (item.id == idRem) {
                            selectieRem = item
                        }
                    })

                    winkelkarList.splice(winkelkarList.findIndex(a => a.id === selectie.id), 1)
                    localStorage.setItem("winkelkarList", JSON.stringify(winkelkarList))

                    toonWinkelkar()
                })
            })
        })
    })
}

function toonWinkelkar() {
    winkelkar.innerHTML = ""
    winkelkar.innerHTML = `<h4 class="mt-5">Winkelkar: </h4>`
    winkelkarList.forEach(item => {
        winkelkar.innerHTML += `<p>${item.naam}, &euro;${item.budget} <button class="verwijder btn btn-danger" data-id="${item.id}">Verwijder</button></p>`
    })
}