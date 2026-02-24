//elems ophalen
const btnFocus = document.querySelector("#btnFocus")
const btnBreak = document.querySelector("#btnBreak")
const btnBlocked = document.querySelector("#btnBlocked")
const btnDarkmode = document.querySelector("#btnDark")
const body = document.querySelector("body")
const btnChip1 = document.querySelector("#chip1")
const btnChip2 = document.querySelector("#chip2")
const btnChip3 = document.querySelector("#chip3")
const statusText = document.querySelector("#statusText")
const btnReset = document.querySelector("#btnReset")

//eventlisteners voor status knoppen
btnFocus.addEventListener("click", () => {
    btnFocus.classList.add("selected", "mode-focus")
    statusText.innerHTML = "Focus"
    if (btnBreak.classList.contains("selected")) {
        btnBreak.classList.remove("selected")
    }
    if (btnBlocked.classList.contains("selected")) {
        btnBlocked.classList.remove("selected")
    }
    btnBreak.classList.remove("mode-break")
    btnBlocked.classList.remove("mode-blocked")
    blockChips()
})

btnBreak.addEventListener("click", () => {
    statusText.innerHTML = "Break"
    btnBreak.classList.add("selected", "mode-break")
    if (btnFocus.classList.contains("selected")) {
        btnFocus.classList.remove("selected")
    }
    if (btnBlocked.classList.contains("selected")) {
        btnBlocked.classList.remove("selected")
    }
    btnFocus.classList.remove("mode-focus")
    btnBlocked.classList.remove("mode-blocked")
    blockChips()
})

btnBlocked.addEventListener("click", () => {
    statusText.innerHTML = "Blocked"
    btnBlocked.classList.add("selected", "mode-blocked")
    if (btnBreak.classList.contains("selected")) {
        btnBreak.classList.remove("selected")
    }
    if (btnFocus.classList.contains("selected")) {
        btnFocus.classList.remove("selected")
    }
    btnBreak.classList.remove("mode-break")
    btnFocus.classList.remove("mode-focus")
    blockChips()
})

//eventlistener voor dark mode
btnDarkmode.addEventListener("click", () => {
    body.classList.toggle("dark")
})

//function voor de chips te te blokkeren als in blocked modus
let blocked = false
function blockChips() {
    if (btnBlocked.classList.contains("mode-blocked")) {
        btnChip1.classList.add("blocked")
        btnChip2.classList.add("blocked")
        btnChip3.classList.add("blocked")
        blocked = true
    } else {
        btnChip1.classList.remove("blocked")
        btnChip2.classList.remove("blocked")
        btnChip3.classList.remove("blocked")
        blocked = false
    }
}

//eventlisteners voor chips
btnChip1.addEventListener("click", () => {
    blockChips()
    if (!blocked) {
        btnChip1.classList.toggle("selected")
        if (btnChip2.classList.contains("selected")) {
            btnChip2.classList.remove("selected")
        }
        if (btnChip3.classList.contains("selected")) {
            btnChip3.classList.remove("selected")
        }
    }
})

btnChip2.addEventListener("click", () => {
    blockChips()
    if (!blocked) {
        btnChip2.classList.toggle("selected")
        if (btnChip1.classList.contains("selected")) {
            btnChip1.classList.remove("selected")
        }
        if (btnChip3.classList.contains("selected")) {
            btnChip3.classList.remove("selected")
        }
    }
})

btnChip3.addEventListener("click", () => {
    blockChips()
    if (!blocked) {
        btnChip3.classList.toggle("selected")
        if (btnChip2.classList.contains("selected")) {
            btnChip2.classList.remove("selected")
        }
        if (btnChip1.classList.contains("selected")) {
            btnChip1.classList.remove("selected")
        }
    }
})

//eventlistener voor reset knop
btnReset.addEventListener("click", () => {
    statusText.innerHTML = "Kies een status..."
    btnFocus.classList.remove("selected", "mode-focus")
    btnBreak.classList.remove("selected", "mode-break")
    btnBlocked.classList.remove("selected", "mode-blocked")
    blockChips()
    body.classList.remove("dark")
})
