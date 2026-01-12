const pwEl = document.querySelector("#pw")
const res = document.querySelector("#res")

pwEl.addEventListener("input", ()=> {
    if (pwEl.value.length < 6) {
        res.innerHTML = "te kort"
    }
    else if (pwEl.value.length > 6 && pwEl.value.length < 9) {
        res.innerHTML = "oké"
    }
    else if (pwEl.value.length > 10) {
        res.innerHTML = "sterk"
    }
})