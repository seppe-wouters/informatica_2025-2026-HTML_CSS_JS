const input = document.querySelector("#input")
const res = document.querySelector("#res")

input.addEventListener("input", () => {
    if (input.value == "") {
        res.innerHTML = ""
    }
    else {
        if (input.value % 2 == 0) {
            res.innerHTML = "even"
        } else if (input.value % 3 == 0) {
            res.innerHTML = "deelbaar door 3"
        } else {
            res.innerHTML = "oneven"
        }
    }
})