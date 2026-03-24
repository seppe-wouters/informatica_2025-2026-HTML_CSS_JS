import { producten } from "./producten.js";

const divEl = document.querySelector("#divEl")

producten.forEach(p => {
    divEl.innerHTML += `
            <div class="card col-12 col-md-6 col-lg-4 m-2 " style="width: 18rem;">
                <img src="../img/${p.naam}.png" class="card-img-top" alt="..." style="height: 300px;">
                <div class="card-body">
                    <h5 class="card-title">${p.naam}</h5>
                    <p class="card-text">&euro;${p.prijs}</p>
                    <a class="btn btn-primary">Voeg toe</a>
                </div>
            </div>
    `
})