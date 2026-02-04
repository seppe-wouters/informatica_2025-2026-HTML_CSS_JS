const btnToggle = document.querySelector("#knop")

btnToggle.addEventListener("click", () => {
    if (!btnToggle.classList.contains("butttonToggled")){
        btnToggle.classList.toggle("buttonToggled")
        document.querySelector("p").classList.toggle("hideP")
    } else {
        btnToggle.classList.toggle("buttonToggled")
        document.querySelector("p").classList.toggle("hideP")
    }
})