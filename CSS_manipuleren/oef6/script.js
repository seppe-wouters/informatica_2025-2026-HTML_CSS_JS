const divEl1 = document.querySelector("#div1")
const divEl2 = document.querySelector("#div2")
const divEl3 = document.querySelector("#div3")
const tellerP = document.querySelector("#teller")

let teller = 0

divEl1.addEventListener("click", () => {
    divEl1.classList.toggle("selected")
    if (divEl1.classList.contains("selected")) {
        teller++
    } else {
        teller--
    }
    tellerP.innerHTML = `hvl geselecteerd: ${teller}`
})
divEl2.addEventListener("click", () => {
    divEl2.classList.toggle("selected")
    if (divEl2.classList.contains("selected")) {
        teller++
    } else {
        teller--
    }
    tellerP.innerHTML = `hvl geselecteerd: ${teller}`
})
divEl3.addEventListener("click", () => {
    divEl3.classList.toggle("selected")
    if (divEl3.classList.contains("selected")) {
        teller++
    } else {
        teller--
    }
    tellerP.innerHTML = `hvl geselecteerd: ${teller}`
})