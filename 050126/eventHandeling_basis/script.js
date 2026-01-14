//#region oef 1
document.querySelector("#BtnHallo").addEventListener("click", () => {
    document.querySelector("#hallo").innerHTML = "hallo"
})
//#endregion
//#region oef 2 + 3
let teller = 0;
document.querySelector("#btnTeller").addEventListener("click", () => {
    teller++;
    document.querySelector("#teller").innerHTML = `${teller}`;
})
document.querySelector("#btnTellerReset").addEventListener("click", () => {
    teller = 0
    document.querySelector("#teller").innerHTML = `${teller}`;

})
//#endregion
//#region oef 4 + 5 
document.querySelector("#inputNaam").addEventListener("keydown", ()=> {
    if (event.code == "Enter") {
        if (document.querySelector("#inputNaam").value != "") {
            document.querySelector("#resNaam").innerHTML = `hallo ${document.querySelector("#inputNaam").value}`
        } else {
            document.querySelector("#resNaam").innerHTML = "input leeg"
        }
    }
})
//#endregion
//#region oef 6
const inputEvenOfOneven = document.querySelector("#inputEvenOfOneven")
inputEvenOfOneven.addEventListener("keyup", () => {
    if (event.code == "Enter") {
        if (inputEvenOfOneven.value % 2 == 0) {
            document.querySelector("#resEvenOfOneven").innerHTML = "Even"
        } else {
            document.querySelector("#resEvenOfOneven").innerHTML = "Oneven"
        }
    }
})
//#endregion
//#region oef 7
document.querySelector("#inputIsGetal").addEventListener("change", () => {
    if (isNaN(document.querySelector("#inputIsGetal").value) != true) {
        document.querySelector("#resIsGetal").innerHTML = "Het is een getal"
    } else {
        document.querySelector("#resIsGetal").innerHTML = "Het is geen getal"
    }
})
//#endregion
//#region oef 8
const selection = document.querySelector("#selection")
const resSelection = document.querySelector("#resSelection")
selection.addEventListener("change", () => {
    switch (selection.value) {
        case "optie1":
            resSelection.innerHTML = "optie 1"
            break;
        case "optie2":
            resSelection.innerHTML = "optie 2"
            break;
    }
})
//#endregion
//#region oef 9
const resTekst = document.querySelector("#resTekst")
document.querySelector("#btn1Oef9").addEventListener("click", () => {
    resTekst.innerHTML = "tekst 1"
})
document.querySelector("#btn2Oef9").addEventListener("click", () => {
    resTekst.innerHTML = "tekst 2"
})
//#endregion
//#region oef 10
document.querySelector("#btnOef10").addEventListener("click", () => {
    document.querySelector("#res").innerHTML = document.querySelector("#inputGetal1").value + document.querySelector("#inputGetal2").value
})
//#endregion
