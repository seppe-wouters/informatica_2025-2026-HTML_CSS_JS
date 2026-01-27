const selectIntresse = document.querySelector("#keuzeIntresse")
const selectWerkstijl = document.querySelector("#keuzeWerkstijl")
const selectPlannen = document.querySelector("#keuzePlannen")
const btnToonBeroep = document.querySelector("#ToonBeroep")

let keuzeIntresse
let keuzeWerkstijl
let keuzePlannen

let NaamBeroep
let UitlegBeroep

let uitlegSD = "Ontwerpt en bouwt computerprogramma’s en apps, en zorgt dat deze goed werken."
let uitlegITP = "Helpt bij het plannen en uitvoeren van IT-projecten en ondersteunt het projectteam."
let uitlegSHM = "Helpt mensen met computer- en softwareproblemen en geeft technische ondersteuning."
let uitlegGV = "Maakt visuele ontwerpen zoals logo’s, posters en websites."
let uitlegCC = "Bedenkt en maakt samen met anderen teksten, beelden of video’s voor websites en sociale media."
let uitlegSMC = "Maakt en plaatst berichten op sociale media om een merk of organisatie te promoten."
let uitlegAM = "Doet administratief werk zoals dossiers bijhouden en afspraken plannen in zorg of onderwijs."
let uitlegBC = "Helpt en ondersteunt mensen bij hun persoonlijke ontwikkeling of dagelijkse activiteiten."
let uitlegEOM = "Ontvangt bezoekers en helpt bij de organisatie en het verloop van evenementen."


function getChoices() {
    keuzeIntresse = selectIntresse.value
    keuzeWerkstijl = selectWerkstijl.value
    keuzePlannen = selectPlannen.value
}

function getBeroep() {
    if (keuzeIntresse == "Technologie") {
        if (keuzeWerkstijl == "AlleenWerken" && keuzePlannen == "GraagPlannen") {
            return "Software Developer"
        } else if (keuzeWerkstijl == "Samenwerken" && keuzePlannen == "GraagPlannen") {
            return "IT Projectmedewerker"
        } else if (keuzePlannen == "LieverSpontaan") {
            return "Support / Helpdesk medewerker"
        }
    } else if (keuzeIntresse == "Creatief") {
        if (keuzeWerkstijl == "AlleenWerken" && keuzePlannen == "GraagPlannen") {
            return "Grafisch vormgever"
        } else if (keuzeWerkstijl == "Samenwerken" && keuzePlannen == "GraagPlannen") {
            return "Content creator (team)"
        } else if (keuzePlannen == "LieverSpontaan") {
            return "Social media creator"
        }
    } else if (keuzeIntresse == "MensenHelpen") {
        if (keuzeWerkstijl == "AlleenWerken" && keuzePlannen == "GraagPlannen") {
            return "Administratief medewerker zorg / onderwijs"
        } else if (keuzeWerkstijl == "Samenwerken" && keuzePlannen == "GraagPlannen") {
            return "Begeleider / coach"
        } else if (keuzePlannen == "LieverSpontaan") {
            return "Event / onthaal medewerker"
        }
    }
}

function toonResultaat() {
    getChoices()
    let beroep = getBeroep()
    switch (beroep) {
        case "Software Developer":
            NaamBeroep.innerHTML = beroep
            UitlegBeroep.innerHTML = uitlegSD
            break;
        case "IT Projectmedewerker":
            NaamBeroep.innerHTML = beroep
            UitlegBeroep.innerHTML = uitlegITP
            break;
        case "Support / Helpdesk medewerker":
            NaamBeroep.innerHTML = beroep
            UitlegBeroep.innerHTML = uitlegSHM
            break;
        case "Grafisch vormgever":
            NaamBeroep.innerHTML = beroep
            UitlegBeroep.innerHTML = uitlegGV
            break;
        case "Content creator (team)":
            NaamBeroep.innerHTML = beroep
            UitlegBeroep.innerHTML = uitlegCC
            break;
        case "Event / onthaal medewerker":
            NaamBeroep.innerHTML = beroep
            UitlegBeroep.innerHTML = uitlegEOM
            break;
        case "Administratief medewerker zorg / onderwijs":
            NaamBeroep.innerHTML = beroep
            UitlegBeroep.innerHTML = uitlegAM
            break;
        case "Begeleider / coach":
            NaamBeroep.innerHTML = beroep
            UitlegBeroep.innerHTML = uitlegBC
            break;
        case "Social media creator":
            NaamBeroep.innerHTML = beroep
            UitlegBeroep.innerHTML = uitlegSMC
            break;
        case "Event / onthaal medewerker":
            NaamBeroep.innerHTML = beroep
            UitlegBeroep.innerHTML = uitlegEOM
            break;
    }
}

btnToonBeroep.addEventListener("click", () => {
    if (!btnToonBeroep.classList.contains("clicked")) {
        div1 = document.createElement("div")
        NaamBeroep = document.createElement("h3")
        UitlegBeroep = document.createElement("p")
        div1.append(NaamBeroep)
        div1.append(UitlegBeroep)
        div1.id = "right"
        document.querySelector(".main").appendChild(div1)
        btnToonBeroep.classList.add("clicked")
    }

    toonResultaat()
})

document.querySelector("#Reset").addEventListener("click", () => {
    document.querySelector("#right").remove()
    selectIntresse.value = "Technologie"
    selectWerkstijl.value = "AlleenWerken"
    selectPlannen.value = "GraagPlannen"
    btnToonBeroep.classList.remove("clicked")
})