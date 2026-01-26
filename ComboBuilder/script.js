const hoofdgerechtSelect = document.querySelector("#hoofdgerecht")
const drankSelect = document.querySelector("#Drank")
const tijdSelect = document.querySelector("#Tijd")
const btnBereken = document.querySelector("#Bereken")

const hoofdgerechtP = document.querySelector("#hoofdgerechtRechts")
const drankP = document.querySelector("#drankRechts")
const momentP = document.querySelector("#MomentRechts")
const basisprijsP = document.querySelector("#basisprijs")
const toeslagP = document.querySelector("#toeslag")
const teBetalenP = document.querySelector("#teBetalen")
const drankPrijsP = document.querySelector("#PrijsDrank")

function basisPrijs() {
    switch (hoofdgerechtSelect.value) {
        case "Veggie":
            return 6.00
        case "Normal":
            return 5.00
    }
}

function drankPrijs() {
    switch (drankSelect.value) {
        case "Cola":
            return 2.50
        case "Fanta":
            return 3.00
        case "Sprite":
            return 2.50
        case "Bier":
            return 1.50
    }
}

function tijdToeslag() {
    switch (tijdSelect.value) {
        case "Ochtend":
            return 0
        case "Middag":
            return 0
        case "Avond":
            return 2
    }
}

btnBereken.addEventListener("click", ()=> {
    let _basisPrijs = basisPrijs()
    let _drankPrijs = drankPrijs()
    let _tijdToeslag = tijdToeslag()

    hoofdgerechtP.innerHTML = `Hoofdgerecht: ${hoofdgerechtSelect.value}`
    drankP.innerHTML = `Drank: ${drankSelect.value}`
    momentP.innerHTML = `Moment: ${tijdSelect.value}`
    basisprijsP.innerHTML = `Basisprijs: €${_basisPrijs}`
    toeslagP.innerHTML = `Toeslag: €${_tijdToeslag}`
    drankPrijsP.innerHTML = `Drank Prijs: €${_drankPrijs}`
    teBetalenP.innerHTML = `€${_basisPrijs + _drankPrijs + _tijdToeslag}`
})