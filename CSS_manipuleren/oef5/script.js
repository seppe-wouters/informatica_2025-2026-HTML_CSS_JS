const btnChange = document.querySelector("#btnChangeStatus")
const statusP = document.querySelector("#status")

statusList = ["neutraal", "ok", "waarschuwing"]

btnChange.addEventListener("click", () => {
    let random = Math.floor(Math.random() * 3)
    statusP.classList.replace(statusP.classList, statusList[random])
    statusP.innerHTML = `status: ${statusList[random]}`
})