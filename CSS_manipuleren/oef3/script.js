const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")

btn1.addEventListener("click", () => {
    btn1.classList.add("btnActive")
    if (btn1.classList.contains("btnActive") && !btn2.classList.contains("btnActive") || !btn3.classList.contains("btnActive")) {
        btn2.classList.remove("btnActive")
        btn3.classList.remove("btnActive")
    }
})

btn2.addEventListener("click",()=> {
    btn2.classList.add("btnActive")
    if (!btn1.classList.contains("btnActive") && btn2.classList.contains("btnActive") || !btn3.classList.contains("btnActive")) {
        btn1.classList.remove("btnActive")
        btn3.classList.remove("btnActive")
    }
})

btn3.addEventListener("click", () => {
    btn3.classList.add("btnActive")
    if (!btn1.classList.contains("btnActive") && !btn2.classList.contains("btnActive") || btn3.classList.contains("btnActive")) {
        btn1.classList.remove("btnActive")
        btn2.classList.remove("btnActive")
    }
})