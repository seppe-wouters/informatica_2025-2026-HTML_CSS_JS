let bedrag = 0;
updateView()

document.querySelector("#knop1").addEventListener("click", () => {
    bedrag += 2
    updateView()
})
document.querySelector("#knop2").addEventListener("click", () => {
    bedrag += 5
    updateView()
})
document.querySelector("#knop3").addEventListener("click", () => {
    bedrag += 3
    updateView()
})

document.querySelector("#reset").addEventListener("click", () => {
    bedrag = 0
    updateView()
})



function updateView() {
    document.querySelector("#totaal").innerHTML = bedrag

    if (bedrag > 25) {
        document.querySelector("#GroterDan").innerHTML = "het bedrag is groter dan 25"
    } else {
        document.querySelector("#GroterDan").innerHTML = ""
    }
}