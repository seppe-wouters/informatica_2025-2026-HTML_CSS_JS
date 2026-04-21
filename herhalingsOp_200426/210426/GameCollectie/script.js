const formEl = document.querySelector("#form")
const inputNaam = document.querySelector("#inputNaam")
const selectPlatform = document.querySelector("#selectPlatform")
const selectGenre = document.querySelector("#selectGenre")
const checkUitgespeeld = document.querySelector("#checkUitgespeeld")
const divEl = document.querySelector("#divEl")

let games = JSON.parse(localStorage.getItem("mijnGames")) || []
toonGames()

let id = JSON.parse(localStorage.getItem("gameId")) || 0


formEl.addEventListener("submit", function (e) {
    e.preventDefault()
    id += 1
    let obj = { id: id,naam: inputNaam.value, platform: selectPlatform.value, genre: selectGenre.value, uitgespeeld: checkUitgespeeld.checked }
    games.push(obj)
    
    localStorage.setItem("gameId", JSON.stringify(id))
    localStorage.setItem("mijnGames", JSON.stringify(games))

    toonGames()

    inputNaam.value = ""
    selectPlatform.value = "PS5"
    selectGenre.value = "RPG"
    checkUitgespeeld.checked = false
})


const btns = document.querySelectorAll(".verwijder")
btns.forEach(btn => {
    btn.addEventListener("click", () => {
        let id = btn.dataset.id
        let selectie = {}
        games.forEach(game => {
            if (game.id == id) {
                selectie = game
            }
        });

        games.splice(selectie)
        console.log(games)
        localStorage.setItem("mijnGames", JSON.stringify(games))
        toonGames()
    })
})

function toonGames() {
    divEl.innerHTML = ""
    games.forEach(game => {
        divEl.innerHTML += `
        <div class="card shadow-sm m-1" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${game.naam}</h5>
                    <p class="card-text mb-0">Platform: ${game.platform}</p>
                    <p class="card-text mb-0">Genre: ${game.genre}</p>
                    <p class="card-text mt-0">Uitgespeeld: <input type="checkbox" onclick="return false;" ${game.uitgespeeld ? 'checked' : ''}></p>
                    <button class="btn btn-primary verwijder" data-id="${game.id}">Verwijder</button>
                </div>
            </div>
        `
    })
}
