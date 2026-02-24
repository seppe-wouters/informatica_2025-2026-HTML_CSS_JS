const btn = document.querySelector("#juist")
const divEl = document.querySelector("div")

btn.addEventListener("click", () => {
    let feedback = document.createElement("p")
    feedback.innerHTML = "juist antwoord"

    divEl.replaceChild(feedback, document.querySelector("p"))
})