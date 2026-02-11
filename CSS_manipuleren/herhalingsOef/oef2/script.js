const btnLevel = document.querySelector("#levelUp")
const btnChangeWeapon = document.querySelector("#changeWeapon")
const btnShowInfo = document.querySelector("#showInfo")
const btnRemoveWeapon = document.querySelector("#removeWeapon")

const character = document.querySelector("#character")

const infoP = document.querySelector("#info")

btnLevel.addEventListener("click", () => {
    character.setAttribute("data-level", `${parseInt(character.getAttribute("data-level")) + 1}`)
})

btnChangeWeapon.addEventListener("click", () => {
    if (character.hasAttribute("data-weapon")) {
        character.setAttribute("data-weapon", "Magic Staff")
    } else {
        character.setAttribute("data-weapon", "Magic Staff")
    }
})

btnShowInfo.addEventListener("click", () => {
    infoP.innerHTML = `<p>Level: ${character.getAttribute("data-level")}</p> <p>Name: ${character.getAttribute("data-Name")}</p> <p>Class: ${character.getAttribute("data-class")}</p> <p>Weapon: ${character.getAttribute("data-weapon")}</p>`
})

btnRemoveWeapon.addEventListener("click", () => {
    if (character.hasAttribute("data-weapon")) {
        character.removeAttribute("data-weapon")
    }
})