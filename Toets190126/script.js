//elementen ophalen uit html
const inputPrijs = document.querySelector("#inputPrijs");
const selectKorting = document.querySelector("#selectKorting");
const selectDag = document.querySelector("#selectDag");
const totPrijsTxt = document.querySelector("#totPrijs");
const btnBereken = document.querySelector("#btnBereken");

//basistarief
const basistarief = 12

//functie om de prijs te berekenen
function calculatePrice() {
    //ophalen
    let totPrijs = 0;

    //als input leeg is basis tarief gebruiken
    if (isNaN(inputPrijs.value) || inputPrijs.value == 0) {
        totPrijs = basistarief;
    } else {
        totPrijs = inputPrijs.value;
    }

    //kortingstype berekenen
    switch (selectKorting.value) {
        case "STUDENT":
            totPrijs *= 0.80;
            break;
        case "SENIOR":
            totPrijs *= 0.75;
            break;
        case "NONE":
            break;
        default:
            break;
    }

    //als het dinsdag is extra korting
    if (selectDag.value == "DI") {
        totPrijs *= 0.90;
    }

    //afronden tot 2 decimalen en toten op website
    totPrijsTxt.innerHTML = `${totPrijs.toFixed(2)}`;
}


//event listeners voor knop, select kortingstype, select dag van de week en input
btnBereken.addEventListener("click", calculatePrice);
selectKorting.addEventListener("change", calculatePrice);
selectDag.addEventListener("change", calculatePrice);
inputPrijs.addEventListener("input", calculatePrice);

