const imgCinema = document.querySelector("#imgCinema")
const imgClubbing = document.querySelector("#imgClubbing")
const imgEscapeRoom = document.querySelector("#imgEscapeRoom")
const imgFestival = document.querySelector("#imgFestival")
const imgGekozen = document.querySelector("#gekozenAfbeelding")
const dagSelect = document.querySelector("#selectDag")
const kortingSelect = document.querySelector("#selectDeal")
const activiteitEl = document.querySelector("#activiteit")
const dagEl = document.querySelector("#dag")
const dealEl = document.querySelector("#deal")
const basisprijsEl = document.querySelector("#basisPrijs")
const toeslagEl = document.querySelector("#toeslag")
const kortingEl = document.querySelector("#Korting")
const berekenEl = document.querySelector("#BerekenPrijs")
const totPrijsEl = document.querySelector("#TotPrijs")

let prijs = 0
let basisprijs = 0
let toeslag = 0
let korting = 0

//#region juiste afbeelding tonen
imgCinema.addEventListener("click", () => {
    imgGekozen.src = "./pics/cinema.png";
    basisprijs = 12
    basisprijsEl.innerHTML = `Basisprijs: €${basisprijs}`
    activiteitEl.innerHTML = `Activiteit: Cinema`
})
imgClubbing.addEventListener("click", () => {
    imgGekozen.src = "./pics/Clubbing.png";
    basisprijs = 20
    basisprijsEl.innerHTML = `Basisprijs: €${basisprijs}`
    activiteitEl.innerHTML = `Activiteit: Clubbing`
})
imgFestival.addEventListener("click", () => {
    imgGekozen.src = "./pics/Festival.png";
    basisprijs = 135
    basisprijsEl.innerHTML = `Basisprijs: €${basisprijs}`
    activiteitEl.innerHTML = `Activiteit: Festival`
})
imgEscapeRoom.addEventListener("click", () => {
    imgGekozen.src = "./pics/EscapeRoom.png";
    basisprijs = 70
    basisprijsEl.innerHTML = `Basisprijs: €${basisprijs}`
    activiteitEl.innerHTML = `Activiteit: Escape Room`
})
//#endregion

dagSelect.addEventListener("input", () => {
    dagEl.innerHTML = `Dag: ${dagSelect.value}`
    if (dagSelect.value == "Zaterdag" || dagSelect.value == "Zondag") {
        toeslag = 5
        toeslagEl.innerHTML = "Toeslag: +€5.00 (Weekend Toeslag)"
    } else {
        toeslag = 0
        toeslagEl.innerHTML = "Toeslag: €0.00"
    }
})

kortingSelect.addEventListener("input", () => {
    let deal
    switch (kortingSelect.value) {
        case "earlyBird":
            deal = "Early Bird"
            korting = 0.90
            kortingEl.innerHTML = "Korting: 10%"
            break;
        case "None":
            deal = "Geen"
            korting = 0
            kortingEl.innerHTML = "Korting: 0%"
            break;
    }

    dealEl.innerHTML = `Deal: ${deal}`
})

berekenEl.addEventListener("click", () => {
    if (korting != 0) {
        prijs = (basisprijs + toeslag) * korting
        prijs.toFixed(2)
    } else {
        prijs = basisprijs + toeslag
        prijs.toFixed(2)
    }
    
    totPrijsEl.innerHTML = `€${prijs}`

    document.querySelector("#btn").style.transform = "rotate(5turn)"
    document.querySelector("#btn").style.transition = "transform 5s"
})