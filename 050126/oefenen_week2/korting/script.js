const inputEl = document.querySelector("#prijs")
const OptieEl = document.querySelector("#Kortingen")
const res = document.querySelector("#totaal")

function berekenTotPrijs() {
    let totaalbedrag
    let prijs = parseFloat(inputEl.value)
    switch (OptieEl.value) {
        case "student":
            totaalbedrag = prijs * 0.90
            break
        case "leerkracht":
            totaalbedrag = prijs * 1.10
            break
        case "none":
            totaalbedrag = prijs
            break;
    }

    res.innerHTML = totaalbedrag.toFixed(2)
}

inputEl.addEventListener("change", berekenTotPrijs)
OptieEl.addEventListener("change", berekenTotPrijs)