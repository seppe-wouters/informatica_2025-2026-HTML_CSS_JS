const btn = document.querySelector("button")
const divEl = document.querySelector("div")

btn.addEventListener("click", () => {
    let feedback = document.createElement("p")
    feedback.innerHTML = "Ik merkte tijdens de presentatie dat je veel oogcontact maakte met het publiek, wat zorgde voor een goede betrokkenheid. Complimenten voor de snelle afhandeling van dit project; je hebt de deadlines gehaald ondanks de extra drukte"
    
    divEl.replaceChild(feedback, document.querySelector("p"))
})