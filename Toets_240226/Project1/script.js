//elems ophalen 
const spanType = document.querySelector("#typeText")
const spanPrice = document.querySelector("#priceText")
const spanFee = document.querySelector("#feeText")
const spanTot = document.querySelector("#totalText")

const sectionTicket = document.querySelector("#ticket")

const btnUpgrade = document.querySelector("#btnUpgrade")
const btnReset = document.querySelector("#btnReset")

const pMessage = document.querySelector("#message")

const inputCoupon = document.querySelector("#couponInput")
const btnCoupon = document.querySelector("#btnApplyCoupon")

//functions
//function voor de spans te updaten
function updateSpans() {
    let price = parseFloat(sectionTicket.getAttribute("data-price"))
    let fee = parseFloat(sectionTicket.getAttribute("data-fee"))

    spanType.innerHTML = sectionTicket.getAttribute("data-type")
    spanPrice.innerHTML = price
    spanFee.innerHTML = fee.toFixed(2)

    if (!sectionTicket.hasAttribute("data-discount")) {
        spanTot.innerHTML = price + fee
    } else {
        let discountPercent = 1 - parseFloat(sectionTicket.getAttribute("data-discount"))
        spanTot.innerHTML = ((price + fee) * discountPercent).toFixed(2)
    }
}

//function voor het ticket te upgraden
function upgradeTicket() {
    if (!sectionTicket.hasAttribute("data-upgraded")) {
        sectionTicket.setAttribute("data-upgraded", "true")
        sectionTicket.setAttribute("data-type", "vip")
        sectionTicket.setAttribute("data-price", "20")
        updateSpans()
        pMessage.innerHTML = "Het ticket is geupgrade naar vip"
    } else {
        pMessage.innerHTML = "het ticket is al reeds geupgrade"
    }
}

//function voor de coupon te activeren
function addCoupon() {
    if (inputCoupon.value == "STUDENT10") {
        sectionTicket.setAttribute("data-discount", "0.10")
        updateSpans()
    } else {
        if (sectionTicket.hasAttribute("data-discount")) {
            sectionTicket.removeAttribute("data-discount")
            updateSpans()
        }
    }
}

//function voor resetten 
function reset() {
    if (sectionTicket.hasAttribute("data-upgraded")) {
        sectionTicket.removeAttribute("data-upgraded")
    }
    if (sectionTicket.hasAttribute("data-discount")) {
        sectionTicket.removeAttribute("data-discount")
    }

    sectionTicket.setAttribute("data-type", "regular")
    sectionTicket.setAttribute("data-price", "12")
    sectionTicket.setAttribute("data-fee", "1.50")
    updateSpans()
    pMessage.innerHTML = ""
}

//event listeners
btnUpgrade.addEventListener("click", upgradeTicket)
btnCoupon.addEventListener("click", addCoupon)
btnReset.addEventListener("click", reset)

