const tekst = document.querySelector("#getal")
let teller = 0;
updateView()

document.querySelector("#plus").addEventListener("click", () => {
    teller += 1;
    updateView()
})

document.querySelector("#reset").addEventListener("click", () => {
    teller = 0
    updateView()
})

function updateView() {
    tekst.innerHTML = `${teller}`
    if (teller >= 10) {
        document.querySelector("#nice").innerHTML = "nice"
    } else {
        document.querySelector("#nice").innerHTML = ""
    }
}