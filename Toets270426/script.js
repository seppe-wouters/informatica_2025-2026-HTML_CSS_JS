//elementen ophalen
const form = document.querySelector("#form")
const inputNaam = document.querySelector("#inputNaam")
const selectDiersoort = document.querySelector("#selectDiersoort")
const inputLeeftijd = document.querySelector("#inputLeeftijd")
const inputKarakter = document.querySelector("#inputKarakter")
const checkVac = document.querySelector("#checkVac")
const divEl = document.querySelector("#divEl")

//array van dieren aanmaken of ophalen van localstorage
let dieren = JSON.parse(localStorage.getItem("mijnDieren")) || []
toonDieren()

form.addEventListener("submit", function (e) {
    //submit reload pagina niet
    e.preventDefault()
    let vac = checkVac.checked

    //object maken
    let obj = {naam: inputNaam.value, diersoort: selectDiersoort.value, leeftijd: inputLeeftijd.value, karakter: inputKarakter.value, gevaccineerd: vac}

    //in localstorage zetten
    dieren.push(obj)
    localStorage.setItem("mijnDieren" , JSON.stringify(dieren))
    toonDieren()

    //velden leegmaken
    inputNaam.value = ""
    selectDiersoort.value = "Hond"
    inputLeeftijd.value = null
    inputKarakter.value = ""
    checkVac.checked = false
})

//functie tonen op scherm
function toonDieren() {
    divEl.innerHTML = ""
    dieren.forEach(dier => {
        divEl.innerHTML += `
            <div class="card m-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${dier.naam}</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Diersoort: ${dier.diersoort}</li>
                        <li class="list-group-item">Leeftijd: ${dier.leeftijd}</li>
                        <li class="list-group-item">Karakter: ${dier.karakter}</li>
                        <li class="list-group-item">Gevaccineerd: <input type="checkbox" onclick="return false" ${dier.gevaccineerd ? "checked" : ""}></li>
                    </ul>   
                </div>
            </div>
        `
    })
}
