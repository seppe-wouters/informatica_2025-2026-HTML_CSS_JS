const buttonEl = document.querySelector("button")
const img = document.querySelector("#foto")

let teller = 1

buttonEl.addEventListener("click", () => {
    if (teller <= 16 ) {
        img.setAttribute("src", `./pics/spain-${teller}.jpg`)
        teller++
    } else {
        teller = 1
    }
})